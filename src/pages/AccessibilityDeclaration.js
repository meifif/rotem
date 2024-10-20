import React from 'react';
import Footer from "../components/Footer";

const AccessibilityDeclaration = () => {
    return (
        <div dir="rtl" className="font-primary text-right bg-background text-text">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto my-10">
                <h1 className="text-3xl font-bold mb-6 text-pink-600 text-center">הצהרת נגישות</h1>
                <div className="space-y-4 text-right">
                    <p>
                        אתר זה עושה כל שביכולתו כדי להיות נגיש לכלל האנשים, כולל אנשים עם מוגבלויות. אנו שואפים לעמוד
                        ברמה
                        AA של תקן הנגישות WCAG 2.1.
                    </p>
                    <p>
                        השקענו מאמצים רבים בפיתוח האתר כדי להבטיח שהוא יהיה נגיש עבור כל משתמשינו. בין היתר, ביצענו את
                        הפעולות הבאות:
                    </p>
                    <ul className="list-disc list-inside space-y-2 pr-4">
                        <li>התאמת האתר לשימוש בטכנולוגיות מסייעות כגון קוראי מסך</li>
                        <li>אפשרות לניווט באמצעות מקלדת</li>
                        <li>שימוש בניגודיות צבעים מספקת</li>
                        <li>אפשרות להגדלת הטקסט</li>
                        <li>מתן תיאורים חלופיים לתמונות</li>
                        <li>מבנה דפים ברור ועקבי</li>
                    </ul>
                    <p>
                        אנו ממשיכים לעבוד על שיפור הנגישות באתר ומתחייבים לעדכן אותו באופן שוטף. אם נתקלתם בבעיית נגישות
                        באתר, אנא צרו איתנו קשר ונשמח לסייע.
                    </p>
                    <p>
                        ליצירת קשר בנושא נגישות:
                        <br/>
                        שם: רותם יפרח
                        <br/>
                        טלפון: 053-2509989
                        <br/>
                        דוא"ל: rotemshuman@gmail.com
                    </p>
                    <p>
                        הצהרת הנגישות עודכנה לאחרונה בתאריך: {new Date().toLocaleDateString('he-IL')}
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default AccessibilityDeclaration;