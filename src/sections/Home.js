import React from 'react';
import {Phone, Star} from 'lucide-react';
import WhatsAppIcon from "../utile/WhatsAppIcon";
import Button from "../components/Button";

const RotemHome = () => {
    return (
        <div
            className=" flex flex-col justify-center items-center text-center bg-pink-50 text-text relative p-4">
            {/* Pattern overlay */}
            <div
                className="absolute inset-0 z-0 opacity-10"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '60px 60px'
                }}
            ></div>

            {/* Content */}
            <div className="bg-white bg-opacity-80 p-8 rounded-3xl shadow-xl max-w-2xl z-10 border border-pink-200">
                <div className="w-64 h-64 mx-auto mb-6">
                    <img
                        src="/logo.png"
                        alt="Rotem Ifrach Logo"
                        className="w-full h-full"
                    />
                </div>
                <p className="text-xl md:text-2xl mb-8 text-text">
                    רותם יפרח | מאפרת מקצועית |{' '}
                    <span className="whitespace-nowrap">מעצבת גבות</span>
                </p>

                {/* Redesigned services list */}
                <div className="mb-8 flex flex-col items-center">
                    <ul className="text-lg">
                        {['איפור Beauty', 'עיצוב גבות ושפם', 'סדנת איפור אישי'].map((service, index) => (
                            <li key={index} className="flex items-center mb-2">
                                <Star size={16} className="text-pink-400 mr-2 ml-2"/>
                                <span>{service}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div
                    className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                    <a href="https://wa.link/u26l5v" target="_blank" rel="noreferrer" className="inline-block">
                        <Button
                            text="קבעי תור"
                            Icon={WhatsAppIcon}
                            hoverColor="hover:bg-green-500"
                        />
                    </a>
                    <a href="tel:053-2509989" className="inline-block">
                        <Button
                            text="צרי קשר"
                            Icon={Phone}
                            hoverColor="hover:bg-blue-500"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
        ;
};

export default RotemHome;