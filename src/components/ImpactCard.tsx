import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ImpactCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ImpactCard({ icon: Icon, title, description }: ImpactCardProps) {
  return (
    <div className="flex gap-4 items-start p-6 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 shadow-sm transition-colors duration-300">
      <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
        <Icon className="w-6 h-6" />
      </div>
      <div className="flex flex-col gap-2 pt-1">
        <h3 className="font-heading font-semibold text-xl text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed text-[15px]">
          {description}
        </p>
      </div>
    </div>
  );
}
