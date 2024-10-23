import React from 'react';
import WhatsAppIcon from "../../../utile/WhatsAppIcon";

const CtaButton = ({text, link, className = ""}) => {
    return (
        <a href={link} target="_blank" rel="noreferrer">
            <button
                className="bg-green-500 text-white font-bold py-3 px-6 rounded-full hover:bg-green-600 transition duration-300 flex items-center">
                <WhatsAppIcon className="ml-2 flex-shrink-0" size={24}/>
                <span>{text}</span>
            </button>
        </a>
    );
};

export default CtaButton;