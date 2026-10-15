"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ArrowRight } from "lucide-react";

interface TestimonialCardProps {
  quote: React.ReactNode;
  fullText?: string;
  name: string;
  country: string;
  image?: string;
  initials?: string;
  readMoreText?: string;
  closeText?: string;
}

export function TestimonialCard({
  quote,
  fullText,
  name,
  country,
  image,
  initials,
  readMoreText = "Read more",
  closeText = "Close"
}: TestimonialCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setIsOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <div className="flex flex-col p-8 bg-white rounded-sm border border-slate-900 h-full">
        <p className="text-lg text-slate-900 leading-relaxed mb-6 flex-1">
          {quote}
        </p>

        {fullText && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1.5 mb-6 text-left w-fit cursor-pointer group"
          >
            <span>{readMoreText}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>
        )}

        <hr className="border-slate-900 mb-6 mt-auto" />
        <div className="flex items-center gap-4">
          {image ? (
            <Image
              src={image}
              alt={name}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover shrink-0"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm tracking-wide shrink-0">
              {initials}
            </div>
          )}
          <div className="flex flex-col">
            <h4 className="font-semibold text-slate-900 text-sm">{name}</h4>
            <span className="text-xs text-slate-500">{country}</span>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && fullText && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="relative bg-white rounded-sm border border-slate-900 w-full max-w-2xl max-h-[85vh] flex flex-col p-6 sm:p-8 md:p-10 shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label={closeText}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Author info at top */}
            <div className="flex items-center gap-4 mb-6 pr-8">
              {image ? (
                <Image
                  src={image}
                  alt={name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover shrink-0"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-base tracking-wide shrink-0">
                  {initials}
                </div>
              )}
              <div className="flex flex-col">
                <h3 className="font-heading font-semibold text-slate-900 text-lg leading-snug">{name}</h3>
                <span className="text-xs text-slate-500">{country}</span>
              </div>
            </div>

            <hr className="border-slate-200 mb-6" />

            {/* Content */}
            <div className="overflow-y-auto pr-2 space-y-4 text-slate-700 text-base md:text-[17px] leading-relaxed flex-1">
              {fullText.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-5 py-2 text-sm font-medium bg-slate-900 text-white rounded-sm hover:bg-slate-800 transition-colors cursor-pointer"
              >
                {closeText}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
