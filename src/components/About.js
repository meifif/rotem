import React from 'react';
import rotemImage from '../img/IMG_9439.jpg'; // Import the image

const About = () => {
    return (
        <div className="container mx-auto px-4 py-16 bg-white text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center text-primary font-secondary text-pink-500">אודות רותם יפרח</h1>
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <img src={rotemImage} alt="רותם יפרח - אמנית איפור" className="rounded-lg shadow-2xl transform hover:scale-105 transition duration-500" />
                </div>
                <div className="md:w-1/2 md:pr-12">
                    <p className="text-lg mb-6 leading-relaxed text-text">
                        שלום, אני רותם יפרח - אמנית איפור מקצועית עם ניסיון של למעלה מ-10 שנים בתחום. אני מאמינה שאיפור הוא אומנות שמשלבת יצירתיות, טכניקה וקסם.
                    </p>
                    <p className="text-lg mb-6 leading-relaxed text-text">
                        אני נהנית להשתמש בכישורים שלי כדי לעזור לנשים להרגיש יפות ובטוחות בעצמן, לא משנה מה האירוע.
                        אני משתמשת במוצרים איכותיים ובטכניקות מתקדמות כדי ליצור מראה טבעי ומחמיא לכל אחת.
                    </p>
                    <p className="text-lg leading-relaxed text-text">
                        אני מאמינה שיופי הוא ייחודי לכל אחת, ואשמח לעזור לך למצוא ולהדגיש את היופי הטבעי שלך.
                    </p>
                    <p className="text-lg leading-relaxed text-text">
                        אז בואי ונתחיל את המסע שלנו יחד.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;