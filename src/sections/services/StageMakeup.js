import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Video, Camera, Star, Clock} from 'lucide-react';
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

const StageMakeup = () => {
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
            <h3 className="text-2xl font-bold mb-4 text-pink-500">איפור לבמה וטלוויזיה</h3>
            <div className="space-y-4 text-right">
                <p>
                    איפור מקצועי לבמה וטלוויזיה דורש התאמה והבנה מעמיקה של דרישות של מצלמה ותאורה.
                </p>
                <p>
                    האיפור מתוכנן ומתבצע בקפידה כדי להבטיח מראה מושלם מכל זווית צילום, עם דגש מיוחד על עמידות ממושכת תחת אורות חזקים ותנאי במה. השימוש במוצרים מקצועיים באיכות גבוהה וטכניקות מתקדמות מבליט את תווי הפנים והבעתם.
                </p>
                <p>
                    בסיום האיפור המראה מרשים ומקצועי, עובר מסך ובולט היטב על הבמה.
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
                                        alt={`Stage Makeup ${index + 1}`}
                                        className="max-w-full max-h-full object-contain rounded-lg"
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <div className="bg-pink-50 p-8 rounded-lg shadow-inner">
                <h3 className="text-2xl font-bold text-pink-600 mb-8 text-center">למה לבחור באיפור במה וטלוויזיה שלי?</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    <FeatureItem
                        icon={Star}
                        title="מוצרים מקצועיים לבמה"
                        description="שימוש במוצרים איכותיים המותאמים במיוחד לתנאי תאורה חזקה וצילום."
                    />
                    <FeatureItem
                        icon={Camera}
                        title="התאמה לצילום"
                        description="טכניקות מיוחדות המבטיחות מראה מושלם מכל זווית צילום ותחת כל תאורה."
                    />
                    <FeatureItem
                        icon={Video}
                        title="מומחיות בתחום"
                        description="ניסיון רב בעבודה עם אנשי במה, שחקנים ומצולמים בטלוויזיה."
                    />
                    <FeatureItem
                        icon={Clock}
                        title="עמידות לאורך זמן"
                        description="איפור העומד בתנאי במה קשים ונשאר מושלם לאורך שעות של צילומים והופעות."
                    />
                </div>
            </div>

            <div className="mt-10 text-center flex justify-center">
                <CtaButton
                    link="https://wa.link/1deujn"
                    text="הזמיני תור לאיפור במה"
                />
            </div>
        </div>
    );
};

export default StageMakeup; 