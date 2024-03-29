package com.ecommerce.backend.services.impl;


import com.ecommerce.backend.domain.enums.AuthProvider;
import com.ecommerce.backend.domain.enums.RoleName;
import com.ecommerce.backend.domain.enums.UserRankConstant;
import com.ecommerce.backend.domain.models.Role;
import com.ecommerce.backend.domain.models.User;
import com.ecommerce.backend.domain.models.UserRank;
import com.ecommerce.backend.domain.payload.request.*;
import com.ecommerce.backend.domain.payload.response.MessageResponse;
import com.ecommerce.backend.exception.BadRequestException;
import com.ecommerce.backend.repository.RoleRepository;
import com.ecommerce.backend.repository.UserRankRepository;
import com.ecommerce.backend.repository.UserRepository;
import com.ecommerce.backend.secruity.TokenProvider;
import com.ecommerce.backend.services.AuthService;
import com.ecommerce.backend.services.BaseService;
import com.ecommerce.backend.services.FileStorageService;
import org.apache.activemq.kaha.impl.index.BadMagicException;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.io.File;
import java.io.IOException;
import java.net.URI;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.util.Base64;
import java.util.Collections;
import java.util.Objects;

@Service
public class AuthServiceImpl extends BaseService implements AuthService {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    UserRankRepository userRankRepository;


    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private TokenProvider tokenProvider;

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private FileStorageService fileStorageService;


    @Override
    public URI registerAccount(SignUpRequest signUpRequest) throws MessagingException, IOException {
        if(userRepository.existsByEmail(signUpRequest.getEmail())) {
            throw new BadRequestException("Email đã được sử dụng!!");
        }

        if (userRepository.findByPhone(signUpRequest.getPhone()).isPresent()) {
            throw new BadMagicException("Số điện thoại đã được sử dụng.");
        }

        if (!signUpRequest.getPassword().equals(signUpRequest.getConfirmPassword())) {
            throw new BadRequestException("Mật khẩu không khớp. Vui lòng thử lại.");
        }
        
        if (!signUpRequest.getEmail().endsWith("@gmail.com")) {
        	throw new BadRequestException("Định dạng email không hợp lệ. Vui lòng thử lại.");
        }

        // Creating user's account
        User user = new User();
        User result = null;
        user.setName(signUpRequest.getName());
        user.setEmail(signUpRequest.getEmail());
        user.setPassword(signUpRequest.getPassword());
        user.setProvider(AuthProvider.local);
        user.setIsLocked(false);
        user.setIsConfirmed(true);

        UserRank userRank = userRankRepository.findByRankValue(UserRankConstant.USER_RANK_FRESHER.getValue())
                .orElseThrow(() -> new IllegalArgumentException("User Rank not set."));

        user.setUserRank(userRank);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        sendEmailConfirmed(signUpRequest.getEmail(),signUpRequest.getName());

        if (RoleName.ROLE_USER.equals(signUpRequest.getRole())) {
            Role userRole = roleRepository.findByName(RoleName.ROLE_USER)
                    .orElseThrow(() -> new IllegalArgumentException("User Role not set."));

            user.setRoles(Collections.singleton(userRole));
            result = userRepository.save(user);

        } else if(RoleName.ROLE_RENTALER.equals(signUpRequest.getRole())){
            Role userRole = roleRepository.findByName(RoleName.ROLE_RENTALER)
                    .orElseThrow(() -> new IllegalArgumentException("User Role not set."));
            user.setAddress(signUpRequest.getAddress());
            user.setPhone(signUpRequest.getPhone());
            user.setRoles(Collections.singleton(userRole));
            result = userRepository.save(user);
        } else {
            throw new IllegalArgumentException("Bạn không có quyền tạo tài khoản!!!!");
        }

        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/user/me")
                .buildAndExpand(result.getId()).toUri();
        return location;
    }

    @Override
    public String login(LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getEmail(),
                        loginRequest.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        return tokenProvider.createToken(authentication);
    }

    @Override
    public MessageResponse forgotPassword(EmailRequest emailRequest) throws MessagingException, IOException {
        userRepository.findByEmail(emailRequest.getEmail()).orElseThrow(() -> new BadRequestException("Email này không tồn tại."));
        sendEmailFromTemplate(emailRequest.getEmail());
        return MessageResponse.builder().message("Gửi yêu cầu thành công.").build();
    }

    @Override
    public MessageResponse resetPassword(ResetPasswordRequest resetPasswordRequest) {
        if (!resetPasswordRequest.getPassword().equals(resetPasswordRequest.getConfirmedPassword())) {
            throw new BadRequestException("Mật khẩu không trùng khớp.");
        }
        User user = userRepository.findByEmail(resetPasswordRequest.getEmail()).orElseThrow(() -> new BadRequestException("Email này không tồn tại."));
        user.setPassword(resetPasswordRequest.getPassword());
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        return MessageResponse.builder().message("Thay đổi mật khẩu mới thành công").build();
    }

