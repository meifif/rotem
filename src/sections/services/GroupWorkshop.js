import React from 'react';
import { Clock, Heart, Star, Users } from 'lucide-react';
import ServiceLayout from './shared/ServiceLayout';
import a from '../../img/evening-makeup/a.jpg';
import b from '../../img/evening-makeup/b.jpg';
import c from '../../img/evening-makeup/c.jpg';

const GroupWorkshop = () => {
    const images = [a, b, c];

    const description = [
        'סדנת איפור קבוצתית היא חוויה מיוחדת המשלבת למידה איכותית עם אווירה אינטימית וחברתית. זו הזדמנות נהדרת לבלות עם חברות, לחגוג אירוע מיוחד, או ליצור חוויה משותפת עם הקולגות.',
        'במהלך הסדנה, כל משתתפת מקבלת תשומת לב אישית ולמידה מותאמת לרמת הידע שלה. אני מעבירה טכניקות מקצועיות, טיפים שימושיים, וידע מעשי שכל אחת יכולה ליישם מיד. האווירה נינוחה ומהנה, הלמידה ממוקדת ויעילה.',
        'הסדנה מושלמת למסיבות רווקות, ימי גיבוש לעובדות, חגיגות יום הולדת, או פשוט כדרך ייחודית לבלות עם חברות. כל משתתפת יוצאת עם חוברת הדרכה מפורטת, ידע חדש, וחוויה משותפת מיוחדת.',
    ];

    const features = [
        {
            icon: Users,
            title: 'חוויה משותפת מעשירה',
            description: 'שילוב מושלם של למידה איכותית עם בילוי חברתי באווירה נעימה ואינטימית.',
        },
        {
            icon: Heart,
            title: 'תשומת לב אישית',
            description: 'למרות שזו סדנה קבוצתית, כל משתתפת מקבלת ליווי אישי והתאמה לצרכים שלה.',
        },
        {
            icon: Star,
            title: 'ידע מקצועי מעשי',
            description: 'תכנים מותאמים לרמת הקבוצה, עם דגש על טכניקות שניתן ליישם מיד.',
        },
        {
            icon: Clock,
            title: 'השקעה משתלמת',
            description: 'אפשרות לחלוק חוויה יוקרתית עם חברות, במחיר נגיש יותר למשתתפת.',
        },
    ];

    return (
        <ServiceLayout
            title="סדנת איפור קבוצתית"
            description={description}
            images={images}
            features={features}
            featuresTitle="החוויה שלי"
            ctaLink="https://wa.link/bpxxhn"
            ctaText="בואו לחוויה קבוצתית"
        />
    );
};

export default GroupWorkshop;
