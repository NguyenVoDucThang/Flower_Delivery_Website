import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Fragment } from 'react'
import { useState } from 'react'

import Logo from '../assets/images/logo.png'
import fontawesome from '../assets/font/themify-icons/themify-icons.css'
export default function Header(props) {
    const navigate = useNavigate();

    var userdata = props.userdata
    if (userdata != null) {
        userdata = userdata.slice(0, props.userdata.indexOf('@'));
    }
    // const [logout, setLogout] = useState(false)
    function hadleLogout() {
        localStorage.clear();
        console.log('logout')
        navigate('/', {
            state: {
                username: null,
            }
        });
        // setLogout(true);
    }
    if (!userdata) {
        return (
            <Fragment>
                <header className="homepage_header">
                    <div className="grid wide homepage_header">
                        <div className="row">
                            <div className="header__img">
                                <a href="/" className="header__logo-link">
                                    <img className="header__img" src={Logo} alt="Logo" />
                                </a>
                            </div>
                            <div className="header__main">
                                <h2 className="header__main-shop-name">Flower Make Your Day</h2>
                                <div className="header__main-search">
                                    <input type="text" className="header__main-search-input" placeholder="Search product, code, style..." />
                                    <button className="header__main-search-btn">
                                        <i className="header__main-search-btn-icon fa-solid fa-magnifying-glass"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="header__auth">
                                <Link to='/login'>
                                    <button className="header__auth-btn">Sign In</button>
                                </Link>
                            </div>
                            <div className="header__cart">
                                <i className="header__cart-icon ti-shopping-cart"></i>
                            </div>
                        </div>
                        <hr />
                    </div>
                </header>
            </Fragment>
        )
    }
    else {
        return (
            <Fragment>
                <header className="homepage_header">
                    <div className="grid wide homepage_header">
                        <div className="row">
                            <div className="header__img">
                                <a href="/" className="header__logo-link">
                                    <img className="header__img" src={Logo} alt="Logo" />
                                </a>
                            </div>
                            <div className="header__main">
                                <h2 className="header__main-shop-name">Flower Make Your Day</h2>
                                <div className="header__main-search">
                                    <input type="text" className="header__main-search-input" placeholder="Search product, code, style..." />
                                    <button className="header__main-search-btn">
                                        <i className="header__main-search-btn-icon fa-solid fa-magnifying-glass"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="header__navbar-user header__navbar-item">
                                <span className="header__navbar-user-name">{userdata}</span>
                                <ul className="header__navbar-user-menu">
                                    <li className="header__navbar-user-item">
                                        {/* <a href="">Tài khoản của tôi</a> */}
                                        <button className='header__navbar-user-item-button'>My account</button>
                                    </li>
                                    <li className="header__navbar-user-item">
                                        {/* <a href="">Đơn mua</a> */}
                                        <button className='header__navbar-user-item-button'>Purchase order</button>
                                    </li>
                                    <li className="header__navbar-user-item">
                                        {/* <a href="">Đăng xuất</a> */}
                                        <button className='header__navbar-user-item-button' onClick={hadleLogout}>Log out</button>
                                    </li>
                                </ul>
                            </div>
                            <div className="header__cart">
                                <i className="header__cart-icon ti-shopping-cart"></i>
                            </div>
                        </div>
                        <hr />
                    </div>
                </header>
            </Fragment>
        )
    }

}