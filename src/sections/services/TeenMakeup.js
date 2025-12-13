import React from 'react';
import { Book, Heart, Star, User } from 'lucide-react';
import ServiceLayout from './shared/ServiceLayout';
import a from '../../img/evening-makeup/a.jpg';
import b from '../../img/evening-makeup/b.jpg';
import c from '../../img/evening-makeup/c.jpg';

const TeenMakeup = () => {
    const images = [a, b, c];

    const description = [
        'האיפור לנערות לוקח בחשבון את מצב העור של כל נערה, יוצר כיסוי לפי הצרכים האישיים ומבליט את היופי והמראה הטבעי שלה.',
        'האיפור מתבצע באמצעות חומרים איכותיים המותאמים במיוחד לעור צעיר, כשהמטרה העיקרית היא להדגיש את הנשיות והאישיות של המתבגרת.',
        'בסיום האיפור כל נערה מקבלת טיפים והדרכה לשימוש נכון במוצרי האיפור כדי להנות ממראה מושלם ולשמר אותו בשגרה היומיומית.',
    ];

    const features = [
        {
            icon: Star,
            title: 'מוצרים מותאמים לעור צעיר',
            description: 'שימוש במוצרים איכותיים המתאימים במיוחד לעור מתבגר, תוך שמירה על בריאות העור.',
        },
        {
            icon: Heart,
            title: 'הדגשת היופי הטבעי',
            description: 'טכניקות איפור המדגישות את היופי הטבעי ומחזקות את הביטחון העצמי.',
        },
        {
            icon: User,
            title: 'התאמה אישית',
            description: 'איפור המותאם לגיל, לסגנון האישי ולצרכים הייחודיים של כל נערה.',
        },
        {
            icon: Book,
            title: 'הדרכה והכוונה',
            description: 'מתן טיפים מקצועיים לשימוש נכון במוצרי איפור ושמירה על עור בריא.',
        },
    ];

    return (
        <ServiceLayout
            title="איפור לנערות"
            description={description}
            images={images}
            features={features}
            featuresTitle="למה לבחור באיפור נערות שלי?"
            ctaLink="https://wa.link/1deujn"
            ctaText="הזמיני תור לאיפור נערות"
        />
    );
};

export default TeenMakeup;
