"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ActionLink } from '@/components/ActionLink';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

// --- DATA ---

// --- COMPONENT ---
export function ProgrammeTabs() {
  const t = useTranslations('ProgrammeTabs');
  const TABS = [t('tabOpenNow'), t('tabPastWorkshops')];

  const OPEN_NOW_DATA = [
    {
      badge: t('badgeOpen'),
      title: t('titleClimate'),
      description: t('descClimate'),
      metadata: t('metaClimate'),
      buttonText: t('btnApply'),
      href: "#"
    },
    {
      badge: t('badgeReg'),
      title: t('titleComm'),
      description: t('descComm'),
      metadata: t('metaComm'),
      buttonText: t('btnRegister'),
      href: "#"
    }
  ];

  const PAST_WORKSHOPS_DATA = [
    {
      badge: t('badge2024'),
      title: t('titlePython1'),
      description: t('descPython1')
    },
    {
      badge: t('badge2024'),
      title: t('titlePython2'),
      description: t('descPython2')
    },
    {
      badge: t('badge2018'),
      title: t('titlePhysical'),
      description: t('descPhysical')
    },
    {
      badge: t('badgeOngoing'),
      title: t('titleGit'),
      description: t('descGit')
    },
    {
      badge: t('badgeOngoing'),
      title: t('titleIoT'),
      description: t('descIoT')
    },
    {
      badge: t('badgeOngoing'),
      title: t('titleAI'),
      description: t('descAI')
    }
  ];

  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Modern Pill Tabs */}
      <div className="flex p-1.5 bg-slate-100 rounded-full mb-12 w-fit max-w-full overflow-x-auto no-scrollbar border border-slate-200/50">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "relative px-6 py-3 rounded-full text-sm font-semibold transition-colors duration-300 whitespace-nowrap outline-none",
              activeTab === tab ? "text-primary" : "text-slate-600 hover:text-slate-900"
            )}
          >
            {activeTab === tab && (
              <motion.div
                layoutId="active-tab-pill"
                className="absolute inset-0 bg-white rounded-full shadow-sm"
                transition={{ type: "spring", duration: 0.6, bounce: 0.2 }}
              />
            )}
            <span className="relative z-10">{tab}</span>
          </button>
        ))}
      </div>

      {/* Tab Content Area */}
      <div className="w-full min-h-[400px]">
        <AnimatePresence mode="wait">
          {activeTab === t('tabOpenNow') && (
            <motion.div
              key="open-now"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full"
            >
              {OPEN_NOW_DATA.map((item, idx) => (
                <div key={idx} className="flex flex-col items-start p-6 md:p-8 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors duration-300">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] mb-4 text-primary">
                    {item.badge}
                  </span>
                  <h3 className="font-heading text-xl lg:text-2xl font-semibold leading-tight mb-3 text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-[15px] text-slate-700 leading-relaxed mb-8 font-light">
                    {item.description}
                  </p>
                  
                  <div className="mt-auto w-full flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-5 border-t border-slate-200">
                    <p className="text-[12px] font-medium text-slate-500 uppercase tracking-wide leading-snug">
                      {item.metadata}
                    </p>
                    <ActionLink href={item.href} variant="primary" className="shrink-0">
                      {item.buttonText}
                    </ActionLink>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === t('tabPastWorkshops') && (
            <motion.div
              key="past-workshops"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full"
            >
              {PAST_WORKSHOPS_DATA.map((item, idx) => (
                <div key={idx} className="flex flex-col items-start p-6 md:p-8 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors duration-300">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-4">
                    {item.badge}
                  </span>
                  <h3 className="font-heading text-xl lg:text-2xl font-semibold leading-tight mb-3 text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-[15px] text-slate-700 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              ))}
            </motion.div>
          )}


        </AnimatePresence>
      </div>

    </div>
  );
}
