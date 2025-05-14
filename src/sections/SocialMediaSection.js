import React from 'react';
import {Facebook, Instagram} from 'lucide-react';

const SocialMediaSection = () => {
    return (
        <div className="flex space-x-4 mt-4 justify-center">
            <a href="https://www.facebook.com/makeupbyrotemi" aria-label="Facebook" target="_blank"
               rel="noopener noreferrer"
               className="text-pink-100 hover:text-pink-600 transition duration-300">
                <Facebook size={24}/>
            </a>
            <a href="https://www.instagram.com/makeupbyrotemi/" aria-label="Instagram" target="_blank"
               rel="noopener noreferrer"
               className="text-pink-100 hover:text-pink-600 transition duration-300">
                <Instagram size={24}/>
            </a>
            <a href="https://www.tiktok.com/@rotem.shuman" aria-label="TikTok" target="_blank" rel="noopener noreferrer"
               className="text-pink-100 hover:text-pink-600 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                </svg>
            </a>
            <a href="https://www.threads.net/@makeupbyrotemi" aria-label="Threads" target="_blank"
               rel="noopener noreferrer"
               className="text-pink-100 hover:text-pink-600 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path
                        d="M19 7.5c-1.5-1.5-3.5-2.5-6-2.5h-3c-4.5 0-8 3.5-8 8v2c0 4.5 3.5 8 8 8h2c4.5 0 8-3.5 8-8v-3c0-2.5-1-4.5-2.5-6z"></path>
                    <path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                    <path d="M15 9v6"></path>
                </svg>
            </a>
        </div>
    );
};

export default SocialMediaSection;