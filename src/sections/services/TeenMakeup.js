import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Baby, Heart, Star, Book} from 'lucide-react';
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

const TeenMakeup = () => {
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
            <h3 className="text-2xl font-bold mb-4 text-pink-500">איפור לנערות</h3>
            <div className="space-y-4 text-right">
                <p>
                    האיפור לנערות לוקח בחשבון את מצב העור של כל נערה, יוצר כיסוי לפי הצרכים האישיים ומבליט את היופי והמראה הטבעי שלה.
                </p>
                <p>
                    האיפור מתבצע באמצעות חומרים איכותיים המותאמים במיוחד לעור צעיר, כשהמטרה העיקרית היא להדגיש את הנשיות והאישיות של המתבגרת.
                </p>
                <p>
                    בסיום האיפור כל נערה מקבלת טיפים והדרכה לשימוש נכון במוצרי האיפור כדי להנות ממראה מושלם ולשמר אותו בשגרה היומיומית.
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
                                        alt={`Teen Makeup ${index + 1}`}
                                        className="max-w-full max-h-full object-contain rounded-lg"
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <div className="bg-pink-50 p-8 rounded-lg shadow-inner">
                <h3 className="text-2xl font-bold text-pink-600 mb-8 text-center">למה לבחור באיפור נערות שלי?</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    <FeatureItem
                        icon={Star}
                        title="מוצרים מותאמים לעור צעיר"
                        description="שימוש במוצרים איכותיים המתאימים במיוחד לעור מתבגר, תוך שמירה על בריאות העור."
                    />
                    <FeatureItem
                        icon={Heart}
                        title="הדגשת היופי הטבעי"
                        description="טכניקות איפור המדגישות את היופי הטבעי ומחזקות את הביטחון העצמי."
                    />
                    <FeatureItem
                        icon={Baby}
                        title="התאמה אישית"
                        description="איפור המותאם לגיל, לסגנון האישי ולצרכים הייחודיים של כל נערה."
                    />
                    <FeatureItem
                        icon={Book}
                        title="הדרכה והכוונה"
                        description="מתן טיפים מקצועיים לשימוש נכון במוצרי איפור ושמירה על עור בריא."
                    />
                </div>
            </div>

            <div className="mt-10 text-center flex justify-center">
                <CtaButton
                    link="https://wa.link/1deujn"
                    text="הזמיני תור לאיפור נערות"
                />
            </div>
        </div>
    );
};

export default TeenMakeup; 