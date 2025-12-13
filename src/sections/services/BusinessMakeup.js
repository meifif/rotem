import React from 'react';
import { Briefcase, Clock, Sparkles, Star } from 'lucide-react';
import ServiceLayout from './shared/ServiceLayout';
import a from '../../img/evening-makeup/a.jpg';
import b from '../../img/evening-makeup/b.jpg';
import c from '../../img/evening-makeup/c.jpg';

const BusinessMakeup = () => {
    const images = [a, b, c];

    const description = [
        'האיפור לאירועים עסקיים מתאפיין ביצירת מראה מקצועי ומתוחכם, תוך שמירה על איזון מושלם בין הופעה יוקרתית לטבעית. האיפור מותאם במיוחד לפגישות עסקיות, ראיונות עבודה, כנסים והרצאות, עם דגש מיוחד על מראה מטופח.',
        'האיפור מתבצע בגוונים טבעיים ועדינים המבטיחים תוצאה אלגנטית ומכובדת. אופי האיפור מוקפד ומתאים לכל סביבה עסקית והאווירה שלה.',
        'בסיום תהליך האיפור המראה מקצועי ומרשים ומשלב בתוכו את הרכות הנשית הטבעית.',
    ];

    const features = [
        {
            icon: Star,
            title: 'מראה מקצועי ומדויק',
            description: 'איפור מוקפד המשדר מקצועיות ואמינות, מותאם במיוחד לסביבה העסקית.',
        },
        {
            icon: Briefcase,
            title: 'התאמה לסוג האירוע',
            description: 'איפור מותאם לסוג הפגישה או האירוע העסקי, מראיונות עבודה ועד להרצאות וכנסים.',
        },
        {
            icon: Sparkles,
            title: 'איזון מושלם',
            description: 'שילוב מדויק בין מראה טבעי ומטופח לבין הופעה מקצועית ומרשימה.',
        },
        {
            icon: Clock,
            title: 'עמידות לאורך היום',
            description: 'שימוש בטכניקות ומוצרים המבטיחים מראה מושלם לאורך כל היום העסקי.',
        },
    ];

    return (
        <ServiceLayout
            title="איפור לאירועים עסקיים"
            description={description}
            images={images}
            features={features}
            featuresTitle="למה לבחור באיפור עסקי שלי?"
            ctaLink="https://wa.link/1deujn"
            ctaText="הזמיני תור לאיפור עסקי"
        />
    );
};

export default BusinessMakeup;
