import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Clock, Eye, Feather, Palette} from 'lucide-react';

// Import your images statically
import a from '../../img/evening-makeup/a.jpg';
import b from '../../img/evening-makeup/b.jpg';
import c from '../../img/evening-makeup/c.jpg';
import CtaButton from "./shared/CtaButton";

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

const EveningMakeup = () => {
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
        <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-pink-600 text-center">איפור ערב</h2>

            {/* Main Content */}
            <div className="mb-10">
                <p className="text-gray-700 text-lg leading-relaxed">
                    מראה מרהיב לכל אירוע מיוחד, מותאם לסגנון שלך. איפור הערב שלי מדגיש את היופי הטבעי שלך
                    ומוסיף נגיעה של זוהר וקסם. בין אם את מחפשת מראה דרמטי ונועז או עדין ורומנטי, אני אתאים את האיפור
                    בדיוק לאישיות ולאירוע שלך. עם טכניקות מתקדמות ומוצרים איכותיים, נבטיח שתיראי ותרגישי מדהים לאורך כל
                    הערב.
                </p>
            </div>

            <div className="mb-8">
                <div className="max-w-2xl mx-auto"> {/* Increased max width */}
                    <Slider {...portraitSliderSettings}>
                        {images.map((image, index) => (
                            <div key={index} className="flex justify-center items-center">
                                <div className="w-full h-[400px] flex justify-center items-center"> {/* Fixed height */}
                                    <img
                                        loading="lazy"
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

            {/* Features Section */}
            <div className="bg-pink-50 p-8 rounded-lg shadow-inner">
                <h3 className="text-2xl font-bold text-pink-600 mb-8 text-center">למה לבחור באיפור ערב שלי?</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    <FeatureItem
                        icon={Eye}
                        title="טכניקות מתקדמות להדגשת העיניים"
                        description="שימוש בשיטות חדשניות ליצירת מראה עיניים מרהיב שמושך תשומת לב ומתאים לאירוע שלך."
                    />
                    <FeatureItem
                        icon={Palette}
                        title="התאמת צבעים מושלמת"
                        description="בחירה קפדנית של צבעים המחמיאים לגוון העור שלך ומשתלבים עם הבגדים והאקססוריז."
                    />
                    <FeatureItem
                        icon={Clock}
                        title="איפור עמיד לאורך כל הערב"
                        description="שימוש במוצרים איכותיים ובטכניקות מיוחדות להבטחת איפור שנשאר מושלם לאורך כל האירוע."
                    />
                    <FeatureItem
                        icon={Feather}
                        title="תוספות מיוחדות"
                        description="אפשרות לשדרוג המראה עם תוספות כמו ריסים מלאכותיים, הדגשות מיוחדות ואפקטים נוצצים."
                    />
                </div>
            </div>
            <div className="mt-10 text-center flex justify-center">
                <CtaButton
                    link="https://wa.link/rkh2jz"
                    text="הזמיני תור לאיפור ערב"
                />
            </div>
        </div>
    );
};

export default EveningMakeup;