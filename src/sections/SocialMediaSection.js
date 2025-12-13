import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const SocialMediaSection = () => {
    const socialLinks = [
        {
            href: "https://www.facebook.com/makeupbyrotemi",
            label: "Facebook",
            icon: <Facebook size={18} />
        },
        {
            href: "https://www.instagram.com/makeupbyrotemi/",
            label: "Instagram",
            icon: <Instagram size={18} />
        },
        {
            href: "https://www.tiktok.com/@rotem.shuman",
            label: "TikTok",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                </svg>
            )
        },
        {
            href: "https://www.threads.net/@makeupbyrotemi",
            label: "Threads",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 7.5c-1.5-1.5-3.5-2.5-6-2.5h-3c-4.5 0-8 3.5-8 8v2c0 4.5 3.5 8 8 8h2c4.5 0 8-3.5 8-8v-3c0-2.5-1-4.5-2.5-6z"></path>
                    <path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                    <path d="M15 9v6"></path>
                </svg>
            )
        }
    ];

    return (
        <div className="flex gap-3 mt-4">
            {socialLinks.map((social, index) => (
                <a 
                    key={index}
                    href={social.href} 
                    aria-label={social.label} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center border border-white/20 text-white/60 hover:text-secondary hover:border-secondary transition-all duration-300"
                >
                    {social.icon}
                </a>
            ))}
        </div>
    );
};

export default SocialMediaSection;
