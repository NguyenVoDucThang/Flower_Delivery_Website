import React, { Fragment } from 'react'
import Header from '../general/Header'
import Footer from '../general/Footer'
import product from '../assets/images/product.png'
import loginLogo from '../assets/images/main_login_pic.png'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from "react"

const Detail = () => {
    window.scrollTo(0, 0)
    var { state } = useLocation();
    const [product, setProduct] = useState([])
    var token = localStorage.getItem('api');
    var productAPI = 'http://localhost:8080/api/admin/products/'+state.productname;
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
                            <button className="btn btn_add-to-cart">Add to cart</button>
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