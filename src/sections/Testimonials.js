import React from 'react';
import Slider from 'react-slick';
import { ExternalLink, Star } from 'lucide-react';
import data from '../data/testimonials.json';

const GOOGLE_URL = data.googleReviewUrl || 'https://g.page/r/CeAwVxpZoD2rEAE';
const ITEMS = Array.isArray(data.items) ? data.items : [];

function StarRow({ rating }) {
  const n = typeof rating === 'number' && rating >= 1 && rating <= 5 ? rating : 0;
  if (!n) return null;
  return (
    <div
      className="flex gap-0.5 justify-center mb-4 text-accent"
      aria-label={`דירוג ${n} מתוך 5`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${i < n ? 'fill-current' : 'text-secondary/25'}`}
          strokeWidth={1.5}
          aria-hidden
        />
      ))}
    </div>
  );
}

const Testimonials = () => {
  const sliderSettings = {
    infinite: ITEMS.length > 1,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: ITEMS.length > 1,
    autoplaySpeed: 6500,
    dots: true,
    arrows: false,
    pauseOnHover: true,
    rtl: true,
    adaptiveHeight: true,
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
  };

  return (
    <section
      className="section-luxury bg-background-alt relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-alt to-background pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 lg:py-28">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-px bg-secondary" />
            <span className="text-secondary-strong text-xs tracking-widest uppercase font-medium">
              ביקורות
            </span>
            <span className="w-12 h-px bg-secondary" />
          </div>
          <h2
            id="testimonials-heading"
            className="font-secondary text-display text-primary mb-4"
          >
            מה אומרות הלקוחות
          </h2>
          <p className="text-text-light max-w-2xl mx-auto">
            מוזמנות לקרוא ביקורות נוספות ולשתף חוויה בעמוד העסק שלי בגוגל.
          </p>
        </div>

        {ITEMS.length > 0 ? (
          <div className="testimonials-slider pb-8">
            <Slider {...sliderSettings}>
              {ITEMS.map((item, index) => {
                const name = item.reviewer || item.author || 'מבקר';
                const profileUrl = item.profile_url || null;
                const avatarSrc =
                  item.avatar_url ||
                  (typeof item.avatarUrl === 'string' ? item.avatarUrl : null);
                const cardKey = item.reviewId || profileUrl || index;

                return (
                <div key={cardKey} className="px-2 md:px-8">
                  <figure className="mx-auto max-w-2xl rounded-2xl border border-secondary/15 bg-white/80 backdrop-blur-sm px-8 py-10 shadow-sm">
                    <figcaption className="mb-6">
                      {/* Centered row: name (RTL) on the left, avatar on the right */}
                      <div
                        className="flex flex-row items-center justify-center gap-4 w-full flex-wrap"
                        dir="ltr"
                      >
                        <div className="text-right min-w-0 max-w-[calc(100%-4rem)] shrink" dir="rtl">
                          {profileUrl ? (
                            <a
                              href={profileUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-secondary-strong font-medium hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
                              dir="auto"
                              aria-label={`פרופיל Google של ${name}`}
                            >
                              {name}
                            </a>
                          ) : (
                            <span className="text-secondary-strong font-medium" dir="auto">
                              {name}
                            </span>
                          )}
                        </div>
                        {avatarSrc ? (
                          <img
                            src={avatarSrc.replace(/=s\d+-/, '=s128-')}
                            alt=""
                            width={56}
                            height={56}
                            className="w-14 h-14 rounded-full object-cover border border-secondary/20 shrink-0 bg-background"
                            loading="lazy"
                            decoding="async"
                          />
                        ) : null}
                      </div>
                    </figcaption>
                    <StarRow rating={item.rating} />
                    <blockquote
                      className="text-primary text-lg md:text-xl leading-relaxed text-center"
                      cite={GOOGLE_URL}
                    >
                      <p dir="auto" className="font-medium">
                        {item.text || '—'}
                      </p>
                    </blockquote>
                  </figure>
                </div>
                );
              })}
            </Slider>
          </div>
        ) : (
          <p className="text-center text-text-light max-w-xl mx-auto mb-10">
            כל הביקורות וההמלצות מופיעות בעמוד העסק שלי בגוגל — לחצי על הקישור למטה
            לקריאה ולכתיבת ביקורת.
          </p>
        )}

        <div className="text-center mt-4">
          <a
            href={GOOGLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 min-h-[44px] min-w-[44px] px-4 py-2 text-secondary-strong hover:text-accent transition-colors duration-300 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            <span className="text-sm tracking-widest uppercase font-medium">
              לכל הביקורות בגוגל
            </span>
            <ExternalLink
              className="w-4 h-4 shrink-0"
              aria-hidden
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
