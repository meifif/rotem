import React from 'react';
import RotemHome from '../sections/Home';
import About from '../sections/About';
import Services from '../sections/Services';
import Footer from '../sections/Footer';
import Navbar from '../sections/Navbar';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import WorkSlider from "../sections/WorkSlider";
import BrandPartners from "../sections/BrandPartners";
import ContactCTA from "../sections/ContactCTA";
import InstagramFeed from "../sections/InstagramFeed";

const Home = () => {
    return (
        <div dir="rtl" className="font-primary text-right bg-background text-text overflow-x-hidden">
            <Navbar />
            <main>
                <section id="home">
                    <RotemHome />
                </section>
                <section id="work">
                    <WorkSlider />
                </section>
                <section id="about">
                    <About />
                </section>
                <section id="services">
                    <Services />
                </section>
                <section id="brands">
                    <BrandPartners />
                </section>
                <section id="instagram">
                    <InstagramFeed />
                </section>
                <section id="cta">
                    <ContactCTA />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
