import {Helmet} from 'react-helmet';

const SEO = () => {
    return (
        <Helmet>
            <title>רותם יפרח - אמנית איפור מקצועית בחולון</title>
            <meta name="description"
                  content="רותם יפרח, אמנית איפור מקצועית בחולון. מתמחה באיפור כלות, איפור ערב, עיצוב גבות והסרת שיער. הזמינו תור עכשיו!"/>
            <meta name="keywords"
                  content="איפור, אמנית איפור, איפור כלות, איפור ערב, עיצוב גבות, הסרת שיער, חולון"/>
            <link rel="canonical" href="https://rotem-ifrach.co/"/>
            <meta property="og:title" content="רותם יפרח - אמנית איפור מקצועית בחולון"/>
            <meta property="og:description"
                  content="שירותי איפור מקצועיים לכלות, אירועים, ועיצוב גבות. הזמינו תור עם רותם יפרח, אמנית איפור מובילה בחולון."/>
            <meta property="og:image"
                  content="https://rotem-ifrach.co/static/media/IMG_9439.5f23f88cb4c65c15f1f8.jpg"/>
            <meta property="og:url" content="https://rotem-ifrach.co/"/>
            <meta property="og:type" content="website"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content="רותם יפרח - אמנית איפור מקצועית בחולון"/>
            <meta name="twitter:description"
                  content="שירותי איפור מקצועיים לכלות, אירועים, ועיצוב גבות. הזמינו תור עם רותם יפרח, אמנית איפור מובילה בחולון."/>
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