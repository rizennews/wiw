"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

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
  const [mounted, setMounted] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const computedInitials =
    initials ||
    name
      .replace(/^(Prof\.?|Dr\.?|Ms\.?|Mrs\.?|Mr\.?)\s+/gi, "")
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join("");

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
      <div className="flex flex-col p-6 sm:p-8 bg-white rounded-sm border border-slate-900 h-full">
        <p className="text-base sm:text-lg text-slate-900 leading-relaxed mb-6 flex-1">
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
          {image && !imageError ? (
            <Image
              src={image}
              alt={name}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover shrink-0"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm tracking-wide shrink-0">
              {computedInitials}
            </div>
          )}
          <div className="flex flex-col min-w-0">
            <h4 className="font-semibold text-slate-900 text-sm leading-snug">{name}</h4>
            <span className="text-xs text-slate-500 mt-0.5">{country}</span>
          </div>
        </div>
      </div>

      {/* Modal rendered via React Portal with smooth Framer Motion enter & exit animations */}
      {mounted &&
        fullText &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="testimonial-modal-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/60 backdrop-blur-sm"
                onClick={() => setIsOpen(false)}
                role="dialog"
                aria-modal="true"
                aria-labelledby={`modal-title-${name.replace(/\s+/g, "-")}`}
              >
                <motion.div
                  key="testimonial-modal-dialog"
                  initial={{ opacity: 0, scale: 0.94, y: 18 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 12 }}
                  transition={{
                    duration: 0.28,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative flex flex-col bg-white rounded-sm border border-slate-900 w-full max-w-3xl max-h-[88vh] sm:max-h-[85vh] shadow-2xl overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Sticky Header */}
                  <div className="flex items-start justify-between gap-4 p-5 sm:p-8 pb-4 sm:pb-6 border-b border-slate-200 shrink-0">
                    <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                      {image && !imageError ? (
                        <Image
                          src={image}
                          alt={name}
                          width={52}
                          height={52}
                          className="w-11 h-11 sm:w-13 sm:h-13 rounded-full object-cover shrink-0"
                          onError={() => setImageError(true)}
                        />
                      ) : (
                        <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm sm:text-base tracking-wide shrink-0">
                          {computedInitials}
                        </div>
                      )}
                      <div className="flex flex-col min-w-0">
                        <h3
                          id={`modal-title-${name.replace(/\s+/g, "-")}`}
                          className="font-heading font-semibold text-slate-900 text-lg sm:text-xl leading-snug"
                        >
                          {name}
                        </h3>
                        <span className="text-xs sm:text-sm text-slate-500 mt-0.5">{country}</span>
                      </div>
                    </div>

                    {/* Close Button */}
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="p-2 -mr-1 -mt-1 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
                      aria-label={closeText}
                    >
                      <X className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                  </div>

                  {/* Scrollable Content Body */}
                  <div className="p-5 sm:p-8 py-6 overflow-y-auto flex-1 space-y-4 text-slate-700 text-[15px] sm:text-base md:text-[17px] leading-relaxed">
                    {fullText.split("\n\n").map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>

                  {/* Sticky Footer */}
                  <div className="px-5 sm:px-8 py-4 border-t border-slate-200 bg-slate-50/50 flex justify-end shrink-0">
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="w-full sm:w-auto px-6 py-2.5 text-sm font-semibold bg-slate-900 text-white rounded-sm hover:bg-slate-800 transition-colors cursor-pointer"
                    >
                      {closeText}
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
