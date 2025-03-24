import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Briefcase, Star, Clock, Sparkles, Shield} from 'lucide-react';
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

const BusinessMakeup = () => {
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
            <h3 className="text-2xl font-bold mb-4 text-pink-500">איפור לאירועים עסקיים</h3>
            <div className="space-y-4 text-right">
                <p>
                    האיפור לאירועים עסקיים מתאפיין ביצירת מראה מקצועי ומתוחכם, תוך שמירה על איזון מושלם בין הופעה יוקרתית לטבעית. האיפור מותאם במיוחד לפגישות עסקיות, ראיונות עבודה, כנסים והרצאות, עם דגש מיוחד על מראה מטופח.
                </p>
                <p>
                    האיפור מתבצע בגוונים טבעיים ועדינים המבטיחים תוצאה אלגנטית ומכובדת. אופי האיפור מוקפד ומתאים לכל סביבה עסקית והאווירה שלה.
                </p>
                <p>
                    בסיום תהליך האיפור המראה מקצועי ומרשים ומשלב בתוכו את הרכות הנשית הטבעית.
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
                                        alt={`Business Makeup ${index + 1}`}
                                        className="max-w-full max-h-full object-contain rounded-lg"
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <div className="bg-pink-50 p-8 rounded-lg shadow-inner">
                <h3 className="text-2xl font-bold text-pink-600 mb-8 text-center">למה לבחור באיפור עסקי שלי?</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    <FeatureItem
                        icon={Star}
                        title="מראה מקצועי ומדויק"
                        description="איפור מוקפד המשדר מקצועיות ואמינות, מותאם במיוחד לסביבה העסקית."
                    />
                    <FeatureItem
                        icon={Briefcase}
                        title="התאמה לסוג האירוע"
                        description="איפור מותאם לסוג הפגישה או האירוע העסקי, מראיונות עבודה ועד להרצאות וכנסים."
                    />
                    <FeatureItem
                        icon={Sparkles}
                        title="איזון מושלם"
                        description="שילוב מדויק בין מראה טבעי ומטופח לבין הופעה מקצועית ומרשימה."
                    />
                    <FeatureItem
                        icon={Clock}
                        title="עמידות לאורך היום"
                        description="שימוש בטכניקות ומוצרים המבטיחים מראה מושלם לאורך כל היום העסקי."
                    />
                </div>
            </div>

            <div className="mt-10 text-center flex justify-center">
                <CtaButton
                    link="https://wa.link/1deujn"
                    text="הזמיני תור לאיפור עסקי"
                />
            </div>
        </div>
    );
};

export default BusinessMakeup; 