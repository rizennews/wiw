import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ImpactCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ImpactCard({ icon: Icon, title, description }: ImpactCardProps) {
  return (
    <div className="flex gap-4 items-start p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm transition-all duration-300">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-200/60 flex items-center justify-center text-slate-700 mt-0.5">
        <Icon className="w-5 h-5" strokeWidth={2} />
      </div>
      <div className="flex flex-col gap-1.5 flex-1">
        <h3 className="font-heading font-semibold text-lg text-slate-900 leading-tight">{title}</h3>
        <p className="text-slate-600 leading-relaxed text-sm font-light">
          {description}
        </p>
      </div>
    </div>
  );
}
