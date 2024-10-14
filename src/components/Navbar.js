import React from 'react';
import {Briefcase, Home, Info} from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="bg-white bg-opacity-90 text-primary p-4 sticky top-0 z-50 shadow-md">
            <div className="container mx-auto">
                <ul className="flex justify-around items-center">
                    <li><a href="#home" className="flex items-center hover:text-secondary transition duration-300"><Home
                        size={18} className="ml-1"/> בית</a></li>
                    <li><a href="#about"
                           className="flex items-center hover:text-secondary transition duration-300"><Info size={18}
                                                                                                            className="ml-1"/> אודות</a>
                    </li>
                    <li><a href="#services"
                           className="flex items-center hover:text-secondary transition duration-300"><Briefcase
                        size={18} className="ml-1"/> שירותים</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;