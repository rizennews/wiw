"use client";

import React, { useState } from 'react';
import { Share2, Link as LinkIcon, Check, Mail } from 'lucide-react';
import { FaFacebook, FaXTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

interface ShareMenuProps {
  title: string;
  url: string;
}

export function ShareMenu({ title, url }: ShareMenuProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const shareLinks = {
    x: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(title + " " + url)}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent("Check out this article: " + url)}`
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 text-[13px] font-medium text-slate-600 hover:text-slate-900 transition-colors outline-none">
        <Share2 className="w-4 h-4" />
        Share
      </DropdownMenuTrigger>
      
      <DropdownMenuContent align="end" className="w-48 rounded-xl shadow-lg border-slate-200 p-1">
        
        {/* Copy Link */}
        <DropdownMenuItem 
          onClick={handleCopy}
          className="cursor-pointer flex items-center px-3 py-2 text-sm text-slate-700 focus:bg-slate-50 focus:text-slate-900 rounded-md transition-colors"
        >
          {copied ? (
            <Check className="w-4 h-4 mr-3 text-emerald-600" />
          ) : (
            <LinkIcon className="w-4 h-4 mr-3 text-slate-400" />
          )}
          {copied ? 'Copied!' : 'Copy link'}
        </DropdownMenuItem>

        <DropdownMenuSeparator className="my-1 bg-slate-100" />

        {/* Social Links */}
        <DropdownMenuItem 
          onClick={() => window.open(shareLinks.x, '_blank', 'noopener,noreferrer')}
          className="cursor-pointer flex items-center px-3 py-2 text-sm text-slate-700 focus:bg-slate-50 focus:text-slate-900 rounded-md transition-colors"
        >
          <FaXTwitter className="w-4 h-4 mr-3 text-slate-700" />
          Share on X
        </DropdownMenuItem>

        <DropdownMenuItem 
          onClick={() => window.open(shareLinks.linkedin, '_blank', 'noopener,noreferrer')}
          className="cursor-pointer flex items-center px-3 py-2 text-sm text-slate-700 focus:bg-slate-50 focus:text-slate-900 rounded-md transition-colors"
        >
          <FaLinkedin className="w-4 h-4 mr-3 text-[#0a66c2]" />
          Share on LinkedIn
        </DropdownMenuItem>

        <DropdownMenuItem 
          onClick={() => window.open(shareLinks.facebook, '_blank', 'noopener,noreferrer')}
          className="cursor-pointer flex items-center px-3 py-2 text-sm text-slate-700 focus:bg-slate-50 focus:text-slate-900 rounded-md transition-colors"
        >
          <FaFacebook className="w-4 h-4 mr-3 text-[#1877f2]" />
          Share on Facebook
        </DropdownMenuItem>

        <DropdownMenuItem 
          onClick={() => window.open(shareLinks.whatsapp, '_blank', 'noopener,noreferrer')}
          className="cursor-pointer flex items-center px-3 py-2 text-sm text-slate-700 focus:bg-slate-50 focus:text-slate-900 rounded-md transition-colors"
        >
          <FaWhatsapp className="w-4 h-4 mr-3 text-[#25d366]" />
          Share via WhatsApp
        </DropdownMenuItem>

        <DropdownMenuSeparator className="my-1 bg-slate-100" />

        {/* Email */}
        <DropdownMenuItem 
          onClick={() => window.location.href = shareLinks.email}
          className="cursor-pointer flex items-center px-3 py-2 text-sm text-slate-700 focus:bg-slate-50 focus:text-slate-900 rounded-md transition-colors"
        >
          <Mail className="w-4 h-4 mr-3 text-slate-500" />
          Send via Email
        </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  );
}
