import React from 'react';
import {Link} from 'react-router-dom';
import {Home} from 'lucide-react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
    return (
        <main dir="rtl">
            <Navbar/>
            <div className="min-h-screen flex items-center justify-center bg-pink-50">
                <div className="text-center p-8 bg-white rounded-lg shadow-xl max-w-md">
                    <h1 className="text-4xl font-bold text-pink-500 mb-4">אופס! הדף לא נמצא</h1>
                    <p className="text-xl text-gray-600 mb-6">
                        נראה שנאבדת קצת... אבל אל דאגה, יש לנו הרבה דברים יפים להראות לך!
                    </p>
                    <Link
                        to="/"
                        className="inline-flex items-center px-6 py-3 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition duration-300"
                    >
                        <Home className="mr-2" size={20}/>
                        חזרה לדף הבית
                    </Link>
                </div>
            </div>
            <Footer/>
        </main>
    )
        ;
};

export default NotFound;