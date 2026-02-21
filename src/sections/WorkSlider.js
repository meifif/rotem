import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { fetchMainSlideImages, hasRemoteMainSlideSource } from '../config/imageSource';

function getLocalMainSlideImages() {
    const importAll = (r) => r.keys().map(r);
    const imageContext = require.context('../assets/main-slide', false, /\.(png|jpe?g|svg)$/);
    return importAll(imageContext);
}

const WorkSlider = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const loadImages = async () => {
            if (hasRemoteMainSlideSource()) {
                const remote = await fetchMainSlideImages();
                if (remote.length > 0) {
                    setImages(remote);
                    return;
                }
            }
            setImages(getLocalMainSlideImages());
        };
        loadImages();
    }, []);

    const sliderSettings = {
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        centerMode: true,
        centerPadding: '15%',
        adaptiveHeight: false,
        dots: true,
        arrows: false,
        pauseOnHover: true,
        cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    centerPadding: '10%',
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '5%',
                }
            }
        ]
    };

    return (
        <section className="section-luxury bg-white relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-white to-background pointer-events-none"></div>
            
            <div className="relative z-10">
                {/* Section header */}
                <div className="text-center mb-12 px-6">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <span className="w-12 h-px bg-secondary"></span>
                        <span className="text-secondary text-xs tracking-widest uppercase font-medium">גלריה</span>
                        <span className="w-12 h-px bg-secondary"></span>
                    </div>
                    <h2 className="font-secondary text-display text-primary mb-4">
היופי שלכן                    </h2>
                    <p className="text-text-light max-w-2xl mx-auto">
                        הצצה לעולם היצירה שלי - כל פנים הן בד ייחודי
                    </p>
                </div>

                {/* Slider - constrained on desktop so section isn't oversized and quality stays sharp */}
                <div className="max-w-7xl mx-auto">
                    <Slider {...sliderSettings}>
                        {images.map((image, index) => (
                            <div key={index} className="px-2 md:px-4">
                                <div className="relative overflow-hidden group w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] mx-auto">
                                    {/* Decorative frame */}
                                    <div className="absolute -inset-2 border border-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                    
                                    <div className="aspect-[4/5] overflow-hidden bg-background">
                                        <img
                                            src={image}
                                            alt={`Rotem's Work ${index + 1}`}
                                            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </div>
                                    
                                    {/* Subtle overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* View all link */}
                <div className="text-center mt-12 px-6">
                    <Link 
                        to="/portfolio" 
                        className="group inline-flex items-center gap-3 text-secondary hover:text-accent transition-colors duration-300"
                    >
                        <span className="text-sm tracking-widest uppercase font-medium">לתיק העבודות המלא</span>
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default WorkSlider;
