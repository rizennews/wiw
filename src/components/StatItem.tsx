import React from 'react';
import { cn } from '@/lib/utils';

interface StatItemProps {
  value: string;
  label: string;
  className?: string;
}

export function StatItem({ value, label, className }: StatItemProps) {
  return (
    <div className={cn("flex flex-col items-center lg:items-start text-center lg:text-left", className)}>
      <span className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold mb-2">{value}</span>
      <span className="text-sm font-medium text-white/80 uppercase tracking-[0.2em] leading-relaxed">{label}</span>
    </div>
  );
}
