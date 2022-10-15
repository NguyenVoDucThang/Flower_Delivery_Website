import { Fragment } from 'react'
import Logo from '../assets/images/logo.png'
import visa from '../assets/images/visa.png'
import master from '../assets/images/master.png'
import amex from '../assets/images/amex.png'
import paypal from '../assets/images/paypal.png'
import applepay from '../assets/images/applepay.png'
import googlepay from '../assets/images/googlepay.png'
import fontawesome from '../assets/font/fontawesome-free-6.2.0-web/css/all.min.css'

export default function Footer(props) {
    return (

        <Fragment>
            <div className="footer">
                <div className="grid wide">
                    <div className="row">

                        <div className="l-2">
                            <div className="footer__img">
                                <img className="footer__img" src={Logo} alt="Logo" />
                            </div>
                        </div>

                        <div className="l-2">
                            <h4 className="footer__title">About us</h4>
                            <ul className="footer__list">
                                <li className="footer__item"><a className="footer__item-link" href="/#">Our story</a></li>
                                <li className="footer__item"><a className="footer__item-link" href="/#">Sustainability</a></li>
                                <li className="footer__item"><a className="footer__item-link" href="/#">Careers</a></li>
                                <li className="footer__item"><a className="footer__item-link" href="/#">Our tech blog</a></li>
                                <li className="footer__item"><a className="footer__item-link" href="/#">Modern Slavery Act</a></li>
                            </ul>
                        </div>

                        <div className="l-2">
                            <h4 className="footer__title">Our flowers & plants</h4>
                            <ul className="footer__list">
                                <li className="footer__item"><a className="footer__item-link" href="/#">Flower care</a></li>
                                <li className="footer__item"><a className="footer__item-link" href="/#">Plant care</a></li>
                                <li className="footer__item"><a className="footer__item-link" href="/#">Blog</a></li>
                                <li className="footer__item"><a className="footer__item-link" href="/#">Flower subscriptions</a></li>
                            </ul>
                        </div>

                        <div className="l-2">
                            <h4 className="footer__title">Need help</h4>
                            <ul className="footer__list">
                                <li className="footer__item"><a className="footer__item-link" href="/#">Contact Us</a></li>
                                <li className="footer__item"><a className="footer__item-link" href="/#">Delivery</a></li>
                                <li className="footer__item"><a className="footer__item-link" href="/#">Recycle your packaging</a></li>
                                <li className="footer__item"><a className="footer__item-link" href="/#">Reviews</a></li>
                                <li className="footer__item"><a className="footer__item-link" href="/#">Sitemap</a></li>
                            </ul>
                        </div>

                        <div className="l-2">
                            <h4 className="footer__title">Discounts & offers</h4>
                            <ul className="footer__list">
                                <li className="footer__item"><a className="footer__item-link" href="/#">Keyworker discount</a></li>
                                <li className="footer__item"><a className="footer__item-link" href="/#">Student discount</a></li>
                                <li className="footer__item"><a className="footer__item-link" href="/#">Refer a friend</a></li>
                            </ul>
                        </div>

                        <div className="l-2">
                            <h4 className="footer__title">International sites</h4>
                            <ul className="footer__list">
                                <li className="footer__item"><a className="footer__item-link" href="/#">Bergamotte - France</a></li>
                                <li className="footer__item"><a className="footer__item-link" href="/#">Bloom & Wild Germany</a></li>
                                <li className="footer__item"><a className="footer__item-link" href="/#">Bloom & Wild Ireland</a></li>
                                <li className="footer__item"><a className="footer__item-link" href="/#">Bloom & Wild Austria</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row mt16">
                        <div className="l-4">
                            <img className='payment' src={visa} alt='visa' />
                            <img className='payment' src={master} alt='master' />
                            <img className='payment' src={amex} alt='amex' />
                            <img className='payment' src={paypal} alt='paypal' />
                            <img className='payment' src={applepay} alt='applepay' />
                            <img className='payment' src={googlepay} alt='googlepay' />
                        </div>
                        <div className='l-8 copyright'>
                            <p className='copyright_content'>© 2022 Flower Corner. All rights reserved.</p>
                            <p className='copyright_content'>Privacy policy (Terms & Conditions)</p>
                        </div>
                    </div>
                    <div className="row mt16 mb16">
                        <div className="l-3">
                            <div className='social__contact'>
                                <b>Email us here</b>
                                <br />
                                <i className="social__contact-icon fa-brands fa-instagram"></i>
                                <i className="social__contact-icon fa-brands fa-facebook"></i>
                                <i className="social__contact-icon fa-brands fa-twitter"></i>
                            </div>
                        </div>
                        <div className='l-9 cookie'>
                            <a href='/#' className='mt16'>
                                <u className='cookie_content'>Cookie policy</u>
                            </a>
                            <a href='/#' className='mt16'>
                                <u className='cookie_content'>Cookie preferences</u>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}