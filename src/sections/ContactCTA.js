import React, {useState} from 'react';
import {ChevronDown, ChevronUp} from 'lucide-react';
import Button from '../components/Button';
import ContactForm from "../components/ContactForm";
import whatsAppIcon from "../utile/WhatsAppIcon";

const ContactCTA = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    return (
        <div className="container mx-auto px-4 py-16 bg-gradient-to-b from-pink-50 to-white">
            <div className="max-w-4xl mx-auto text-center">
                <div className="bg-white rounded-3xl shadow-xl p-8 border border-pink-200">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-pink-500 font-secondary">
                        יש לך שאלות נוספות?
                    </h2>

                    <div className="space-y-4 mb-8">
                        <p className="text-xl text-gray-700 mb-2">
                            אני כאן בשבילך לכל שאלה, התייעצות או תיאום
                        </p>
                        <p className="text-lg text-gray-600">
                            בין אם את מתכננת אירוע מיוחד, מחפשת טיפים לאיפור יומיומי,
                            או סתם רוצה להתייעץ - אשמח לעזור ולהעניק לך את החוויה המושלמת
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                            <Button
                                text="שלחי הודעה בוואטסאפ"
                                Icon={whatsAppIcon}
                                hoverColor="hover:bg-green-500"
                            />
                            <button
                                onClick={() => setIsFormVisible(!isFormVisible)}
                                className="flex items-center justify-center gap-2 px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-all duration-300"
                            >
                                {isFormVisible ? (
                                    <>
                                        סגירת טופס
                                        <ChevronUp className="w-5 h-5"/>
                                    </>
                                ) : (
                                    <>
                                        מילוי טופס יצירת קשר
                                        <ChevronDown className="w-5 h-5"/>
                                    </>
                                )}
                            </button>
                        </div>

                        <div
                            className={`transition-all duration-500 overflow-hidden ${
                                isFormVisible ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                            }`}
                        >
                            <div className="pt-6">
                                <ContactForm/>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 text-sm text-gray-500">
                        מבטיחה לחזור אלייך בהקדם האפשרי 😊
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCTA;