import {Helmet} from 'react-helmet';

const SEO = () => {
    return (
        <Helmet>
            <title>Rotem Ifrach - Makeup Artist</title>
            <meta name="description"
                  content="רותם שומן, אמנית איפור מקצועית בחולון. מתמחה באיפור כלות, איפור ערב, עיצוב גבות והסרת שיער. הזמינו תור עכשיו!"/>
            <meta name="keywords" content="איפור, אמנית איפור, איפור כלות, איפור ערב, עיצוב גבות, הסרת שיער, חולון"/>
            <link rel="canonical" href="https://meifif.github.io/rotem"/>
            <meta property="og:title" content="Rotem Ifrach - Makeup Artist"/>
            <meta property="og:description"
                  content="שירותי איפור מקצועיים לכלות, אירועים, ועיצוב גבות. הזמינו תור עם רותם שומן, אמנית איפור מובילה בחולון."/>
            <meta property="og:image"
                  content="https://meifif.github.io/rotem/static/media/IMG_9439.5f23f88cb4c65c15f1f8.jpg"/>
            <meta property="og:url" content="https://meifif.github.io/rotem"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <script type="application/ld+json">
                {`
            {
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              "name": "רותם שומן - אמנית איפור",
              "image": "https://www.rotem-makeup.com/rotem-profile.jpg",
              "url": "https://meifif.github.io/rotem/",
              "telephone": "053-2509989",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "רחוב צבי גרינברג",
                "addressLocality": "חולון",
                "addressCountry": "IL"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 32.0167,
                "longitude": 34.7792
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
                "https://www.facebook.com/rotemifrachs",
                "https://www.instagram.com/rotemifrachs"
              ]
            }
          `}
            </script>
        </Helmet>
    )
}

export default SEO;