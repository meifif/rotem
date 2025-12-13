import React from 'react';
import { Camera, Clock, Star, Video } from 'lucide-react';
import ServiceLayout from './shared/ServiceLayout';
import a from '../../img/evening-makeup/a.jpg';
import b from '../../img/evening-makeup/b.jpg';
import c from '../../img/evening-makeup/c.jpg';

const StageMakeup = () => {
    const images = [a, b, c];

    const description = [
        'איפור לבמה וטלוויזיה הוא תחום מקצועי ייחודי שדורש הבנה עמוקה של תאורה, מצלמה, וזוויות צילום. זה איפור שצריך לעבוד בתנאים קשים - אורות חזקים, שעות ארוכות, וזוויות רבות - ולהישאר מושלם לאורך כל התקופה.',
        'אני עובדת עם מוצרים מקצועיים ברמה הגבוהה ביותר, שפותחו במיוחד לצורכי במה וטלוויזיה. האיפור מתוכנן בקפידה - כל גוון, כל הדגשה, כל פרט קטן - כדי להבטיח שהוא ייראה מושלם הן לעין והן דרך המצלמה, מכל זווית ובכל תאורה.',
        'התוצאה היא איפור שעומד בסטנדרטים המקצועיים הגבוהים ביותר, משדר בדיוק את מה שצריך, ונשאר מושלם לאורך שעות של הופעה או צילום.',
    ];

    const features = [
        {
            icon: Star,
            title: 'מוצרים ברמה מקצועית',
            description: 'קוסמטיקה מקצועית שפותחה במיוחד לתנאי במה וטלוויזיה, ברמה הגבוהה ביותר.',
        },
        {
            icon: Camera,
            title: 'הבנה טכנית מעמיקה',
            description: 'ידע מקצועי בתאורה, צילום וזוויות, שמבטיח מראה מושלם בכל תנאי.',
        },
        {
            icon: Video,
            title: 'ניסיון מוכח',
            description: 'עבודה עם אנשי תקשורת, שחקנים ואמנים במגוון פרויקטים מקצועיים.',
        },
        {
            icon: Clock,
            title: 'עמידות יוצאת דופן',
            description: 'איפור שעומד בתנאים הקשים ביותר ונשאר מושלם לאורך שעות רבות.',
        },
    ];

    return (
        <ServiceLayout
            title="איפור לבמה וטלוויזיה"
            description={description}
            images={images}
            features={features}
            featuresTitle="החוויה שלי"
            ctaLink="https://wa.link/1deujn"
            ctaText="צרי קשר"
        />
    );
};

export default StageMakeup;
