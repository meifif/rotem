import React from 'react';

const RotemHome = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-primary-light to-secondary-light text-text">
            <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-xl max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary font-secondary">Rotem - Makeup Artist</h1>
                <p className="text-xl md:text-2xl mb-8 text-text">
                    רותם יפרח להתחבר ליעוד שלך |
                    מאפרת ומעצבת גבות
                </p>
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    <span className="bg-primary-light text-primary px-3 py-1 rounded-full text-sm font-semibold">איפור </span>
                    <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">עיצוב גבות</span>
                    <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">הסרת שיער</span>
                </div>
                <a href="https://wa.link/j96v07" target="_blank"  rel="noreferrer">
                    <button
                        className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-secondary transition duration-300 transform hover:scale-105">
                        קבעי תור עכשיו
                    </button>
                </a>
            </div>
        </div>
    );
};

export default RotemHome;