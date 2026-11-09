"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ActionLink } from '@/components/ActionLink';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

export function ProgrammeTabs() {
  const t = useTranslations('ProgrammeTabs');
  const tHome = useTranslations('Home');
  const TABS = [
    { id: 'ongoing' as const, label: t('tabOpenNow') },
    { id: 'past' as const, label: t('tabPastWorkshops') },
  ];

  const ONGOING_DATA = [
    {
      badge: tHome('event1Tag'),
      title: tHome('event1Title'),
      description: tHome('event1Desc'),
      metadata: "23 November 2026 • 13:00 UTC • Virtual",
      buttonText: tHome('register'),
      href: "https://wacren.zoom.us/webinar/register/WN_jBJrZB7-QOKJ7r2ozl_veA#/registration",
      isPast: false,
    }
  ];

  const PAST_WORKSHOPS_DATA = [
    {
      badge: tHome('event3Tag'),
      title: tHome('event3Title'),
      description: tHome('event3Desc'),
      metadata: "30 October 2026 • 13:00 UTC • Virtual",
      href: "/blog/wiw-webinar-securing-climate-data"
    },
    {
      badge: tHome('event2Tag'),
      title: tHome('event2Title'),
      description: tHome('event2Desc'),
      metadata: "12–15 October 2026 • Abuja, Nigeria",
      href: "/blog/women-in-wacren-climate-innovation-lab-2026"
    },
    {
      badge: "[Webinar 2026]",
      title: "Mentorship, Sponsorship and Networks: What Actually Move Women Forward in STEM?",
      description: "This WiW webinar explores the practical differences between mentorship, sponsorship and networking — and how each can contribute to the growth of women in STEM.",
      metadata: "30 September 2026 • 13:00 UTC • Virtual",
      href: "/blog/wiw-webinar-mentorship-sponsorship-networks"
    },
    {
      badge: t('badge2024'),
      title: t('titleAbidjan'),
      description: t('descAbidjan'),
      metadata: "21–25 October 2024 • Abidjan, Côte d'Ivoire",
      href: "https://indico.wacren.net/event/236/"
    },
    {
      badge: t('badge2024'),
      title: t('titleAccra'),
      description: t('descAccra'),
      metadata: "15–19 July 2024 • Accra, Ghana",
      href: "https://indico.wacren.net/event/207/"
    },
    {
      badge: t('badge2018'),
      title: t('titleLagos'),
      description: t('descLagos'),
      metadata: "2018 • Lagos, Nigeria",
      href: "https://indico.wacren.net/event/61/"
    },
    {
      badge: t('badge2017'),
      title: t('titleDakar'),
      description: t('descDakar'),
      metadata: "2017 • Dakar, Senegal",
      href: "https://indico.wacren.net/event/55/"
    }
  ];

  const [activeTab, setActiveTab] = useState<'ongoing' | 'past'>('ongoing');

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Modern Pill Tabs */}
      <div className="flex p-1.5 bg-slate-100 rounded-full mb-12 w-fit max-w-full overflow-x-auto no-scrollbar border border-slate-200/50">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative px-6 py-3 rounded-full text-sm font-semibold transition-colors duration-300 whitespace-nowrap outline-none",
              activeTab === tab.id ? "text-primary" : "text-slate-600 hover:text-slate-900"
            )}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-tab-pill"
                className="absolute inset-0 bg-white rounded-full shadow-sm"
                transition={{ type: "spring", duration: 0.6, bounce: 0.2 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content Area */}
      <div className="w-full min-h-[400px]">
        <AnimatePresence mode="wait">
          {activeTab === 'ongoing' && (
            <motion.div
              key="ongoing"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full"
            >
              {ONGOING_DATA.map((item, idx) => {
                const isPast = !!item.isPast;
                return (
                  <div 
                    key={idx} 
                    className="flex flex-col items-start p-6 md:p-8 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <span className={cn(
                        "text-[11px] font-bold uppercase tracking-[0.2em]",
                        isPast ? "text-slate-500" : "text-primary"
                      )}>
                        {item.badge}
                      </span>
                      {isPast && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-slate-200/80 text-slate-700 border border-slate-300/70">
                          {t('statusPast')}
                        </span>
                      )}
                    </div>

                    <h3 className="font-heading text-xl lg:text-2xl font-semibold leading-tight mb-3 text-slate-900">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm md:text-[15px] text-slate-700 leading-relaxed mb-6 font-light">
                      {item.description}
                    </p>
                    
                    <div className="mt-auto w-full flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-5 border-t border-slate-200">
                      <p className="text-[12px] font-medium text-slate-500 uppercase tracking-wide leading-snug">
                        {item.metadata}
                      </p>

                      <div className="relative group/btn shrink-0 inline-flex">
                        <ActionLink 
                          href={item.href} 
                          variant="primary" 
                          disabled={isPast}
                        >
                          {isPast ? t('btnClosed') : item.buttonText}
                        </ActionLink>

                        {isPast && (
                          <div 
                            role="tooltip"
                            className="pointer-events-none absolute bottom-full mb-2.5 right-0 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 opacity-0 translate-y-1 group-hover/btn:opacity-100 group-hover/btn:translate-y-0 transition-all duration-200 z-30 whitespace-nowrap drop-shadow-xl"
                          >
                            <div className="bg-slate-950 text-white text-[12px] font-medium px-3 py-1.5 rounded-lg shadow-xl border border-slate-800 text-center">
                              {t('noticeConcluded')}
                            </div>
                            <div className="w-2 h-2 bg-slate-950 rotate-45 mx-auto -mt-1 border-r border-b border-slate-800" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}

          {activeTab === 'past' && (
            <motion.div
              key="past-workshops"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full"
            >
              {PAST_WORKSHOPS_DATA.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-col items-start p-6 md:p-8 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors duration-300"
                >
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-4">
                    {item.badge}
                  </span>
                  <h3 className="font-heading text-xl lg:text-2xl font-semibold leading-tight mb-3 text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-[15px] text-slate-700 leading-relaxed font-light mb-6">
                    {item.description}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-slate-200/80 w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {item.metadata && (
                      <p className="text-[12px] font-medium text-slate-500 uppercase tracking-wide leading-snug">
                        {item.metadata}
                      </p>
                    )}
                    <ActionLink 
                      href={item.href} 
                      variant="secondary" 
                      icon={ArrowRight} 
                      className="text-[13px] px-4 py-2 shrink-0"
                    >
                      {t('readMore')}
                    </ActionLink>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

        </AnimatePresence>
      </div>

    </div>
  );
}
