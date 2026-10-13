import React, { type ComponentProps } from 'react';
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { LucideIcon } from 'lucide-react';

type LinkHref = ComponentProps<typeof Link>['href'];

interface ActionLinkProps {
  href: string;
  children: React.ReactNode;
  icon?: LucideIcon;
  className?: string;
  variant?: 'primary' | 'secondary' | 'inverted' | 'outline-inverted';
  target?: string;
  rel?: string;
  disabled?: boolean;
}

export function ActionLink({ 
  href, 
  children, 
  icon: Icon, 
  className, 
  variant = 'primary',
  target,
  rel,
  disabled = false,
}: ActionLinkProps) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full transition-colors duration-200 group";
  const variants = {
    primary: "text-white bg-primary hover:bg-primary/90",
    secondary: "text-primary bg-slate-100 hover:bg-slate-200",
    inverted: "text-primary bg-white hover:bg-neutral-100 shadow-lg",
    "outline-inverted": "text-white bg-transparent border-2 border-white hover:bg-white/10"
  };

  if (disabled) {
    return (
      <span
        aria-disabled="true"
        className={cn(baseStyles, "bg-slate-200 text-slate-400 cursor-not-allowed select-none border border-slate-300/60 shadow-none", className)}
      >
        {children}
        {Icon && (
          <Icon className="ml-2 w-5 h-5 opacity-50" />
        )}
      </span>
    );
  }

  const isExternal = href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:');

  if (isExternal) {
    return (
      <a 
        href={href} 
        target={target || "_blank"}
        rel={rel || "noopener noreferrer"}
        className={cn(baseStyles, variants[variant], className)}
      >
        {children}
        {Icon && (
          <Icon className={cn("ml-2 w-5 h-5 transition-transform", variant === 'primary' && "group-hover:translate-x-1")} />
        )}
      </a>
    );
  }

  return (
    <Link 
      href={href as LinkHref} 
      className={cn(baseStyles, variants[variant], className)}
    >
      {children}
      {Icon && (
        <Icon className={cn("ml-2 w-5 h-5 transition-transform", variant === 'primary' && "group-hover:translate-x-1")} />
      )}
    </Link>
  );
}
