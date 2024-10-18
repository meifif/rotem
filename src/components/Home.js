import React from 'react';
import {MessageCircle, Phone} from 'lucide-react';

const RotemHome = () => {
    return (
        <div
            className="min-h-screen flex flex-col justify-center items-center text-center bg-pink-50 text-text relative p-4">
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
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-pink-500 font-secondary">ROTEM IFRACH</h1>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-pink-500 font-secondary">Makeup Artist</h1>
                <p className="text-xl md:text-2xl mb-8 text-text">
                    רותם יפרח |
                    מאפרת מקצועית ומעצבת גבות
                </p>
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    <span
                        className="bg-pink-200 text-black px-3 py-1 rounded-full text-sm font-semibold">איפור Beauty</span>
                    <span
                        className="bg-pink-200 text-black px-3 py-1 rounded-full text-sm font-semibold">עיצוב גבות</span>
                    <span
                        className="bg-pink-200 text-black px-3 py-1 rounded-full text-sm font-semibold">הסרת שיער פנים</span>
                    <span className="bg-pink-200 text-black px-3 py-1 rounded-full text-sm font-semibold">סדנת איפור אישי</span>
                </div>
                <div className="flex justify-center space-x-4 rtl:space-x-reverse">
                    <a href="https://wa.link/j96v07" target="_blank" rel="noreferrer">
                        <button
                            className="bg-pink-300 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-secondary transition duration-300 transform hover:scale-105 flex items-center">
                            <MessageCircle className="ml-2" size={24}/>
                            קבעי תור
                        </button>
                    </a>
                    <button
                        className="bg-pink-300 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-secondary transition duration-300 transform hover:scale-105 flex items-center">
                        <Phone className="ml-2" size={24}/>
                        צרי קשר
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RotemHome;