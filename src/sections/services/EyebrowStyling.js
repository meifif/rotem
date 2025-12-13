import React from 'react';
import { Clock, Heart, Scissors, Star } from 'lucide-react';
import ServiceLayout from './shared/ServiceLayout';
import image1 from '../../img/eyebrow/image1.png';
import image2 from '../../img/eyebrow/image2.png';
import image3 from '../../img/eyebrow/image3.png';

const EyebrowStyling = () => {
    const images = [image1, image2, image3];

    const description = [
        'עיצוב גבות מקצועי הוא אומנות המשלבת דיוק, סימטריה והתאמה אישית למבנה הפנים שלך.',
        'בטיפול אני משתמשת בטכניקות מתקדמות ומוצרים איכותיים כדי ליצור צורת גבות מושלמת שתדגיש את יופייך הטבעי. התהליך כולל ניקוי, עיצוב מדויק, והדרכה לטיפול ותחזוקה בבית.',
        'התוצאה היא גבות מעוצבות בצורה טבעית ומחמיאה, המשדרגות את המראה הכללי שלך.',
    ];

    const features = [
        {
            icon: Scissors,
            title: 'טכניקה מדויקת',
            description: 'שימוש בכלים מקצועיים ובטכניקות מתקדמות לעיצוב מדויק ומושלם.',
        },
        {
            icon: Heart,
            title: 'התאמה אישית',
            description: 'עיצוב המותאם למבנה הפנים ולסגנון האישי שלך.',
        },
        {
            icon: Star,
            title: 'תוצאות טבעיות',
            description: 'יצירת מראה טבעי ומחמיא שמשתלב בצורה הרמונית עם תווי פנייך.',
        },
        {
            icon: Clock,
            title: 'הדרכה מקצועית',
            description: 'קבלת טיפים והנחיות לשמירה על צורת הגבות בין הטיפולים.',
        },
    ];

    return (
        <ServiceLayout
            title="עיצוב גבות"
            description={description}
            images={images}
            features={features}
            featuresTitle="למה לבחור בעיצוב גבות אצלי?"
            ctaLink="https://wa.link/1deujn"
            ctaText="הזמיני תור לעיצוב גבות"
        />
    );
};

export default EyebrowStyling;
