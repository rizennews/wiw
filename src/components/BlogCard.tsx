import Image from 'next/image';
import { Link } from '@/i18n/routing';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageSrc: string;
  href: string;
}

export function BlogCard({ title, excerpt, date, category, imageSrc, href }: BlogCardProps) {
  return (
    <Link href={href as any} className="flex flex-col group block w-full h-full">
      <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden mb-6 bg-slate-100">
        <Image 
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex items-center gap-3 mb-3 text-sm font-medium">
        <span className="text-primary uppercase tracking-widest text-xs font-bold">{category}</span>
        <span className="text-slate-300">&middot;</span>
        <span className="text-slate-500">{date}</span>
      </div>
      <h3 className="font-heading text-lg lg:text-xl font-semibold leading-[1.3] text-foreground mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-slate-600 text-base leading-relaxed line-clamp-3">
        {excerpt}
      </p>
    </Link>
  );
}
