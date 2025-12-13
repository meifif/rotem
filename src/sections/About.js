import React from 'react';
import rotemImage from '../img/rotem.jpg';

const About = () => {
    return (
        <section className="section-luxury bg-white relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-background-alt/30"></div>
            <div className="absolute top-20 left-20 w-32 h-32 border border-secondary/10 rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-48 h-48 border border-secondary/10 rounded-full"></div>
            
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Image side */}
                    <div className="lg:w-1/2 relative">
                        <div className="relative">
                            {/* Decorative frame */}
                            <div className="absolute -top-4 -right-4 w-full h-full border border-secondary/30"></div>
                            
                            {/* Main image */}
                            <div className="relative overflow-hidden">
                                <img 
                                    src={rotemImage} 
                                    alt="רותם יפרח - אמנית איפור" 
                                    loading="lazy"
                                    className="w-full aspect-[3/4] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                                />
                                {/* Subtle overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none"></div>
                            </div>
                            
                            {/* Experience badge */}
                            <div className="absolute -bottom-6 -left-6 bg-secondary text-white px-8 py-6 text-center shadow-gold">
                                <span className="block font-secondary text-4xl font-medium">10+</span>
                                <span className="text-xs tracking-widest uppercase">שנות ניסיון</span>
                            </div>
                        </div>
                    </div>

                    {/* Content side */}
                    <div className="lg:w-1/2">
                        {/* Section label */}
                        <div className="flex items-center gap-4 mb-6">
                            <span className="w-12 h-px bg-secondary"></span>
                            <span className="text-secondary text-xs tracking-widest uppercase font-medium">אודות</span>
                        </div>

                        {/* Heading */}
                        <h2 className="font-secondary text-display text-primary mb-8">
                            רותם יפרח
                        </h2>

                        {/* Description */}
                        <div className="space-y-6 text-text-light leading-relaxed">
                            <p className="text-lg">
                                שלום, אני רותם יפרח - אמנית איפור מקצועית עם ניסיון של למעלה מ-10 שנים בתחום, 
                                בוגרת ירין שחף ורוית אסף.
                            </p>
                            <p>
                                אני מאמינה שאיפור הוא אומנות שמשלבת יצירתיות, טכניקה וקסם. 
                                אני נהנית להשתמש בכישורים שלי כדי לעזור לנשים להרגיש יפות ובטוחות בעצמן, 
                                לא משנה מה האירוע.
                            </p>
                            <p>
                                אני משתמשת במוצרים איכותיים ובטכניקות מתקדמות כדי ליצור מראה טבעי ומחמיא לכל אחת. 
                                אני מאמינה שיופי הוא ייחודי לכל אחת, ואשמח לעזור לך למצוא ולהדגיש את היופי הטבעי שלך.
                            </p>
                        </div>

                        {/* Quote */}
                        <blockquote className="mt-10 pr-6 border-r-2 border-secondary">
                            <p className="font-secondary text-xl md:text-2xl text-primary italic">
                                "בואי ונתחיל את המסע שלנו יחד"
                            </p>
                        </blockquote>

                        {/* Credentials */}
                        <div className="mt-10 flex flex-wrap gap-6">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-secondary"></div>
                                <span className="text-sm text-text-light">בוגרת ירין שחף</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-secondary"></div>
                                <span className="text-sm text-text-light">בוגרת רוית אסף</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-secondary"></div>
                                <span className="text-sm text-text-light">מומחית איפור כלות</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
