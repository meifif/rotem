import React from 'react';
import { Home, Info, Briefcase, MessageCircle, Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

import RotemHome from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

const App = () => {
  return (
      <div dir="rtl" className="font-primary text-right bg-background text-text">
        <nav className="bg-white bg-opacity-90 text-primary p-4 sticky top-0 z-50 shadow-md">
          <div className="container mx-auto">
            <ul className="flex justify-around items-center">
              <li><a href="#home" className="flex items-center hover:text-secondary transition duration-300"><Home size={18} className="ml-1" /> בית</a></li>
              <li><a href="#about" className="flex items-center hover:text-secondary transition duration-300"><Info size={18} className="ml-1" /> אודות</a></li>
              <li><a href="#services" className="flex items-center hover:text-secondary transition duration-300"><Briefcase size={18} className="ml-1" /> שירותים</a></li>
              <li><a href="#testimonials" className="flex items-center hover:text-secondary transition duration-300"><MessageCircle size={18} className="ml-1" /> המלצות</a></li>
            </ul>
          </div>
        </nav>

        <main>
          <section id="home" className="py-20">
            <RotemHome />
          </section>

          <section id="about" className="py-20">
            <About />
          </section>

          <section id="services" className="py-20">
            <Services />
          </section>

          <section id="testimonials" className="py-20">
            <Testimonials />
          </section>
        </main>

        <footer className="bg-primary text-white py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <nav className="mb-6 md:mb-0">
                <ul className="flex space-x-6">
                  <li><a href="#home" className="hover:text-secondary-light transition duration-300">בית</a></li>
                  <li><a href="#about" className="hover:text-secondary-light transition duration-300">אודות</a></li>
                  <li><a href="#services" className="hover:text-secondary-light transition duration-300">שירותים</a></li>
                  <li><a href="#testimonials" className="hover:text-secondary-light transition duration-300">המלצות</a></li>
                </ul>
              </nav>
              <div className="flex space-x-4 mb-6 md:mb-0">
                <a href="#" aria-label="Facebook" className="text-white hover:text-secondary-light transition duration-300"><Facebook /></a>
                <a href="#" aria-label="Instagram" className="text-white hover:text-secondary-light transition duration-300"><Instagram /></a>
                <a href="#" aria-label="LinkedIn" className="text-white hover:text-secondary-light transition duration-300"><Linkedin /></a>
              </div>
              <div className="text-center md:text-right font-secondary">
                <p className="flex items-center justify-center md:justify-end mb-2">
                  <Mail className="ml-2" /> rotem@makeup-artist.com
                </p>
                <p className="flex items-center justify-center md:justify-end">
                  <Phone className="ml-2" /> 050-1234567
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
  );
};

export default App;