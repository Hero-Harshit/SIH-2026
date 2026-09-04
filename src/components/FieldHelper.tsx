"use client";

import { HelpCircle, Sparkles, X } from "lucide-react";
import { useState } from "react";

interface FieldHelperProps {
  title: string;
}

export default function FieldHelper({ title }: FieldHelperProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [explanation, setExplanation] = useState<string | null>(null);

  const handleAskAI = () => {
    setIsOpen(true);
    if (!explanation) {
      setIsLoading(true);
      // Simulate API call to backend AI
      setTimeout(() => {
        setExplanation(`This is a mock AI explanation for "${title}". In the final version, this will call the LLM to explain the specific legal implications of this field in plain English.`);
        setIsLoading(false);
      }, 1500);
    }
  };

  return (
    <div className="relative inline-block ml-2 align-middle">
      <button
        type="button"
        onClick={handleAskAI}
        className="text-slate-400 hover:text-gov-blue-600 transition-colors focus:outline-none"
        title="Ask AI for explanation"
      >
        <HelpCircle size={16} />
      </button>

      {isOpen && (
        <div className="absolute z-50 left-full ml-3 top-1/2 -translate-y-1/2 w-72 bg-white rounded-lg shadow-xl border border-slate-200 p-4">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-gov-blue-700 uppercase tracking-wider">
              <Sparkles size={12} />
              AI Assistant
            </div>
            <button type="button" onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-600">
              <X size={14} />
            </button>
          </div>
          
          {isLoading ? (
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <div className="w-3 h-3 border-2 border-gov-blue-500 border-t-transparent rounded-full animate-spin"></div>
              Analyzing legal context...
            </div>
          ) : (
            <p className="text-sm text-slate-700 leading-relaxed">
              {explanation}
            </p>
          )}
          
          {/* Arrow */}
          <div className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 border-8 border-transparent border-r-white z-10"></div>
          <div className="absolute left-[-1px] top-1/2 -translate-x-full -translate-y-1/2 border-8 border-transparent border-r-slate-200"></div>
        </div>
      )}
    </div>
  );
}
