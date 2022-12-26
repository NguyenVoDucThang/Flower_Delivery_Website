import { Fragment } from 'react'
import logo from '../assets/images/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import loginLogo from '../assets/images/main_login_pic.png'
import googleLogo from '../assets/images/google_icon.png'
import Footer from '../general/Footer'
import Validator from '../general/Validator'
import fontawesome from '../assets/font/fontawesome-free-6.2.0-web/css/all.min.css'
export default function Login(props) {
    const userApi = 'http://localhost:8080/api/authenticate';
    const navigate = useNavigate();
    setTimeout(() => {
        Validator('#form-1', {
            onSubmit: function(data){
                console.log('Call fetch function');
                fetch(userApi, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(
                        {
                            'username': data.email,
                            'password': data.password
                        }
                    ),
                })
                .then((response) => {
                    if (response.status === 200) {
                        console.log('Response success !!!');
                        if (data.email.includes("voa") && data.password.includes("admin")) {
                            navigate('/admin');
                        }
                        else {
                            navigate('/', {
                                state: {
                                    username: data.email,
                                }
                            });
                            return response.json();
                        }
                }
                else {
                    alert('Wrong email or password')
                }
            })
                .then((response) => {
                    try {
                        localStorage.setItem('api', response.id_token);
                        console.log('Response body: ' + response.id_token);
                    } catch (error) {
                        console.log('Response body: ' + error.message);
                    }

                });
            }
        });
    }, 10)
  
    return (
        <Fragment>
            <header className="header">
                <div className="grid wide header__control">
                    <ul className="header__1">
                        <li className="list__logo">
                            <a className="header__logo-link" href="/#">
                                <img className="header__img" src={logo} alt="Logo" />
                            </a>
                        </li>
                        <li className="list__login">
                            <div className="header__text">SIGN IN</div>
                        </li>
                    </ul>
                    <h2 className="header__main-shop-name">Flower Make Your Day</h2>
                    <div className="header__help">
                        <a className="help__text" href="/#">Need help?</a>
                    </div>
                </div>
            </header>
            <div className="container">
                <div className="grid wide">
                    <div className="row">
                        <div className="l-6 img__control">
                            <img className="img__login" src={loginLogo} alt="" />
                        </div>
                        <div className="l-5 form__control">
                            <form action="" className="auth-form" id="form-1">
                                <h4 className="auth-form__title">FLOWER CORNER</h4>
                                <p className="auth-form__des">Login to your account</p>

                                <div className="auth-form__group">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input id="email" name="email" rules="required|email" type="text" placeholder="Enter Email" className="auth-form__input" />
                                    <span className="form-message"></span>
                                </div>

                                <div className="auth-form__group">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input id="password" name="password" rules="required|min:6" type="password" placeholder="Enter password" className="auth-form__input" />
                                    <span className="form-message"></span>
                                </div>
                                <button type='submit' className="btn btn__auth">Sign In</button>
                            </form>

                            <div className="auth-form__aside">
                                <p className="auth-form__text">Don't have an account?
                                    <Link to="/register" className="auth-form__text-link">Sign Up</Link>
                                </p>
                            </div>
                            <p className="auth-form__or">or</p>
                            <div className="auth-form__social">
                                <a className="auth-form__social-link" href="/#">
                                    <i className="fab fa-facebook-square auth-form__socials-icon-fb"></i>
                                    <span className="auth-form__label">Sign in with Facebook</span>
                                </a>
                                <a className="auth-form__social-link" href="/#">
                                    <img src={googleLogo} alt="google icon" className="auth-form__socials-icon-gg" />
                                    <span className="auth-form__label">Sign in with Google</span>
                                </a>
                                <a className="auth-form__social-link" href="/#">
                                    <i className="fab fa-apple auth-form__socials-icon-ap"></i>
                                    <span className="auth-form__label">Sign in with Apple</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );

}