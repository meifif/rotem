import React from 'react';
import { Sparkles, Heart, Moon, Scissors } from 'lucide-react';

const ServiceCard = ({ title, description, icon: Icon }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 text-pink-300">
        <Icon className="text-primary w-12 h-12 mb-4 text-pink-200" />
        <h3 className="text-2xl font-semibold mb-4 text-primary text-pink-400">{title}</h3>
        <p className="text-text">{description}</p>
    </div>
);

const Services = () => {
    const services = [
        {
            title: 'איפור כלות',
            description: 'איפור מושלם ליום המיוחד שלך, עמיד לאורך כל היום והלילה.',
            icon: Sparkles
        },
        {
            title: 'איפור ערב',
            description: 'מראה מרהיב לכל אירוע מיוחד, מותאם לסגנון ולשמלה שלך.',
            icon: Moon
        },
        {
            title: 'עיצוב גבות',
            description: 'עיצוב וטיפוח גבות להשלמת המראה שלך ולהדגשת תווי הפנים.',
            icon: Heart
        },
        {
            title: 'הסרת שיער',
            description: 'הסרת שיער עדינה ומקצועית לפנים, כולל טיפול בשפם ובפאות.',
            icon: Scissors
        }
    ];

    return (
        <div className="container mx-auto px-4 py-16 bg-gradient-to-r from-primary-light to-secondary-light ">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-primary font-secondary text-pink-500">השירותים שלי</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                ))}
            </div>
        </div>
    );
};

export default Services;