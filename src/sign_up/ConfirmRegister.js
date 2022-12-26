import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import loginLogo from '../assets/images/main_login_pic.png'
import googleLogo from '../assets/images/google_icon.png'
import Footer from '../general/Footer'
import Validator from '../general/Validator'
import fontawesome from '../assets/font/fontawesome-free-6.2.0-web/css/all.min.css'
export default function ConfirmRegister(props) {
    var userApi = 'http://localhost:8080/api/activate?key=';

    setTimeout(() => {
        Validator('#form-3', {
            onSubmit: function (data) {
                userApi = userApi + data.otp;
                console.log(userApi);
                console.log('Call fetch function'); 
                fetch(userApi, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                    .then((response) => {
                        if (response.status === 200) {
                            console.log('Response success !!!');
                            return response.json();
                        }
                        else {
                           alert('OTP is not correct')
                        }
                    })
                    .then((response) => {
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
                            <form action="" className="auth-form" id="form-3">
                                <h4 className="auth-form__title">FLOWER CORNER</h4>
                                <p className="auth-form__des">Create an account</p>

                                <p>We have sent an email with a confirmation link to your email address. In order to complete the sign-up process, please click the confirmation link.</p>

                                <div className="auth-form__group">
                                    <label htmlFor="otp" className="form-label">Enter OTP</label>
                                    <input id="otp" name="otp" rules="required|min:6|number" type="text" placeholder="Enter OTP" className="auth-form__input" />
                                    <span className="form-message"></span>
                                </div>
                                <button className="btn btn__auth">Confirm</button>
                            </form>

                            <div className="auth-form__aside">
                                <p className="auth-form__text">Already have an account?
                                    <Link to="/login" className="auth-form__text-link">Sign In</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <Footer />
        </Fragment>
    )
}