"use client";

import { HelpCircle } from "lucide-react";

interface FieldHelperProps {
  title: string;
  onOpenContext?: (title: string) => void;
}

export default function FieldHelper({ title, onOpenContext }: FieldHelperProps) {
  const handleAskAI = () => {
    if (onOpenContext) {
      onOpenContext(title);
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
    </div>
  );
}
