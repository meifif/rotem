import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Mail } from 'lucide-react';
import ContactForm from "../components/ContactForm";
import WhatsAppIcon from "../utile/WhatsAppIcon";

const ContactCTA = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    return (
        <section className="section-luxury bg-primary text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>
            <div className="absolute top-20 left-10 w-32 h-32 border border-secondary/10 rounded-full"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 border border-secondary/10 rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-64 h-64 border border-secondary/5 rounded-full"></div>
            
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Section header */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <span className="w-12 h-px bg-secondary"></span>
                        <span className="text-secondary text-xs tracking-widest uppercase font-medium">צרי קשר</span>
                        <span className="w-12 h-px bg-secondary"></span>
                    </div>

                    <h2 className="font-secondary text-display text-white mb-6">
                        בואי נדבר
                    </h2>

                    <p className="text-white/80 text-lg mb-4">
                        כל פרויקט מתחיל בשיחה - קצרה, לא מחייבת, ומאוד אישית
                    </p>
                    <p className="text-white/60 mb-12 max-w-xl mx-auto">
                        ספרי לי על האירוע שלך, על הסגנון שאת אוהבת, ועל החזון שלך.
                        אני כאן כדי להקשיב, לייעץ, ולעזור לך ליצור בדיוק את מה שאת רוצה
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
                        <a 
                            href="https://wa.link/z9cg9x" 
                            target="_blank" 
                            rel="noreferrer"
                            className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-secondary text-white text-sm tracking-widest uppercase font-medium hover:bg-secondary-light hover:text-primary transition-all duration-500 hover:shadow-gold w-full sm:w-auto"
                        >
                            <WhatsAppIcon className="w-5 h-5" />
                            <span>בואי נדבר בוואטסאפ</span>
                        </a>

                        <button
                            onClick={() => setIsFormVisible(!isFormVisible)}
                            className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-transparent text-white border border-white/30 text-sm tracking-widest uppercase font-medium hover:border-secondary hover:bg-secondary/10 transition-all duration-500 w-full sm:w-auto"
                        >
                            <Mail className="w-4 h-4" />
                            <span>{isFormVisible ? 'סגור' : 'שלחי הודעה'}</span>
                            {isFormVisible ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                    </div>

                    {/* Contact Form */}
                    <div className={`transition-all duration-700 overflow-hidden ${
                        isFormVisible ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                        <div className="bg-white/10 backdrop-blur-sm p-8 md:p-12 border border-white/10">
                            <ContactForm darkMode={true} />
                        </div>
                    </div>

                    {/* Promise text */}
                    <p className="mt-10 text-white/70 text-sm">
                        אשמח לענות על כל שאלה ולתאם פגישת ייעוץ אישית
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
