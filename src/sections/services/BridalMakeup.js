import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import a from '../../img/bridal-makeup/a.jpg';
import b from '../../img/bridal-makeup/b.jpg';
import d from '../../img/bridal-makeup/d.jpg';
import {Clock, Heart, Sparkles, Star} from 'lucide-react';
import CtaButton from "./shared/CtaButton";

const BridalMakeup = () => {
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
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '0',
                }
            }
        ]
    };

    // Replace these with actual image URLs
    const images = [
        a, b, d
    ];

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

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-pink-500">איפור כלות</h3>
            <p className="text-gray-700 mb-6">
                האיפור המושלם ליום הכי מיוחד בחייך – כזה שיישאר עמיד ומרהיב לאורך כל היום והלילה. אני מתמחה באומנות
                האיפור המותאמת אישית, עם דגש על יצירת מראה טבעי, זוהר, ומלוטש שיחמיא לך בכל זווית. המטרה שלי היא לגרום
                לך להרגיש הכי יפה, בטוחה וזוהרת ביום חתונתך, כשכל פרט נלקח בחשבון כדי להדגיש את יופייך הייחודי.
                האיפור מותאם בקפידה לכל כלה, מתוך הבנה מעמיקה של הסגנון האישי שלך, צבעי האירוע, ועיצוב השמלה, וכמובן –
                בהתאם לרצונות וההעדפות האישיות שלך.
            </p>
            <p className="text-gray-700 mb-6">
                בנוסף, ניתן לקבל שירות ליווי במהלך האירוע, כדי להבטיח שהאיפור יישאר רענן ומושלם לאורך כל הערב.
            </p>

            <div className="mb-8">
                <div className="max-w-2xl mx-auto"> {/* Increased max width */}
                    <Slider {...portraitSliderSettings}>
                        {images.map((image, index) => (
                            <div key={index} className="flex justify-center items-center">
                                <div className="w-full h-[400px] flex justify-center items-center"> {/* Fixed height */}
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
                <h3 className="text-2xl font-bold text-pink-600 mb-8 text-center">למה לבחור באיפור כלות שלי?</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    <FeatureItem
                        icon={Star}
                        title="מוצרי איפור פרימיום"
                        description="שימוש במוצרי איפור איכותיים ועמידים מהמותגים המובילים, המבטיחים מראה מושלם לאורך כל היום והלילה."
                    />
                    <FeatureItem
                        icon={Heart}
                        title="התאמה אישית מושלמת"
                        description="איפור מותאם במיוחד לגוון העור, מבנה הפנים והסגנון האישי שלך, תוך התחשבות בשמלה ובאווירת החתונה."
                    />
                    <FeatureItem
                        icon={Sparkles}
                        title="הדגשת היופי הטבעי"
                        description="טכניקות מתקדמות להבלטת תווי הפנים הטבעיים שלך, יצירת מראה זוהר ורענן שמדגיש את האישיות שלך."
                    />
                    <FeatureItem
                        icon={Clock}
                        title="איפור ניסיון"
                        description="אפשרות לניסיון איפור מלא לפני החתונה, כדי להבטיח שהמראה הסופי יהיה בדיוק כפי שחלמת."
                    />
                </div>
            </div>
            <div className="mt-10 text-center flex justify-center">
                <CtaButton
                    link="https://wa.link/i9ytqc"
                    text="הזמיני תור לאיפור כלות"
                />
            </div>
        </div>
    );
};

export default BridalMakeup;