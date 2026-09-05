"use client";

import { Scale } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gold-200/50 sticky top-0 w-full z-50 px-6 py-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-3">
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
      </div>
    </header>
  );
}
