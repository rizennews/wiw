"use client";

import React, { useState, useEffect } from 'react';
import { Link } from "@/i18n/routing";
import { ActionLink } from "@/components/ActionLink";

interface CountdownProps {
  targetDate: string; // ISO string
  endDate?: string; // ISO string
}

export function Countdown({ targetDate, endDate }: CountdownProps) {
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState<'upcoming' | 'live' | 'concluded'>('upcoming');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setMounted(true);
    const target = new Date(targetDate).getTime();
    // Default the event duration to 24 hours if no endDate is provided
    const end = endDate ? new Date(endDate).getTime() : target + 24 * 60 * 60 * 1000;

    const updateTimer = () => {
      const now = new Date().getTime();

      if (now >= end) {
        setStatus('concluded');
        return;
      }

      if (now >= target) {
        setStatus('live');
        return;
      }

      const distance = target - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    updateTimer(); // Initial call
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [targetDate, endDate]);

  // Prevent hydration mismatch
  if (!mounted) {
    return <div className="h-[200px] w-full animate-pulse bg-slate-200/50 rounded-3xl"></div>;
  }

  if (status === 'concluded') {
    return (
      <div className="flex flex-col items-center lg:items-start w-full">
        <div className="flex flex-col items-center lg:items-start p-8 md:p-10 bg-white border border-slate-200 rounded-3xl shadow-sm w-full">
          <h4 className="text-xl md:text-2xl font-heading font-bold text-primary mb-3">This event has concluded.</h4>
          <p className="text-slate-600 text-center lg:text-left mb-8 leading-relaxed">
            Thank you to everyone who participated! The recording and resources will be available soon.
          </p>
          <ActionLink href="#" variant="secondary" className="w-full sm:w-max">
            Watch the recording
          </ActionLink>
        </div>
      </div>
    );
  }

  if (status === 'live') {
    return (
      <div className="flex flex-col items-center lg:items-start w-full">
        <div className="flex flex-col items-center lg:items-start p-8 md:p-10 bg-white border border-slate-200 rounded-3xl shadow-sm w-full">
          <h4 className="text-xl md:text-2xl font-heading font-bold text-primary mb-3">The event is happening today!</h4>
          <p className="text-slate-600 text-center lg:text-left mb-8 leading-relaxed">
            Registration has closed, but you can still join the Zoom meeting or watch the recording later.
          </p>
          <ActionLink href="#" variant="secondary" className="w-full sm:w-max">
            Join the Zoom meeting
          </ActionLink>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start gap-10 w-full">
      <div className="flex gap-6 sm:gap-10 justify-start w-full">
        
        <div className="flex flex-col items-start">
          <span className="text-3xl sm:text-4xl font-heading font-semibold text-foreground tracking-tight">{timeLeft.days.toString().padStart(2, '0')}</span>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mt-2">Days</span>
        </div>
        
        <div className="text-2xl sm:text-3xl font-heading font-light text-slate-300 mt-1">:</div>
        
        <div className="flex flex-col items-start">
          <span className="text-3xl sm:text-4xl font-heading font-semibold text-foreground tracking-tight">{timeLeft.hours.toString().padStart(2, '0')}</span>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mt-2">Hrs</span>
        </div>
        
        <div className="text-2xl sm:text-3xl font-heading font-light text-slate-300 mt-1">:</div>

        <div className="flex flex-col items-start">
          <span className="text-3xl sm:text-4xl font-heading font-semibold text-foreground tracking-tight">{timeLeft.minutes.toString().padStart(2, '0')}</span>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mt-2">Min</span>
        </div>

        <div className="text-2xl sm:text-3xl font-heading font-light text-slate-300 mt-1">:</div>

        <div className="flex flex-col items-start">
          <span className="text-3xl sm:text-4xl font-heading font-semibold text-primary tracking-tight">{timeLeft.seconds.toString().padStart(2, '0')}</span>
          <span className="text-xs font-bold text-primary/60 uppercase tracking-[0.2em] mt-2">Sec</span>
        </div>

      </div>
      
      <ActionLink href="/register" className="w-full sm:w-max">
        Register for the launch
      </ActionLink>
    </div>
  );
}
