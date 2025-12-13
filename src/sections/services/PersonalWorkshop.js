import React from 'react';
import { Book, Clock, Star, User } from 'lucide-react';
import ServiceLayout from './shared/ServiceLayout';
import image1 from '../../img/personal-makeup-workshop/image1.jpg';
import image2 from '../../img/personal-makeup-workshop/image2.jpg';

const PersonalWorkshop = () => {
    const images = [image1, image2];

    const description = [
        'סדנת איפור אישית היא השקעה בידע שיישאר אתך לתמיד. במהלך פגישה אינטימית וממוקדת, אני מעבירה אליך את הידע המקצועי שצברתי בשנים, ומתאימה אותו במיוחד לצרכים שלך.',
        'אנו מתחילות בניתוח מעמיק של מבנה הפנים, גוון העור, וצורת העיניים שלך. אני מסבירה כל בחירה - איזה צבעים מחמיאים לך, איזה מוצרים מתאימים לסוג העור שלך, ואיך להשתמש בהם בצורה נכונה. אני מדגימה כל טכניקה, ואז את מתרגלת בעצמך תוך ליווי צמוד שלי.',
        'את יוצאת מהסדנה עם ביטחון חדש, ידע מעשי, וחוברת הדרכה מפורטת שתלווה אותך. זה לא רק לימוד - זו חוויה של גילוי עצמי והעצמה אישית.',
    ];

    const features = [
        {
            icon: Book,
            title: 'תכנית אישית ממוקדת',
            description: 'תוכן שנבנה במיוחד עבורך, מותאם לרמת הידע, הצרכים, והמטרות האישיות שלך.',
        },
        {
            icon: User,
            title: 'תשומת לב בלעדית',
            description: 'זמן מוקדש רק לך, ללא הסחות דעת, עם ליווי צמוד לכל שאלה ותרגול.',
        },
        {
            icon: Star,
            title: 'ידע מקצועי מעשי',
            description: 'טכניקות שעובדות באמת, טיפים שיחסכו לך זמן וכסף, והבנה עמוקה של האיפור שלך.',
        },
        {
            icon: Clock,
            title: 'בקצב שלך',
            description: 'גמישות מלאה בתיאום הפגישה ובקצב הלמידה, בהתאם ללוח הזמנים והנוחות שלך.',
        },
    ];

    return (
        <ServiceLayout
            title="סדנת איפור אישית"
            description={description}
            images={images}
            features={features}
            featuresTitle="החוויה שלי"
            ctaLink="https://wa.link/bpxxhn"
            ctaText="שריני מפגש אישי"
        />
    );
};

export default PersonalWorkshop;
