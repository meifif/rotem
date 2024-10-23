import React, {useEffect, useState} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WorkSlider = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const importAll = (r) => r.keys().map(r);
        const loadImages = async () => {
            const imageContextBM = require.context('../assets/main-slide', false, /\.(png|jpe?g|svg)$/);
            const loadedImages = importAll(imageContextBM);
            setImages(loadedImages);
        };
        loadImages();
    }, []);

    const sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: '0',
        adaptiveHeight: true,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '0',
                }
            }
        ]
    };

    return (
        <div className="container mx-auto">
            <div className="max-w-2xl mx-auto">
                <Slider {...sliderSettings}>
                    {images.map((image, index) => (
                        <div key={index} className="flex justify-center items-center">
                            <div className="w-full h-[400px] flex justify-center items-center">
                                <img
                                    src={image}
                                    alt={`Rotem's Work ${index + 1}`}
                                    className="max-w-full max-h-full object-contain rounded-lg"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default WorkSlider;