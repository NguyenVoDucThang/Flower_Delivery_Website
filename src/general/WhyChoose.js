import React from 'react'
import advan1 from '../assets/images/advantage_img-1.png'
import advan2 from '../assets/images/advantage_img-2.png'
import advan3 from '../assets/images/advantage_img-3.png'
const WhyChoose = () => {
    return (
        <div className="grid wide">
            <div className="advantage">
                <div className="advantage__title">WHY CHOOSE US?</div>
                <div className="advantage__items">
                    <div className="advantage__item c-4">
                        <img src={advan1} className="advantage__item-icon"></img>
                        <div className="advantage__item-des">Free nominated-day delivery on all flowers
                            and plants contact-free delivery.</div>
                        <div className="vertical-line"></div>
                    </div>
                    <div className="advantage__item c-4">
                        <img src={advan2} className="advantage__item-icon"></img>
                        <div className="advantage__item-des">Sourced from trusted growers and with
                            guaranteed freshness for five days.</div>
                        <div className="vertical-line"></div>
                    </div>
                    <div className="advantage__item c-4">
                        <img src={advan3} className="advantage__item-icon"></img>
                        <div className="advantage__item-des">Seven-day delivery service, with Sunday
                            delivery available on selected bouquets.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChoose