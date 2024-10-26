import React from 'react';
import RotemHome from '../sections/Home';
import About from '../sections/About';
import Services from '../sections/Services';
import Footer from '../sections/Footer';
import Navbar from '../sections/Navbar';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import WorkSlider from "../sections/WorkSlider";
import ContactCTA from "../sections/ContactCTA";

const Home = () => {
    return (
        <div dir="rtl" className="font-primary text-right bg-background text-text">
            <Navbar/>
            <main>
                <section id="home" className="py-10">
                    <RotemHome/>
                </section>
                <section id="work" className="py-10">
                    <WorkSlider/>
                </section>
                <section id="about" className="py-10">
                    <About/>
                </section>

                <section id="services" className="py-10">
                    <Services/>
                </section>
                <section id="cta" className="py-10">
                    <ContactCTA/>
                </section>
            </main>
            <Footer/>
        </div>
    );
};

export default Home;