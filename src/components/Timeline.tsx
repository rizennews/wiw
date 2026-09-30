"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

const timelineData = [
  {
    year: "2018"
  },
  {
    year: "2019–2023"
  },
  {
    year: "2024"
  },
  {
    year: "2026"
  }
];

import { useTranslations } from 'next-intl';

export function Timeline() {
  const t = useTranslations('Timeline');
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="w-full bg-slate-50 py-24 md:py-32 overflow-hidden border-t border-slate-200/50">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-20 flex flex-col items-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">{t('title')}</h2>
          <p className="text-lg md:text-xl text-slate-700 font-light">{t('desc')}</p>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative w-full max-w-[800px] mx-auto py-10">
          
          {/* Static Center Line Background */}
          <div className="absolute left-[23px] top-0 bottom-0 w-[2px] bg-slate-200 rounded-full" />
          
          {/* Animated Scroll Line */}
          <motion.div 
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-[23px] top-0 bottom-0 w-[2px] bg-primary rounded-full z-10" 
          />

          <div className="flex flex-col gap-12 md:gap-16 relative z-20">
            {timelineData.map((item, index) => {
              return (
                <div key={item.year} className="relative flex flex-row items-start w-full">
                  
                  {/* Dot */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: 0.1, type: "spring" }}
                    className="absolute left-[24px] top-6 w-4 h-4 rounded-full bg-white border-[4px] border-primary -translate-x-1/2 z-20 shadow-[0_0_0_4px_rgba(255,255,255,1)]" 
                  />

                  {/* Content Box */}
                  <div className="w-full pl-16">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="py-4 group"
                    >
                      <span className="inline-block text-primary font-heading text-xl md:text-2xl font-bold mb-3">{item.year}</span>
                      <h3 className="font-heading text-lg md:text-xl font-semibold text-slate-900 mb-4 leading-tight group-hover:text-primary transition-colors">
                        {t(`items.${index}.title`)}
                      </h3>
                      <p className="text-slate-700 font-light leading-relaxed text-base">
                        {t(`items.${index}.description`)}
                      </p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
