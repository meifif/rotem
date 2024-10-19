import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Award, Book, Palette, Users} from 'lucide-react';

// Import your images statically
import image1 from '../../img/personal-makeup-workshop/image1.jpg';
import image2 from '../../img/personal-makeup-workshop/image2.jpg';

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

const PersonalMakeupWorkshop = () => {
    const images = [image1, image2];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-pink-600 text-center">סדנת איפור אישי</h2>

            {/* Main Content */}
            <div className="mb-10">
                <p className="text-gray-700 text-lg leading-relaxed">
                    גלי את סודות האיפור המקצועי בסדנה אישית מותאמת במיוחד עבורך. בסדנה זו, אחלוק איתך טכניקות מתקדמות,
                    טיפים מקצועיים, ואבחר יחד איתך את המוצרים המתאימים ביותר לעור שלך ולסגנון האיפור שאת אוהבת.
                    הסדנה מיועדת לכל הרמות, מתחילות ועד מתקדמות, ומותאמת אישית לצרכים ולמטרות שלך.
                    תלמדי כיצד להדגיש את תווי הפנים הטבעיים שלך וליצור מראה מושלם לכל הזדמנות.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mt-4">
                    בנוסף, אני מציעה אפשרות ייחודית ללוות אותך לחנות האיפור האהובה עליך. יחד, נבחר את המוצרים המתאימים
                    ביותר עבורך, תוך התאמה אישית לצרכייך ולהעדפותייך. אלווה אותך בתהליך הבחירה, אסביר על השימוש הנכון
                    בכל מוצר,
                    ואדגים כיצד להתאים את האיפור לסגנון האישי שלך. זו הזדמנות מצוינת ללמוד כיצד לבחור ולהשתמש במוצרים
                    באופן מקצועי, ולבנות את ערכת האיפור המושלמת עבורך.
                </p>
            </div>

            {/* Image Slider */}
            <div className="mb-8">
                <Slider {...sliderSettings}>
                    {images.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Makeup Workshop ${index + 1}`}
                                 className="w-full h-80 object-cover rounded-lg"/>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Features Section */}
            <div className="bg-pink-50 p-8 rounded-lg shadow-inner">
                <h3 className="text-2xl font-bold text-pink-600 mb-8 text-center">למה לבחור בסדנת האיפור האישית
                    שלי?</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    <FeatureItem
                        icon={Book}
                        title="למידה מותאמת אישית"
                        description="תכנית לימוד המותאמת לרמת הניסיון, הצרכים והמטרות האישיות שלך."
                    />
                    <FeatureItem
                        icon={Users}
                        title="יחס אישי"
                        description="תשומת לב מלאה ואינטראקציה ישירה, המאפשרות למידה מעמיקה ומהירה."
                    />
                    <FeatureItem
                        icon={Palette}
                        title="התנסות מעשית"
                        description="תרגול מעשי עם מגוון מוצרים וכלים מקצועיים, לחיזוק הביטחון והמיומנות."
                    />
                    <FeatureItem
                        icon={Award}
                        title="טיפים וטריקים מקצועיים"
                        description="שיתוף בידע מקצועי וטכניקות מתקדמות מעולם האיפור המקצועי."
                    />
                </div>
            </div>
            <div className="mt-10 text-center">
                <a href="https://wa.link/kmuzm5" target="_blank" rel="noreferrer">
                    <button
                        className="bg-pink-500 text-white font-bold py-3 px-6 rounded-full hover:bg-pink-600 transition duration-300">
                        הזמיני סדנת איפור אישית
                    </button>
                </a>
            </div>
        </div>
    );
};

export default PersonalMakeupWorkshop;