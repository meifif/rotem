import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto px-4 py-16 bg-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-primary font-secondary">אודות רותם</h2>
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <img src="/api/placeholder/600/400" alt="רותם - אמנית איפור" className="rounded-lg shadow-2xl transform hover:scale-105 transition duration-500" />
                </div>
                <div className="md:w-1/2 md:pr-12">
                    <p className="text-lg mb-6 leading-relaxed text-text">
                        שלום, אני רותם - אמנית איפור מקצועית עם ניסיון של למעלה מ-10 שנים בתחום. התשוקה שלי היא ליצור מראה יפהפה ומושלם לכל אישה, תוך התאמה אישית לסגנון ולאופי שלה.
                    </p>
                    <p className="text-lg mb-6 leading-relaxed text-text">
                        אני מתמחה באיפור כלות, איפור ערב, עיצוב גבות והסרת שיער עדין. הגישה שלי משלבת טכניקות מתקדמות עם תשומת לב מדוקדקת לפרטים, כדי להבטיח שכל לקוחה תרגיש הכי יפה ובטוחה בעצמה.
                    </p>
                    <p className="text-lg leading-relaxed text-text">
                        אני מאמינה שיופי הוא ייחודי לכל אחת, ושמחה לעזור לך למצוא ולהדגיש את היופי הטבעי שלך.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;