import React, { Fragment } from 'react'
import Footer from '../general/Footer'
import Header from '../general/Header'
import { useLocation } from 'react-router-dom'
const DeliveryDetail = () => {
    setTimeout(() => {
        const yearSelect = document.getElementById("year");
        const monthSelect = document.getElementById("month");
        const daySelect = document.getElementById("day");
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        (function populateMonths() {
            for (let i = 0; i < months.length; i++) {
                const option = document.createElement('option');
                option.textContent = months[i];
                monthSelect.appendChild(option)
            }
        })();
        let dayNum = 0;
        let currentYear = new Date().getFullYear();
        (function populateYears() {
            const option = document.createElement('option');
            option.textContent = currentYear;
            yearSelect.appendChild(option)
        })();
        function populateDays(month) {
            while (daySelect.firstChild) {
                daySelect.removeChild(daySelect.firstChild)
            }
            if (month === "January" || month === "March" || month === "May" || month === "July" || month === "August" || month === "October" || month === "December") {
                dayNum = 31;
            }
            else if (month === "April" || month === "June" || month === "September" || month === "November") {
                dayNum = 30;
            }
            else if ((currentYear % 400 === 0) || (currentYear % 4 === 0 && currentYear % 100 !== 0)) {
                dayNum = 29;
            }
            else {
                dayNum = 28;
            }

            for (let i = 1; i <= dayNum; i++) {
                const option = document.createElement('option');
                option.textContent = i;
                daySelect.appendChild(option);
            }
        }
        if (monthSelect.value) {
            populateDays(monthSelect.value)
        }
        monthSelect.onchange = function () {
            if (monthSelect.value) {
                populateDays(monthSelect.value)
            }
        }
    }, 10)
    window.scrollTo(0, 0)
    var { state } = useLocation();
    var { username } = state || {};
    return (
        <Fragment>
            <Header userdata={username} />
            <div className="container">
                <div className="grid wide">
                    <p>Date of delivery</p>
                    <hr style={{marginBottom: '20px'}}/>
                    <div className="row">
                        <div className="l-7">
                            <form className="deliveryForm">
                                <div className="row delivery_date">
                                    <div className="l-4">
                                        <select name="year" id="year" className="delivery_date-detail">
                                            <option value="">Year</option>
                                        </select>
                                    </div>
                                    <div className="l-4">
                                        <select name="month" id="month" className="delivery_date-detail">
                                            <option value="">Month</option>
                                        </select>
                                    </div>
                                    <div className="l-4">
                                        <select name="day" id="day" className="delivery_date-detail">
                                            <option value="0">Day</option>
                                        </select>
                                    </div>
                                </div>
                                <br />
                                <p className="ml-12">Personal Infomation</p>
                                <hr className="ml-12" />
                                <div className="auth-form__form">
                                    <div className="auth-form__group">
                                        <label htmlFor="fullname" className='grey_Text'>Full Name</label>
                                        <input name="fullname" id="fullname" type="text" className="auth-form__input" />
                                    </div>
                                    <div className="auth-form__group">
                                        <label htmlFor="phone" className='grey_Text'>Phone number</label>
                                        <input name="phone" id="phone" type="text" className="auth-form__input" />
                                    </div>
                                    <div className="auth-form__group">
                                        <label htmlFor="email" className='grey_Text'>Email</label>
                                        <input name="email" id="email" type="text" className="auth-form__input " />
                                    </div>
                                    <div className="auth-form__group">
                                        <label htmlFor="address" className='grey_Text'>Address</label>
                                        <input name="address" id="address" type="text" className="auth-form__input " />
                                    </div>
                                </div>
                                <br />
                                <p className="ml-12">Leave message</p>
                                <hr className="ml-12" />
                                <div className="auth-form__form">
                                    <div className="auth-form__group">
                                        <label htmlFor="fullname" className='grey_Text'>Card message</label>
                                        <br />
                                        <textarea className='textarea' rows="6" cols="82" name="message"  >
                                        </textarea>
                                    </div>
                                </div>
                                <div className="auth-form__control">
                                    <button className="btn btn__auth">Order</button>
                                </div>
                            </form>
                        </div>
                        <div className='l-1' style={{marginLeft:'14px'}}></div>
                        <div className="l-3 your_bill_container" style={{height:'180px'}}>
                            <div className="bill_content">
                                <p className="bill_text">Product:</p>
                                <p className="bill_number">1</p>
                            </div>
                            <div className="bill_content">
                                <p className="bill_text">Sub total:</p>
                                <p className="bill_number">$100</p>
                            </div>
                            <div className="bill_content">
                                <p className="bill_text">Discount:</p>
                                <p className="bill_number">0</p>
                            </div>
                            <hr />
                            <div className="bill_content">
                                <p className="bill_text">Total:</p>
                                <p className="bill_number">$100</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default DeliveryDetail