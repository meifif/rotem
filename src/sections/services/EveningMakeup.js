import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Clock, Eye, Feather, Palette, Star} from 'lucide-react';
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
        <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4 text-pink-500">איפור לאירועים וערב</h3>
            <div className="space-y-4 text-right">
                <p>
                    האיפור לאירועים וערב מותאם באופן מושלם ללבוש של כל אישה ולסוג האירוע. ניתן לבחור בין מגוון אפשרויות איפור ממראה אלגנטי או דרמטי מעושן לאיפור טבעי וקלאסי, בהתאם להעדפות ולאישיות הייחודית.
                </p>
                <p>
                    האיפור מתבצע באמצעות טכניקות מתקדמות המבליטות את הזוהר הטבעי של תווי הפנים עם תוספת גלאם ומבטיחות את עמידות האיפור לאורך כל הערב.
                </p>
                <p>
                    בסיום תהליך האיפור ההופעה של כל אחת מקרינה את הייחוד שלה ומאפשרת לה להרגיש הכי יפה באירוע.
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
                                        alt={`Evening Makeup ${index + 1}`}
                                        className="max-w-full max-h-full object-contain rounded-lg"
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <div className="bg-pink-50 p-8 rounded-lg shadow-inner">
                <h3 className="text-2xl font-bold text-pink-600 mb-8 text-center">למה לבחור באיפור ערב שלי?</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    <FeatureItem
                        icon={Star}
                        title="מוצרי איפור איכותיים"
                        description="שימוש במוצרים מקצועיים המבטיחים מראה מושלם ועמיד לאורך כל הערב."
                    />
                    <FeatureItem
                        icon={Eye}
                        title="התאמה מושלמת לאירוע"
                        description="איפור מותאם לסוג האירוע, הלבוש והאווירה, תוך שמירה על הסגנון האישי שלך."
                    />
                    <FeatureItem
                        icon={Palette}
                        title="מגוון סגנונות"
                        description="אפשרות לבחור בין מראה טבעי, אלגנטי או דרמטי, בהתאם להעדפותייך."
                    />
                    <FeatureItem
                        icon={Clock}
                        title="עמידות לאורך זמן"
                        description="טכניקות מתקדמות המבטיחות שהאיפור יישאר מושלם לאורך כל האירוע."
                    />
                </div>
            </div>

            <div className="mt-10 text-center flex justify-center">
                <CtaButton
                    link="https://wa.link/1deujn"
                    text="הזמיני תור לאיפור ערב"
                />
            </div>
        </div>
    );
};

export default EveningMakeup;