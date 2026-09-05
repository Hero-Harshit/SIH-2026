import Header from "@/components/Header";
import { Settings } from "lucide-react";
import Link from "next/link";

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      <div className="flex flex-1 w-full max-w-[1600px] mx-auto relative">
        {/* Sidebar - Same as Dashboard for navigation consistency */}
        <aside className="hidden lg:flex w-16 hover:w-64 fixed left-0 top-[73px] h-[calc(100vh-73px)] border-r border-slate-200 bg-white/80 backdrop-blur-xl z-20 flex-col py-6 gap-4 group transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden shadow-[1px_0_10px_rgba(0,0,0,0.02)]">
          <div className="px-3 w-full flex flex-col gap-3">
            <Link href="/" className="w-full flex items-center gap-4 p-3 rounded-xl text-slate-400 hover:text-gold-600 hover:bg-gold-50/80 hover:shadow-sm transition-all relative overflow-hidden group/btn" title="Home">
              <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              <span className="font-semibold text-sm tracking-wide whitespace-nowrap opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Home</span>
            </Link>
            <Link href="/dashboard" className="w-full flex items-center gap-4 p-3 rounded-xl text-slate-400 hover:text-gold-600 hover:bg-gold-50/80 hover:shadow-sm transition-all relative overflow-hidden group/btn" title="Dashboard">
              <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
              <span className="font-semibold text-sm tracking-wide whitespace-nowrap opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Dashboard</span>
            </Link>
            <Link href="/corpus" className="w-full flex items-center gap-4 p-3 rounded-xl text-slate-400 hover:text-gold-600 hover:bg-gold-50/80 hover:shadow-sm transition-all relative overflow-hidden group/btn" title="Legal Corpus">
              <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
              <span className="font-semibold text-sm tracking-wide whitespace-nowrap opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Legal Corpus</span>
            </Link>
          </div>
          
          <div className="mt-auto px-3 w-full">
            <div className="w-full flex items-center gap-4 p-3 rounded-xl text-gold-600 bg-gold-50/80 shadow-sm transition-all relative overflow-hidden group/btn" title="Settings">
              <Settings size={22} className="shrink-0" />
              <span className="font-semibold text-sm tracking-wide whitespace-nowrap opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Settings</span>
            </div>
          </div>
        </aside>

        <div className="flex-1 lg:ml-16 w-full px-4 lg:px-12 flex justify-center items-center">
          <div className="w-full max-w-4xl flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
            <div className="w-24 h-24 mb-8 rounded-full bg-gradient-to-tr from-gold-400 to-saffron shadow-xl shadow-gold-500/20 flex items-center justify-center text-white">
               <Settings size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold-600 to-saffron mb-6 tracking-tight">
              Settings
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
              This section is currently under development. Preferences, account details, and system configurations will be accessible here soon.
            </p>
            <div className="mt-12 h-1 w-24 bg-gradient-to-r from-gold-300 to-transparent rounded-full mx-auto opacity-50"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
