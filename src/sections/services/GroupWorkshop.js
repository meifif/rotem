import React from 'react';
import { Clock, Heart, Star, Users } from 'lucide-react';
import ServiceLayout from './shared/ServiceLayout';
import a from '../../img/evening-makeup/a.jpg';
import b from '../../img/evening-makeup/b.jpg';
import c from '../../img/evening-makeup/c.jpg';

const GroupWorkshop = () => {
    const images = [a, b, c];

    const description = [
        'סדנת איפור קבוצתית היא חוויה חברתית מהנה ומעשירה, המשלבת למידה מקצועית עם אווירה כיפית וחברותית.',
        'במהלך הסדנה נלמד טכניקות איפור בסיסיות ומתקדמות, נשתף טיפים וטריקים שימושיים, ונתרגל יחד את השלבים השונים. הסדנה מתאימה לקבוצות חברות, מסיבות רווקות, ימי כיף לעובדות ועוד.',
        'כל משתתפת תקבל ליווי אישי ותשומת לב מלאה, ובסיום הסדנה תקבל חוברת הדרכה מפורטת להמשך תרגול בבית.',
    ];

    const features = [
        {
            icon: Users,
            title: 'חוויה חברתית',
            description: 'למידה באווירה כיפית ומהנה יחד עם חברות.',
        },
        {
            icon: Heart,
            title: 'התאמה לקבוצה',
            description: 'תכנים המותאמים לצרכים ולרמת הידע של הקבוצה.',
        },
        {
            icon: Star,
            title: 'ערך מוסף',
            description: 'שילוב של למידה מקצועית עם בילוי חברתי איכותי.',
        },
        {
            icon: Clock,
            title: 'יעילות כלכלית',
            description: 'מחיר אטרקטיבי למשתתפת בהשוואה לסדנה אישית.',
        },
    ];

    return (
        <ServiceLayout
            title="סדנת איפור קבוצתית"
            description={description}
            images={images}
            features={features}
            featuresTitle="למה לבחור בסדנת איפור קבוצתית?"
            ctaLink="https://wa.link/bpxxhn"
            ctaText="הזמיני סדנת איפור קבוצתית"
        />
    );
};

export default GroupWorkshop;
