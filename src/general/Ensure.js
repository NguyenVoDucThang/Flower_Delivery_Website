import React from 'react'
import ensure from '../assets/images/ensurance_pic.png'
import ensure_icon from '../assets/images/ensurance_icon.png'


const Ensure = () => {
    return (
        <div className="ensurance">
            <div className="ensurance__img c-6">
                <img className="ensurance__img-control" src={ensure} alt="" />
            </div>
            <div className="ensurance_info c-6">
                <div className="ensurance_info-title">How We Ensure The Best Flower Delivery</div>
                <div className="ensurance_info-des">
                    <div className="ensurance_item">
                        <img src={ensure_icon} className="ensurance_item-icon"></img>
                        <div className="ensurance_item-text">The ONLY place to pick your own flowers</div>
                    </div>
                    <div className="ensurance_item">
                        <img src={ensure_icon} className="ensurance_item-icon"></img>
                        <div className="ensurance_item-text">The ONLY cooled box on the market</div>
                    </div>
                    <div className="ensurance_item">
                        <img src={ensure_icon} className="ensurance_item-icon"></img>
                        <div className="ensurance_item-text">The ONLY your specific gift</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ensure