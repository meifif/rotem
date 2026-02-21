import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import Modal from 'react-modal';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import { fetchPortfolioImages, hasRemotePortfolioSource } from '../config/imageSource';

Modal.setAppElement('#root');

function getLocalPortfolioImages() {
    const importAll = (r) => r.keys().map(r);
    const imageContext = require.context('../assets/portfolio', false, /\.(png|jpe?g|svg)$/);
    return importAll(imageContext);
}

const Portfolio = () => {
    const [images, setImages] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    useEffect(() => {
        const loadImages = async () => {
            if (hasRemotePortfolioSource()) {
                const remote = await fetchPortfolioImages();
                if (remote.length > 0) {
                    setImages(remote);
                    return;
                }
            }
            setImages(getLocalPortfolioImages());
        };
        loadImages();
    }, []);

    const openModal = (index) => {
        setSelectedImageIndex(index);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedImageIndex(null);
    };

    const navigateImage = (direction) => {
        if (direction === 'next') {
            setSelectedImageIndex((prev) => (prev + 1) % images.length);
        } else {
            setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
        }
    };

    return (
        <div dir="rtl" className="font-primary text-right bg-background text-text min-h-screen">
            <Navbar />
            <main id="portfolio" className="pt-24">
                {/* Hero section */}
                <div className="section-luxury bg-primary text-white text-center">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <span className="w-12 h-px bg-secondary"></span>
                            <span className="text-secondary text-xs tracking-widest uppercase font-medium">גלריה</span>
                            <span className="w-12 h-px bg-secondary"></span>
                        </div>
                        <h1 className="font-secondary text-display text-white mb-8">
                            תיק העבודות שלי
                        </h1>
                        <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
                            ברוכות הבאות לעולם היצירה שלי. כל פנים הן בד ייחודי, וכל איפור הוא יצירת אמנות 
                            המשקפת את האישיות והיופי הייחודי של כל לקוחה.
                        </p>
                    </div>
                </div>

                {/* Gallery grid */}
                <div className="section-luxury">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {images.map((image, index) => (
                                <div 
                                    key={index}
                                    className="group relative aspect-[3/4] overflow-hidden bg-background-alt cursor-pointer"
                                    onClick={() => openModal(index)}
                                >
                                    {/* Decorative frame on hover */}
                                    <div className="absolute inset-2 border border-secondary/0 group-hover:border-secondary/40 transition-all duration-500 z-10 pointer-events-none"></div>
                                    
                                    <LazyLoadImage
                                        src={image}
                                        alt={`תמונת פורטפוליו ${index + 1}`}
                                        effect="blur"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Lightbox Modal */}
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="תמונת פורטפוליו"
                    className="modal"
                    overlayClassName="overlay"
                >
                    {/* Close button */}
                    <button 
                        onClick={closeModal}
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-20 p-2"
                    >
                        <X size={28} />
                    </button>

                    {/* Navigation buttons */}
                    <button 
                        onClick={() => navigateImage('prev')}
                        className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-20 p-2"
                    >
                        <ArrowLeft size={32} />
                    </button>
                    <button 
                        onClick={() => navigateImage('next')}
                        className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-20 p-2"
                    >
                        <ArrowRight size={32} />
                    </button>

                    {/* Image */}
                    {selectedImageIndex !== null && (
                        <img 
                            loading="lazy" 
                            src={images[selectedImageIndex]} 
                            alt="תמונת פורטפוליו מוגדלת"
                            className="max-w-full max-h-full object-contain"
                        />
                    )}

                    {/* Image counter */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm">
                        {selectedImageIndex !== null && `${selectedImageIndex + 1} / ${images.length}`}
                    </div>
                </Modal>
            </main>
            <Footer />
        </div>
    );
};

export default Portfolio;
