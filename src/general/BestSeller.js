import React from 'react'
import best1 from '../assets/images/bestSeller_pic1.png'
import best2 from '../assets/images/bestSeller_pic2.png'
import best3 from '../assets/images/bestSeller_pic3.png'
const BestSeller = () => {
    return (
        <div className="grid wide">
            <div className="best-seller_title">
                OUR BEST SELLER
            </div>
            <div className="row best-seller__control">
                <div className="l-4 best-seller__item">
                    <img className="best-seller__item-img" src={best1}></img>
                    <div className="best-seller__item-des">
                        PF26 - Gift From My Heart (Red) - Ribbon Hand Bouquet
                    </div>
                    <div className="best-seller__item-price">
                        <div className="first-price">$59.99</div>
                        <div className="real-price">$49.99</div>
                    </div>
                    <div className="best-seller__item-btn">
                        <button className="btn_view-detail">Add to cart</button>
                    </div>
                </div>
                <div className="l-4 best-seller__item">
                    <img className="best-seller__item-img" src={best2}></img>
                    <div className="best-seller__item-des">
                        PF28- Gift From My Heart (Yellow) - Ribbon Hand Bouquet
                    </div>
                    <div className="best-seller__item-price">
                        <div className="first-price">$59.99</div>
                        <div className="real-price">$49.99</div>
                    </div>
                    <div className="best-seller__item-btn">
                        <button className="btn_view-detail">Add to cart</button>
                    </div>
                </div>
                <div className="l-4 best-seller__item">
                    <img className="best-seller__item-img" src={best3}></img>
                    <div className="best-seller__item-des">
                        SBSW033 - Winter Wonderland - Preserved Flower Bouquet
                    </div>
                    <div className="best-seller__item-price">
                        <div className="first-price"></div>
                        <div className="real-price">$39.99</div>
                    </div>
                    <div className="best-seller__item-btn">
                        <button className="btn_view-detail">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestSeller