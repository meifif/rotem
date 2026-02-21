import React, { useEffect, useState, useRef } from 'react';
import { Instagram, Heart, MessageCircle } from 'lucide-react';

const INSTAGRAM_IFRAME_TITLE = 'פוסטים אחרונים מאינסטגרם';

const InstagramFeed = () => {
    const instagramHandle = 'makeupbyrotemi';
    const instagramUrl = `https://www.instagram.com/${instagramHandle}/`;
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const embedContainerRef = useRef(null);

    useEffect(() => {
        // Load Instagram embed script
        if (!window.instgrm) {
            const script = document.createElement('script');
            script.src = 'https://www.instagram.com/embed.js';
            script.async = true;
            script.onload = () => {
                setScriptLoaded(true);
                if (window.instgrm) {
                    window.instgrm.Embeds.process();
                }
            };
            document.body.appendChild(script);
        } else {
            setScriptLoaded(true);
            window.instgrm.Embeds.process();
        }
    }, []);

    useEffect(() => {
        if (!embedContainerRef.current) return;
        const setIframeTitle = () => {
            const iframe = embedContainerRef.current?.querySelector?.('iframe.instagram-media-rendered');
            if (iframe && !iframe.getAttribute('title')) {
                iframe.setAttribute('title', INSTAGRAM_IFRAME_TITLE);
            }
        };
        const observer = new MutationObserver(() => {
            setIframeTitle();
        });
        observer.observe(embedContainerRef.current, { childList: true, subtree: true });
        setIframeTitle();
        return () => observer.disconnect();
    }, [scriptLoaded]);

    return (
        <section className="py-16 px-4 bg-gradient-to-b from-background to-primary/5">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center">
                            <Instagram className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary">
                            עקבו אחרי באינסטגרם
                        </h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-8">
                        גלו את העבודות האחרונות שלי, טיפים למראה מושלם ועדכונים יומיומיים
                    </p>
                    <a
                        href={instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg text-lg"
                    >
                        <Instagram className="w-6 h-6" />
                        עקבו אחרי @{instagramHandle}
                    </a>
                </div>

                {/* Instagram Feed Preview */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Feature Card */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 p-1">
                                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                                    <Heart className="w-6 h-6 text-pink-600" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                    עבודות חדשות מדי יום
                                </h3>
                                <p className="text-gray-600">
                                    תמונות מהעבודות האחרונות, לפני ואחרי, וטיפים מקצועיים
                                </p>
                            </div>
                        </div>
                        <a
                            href={instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary font-semibold hover:text-accent transition-colors inline-flex items-center gap-2"
                        >
                            צפו בפוסטים האחרונים
                            <span className="text-xl">←</span>
                        </a>
                    </div>

                    {/* Feature Card */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 p-1">
                                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                                    <MessageCircle className="w-6 h-6 text-purple-600" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                    טיפים ומדריכים
                                </h3>
                                <p className="text-gray-600">
                                    למדו טריקים מקצועיים, קבלו השראה ושאלו שאלות
                                </p>
                            </div>
                        </div>
                        <a
                            href={instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary font-semibold hover:text-accent transition-colors inline-flex items-center gap-2"
                        >
                            הצטרפו לקהילה
                            <span className="text-xl">←</span>
                        </a>
                    </div>
                </div>

                {/* Instagram Widget Placeholder */}
                <div className="text-center" ref={embedContainerRef}>
                    <div className="inline-block w-full max-w-4xl">
                        <blockquote 
                            className="instagram-media" 
                            data-instgrm-permalink={`${instagramUrl}?utm_source=ig_embed&amp;utm_campaign=loading`}
                            data-instgrm-version="14"
                            style={{
                                background: '#FFF',
                                border: 0,
                                borderRadius: '12px',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                                margin: '1px auto',
                                maxWidth: '800px',
                                minWidth: '326px',
                                padding: 0,
                                width: 'calc(100% - 2px)'
                            }}
                        >
                            <div style={{ padding: '40px' }}>
                                <a 
                                    href={`${instagramUrl}?utm_source=ig_embed&amp;utm_campaign=loading`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-center block"
                                >
                                    <div className="flex flex-col items-center gap-4">
                                        <Instagram className="w-12 h-12 text-gray-400" />
                                        <p className="text-gray-600">
                                            צפו בפרופיל זה באינסטגרם
                                        </p>
                                        <p className="font-semibold text-primary">
                                            @{instagramHandle}
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </blockquote>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default InstagramFeed;

