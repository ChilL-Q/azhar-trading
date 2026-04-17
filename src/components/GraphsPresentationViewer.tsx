"use client";

import React, { useCallback, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react";
import { SlideTemplate } from "./SlideTemplate";
import { motion } from "framer-motion";
import { presentationGraphsSlidesRu } from "@/data/presentationGraphsSlidesRu";
import { presentationGraphsSlidesKz } from "@/data/presentationGraphsSlidesKz";

export const GraphsPresentationViewer = ({ lang }: { lang: "ru" | "kz" }) => {
  const slides = lang === "ru" ? presentationGraphsSlidesRu : presentationGraphsSlidesKz;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error("Error attempting to enable fullscreen:", err);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "Space") {
        scrollNext();
      } else if (e.key === "ArrowLeft") {
        scrollPrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [scrollNext, scrollPrev]);

  return (
    <div className={`relative w-full h-screen bg-[#f8fafc] overflow-hidden flex flex-col font-sans ${isFullscreen ? "fixed inset-0 z-50" : ""}`}>
      {/* Top Controls Bar */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-4 text-slate-500 hover:text-slate-800 transition-colors">
        <span className="text-sm font-mono tracking-wider">
          {selectedIndex + 1} / {slides.length}
        </span>
        <button
          onClick={toggleFullscreen}
          className="p-2 bg-black/20 hover:bg-black/50 backdrop-blur rounded-full transition-all"
        >
          {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
        </button>
      </div>

      {/* Main Embla Carousel */}
      <div className="overflow-hidden flex-1 flex" ref={emblaRef}>
        <div className="flex w-full h-full touch-pan-y">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="relative flex-none w-full h-full min-w-0"
            >
              <SlideTemplate slide={slide} isActive={index === selectedIndex} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Overlays */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 flex items-center justify-start z-10 px-4 group">
        <button
          onClick={scrollPrev}
          disabled={selectedIndex === 0}
          className="p-3 md:p-4 rounded-full bg-white/40 group-hover:bg-white/80 border border-transparent group-hover:border-slate-200 text-slate-800/0 group-hover:text-slate-800 backdrop-blur transition-all disabled:opacity-0 shadow-sm"
        >
          <ChevronLeft size={32} />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 flex items-center justify-end z-10 px-4 group">
        <button
          onClick={scrollNext}
          disabled={selectedIndex === slides.length - 1}
          className="p-3 md:p-4 rounded-full bg-white/40 group-hover:bg-white/80 border border-transparent group-hover:border-slate-200 text-slate-800/0 group-hover:text-slate-800 backdrop-blur transition-all disabled:opacity-0 shadow-sm"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-200 z-20">
        <motion.div
          className="h-full bg-emerald-500"
          initial={{ width: 0 }}
          animate={{
            width: `${((selectedIndex + 1) / slides.length) * 100}%`,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
};
