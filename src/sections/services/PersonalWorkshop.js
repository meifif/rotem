import React from 'react';
import { Book, Clock, Star, User } from 'lucide-react';
import ServiceLayout from './shared/ServiceLayout';
import image1 from '../../img/personal-makeup-workshop/image1.jpg';
import image2 from '../../img/personal-makeup-workshop/image2.jpg';

const PersonalWorkshop = () => {
    const images = [image1, image2];

    const description = [
        'סדנת איפור אישית מותאמת במיוחד עבורך, מעניקה לך את הכלים והידע להתאפר בצורה מקצועית ומחמיאה.',
        'במהלך הסדנה נלמד טכניקות איפור מתקדמות, נכיר את המוצרים המתאימים ביותר לסוג העור שלך, ונתרגל יחד את השלבים השונים. אני אלווה אותך צעד אחר צעד, תוך התאמת הטכניקות והצבעים למבנה הפנים ולסגנון האישי שלך.',
        'בסיום הסדנה תקבלי חוברת הדרכה מפורטת וטיפים שימושיים להמשך התרגול בבית.',
    ];

    const features = [
        {
            icon: Book,
            title: 'למידה מותאמת אישית',
            description: 'תכנית לימוד המותאמת לצרכים ולרמת הידע שלך.',
        },
        {
            icon: User,
            title: 'יחס אישי',
            description: 'תשומת לב מלאה והדרכה צמודה לאורך כל הסדנה.',
        },
        {
            icon: Star,
            title: 'טכניקות מקצועיות',
            description: 'לימוד שיטות איפור מתקדמות וטיפים מקצועיים.',
        },
        {
            icon: Clock,
            title: 'גמישות בזמנים',
            description: 'אפשרות לקביעת מועד הסדנה בהתאם ללוח הזמנים שלך.',
        },
    ];

    return (
        <ServiceLayout
            title="סדנת איפור אישית"
            description={description}
            images={images}
            features={features}
            featuresTitle="למה לבחור בסדנת איפור אישית?"
            ctaLink="https://wa.link/bpxxhn"
            ctaText="הזמיני סדנת איפור אישית"
        />
    );
};

export default PersonalWorkshop;
