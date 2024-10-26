import React, {useState} from 'react';
import {Loader2, Send} from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');

        try {
            const response = await fetch('https://formspree.io/f/xwpkvkap', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({name: '', phone: '', message: ''});
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 border border-pink-200">
            <h3 className="text-2xl font-bold text-pink-500 mb-6 text-center">צרי קשר</h3>

            {submitStatus === 'success' && (
                <div className="mb-4 p-4 bg-green-50 text-green-700 rounded-lg text-center">
                    תודה על פנייתך! אחזור אלייך בהקדם 😊
                </div>
            )}

            {submitStatus === 'error' && (
                <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-lg text-center">
                    משהו השתבש... אנא נסי שוב או צרי קשר דרך הוואטסאפ
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        שם מלא
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        טלפון
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        pattern="[0-9]{9,10}"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        הודעה
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                </div>

                {/* Hidden honeypot field for bot protection */}
                <input
                    type="text"
                    name="_gotcha"
                    style={{display: 'none'}}
                    tabIndex="-1"
                    autoComplete="off"
                />

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition duration-300 flex items-center justify-center"
                >
                    {isSubmitting ? (
                        <Loader2 className="w-5 h-5 animate-spin"/>
                    ) : (
                        <>
                            <Send className="w-5 h-5 ml-2"/>
                            <span>שליחה</span>
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;