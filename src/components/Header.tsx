"use client";

import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { getAllPostsSorted } from "@/lib/blog-data";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Globe, MessageCircle, Map, Network, Activity, Target, 
  Video, Image as ImageIcon, FileText, Rss, Handshake, 
  Users, UserPlus, Mail, Menu, X, AlignRight, ChevronDown
} from "lucide-react";
import { FaLinkedin, FaXTwitter, FaFacebook, FaMastodon, FaYoutube } from "react-icons/fa6";
import { SiBluesky } from "react-icons/si";
import { cn } from "@/lib/utils";

// --- Data for Mega Menu ---

const aboutItems = [
  { title: "Women-In-WACREN Journey", href: "/about" },
  { title: "Women-In-WACREN Network", href: "/programme" },
  { title: "Activities", href: "/activities" },
  { title: "Impact", href: "/impact" },
];

const resourceItems = [
  { title: "Documents", href: "/documents" },
  { title: "Photos", href: "https://photos.wacren.net/index.php?/category/120" },
  { title: "Videos", href: "https://video.wacren.net/channel/Women-In-WACREN/721046" },
];

const getInvolvedItems = [
  { title: "Partnership and Collaboration Opportunities", href: "/partnership", isExternal: false },
  { title: "Call for Facilitators", href: "https://indico.wacren.net", isExternal: true },
  { title: "Call for Mentors", href: "https://indico.wacren.net", isExternal: true },
  { title: "Contact Us", href: "/contact", isExternal: false },
  { title: "Socials", href: "/socials", isExternal: false },
];

const languages = [
  { code: 'en', name: 'English', countryCode: 'GB' },
  { code: 'fr', name: 'Français', countryCode: 'FR' },
  { code: 'pt', name: 'Português', countryCode: 'PT' },
];

