import Header from "@/components/Header";
import { FileText } from "lucide-react";

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      <div className="flex-1 w-full max-w-4xl mx-auto px-6 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
        <div className="w-24 h-24 mb-8 rounded-full bg-gradient-to-tr from-gold-400 to-saffron shadow-xl shadow-gold-500/20 flex items-center justify-center text-white">
           <FileText size={40} />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold-600 to-saffron mb-6 tracking-tight">
          Terms & Conditions
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
          This section is currently under development. Our comprehensive terms of service and conditions of use will be available here soon.
        </p>
        <div className="mt-12 h-1 w-24 bg-gradient-to-r from-gold-300 to-transparent rounded-full mx-auto opacity-50"></div>
      </div>
    </main>
  );
}
