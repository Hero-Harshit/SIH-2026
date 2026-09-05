import Header from "@/components/Header";
import Link from "next/link";
import { Sparkles, ArrowRight, Scale, ShieldCheck, FileText, Search, BookOpen, Layers } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col relative overflow-x-hidden">
      <Header />
      
      {/* Sidebar Navigation */}
      <aside className="hidden lg:flex w-16 hover:w-64 fixed left-0 top-[73px] h-[calc(100vh-73px)] border-r border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl z-50 flex-col py-6 gap-4 group transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden shadow-[1px_0_10px_rgba(0,0,0,0.02)]">
        <div className="px-3 w-full flex flex-col gap-3">
          <div className="w-full flex items-center gap-4 p-3 rounded-xl text-brand-600 bg-brand-50/80 shadow-sm transition-all relative overflow-hidden group/btn" title="Home">
            <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            <span className="font-semibold text-sm tracking-wide whitespace-nowrap opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Home</span>
          </div>
          <Link href="/dashboard" className="w-full flex items-center gap-4 p-3 rounded-xl text-slate-400 dark:text-slate-500 hover:text-brand-600 hover:bg-brand-50/80 hover:shadow-sm transition-all relative overflow-hidden group/btn" title="Dashboard">
            <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
            <span className="font-semibold text-sm tracking-wide whitespace-nowrap opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Dashboard</span>
          </Link>
          <Link href="/corpus" className="w-full flex items-center gap-4 p-3 rounded-xl text-slate-400 dark:text-slate-500 hover:text-brand-600 hover:bg-brand-50/80 hover:shadow-sm transition-all relative overflow-hidden group/btn" title="Legal Corpus">
            <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
            <span className="font-semibold text-sm tracking-wide whitespace-nowrap opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Legal Corpus</span>
          </Link>
        </div>
        
        <div className="mt-auto px-3 w-full">
          <Link href="/settings" className="w-full flex items-center gap-4 p-3 rounded-xl text-slate-400 dark:text-slate-500 hover:text-brand-600 hover:bg-brand-50/80 hover:shadow-sm transition-all relative overflow-hidden group/btn" title="Settings">
            <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
            <span className="font-semibold text-sm tracking-wide whitespace-nowrap opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Settings</span>
          </Link>
        </div>
      </aside>

      {/* Decorative Background Gradients - Enhanced */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50rem] h-[50rem] rounded-full bg-gradient-to-br from-brand-300/30 to-amber-100/20 blur-3xl mix-blend-multiply animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60rem] h-[60rem] rounded-full bg-gradient-to-tl from-brand-accent/20 to-orange-200/10 blur-3xl mix-blend-multiply animate-pulse" style={{ animationDuration: '10s' }}></div>
        <div className="absolute top-[40%] left-[60%] w-[30rem] h-[30rem] rounded-full bg-gradient-to-tr from-blue-300/10 to-indigo-100/20 blur-3xl mix-blend-multiply animate-pulse" style={{ animationDuration: '12s' }}></div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-16 w-full flex flex-col items-center px-6 pt-16 pb-24 lg:pt-24">
        
        {/* Hero Section */}
        <div className="w-full max-w-6xl flex flex-col items-center justify-center text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
          
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-brand-200/60 text-brand-700 text-sm font-bold mb-8 shadow-sm hover:shadow-md hover:bg-white dark:hover:bg-slate-900 transition-all cursor-pointer group">
            <Sparkles className="w-4 h-4 text-brand-500 group-hover:text-brand-600" />
            <span>Welcome to the Future of Legal Compliance</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-slate-800 dark:text-slate-100 tracking-tighter leading-[1.05] mb-6 drop-shadow-sm pb-3">
            Simplify Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-amber-500 to-brand-accent pr-2">
              Ayurvedic Licensing
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 max-w-3xl leading-relaxed mb-12 font-medium">
            LAURA is an intelligent, unified retrieval assistant designed specifically to guide you through the regulatory complexities of the AYUSH sector.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/dashboard" className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-slate-900 text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:bg-slate-800 transition-all duration-300 w-full sm:w-auto">
              Start Assessment
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/corpus" className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-bold text-lg shadow-lg border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
              Browse Legal Corpus
              <BookOpen size={20} className="text-brand-500 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Bento Grid Feature Section */}
        <div className="w-full max-w-6xl mt-32 grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300 fill-mode-both">
          
          {/* Card 1: Large Span */}
          <div className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all p-8 flex flex-col justify-between min-h-[300px]">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-bl from-brand-200 to-transparent rounded-full opacity-40 blur-3xl group-hover:opacity-60 transition-opacity duration-500"></div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-accent text-white flex items-center justify-center mb-6 shadow-lg shadow-brand-500/30">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-3 tracking-tight">Compliance First</h3>
              <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-md">
                Ensure you meet all compliance thresholds before submitting applications to the AYUSH ministry. We analyze your inputs against the latest regulations automatically.
              </p>
            </div>
            <div className="mt-8 flex items-center text-brand-600 font-semibold group-hover:gap-3 gap-2 transition-all cursor-pointer">
              <Link href="/dashboard">Learn more</Link> <ArrowRight size={18} />
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group overflow-hidden rounded-3xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all p-8 flex flex-col justify-between min-h-[300px]">
             <div className="absolute -left-20 -bottom-20 w-48 h-48 bg-gradient-to-tr from-amber-200 to-transparent rounded-full opacity-40 blur-3xl group-hover:opacity-60 transition-opacity duration-500"></div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-slate-900 text-brand-400 flex items-center justify-center mb-6 shadow-lg">
                <Scale size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3 tracking-tight">Regulatory Clarity</h3>
              <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                Navigate the Drugs and Cosmetics Act & Biodiversity Act with intelligent AI parsing.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group overflow-hidden rounded-3xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all p-8 flex flex-col justify-between min-h-[300px]">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-bl from-orange-200 to-transparent rounded-full opacity-40 blur-3xl group-hover:opacity-60 transition-opacity duration-500"></div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-200 flex items-center justify-center mb-6 shadow-md">
                <FileText size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3 tracking-tight">Unified Intake</h3>
              <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                A single, streamlined process to assess your entity type, formulations, and required licenses.
              </p>
            </div>
          </div>

          {/* Card 4: Large Span */}
          <div className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl hover:shadow-[0_8px_40px_rgba(15,23,42,0.4)] transition-all p-8 flex flex-col md:flex-row items-center justify-between min-h-[300px] gap-8">
             <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-transparent pointer-events-none"></div>
             
             <div className="flex-1 z-10">
               <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md text-brand-400 flex items-center justify-center mb-6 border border-white/10">
                 <Search size={28} />
               </div>
               <h3 className="text-3xl font-bold mb-3 tracking-tight">Deep Legal Corpus Search</h3>
               <p className="text-lg text-slate-400 dark:text-slate-500 leading-relaxed max-w-md">
                 Our built-in intelligent search lets you quickly query thousands of official AYUSH precedents, guidelines, and TKDL references instantly.
               </p>
               <Link href="/corpus">
                 <button className="mt-8 px-6 py-3 rounded-full bg-brand-500 hover:bg-brand-400 text-slate-900 font-bold transition-colors">
                   Try the Search Engine
                 </button>
               </Link>
             </div>

             {/* Decorative abstract visual */}
             <div className="relative w-full md:w-1/3 h-48 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-700">
                <Layers className="w-24 h-24 text-brand-500/20 absolute -right-4 -bottom-4" />
                <BookOpen className="w-16 h-16 text-white/80 z-10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-500/30 blur-2xl rounded-full"></div>
             </div>
          </div>

        </div>

      </div>
    </main>
  );
}
