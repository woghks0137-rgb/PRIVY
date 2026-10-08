import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Hero from '../components/Hero'
import CampaignIntro from '../components/CampaignIntro'
import GuideSection from '../components/GuideSection'
import BottomBanner from '../components/BottomBanner'
import Footer from '../components/Footer'

function Home() {
    const location = useLocation();
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const section = params.get("section");

        if (section) {
            const target = document.getElementById(section);

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    }, [location]);
    useEffect(() => {
        const fadeEls = document.querySelectorAll('.fade-up')
        const observer = new IntersectionObserver((entries, observer) => {

        })
    }, [])


    return (
        <>
            <Header />
            <Hero />
            <CampaignIntro />
            <GuideSection />
            <BottomBanner />
            <Footer />
        </>
    )
}

export default Home