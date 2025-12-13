import React from 'react';
import { Cake, Heart, Sparkles, Star } from 'lucide-react';
import ServiceLayout from './shared/ServiceLayout';
import a from '../../img/evening-makeup/a.jpg';
import b from '../../img/evening-makeup/b.jpg';
import c from '../../img/evening-makeup/c.jpg';

const BirthdayMakeup = () => {
    const images = [a, b, c];

    const description = [
        'איפור לבנות מצווה וימי הולדת הוא רגע מיוחד שמסמן מעבר ומעניק לכל ילדה תחושה של קסם. אני מבינה את החשיבות של היום הזה, והאיפור שאני יוצרת משלב בין רעננות הנעורים לתחושה חגיגית ומיוחדת.',
        'אני עובדת עם מוצרים עדינים ואיכותיים המותאמים במיוחד לעור צעיר ורגיש. האיפור טבעי, מעודן, ומדגיש את היופי הייחודי של כל ילדה - בלי להעמיס, רק להבליט. הוא עמיד לאורכשעות החגיגה, ונשאר רענן ויפה מהתמונות הראשונות ועד לריקודים האחרונים.',
        'כל ילדה גם מקבלת הדרכה עדינה וטיפים שימושיים, שיעזרו לה להרגיש בטוחה ויפה לאורך כל האירוע.',
    ];

    const features = [
        {
            icon: Star,
            title: 'עדינות ובטיחות',
            description: 'שימוש במוצרים איכותיים ועדינים במיוחד, שמתאימים לעור צעיר ורגיש.',
        },
        {
            icon: Heart,
            title: 'חוויה מרגשת',
            description: 'יצירת רגע מיוחד שהופך את האיפור לחלק בלתי נפרד מהזיכרון של היום.',
        },
        {
            icon: Cake,
            title: 'איזון מושלם',
            description: 'שילוב עדין בין רעננות טבעית למראה חגיגי, בדיוק כמו שצריך לגיל.',
        },
        {
            icon: Sparkles,
            title: 'ליווי והדרכה',
            description: 'טיפים עדינים שעוזרים לכל ילדה להרגיש בטוחה ויפה לאורך כל החגיגה.',
        },
    ];

    return (
        <ServiceLayout
            title="איפור לימי הולדת ובת מצווה"
            description={description}
            images={images}
            features={features}
            featuresTitle="החוויה שלי"
            ctaLink="https://wa.link/1deujn"
            ctaText="הזמיני ליום המיוחד"
        />
    );
};

export default BirthdayMakeup;
