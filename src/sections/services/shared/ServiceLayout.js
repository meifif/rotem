import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CtaButton from "./CtaButton";

const FeatureItem = ({ icon: Icon, title, description }) => (
    <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-secondary/30">
            <Icon className="w-5 h-5 text-secondary" />
        </div>
        <div>
            <h4 className="font-secondary text-lg text-primary mb-1">{title}</h4>
            <p className="text-text-light text-sm leading-relaxed">{description}</p>
        </div>
    </div>
);

const ServiceLayout = ({
    title,
    description,
    images,
    features,
    featuresTitle,
    ctaLink,
    ctaText,
}) => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        centerMode: true,
        centerPadding: '0',
        adaptiveHeight: false,
        lazyLoad: 'ondemand',
        cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '0',
                }
            }
        ]
    };

    return (
        <div className="bg-white border border-border">
            <div className="p-8 md:p-12">
                {/* Title */}
                <h3 className="font-secondary text-heading text-primary mb-6">{title}</h3>
                
                {/* Description */}
                <div className="space-y-4 text-text-light leading-relaxed mb-10">
                    {description.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>

                {/* Image slider */}
                {images && images.length > 0 && (
                    <div className="mb-12">
                        <div className="max-w-2xl mx-auto">
                            <Slider {...sliderSettings}>
                                {images.map((image, index) => (
                                    <div key={index} className="px-1">
                                        <div className="relative overflow-hidden bg-background-alt">
                                            <div className="aspect-[4/5]">
                                                <img
                                                    src={image}
                                                    alt={`${title} ${index + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                )}

                {/* Features section */}
                {features && features.length > 0 && (
                    <div className="bg-background-alt p-8 md:p-10 border-t border-b border-secondary/20">
                        <h4 className="font-secondary text-xl text-primary text-center mb-10">
                            {featuresTitle || `למה לבחור ב${title} שלי?`}
                        </h4>
                        <div className="grid md:grid-cols-2 gap-8">
                            {features.map((feature, index) => (
                                <FeatureItem
                                    key={index}
                                    icon={feature.icon}
                                    title={feature.title}
                                    description={feature.description}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* CTA Button */}
                <div className="mt-10 text-center">
                    <CtaButton link={ctaLink} text={ctaText} />
                </div>
            </div>
        </div>
    );
};

export default ServiceLayout;

