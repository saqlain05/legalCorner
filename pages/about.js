import React from 'react'
import About from '../components/About'
import Slider from '../components/Slider'
import Home from '../components/Home'
import Intro from '../components/Intro'
import Document from '../components/Document'
import SliderTwo from '../components/SliderTwo'
import SliderBig from '../components/SliderBig'
import NavBar from '../components/NavBar'
import Nav from '../components/Nav'

const about = () => {
    return (
        <div>

        <NavBar />
        {/* <br />
        <br />
        <br />
        <br />
        <br />
        <br /> */}
        {/* <Nav /> */}
            <Home />
            <br />
            {/* <hr /> */}
            <Slider />
            {/* <hr /> */}
            <Intro />
            <Document />
            <About />
            {/* <SliderTwo /> */}
            <SliderBig />
        </div>
    )
}

export default about
