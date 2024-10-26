import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Droplet, Ruler, Scissors, Smile} from 'lucide-react';
import CtaButton from "./shared/CtaButton";

import image1 from '../../img/eyebrow/image1.png';
import image2 from '../../img/eyebrow/image2.png';
import image3 from '../../img/eyebrow/image3.png';

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
    const images = [image1, image2, image3];

    const sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        className: 'center-slick'
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-pink-600 text-center">עיצוב גבות</h2>

            <div className="mb-10">
                <p className="text-gray-700 text-lg leading-relaxed">
                    עיצוב גבות מקצועי יכול לשנות את כל מראה הפנים ולהדגיש את יופייך הטבעי. אני מתמחה בהתאמה אישית של
                    צורת הגבות
                    לפי מבנה הפנים שלך, תוך שימוש בטכניקות מתקדמות לעיצוב, צביעה וטיפוח. בין אם את מעוניינת בגבות טבעיות
                    או
                    במראה מודגש יותר, אני אעצב עבורך את הגבות המושלמות שיתאימו בדיוק לסגנון ולאופי שלך.
                </p>
            </div>

            <style jsx global>{`
                .center-slick .slick-slide {
                    display: flex !important;
                    justify-content: center;
                    align-items: center;
                }

                .center-slick .slick-track {
                    display: flex !important;
                    align-items: center;
                }
            `}</style>

            <div className="mb-8">
                <Slider {...sliderSettings}>
                    {images.map((image, index) => (
                        <div key={index}>
                            <img
                                src={image}
                                alt={`Eyebrow Styling ${index + 1}`}
                                style={{
                                    margin: '0 auto',
                                    maxHeight: '400px',
                                    width: 'auto'
                                }}
                            />
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="bg-pink-50 p-8 rounded-lg shadow-inner">
                <h3 className="text-2xl font-bold text-pink-600 mb-8 text-center">למה לבחור בשירות עיצוב הגבות שלי?</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    <FeatureItem
                        icon={Scissors}
                        title="טכניקות עיצוב מתקדמות"
                        description="שימוש בשיטות חדשניות לעיצוב גבות, כולל שימוש בפינצטה, חוט וגזירה מדויקת."
                    />
                    <FeatureItem
                        icon={Ruler}
                        title="התאמה אישית למבנה הפנים"
                        description="ניתוח מדוקדק של מבנה הפנים שלך ליצירת צורת גבות שתחמיא לך ביותר."
                    />
                    <FeatureItem
                        icon={Droplet}
                        title="צביעה וטיפוח"
                        description="שימוש בצבעים טבעיים ובטכניקות טיפוח לגבות מלאות ומטופחות."
                    />
                    <FeatureItem
                        icon={Smile}
                        title="תוצאות מתמשכות"
                        description="ייעוץ לטיפול ביתי ותחזוקה נכונה לשמירה על מראה מושלם לאורך זמן."
                    />
                </div>
            </div>
            <div className="mt-10 text-center flex justify-center">
                <CtaButton
                    link="https://wa.link/bpxxhn"
                    text="הזמיני תור לעיצוב גבות"
                />
            </div>
        </div>
    );
};

export default EyebrowStyling;