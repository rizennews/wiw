"use client";

import React, { useEffect, useState } from 'react';

export interface TocItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  toc: TocItem[];
}

export function TableOfContents({ toc }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Set initial active id if none is set
    if (toc.length > 0 && !activeId) {
      setActiveId(toc[0].id);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first intersecting entry
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // If multiple are visible, pick the one closest to the top
          const topEntry = visibleEntries.reduce((prev, current) => {
            return (prev.boundingClientRect.top < current.boundingClientRect.top) ? prev : current;
          });
          setActiveId(topEntry.target.id);
        }
      },
      {
        rootMargin: '-100px 0px -60% 0px', // Trigger when section passes the top offset
        threshold: 0, // Trigger as soon as 1px is visible
      }
    );

    // Observe all heading elements in the TOC
    toc.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [toc]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Smooth scroll to element, offsetting for the sticky header
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveId(id);
    }
  };

  return (
    <aside className="w-full lg:w-[30%] shrink-0">
      <div className="sticky top-[120px]">
        <h3 className="font-mono text-[12px] font-bold text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-200 pb-4">
          Table of contents
        </h3>
        <ul className="flex flex-col gap-4">
          {toc.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id} className="relative flex items-start">
                {isActive && (
                  <span className="absolute left-[-12px] top-[6px] w-[4px] h-[4px] bg-primary transition-all duration-300"></span>
                )}
                <a 
                  href={`#${item.id}`}
                  onClick={(e) => handleClick(e, item.id)}
                  className={`text-[13px] leading-relaxed transition-colors ${
                    isActive 
                      ? 'text-slate-900 font-medium' 
                      : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
