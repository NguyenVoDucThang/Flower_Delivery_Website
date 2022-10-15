import { Fragment } from 'react'
import Footer from '../general/Footer'
import Header from '../general/Header'
import { useLocation } from 'react-router-dom'
import fontawesome from '../assets/font/fontawesome-free-6.2.0-web/css/all.min.css'
import Login from '../sign_in/Login'
export default function HomePage(props) {
        const { state } = useLocation();
        const {username} = state || {};
    

    return (
        <Fragment>
            <Header userdata={username}/>
            <Footer/>
        </Fragment>
    )
}