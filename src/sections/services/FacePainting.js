import React from 'react';
import { Heart, Palette, Sparkles, Star } from 'lucide-react';
import ServiceLayout from './shared/ServiceLayout';
import a from '../../img/face-painting/a.jpg';
import b from '../../img/face-painting/b.jpg';
import c from '../../img/face-painting/c.jpg';
import d from '../../img/face-painting/d.jpg';
import e from '../../img/face-painting/e.jpg';
import f from '../../img/face-painting/f.jpg';

const FacePainting = () => {
    const images = [a, b, c, d, e, f];

    const description = [
        'איפור ציורי הפנים והגוף יוצר עיצובים ייחודיים וקסומים המותאמים לכל מגדר בכל גיל ולאירועים מגוונים. האיפור מותאם במיוחד לימי הולדת ומסיבות, לאירועים חברתיים, לחגיגות פורים ועוד.',
        'האיפור מתבצע באמצעות צבעים מקצועיים ובטוחים לשימוש, במגוון רחב של עיצובים החל מפרפרים ופרחים עדינים ועד לדמויות מצוירות מורכבות וציורי פנים מלאים.',
        'בסיום האיפור כל המשתתפים מתהדרים בציור ססגוני, צבעוני ומלהיב התורם לאווירה השמחה של האירוע.',
    ];

    const features = [
        {
            icon: Star,
            title: 'צבעים מקצועיים ובטוחים',
            description: 'שימוש בצבעים איכותיים, היפואלרגניים ובטוחים לשימוש על העור.',
        },
        {
            icon: Heart,
            title: 'מגוון עיצובים',
            description: 'אפשרויות רבות של ציורים, מפרפרים עדינים ועד לדמויות מורכבות.',
        },
        {
            icon: Palette,
            title: 'התאמה אישית',
            description: 'עיצובים מותאמים לכל גיל, מגדר וסוג אירוע, תוך התחשבות בבקשות מיוחדות.',
        },
        {
            icon: Sparkles,
            title: 'יצירת אווירה קסומה',
            description: 'תרומה לאווירה השמחה והמיוחדת של האירוע דרך אמנות ציורי הפנים.',
        },
    ];

    return (
        <ServiceLayout
            title="ציורי פנים"
            description={description}
            images={images}
            features={features}
            featuresTitle="למה לבחור בציורי פנים שלי?"
            ctaLink="https://wa.link/1deujn"
            ctaText="הזמיני תור לציורי פנים"
        />
    );
};

export default FacePainting;
