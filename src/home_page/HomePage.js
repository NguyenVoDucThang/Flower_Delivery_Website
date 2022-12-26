import { Fragment } from 'react'
import Footer from '../general/Footer'
import Header from '../general/Header'
import { useLocation } from 'react-router-dom'
import fontawesome from '../assets/font/fontawesome-free-6.2.0-web/css/all.min.css'
import Slider from '../general/Slider'
import BestSeller from '../general/BestSeller'
import Tab from '../general/Tab'
import WhyChoose from '../general/WhyChoose'
import WhatWant from '../general/WhatWant'
import Ensure from '../general/Ensure'
import Subcription from '../general/Subcription'
export default function HomePage(props) {
        var { state } = useLocation();
        var {username} = state || {};
    return (
        <Fragment>
            <Header userdata={username}/>
            <Tab/>
            <Slider/>
            <BestSeller/>
            <WhyChoose/>
            <WhatWant userdata={username}/>
            <Ensure/>
            <Subcription/>
            <Footer/>
        </Fragment>
    )
}