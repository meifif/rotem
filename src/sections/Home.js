import React from 'react';
import { Phone, ChevronDown } from 'lucide-react';
import WhatsAppIcon from "../utile/WhatsAppIcon";

const RotemHome = () => {
    const services = [
        'איפור כלות',
        'איפור לאירועים',
        'עיצוב גבות',
        'סדנאות איפור',
    ];

    const scrollToWork = () => {
        document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
            {/* Elegant background pattern */}
            <div className="absolute inset-0 z-0">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background-alt"></div>
                
                {/* Decorative lines */}
                <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-secondary/20 to-transparent"></div>
                <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-secondary/20 to-transparent"></div>
                
                {/* Corner ornaments */}
                <div className="absolute top-20 left-10 w-20 h-20 border-t border-l border-secondary/30"></div>
                <div className="absolute top-20 right-10 w-20 h-20 border-t border-r border-secondary/30"></div>
                <div className="absolute bottom-20 left-10 w-20 h-20 border-b border-l border-secondary/30"></div>
                <div className="absolute bottom-20 right-10 w-20 h-20 border-b border-r border-secondary/30"></div>
            </div>

            {/* Main content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24 pb-16">
                {/* Elegant decorative element */}
                <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
                    <span className="w-12 h-px bg-secondary"></span>
                    <span className="text-secondary text-sm tracking-widest uppercase font-primary">אמנית איפור</span>
                    <span className="w-12 h-px bg-secondary"></span>
                </div>

                {/* Logo / Name */}
                <div className="mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                    <img
                        src="/logo.png"
                        alt="Rotem Ifrach Logo"
                        className="w-56 h-56 mx-auto mb-6 opacity-90 object-contain"
                        width={224}
                        height={224}
                        fetchPriority="high"
                    />
                </div>

                {/* Tagline */}
                <p className="font-secondary text-2xl md:text-3xl text-text-light mb-12 opacity-0 animate-fade-in-up" 
                   style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                    איפור הוא אמנות, הפנים שלך הן הקנבס
                </p>

                {/* Services - elegant horizontal list */}
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-14 opacity-0 animate-fade-in-up"
                     style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                    {services.map((service, index) => (
                        <span 
                            key={index} 
                            className="flex items-center text-text-light text-sm tracking-wide"
                        >
                            <span className="w-1.5 h-1.5 bg-secondary rounded-full ml-3"></span>
                            {service}
                        </span>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 opacity-0 animate-fade-in-up"
                     style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                    <a 
                        href="https://wa.link/u26l5v" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-secondary text-white text-sm tracking-widest uppercase font-medium hover:bg-accent transition-all duration-500 hover:shadow-gold"
                    >
                        <WhatsAppIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
                        <span>קבעי פגישת ייעוץ</span>
                    </a>
                    <a 
                        href="tel:053-2509989" 
                        className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-transparent text-primary border border-primary/20 text-sm tracking-widest uppercase font-medium hover:border-secondary hover:text-secondary transition-all duration-500"
                    >
                        <Phone className="w-4 h-4 transition-transform group-hover:scale-110" />
                        <span>053-2509989</span>
                    </a>
                </div>

                {/* Trust indicators */}
                <div className="mt-16 flex items-center justify-center gap-8 text-text-light/60 text-sm opacity-0 animate-fade-in"
                     style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                    <span>10+ שנות ניסיון</span>
                    <span className="w-1 h-1 bg-secondary/40 rounded-full"></span>
                    <span>בוגרת ירין שחף</span>
                    <span className="w-1 h-1 bg-secondary/40 rounded-full"></span>
                    <span>בוגרת רוית אסף</span>
                </div>
            </div>

            {/* Scroll indicator */}
            <button 
                type="button"
                onClick={scrollToWork}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-secondary/60 hover:text-secondary transition-colors cursor-pointer animate-bounce"
                aria-label="גלול לחלק הגלריה"
            >
                <ChevronDown size={28} />
            </button>
        </div>
    );
};

export default RotemHome;
