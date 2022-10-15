import { Fragment } from 'react'
import logo from '../assets/images/logo.png'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import loginLogo from '../assets/images/main_login_pic.png'
import ConfirmRegister from './ConfirmRegister'
import googleLogo from '../assets/images/google_icon.png'
import Footer from '../general/Footer'
import Validator from '../general/Validator'
import fontawesome from '../assets/font/fontawesome-free-6.2.0-web/css/all.min.css'
export default function Register(props) {
    const userApi = 'http://localhost:8080/api/register';
    const navigate = useNavigate();
    
    setTimeout(() => {
        Validator('#form-2', {
            onSubmit: function(data){
                console.log('Call fetch function');
                fetch(userApi, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(
                        {
                            'login': data.email,
                            'password': data.password
                        }
                    ),
                })
                .then((response) => {
                    console.log(response.status);
                    if (response.status === 201) {
                        console.log('Response success !!!');
                        navigate('/confirm');
                        return response.json();
                }
                else {
                    console.log('Fetch Failed')
                }
            })
                .then((response) => {
                    // console.log('Response body: ' + response.id_token);
                });
            }
        });
    }, 10)
    return (
        <Fragment>
            {/* header */}
            <header className="header">
                <div className="grid wide header__control">
                    <ul className="header__1">
                        <li className="list__logo">
                            <a className="header__logo-link" href="/#">
                                <img className="header__img" src={logo} alt="Logo" />
                            </a>
                        </li>
                        <li className="list__login">
                            <div className="header__text">SIGN UP</div>
                        </li>
                    </ul>
                    <h2 className="header__main-shop-name">Flower Make Your Day</h2>
                    <div className="header__help">
                        <a className="help__text" href="/#">Need help?</a>
                    </div>
                </div>
            </header>
            {/* container */}
            <div className="container">
                <div className="grid wide">
                <div className="row">
                        <div className="l-6 img__control">
                            <img className="img__login" src={loginLogo} alt="" />
                        </div>
                        <div className="l-5 form__control">
                            <form action="" className="auth-form" id="form-2">
                                <h4 className="auth-form__title">FLOWER CORNER</h4>
                                <p className="auth-form__des">Create an account</p>

                                <div className="auth-form__group">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input id="email" name="email" rules="required|email" type="text" placeholder="Enter Email" className="auth-form__input" />
                                    <span className="form-message"></span>
                                </div>

                                <div className="auth-form__group">
                                    <label htmlFor="password" className="form-label">Enter Password</label>
                                    <input id="password" name="password" rules="required|min:6" type="password" placeholder="Enter Password" className="auth-form__input" />
                                    <span className="form-message"></span>
                                </div>
                                {/* <input type="submit" value="Submit" /> */}
                                <button className="btn btn__auth">Sign Up</button>
                            </form>

                            <div className="auth-form__aside">
                                <p className="auth-form__text">Already have an account?
                                    <Link to="/login" className="auth-form__text-link">Sign In</Link>
                                </p>
                            </div>
                            <p className="auth-form__or">or</p>
                            <div className="auth-form__social">
                                <a className="auth-form__social-link" href="/#">
                                    <i className="fab fa-facebook-square auth-form__socials-icon-fb"></i>
                                    <span className="auth-form__label">Sign up with Facebook</span>
                                </a>
                                <a className="auth-form__social-link" href="/#">
                                    <img src={googleLogo} alt="google icon" className="auth-form__socials-icon-gg" />
                                    <span className="auth-form__label">Sign up with Google</span>
                                </a>
                                <a className="auth-form__social-link" href="/#">
                                    <i className="fab fa-apple auth-form__socials-icon-ap"></i>
                                    <span className="auth-form__label">Sign up with Apple</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <Footer/>
        </Fragment>
    )
}