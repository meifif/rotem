import React from 'react';
import { Briefcase, Clock, Sparkles, Star } from 'lucide-react';
import ServiceLayout from './shared/ServiceLayout';
import a from '../../img/evening-makeup/a.jpg';
import b from '../../img/evening-makeup/b.jpg';
import c from '../../img/evening-makeup/c.jpg';

const BusinessMakeup = () => {
    const images = [a, b, c];

    const description = [
        'איפור לסביבה עסקית דורש הבנה עדינה של איזון - בין מקצועיות לנשיות, בין נוכחות לעידון. הוא צריך להשדר ביטחון ואמינות, תוך שמירה על מראה טבעי ומעודן שמתאים לכל סביבה מקצועית.',
        'אני יוצרת איפור שמותאם לסוג האירוע - ראיון עבודה חשוב, כנס מקצועי, הרצאה, או פגישת לקוחות. העבודה היא בגוונים טבעיים ומתוחכמים, עם דגש על מראה מטופח שעומד בתנאי תאורה משתנים ונשאר מושלם לאורך שעות ארוכות.',
        'התוצאה היא מראה שמשדר מקצועיות, ביטחון, ונוכחות - את נכנסת לכל חדר ישיבות או במה עם הביטחון שאת נראית בדיוק כפי שצריך.',
    ];

    const features = [
        {
            icon: Star,
            title: 'עידון מקצועי',
            description: 'איפור שמשדר מקצועיות וביטחון, תוך שמירה על עידון ונשיות טבעית.',
        },
        {
            icon: Briefcase,
            title: 'הבנה של ההקשר',
            description: 'התאמה מדויקת לסוג האירוע, התפקיד, והסביבה המקצועית שלך.',
        },
        {
            icon: Sparkles,
            title: 'איזון דק',
            description: 'שילוב מושלם בין נוכחות מקצועית למראה טבעי ומעודן.',
        },
        {
            icon: Clock,
            title: 'אמינות לאורך זמן',
            description: 'איפור שעומד בתנאים משתנים ונשאר מושלם לאורך יום עבודה ארוך.',
        },
    ];

    return (
        <ServiceLayout
            title="איפור לאירועים עסקיים"
            description={description}
            images={images}
            features={features}
            featuresTitle="החוויה שלי"
            ctaLink="https://wa.link/1deujn"
            ctaText="קבעי פגישה"
        />
    );
};

export default BusinessMakeup;
