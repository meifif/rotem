import React from 'react';
import {ExternalLink, Sparkles} from 'lucide-react';

const BRANDS = [
    {
        name: 'Malu Wilz ישראל',
        tagline: 'איפור וטיפוח מקצועי גרמני',
        description: 'מותג האיפור מס\' 1 בגרמניה – קאמופלאג\', מייקאפ, טיפוח ועוד.',
        byAppointment: true,
        appointmentText: 'מפיצה רשמית – מוזמנות להגיע לתיאום',
    },
    {
        name: 'עדה לזורגן',
        tagline: 'איפור וטיפוח מקצועי',
        url: 'https://s.humanz.ai/adah2025/921936/3',
        coupon: 'ADAH10',
        description: 'מוצרי איפור וטיפוח מקצועיים, קורסים ועוד.',
    },
    {
        name: 'FOREVER ישראל',
        tagline: 'טיפוח העור באלוורה',
        url: 'https://flpil.co.il/?agent=86688',
        description: 'מוצרי טיפוח עור ממותג האלוורה המוביל – ג\'לים, קרמים וטיפוח פנים. אצלי בהזמנה.',
    },
];

const BrandPartners = () => {
    return (
        <section id="brands" className="relative py-20 lg:py-28 bg-background-alt overflow-hidden">
            {/* Decorative elements */}
            <div
                className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>
            <div className="absolute top-24 right-10 w-24 h-24 border border-secondary/15 rounded-full"></div>
            <div className="absolute bottom-24 left-10 w-32 h-32 border border-secondary/10 rounded-full"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Section header */}
                <div className="max-w-2xl mx-auto text-center mb-14">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <span className="w-12 h-px bg-secondary"></span>
                        <span
                            className="text-secondary text-xs tracking-widest uppercase font-medium">מפיצה מורשית</span>
                        <span className="w-12 h-px bg-secondary"></span>
                    </div>
                    <h2 className="font-secondary text-display text-primary mb-4">
                        החנות שלי
                    </h2>
                    <p className="text-text-light text-lg">
                        את לא צריכה לבחור בין מותגים מובילים לשירות אישי. בואי לייעוץ חינם – נמצא יחד בדיוק מה מתאים לך,
                        ואז תרכשי דרך הקישורים שלי בקלות ובביטחון ✨
                    </p>
                </div>

                {/* Brand cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {BRANDS.map((brand, index) => {
                        const CardContent = () => (
                            <>
                                <div
                                    className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 text-secondary mb-5 group-hover/card:bg-secondary group-hover/card:text-white transition-colors duration-300">
                                    <Sparkles className="w-5 h-5"/>
                                </div>
                                <h3 className="font-secondary text-xl text-primary mb-1 group-hover/card:text-secondary transition-colors duration-300">
                                    {brand.name}
                                </h3>
                                <p className="text-secondary/90 text-sm font-medium mb-3">
                                    {brand.tagline}
                                </p>
                                <p className="text-text-light text-sm leading-relaxed mb-4 flex-1">
                                    {brand.description}
                                </p>
                                {brand.byAppointment ? (
                                    <p className="text-sm font-medium text-secondary">
                                        {brand.appointmentText}
                                    </p>
                                ) : (
                                    <>
                                        {brand.coupon && (
                                            <p className="text-sm mb-4">
                                                <span className="text-text-light">קוד הנחה: </span>
                                                <span
                                                    className="font-semibold text-secondary bg-secondary/10 px-2 py-0.5 rounded">
                                                    {brand.coupon}
                                                </span>
                                            </p>
                                        )}
                                        <span
                                            className="inline-flex items-center gap-2 text-secondary text-sm font-medium tracking-wide group-hover/card:gap-3 transition-all duration-300">
                                            <span>לחנות</span>
                                            <ExternalLink className="w-4 h-4"/>
                                        </span>
                                    </>
                                )}
                            </>
                        );

                        const cardClass = "group group/card flex flex-col bg-white border border-border rounded-sm overflow-hidden hover:border-secondary hover:shadow-gold transition-all duration-500";

                        if (brand.byAppointment) {
                            return (
                                <div key={index} className={cardClass}>
                                    <div className="p-6 lg:p-8 flex-1 flex flex-col">
                                        <CardContent/>
                                    </div>
                                </div>
                            );
                        }
                        return (
                            <a
                                key={index}
                                href={brand.url}
                                target="_blank"
                                rel="noreferrer"
                                className={cardClass}
                            >
                                <div className="p-6 lg:p-8 flex-1 flex flex-col">
                                    <CardContent/>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default BrandPartners;
