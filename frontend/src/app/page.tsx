import Header from "@/components/Header";
import Link from "next/link";
import { Sparkles, ArrowRight, Scale, ShieldCheck, FileText } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col relative">
      <Header />
      
      {/* Sidebar Navigation */}
      <aside className="hidden lg:flex w-16 hover:w-64 fixed left-0 top-[73px] h-[calc(100vh-73px)] border-r border-slate-200 bg-white/80 backdrop-blur-xl z-20 flex-col py-6 gap-4 group transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden shadow-[1px_0_10px_rgba(0,0,0,0.02)]">
        <div className="px-3 w-full flex flex-col gap-3">
          <div className="w-full flex items-center gap-4 p-3 rounded-xl text-gold-600 bg-gold-50/80 shadow-sm transition-all relative overflow-hidden group/btn" title="Home">
            <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            <span className="font-semibold text-sm tracking-wide whitespace-nowrap opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Home</span>
          </div>
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
          <Link href="/settings" className="w-full flex items-center gap-4 p-3 rounded-xl text-slate-400 hover:text-gold-600 hover:bg-gold-50/80 hover:shadow-sm transition-all relative overflow-hidden group/btn" title="Settings">
            <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
            <span className="font-semibold text-sm tracking-wide whitespace-nowrap opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Settings</span>
          </Link>
        </div>
      </aside>

      {/* Decorative Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-gold-300/20 to-saffron/10 blur-3xl mix-blend-multiply"></div>
        <div className="absolute bottom-[-10%] left-[5%] w-[35rem] h-[35rem] rounded-full bg-gradient-to-tr from-amber-300/20 to-gold-400/10 blur-3xl mix-blend-multiply"></div>
      </div>

      <div className="flex-1 lg:ml-16 w-full flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-5xl flex flex-col items-center justify-center text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-50 border border-gold-200/60 text-gold-700 text-sm font-semibold mb-8 shadow-sm">
            <span>Welcome to the Future of Legal Compliance</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-800 tracking-tight leading-[1.1] mb-6">
            Simplify Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 to-saffron">
              Ayurvedic Licensing
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed mb-10">
            Laura is an intelligent, unified retrieval assistant designed specifically to guide you through the regulatory complexities of the AYUSH sector.
          </p>

          <Link href="/dashboard" className="group flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 to-saffron text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            Start Your Assessment
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl text-left border-t border-slate-200/60 pt-12">
            <div className="flex flex-col gap-3">
              <div className="w-12 h-12 rounded-xl bg-gold-100 text-gold-600 flex items-center justify-center mb-2">
                <Scale size={24} />
              </div>
              <h3 className="font-bold text-slate-800">Regulatory Clarity</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Navigate through the Drugs and Cosmetics Act and Biodiversity Act with intelligent AI parsing.</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="w-12 h-12 rounded-xl bg-gold-100 text-gold-600 flex items-center justify-center mb-2">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-bold text-slate-800">Compliance First</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Ensure you meet all compliance thresholds before submitting applications to the AYUSH ministry.</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="w-12 h-12 rounded-xl bg-gold-100 text-gold-600 flex items-center justify-center mb-2">
                <FileText size={24} />
              </div>
              <h3 className="font-bold text-slate-800">Unified Intake</h3>
              <p className="text-sm text-slate-500 leading-relaxed">A single, streamlined process to assess your entity type, formulations, and required licenses.</p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
