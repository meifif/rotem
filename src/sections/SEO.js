import {Helmet} from 'react-helmet';

const SEO = () => {
    return (
        <Helmet>
            <title>רותם יפרח - אמנית איפור | איפור כלות ואירועים מקצועי</title>
            <meta name="description"
                  content="רותם יפרח, אמנית איפור עם למעלה מעשר שנות ניסיון. מתמחה באיפור כלות, אירועים ערב, ועיצוב גבות. תשומת לב לכל פרט, תוצאות מושלמות."/>
            <meta name="keywords"
                  content="איפור כלות, אמנית איפור, איפור לאירועים, עיצוב גבות, איפור מקצועי, רותם יפרח, חולון"/>
            <link rel="canonical" href="https://rotem-ifrach.co/"/>
            <meta property="og:title" content="רותם יפרח - איפור הוא אמנות"/>
            <meta property="og:description"
                  content="איפור כלות ואירועים ברמה מקצועית. תשומת לב לכל פרט, התאמה אישית מלאה, ותוצאות שנשארות מושלמות לאורך כל האירוע."/>
            <meta property="og:image"
                  content="https://rotem-ifrach.co/static/media/IMG_9439.5f23f88cb4c65c15f1f8.jpg"/>
            <meta property="og:url" content="https://rotem-ifrach.co/"/>
            <meta property="og:type" content="website"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content="רותם יפרח - איפור הוא אמנות"/>
            <meta name="twitter:description"
                  content="איפור כלות ואירועים ברמה מקצועית. תשומת לב לכל פרט, התאמה אישית מלאה, ותוצאות שנשארות מושלמות."/>
            <meta name="twitter:image"
                  content="https://rotem-ifrach.co/static/media/IMG_9439.5f23f88cb4c65c15f1f8.jpg"/>
            <script type="application/ld+json">
                {`
                {
                  "@context": "https://schema.org",
                  "@type": "BeautySalon",
                  "name": "רותם יפרח - אמנית איפור",
                  "image": "https://rotem-ifrach.co/static/media/IMG_9439.5f23f88cb4c65c15f1f8.jpg",
                  "url": "https://rotem-ifrach.co/",
                  "telephone": "053-2509989",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "רחוב עוזי חיטמן",
                    "addressLocality": "חולון",
                    "addressCountry": "IL"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 31.9975,
                    "longitude": 34.7659
                  },
                  "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Sunday",
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday"
                    ],
                    "opens": "07:00",
                    "closes": "23:00"
                  },
                  "sameAs": [
                    "https://www.facebook.com/makeupbyrotemi",
                    "https://www.instagram.com/makeupbyrotemi"
                  ]
                }
                `}
            </script>
        </Helmet>
    )
}

export default SEO;