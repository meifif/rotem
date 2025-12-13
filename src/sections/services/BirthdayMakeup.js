import React from 'react';
import { Cake, Heart, Sparkles, Star } from 'lucide-react';
import ServiceLayout from './shared/ServiceLayout';
import a from '../../img/evening-makeup/a.jpg';
import b from '../../img/evening-makeup/b.jpg';
import c from '../../img/evening-makeup/c.jpg';

const BirthdayMakeup = () => {
    const images = [a, b, c];

    const description = [
        'האיפור לבנות מצווה וימי הולדת יוצר מראה קסום מותאם אישית ומשלב בין רעננות נעורים לבין מראה חגיגי ומרשים.',
        'האיפור מתבצע באמצעות מוצרים המותאמים במיוחד לעור צעיר ושומרים על בריאותו. הדגש הוא על יצירת מראה טבעי ושמח שמבליט את היופי הטבעי של הילדה, תוך הקפדה על עמידות האיפור לאורך כל החגיגה.',
        'בסיום האיפור כל ילדה מקבלת טיפים והדרכה שיעזרו לשמור על מראה רענן ומושלם.',
    ];

    const features = [
        {
            icon: Star,
            title: 'מוצרים מותאמים לעור צעיר',
            description: 'שימוש במוצרים עדינים ואיכותיים המתאימים במיוחד לעור צעיר ורגיש.',
        },
        {
            icon: Heart,
            title: 'חוויה מיוחדת ומהנה',
            description: 'יצירת אווירה כיפית ומרגשת שהופכת את האיפור לחלק בלתי נפרד מחוויית החגיגה.',
        },
        {
            icon: Cake,
            title: 'מראה חגיגי ומותאם גיל',
            description: 'איפור המשלב בין רעננות נעורים למראה חגיגי, תוך שמירה על טבעיות ועדינות.',
        },
        {
            icon: Sparkles,
            title: 'טיפים והדרכה',
            description: 'מתן טיפים שימושיים לשמירה על מראה רענן ומטופח לאורך כל האירוע.',
        },
    ];

    return (
        <ServiceLayout
            title="איפור לימי הולדת ובת מצווה"
            description={description}
            images={images}
            features={features}
            featuresTitle="למה לבחור באיפור יום הולדת שלי?"
            ctaLink="https://wa.link/1deujn"
            ctaText="הזמיני תור לאיפור יום הולדת"
        />
    );
};

export default BirthdayMakeup;
