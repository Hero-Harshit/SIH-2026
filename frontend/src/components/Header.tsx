"use client";

import { Scale } from "lucide-react";
import Link from "next/link";
export default function Header() {
  return (
    <>
      <header className="bg-brand-50/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-brand-600 dark:border-white/20 fixed top-0 left-0 w-full h-[73px] z-50 pl-2 pr-6 flex items-center justify-between shadow-sm">
        <div className="w-12 h-12 flex items-center justify-center shrink-0">
          <div 
            className="w-8 h-10 bg-slate-800 dark:bg-slate-100" 
            style={{ 
              maskImage: 'url(/emblem.svg)', 
              WebkitMaskImage: 'url(/emblem.svg)', 
              maskSize: 'contain', 
              WebkitMaskSize: 'contain', 
              maskRepeat: 'no-repeat', 
              WebkitMaskRepeat: 'no-repeat', 
              maskPosition: 'center', 
              WebkitMaskPosition: 'center' 
            }}
          ></div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-500 dark:text-slate-400">
          <Link href="/about" className="hover:text-brand-600 transition-colors">
            About Us
          </Link>
          <Link href="/privacy" className="hover:text-brand-600 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-brand-600 transition-colors">
            Terms & Conditions
          </Link>
        </nav>
      </header>
      {/* Spacer to prevent content from going under the fixed header */}
      <div className="h-[73px] w-full shrink-0"></div>
    </>
  );
}
