import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import {
    X,
    ArrowLeft,
    ArrowRight,
    ZoomIn,
    ZoomOut,
    RotateCcw,
} from 'lucide-react';
import { fetchPortfolioImages } from '../config/imageSource';

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;

function clamp(n, min, max) {
    return Math.min(max, Math.max(min, n));
}

const Portfolio = () => {
    const [images, setImages] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [zoom, setZoom] = useState(1);
    const [pan, setPan] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);

    const zoomViewportRef = useRef(null);
    const lightboxPanelRef = useRef(null);
    const dragRef = useRef(null);
    const pinchRef = useRef(null);

    useEffect(() => {
        const loadImages = async () => {
            try {
                const remote = await fetchPortfolioImages();
                setImages(Array.isArray(remote) ? remote : []);
            } catch {
                setImages([]);
            }
        };
        loadImages();
    }, []);

    useEffect(() => {
        setZoom(1);
        setPan({ x: 0, y: 0 });
        pinchRef.current = null;
        dragRef.current = null;
    }, [selectedImageIndex]);

    useEffect(() => {
        if (zoom <= MIN_ZOOM) {
            setPan({ x: 0, y: 0 });
        }
    }, [zoom]);

    useEffect(() => {
        const el = zoomViewportRef.current;
        if (!el || !modalIsOpen) return;

        const onWheel = (e) => {
            e.preventDefault();
            const factor = e.deltaY < 0 ? 1.1 : 1 / 1.1;
            setZoom((z) => clamp(z * factor, MIN_ZOOM, MAX_ZOOM));
        };

        el.addEventListener('wheel', onWheel, { passive: false });
        return () => el.removeEventListener('wheel', onWheel);
    }, [modalIsOpen]);

    const closeModal = useCallback(() => {
        setModalIsOpen(false);
        setSelectedImageIndex(null);
        setZoom(1);
        setPan({ x: 0, y: 0 });
    }, []);

    useEffect(() => {
        if (!modalIsOpen) return undefined;

        const onKey = (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        };
        document.addEventListener('keydown', onKey);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const id = requestAnimationFrame(() => {
            lightboxPanelRef.current?.focus({ preventScroll: true });
        });

        return () => {
            cancelAnimationFrame(id);
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = prevOverflow;
        };
    }, [modalIsOpen, closeModal]);

    const openModal = (index) => {
        if (!images.length || index < 0 || index >= images.length) return;
        setSelectedImageIndex(index);
        setZoom(1);
        setPan({ x: 0, y: 0 });
        setModalIsOpen(true);
    };

    const navigateImage = (direction) => {
        if (direction === 'next') {
            setSelectedImageIndex((prev) => (prev + 1) % images.length);
        } else {
            setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
        }
    };

    const zoomIn = () => setZoom((z) => clamp(z * 1.25, MIN_ZOOM, MAX_ZOOM));
    const zoomOut = () => setZoom((z) => clamp(z / 1.25, MIN_ZOOM, MAX_ZOOM));
    const resetView = () => {
        setZoom(1);
        setPan({ x: 0, y: 0 });
    };

    const handlePointerDown = (e) => {
        if (zoom <= MIN_ZOOM || e.button !== 0) return;
        dragRef.current = {
            cx: e.clientX,
            cy: e.clientY,
            px: pan.x,
            py: pan.y,
        };
        setIsDragging(true);
        e.currentTarget.setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e) => {
        const d = dragRef.current;
        if (!d) return;
        setPan({
            x: d.px + (e.clientX - d.cx),
            y: d.py + (e.clientY - d.cy),
        });
    };

    const handlePointerUp = (e) => {
        dragRef.current = null;
        setIsDragging(false);
        try {
            e.currentTarget.releasePointerCapture(e.pointerId);
        } catch {
            /* ignore */
        }
    };

    const handleTouchStart = (e) => {
        if (e.touches.length === 2) {
            const [a, b] = [e.touches[0], e.touches[1]];
            const dist = Math.hypot(b.clientX - a.clientX, b.clientY - a.clientY);
            pinchRef.current = { dist0: dist, z0: zoom };
        }
    };

    const handleTouchMove = (e) => {
        if (e.touches.length === 2 && pinchRef.current) {
            e.preventDefault();
            const [a, b] = [e.touches[0], e.touches[1]];
            const dist = Math.hypot(b.clientX - a.clientX, b.clientY - a.clientY);
            const next = pinchRef.current.z0 * (dist / pinchRef.current.dist0);
            setZoom(clamp(next, MIN_ZOOM, MAX_ZOOM));
        }
    };

    const handleTouchEnd = (e) => {
        if (e.touches.length < 2) {
            pinchRef.current = null;
        }
    };

    const handleImageDoubleClick = (e) => {
        e.preventDefault();
        setZoom((z) => {
            if (z > MIN_ZOOM) {
                return MIN_ZOOM;
            }
            return 2;
        });
    };

    const lightbox =
        modalIsOpen &&
        createPortal(
            <div
                className="portfolio-lightbox-overlay"
                onClick={closeModal}
                role="presentation"
            >
                <div
                    ref={lightboxPanelRef}
                    className="portfolio-lightbox-panel"
                    role="dialog"
                    aria-modal="true"
                    aria-label="תמונת פורטפוליו"
                    tabIndex={-1}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="relative flex h-full w-full min-h-0 flex-col">
                        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 flex flex-wrap items-center justify-center gap-2 px-4 pb-2 pt-[max(1.25rem,env(safe-area-inset-top))]">
                            <div className="pointer-events-auto flex flex-wrap items-center justify-center gap-1 rounded-lg bg-black/40 px-2 py-1.5 backdrop-blur-sm">
                                <button
                                    type="button"
                                    onClick={zoomOut}
                                    disabled={zoom <= MIN_ZOOM}
                                    className="rounded p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-30"
                                    aria-label="הקטן תצוגה"
                                >
                                    <ZoomOut size={22} />
                                </button>
                                <button
                                    type="button"
                                    onClick={zoomIn}
                                    disabled={zoom >= MAX_ZOOM}
                                    className="rounded p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-30"
                                    aria-label="הגדל תצוגה"
                                >
                                    <ZoomIn size={22} />
                                </button>
                                <button
                                    type="button"
                                    onClick={resetView}
                                    className="rounded p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                                    aria-label="איפוס זום והזזה"
                                >
                                    <RotateCcw size={22} />
                                </button>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={closeModal}
                            className="absolute right-4 top-[max(1.25rem,env(safe-area-inset-top))] z-40 rounded p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                            aria-label="סגור"
                        >
                            <X size={28} />
                        </button>

                        <button
                            type="button"
                            onClick={() => navigateImage('prev')}
                            className="absolute left-4 top-1/2 z-40 -translate-y-1/2 rounded p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                            aria-label="תמונה קודמת"
                        >
                            <ArrowLeft size={32} />
                        </button>
                        <button
                            type="button"
                            onClick={() => navigateImage('next')}
                            className="absolute right-4 top-1/2 z-40 -translate-y-1/2 rounded p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                            aria-label="תמונה הבאה"
                        >
                            <ArrowRight size={32} />
                        </button>

                        <div
                            ref={zoomViewportRef}
                            className={`flex min-h-0 flex-1 select-none items-center justify-center overflow-hidden ${
                                zoom > MIN_ZOOM ? (isDragging ? 'cursor-grabbing' : 'cursor-grab') : 'cursor-zoom-in'
                            }`}
                            style={{ touchAction: zoom > MIN_ZOOM ? 'none' : 'manipulation' }}
                            onPointerDown={handlePointerDown}
                            onPointerMove={handlePointerMove}
                            onPointerUp={handlePointerUp}
                            onPointerCancel={handlePointerUp}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                            role="presentation"
                        >
                            {selectedImageIndex !== null && (
                                <div
                                    className="will-change-transform"
                                    style={{
                                        transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                                        transition: isDragging ? 'none' : 'transform 0.12s ease-out',
                                    }}
                                >
                                    <img
                                        loading="lazy"
                                        src={images[selectedImageIndex]}
                                        alt="תמונת פורטפוליו מוגדלת"
                                        className="max-h-full max-w-full object-contain"
                                        draggable={false}
                                        onDoubleClick={handleImageDoubleClick}
                                    />
                                </div>
                            )}
                        </div>

                        <div className="pointer-events-none absolute bottom-[max(1.25rem,env(safe-area-inset-bottom))] left-1/2 z-20 -translate-x-1/2 text-center text-white/70">
                            {selectedImageIndex !== null && (
                                <>
                                    <div className="text-sm">
                                        {selectedImageIndex + 1} / {images.length}
                                    </div>
                                    <p className="mt-1 max-w-[18rem] px-2 text-xs text-white/50">
                                        גלגלת עכבר לזום · צביטה עם שתי אצבעות · לחיצה כפולה ×2 או איפוס · גרירה כשמוגדלים
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>,
            document.body
        );

    return (
        <div dir="rtl" className="font-primary text-right bg-background text-text min-h-screen">
            <Navbar />
            <main id="portfolio" className="pt-24">
                <div className="section-luxury bg-primary text-white text-center">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <span className="w-12 h-px bg-secondary"></span>
                            <span className="text-secondary-strong text-xs tracking-widest uppercase font-medium">גלריה</span>
                            <span className="w-12 h-px bg-secondary"></span>
                        </div>
                        <h1 className="font-secondary text-display text-white mb-8">
                            תיק העבודות שלי
                        </h1>
                        <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
                            ברוכות הבאות לעולם היצירה שלי. כל פנים הן בד ייחודי, וכל איפור הוא יצירת אמנות
                            המשקפת את האישיות והיופי הייחודי של כל לקוחה.
                        </p>
                    </div>
                </div>

                <div className="section-luxury">
                    <div className="container mx-auto px-6 lg:px-12">
                        {images.length === 0 ? (
                            <p className="py-16 text-center text-text-light" role="status">
                                אין תמונות להצגה כרגע.
                            </p>
                        ) : null}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {images.map((image, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    className="group relative flex aspect-[3/4] w-full min-w-0 cursor-pointer overflow-hidden border-0 bg-background-alt p-0 text-start shadow-none ring-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                                    onClick={() => openModal(index)}
                                >
                                    <div
                                        className="pointer-events-none absolute inset-2 z-10 border border-secondary/0 transition-all duration-500 group-hover:border-secondary/40"
                                        aria-hidden
                                    />

                                    <LazyLoadImage
                                        src={image}
                                        alt={`תמונת פורטפוליו ${index + 1}`}
                                        effect="blur"
                                        wrapperClassName="!block size-full min-h-0 min-w-0"
                                        className="size-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                    />

                                    <div
                                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                        aria-hidden
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            {lightbox}
        </div>
    );
};

export default Portfolio;
