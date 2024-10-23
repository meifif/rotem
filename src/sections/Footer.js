import React from 'react';
import {Link} from 'react-router-dom';
import {Mail, MapPin, MessageCircle, Phone} from 'lucide-react';
import SocialMediaSection from "./SocialMediaSection";

const Footer = () => {
    return (
        <footer className="bg-primary text-white py-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <nav>
                        <h3 className="font-semibold text-lg mb-4">ניווט מהיר</h3>
                        <ul className="space-y-2">
                            <li><a href="/#home" className="hover:text-secondary-light transition duration-300">בית</a>
                            </li>
                            <li><a href="/#about"
                                   className="hover:text-secondary-light transition duration-300">אודות</a></li>
                            <li><a href="/#services"
                                   className="hover:text-secondary-light transition duration-300">שירותים</a></li>
                            <li><Link to="/portfolio"
                                      className="hover:text-secondary-light transition duration-300">
                                תיק עבודות
                            </Link></li>
                        </ul>
                    </nav>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">צרו קשר</h3>
                        <p className="flex items-center mb-2">
                            <Phone className="ml-2" size={18}/> <a href="tel:053-2509989"> 053-2509989</a>
                        </p>
                        <p className="flex items-center mb-2">
                            <Mail className="ml-2" size={18}/> <a
                            href="mailto:rotemshuman@gmail.com">rotemshuman@gmail.com</a>
                        </p>
                        <p className="flex items-center mb-2">
                            <MessageCircle className="ml-2" size={18}/> <a href="https://wa.link/j96v07">Whatsapp</a>
                        </p>
                        <SocialMediaSection/>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">כתובת</h3>
                        <p className="flex items-start">
                            <MapPin className="ml-2 mt-1 flex-shrink-0" size={18}/>
                            <span>
                                רחוב צבי גרינברג<br/>
                                חולון, <br/>
                                ישראל
                            </span>
                        </p>
                    </div>
                </div>

                <div className="mt-4 text-center">
                    <Link to="/accessibility" className="text-secondary-light hover:text-white transition duration-300">הצהרת
                        נגישות</Link>
                </div>

                <div className="mt-8 pt-8 border-t border-white/20 text-center">
                    <p>&copy; {new Date().getFullYear()} רותם - אמנית איפור. כל הזכויות שמורות.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;