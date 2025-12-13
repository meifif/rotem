import React from 'react';
import { Clock, Heart, Sparkles, Star } from 'lucide-react';
import ServiceLayout from './shared/ServiceLayout';
import a from '../../img/bridal-makeup/a.jpg';
import b from '../../img/bridal-makeup/b.jpg';
import d from '../../img/bridal-makeup/d.jpg';

const BridalMakeup = () => {
    const images = [a, b, d];

    const description = [
        'איפור כלות הוא יצירה אמנותית שמחייבת הבנה עמוקה של מבנה הפנים, גוון העור, והחזון האסתטי של היום המיוחד. אני משקיעה זמן בייעוץ מעמיק, בו אנו בוחרות יחד את פלטת הצבעים, רמת הדרמטיות, והאופן שבו האיפור ישתלב עם השמלה, התסרוקת והתכשיטים.',
        'כל כלה שלי מקבלת איפור ניסיון מלא לפני החתונה - פגישה שמאפשרת לנו לגבש את המראה הסופי, לבצע התאמות עדינות, ולהבטיח שביום החתונה הכל יהיה מושלם. אני עובדת עם מוצרי פרימיום עמידים במיוחד, שמבטיחים מראה טרי ומזוגג מהחופה ועד השעות המאוחרות של החגיגה.',
        'בסיום תהליך האיפור, את קורנת, בטוחה, ומרגישה כמו הגרסה המושלמת של עצמך. אני גם מציעה שירות ליווי לאולם - טאצ׳ אפ מקצועי לפני החופה והריקוד הראשון, כדי שתדעי שאת נראית מושלמת בכל רגע מתועד.',
    ];

    const features = [
        {
            icon: Star,
            title: 'מוצרי קוסמטיקה מובחרים',
            description: 'עבודה עם מוצרי הפרימיום המתקדמים ביותר, שנבחרו בקפידה לעמידות יוצאת דופן ותוצאות מושלמות.',
        },
        {
            icon: Heart,
            title: 'ייעוץ אישי ומעמיק',
            description: 'ניתוח גוון עור מדויק, בחירת פלטת צבעים מותאמת אישית, והתחשבות בכל פרט - מהשמלה ועד לתאורה באולם.',
        },
        {
            icon: Sparkles,
            title: 'אומנות דקדקנית',
            description: 'תשומת לב לכל פרט ופרט, טכניקות מתקדמות שמדגישות את היופי הטבעי שלך ללא מאמץ מיותר.',
        },
        {
            icon: Clock,
            title: 'תהליך מקיף ומסור',
            description: 'איפור ניסיון מלא, זמן מוקדש לך ללא פשרות, והבטחה שביום החתונה הכל יהיה בדיוק כפי שדמיינת.',
        },
    ];

    return (
        <ServiceLayout
            title="איפור כלות"
            description={description}
            images={images}
            features={features}
            featuresTitle="החוויה שלי"
            ctaLink="https://wa.link/1deujn"
            ctaText="בואי לפגישת ייעוץ"
        />
    );
};

export default BridalMakeup;
