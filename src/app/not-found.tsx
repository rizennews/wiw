import Link from 'next/link';
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import './globals.css';

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export default function GlobalNotFound() {
  return (
    <div className={`${plusJakartaSans.variable} ${outfit.variable} antialiased`}>
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-slate-50 overflow-hidden font-sans">
      
      {/* Abstract Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#073869]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#eadcd4]/30 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-lg mx-auto">
        
        {/* 404 Text */}
        <h1 className="font-heading text-8xl md:text-9xl font-bold text-[#073869] mb-6">
          404
        </h1>
        
        {/* Title */}
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
          Page not found
        </h2>
        
        {/* Description */}
        <p className="text-slate-600 font-light text-base md:text-lg mb-10 leading-relaxed">
          That link isn't available. Head home to continue exploring the Women-in-WACREN network, programmes, and impact.
        </p>
        
        {/* Button */}
        <Link 
          href="/" 
          className="inline-flex items-center justify-center px-8 py-3.5 bg-slate-900 text-white font-medium rounded-full hover:bg-slate-800 transition-colors shadow-sm"
        >
          Go home
        </Link>
        
      </div>
      </div>
    </div>
  );
}
