import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const NotFound = () => {
    return (
        <div
            dir="rtl"
            className="min-h-screen flex items-center justify-center p-6 font-primary bg-background text-text"
        >
            <Helmet>
                <title>404 - הדף לא נמצא | רותם יפרח - אמנית איפור</title>
            </Helmet>
            <div className="card-elegant animate-fade-in-up text-center max-w-[28rem] py-10 px-8 shadow-elegant rounded-sm">
                <h1 className="font-secondary text-heading text-primary mb-4">
                    אופס! הדף לא נמצא
                </h1>
                <div className="divider-elegant mb-6" aria-hidden="true" />
                <p className="text-text-light text-[1.0625rem] mb-7 leading-relaxed">
                    נראה שהתבלבלת קצת... אבל אל דאגה, יש לנו הרבה דברים יפים להראות לך!
                </p>
                <Link
                    to="/"
                    className="btn-luxury btn-luxury-primary no-underline"
                >
                    חזרה לדף הבית
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
