import React from 'react';
import WhatsAppIcon from "../../../utile/WhatsAppIcon";

const CtaButton = ({ text, link, className = "" }) => {
    return (
        <a 
            href={link} 
            target="_blank" 
            rel="noreferrer"
            className={`group inline-flex items-center justify-center gap-3 px-10 py-4 bg-secondary text-white text-sm tracking-widest uppercase font-medium hover:bg-accent transition-all duration-500 hover:shadow-gold ${className}`}
        >
            <WhatsAppIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span>{text}</span>
        </a>
    );
};

export default CtaButton;
