"use client";

import React from "react";
import { SlideData } from "@/data/types";
import { motion } from "framer-motion";
import { CheckCircle2, DollarSign } from "lucide-react";

export const SlideTemplate = ({ slide, isActive }: { slide: SlideData; isActive: boolean }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(12px)", scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  const floatAnimation = {
    y: [0, -15, 0],
    scale: [1, 1.02, 1],
    transition: {
      duration: 5,
      repeat: Infinity
    }
  };

  const renderTextWithStrikethrough = (text: string) => {
    const parts = text.split(/(~.*?~)/g);
    return parts.map((part, index) => {
      if (part.startsWith('~') && part.endsWith('~')) {
        return (
          <span key={index} className="line-through opacity-50 decoration-2 decoration-red-500/50">
            {part.slice(1, -1)}
          </span>
        );
      }
      return <React.Fragment key={index}>{part}</React.Fragment>;
    });
  };

  const IconComponent = slide.icon;

  return (
    <div className="w-full h-full flex flex-col justify-center px-6 md:px-12 xl:px-20 py-6 md:py-10 xl:py-16 overflow-y-auto relative bg-[#f8fafc] text-slate-800 font-sans selection:bg-emerald-500/30">
      
      {/* --- ELITE LIGHT BACKGROUND --- */}
      {/* 1. Animated Tech Grid (Subtle Dark) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] z-0 pointer-events-none" />
      
      {/* 2. Premium Glowing Orbs (Soft Emerald + Bright Amber) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4], rotate: [0, 90, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-r from-emerald-200/50 to-teal-100/50 mix-blend-multiply blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, 40, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 20, repeat: Infinity, delay: 2 }}
          className="absolute bottom-[-30%] left-[-15%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-tr from-amber-200/50 to-yellow-100/50 mix-blend-multiply blur-[130px]" 
        />
      </div>

      {/* --- CONTENT START --- */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        className="relative z-10 max-w-7xl w-full mx-auto"
      >
        {/* Header Section */}
        {slide.title && (
          <motion.div variants={itemVariants} className={`mb-6 lg:mb-10 2xl:mb-16 ${slide.layout === "icon_center" ? "text-center" : "text-left"}`}>
            {slide.subtitle && (
              <p className="text-xs md:text-sm 2xl:text-lg uppercase tracking-[0.3em] font-extrabold mb-2 2xl:mb-5 text-amber-500 drop-shadow-sm">
                {slide.subtitle}
              </p>
            )}
            <h1 className="text-3xl md:text-5xl 2xl:text-[5rem] font-extrabold leading-[1.1] uppercase max-w-5xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-950 via-teal-900 to-emerald-800 drop-shadow-sm">
              {slide.title.includes('\n') ? slide.title.split('\n').map((line, i) => (
                <span key={i} className="block">{line}</span>
              )) : slide.title}
            </h1>
          </motion.div>
        )}

        <div className="w-full">

          {/* 1. ICON CENTER LAYOUT */}
          {slide.layout === "icon_center" && (
            <motion.div variants={itemVariants} className="flex flex-col items-center text-center mt-6 2xl:mt-12 relative">
              {IconComponent && (
                <motion.div animate={floatAnimation} className="relative mb-8 2xl:mb-12 group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-amber-300/40 to-emerald-300/40 blur-[40px] rounded-full scale-150 group-hover:scale-175 transition-transform duration-700" />
                  <div className="relative p-6 2xl:p-8 rounded-[2rem] 2xl:rounded-[2.5rem] bg-white/70 border border-slate-200 backdrop-blur-xl shadow-xl">
                    <IconComponent className="w-20 h-20 2xl:w-32 2xl:h-32 text-emerald-600 drop-shadow-sm" strokeWidth={1} />
                  </div>
                </motion.div>
              )}
              {slide.text && (
                <p className="text-lg md:text-2xl 2xl:text-4xl leading-relaxed text-slate-700 max-w-4xl font-medium px-4">
                  {slide.text}
                </p>
              )}
            </motion.div>
          )}

          {/* 2. DEFAULT (TEXT FOCUS) LAYOUT */}
          {slide.layout === "default" && (
            <motion.div variants={itemVariants} className="max-w-5xl">
              {slide.text && (
                <div className="relative p-8 2xl:p-16 rounded-[2rem] bg-white/60 border border-slate-200/60 backdrop-blur-3xl shadow-xl">
                  <div className="absolute -left-px top-1/4 bottom-1/4 w-[4px] rounded-r-md bg-gradient-to-b from-transparent via-emerald-500 to-transparent opacity-80" />
                  <p className="text-xl md:text-2xl 2xl:text-4xl leading-[1.6] whitespace-pre-wrap font-medium text-slate-800">
                    {slide.text}
                  </p>
                </div>
              )}
            </motion.div>
          )}

          {/* 3. SPLIT LAYOUT (Used for Tariffs & Crucial Info) */}
          {slide.layout === "split" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 2xl:gap-28 items-center">
              <motion.div variants={itemVariants} className="lg:col-span-7">
                {slide.text && (
                  <p className="text-lg md:text-xl 2xl:text-[1.8rem] leading-[1.6] whitespace-pre-wrap text-slate-700 font-medium pb-2 2xl:pb-4">
                    {slide.text}
                  </p>
                )}
                {slide.list && (
                  <div className="space-y-4 2xl:space-y-6 mt-4 2xl:mt-8">
                    {slide.list.map((item, idx) => (
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + idx * 0.1, duration: 0.6 }}
                        className="flex items-start gap-4 2xl:gap-6 group"
                      >
                        <div className="relative mt-1 shrink-0">
                           <div className="absolute inset-0 bg-emerald-200/80 blur-md rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                           <div className="relative p-1.5 rounded-full bg-emerald-100 border border-emerald-300">
                             <CheckCircle2 className="w-5 h-5 2xl:w-8 2xl:h-8 text-emerald-600" strokeWidth={2.5} />
                           </div>
                        </div>
                        <p className="text-base md:text-lg 2xl:text-[1.5rem] leading-snug text-slate-800 group-hover:text-emerald-950 transition-colors duration-300">
                          {renderTextWithStrikethrough(item)}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>

              <motion.div variants={itemVariants} className="h-full min-h-[300px] 2xl:min-h-[400px] lg:col-span-5 relative w-full lg:w-[110%] lg:-ml-[10%]">
                {/* Clean Light Panel (Right Side) */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 via-transparent to-emerald-100/60 rounded-[2.5rem] blur-2xl transform scale-95" />
                <div className="h-full rounded-[2.5rem] bg-white/70 backdrop-blur-3xl border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col justify-center items-center relative overflow-hidden group p-8 2xl:p-14 hover:border-emerald-300/50 transition-colors duration-700">
                  
                  {/* Glowing edges */}
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />
                  
                  {IconComponent && (
                    <motion.div animate={floatAnimation} className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-5">
                      <IconComponent className="w-48 h-48 2xl:w-96 2xl:h-96 text-emerald-900" strokeWidth={0.5} />
                    </motion.div>
                  )}
                  
                  <div className="relative z-10 text-center w-full flex flex-col items-center gap-4 2xl:gap-6">
                    {slide.visualText && (
                      <>
                        <div className="p-3 2xl:p-4 rounded-full bg-amber-100 border border-amber-200 mb-1 2xl:mb-2 shadow-sm">
                          <DollarSign className="w-8 h-8 2xl:w-10 2xl:h-10 text-amber-500" />
                        </div>
                        <p className="text-xl md:text-2xl 2xl:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-b from-emerald-800 to-emerald-950 whitespace-pre-wrap leading-tight drop-shadow-sm">
                          {slide.visualText}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {/* 4. LIST LAYOUT */}
          {slide.layout === "list" && slide.list && (
            <div className="max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 2xl:gap-6">
                {slide.list.map((item, idx) => (
                  <motion.div 
                    variants={itemVariants}
                    key={idx} 
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="relative p-5 lg:p-6 2xl:p-8 rounded-[1.2rem] 2xl:rounded-[1.5rem] bg-white/60 backdrop-blur-xl border border-slate-200/80 flex items-start gap-4 2xl:gap-6 shadow-lg hover:border-emerald-300 hover:bg-white/80 transition-all duration-300 group overflow-hidden"
                  >
                    {/* Hover light effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/0 via-emerald-50/0 to-emerald-50/0 group-hover:from-emerald-100/50 group-hover:via-transparent transition-all duration-500" />
                    
                    <div className="relative mt-0.5 2xl:mt-1 shrink-0 p-1 2xl:p-1.5 rounded-[0.5rem] 2xl:rounded-xl bg-emerald-50 border border-emerald-200 group-hover:border-emerald-400 group-hover:bg-emerald-100 transition-colors shadow-sm">
                       <CheckCircle2 className="w-6 h-6 2xl:w-8 2xl:h-8 text-emerald-500 group-hover:text-emerald-600 transition-colors" strokeWidth={2} />
                    </div>
                    <p className="text-base sm:text-lg 2xl:text-[1.3rem] leading-relaxed text-slate-700 font-medium group-hover:text-emerald-950 transition-colors relative z-10">
                      {renderTextWithStrikethrough(item)}
                    </p>
                  </motion.div>
                ))}
              </div>
              
              {slide.text && (
                <motion.div variants={itemVariants} className="mt-6 2xl:mt-12 p-5 lg:p-6 2xl:p-10 rounded-[1.5rem] 2xl:rounded-[2rem] bg-gradient-to-r from-emerald-100/60 to-emerald-50/30 border-l-[4px] 2xl:border-l-[6px] border-emerald-500 backdrop-blur-2xl shadow-lg relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200/40 blur-3xl rounded-full group-hover:bg-amber-200/40 transition-colors duration-700" />
                  <p className="text-xl md:text-2xl 2xl:text-4xl font-black uppercase bg-clip-text text-transparent bg-gradient-to-r from-emerald-800 to-teal-800 drop-shadow-sm tracking-tight leading-tight">
                    {slide.text}
                  </p>
                </motion.div>
              )}
            </div>
          )}

        </div>
      </motion.div>
    </div>
  );
};
