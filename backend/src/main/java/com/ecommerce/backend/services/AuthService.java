package com.ecommerce.backend.services;





import com.ecommerce.backend.domain.payload.request.*;
import com.ecommerce.backend.domain.payload.response.MessageResponse;
import org.springframework.web.multipart.MultipartFile;


import javax.mail.MessagingException;
import java.io.IOException;
import java.net.URI;

public interface AuthService {
    URI registerAccount(SignUpRequest signUpRequest) throws MessagingException, IOException;

    String login(LoginRequest loginRequest);

    MessageResponse forgotPassword(EmailRequest emailRequest) throws MessagingException, IOException;

    MessageResponse resetPassword(ResetPasswordRequest resetPasswordRequest);

    MessageResponse confirmedAccount(EmailRequest emailRequest);

    MessageResponse changePassword(ChangePasswordRequest changePasswordRequest);

    MessageResponse changeImage(MultipartFile file);

    MessageResponse lockAccount(Long id);

    MessageResponse uploadProfile(MultipartFile file, String zalo, String facebook, String phone, String address) throws IOException;
}
