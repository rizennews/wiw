"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ActionLink } from '@/components/ActionLink';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// --- DATA ---
const TABS = ["Open now", "Past workshops", "Resources & learning hub"];

const OPEN_NOW_DATA = [
  {
    badge: "Applications opening",
    title: "Climate Innovation Lab 2026",
    description: "A structured innovation programme strengthening women's capacity to collaboratively develop digital solutions to climate challenges. Teams progress from learning and problem identification through prototype development, with mentorship continuing afterwards.",
    metadata: "Format: team-based • Eligibility: women 18+ in the WACREN region • Dates to confirm",
    buttonText: "Apply",
    href: "#"
  },
  {
    badge: "Registration open",
    title: "Women-In-WACREN Network launch",
    description: "A 75-minute virtual session introducing WiW, the Women-In-WACREN Network and the Climate Innovation Lab, with time for questions and networking.",
    metadata: "25 August 2026 • Virtual • Free",
    buttonText: "Register",
    href: "#"
  }
];

const PAST_WORKSHOPS_DATA = [
  {
    badge: "04 Nov - 06 Nov 2024",
    title: "Women in WACREN Workshop",
    description: "The French-language edition of the WiW 2024 workshop, hosted at the Virtual University of Côte d'Ivoire (UVCI). An intensively practical workshop focusing on the use of Python for meteorological and climatic data analysis.",
    href: "https://indico.wacren.net/event/236/"
  },
  {
    badge: "27 Aug - 30 Aug 2024",
    title: "Women-in-WACREN 2024 - Python for Weather and Climate Data Analysis",
    description: "An intensive, hands-on workshop providing a deep understanding of Python programming and its applications in weather and climate data analysis. Designed for women researchers, students, and early-career professionals in STEM.",
    href: "https://indico.wacren.net/event/207/"
  },
  {
    badge: "22 Jan - 26 Jan 2018",
    title: "Women in WACREN - Physical Computing with Python",
    description: "A hands-on training introducing the fundamentals of physical computing with the Raspberry Pi, sensors, and Python. Held in collaboration with Eko-Konnect, NgREN, UNILAG, and AfricaConnect2 to support female students and staff in STEM.",
    href: "https://indico.wacren.net/event/61/"
  },
  {
    badge: "25 Nov 2017",
    title: "Women in WACREN - Community Day organized by Senchix",
    description: "A community day featuring networking sessions with local tech hubs, inspiring talks highlighting remarkable careers of women across various sectors, and personal development workshops.",
    href: "https://indico.wacren.net/event/56/"
  },
  {
    badge: "20 Nov - 24 Nov 2017",
    title: "Women in WACREN - Physical Computing with Python",
    description: "The inaugural Women in WACREN training event, teaching Python through hands-on exercises with Raspberry Pi and sensors. Organized in collaboration with SenChix, snRER, UCAD, and AfricaConnect2 to enhance STEM skills for women.",
    href: "https://indico.wacren.net/event/55/"
  }
];

const RESOURCES_DATA = [
  {
    title: "Workshop materials",
    description: "Slides, notebooks and exercises from past cohorts, hosted on the WACREN Indico conference server.",
    href: ""
  },
  {
    title: "Code repositories",
    description: "Training code and participant projects in the Women in WACREN GitLab group.",
    href: ""
  },
  {
    title: "Reports and publications",
    description: "Event reports and programme documentation, available through the WACREN media centre and repository.",
    href: "https://baobab.wacren.net/communities/wiw/records?q=&l=list&p=1&s=10&sort=newest"
  }
];


// --- COMPONENT ---
export function ProgrammeTabs() {
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
          {activeTab === "Open now" && (
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

          {activeTab === "Past workshops" && (
            <motion.div
              key="past-workshops"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full"
            >
              {PAST_WORKSHOPS_DATA.map((item, idx) => {
                if (item.href) {
                  return (
                    <a 
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={idx} 
                      className="group flex flex-col items-start p-6 md:p-8 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors duration-300 cursor-pointer"
                    >
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-4 group-hover:text-primary/80 transition-colors">
                        {item.badge}
                      </span>
                      <div className="flex items-start justify-between w-full mb-3 gap-4">
                        <h3 className="font-heading text-xl lg:text-2xl font-semibold leading-tight text-slate-900 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <div className="w-8 h-8 shrink-0 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors text-slate-400 mt-1">
                          <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                        </div>
                      </div>
                      <p className="text-sm md:text-[15px] text-slate-700 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </a>
                  );
                }

                return (
                  <div key={idx} className="flex flex-col items-start p-6 md:p-8 bg-slate-50 rounded-2xl transition-colors duration-300">
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
                );
              })}
            </motion.div>
          )}

          {activeTab === "Resources & learning hub" && (
            <motion.div
              key="resources"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full"
            >
              {RESOURCES_DATA.map((item, idx) => {
                if (item.href) {
                  return (
                    <a 
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={idx} 
                      className="group flex flex-col items-start p-6 md:p-8 bg-slate-50 rounded-2xl transition-colors duration-300 hover:bg-slate-100 cursor-pointer"
                    >
                      <div className="flex items-center justify-between w-full mb-4">
                        <h3 className="font-heading text-xl lg:text-2xl font-semibold leading-tight text-slate-900 transition-colors group-hover:text-primary">
                          {item.title}
                        </h3>
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors text-slate-400">
                          <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                        </div>
                      </div>
                      <p className="text-sm md:text-[15px] text-slate-700 leading-relaxed font-light mt-2">
                        {item.description}
                      </p>
                    </a>
                  );
                }

                return (
                  <div 
                    key={idx} 
                    className="flex flex-col items-start p-6 md:p-8 bg-slate-50 rounded-2xl transition-colors duration-300"
                  >
                    <div className="flex items-center justify-between w-full mb-4">
                      <h3 className="font-heading text-xl lg:text-2xl font-semibold leading-tight text-slate-900 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm md:text-[15px] text-slate-700 leading-relaxed font-light mt-2">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
