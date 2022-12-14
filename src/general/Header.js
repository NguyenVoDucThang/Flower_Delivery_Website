import { Link, useNavigate } from 'react-router-dom'
import { Fragment } from 'react'

import Logo from '../assets/images/logo.png'
import fontawesome from '../assets/font/themify-icons/themify-icons.css'
import { useEffect, useState } from "react"
export default function Header(props) {
    const navigate = useNavigate();
    var userdata = props.userdata
    function handleGoHome() {
        navigate('/', {
            state: {
                username: userdata,
            }
        });
    }
    const [cartItem, setcartItem] = useState(0);
    function handleCart() {
        navigate('/cart', {
            state: {
                username: userdata,
            }
        });
    }
    if (userdata != null && userdata.includes('@')) {
        userdata = userdata.slice(0, props.userdata.indexOf('@'));
    }
    function hadleLogout() {
        localStorage.clear();
        console.log('logout')
        navigate('/', {
            state: {
                username: null,
            }
        });
    }
    function handleGoDetail(arg) {
        navigate('/detail', {
            state: {
                username: userdata,
                productname: arg,
            }
        });
        window.location.reload();
    }
    const [products, setProducts] = useState([])

    const fetchData = () => {
        fetch("http://localhost:8080/api/products", {
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        })
            .then(response => {
                return response.json()
            })
            .then(data => {
                setProducts(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, []);
    var token = localStorage.getItem('api');
    const fetchData1 = () => {
        if (userdata) {
            fetch("http://localhost:8080/api/admin/carts?status=InCart", {
                headers: {
                    'Authorization': 'Bearer ' + token,
                }
            })
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    if (data.length > 0){
                        setcartItem(data[0].products.length)
                    }
                })
        }
        return;
    }
    useEffect(() => {
        fetchData1()
    }, [])
    const [searchTerm, setSearchTerm] = useState('');
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const filteredItems = products.filter((item) => {
        if (searchTerm !== '') {
            return item.name.toLowerCase().includes(searchTerm.toLowerCase());
        }
    });

    if (!userdata) {
        return (
            <Fragment>
                <header className="homepage_header">
                    <div className="grid wide homepage_header">
                        <div className="row">
                            <div className="header__img">
                                <Link to='/' className="header__logo-link">
                                    <img className="header__img" src={Logo} alt="Logo" />
                                </Link>
                            </div>
                            <div className="header__main">
                                <h2 className="header__main-shop-name">Flower Make Your Day</h2>
                                <div className="header__main-search">
                                    <input type="text" className="header__main-search-input" value={searchTerm} placeholder="Search product, code, style..." onChange={handleChange} />
                                    <div className="header__search-history">
                                        {
                                            filteredItems.length > 0 && (
                                                <ul className="header__search-history-list">
                                                    {filteredItems.map((item) => (
                                                        <li className="header__search-history-item" key={item.id}>
                                                            <button onMouseDown={() => handleGoDetail(item.id)} >{item.name}</button>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )
                                        }
                                    </div>
                                    {/* <input type="text" className="header__main-search-input" placeholder="Search product, code, style..." /> */}
                                    <button className="header__main-search-btn">
                                        <i className="header__main-search-btn-icon fa-solid fa-magnifying-glass"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="header__auth">
                                <Link to='/login'>
                                    <button className="header__auth-btn">Sign In</button>
                                </Link>
                            </div>
                            <div className="header__cart">
                                <i className="header__cart-icon ti-shopping-cart"></i>
                            </div>
                        </div>
                        <hr />
                    </div>
                </header>
            </Fragment>
        )
    }
    else {
        return (

            <Fragment>
                <header className="homepage_header">
                    <div className="grid wide homepage_header">
                        <div className="row">
                            <div className="header__img">
                                <button onClick={handleGoHome} className="header__logo-button">
                                    <img className="header__img" src={Logo} alt="Logo" />
                                </button>
                            </div>
                            <div className="header__main">
                                <h2 className="header__main-shop-name">Flower Make Your Day</h2>
                                <div className="header__main-search">
                                    <input type="text" className="header__main-search-input" value={searchTerm} placeholder="Search product, code, style..." onChange={handleChange} />
                                    <div className="header__search-history">
                                        {
                                            filteredItems.length > 0 && (
                                                <ul className="header__search-history-list">
                                                    {filteredItems.map((item) => (
                                                        <li className="header__search-history-item" key={item.id}>
                                                            <button onMouseDown={() => handleGoDetail(item.id)} >{item.name}</button>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )
                                        }
                                    </div>
                                    {/* <input type="text" className="header__main-search-input" placeholder="Search product, code, style..." /> */}
                                    <button className="header__main-search-btn">
                                        <i className="header__main-search-btn-icon fa-solid fa-magnifying-glass"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="header__navbar-user header__navbar-item">
                                <span className="header__navbar-user-name">{userdata}</span>
                                <ul className="header__navbar-user-menu">
                                    <li className="header__navbar-user-item">
                                        <button className='header__navbar-user-item-button'>My account</button>
                                    </li>
                                    <li className="header__navbar-user-item">
                                        <button className='header__navbar-user-item-button'>Purchase order</button>
                                    </li>
                                    <li className="header__navbar-user-item">
                                        <button className='header__navbar-user-item-button' onClick={hadleLogout}>Log out</button>
                                    </li>
                                </ul>
                            </div>
                            <button className="header__cart header__logo-button" style={{ position: 'relative' }} onClick={handleCart}>
                                <i className="header__cart-icon ti-shopping-cart"></i>
                                <span className="header__cart-notice">{cartItem}</span>

                            </button>
                        </div>
                        <hr />
                    </div>
                </header>
            </Fragment>
        )
    }

}