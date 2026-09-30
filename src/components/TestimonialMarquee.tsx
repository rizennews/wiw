"use client";

import React from "react";

import { useTranslations } from 'next-intl';

export function TestimonialMarquee() {
  const t = useTranslations('TestimonialMarquee');
  
  const testimonials = [
    {
      quoteStart: t('t1_quoteStart'),
      highlight: t('t1_highlight'),
      quoteEnd: t('t1_quoteEnd'),
      name: "Henrietta Ampofo",
      country: "Ghana",
      image: "/impact/Henrietta Ampofo.jpg",
      markColor: "bg-pink-200/60"
    },
    {
      quoteStart: t('t2_quoteStart'),
      highlight: t('t2_highlight'),
      quoteEnd: t('t2_quoteEnd'),
      name: "Eletta Adeola",
      country: "Nigeria",
      image: "/impact/Eletta Adeola.jpg",
      markColor: "bg-emerald-200/60"
    },
    {
      quoteStart: t('t3_quoteStart'),
      highlight: t('t3_highlight'),
      quoteEnd: t('t3_quoteEnd'),
      name: "Rasmata Simpore",
      country: "Burkina Faso",
      initials: "RS",
      markColor: "bg-blue-200/60"
    },
    {
      quoteStart: t('t4_quoteStart'),
      highlight: t('t4_highlight'),
      quoteEnd: t('t4_quoteEnd'),
      name: "Partner name",
      country: "Institution \u00b7 Country",
      initials: "KL",
      markColor: "bg-orange-200/60"
    },
    {
      quoteStart: t('t5_quoteStart'),
      highlight: t('t5_highlight'),
      quoteEnd: t('t5_quoteEnd'),
      name: "Participant name",
      country: "Role \u00b7 Country",
      initials: "IJ",
      markColor: "bg-purple-200/60"
    }
  ];

  return (
    <div 
      className="relative flex w-full overflow-hidden py-4"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
      }}
    >
      <div className="flex w-max animate-marquee hover:play-state-paused gap-6 pr-6">
        {[...testimonials, ...testimonials].map((t, i) => (
          <div key={i} className="flex flex-col p-8 bg-white rounded-sm border border-slate-900 w-[350px] md:w-[450px] shrink-0">
            <p className="text-lg text-slate-900 leading-relaxed mb-8 flex-1 whitespace-pre-wrap">
              &ldquo;{t.quoteStart}<mark className={`${t.markColor} px-1 py-0.5 rounded-sm`}>{t.highlight}</mark>{t.quoteEnd}&rdquo;
            </p>
            <hr className="border-slate-900 mb-6" />
            <div className="flex items-center gap-4">
              {t.image ? (
                <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover shrink-0" />
              ) : (
                <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm tracking-wide shrink-0">
                  {t.initials}
                </div>
              )}
              <div className="flex flex-col">
                <h4 className="font-semibold text-slate-900 text-sm">{t.name}</h4>
                <span className="text-xs text-slate-500">{t.country}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .hover\\:play-state-paused:hover {
          animation-play-state: paused;
        }
      `}} />
    </div>
  );
}