export function Header() {
  const t = useTranslations('Header');
  const latestPost = getAllPostsSorted()[0];
  const locale = useLocale();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const pathname = usePathname();

  const changeLanguage = (newLocale: string) => {
    router.replace(pathname as any, { locale: newLocale });
  };

  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navItemClass = "group inline-flex h-10 w-max items-center justify-center bg-transparent px-4 py-2 text-sm font-medium font-heading tracking-wide text-neutral-700 transition-colors hover:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-primary";

  return (
    <>
    <div className={cn("fixed top-0 left-0 z-50 flex w-full justify-center pt-0 transition-all duration-200", isMobileMenuOpen ? "px-0" : "px-4")}>
      <header className={cn(
        "flex w-full max-w-[1400px] items-center justify-between bg-card px-4 md:px-8 py-4 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-border border-t-0 transition-all duration-200",
        isMobileMenuOpen ? "rounded-none" : "rounded-b-[24px]"
      )}>
      
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center gap-2">
          <img 
            src="/Women%20in%20WACREN%20logo.png" 
            alt="Women in WACREN" 
            className="h-12 md:h-14 w-auto object-contain" 
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const textFallback = document.getElementById('logo-text-fallback');
              if(textFallback) textFallback.style.display = 'block';
            }}
          />
          <span id="logo-text-fallback" className="hidden font-sans font-bold text-xl text-primary tracking-tight">
            WIW
          </span>
        </Link>
      </div>

      {/* Mega Menu - Centered */}
      <div className="hidden lg:flex flex-1 justify-center gap-2 items-center">
        
        <Link href="/" className={navItemClass}>
          Home
        </Link>

        {/* About Dropdown */}
        <div 
          className="relative flex items-center"
          onMouseEnter={() => setIsAboutOpen(true)}
          onMouseLeave={() => setIsAboutOpen(false)}
        >
          <button 
            className={cn(
              navItemClass,
              isAboutOpen && "text-primary"
            )}
            onClick={() => setIsAboutOpen(!isAboutOpen)}
            aria-expanded={isAboutOpen}
          >
            About
          </button>

          {isAboutOpen && (
            <div className="absolute top-[40px] left-1/2 z-50 -translate-x-1/2 w-[280px] rounded-2xl bg-card shadow-md border border-border animate-in fade-in zoom-in-95 duration-200 p-6">
              <ul className="flex flex-col gap-2">
                {aboutItems.map((item) => (
                  <ListItem key={item.title} title={item.title} href={item.href} />
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Resources Dropdown */}
        <div 
          className="relative flex items-center"
          onMouseEnter={() => setIsResourcesOpen(true)}
          onMouseLeave={() => setIsResourcesOpen(false)}
        >
          <button 
            className={cn(
              navItemClass,
              isResourcesOpen && "text-primary"
            )}
            onClick={() => setIsResourcesOpen(!isResourcesOpen)}
            aria-expanded={isResourcesOpen}
          >
            Resources
          </button>

          {isResourcesOpen && (
            <div className="absolute top-[40px] left-1/2 z-50 -translate-x-1/2 w-[280px] rounded-2xl bg-card shadow-md border border-border animate-in fade-in zoom-in-95 duration-200 p-6">
              <ul className="flex flex-col gap-2">
                {resourceItems.map((item) => (
                  <ListItem 
                    key={item.title} 
                    title={item.title} 
                    href={item.href} 
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>

        <Link href="/blog" className={navItemClass}>
          Blog & Updates
        </Link>

            <div 
              className="relative flex items-center"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <button 
                className={cn(
                  navItemClass,
                  isMegaMenuOpen && "text-primary"
                )}
                aria-expanded={isMegaMenuOpen}
              >
                Get Involved
              </button>

              {isMegaMenuOpen && (
                <div className="fixed top-[56px] left-1/2 z-50 -translate-x-1/2 w-[900px] max-w-[calc(100vw-64px)] pt-[24px]">
                  <div className="rounded-2xl bg-card shadow-md border border-border animate-in fade-in zoom-in-95 duration-200">
                  <div className="grid grid-cols-[1.3fr_1fr_1fr_280px] gap-8 p-8">
                    {/* Column 1 */}
                    <div>
                      <h4 className="mb-6 text-[10px] font-bold tracking-[0.15em] text-muted-foreground uppercase font-sans">Opportunities</h4>
                      <ul className="flex flex-col gap-2">
                        <ListItem title="Partnership and Collaboration Opportunities" href="/partnership" />
                        <ListItem title="Call for Facilitators" href="https://indico.wacren.net" target="_blank" />
                        <ListItem title="Call for Mentors" href="https://indico.wacren.net" target="_blank" />
                      </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                      <h4 className="mb-6 text-[10px] font-bold tracking-[0.15em] text-muted-foreground uppercase font-sans">Connect</h4>
                      <ul className="flex flex-col gap-2">
                        <ListItem title="Contact Us" href="/contact" />
                      </ul>
                    </div>
                    
                    {/* Column 3 */}
                    <div>
                      <h4 className="mb-6 text-[10px] font-bold tracking-[0.15em] text-muted-foreground uppercase font-sans">Socials</h4>
                      <ul className="flex flex-col gap-2">
                        <ListItem title="LinkedIn" href="https://www.linkedin.com/company/west-and-central-african-research-and-education-network/" target="_blank" icon={<FaLinkedin className="h-5 w-5 text-[#0a66c2]" />} />
                        <ListItem title="X (Twitter)" href="https://twitter.com/wacren" target="_blank" icon={<FaXTwitter className="h-5 w-5 text-black dark:text-white" />} />
                        <ListItem title="Facebook" href="https://www.facebook.com/WACRENinfo" target="_blank" icon={<FaFacebook className="h-5 w-5 text-[#1877F2]" />} />
                        <ListItem title="Mastodon" href="https://mastodon.social/@WACREN" target="_blank" icon={<FaMastodon className="h-5 w-5 text-[#5c4bdf]" />} />
                        <ListItem title="Bluesky" href="https://bsky.app/profile/wacren.bsky.social" target="_blank" icon={<SiBluesky className="h-5 w-5 text-[#0085ff]" />} />
                      </ul>
                    </div>

                    {/* Column 4 - Featured Image */}
                    <div className="flex flex-col">
                      <FeaturedBlogCard 
                        title={latestPost.title} 
                        tag={latestPost.category}
                        imageSrc={latestPost.image || "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=600&auto=format&fit=crop"}
                        href={`/blog/${latestPost.slug}`}
                        date={latestPost.date}
                      />
                    </div>
                  </div>
                </div>
              </div>
              )}
            </div>
      </div>

      {/* Right side controls */}
      <div className="flex items-center gap-4">
        {/* Language Switcher */}
        <div className="hidden lg:flex items-center gap-4">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => changeLanguage(l.code)}
              title={l.name}
              className={cn(
                "flex items-center justify-center transition-opacity hover:opacity-70",
                locale === l.code ? "opacity-100" : "opacity-50"
              )}
            >
              <ReactCountryFlag 
                countryCode={l.countryCode} 
                svg 
                style={{ width: '1.2em', height: '1.2em' }} 
                title={l.name} 
              />
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="flex lg:hidden items-center justify-center p-2 rounded-full text-foreground hover:bg-muted hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <AlignRight className="h-6 w-6" />}
        </button>
      </div>
      </header>
    </div>

    {/* Mobile Menu Overlay */}
    {isMobileMenuOpen && (
      <div className="fixed inset-0 top-[76px] z-40 bg-card lg:hidden overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200 h-[calc(100vh-76px)] w-full">
        <div className="flex flex-col p-8 gap-8 pb-32">
          
          <Link href="/" className="text-xl font-heading font-semibold text-foreground">Home</Link>
          
          <div className="flex flex-col gap-4">
            <span className="text-lg font-heading font-semibold text-muted-foreground">About</span>
            <div className="flex flex-col gap-4 pl-4 border-l-2 border-muted">
              {aboutItems.map((item, i) => (
                <Link key={i} href={item.href as any} className="text-[17px] font-medium text-foreground">{item.title}</Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-lg font-heading font-semibold text-muted-foreground">Resources</span>
            <div className="flex flex-col gap-4 pl-4 border-l-2 border-muted">
              {resourceItems.map((item, i) => (
                item.href.startsWith("http") ? (
                  <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="text-[17px] font-medium text-foreground" onClick={() => setIsMobileMenuOpen(false)}>{item.title}</a>
                ) : (
                  <Link key={i} href={item.href as any} className="text-[17px] font-medium text-foreground">{item.title}</Link>
                )
              ))}
            </div>
          </div>

          <Link href="/blog" className="text-xl font-heading font-semibold text-foreground">Blog & Updates</Link>

          <div className="flex flex-col gap-4">
            <span className="text-lg font-heading font-semibold text-muted-foreground">Get Involved</span>
            <div className="flex flex-col gap-8 pl-4 border-l-2 border-muted py-2">
              
              <div className="flex flex-col gap-3">
                <h4 className="text-[10px] font-bold tracking-[0.15em] text-muted-foreground uppercase font-sans">Opportunities</h4>
                <Link href="/partnership" className="text-[16px] font-medium text-foreground">Partnership and Collaboration</Link>
                <a href="https://indico.wacren.net" target="_blank" rel="noopener noreferrer" className="text-[16px] font-medium text-foreground" onClick={() => setIsMobileMenuOpen(false)}>Call for Facilitators</a>
                <a href="https://indico.wacren.net" target="_blank" rel="noopener noreferrer" className="text-[16px] font-medium text-foreground" onClick={() => setIsMobileMenuOpen(false)}>Call for Mentors</a>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="text-[10px] font-bold tracking-[0.15em] text-muted-foreground uppercase font-sans">Connect</h4>
                <Link href="/contact" className="text-[16px] font-medium text-foreground">Contact Us</Link>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="text-[10px] font-bold tracking-[0.15em] text-muted-foreground uppercase font-sans">Socials</h4>
                <Link href="/socials" className="flex items-center gap-3 text-[16px] font-medium text-foreground"><FaLinkedin className="text-[#0a66c2] h-5 w-5" /> LinkedIn</Link>
                <Link href="/socials" className="flex items-center gap-3 text-[16px] font-medium text-foreground"><FaXTwitter className="text-black h-5 w-5" /> X (Twitter)</Link>
                <Link href="/socials" className="flex items-center gap-3 text-[16px] font-medium text-foreground"><FaFacebook className="text-[#1877F2] h-5 w-5" /> Facebook</Link>
                <Link href="/socials" className="flex items-center gap-3 text-[16px] font-medium text-foreground"><FaMastodon className="text-[#5c4bdf] h-5 w-5" /> Mastodon</Link>
                <Link href="/socials" className="flex items-center gap-3 text-[16px] font-medium text-foreground"><SiBluesky className="text-[#0085ff] h-5 w-5" /> Bluesky</Link>
              </div>

            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-muted pt-8">
            <span className="text-sm font-heading font-semibold text-muted-foreground">Language</span>
            <div className="flex items-center gap-6">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    changeLanguage(l.code);
                    setIsMobileMenuOpen(false);
                  }}
                  title={l.name}
                  className={cn(
                    "flex items-center gap-2 transition-opacity hover:opacity-70",
                    locale === l.code ? "opacity-100" : "opacity-50"
                  )}
                >
                  <ReactCountryFlag 
                    countryCode={l.countryCode} 
                    svg 
                    style={{ width: '1.5em', height: '1.5em' }} 
                  />
                  <span className="font-medium text-foreground">{l.name}</span>
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    )}
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { href: string; icon?: React.ReactNode }
>(({ className, title, href, target, icon, ...props }, ref) => {
  return (
    <li>
      <Link
        href={href as any}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={cn(
          "group flex items-center gap-3 select-none py-2 leading-none no-underline outline-none transition-colors",
          className
        )}
        {...props}
      >
        {icon && (
          <div className="flex items-center justify-center transition-transform group-hover:scale-110">
            {icon}
          </div>
        )}
        <div className="text-[15px] font-heading font-medium text-neutral-700 transition-colors group-hover:text-primary">{title}</div>
      </Link>
    </li>
  );
});
ListItem.displayName = "ListItem";

const FeaturedBlogCard = ({ title, tag, imageSrc, href, date }: { title: string, tag: string, imageSrc: string, href: string, date: string }) => (
  <Link href={href as any} className="group relative flex h-full min-h-[220px] w-full flex-col overflow-hidden rounded-2xl bg-neutral-900 shadow-md">
    <img 
      src={imageSrc} 
      alt={title} 
      className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-80" 
    />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
    <div className="relative mt-auto flex flex-col p-6 text-white">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[10px] font-bold tracking-widest text-blue-300 uppercase font-sans bg-blue-900/40 px-2 py-0.5 rounded backdrop-blur-sm">{tag}</span>
        <span className="text-[10px] text-neutral-300 font-sans uppercase tracking-widest">{date}</span>
      </div>
      <h3 className="font-heading text-[15px] md:text-[16px] font-semibold leading-snug text-white line-clamp-3" title={title}>{title}</h3>
    </div>
  </Link>
);

