import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled up to given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className={`fixed bottom-8 right-8 p-3 rounded-full bg-pink-500 text-white shadow-lg 
                        hover:bg-pink-600 transition-all duration-300 transform hover:scale-110 z-50
                        opacity-90 hover:opacity-100`}
                    aria-label="Scroll to top"
                >
                    <ChevronUp className="w-6 h-6" />
                </button>
            )}
        </>
    );
};

export default ScrollToTop; 