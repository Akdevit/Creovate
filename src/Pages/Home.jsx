import React from 'react'
import Header from '../components/layout/Header'
import Hero from '../components/home/Hero'
import PalettesSection from '../components/home/PalettesSection'
import GradientSection from '../components/home/GradientSection'
import BlobSection from '../components/home/BlobSection'
import ShadowSection from '../components/home/ShadowSection'
import GlassSection from '../components/home/GlassSection'
import ColorPickerSection from '../components/home/ColorPickerSection'
import QrSection from '../components/home/QrSection'
import TypographySection from '../components/home/TypographySection'
import Footer from '../components/layout/Footer'
const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <PalettesSection />
            <GradientSection />
            <BlobSection/>
            <ShadowSection/>
            <GlassSection/>
            <ColorPickerSection/>
            <QrSection/>
            <TypographySection/>
            <Footer/>
        </>
    )
}

export default Home
