import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Scissors, Heart, Star, Clock} from 'lucide-react';
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

const EyebrowStyling = () => {
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
            <h3 className="text-2xl font-bold mb-4 text-pink-500">עיצוב גבות</h3>
            <div className="space-y-4 text-right">
                <p>
                    עיצוב גבות מקצועי הוא אומנות המשלבת דיוק, סימטריה והתאמה אישית למבנה הפנים שלך.
                </p>
                <p>
                    בטיפול אני משתמשת בטכניקות מתקדמות ומוצרים איכותיים כדי ליצור צורת גבות מושלמת שתדגיש את יופייך הטבעי. התהליך כולל ניקוי, עיצוב מדויק, והדרכה לטיפול ותחזוקה בבית.
                </p>
                <p>
                    התוצאה היא גבות מעוצבות בצורה טבעית ומחמיאה, המשדרגות את המראה הכללי שלך.
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
                                        alt={`Eyebrow Styling ${index + 1}`}
                                        className="max-w-full max-h-full object-contain rounded-lg"
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <div className="bg-pink-50 p-8 rounded-lg shadow-inner">
                <h3 className="text-2xl font-bold text-pink-600 mb-8 text-center">למה לבחור בעיצוב גבות אצלי?</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    <FeatureItem
                        icon={Scissors}
                        title="טכניקה מדויקת"
                        description="שימוש בכלים מקצועיים ובטכניקות מתקדמות לעיצוב מדויק ומושלם."
                    />
                    <FeatureItem
                        icon={Heart}
                        title="התאמה אישית"
                        description="עיצוב המותאם למבנה הפנים ולסגנון האישי שלך."
                    />
                    <FeatureItem
                        icon={Star}
                        title="תוצאות טבעיות"
                        description="יצירת מראה טבעי ומחמיא שמשתלב בצורה הרמונית עם תווי פנייך."
                    />
                    <FeatureItem
                        icon={Clock}
                        title="הדרכה מקצועית"
                        description="קבלת טיפים והנחיות לשמירה על צורת הגבות בין הטיפולים."
                    />
                </div>
            </div>

            <div className="mt-10 text-center flex justify-center">
                <CtaButton
                    link="https://wa.link/1deujn"
                    text="הזמיני תור לעיצוב גבות"
                />
            </div>
        </div>
    );
};

export default EyebrowStyling;