import React from 'react'
import wan1 from '../assets/images/want_pic1.png'
import wan2 from '../assets/images/want_pic2.png'
import wan3 from '../assets/images/want_pic3.png'
import wan4 from '../assets/images/want_pic4.png'
import wan5 from '../assets/images/want_pic5.png'
import wan6 from '../assets/images/want_pic6.png'
import { useNavigate } from 'react-router-dom'


const WhatWant = (props) => {
    var userdata = props.userdata

    const navigate = useNavigate();
    function handleGoShopping() {
        navigate('/shopping', {
            state: {
                username: userdata,
            }
        });
    }
    return (
        <div className="grid wide">
            <div className="WDYW">
                <div className="WDYW__title">WHAT DO YOU WANT?</div>
                <div className="WDYW__items">
                    <div className="WDYW_item">
                        <button onClick={handleGoShopping} className="header__logo-button">
                            <img src={wan1} alt="" className="WDYW_item-img" />
                        </button>
                        <div className="WDYW_item-name">All flowers</div>
                    </div>
                    <div className="WDYW_item">
                        <button onClick={handleGoShopping} className="header__logo-button">
                            <img src={wan2} alt="" className="WDYW_item-img" />
                        </button>
                        <div className="WDYW_item-name">New in</div>
                    </div>
                    <div className="WDYW_item">
                        <button onClick={handleGoShopping} className="header__logo-button">
                            <img src={wan3} alt="" className="WDYW_item-img" />
                        </button>
                        <div className="WDYW_item-name">Next day delivery</div>
                    </div>
                    <div className="WDYW_item">
                        <button onClick={handleGoShopping} className="header__logo-button">
                            <img src={wan4} alt="" className="WDYW_item-img" />
                        </button>
                        <div className="WDYW_item-name">Birthday</div>
                    </div>
                    <div className="WDYW_item">
                        <button onClick={handleGoShopping} className="header__logo-button">
                            <img src={wan5} alt="" className="WDYW_item-img" />
                        </button>
                        <div className="WDYW_item-name">Indoor</div>
                    </div>
                    <div className="WDYW_item">
                        <button onClick={handleGoShopping} className="header__logo-button">
                            <img src={wan6} alt="" className="WDYW_item-img" />
                        </button>
                        <div className="WDYW_item-name">Decoration</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWant