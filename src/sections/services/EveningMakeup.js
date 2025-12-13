import React from 'react';
import { Clock, Eye, Palette, Star } from 'lucide-react';
import ServiceLayout from './shared/ServiceLayout';
import a from '../../img/evening-makeup/a.jpg';
import b from '../../img/evening-makeup/b.jpg';
import c from '../../img/evening-makeup/c.jpg';

const EveningMakeup = () => {
    const images = [a, b, c];

    const description = [
        'איפור ערב הוא אומנות של איזון עדין - בין אלגנטיות לדרמטיות, בין נוכחות להבנה עצמית. בפגישת הייעוץ שלנו, אני לומדת את הסגנון האישי שלך, מבנה הפנים, וסוג האירוע - חתונה של חברה, ערב גאלה, או אירוע משפחתי חשוב.',
        'כל איפור שאני יוצרת בנוי על הבנה של תאורה, צילום, והאווירה הכללית של האירוע. אני עובדת עם טכניקות מתקדמות שמבטיחות שהאיפור ייראה מושלם הן לעין והן במצלמה, עם עמידות יוצאת דופן שמחזיקה מעמד מהשעות הראשונות ועד השעות המאוחרות.',
        'התוצאה היא מראה שמשקף אותך - מעודן, בטוח, וייחודי. את תקרני את היופי הטבעי שלך עם תוספת של זוהר מעודן שמדגיש בדיוק את מה שצריך.',
    ];

    const features = [
        {
            icon: Star,
            title: 'בחירה מושכלת של מוצרים',
            description: 'עבודה עם קוסמטיקה מקצועית שנבחרה במיוחד לעמידות ומראה ללא דופי במגוון תנאי תאורה.',
        },
        {
            icon: Eye,
            title: 'הבנה עמוקה של האירוע',
            description: 'התאמה מדויקת לסוג האירוע, שעות היום, התאורה הצפויה, והסגנון האישי שלך.',
        },
        {
            icon: Palette,
            title: 'גמישות אומנותית',
            description: 'יכולת ליצור מגוון רחב של מראות - מעידון קלאסי ועד לדרמטיות מעושנת, בהתאם לחזון שלך.',
        },
        {
            icon: Clock,
            title: 'זמן מוקדש לך',
            description: 'פגישות שלא ממהרות, תשומת לב לכל פרט, והבטחה לאיפור שמחזיק מעמד לאורך כל הערב.',
        },
    ];

    return (
        <ServiceLayout
            title="איפור לאירועים וערב"
            description={description}
            images={images}
            features={features}
            featuresTitle="החוויה שלי"
            ctaLink="https://wa.link/1deujn"
            ctaText="בואי לפגישה אישית"
        />
    );
};

export default EveningMakeup;
