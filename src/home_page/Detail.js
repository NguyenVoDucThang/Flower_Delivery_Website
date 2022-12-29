import React, { Fragment } from 'react'
import Header from '../general/Header'
import Footer from '../general/Footer'
import product from '../assets/images/product.png'
import loginLogo from '../assets/images/main_login_pic.png'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
const Detail = () => {
    window.scrollTo(0, 0)
    const navigate = useNavigate();
    var { state } = useLocation();
    const [product, setProduct] = useState([])
    var token = localStorage.getItem('api');
    var productAPI = 'http://localhost:8080/api/products/'+state.productname;
    const fetchData = () => {
        fetch(productAPI, {
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        })
            .then(response => {
                return response.json()
            })
            .then(data => {
                setProduct(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    function addToCart(arg) {
        // window.location.reload(false);
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
  return (
    <Fragment>
        <Header userdata={state.username}/>
        <div className="container">
        <div className="grid wide">
            <div className="row">
                <div className="l-5 img__control">
                    <img className="img__product" src={product.image_url} alt=""/>
                </div>
                <div className="l-6 form__control">
                    <div className="auth-form">
                        <h4 className="auth-form__title">{product.name}</h4>
                        <p className="product_detail_price">${product.price}</p>
                        <hr/>
                        <p className="auth-form__text">{product.feature}</p>  
                        <p className="product_detail_des">{product.detail}</p>
                        <div className="auth-form__control">
                            <button className="btn btn_add-to-cart">Buy now</button>
                            <button onClick={() => addToCart(product.id)} className="btn btn_add-to-cart">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </Fragment>
  )
}

export default Detail