import React from 'react';
import WhatsAppIcon from '../utile/WhatsAppIcon';

const WHATSAPP_URL = 'https://wa.link/u26l5v';

const FloatingContactButton = () => (
    <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-24 right-8 z-50 flex items-center justify-center p-3 rounded-full bg-secondary-strong text-white shadow-lg
            hover:bg-accent transition-all duration-300 transform hover:scale-110 opacity-90 hover:opacity-100 hover:shadow-gold"
        aria-label="צרו קשר בוואטסאפ"
    >
        <WhatsAppIcon size={24} />
    </a>
);

export default FloatingContactButton;
