"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface TestimonialsGridProps {
  children: React.ReactNode;
  initialCount?: number;
  stepCount?: number;
  loadMoreText?: string;
  showLessText?: string;
}

export function TestimonialsGrid({
  children,
  initialCount = 6,
  stepCount = 3,
  loadMoreText = "Load more testimonials",
  showLessText = "Show less",
}: TestimonialsGridProps) {
  const items = React.Children.toArray(children);
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const hasMore = visibleCount < items.length;
  const canShowLess = visibleCount > initialCount && !hasMore;

  // Render up to 3 extra preview items after visibleCount so they peek through the fade-out mask
  const renderCount = hasMore ? Math.min(visibleCount + stepCount, items.length) : visibleCount;
  const renderedItems = items.slice(0, renderCount);

  return (
    <div className="relative">
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {renderedItems.map((item, idx) => {
          const isPreviewRow = hasMore && idx >= visibleCount;
          const previewIndex = idx - visibleCount;

          // Responsive visibility for the faded preview row:
          // - Mobile (1 col): only show 1 faded preview card so there isn't a long stack of faded cards
          // - Tablet (2 cols): show up to 2 faded preview cards
          // - Desktop (3 cols): show all 3 faded preview cards
          let previewResponsiveClass = "";
          if (isPreviewRow) {
            if (previewIndex === 1) {
              previewResponsiveClass = "hidden md:block";
            } else if (previewIndex >= 2) {
              previewResponsiveClass = "hidden lg:block";
            }
          }

          return (
            <div
              key={idx}
              className={`h-full transition-opacity duration-500 ease-out ${previewResponsiveClass} ${
                isPreviewRow
                  ? "pointer-events-none select-none max-h-[200px] sm:max-h-[240px] overflow-hidden opacity-55"
                  : "opacity-100 animate-in fade-in duration-500"
              }`}
              style={
                isPreviewRow
                  ? {
                      maskImage: "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.4) 45%, transparent 95%)",
                      WebkitMaskImage: "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.4) 45%, transparent 95%)",
                    }
                  : undefined
              }
              aria-hidden={isPreviewRow ? "true" : undefined}
            >
              {item}
            </div>
          );
        })}
      </div>

      {/* Bottom fade-out gradient & Load More button */}
      {(hasMore || canShowLess) && (
        <div
          className={`relative z-10 flex justify-center px-4 transition-all duration-500 ${
            hasMore
              ? "-mt-24 sm:-mt-32 pt-20 sm:pt-24 pb-4 bg-gradient-to-t from-slate-50 via-slate-50/95 to-transparent"
              : "mt-10 sm:mt-14"
          }`}
        >
          {hasMore ? (
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => Math.min(prev + stepCount, items.length))}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold rounded-full text-white bg-primary hover:bg-primary/90 transition-all duration-300 cursor-pointer group shadow-md hover:shadow-lg active:scale-[0.98]"
            >
              <span>{loadMoreText}</span>
              <ChevronDown className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5 shrink-0" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setVisibleCount(initialCount)}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold rounded-full text-slate-900 bg-white border border-slate-900 hover:bg-slate-100 transition-all duration-300 cursor-pointer group active:scale-[0.98]"
            >
              <span>{showLessText}</span>
              <ChevronUp className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 shrink-0" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
