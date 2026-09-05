"use client";

import { useState } from "react";
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
        
        {/* Permanent Sidebar Placeholder (Left 20% on Desktop) */}
        <aside className="hidden lg:block w-[20%] fixed left-0 top-[73px] h-[calc(100vh-73px)] border-r border-gold-200/50 p-6 pt-10 z-10 bg-background">
          <div className="p-5 rounded-xl bg-gold-50/50 border border-gold-100 h-full flex flex-col items-center justify-center text-center">
            <Sparkles className="text-gold-400 mb-3" size={32} />
            <h3 className="text-lg font-bold text-slate-800">Permanent Sidebar</h3>
            <p className="text-sm text-slate-500 mt-2">
              Reserved space for future navigation.
            </p>
          </div>
        </aside>

        {/* Main Content Area (Right 80% on Desktop) - Offset by 20% margin to clear fixed sidebar */}
        <div className="flex-1 lg:ml-[20%] lg:w-[80%] w-full px-4 lg:px-12 pt-8 pb-12 overflow-x-hidden">
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
    </main>
  );
}
