import React from 'react'
import './app.scss';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Carousel from './components/Carousel';
import Pricing from './components/Pricing';
import Images from './components/Images';
import Contact from './components/Contact';
import Footer from './components/Footer';
const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <Carousel />
            <Pricing />
            <Images />
            <Contact />
            <Footer />
        </>
    )
}

export default App
