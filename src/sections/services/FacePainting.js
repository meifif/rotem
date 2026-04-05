import React from 'react';
import { Heart, Palette, Sparkles, Star } from 'lucide-react';
import ServiceLayout from './shared/ServiceLayout';
import { useCloudinaryTaggedImages } from '../../hooks/useCloudinaryTaggedImages';

const FacePainting = () => {
    const images = useCloudinaryTaggedImages('face-painting', []);

    const description = [
        'ציורי פנים הם אומנות קסומה שמעניקה לכל אירוע ילדים נופך מיוחד ואווירה חגיגית. אני מגיעה לימי הולדת, מסיבות, אירועי פורים, וחגיגות משפחתיות, ויוצרת לכל ילד ציור ייחודי שמעורר חיוכים ושמחה.',
        'אני עובדת עם צבעים מקצועיים, היפואלרגניים ובטוחים לחלוטין לשימוש על עור רגיש. המגוון רחב - מפרפרים עדינים, פרחים צבעוניים ודמויות אהובות, ועד לציורים מורכבים ומרשימים. כל ציור מתאים לגיל, לאופי, ולבקשה המיוחדת של כל ילד.',
        'התוצאה היא אירוע שנשאר בזיכרון - ילדים שמחים, הורים רגועים, ואווירה של קסם וצבע שתורמת לחגיגה בצורה מיוחדת.',
    ];

    const features = [
        {
            icon: Star,
            title: 'בטיחות מוחלטת',
            description: 'שימוש בצבעים מקצועיים, היפואלרגניים ובטוחים לחלוטין לעור רגיש של ילדים.',
        },
        {
            icon: Heart,
            title: 'גמישות יצירתית',
            description: 'מגוון רחב של אפשרויות - מציורים עדינים ועד ליצירות מורכבות, בהתאם לגיל ולבקשה.',
        },
        {
            icon: Palette,
            title: 'התאמה אישית לכל ילד',
            description: 'כל ציור מותאם לאישיות, לגיל, ולבקשות המיוחדות של כל ילד ויוצר חוויה אישית.',
        },
        {
            icon: Sparkles,
            title: 'קסם שנשאר בזיכרון',
            description: 'יצירת אווירה חגיגית מיוחדת שתורמת לשמחה ולהצלחה של האירוע.',
        },
    ];

    return (
        <ServiceLayout
            title="ציורי פנים"
            description={description}
            images={images}
            features={features}
            featuresTitle="החוויה שלי"
            ctaLink="https://wa.link/1deujn"
            ctaText="הזמיני לאירוע"
        />
    );
};

export default FacePainting;
