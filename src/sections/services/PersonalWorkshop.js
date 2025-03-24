import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Book, Users, Star, Clock} from 'lucide-react';
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

const PersonalWorkshop = () => {
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
            <h3 className="text-2xl font-bold mb-4 text-pink-500">סדנת איפור אישית</h3>
            <div className="space-y-4 text-right">
                <p>
                    סדנת איפור אישית מותאמת במיוחד עבורך, מעניקה לך את הכלים והידע להתאפר בצורה מקצועית ומחמיאה.
                </p>
                <p>
                    במהלך הסדנה נלמד טכניקות איפור מתקדמות, נכיר את המוצרים המתאימים ביותר לסוג העור שלך, ונתרגל יחד את השלבים השונים. אני אלווה אותך צעד אחר צעד, תוך התאמת הטכניקות והצבעים למבנה הפנים ולסגנון האישי שלך.
                </p>
                <p>
                    בסיום הסדנה תקבלי חוברת הדרכה מפורטת וטיפים שימושיים להמשך התרגול בבית.
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
                                        alt={`Personal Makeup Workshop ${index + 1}`}
                                        className="max-w-full max-h-full object-contain rounded-lg"
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <div className="bg-pink-50 p-8 rounded-lg shadow-inner">
                <h3 className="text-2xl font-bold text-pink-600 mb-8 text-center">למה לבחור בסדנת איפור אישית?</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    <FeatureItem
                        icon={Book}
                        title="למידה מותאמת אישית"
                        description="תכנית לימוד המותאמת לצרכים ולרמת הידע שלך."
                    />
                    <FeatureItem
                        icon={Users}
                        title="יחס אישי"
                        description="תשומת לב מלאה והדרכה צמודה לאורך כל הסדנה."
                    />
                    <FeatureItem
                        icon={Star}
                        title="טכניקות מקצועיות"
                        description="לימוד שיטות איפור מתקדמות וטיפים מקצועיים."
                    />
                    <FeatureItem
                        icon={Clock}
                        title="גמישות בזמנים"
                        description="אפשרות לקביעת מועד הסדנה בהתאם ללוח הזמנים שלך."
                    />
                </div>
            </div>

            <div className="mt-10 text-center flex justify-center">
                <CtaButton
                    link="https://wa.link/1deujn"
                    text="הזמיני סדנת איפור אישית"
                />
            </div>
        </div>
    );
};

export default PersonalWorkshop; 