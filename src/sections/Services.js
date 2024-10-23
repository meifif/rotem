import React, {useRef, useState} from 'react';
import {Book, Heart, Moon, Sparkles} from 'lucide-react';
import BridalMakeup from './services/BridalMakeup';
import EveningMakeup from './services/EveningMakeup';
import EyebrowStyling from './services/EyebrowStyling';
import PersonalMakeupWorkshop from './services/PersonalMakeupWorkshop';

const ServiceButton = ({title, icon: Icon, isActive, onClick}) => (
    <button
        className={`flex items-center p-4 rounded-lg ${
            isActive ? 'bg-pink-500 text-white' : 'bg-white text-pink-500'
        } hover:bg-pink-400 hover:text-white transition duration-300`}
        onClick={onClick}
    >
        <Icon className="w-6 h-6 mr-2"/>
        <span>{title}</span>
    </button>
);

const Services = () => {
    const [activeService, setActiveService] = useState('bridal');
    const servicesRef = useRef(null);

    const services = [
        {id: 'bridal', title: 'איפור כלות', icon: Sparkles},
        {id: 'evening', title: 'איפור ערב', icon: Moon},
        {id: 'eyebrow', title: 'עיצוב גבות ושפם', icon: Heart},
        {id: 'workshop', title: 'סדנת איפור אישי', icon: Book},
    ];

    const handleServiceClick = (serviceId) => {
        setActiveService(serviceId);
        if (servicesRef.current) {
            servicesRef.current.scrollIntoView({behavior: 'smooth'});
        }
    };

    const renderActiveService = () => {
        switch (activeService) {
            case 'bridal':
                return <BridalMakeup/>;
            case 'evening':
                return <EveningMakeup/>;
            case 'eyebrow':
                return <EyebrowStyling/>;
            case 'workshop':
                return <PersonalMakeupWorkshop/>;
            default:
                return null;
        }
    };

    return (
        <div className="container mx-auto px-4 py-16 bg-pink-50" ref={servicesRef}>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-pink-500 font-secondary">השירותים
                שלי</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {services.map((service) => (
                    <ServiceButton
                        key={service.id}
                        title={service.title}
                        icon={service.icon}
                        isActive={activeService === service.id}
                        onClick={() => handleServiceClick(service.id)}
                    />
                ))}
            </div>
            <div className="mt-8 mb-8">
                {renderActiveService()}
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {services.map((service) => (
                    <ServiceButton
                        key={service.id}
                        title={service.title}
                        icon={service.icon}
                        isActive={activeService === service.id}
                        onClick={() => handleServiceClick(service.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Services;