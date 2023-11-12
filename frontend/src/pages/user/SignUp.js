import React, { useState } from "react";
import './SignUp.css';
import { toast } from 'react-toastify';
import { signup } from "../../services/fetch/ApiUtils";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

function Signup(props) {

    const history = useNavigate();
    const location = useLocation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role] = useState('ROLE_USER');

    const validatePhone = (phone) => {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
      }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Number", confirmPassword.length);
        if (password === confirmPassword) {
            const signUpRequest = { name, email, phone, password, confirmPassword, role };
            signup(signUpRequest)
                .then(response => {
                    toast.success("Tài khoản đăng kí thành công. Vui lòng kiểm tra email đễ xác thực.");
                    history("/login");
                })
                .catch(error => {
                    toast.error((error && error.message) || 'Oops! Có điều gì đó xảy ra. Vui lòng thử lại!');
                    history("/signup");
                });
        } else if (name === '' || email === '' || password === '' || confirmPassword === '') {
            toast.error("Vui lòng điền đầy đủ thông tin.")
        } else if (validatePhone(phone) === false) {
            toast.error("Số điện thoại không hợp lệ.")
        } else if (password.length <= 8 || confirmPassword.length <= 8) {
            toast.error("Mật khẩu phải đủ 8 kí tự.")
        }
        else {
            toast.error("Mật khẩu không trùng khớp. Vui lòng nhập lại.")
        }
    }

    if (props.authenticated) {
        return <Navigate
            to={{
                pathname: "/",
                state: { from: location }
            }} />;
    }

    return (
        <>
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 order-md-2">
                            <img src="../../assets/img/undraw_file_sync_ot38.svg" alt="Image" className="img-fluid" />
                        </div>
                        <div className="col-md-6 contents">
                            <div className="row justify-content-center">
                                <div className="col-md-8">
                                    <div className="mb-4">
                                        <h3>Sign Up <a href="/" style={{ textDecoration: 'none' }}><img src="../../assets/img/logo.png" alt="" /></a></h3>
                                        <p className="mb-4">If you have a account. <a href="/login">Sign in</a></p>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group first">
                                            <span>Email</span>
                                            <input type="email" className="form-control" id="username" name="email"
                                                value={email} onChange={(e) => setEmail(e.target.value)} required />

                                        </div>
                                        <div className="form-group first">
                                            <span>Phone Number</span>
                                            <input type="text" className="form-control" id="username" name="phone"
                                                value={phone} onChange={(e) => setPhone(e.target.value)} required />

                                        </div>
                                        <div className="form-group first">
                                            <span>Fullname</span>
                                            <input type="text" className="form-control" id="username"
                                                name="name"
                                                value={name} onChange={(e) => setName(e.target.value)} required />


                                        </div>
                                        <div className="form-group last mb-4">
                                            <span>Password</span>
                                            <input type="password" className="form-control" id="password"
                                                name="password"
                                                value={password} onChange={(e) => setPassword(e.target.value)} />

                                        </div>
                                        <div className="form-group last mb-4">
                                            <span>Confirm Password</span>
                                            <input type="password" className="form-control" id="password"
                                                name="confirmPassword"
                                                value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

                                        </div>


                                        <input type="submit" value="Sign Up" className="btn text-white btn-block" style={{ background: "#38d39f" }}/>

                                    </form>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;