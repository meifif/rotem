import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Palette, Heart, Star, Sparkles} from 'lucide-react';
import CtaButton from "./shared/CtaButton";

// Import your images statically
import a from '../../img/evening-makeup/a.jpg';
import b from '../../img/evening-makeup/b.jpg';
import c from '../../img/evening-makeup/c.jpg';

const FeatureItem = ({icon: Icon, title, description}) => (
    <div className="flex items-start space-x-4 mb-6">
        <div className="flex-shrink-0">
            <Icon className="w-8 h-8 text-pink-500"/>
        </div>
        <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-1">{title}</h4>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);

const FacePainting = () => {
    const images = [a, b, c];

    const portraitSliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: '0',
        adaptiveHeight: false,
        lazyLoad: 'ondemand',
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
        <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4 text-pink-500">איפור ציורי פנים</h3>
            <div className="space-y-4 text-right">
                <p>
                    איפור ציורי הפנים והגוף יוצר עיצובים ייחודיים וקסומים המותאמים לכל מגדר בכל גיל ולאירועים מגוונים. האיפור מותאם במיוחד לימי הולדת ומסיבות, לאירועים חברתיים, לחגיגות פורים ועוד.
                </p>
                <p>
                    האיפור מתבצע באמצעות צבעים מקצועיים ובטוחים לשימוש, במגוון רחב של עיצובים החל מפרפרים ופרחים עדינים ועד לדמויות מצוירות מורכבות וציורי פנים מלאים.
                </p>
                <p>
                    בסיום האיפור כל המשתתפים מתהדרים בציור ססגוני, צבעוני ומלהיב התורם לאווירה השמחה של האירוע.
                </p>
            </div>

            <div className="mb-8">
                <div className="max-w-2xl mx-auto">
                    <Slider {...portraitSliderSettings}>
                        {images.map((image, index) => (
                            <div key={index} className="flex justify-center items-center">
                                <div className="w-full h-[400px] flex justify-center items-center">
                                    <img
                                        src={image}
                                        alt={`Face Painting ${index + 1}`}
                                        className="max-w-full max-h-full object-contain rounded-lg"
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <div className="bg-pink-50 p-8 rounded-lg shadow-inner">
                <h3 className="text-2xl font-bold text-pink-600 mb-8 text-center">למה לבחור בציורי פנים שלי?</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    <FeatureItem
                        icon={Star}
                        title="צבעים מקצועיים ובטוחים"
                        description="שימוש בצבעים איכותיים, היפואלרגניים ובטוחים לשימוש על העור."
                    />
                    <FeatureItem
                        icon={Heart}
                        title="מגוון עיצובים"
                        description="אפשרויות רבות של ציורים, מפרפרים עדינים ועד לדמויות מורכבות."
                    />
                    <FeatureItem
                        icon={Palette}
                        title="התאמה אישית"
                        description="עיצובים מותאמים לכל גיל, מגדר וסוג אירוע, תוך התחשבות בבקשות מיוחדות."
                    />
                    <FeatureItem
                        icon={Sparkles}
                        title="יצירת אווירה קסומה"
                        description="תרומה לאווירה השמחה והמיוחדת של האירוע דרך אמנות ציורי הפנים."
                    />
                </div>
            </div>

            <div className="mt-10 text-center flex justify-center">
                <CtaButton
                    link="https://wa.link/1deujn"
                    text="הזמיני תור לציורי פנים"
                />
            </div>
        </div>
    );
};

export default FacePainting; 