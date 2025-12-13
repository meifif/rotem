import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/#home', label: 'בית' },
        { href: '/#about', label: 'אודות' },
        { href: '/#services', label: 'שירותים' },
        { to: '/portfolio', label: 'תיק עבודות' },
    ];

    return (
        <nav 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled 
                    ? 'bg-white/95 backdrop-blur-md shadow-elegant py-4' 
                    : 'bg-transparent py-6'
            }`}
        >
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <a href="/#home" className="relative group">
                        <span className={`font-secondary text-2xl md:text-3xl font-medium tracking-wide transition-colors duration-300 ${
                            isScrolled ? 'text-primary' : 'text-primary'
                        }`}>
                            רותם יפרח
                        </span>
                        <span className="block h-0.5 w-0 group-hover:w-full bg-secondary transition-all duration-300"></span>
                    </a>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-10">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                {link.to ? (
                                    <Link 
                                        to={link.to}
                                        className={`relative font-primary text-sm tracking-luxury uppercase transition-colors duration-300 group ${
                                            isScrolled ? 'text-text hover:text-secondary' : 'text-text hover:text-secondary'
                                        }`}
                                    >
                                        {link.label}
                                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-secondary transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                ) : (
                                    <a 
                                        href={link.href}
                                        className={`relative font-primary text-sm tracking-luxury uppercase transition-colors duration-300 group ${
                                            isScrolled ? 'text-text hover:text-secondary' : 'text-text hover:text-secondary'
                                        }`}
                                    >
                                        {link.label}
                                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-secondary transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* CTA Button */}
                    <a 
                        href="https://wa.link/u26l5v" 
                        target="_blank" 
                        rel="noreferrer"
                        className="hidden md:inline-flex items-center px-6 py-2.5 bg-secondary text-white text-xs tracking-widest uppercase font-medium hover:bg-accent transition-all duration-300 hover:shadow-gold"
                    >
                        צרי קשר
                    </a>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-primary hover:text-secondary transition-colors"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div className={`md:hidden overflow-hidden transition-all duration-500 ${
                    isMobileMenuOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
                }`}>
                    <div className="bg-white/95 backdrop-blur-md border-t border-border py-6">
                        <ul className="flex flex-col items-center gap-6">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    {link.to ? (
                                        <Link 
                                            to={link.to}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="font-primary text-sm tracking-luxury uppercase text-text hover:text-secondary transition-colors duration-300"
                                        >
                                            {link.label}
                                        </Link>
                                    ) : (
                                        <a 
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="font-primary text-sm tracking-luxury uppercase text-text hover:text-secondary transition-colors duration-300"
                                        >
                                            {link.label}
                                        </a>
                                    )}
                                </li>
                            ))}
                            <li className="pt-4">
                                <a 
                                    href="https://wa.link/u26l5v" 
                                    target="_blank" 
                                    rel="noreferrer"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="inline-flex items-center px-8 py-3 bg-secondary text-white text-xs tracking-widest uppercase font-medium hover:bg-accent transition-all duration-300"
                                >
                                    צרי קשר
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
