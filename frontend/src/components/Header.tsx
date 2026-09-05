"use client";

import { Scale } from "lucide-react";
import Link from "next/link";
export default function Header() {
  return (
    <>
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-brand-200/50 fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between shadow-sm">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="p-2 bg-gradient-to-br from-brand-400 to-brand-600 rounded-lg text-white shadow-sm">
            <Scale size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 tracking-tight">
              LAURA
            </h1>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium hidden sm:block uppercase tracking-wider">
              Legal & Ayurvedic Unified Retrieval Assistant
            </p>
          </div>
        </Link>

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