    @Override
    public MessageResponse confirmedAccount(EmailRequest emailRequest) {
        User user = userRepository.findByEmail(emailRequest.getEmail()).orElseThrow(() -> new BadRequestException("Email này không tồn tại."));
        user.setIsConfirmed(true);
        userRepository.save(user);
        return MessageResponse.builder().message("Tài khoản đã được xác thực. Vui lòng đăng nhập").build();
    }

    @Override
    public MessageResponse changePassword(ChangePasswordRequest changePasswordRequest) {
        User user = userRepository.findById(getUserId()).orElseThrow(() -> new BadRequestException("Tài khoảng không tồn tại"));
        boolean passwordMatch = BCrypt.checkpw(changePasswordRequest.getOldPassword(), user.getPassword());
        if (!passwordMatch) {
            throw new BadRequestException("Mật khẩu cũ không chính xác");
        }
        if (!changePasswordRequest.getNewPassword().equals(changePasswordRequest.getConfirmPassword())) {
            throw new BadRequestException("Mật khẩu không trùng khớp");
        }

        user.setPassword(passwordEncoder.encode(changePasswordRequest.getNewPassword()));
        userRepository.save(user);
        return MessageResponse.builder().message("Cập nhật mật khẩu thành công").build();
    }

    @Override
    public MessageResponse changeImage(MultipartFile file) {
        User user = userRepository.findById(getUserId()).orElseThrow(() -> new BadRequestException("Tài khoảng không tồn tại"));
        if (Objects.nonNull(file)) {
            String image = fileStorageService.storeFile(file).replace("photographer/files/", "");
            user.setImageUrl("http://localhost:8080/image/" + image);
        }
        userRepository.save(user);
        return MessageResponse.builder().message("Thay ảnh đại diện thành công.").build();
    }

    @Override
    public MessageResponse lockAccount(Long id) {
        User user = userRepository.findById(id).orElseThrow(() -> new BadRequestException("Tài khoảng không tồn tại"));
        if (user.getIsLocked().equals(true)) {
            user.setIsLocked(false);
        } else {
            user.setIsLocked(true);
        }
        userRepository.save(user);
        return MessageResponse.builder().message("Cập nhật trạng thái của tài khoản thành công").build();
    }

    @Override
    public MessageResponse uploadProfile(MultipartFile file, String zalo, String facebook, String phone, String address) throws IOException {
        User user = userRepository.findById(getUserId()).orElseThrow(() -> new BadRequestException("Tài khoảng không tồn tại"));
        user.setZaloUrl(zalo);
        user.setFacebookUrl(facebook);
        user.setAddress(address);
        user.setPhone(phone);
        if(Objects.nonNull(file)){
            String encodedString = Base64.getEncoder().encodeToString(file.getBytes());
            user.setImageUrl("data:image/png;base64, " + encodedString);
        }
//        if (Objects.nonNull(file)) {
//            String image = fileStorageService.storeFile(file).replace("photographer/files/", "");
//            user.setImageUrl("http://localhost:8080/image/" + image);
//        }
        userRepository.save(user);
        return MessageResponse.builder().message("Thay thông tin cá nhân thành công.").build();
    }

    public void sendEmailFromTemplate(String email) throws MessagingException, IOException {

        MimeMessage message = mailSender.createMimeMessage();
        message.setFrom(new InternetAddress("Khanhak54@gmail.com"));
        message.setRecipients(MimeMessage.RecipientType.TO, email);
        message.setSubject("Yêu cầu cấp lại mật khẩu!!!");

        // Read the HTML template into a String variable
        String htmlTemplate = readFile("forgot-password.html");

        htmlTemplate = htmlTemplate.replace("EMAILINFO", email);

        // Set the email's content to be the HTML template
        message.setContent(htmlTemplate, "text/html; charset=utf-8");

        mailSender.send(message);
    }

    public void sendEmailConfirmed(String email,String name) throws MessagingException, IOException {
        MimeMessage message = mailSender.createMimeMessage();
        message.setFrom(new InternetAddress("Khanhak54@gmail.com"));
        message.setRecipients(MimeMessage.RecipientType.TO, email);
        message.setSubject("Xác thực tài khoản.");

        // Read the HTML template into a String variable
        String htmlTemplate = readFileConfirmed("confirm-email.html");

        htmlTemplate = htmlTemplate.replace("NAME", name);
        htmlTemplate = htmlTemplate.replace("EMAIL", email);

        // Set the email's content to be the HTML template
        message.setContent(htmlTemplate, "text/html; charset=utf-8");

        mailSender.send(message);
    }

    public static String readFile(String filename) throws IOException {
        File file = ResourceUtils.getFile("classpath:forgot-password.html");
        byte[] encoded = Files.readAllBytes(file.toPath());
        return new String(encoded, StandardCharsets.UTF_8);
    }

    public static String readFileConfirmed(String filename) throws IOException {
        File file = ResourceUtils.getFile("classpath:confirm-email.html");
        byte[] encoded = Files.readAllBytes(file.toPath());
        return new String(encoded, StandardCharsets.UTF_8);
    }
}

