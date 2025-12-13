import React from 'react';
import { Book, Heart, Star, User } from 'lucide-react';
import ServiceLayout from './shared/ServiceLayout';
import a from '../../img/evening-makeup/a.jpg';
import b from '../../img/evening-makeup/b.jpg';
import c from '../../img/evening-makeup/c.jpg';

const TeenMakeup = () => {
    const images = [a, b, c];

    const description = [
        'איפור לנערות הוא יותר מסתם טכניקה - זו חוויה של גילוי עצמי והעצמה. אני מבינה את הרגישות והצרכים המיוחדים של גיל ההתבגרות, ויוצרת איפור שמדגיש את היופי הטבעי מבלי להעמיס.',
        'אני עובדת עם מוצרים איכותיים ועדינים במיוחד, המותאמים לעור צעיר ולצרכים שלו. האיפור תמיד טבעי ומעודן, עם התייחסות מיוחדת לבעיות עור אם יש, ודגש על הבלטת תווי הפנים הייחודיים בצורה עדינה ומחמיאה.',
        'כל נערה גם מקבלת הדרכה מעשית - איך להתאפר בעצמה, איזה מוצרים מתאימים לה, ואיך לשמור על עור בריא. זו חוויה שמחזקת את הביטחון העצמי ומעניקה כלים לחיים.',
    ];

    const features = [
        {
            icon: Star,
            title: 'התאמה לעור צעיר',
            description: 'מוצרים עדינים ואיכותיים שמתאימים במיוחד לעור מתבגר ושומרים על בריאותו.',
        },
        {
            icon: Heart,
            title: 'העצמה והבלטה',
            description: 'איפור שמחזק את הביטחון העצמי ומדגיש את היופי הייחודי בצורה טבעית ועדינה.',
        },
        {
            icon: User,
            title: 'רגישות והבנה',
            description: 'התאמה אישית לגיל, לאישיות, ולצרכים המיוחדים של כל נערה.',
        },
        {
            icon: Book,
            title: 'ידע מעשי',
            description: 'הדרכה מפורטת שמעניקה כלים לאיפור עצמי נכון ולשמירה על עור בריא.',
        },
    ];

    return (
        <ServiceLayout
            title="איפור לנערות"
            description={description}
            images={images}
            features={features}
            featuresTitle="החוויה שלי"
            ctaLink="https://wa.link/1deujn"
            ctaText="בואי להכיר"
        />
    );
};

export default TeenMakeup;
