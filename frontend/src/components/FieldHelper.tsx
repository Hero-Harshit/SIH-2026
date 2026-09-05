"use client";

import { HelpCircle, Sparkles, Scale } from "lucide-react";

interface FieldHelperProps {
  title: string;
}

export default function FieldHelper({ title }: FieldHelperProps) {
  return (
    <div className="relative inline-block ml-2 align-middle group cursor-help z-20">
      <div className="text-slate-400 hover:text-gold-600 transition-colors">
        <HelpCircle size={18} />
      </div>
      
      {/* Tooltip Card (hidden by default, shown on group-hover) */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-80 sm:w-96 p-5 rounded-2xl bg-white shadow-2xl shadow-slate-200/50 border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none transform translate-y-2 group-hover:translate-y-0 font-normal normal-case">
        
        {/* Triangle arrow */}
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-slate-200">
           <div className="absolute -left-[7px] -top-[9px] w-0 h-0 border-l-[7px] border-r-[7px] border-t-[7px] border-l-transparent border-r-transparent border-t-white"></div>
        </div>

        <div className="flex items-center gap-2 text-[11px] font-bold text-gold-600 uppercase tracking-wider mb-2">
          <Sparkles size={14} />
          Sources & Legal Context
        </div>
        <h4 className="font-bold text-slate-800 text-[15px] mb-3">{title}</h4>
        
        <p className="text-sm leading-relaxed text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-100 mb-4">
          This is the legal context and sources for "{title}". The AI engine would query the database here to provide actionable insights.
        </p>

        <div>
          <h5 className="font-bold text-slate-900 text-[13px] mb-2.5 border-b pb-1.5">Primary Statutes</h5>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex gap-2.5 items-start">
              <Scale className="text-slate-400 shrink-0 mt-0.5" size={15} />
              <span>Drugs and Cosmetics Act, 1940</span>
            </li>
            <li className="flex gap-2.5 items-start">
              <Scale className="text-slate-400 shrink-0 mt-0.5" size={15} />
              <span>Biological Diversity Act, 2002</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
