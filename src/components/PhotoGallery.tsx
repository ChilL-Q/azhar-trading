"use client";

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const photos = [
    "/gallery/1.jpg",
    "/gallery/2.jpg",
    "/gallery/3.jpg",
    "/gallery/4.jpg",
    "/gallery/5.jpg",
    "/gallery/6.jpg",
];

export function PhotoGallery() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: "start", dragFree: true },
        [Autoplay({ delay: 3000, stopOnInteraction: true }), WheelGesturesPlugin()]
    );

    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    // Lightbox handlers
    const openLightbox = (index: number) => {
        setSelectedIndex(index);
        document.body.style.overflow = "hidden"; // Prevent background scroll
    };

    const closeLightbox = () => {
        setSelectedIndex(null);
        document.body.style.overflow = "auto";
    };

    const nextPhoto = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex + 1) % photos.length);
        }
    }, [selectedIndex]);

    const prevPhoto = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length);
        }
    }, [selectedIndex]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight") setSelectedIndex((selectedIndex + 1) % photos.length);
            if (e.key === "ArrowLeft") setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedIndex]);

    // Carousel navigation
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <div className="w-full relative group/carousel">
            {/* Inline Carousel */}
            <div className="overflow-hidden cursor-grab active:cursor-grabbing px-2 sm:px-4" ref={emblaRef}>
                <div className="flex gap-4 sm:gap-6 py-4">
                    {photos.map((src, index) => (
                        <div
                            key={index}
                            className="flex-[0_0_70%] sm:flex-[0_0_40%] md:flex-[0_0_30%] lg:flex-[0_0_22%] min-w-0"
                            onClick={() => openLightbox(index)}
                        >
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-primary/10 group cursor-pointer h-full transition-transform hover:scale-[1.02]">
                                <img
                                    src={src}
                                    alt={`Фото ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                    <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 drop-shadow-lg" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Carousel Navigation Arrows */}
            <button
                onClick={scrollPrev}
                className="absolute left-0 sm:-left-6 lg:-left-12 top-1/2 -translate-y-1/2 z-10 p-3 bg-surface/50 hover:bg-surface border border-primary/10 rounded-full text-foreground/70 hover:text-primary transition-all opacity-0 group-hover/carousel:opacity-100 hidden sm:flex items-center justify-center shadow-md hover:scale-110"
                aria-label="Предыдущее фото"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={scrollNext}
                className="absolute right-0 sm:-right-6 lg:-right-12 top-1/2 -translate-y-1/2 z-10 p-3 bg-surface/50 hover:bg-surface border border-primary/10 rounded-full text-foreground/70 hover:text-primary transition-all opacity-0 group-hover/carousel:opacity-100 hidden sm:flex items-center justify-center shadow-md hover:scale-110"
                aria-label="Следующее фото"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Custom Lightbox */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center"
                    >
                        {/* Close button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 sm:top-8 sm:right-8 z-50 p-2 sm:p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                        >
                            <X className="w-6 h-6 sm:w-8 sm:h-8" />
                        </button>

                        {/* Navigation Prev */}
                        <button
                            onClick={prevPhoto}
                            className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-2 sm:p-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                        >
                            <ChevronLeft className="w-6 h-6 sm:w-10 sm:h-10" />
                        </button>

                        {/* Current Image */}
                        <motion.div
                            key={selectedIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="relative w-full h-full max-w-5xl max-h-[85vh] sm:max-h-[90vh] mx-12 sm:mx-24 flex items-center justify-center"
                        >
                            <img
                                src={photos[selectedIndex]}
                                alt={`Фото ${selectedIndex + 1}`}
                                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                            />
                        </motion.div>

                        {/* Navigation Next */}
                        <button
                            onClick={nextPhoto}
                            className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-2 sm:p-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                        >
                            <ChevronRight className="w-6 h-6 sm:w-10 sm:h-10" />
                        </button>

                        {/* Counters */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 rounded-full text-white/80 font-medium tracking-wide text-sm">
                            {selectedIndex + 1} / {photos.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
