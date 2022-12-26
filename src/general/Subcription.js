import React from 'react'
import sub_item from '../assets/images/subscription-item_pic.png'
import sub_pic from '../assets/images/subscription_pic.png'
import monthly from '../assets/images/monthly.png'
import Specified from '../assets/images/Specified.png'



const Subcription = () => {
  return (
    <div className="subscribtion">
            <div className="subscription__title">FLOWER SUBSCRIPTION</div>
            <div className="subscription__subtitle">Our best deals</div>
            <div className="subscription__detail">Up to 30% savings + free shipping on every subscription order. (Starting at just $40/month!)</div>
            <div className="subscription__item-control">
                <div className="subscription__item">
                    <img src={sub_item} className="subscription__item-img"></img>
                    <div className="subscription__item-title">Weeky</div>
                    <div className="subscription__item-des">
                        <ul>
                            <li>Free delivery</li>
                            <li>Any available in shop</li>
                            <li>Beautiful package</li>
                            <li>Saving 15%</li>
                        </ul>
                    </div>
                </div>
                <div className="subscription__item">
                    <img src={monthly} className="subscription__item-img"></img>
                    <div className="subscription__item-title">Monthly</div>
                    <div className="subscription__item-des">
                    <ul>
                            <li>Free delivery</li>
                            <li>Any available in shop</li>
                            <li>Beautiful package</li>
                            <li>Saving 30%</li>
                        </ul>
                    </div>
                </div>
                <div className="subscription__item">
                    <img src={Specified} className="subscription__item-img"></img>
                    <div className="subscription__item-title">Specified day</div>
                    <div className="subscription__item-des">
                    <ul>
                            <li>Free delivery</li>
                            <li>Any available in shop</li>
                            <li>Beautiful package</li>
                            <li>Saving 20-40%</li>
                        </ul>
                    </div>
                </div>
            </div>
                <img src={sub_pic} className="subscription__img"></img>
        </div>
  )
}

export default Subcription