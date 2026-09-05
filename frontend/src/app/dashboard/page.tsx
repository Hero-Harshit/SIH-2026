"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import LegalIntakeForm from "@/components/LegalIntakeForm";
import ChatInterface from "@/components/ChatInterface";
import { Sparkles } from "lucide-react";

export default function Home() {
  const [formData, setFormData] = useState<any>(null);

  return (
    <main className="min-h-screen pb-10 flex flex-col">
      <Header />
      
      <div className="flex flex-1 w-full max-w-[1600px] mx-auto relative">
        
        {/* Expanding Icon Rail (Left Edge on Desktop) */}
        <aside className="hidden lg:flex w-16 hover:w-64 fixed left-0 top-[73px] h-[calc(100vh-73px)] border-r border-slate-200 bg-white/80 backdrop-blur-xl z-20 flex-col py-6 gap-4 group transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden shadow-[1px_0_10px_rgba(0,0,0,0.02)]">
          <div className="px-3 w-full flex flex-col gap-3">
            <Link href="/" className="w-full flex items-center gap-4 p-3 rounded-xl text-slate-400 hover:text-gold-600 hover:bg-gold-50/80 hover:shadow-sm transition-all relative overflow-hidden group/btn" title="Home">
              <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              <span className="font-semibold text-sm tracking-wide whitespace-nowrap opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Home</span>
            </Link>
            <div className="w-full flex items-center gap-4 p-3 rounded-xl text-gold-600 bg-gold-50/80 shadow-sm transition-all relative overflow-hidden group/btn" title="Dashboard">
              <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
              <span className="font-semibold text-sm tracking-wide whitespace-nowrap opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Dashboard</span>
            </div>
            <Link href="/corpus" className="w-full flex items-center gap-4 p-3 rounded-xl text-slate-400 hover:text-gold-600 hover:bg-gold-50/80 hover:shadow-sm transition-all relative overflow-hidden group/btn" title="Legal Corpus">
              <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
              <span className="font-semibold text-sm tracking-wide whitespace-nowrap opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Legal Corpus</span>
            </Link>
          </div>
          
          <div className="mt-auto px-3 w-full">
            <Link href="/settings" className="w-full flex items-center gap-4 p-3 rounded-xl text-slate-400 hover:text-gold-600 hover:bg-gold-50/80 hover:shadow-sm transition-all relative overflow-hidden group/btn" title="Settings">
              <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
              <span className="font-semibold text-sm tracking-wide whitespace-nowrap opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Settings</span>
            </Link>
          </div>
        </aside>

        {/* Main Content Area - Centered */}
        <div className="flex-1 lg:ml-16 w-full px-4 lg:px-12 pt-8 pb-12 overflow-x-hidden flex justify-center">
          <div className="w-full max-w-4xl">
            {!formData ? (
              <LegalIntakeForm onComplete={setFormData} />
            ) : (
              <div className="flex flex-col items-center justify-center h-[50vh] text-center formal-panel rounded-2xl p-10 animate-in fade-in zoom-in duration-500">
                <Sparkles className="text-gold-500 mb-4" size={48} />
                <h2 className="text-3xl font-bold text-slate-800 mb-2">Assessment Submitted</h2>
                <p className="text-slate-500 max-w-md">
                  Your technical profile has been captured. The results interface is currently being redesigned for the next phase.
                </p>
                <button 
                  onClick={() => setFormData(null)}
                  className="mt-8 px-6 py-2.5 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-slate-300 hover:border-gold-400 hover:text-gold-700 shadow-sm transition-all"
                >
                  Restart Assessment
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </main>
  );
}
