import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ name, service, text }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current" />
            ))}
        </div>
        <p className="text-text mb-6 italic">"{text}"</p>
        <div className="font-semibold text-lg text-primary">{name}</div>
        <div className="text-sm text-secondary">{service}</div>
    </div>
);

const Testimonials = () => {
    const testimonials = [
        {
            name: 'מיכל כהן',
            service: 'איפור כלות',
            text: 'רותם עשתה לי איפור מדהים לחתונה! היא הקשיבה לכל הרצונות שלי והתוצאה הייתה מושלמת. האיפור החזיק מעמד כל הערב!'
        },
        {
            name: 'יעל לוי',
            service: 'עיצוב גבות',
            text: 'אני מגיעה לרותם כבר שנתיים לעיצוב גבות. היא מקצועית, עדינה, ותמיד יודעת איך להוציא את המיטב מהגבות שלי.'
        },
        {
            name: 'שירה אברהם',
            service: 'איפור ערב',
            text: 'רותם איפרה אותי לאירוע חשוב. היא הצליחה ליצור בדיוק את המראה שרציתי - אלגנטי אך לא מוגזם. קיבלתי המון מחמאות!'
        }
    ];

    return (
        <div className="container mx-auto px-4 py-16 bg-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-primary font-secondary">לקוחות מספרות</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} {...testimonial} />
                ))}
            </div>
        </div>
    );
};

export default Testimonials;