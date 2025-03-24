import React, {useRef, useState} from 'react';
import {
    Book,
    Heart,
    Moon,
    Sparkles,
    Briefcase,
    Cake,
    Baby,
    Palette,
    Video,
    Scissors,
    User,
    Users
} from 'lucide-react';
import BridalMakeup from './services/BridalMakeup';
import EveningMakeup from './services/EveningMakeup';
import BusinessMakeup from './services/BusinessMakeup';
import BirthdayMakeup from './services/BirthdayMakeup';
import TeenMakeup from './services/TeenMakeup';
import FacePainting from './services/FacePainting';
import StageMakeup from './services/StageMakeup';
import EyebrowStyling from './services/EyebrowStyling';
import PersonalWorkshop from './services/PersonalWorkshop';
import GroupWorkshop from './services/GroupWorkshop';

const ServiceButton = ({title, icon: Icon, isActive, onClick}) => (
    <button
        className={`flex items-center justify-center p-4 rounded-lg w-full ${
            isActive ? 'bg-pink-500 text-white' : 'bg-white text-pink-500'
        } hover:bg-pink-400 hover:text-white transition duration-300 text-center`}
        onClick={onClick}
    >
        <Icon className="w-6 h-6 ml-2"/>
        <span className="text-center">{title}</span>
    </button>
);

const Services = () => {
    const [activeService, setActiveService] = useState('bridal');
    const servicesRef = useRef(null);
    const contentRef = useRef(null);

    // Split services into two rows
    const servicesRow1 = [
        {id: 'bridal', title: 'איפור כלות', icon: Sparkles},
        {id: 'evening', title: 'איפור לאירועים וערב', icon: Moon},
        {id: 'business', title: 'איפור לאירועים עסקיים', icon: Briefcase},
        {id: 'birthday', title: 'איפור לימי הולדת ובת מצווה', icon: Cake},
        {id: 'teen', title: 'איפור לנערות', icon: Baby},
    ];

    const servicesRow2 = [
        {id: 'face-painting', title: 'איפור ציורי פנים', icon: Palette},
        {id: 'stage', title: 'איפור לבמה וטלוויזיה', icon: Video},
        {id: 'eyebrow', title: 'עיצוב גבות', icon: Scissors},
        {id: 'personal-workshop', title: 'סדנא אישית לאיפור עצמי', icon: User},
        {id: 'group-workshop', title: 'סדנאות איפור קבוצתיות', icon: Users},
    ];

    const handleServiceClick = (serviceId) => {
        setActiveService(serviceId);
        // On mobile, scroll to the content
        if (window.innerWidth < 768 && contentRef.current) {
            setTimeout(() => {
                contentRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }
    };

    const renderActiveService = () => {
        switch (activeService) {
            case 'bridal':
                return <BridalMakeup/>;
            case 'evening':
                return <EveningMakeup/>;
            case 'business':
                return <BusinessMakeup/>;
            case 'birthday':
                return <BirthdayMakeup/>;
            case 'teen':
                return <TeenMakeup/>;
            case 'face-painting':
                return <FacePainting/>;
            case 'stage':
                return <StageMakeup/>;
            case 'eyebrow':
                return <EyebrowStyling/>;
            case 'personal-workshop':
                return <PersonalWorkshop/>;
            case 'group-workshop':
                return <GroupWorkshop/>;
            default:
                return null;
        }
    };

    return (
        <div className="container mx-auto px-4 py-16 bg-pink-50" ref={servicesRef}>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-pink-500 font-secondary">השירותים שלי</h2>
            <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {servicesRow1.map((service) => (
                        <ServiceButton
                            key={service.id}
                            title={service.title}
                            icon={service.icon}
                            isActive={activeService === service.id}
                            onClick={() => handleServiceClick(service.id)}
                        />
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {servicesRow2.map((service) => (
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
            <div className="mt-8 mb-8" ref={contentRef}>
                {renderActiveService()}
            </div>
        </div>
    );
};

export default Services;