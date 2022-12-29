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
    function Remove(e, arg) {
        var oldValue = 0;
        fetch("http://localhost:8080/api/admin/carts?status=InCart", {
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        })
            .then(response => {
                return response.json()
            })
            .then(data => {
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
                                'quantity': oldValue
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
            })
        setTimeout(() => {
            window.location.reload();
        }, 10);
    }

    function handleChange(e) {
        console.log("re-rendering")
    }
    // const [reLoad, setReLoad] = useState(false);
    // var flag = true;
    // useEffect(() => {

    // },[reLoad])
    // const [inputValues, setInputValues] = useState();
    const [onChangeData, setOnChangeData] = useState(false);
    function handleIncrease(e, arg) {
        // flag=false;
        var inputElement = e.target.parentElement.querySelector('.quantity-content')
        var oldValue = parseFloat(inputElement.value);
        oldValue += 1;
        inputElement.value = oldValue
        fetch("http://localhost:8080/api/admin/carts?status=InCart", {
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        })
            .then(response => {
                return response.json()
            })
            .then(data => {
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
                                'quantity': oldValue
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
            })

    }
    function handleDecrease(e, arg) {
        var inputElement = e.target.parentElement.querySelector('.quantity-content')
        var oldValue = parseFloat(inputElement.value);
        if (oldValue > 1) {
            oldValue -= 1;
            inputElement.value = oldValue
        }
        else {
            oldValue = 0;
            inputElement.value = oldValue

        }
        fetch("http://localhost:8080/api/admin/carts?status=InCart", {
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        })
            .then(response => {
                return response.json()
            })
            .then(data => {
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
                                'quantity': oldValue
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
            })
        if (oldValue == 0) {
            setTimeout(() => {
                window.location.reload();
            }, 10);
        }
    }
    const [carts, setCarts] = useState([])
    const [totalBill, setTotalBill] = useState(0);
    const [totalItem, setTotalItem] = useState(0);
    var token = localStorage.getItem('api');

    const fetchData = () => {
        setTimeout(() => {
            fetch("http://localhost:8080/api/admin/carts?status=InCart", {
                headers: {
                    'Authorization': 'Bearer ' + token,
                }
            })
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    setCarts(data)
                    console.log(data[0].products);
    
                    const temp = data[0].products.reduce((total, current) => {
                        return total + current.total;
                    }, 0);
                    const temp1 = data[0].products.reduce((total, current) => {
                        if (current.quantity > 0) {
                            return total += 1;
                        }
                        return total;
                    }, 0);
                    setTotalItem(temp1)
                    setTotalBill(temp);
                })
        },100)
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        if (onChangeData) {
            fetchData()
            setOnChangeData(false)
        }
    }, [onChangeData])

    return (
        <Fragment>
            <Header userdata={username} />
            <div className="container">
                <div className="grid wide">
                    <p style={{ paddingTop: '8px' }}>Your Cart</p>
                    <hr style={{ width: '59.5%', marginLeft: '0', marginBottom: '16px' }} />
                    <div className="row">
                        <div className="l-7 your_cart_container">
                            {carts.length > 0 && (
                                <ul className="your_cart_list">
                                    {carts[0].products.map(product => {
                                        if (product.quantity) {
                                            return (
                                                <li key={product.id} className="row your_cart_item">
                                                    <div className="l-3">
                                                        <img width="60%" src={product.image_url} alt="" />
                                                    </div>
                                                    <div className="l-8">
                                                        <h4 className="cart_product-name">{product.name}</h4>
                                                        <p className="cart_product-price">{product.price}$</p>
                                                        <div className="quantity">
                                                            <button onClick={
                                                                (e) => {
                                                                    handleDecrease(e, product.id)
                                                                    setOnChangeData(true)
                                                                }
                                                                } className="quantity-button quantity-up">-</button>
                                                            <input onChange={handleChange} className="quantity-content" type="number" id="num" value={product.quantity} readOnly />
                                                            <button onClick={
                                                                (e) => {
                                                                    handleIncrease(e, product.id)
                                                                    setOnChangeData(true)
                                                                }
                                                            } className="quantity-button quantity-down">+</button>
                                                        </div>
                                                        <hr />
                                                    </div>
                                                    <div className="l-1">
                                                        <button onClick={(e) => Remove(e, product.id)} className="remove-button">x</button>
                                                    </div>
                                                </li>
                                            )
                                        }
                                        return null;
                                    })}
                                </ul>
                            )}
                        </div>
                        <div className='l-1'></div>
                        <div className="l-3 your_bill_container">
                            <div className="bill_content">
                                <p className="bill_text">Product:</p>
                                <p className="bill_number">{totalItem}</p>
                            </div>
                            <div className="bill_content">
                                <p className="bill_text">Sub total:</p>
                                <p className="bill_number">${totalBill}</p>
                            </div>
                            <div className="bill_content">
                                <p className="bill_text">Discount:</p>
                                <p className="bill_number">0</p>
                            </div>
                            <hr />
                            <div className="bill_content">
                                <p className="bill_text">Total:</p>
                                <p className="bill_number">${totalBill}</p>
                            </div>
                            <div className="auth-form__control">
                                <button className="btn btn__auth" onClick={handleGoDelivery} style={{ width: '80%', marginLeft: '32px' }}>Next</button>
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