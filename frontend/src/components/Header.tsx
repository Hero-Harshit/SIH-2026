"use client";

import { Scale } from "lucide-react";
import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gold-200/50 sticky top-0 w-full z-50 px-6 py-4 flex items-center justify-between shadow-sm">
      <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
        <div className="p-2 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg text-white shadow-sm">
          <Scale size={24} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">
            Laura
          </h1>
          <p className="text-[11px] text-slate-500 font-medium hidden sm:block uppercase tracking-wider">
            Legal & Ayurvedic Unified Retrieval Assistant
          </p>
        </div>
      </Link>

      <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-500">
        <Link href="/about" className="hover:text-gold-600 transition-colors">
          About Us
        </Link>
        <Link href="/privacy" className="hover:text-gold-600 transition-colors">
          Privacy Policy
        </Link>
        <Link href="/terms" className="hover:text-gold-600 transition-colors">
          Terms & Conditions
        </Link>
      </nav>
    </header>
  );
}
