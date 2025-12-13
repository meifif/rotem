import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';

const ContactForm = ({ darkMode = false }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset after showing success
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', phone: '', email: '', message: '' });
        }, 3000);
    };

    const inputBaseStyles = darkMode 
        ? "w-full px-5 py-4 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-secondary focus:outline-none transition-all duration-300"
        : "w-full px-5 py-4 bg-white border border-border text-text placeholder-text-light focus:border-secondary focus:outline-none transition-all duration-300";

    const labelStyles = darkMode
        ? "block text-white/70 text-xs tracking-widest uppercase mb-2"
        : "block text-text-light text-xs tracking-widest uppercase mb-2";

    if (isSubmitted) {
        return (
            <div className="text-center py-12">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${darkMode ? 'bg-secondary' : 'bg-secondary'}`}>
                    <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className={`font-secondary text-2xl mb-3 ${darkMode ? 'text-white' : 'text-primary'}`}>
                    תודה רבה
                </h3>
                <p className={darkMode ? 'text-white/70' : 'text-text-light'}>
                    קיבלתי את ההודעה שלך ואשמח לחזור אלייך בהקדם
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className={labelStyles}>שם מלא</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={inputBaseStyles}
                        placeholder="השם שלך"
                    />
                </div>
                <div>
                    <label htmlFor="phone" className={labelStyles}>טלפון</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className={inputBaseStyles}
                        placeholder="מספר הטלפון שלך"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="email" className={labelStyles}>אימייל</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputBaseStyles}
                    placeholder="כתובת האימייל שלך (אופציונלי)"
                />
            </div>

            <div>
                <label htmlFor="message" className={labelStyles}>הודעה</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className={`${inputBaseStyles} resize-none`}
                        placeholder="ספרי לי על האירוע שלך, הסגנון שאת אוהבת, והחזון שלך..."
                />
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full inline-flex items-center justify-center gap-3 px-8 py-4 text-sm tracking-widest uppercase font-medium transition-all duration-500 ${
                    isSubmitting
                        ? 'bg-secondary/50 cursor-not-allowed'
                        : 'bg-secondary hover:bg-accent hover:shadow-gold'
                } text-white`}
            >
                {isSubmitting ? (
                    <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : (
                    <>
                        <Send className="w-4 h-4" />
                        <span>שלחי הודעה</span>
                    </>
                )}
            </button>
        </form>
    );
};

export default ContactForm;
