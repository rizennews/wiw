import { Link } from "@/i18n/routing";
import Image from "next/image";
import { FaLinkedin, FaXTwitter, FaFacebook, FaMastodon } from "react-icons/fa6";
import { SiBluesky } from "react-icons/si";

export function Footer() {
  return (
    <footer className="w-full bg-primary text-white py-10 md:py-12 border-t border-white/10 mt-auto">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-4">
          
          {/* Brand & Description (spans 4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start pr-8">
            <div className="relative w-32 md:w-40 mb-6 block bg-white p-3 rounded-xl shadow-sm">
              <Image 
                src="/Women in WACREN logo.png" 
                alt="Women in WACREN" 
                width={300}
                height={300}
                className="w-full h-auto object-contain" 
              />
            </div>
            <p className="text-white/80 leading-relaxed text-base font-light mb-6">
              Educating, equipping and empowering women in STEM across West and Central Africa since 2018.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-5">
              <a href="https://twitter.com/wacren" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="X (Twitter)">
                <FaXTwitter className="w-5 h-5" />
              </a>
              <a href="https://bsky.app/profile/wacren.bsky.social" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="Bluesky">
                <SiBluesky className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/west-and-central-african-research-and-education-network/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="LinkedIn">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/WACRENinfo" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="Facebook">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="https://mastodon.social/@WACREN" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="Mastodon">
                <FaMastodon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Explore Links (spans 3 cols) */}
          <div className="lg:col-span-3 flex flex-col items-start lg:pl-8">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white/60 mb-4">Explore</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href={"/women-in-wacren-journey" as any} className="text-white/90 hover:text-white transition-colors duration-200">About</Link></li>
              <li><Link href={"/women-in-wacren-network" as any} className="text-white/90 hover:text-white transition-colors duration-200">Programme</Link></li>
              <li><Link href={"/impact" as any} className="text-white/90 hover:text-white transition-colors duration-200">Impact</Link></li>
              <li><Link href={"/partnership" as any} className="text-white/90 hover:text-white transition-colors duration-200">Get Involved</Link></li>
            </ul>
          </div>

          {/* Funded By (spans 5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white/60 mb-4">Funded by</h4>
            <p className="text-white/80 leading-relaxed text-sm font-light mb-6 max-w-md">
              The European Commission through the AfricaConnect projected under the Global Gateway Programme.
            </p>
            
            {/* Logos */}
            <div className="flex items-center gap-4 md:gap-5 flex-wrap mt-2">
              <Image 
                src="/GG_logo-WHITE.svg" 
                alt="Global Gateway Logo" 
                width={300} 
                height={150} 
                className="h-14 md:h-16 w-auto object-contain" 
              />
              
              <Image 
                src="/EU.jpg" 
                alt="European Union Logo" 
                width={300} 
                height={150} 
                className="h-10 md:h-12 w-auto object-contain" 
              />

              <Image 
                src="/wacren.png" 
                alt="WACREN Logo" 
                width={300} 
                height={150} 
                className="h-10 md:h-12 w-auto object-contain bg-white p-2 rounded-lg" 
              />
            </div>
          </div>

        </div>

        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col items-center justify-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Women-In-WACREN. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
