import React from 'react';
import { Clock, Eye, Palette, Star } from 'lucide-react';
import ServiceLayout from './shared/ServiceLayout';
import a from '../../img/evening-makeup/a.jpg';
import b from '../../img/evening-makeup/b.jpg';
import c from '../../img/evening-makeup/c.jpg';

const EveningMakeup = () => {
    const images = [a, b, c];

    const description = [
        'האיפור לאירועים וערב מותאם באופן מושלם ללבוש של כל אישה ולסוג האירוע. ניתן לבחור בין מגוון אפשרויות איפור ממראה אלגנטי או דרמטי מעושן לאיפור טבעי וקלאסי, בהתאם להעדפות ולאישיות הייחודית.',
        'האיפור מתבצע באמצעות טכניקות מתקדמות המבליטות את הזוהר הטבעי של תווי הפנים עם תוספת גלאם ומבטיחות את עמידות האיפור לאורך כל הערב.',
        'בסיום תהליך האיפור ההופעה של כל אחת מקרינה את הייחוד שלה ומאפשרת לה להרגיש הכי יפה באירוע.',
    ];

    const features = [
        {
            icon: Star,
            title: 'מוצרי איפור איכותיים',
            description: 'שימוש במוצרים מקצועיים המבטיחים מראה מושלם ועמיד לאורך כל הערב.',
        },
        {
            icon: Eye,
            title: 'התאמה מושלמת לאירוע',
            description: 'איפור מותאם לסוג האירוע, הלבוש והאווירה, תוך שמירה על הסגנון האישי שלך.',
        },
        {
            icon: Palette,
            title: 'מגוון סגנונות',
            description: 'אפשרות לבחור בין מראה טבעי, אלגנטי או דרמטי, בהתאם להעדפותייך.',
        },
        {
            icon: Clock,
            title: 'עמידות לאורך זמן',
            description: 'טכניקות מתקדמות המבטיחות שהאיפור יישאר מושלם לאורך כל האירוע.',
        },
    ];

    return (
        <ServiceLayout
            title="איפור לאירועים וערב"
            description={description}
            images={images}
            features={features}
            featuresTitle="למה לבחור באיפור ערב שלי?"
            ctaLink="https://wa.link/1deujn"
            ctaText="הזמיני תור לאיפור ערב"
        />
    );
};

export default EveningMakeup;
