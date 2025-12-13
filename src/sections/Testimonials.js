import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ name, service, text }) => (
    <div className="bg-background-alt/30 p-8 border border-border/50 hover:border-secondary/30 transition-all duration-500 relative">
        {/* Decorative quote mark */}
        <div className="absolute top-6 right-6 text-6xl text-secondary/10 font-secondary leading-none">"</div>
        
        <div className="relative z-10">
            <p className="text-text-light mb-8 leading-relaxed italic">
                {text}
            </p>
            <div className="flex items-center gap-3 pt-6 border-t border-border/50">
                <div>
                    <div className="font-medium text-primary">{name}</div>
                    <div className="text-xs text-text-light/70 tracking-wide">{service}</div>
                </div>
            </div>
        </div>
    </div>
);

const Testimonials = () => {
    const testimonials = [
        {
            name: 'מיכל',
            service: 'כלה',
            text: 'רותם הבינה בדיוק את החזון שלי. האיפור היה מושלם - עדין, טבעי, ובדיוק כפי שדמיינתי. הוא החזיק מעמד לאורך כל הערב, והרגשתי קורנת.'
        },
        {
            name: 'יעל',
            service: 'לקוחה קבועה',
            text: 'אני מגיעה לרותם כבר שנתיים. היא מקצועית, עדינה, ותמיד יודעת בדיוק מה אני צריכה. זה לא רק טיפול - זו חוויה.'
        },
        {
            name: 'שירה',
            service: 'אירוע ערב',
            text: 'רותם יצרה לי מראה אלגנטי שהיה בדיוק מה שרציתי - מתוחכם אבל לא מוגזם. קיבלתי המון מחמאות, והאיפור נשאר מושלם לאורך כל הערב.'
        }
    ];

    return (
        <div className="container mx-auto px-6 lg:px-12 py-20 bg-white">
            {/* Section header */}
            <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-4 mb-6">
                    <span className="w-12 h-px bg-secondary"></span>
                    <span className="text-secondary text-xs tracking-widest uppercase font-medium">המלצות</span>
                    <span className="w-12 h-px bg-secondary"></span>
                </div>
                <h2 className="font-secondary text-display text-primary mb-4">
                    מה לקוחות שלי אומרות
                </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} {...testimonial} />
                ))}
            </div>
        </div>
    );
};

export default Testimonials;