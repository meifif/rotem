import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import SocialMediaSection from "./SocialMediaSection";
import WhatsAppIcon from "../utile/WhatsAppIcon";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-white">
            {/* Main footer content */}
            <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Brand column */}
                    <div className="lg:col-span-1">
                        <h3 className="font-secondary text-3xl text-white mb-4">רותם יפרח</h3>
                        <p className="text-white/60 text-sm leading-relaxed mb-6">
                            אמנית איפור עם למעלה מעשר שנות ניסיון. 
                            איפור כלות, אירועים, ועיצוב גבות עם תשומת לב לכל פרט.
                        </p>
                        <SocialMediaSection />
                    </div>

                    {/* Quick links */}
                    <div>
                        <h4 className="text-xs tracking-widest uppercase text-secondary mb-6">ניווט מהיר</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="/#home" className="text-white/70 hover:text-secondary transition-colors duration-300 text-sm">
                                    בית
                                </a>
                            </li>
                            <li>
                                <a href="/#about" className="text-white/70 hover:text-secondary transition-colors duration-300 text-sm">
                                    אודות
                                </a>
                            </li>
                            <li>
                                <a href="/#services" className="text-white/70 hover:text-secondary transition-colors duration-300 text-sm">
                                    שירותים
                                </a>
                            </li>
                            <li>
                                <Link to="/portfolio" className="text-white/70 hover:text-secondary transition-colors duration-300 text-sm">
                                    תיק עבודות
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact info */}
                    <div>
                        <h4 className="text-xs tracking-widest uppercase text-secondary mb-6">צרו קשר</h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="tel:053-2509989" className="flex items-center gap-3 text-white/70 hover:text-secondary transition-colors duration-300 text-sm">
                                    <Phone className="w-4 h-4 text-secondary" />
                                    053-2509989
                                </a>
                            </li>
                            <li>
                                <a href="mailto:rotemshuman@gmail.com" className="flex items-center gap-3 text-white/70 hover:text-secondary transition-colors duration-300 text-sm">
                                    <Mail className="w-4 h-4 text-secondary" />
                                    rotemshuman@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.link/j96v07" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/70 hover:text-secondary transition-colors duration-300 text-sm">
                                    <WhatsAppIcon className="w-4 h-4 text-secondary" />
                                    WhatsApp
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Location */}
                    <div>
                        <h4 className="text-xs tracking-widest uppercase text-secondary mb-6">כתובת</h4>
                        <div className="flex items-start gap-3 text-white/70 text-sm">
                            <MapPin className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                            <address className="not-italic leading-relaxed">
                                רחוב עוזי חיטמן<br />
                                חולון, ישראל
                            </address>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10">
                <div className="container mx-auto px-6 lg:px-12 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white/40 text-xs">
                            © {currentYear} רותם יפרח - אמנית איפור. כל הזכויות שמורות.
                        </p>
                        <Link 
                            to="/accessibility" 
                            className="text-white/40 hover:text-secondary transition-colors duration-300 text-xs"
                        >
                            הצהרת נגישות
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
