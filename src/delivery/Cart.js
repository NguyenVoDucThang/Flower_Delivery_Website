import React, { Fragment } from 'react'
import Header from '../general/Header'
import Footer from '../general/Footer'
import Product from '../assets/images/product.png'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react"

const Cart = () => {
    const navigate = useNavigate();
    window.scrollTo(0, 0)
    var { state } = useLocation();
    var { username } = state || {};
    function handleGoDelivery() {
        navigate('/delivery', {
            state: {
                username: username,
            }
        });
    }
    function Remove(e) {

    }
    function IncreaseNumber(e) {
        var inputElement = e.target.parentElement.querySelector('.quantity-content')
        var oldValue = parseFloat(inputElement.value);
        oldValue += 1;
        inputElement.value = oldValue
    }
    function DecreaseNumber(e) {
        var inputElement = e.target.parentElement.querySelector('.quantity-content')
        var oldValue = parseFloat(inputElement.value);
        if (oldValue > 1) {
            oldValue -= 1;
            inputElement.value = oldValue
        }
    }
    const [carts, setCarts] = useState([])
    var token = localStorage.getItem('api');
    const fetchData = () => {
        fetch("http://localhost:8080/api/admin/carts?cartStatus=InCart", {
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        })
            .then(response => {
                return response.json()
            })
            .then(data => {
                setCarts(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <Fragment>
            <Header userdata={username} />
            <div className="container">
                <div className="grid wide">
                <p style={{paddingTop:'8px'}}>Your Cart</p>
                <hr style={{width:'59.5%', marginLeft:'0', marginBottom:'16px'}}/>
                    <div className="row">
                        <div className="l-7 your_cart_container">
                            {carts.length > 0 && (
                                <ul className="your_cart_list">
                                    {carts.map(cart => (
                                        <li key={cart.id} className="row your_cart_item">
                                            <div className="l-3">
                                                <img width="60%" src={Product} alt="" />
                                            </div>
                                            <div className="l-8">
                                                <h4 className="cart_product-name">{cart.products[0].name}</h4>
                                                <p className="cart_product-price">$78</p>
                                                <div className="quantity">
                                                    <button onClick={DecreaseNumber} className="quantity-button quantity-up">-</button>
                                                    <input className="quantity-content" type="number" id="num" min="0" max="10" value="1" readOnly />
                                                    <button onClick={IncreaseNumber} className="quantity-button quantity-down">+</button>
                                                </div>
                                                <hr />
                                            </div>
                                            <div className="l-1">
                                                <button onClick={Remove} className="remove-button">x</button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {/* <ul className="your_cart_list">
                        <li className="row your_cart_item">
                            <div className="l-3">
                                <img width="60%" src={Product} alt=""/>
                            </div>
                            <div className="l-8">
                                <h4 className="cart_product-name">Summer by Starlight</h4>
                                <p className="cart_product-price">$78</p>
                                <div className="quantity">
                                    <button onClick={DecreaseNumber}  className="quantity-button quantity-up">-</button>
                                    <input className="quantity-content" type="number" id="num" min="0" max="10" value="1" readOnly />
                                    <button onClick={IncreaseNumber} className="quantity-button quantity-down">+</button>
                                </div>
                                <hr/>
                            </div>
                            <div className="l-1">
                                <button onClick={Remove} className="remove-button">x</button>
                            </div>
                        </li>
                    </ul> */}
                        </div>
                        <div className='l-1'></div>
                        <div className="l-3 your_bill_container">
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
                            <div className="auth-form__control">
                                <button className="btn btn__auth" onClick={handleGoDelivery} style={{width:'80%',marginLeft:'32px'}}>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Cart