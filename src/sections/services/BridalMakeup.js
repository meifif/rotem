import React from 'react';
import { Clock, Heart, Sparkles, Star } from 'lucide-react';
import ServiceLayout from './shared/ServiceLayout';
import a from '../../img/bridal-makeup/a.jpg';
import b from '../../img/bridal-makeup/b.jpg';
import d from '../../img/bridal-makeup/d.jpg';

const BridalMakeup = () => {
    const images = [a, b, d];

    const description = [
        'האיפור לכלות מותאם אישית לכל כלה לפי מבנה הפנים שלה, גוון העור ואופי החתונה. האיפור מתבצע באמצעות חומרים איכותיים ועמידים במטרה ליצור מראה טבעי או דרמטי בהתאם להעדפת הכלה, להבליט את יופייה ותווי פניה הייחודיים, את סגנון שמלתה, התסרוקת והתכשיטים.',
        'בסיום תהליך האיפור הכלה מרגישה יפה, קורנת ומאושרת עם איפור עמיד שמאפשר לה ביטחון מלא ונוחות לאורך כל יום החתונה.',
        'ניתן להזמין שירות ליווי טאצ\' אפ באולם לזמן החופה והריקוד הראשון כזוג נשוי.',
    ];

    const features = [
        {
            icon: Star,
            title: 'מוצרי איפור פרימיום',
            description: 'שימוש במוצרי איפור איכותיים ועמידים מהמותגים המובילים, המבטיחים מראה מושלם לאורך כל היום והלילה.',
        },
        {
            icon: Heart,
            title: 'התאמה אישית מושלמת',
            description: 'איפור מותאם במיוחד לגוון העור, מבנה הפנים והסגנון האישי שלך, תוך התחשבות בשמלה ובאווירת החתונה.',
        },
        {
            icon: Sparkles,
            title: 'הדגשת היופי הטבעי',
            description: 'טכניקות מתקדמות להבלטת תווי הפנים הטבעיים שלך, יצירת מראה זוהר ורענן שמדגיש את האישיות שלך.',
        },
        {
            icon: Clock,
            title: 'איפור ניסיון',
            description: 'אפשרות לניסיון איפור מלא לפני החתונה, כדי להבטיח שהמראה הסופי יהיה בדיוק כפי שחלמת.',
        },
    ];

    return (
        <ServiceLayout
            title="איפור כלות"
            description={description}
            images={images}
            features={features}
            featuresTitle="למה לבחור באיפור כלות שלי?"
            ctaLink="https://wa.link/1deujn"
            ctaText="הזמיני תור לאיפור כלה"
        />
    );
};

export default BridalMakeup;
