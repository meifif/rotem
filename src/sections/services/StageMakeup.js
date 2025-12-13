import React from 'react';
import { Camera, Clock, Star, Video } from 'lucide-react';
import ServiceLayout from './shared/ServiceLayout';
import a from '../../img/evening-makeup/a.jpg';
import b from '../../img/evening-makeup/b.jpg';
import c from '../../img/evening-makeup/c.jpg';

const StageMakeup = () => {
    const images = [a, b, c];

    const description = [
        'איפור מקצועי לבמה וטלוויזיה דורש התאמה והבנה מעמיקה של דרישות של מצלמה ותאורה.',
        'האיפור מתוכנן ומתבצע בקפידה כדי להבטיח מראה מושלם מכל זווית צילום, עם דגש מיוחד על עמידות ממושכת תחת אורות חזקים ותנאי במה. השימוש במוצרים מקצועיים באיכות גבוהה וטכניקות מתקדמות מבליט את תווי הפנים והבעתם.',
        'בסיום האיפור המראה מרשים ומקצועי, עובר מסך ובולט היטב על הבמה.',
    ];

    const features = [
        {
            icon: Star,
            title: 'מוצרים מקצועיים לבמה',
            description: 'שימוש במוצרים איכותיים המותאמים במיוחד לתנאי תאורה חזקה וצילום.',
        },
        {
            icon: Camera,
            title: 'התאמה לצילום',
            description: 'טכניקות מיוחדות המבטיחות מראה מושלם מכל זווית צילום ותחת כל תאורה.',
        },
        {
            icon: Video,
            title: 'מומחיות בתחום',
            description: 'ניסיון רב בעבודה עם אנשי במה, שחקנים ומצולמים בטלוויזיה.',
        },
        {
            icon: Clock,
            title: 'עמידות לאורך זמן',
            description: 'איפור העומד בתנאי במה קשים ונשאר מושלם לאורך שעות של צילומים והופעות.',
        },
    ];

    return (
        <ServiceLayout
            title="איפור לבמה וטלוויזיה"
            description={description}
            images={images}
            features={features}
            featuresTitle="למה לבחור באיפור במה שלי?"
            ctaLink="https://wa.link/1deujn"
            ctaText="הזמיני תור לאיפור במה"
        />
    );
};

export default StageMakeup;
