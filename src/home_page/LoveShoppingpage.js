import React, { Fragment } from 'react'
import Header from '../general/Header'
import Footer from '../general/Footer'
import Tab from '../general/Tab'
import { useLocation } from 'react-router-dom'
import how_to_use1 from '../assets/images/how_to_use1.png'
import how_to_use2 from '../assets/images/how_to_use2.png'
import how_to_use3 from '../assets/images/how_to_use3.png'
import how_to_use4 from '../assets/images/how_to_use4.png'
import how_to_use5 from '../assets/images/how_to_use5.png'
import include from '../assets/images/include.png'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react"
const LoveShoppingPage = () => {
    const navigate = useNavigate();
    window.scrollTo(0, 0)
    var { state } = useLocation();
    var { username } = state || {};
    var token = localStorage.getItem('api');

    function handleGoDetail(arg) {
        console.log(arg);
        navigate('/detail', {
            state: {
                username: username,
                productname: arg,
            }
        });
    }
    function addToCart(arg) {
        if (state.username) {
            fetch('http://localhost:8080/api/admin/carts?status=InCart', {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data.length>0) {
                    fetch('http://localhost:8080/api/admin/carts', {
                        method: 'PUT',
                        headers: {
                            'Authorization': 'Bearer ' + token,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            id: data[0].id,
                            status: "InCart",
                            receiver: null,
                            delivery: null,
                            products: [
                                {
                                    'id': arg,
                                    'quantity': 1
                                }
                            ]
                        })
                    })
                        .then(response => {
                            if (response.ok) {
                                return;
                            }
                            throw new Error('Failed to add item to cart');
                        })
                        .catch(error => {
                        });
                }
                else {
                    fetch('http://localhost:8080/api/admin/carts', {
                        method: 'POST',
                        headers: {
                            'Authorization': 'Bearer ' + token,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            "status": "InCart",
                            "receiver": null,
                            "delivery": null,
                            "products": [
                                {
                                    "id": arg,
                                    "quantity": 1
                                }
                            ]
                        })
                    })
                        .then(response => {
                            if (response.ok) {
                                return;
                            }
                            throw new Error('Failed to add item to cart');
                        })
                        .catch(error => {
                        });
                }
            })
        }
        else {
            navigate('/login');
        }
    }
    const [productLoves, setProductLoves] = useState([])
    const fetchData = () => {
        fetch("http://localhost:8080/api/products?type=Love", {
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        })
            .then(response => {
                return response.json()
            })
            .then(data => {
                setProductLoves(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <Fragment>
            <Header userdata={username} />
            <Tab index={3}/>
            <div className="grid wide how_to_use">
                <hr />
                <h2 className="how_to_use_title">HOW TO USE OUR PLATFORM?</h2>
                <div className="how_to_use__content">
                    <ul className="row how_to_use__content-list">
                        <li className="l-2 how_to_use__content-item">
                            <img className="how_to_use_img" src={how_to_use1} alt="" />
                            <h3 className="how_to_use_number">1.</h3>
                            <p className="how_to_use_des">Select your soulmate a love</p>
                        </li>
                        <li className="l-2 how_to_use__content-item">
                            <img className="how_to_use_img" src={how_to_use2} alt="" />
                            <h3 className="how_to_use_number">2.</h3>
                            <p className="how_to_use_des">Choose the quantity</p>
                        </li>
                        <li className="l-2 how_to_use__content-item">
                            <img className="how_to_use_img" src={how_to_use3} alt="" />
                            <h3 className="how_to_use_number">3.</h3>
                            <p className="how_to_use_des">Schedule your delivery</p>
                        </li>
                        <li className="l-2 how_to_use__content-item">
                            <img className="how_to_use_img" src={how_to_use4} alt="" />
                            <h3 className="how_to_use_number">4.</h3>
                            <p className="how_to_use_des">Add a Personalized</p>
                        </li>
                        <li className="l-2 how_to_use__content-item">
                            <img className="how_to_use_img" src={how_to_use5} alt="" />
                            <h3 className="how_to_use_number">5.</h3>
                            <p className="how_to_use_des">Send or receive our best love</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="grid wide">
                <h2 className="how_to_use_title">GET THE BEST FROM US</h2>
                <div className="row product_container">
                    {
                        productLoves.map(love =>(
                            <div className="l-4" key={love.id}>
                            <button onClick={()=>handleGoDetail(love.id)} className="product_image-button">
                            <img className="product_picture" src={love.image_url} alt="" />
                            </button>
                            <div className="product_name_price">
                                <p className="product_name">{love.name}</p>
                                <p className="product_price">{love.price} $</p>
                            </div>
                            <hr className="product_hr" />
                            <div className="product_feater_ship">
                                <p className="product_feature">{love.feature}</p>
                                <p className="product_ship">FREE SHIPPING</p>
                            </div>
                            <p className="product_des">{love.detail}</p>
                            <button onClick={()=>addToCart(love.id)} className="btn_add-to-cart">Add to cart</button>
                        </div>
                        ))
                    }
                </div>
            </div>

            <div className="grid wide include_container">
                <h2 className="how_to_use_title">WHAT ARE INCLUDED?</h2>
                <p className="include_des">You can customize everything from this set</p>
                <img src={include} alt="" className="include_img" />
                <button className="btn_custom">CUSTOMIZE</button>
            </div>
            <Footer />
        </Fragment>
    )
}

export default LoveShoppingPage