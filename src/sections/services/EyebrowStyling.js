import React from 'react';
import { Clock, Heart, Scissors, Star } from 'lucide-react';
import ServiceLayout from './shared/ServiceLayout';
import image1 from '../../img/eyebrow/image1.png';
import image2 from '../../img/eyebrow/image2.png';
import image3 from '../../img/eyebrow/image3.png';

const EyebrowStyling = () => {
    const images = [image1, image2, image3];

    const description = [
        'עיצוב גבות הוא אומנות עדינה של סימטריה, פרופורציות, ותשומת לב לפרטים הקטנים ביותר. גבות מעוצבות בצורה נכונה יכולות לשנות לחלוטין את המבט, להדגיש את העיניים, ולהעניק למבנה הפנים הרמוניה טבעית.',
        'אני מקדישה זמן לניתוח מדויק של מבנה הפנים שלך, מיקום העיניים, וצורת הגבות הטבעית. העיצוב שלי לא עוקב אחרי טרנדים חולפים - הוא מתאים במיוחד אליך, משתלב עם תווי הפנים שלך, ומעניק מראה נקי, מעודן, וטבעי.',
        'התהליך כולל ניקוי דקדקני, עיצוב מדויק עם כלים מקצועיים, והדרכה מפורטת לשמירה על התוצאה בין הטיפולים. התוצאה היא גבות שנראות כאילו תמיד היו כאלה - מושלמות ללא מאמץ.',
    ];

    const features = [
        {
            icon: Scissors,
            title: 'דקדקנות מוחלטת',
            description: 'עבודה בכלים מקצועיים עם תשומת לב לכל שערה, ליצירת צורה מושלמת וסימטרית.',
        },
        {
            icon: Heart,
            title: 'ניתוח אישי מעמיק',
            description: 'התאמה מדויקת למבנה הפנים, מרחק העיניים, וצורת הגבה הטבעית שלך.',
        },
        {
            icon: Star,
            title: 'תוצאה טבעית ומעודנת',
            description: 'גבות שנראות כאילו תמיד היו מושלמות - ללא מאמץ מיותר, רק יופי מדויק.',
        },
        {
            icon: Clock,
            title: 'ליווי מקצועי',
            description: 'הדרכה מפורטת לתחזוקה נכונה בבית, והמלצות אישיות להמשך הטיפול.',
        },
    ];

    return (
        <ServiceLayout
            title="עיצוב גבות"
            description={description}
            images={images}
            features={features}
            featuresTitle="החוויה שלי"
            ctaLink="https://wa.link/1deujn"
            ctaText="קבעי פגישה"
        />
    );
};

export default EyebrowStyling;
