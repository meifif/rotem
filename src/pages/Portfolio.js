import React, {useEffect, useState} from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Portfolio = () => {
    const [images, setImages] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const importAll = (r) => r.keys().map(r);
        const loadImages = async () => {
            const imageContext = require.context('../assets/portfolio', false, /\.(png|jpe?g|svg)$/);
            const loadedImages = importAll(imageContext);
            setImages(loadedImages);
        };
        loadImages();
    }, []);

    const openModal = (image) => {
        setSelectedImage(image);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (

        <div dir="rtl" className="font-primary text-right bg-background text-text">
            <Navbar/>
            <main id="portfolio">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-4xl font-bold text-pink-500 mb-8 text-center">תיק העבודות שלי</h1>

                    <div className="max-w-3xl mx-auto mb-12 text-center">
                        <p className="text-lg mb-4">
                            ברוכים הבאים לעולם היצירה שלי! אני רותם יפרח, אמנית איפור מקצועית המתמחה באיפור כלות, איפור
                            ערב, ועיצוב גבות.
                        </p>
                        <p className="text-lg mb-4">
                            כל פנים הן בד ייחודי עבורי, וכל איפור הוא יצירת אמנות המשקפת את האישיות והיופי הייחודי של
                            הלקוחה.
                            אני מאמינה שאיפור הוא לא רק על שינוי המראה החיצוני, אלא על חיזוק הביטחון העצמי והרגשת
                            המיוחדות של כל אישה.
                        </p>
                        <p className="text-lg mb-4">
                            בגלריה שלפניכם תוכלו להתרשם ממגוון העבודות שלי - מאיפורי כלות רומנטיים, דרך איפורי ערב
                            דרמטיים, ועד לעיצובי גבות מדויקים.
                            כל תמונה מספרת סיפור של רגע מיוחד, של התרגשות, ושל יופי אמיתי שמגיע מבפנים.
                        </p>
                        <p className="text-lg font-semibold">
                            מוזמנות לצלול לעולם של יופי, צבע ויצירתיות - ולדמיין את עצמכן ביצירה הבאה שלי!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {images.map((image, index) => (
                            <div key={index}
                                 className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
                                <LazyLoadImage
                                    src={image}
                                    alt={`תמונת פורטפוליו ${index + 1}`}
                                    effect="blur"
                                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300 cursor-pointer"
                                    onClick={() => openModal(image)}
                                />
                            </div>
                        ))}
                    </div>

                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="תמונת פורטפוליו"
                        className="modal"
                        overlayClassName="overlay"
                    >
                        <button onClick={closeModal}
                                className="absolute top-4 right-4 text-white text-2xl">&times;</button>
                        {selectedImage && (
                            <img src={selectedImage} alt="תמונת פורטפוליו מוגדלת"
                                 className="max-w-full max-h-full object-contain"/>
                        )}
                    </Modal>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default Portfolio;