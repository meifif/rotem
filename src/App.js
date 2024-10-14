import React from 'react';
import RotemHome from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SEO from "./components/SEO";

const App = () => {
    return (
        <div dir="rtl" className="font-primary text-right bg-background text-text">
            <SEO/>
            <Navbar/>
            <main>
                <section id="home" className="py-20">
                    <RotemHome/>
                </section>

                <section id="about" className="py-20">
                    <About/>
                </section>

                <section id="services" className="py-20">
                    <Services/>
                </section>
            </main>
            <Footer/>
        </div>
    );
};

export default App;