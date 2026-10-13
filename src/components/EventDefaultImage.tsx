import React from 'react';
import Image from 'next/image';

export interface DefaultPlaceholderImageProps {
  title?: string;
  category?: string;
  date?: string;
  className?: string;
  variant?: 'card' | 'hero';
}

export function DefaultPlaceholderImage({
  className = '',
  variant = 'card',
}: DefaultPlaceholderImageProps) {
  if (variant === 'hero') {
    return (
      <div
        className={`relative w-full h-full min-h-[320px] flex items-center justify-center p-8 md:p-12 overflow-hidden bg-gradient-to-br from-slate-50 via-sky-50/30 to-blue-50/20 select-none ${className}`}
      >
        {/* Decorative subtle grid & atmospheric accents */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-50 pointer-events-none" />
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />

        {/* Centered Logo Card */}
        <div className="relative z-10 flex items-center justify-center p-6 md:p-10 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/70 shadow-[0_8px_30px_rgba(0,0,0,0.04)] max-w-md w-full transition-all duration-500 hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:border-slate-300">
          <div className="relative w-64 h-32 md:w-80 md:h-40 transition-transform duration-500 hover:scale-[1.02]">
            <Image
              src="/Women in WACREN logo.png"
              alt="Women-In-WACREN"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full h-full flex items-center justify-center p-6 overflow-hidden bg-gradient-to-br from-slate-50 via-sky-50/20 to-slate-100/80 select-none ${className}`}
    >
      {/* Decorative dot pattern & ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:18px_18px] opacity-60 pointer-events-none" />
      <div className="absolute -top-10 -right-10 w-36 h-36 bg-sky-200/20 rounded-full blur-2xl pointer-events-none" />

      {/* Centered Logo */}
      <div className="relative z-10 w-44 h-24 md:w-48 md:h-28 transition-transform duration-500 group-hover:scale-105">
        <Image
          src="/Women in WACREN logo.png"
          alt="Women-In-WACREN"
          fill
          sizes="(max-width: 768px) 180px, 200px"
          className="object-contain"
        />
      </div>
    </div>
  );
}

// Backwards-compatibility alias so any caller importing EventDefaultImage continues to work seamlessly
export const EventDefaultImage = DefaultPlaceholderImage;
export type EventDefaultImageProps = DefaultPlaceholderImageProps;
