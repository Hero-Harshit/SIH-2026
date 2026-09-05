"use client";

import Header from "@/components/Header";
import { Settings, Check, Palette, Moon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();

  const themes = [
    {
      id: "saffron",
      name: "Sacred Saffron",
      description: "The default warm and inviting orange theme.",
      colors: ["bg-orange-100", "bg-orange-500", "bg-orange-700"],
      icon: Palette
    },
    {
      id: "dark",
      name: "Dark Mode",
      description: "A sleek, dark theme for low-light environments.",
      colors: ["bg-slate-800", "bg-slate-600", "bg-slate-300"],
      icon: Moon
    },
    {
      id: "blue",
      name: "Blue Oceanic",
      description: "A calm, professional blue theme.",
      colors: ["bg-blue-100", "bg-blue-500", "bg-blue-700"],
      icon: Palette
    },
    {
      id: "green",
      name: "Green Forest",
      description: "A natural, refreshing green theme.",
      colors: ["bg-green-100", "bg-green-500", "bg-green-700"],
      icon: Palette
    }
  ] as const;

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col transition-colors duration-300">
      <Header />
      
      <div className="flex flex-1 w-full max-w-[1600px] mx-auto relative">
        {/* Sidebar */}
        <aside className="hidden lg:flex w-16 hover:w-64 fixed left-0 top-[73px] h-[calc(100vh-73px)] border-r border-brand-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl z-20 flex-col py-6 gap-4 group transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden shadow-[1px_0_10px_rgba(0,0,0,0.02)]">
          <div className="px-3 w-full flex flex-col gap-3">
            <Link href="/" className="w-full flex items-center gap-4 p-3 rounded-xl text-slate-400 dark:text-slate-500 dark:text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50/80 dark:hover:bg-slate-800/50 hover:shadow-sm transition-all relative overflow-hidden group/btn" title="Home">
              <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              <span className="font-semibold text-sm tracking-wide whitespace-nowrap opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Home</span>
            </Link>
            <Link href="/dashboard" className="w-full flex items-center gap-4 p-3 rounded-xl text-slate-400 dark:text-slate-500 dark:text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50/80 dark:hover:bg-slate-800/50 hover:shadow-sm transition-all relative overflow-hidden group/btn" title="Assessment">
              <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
              <span className="font-semibold text-sm tracking-wide whitespace-nowrap opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Assessment</span>
            </Link>
            <Link href="/corpus" className="w-full flex items-center gap-4 p-3 rounded-xl text-slate-400 dark:text-slate-500 dark:text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50/80 dark:hover:bg-slate-800/50 hover:shadow-sm transition-all relative overflow-hidden group/btn" title="Legal Corpus">
              <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
              <span className="font-semibold text-sm tracking-wide whitespace-nowrap opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Legal Corpus</span>
            </Link>
          </div>
          
          <div className="mt-auto px-3 w-full">
            <div className="w-full flex items-center gap-4 p-3 rounded-xl text-brand-600 dark:text-brand-400 bg-brand-50/80 dark:bg-slate-800/80 shadow-sm transition-all relative overflow-hidden group/btn" title="Settings">
              <Settings size={22} className="shrink-0" />
              <span className="font-semibold text-sm tracking-wide whitespace-nowrap opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Settings</span>
            </div>
          </div>
        </aside>

        <div className="flex-1 lg:ml-16 w-full px-4 lg:px-12 flex justify-center items-center py-20">
          <div className="w-full max-w-5xl flex flex-col animate-in fade-in zoom-in duration-500">
            <div className="flex items-center gap-4 mb-12">
               <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-brand-400 to-brand-accent shadow-lg shadow-brand-500/20 flex items-center justify-center text-white">
                 <Settings size={28} />
               </div>
               <div>
                  <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-accent tracking-tight">
                    Settings
                  </h1>
                  <p className="text-slate-500 dark:text-slate-400 mt-1">Manage your application preferences</p>
               </div>
            </div>

            <div className="formal-panel p-8 rounded-2xl w-full">
              <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-2">
                <Palette size={20} className="text-brand-500" />
                Appearance & Theme
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {themes.map((t) => {
                  const isActive = theme === t.id;
                  const Icon = t.icon;
                  
                  return (
                    <button
                      key={t.id}
                      onClick={() => setTheme(t.id as "saffron" | "dark" | "blue" | "green")}
                      className={`group relative text-left p-6 rounded-xl border-2 transition-all duration-300 ${
                        isActive 
                          ? "border-brand-500 bg-brand-50/50 dark:bg-brand-900/20 shadow-md shadow-brand-500/10" 
                          : "border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 hover:border-brand-300 dark:hover:border-slate-600 hover:shadow-sm"
                      }`}
                    >
                      {isActive && (
                        <div className="absolute top-4 right-4 text-brand-500 bg-brand-100 dark:bg-brand-900/50 rounded-full p-1 shadow-sm">
                          <Check size={16} strokeWidth={3} />
                        </div>
                      )}
                      
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-2.5 rounded-lg text-white ${t.colors[1]}`}>
                          <Icon size={20} />
                        </div>
                        <h3 className="font-bold text-slate-800 dark:text-slate-100 text-lg">
                          {t.name}
                        </h3>
                      </div>
                      
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 min-h-[40px]">
                        {t.description}
                      </p>
                      
                      <div className="flex gap-2">
                        {t.colors.map((color, i) => (
                          <div 
                            key={i} 
                            className={`w-8 h-8 rounded-full shadow-inner ${color}`} 
                          />
                        ))}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
