import React, { useRef, useState } from 'react';
import {
    Sparkles,
    Moon,
    Briefcase,
    Cake,
    Heart,
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

const ServiceButton = ({ title, icon: Icon, isActive, onClick }) => (
    <button
        className={`group flex flex-col items-center justify-center p-6 transition-all duration-500 ${
            isActive 
                ? 'bg-secondary text-white shadow-gold' 
                : 'bg-white text-text border border-border hover:border-secondary'
        }`}
        onClick={onClick}
    >
        <Icon className={`w-6 h-6 mb-3 transition-transform duration-300 group-hover:scale-110 ${
            isActive ? 'text-white' : 'text-secondary'
        }`} />
        <span className="text-sm font-medium text-center leading-tight">{title}</span>
    </button>
);

const Services = () => {
    const [activeService, setActiveService] = useState('bridal');
    const servicesRef = useRef(null);
    const contentRef = useRef(null);

    const services = [
        { id: 'bridal', title: 'איפור כלות', icon: Sparkles },
        { id: 'evening', title: 'איפור לאירועים', icon: Moon },
        { id: 'business', title: 'אירועים עסקיים', icon: Briefcase },
        { id: 'birthday', title: 'ימי הולדת', icon: Cake },
        { id: 'teen', title: 'איפור לנערות', icon: Heart },
        { id: 'face-painting', title: 'ציורי פנים', icon: Palette },
        { id: 'stage', title: 'במה וטלוויזיה', icon: Video },
        { id: 'eyebrow', title: 'עיצוב גבות', icon: Scissors },
        { id: 'personal-workshop', title: 'סדנא אישית', icon: User },
        { id: 'group-workshop', title: 'סדנאות קבוצתיות', icon: Users },
    ];

    const handleServiceClick = (serviceId) => {
        setActiveService(serviceId);
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
            case 'bridal': return <BridalMakeup />;
            case 'evening': return <EveningMakeup />;
            case 'business': return <BusinessMakeup />;
            case 'birthday': return <BirthdayMakeup />;
            case 'teen': return <TeenMakeup />;
            case 'face-painting': return <FacePainting />;
            case 'stage': return <StageMakeup />;
            case 'eyebrow': return <EyebrowStyling />;
            case 'personal-workshop': return <PersonalWorkshop />;
            case 'group-workshop': return <GroupWorkshop />;
            default: return null;
        }
    };

    return (
        <section className="section-luxury bg-background-alt relative" ref={servicesRef}>
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>
            
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <span className="w-12 h-px bg-secondary"></span>
                        <span className="text-secondary text-xs tracking-widest uppercase font-medium">שירותים</span>
                        <span className="w-12 h-px bg-secondary"></span>
                    </div>
                    <h2 className="font-secondary text-display text-primary mb-4">
                        השירותים שלי
                    </h2>
                    <p className="text-text-light max-w-2xl mx-auto">
                        מגוון שירותי איפור מקצועיים המותאמים לכל אירוע ולכל סגנון
                    </p>
                </div>

                {/* Services grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 mb-12">
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

                {/* Service content */}
                <div ref={contentRef} className="mt-12">
                    {renderActiveService()}
                </div>
            </div>
        </section>
    );
};

export default Services;
