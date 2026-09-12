"use client";

import React, { useState, useCallback } from "react";
import { ArrowLeft, CheckCircle2, ChevronRight, Scale } from "lucide-react";
import FieldHelper from "./FieldHelper";
import { MODULES } from "../data/modules";

interface LegalIntakeFormProps {
  onComplete: (data: Record<string, string | string[]>) => void;
}

// ----------------------------------------------------------------------------
// Memoized Sub-Components (Prevents sluggish re-renders)
// ----------------------------------------------------------------------------

const FormStepper = React.memo(({ currentStep, setCurrentStep }: { currentStep: number, setCurrentStep: (val: number) => void }) => {
  return (
    <div className="flex items-center w-full mb-10">
      {MODULES.map((m, idx) => {
        const isCompleted = idx < currentStep;
        const isCurrent = idx === currentStep;
        
        return (
          <div key={m.id} className="flex items-center flex-1 last:flex-none">
            <div 
              className={`w-9 h-9 shrink-0 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 shadow-sm ${
                isCurrent ? 'bg-brand-500 text-white ring-4 ring-brand-500/20 dark:ring-brand-500/30 scale-110' : 
                isCompleted ? 'bg-brand-100 text-brand-600 dark:bg-brand-900/40 dark:text-brand-400 hover:bg-brand-200' : 'bg-white dark:bg-slate-800 text-slate-400 border border-slate-200 dark:border-slate-700'
              }`}
              onClick={() => idx < currentStep && setCurrentStep(idx)}
              title={m.title}
            >
              {isCompleted ? <CheckCircle2 size={18} strokeWidth={2.5} /> : <span className="font-bold text-[14px]">{m.id}</span>}
            </div>
            
            {/* Connector Line */}
            {idx < MODULES.length - 1 && (
              <div className={`h-[3px] flex-1 mx-2 rounded-full transition-colors ${
                isCompleted ? 'bg-brand-500' : 'bg-slate-200 dark:bg-slate-800'
              }`} />
            )}
          </div>
        );
      })}
    </div>
  );
});
FormStepper.displayName = "FormStepper";

const ActionBlock = React.memo(({ 
  optionLabel, 
  optionDescription, 
  isSelected, 
  type, 
  name, 
  onRadioChange,
  onCheckboxChange
}: { 
  optionLabel: string, 
  optionDescription: string, 
  isSelected: boolean, 
  type: string, 
  name: string, 
  onRadioChange: (name: string, val: string) => void,
  onCheckboxChange: (name: string, val: string, checked: boolean) => void
}) => {
  return (
    <label 
      className={`relative flex flex-col p-5 cursor-pointer transition-all border-2 rounded-md ${
        isSelected
          ? 'border-brand-600 bg-brand-50 dark:bg-brand-950/30'
          : 'border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-400 dark:hover:border-slate-600'
      }`}
    >
      {/* Hidden Input */}
      <input
        type={type}
        name={name}
        value={optionLabel}
        checked={isSelected}
        onChange={(e) => {
          if (type === 'radio') {
            onRadioChange(name, optionLabel);
          } else {
            onCheckboxChange(name, optionLabel, e.target.checked);
          }
        }}
        className="sr-only"
      />
      
      {/* Heavy Left Accent for Selection */}
      {isSelected && <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-600" />}
      
      {/* Checkmark Icon in top right for selection */}
      {isSelected && (
        <div className="absolute top-4 right-4 text-brand-600">
          <CheckCircle2 size={24} strokeWidth={2.5} />
        </div>
      )}

      <div className="pr-10">
        <div className={`text-[16px] font-bold mb-1.5 ${
          isSelected
            ? 'text-brand-900 dark:text-brand-400'
            : 'text-slate-800 dark:text-slate-200'
        }`}>
          {optionLabel}
        </div>
        
        <div className={`text-sm leading-relaxed ${
          isSelected ? 'text-brand-800/80 dark:text-brand-300/80' : 'text-slate-500 dark:text-slate-400'
        }`}>
          {optionDescription}
        </div>
      </div>
    </label>
  );
});
ActionBlock.displayName = "ActionBlock";


// ----------------------------------------------------------------------------
// Main Component
// ----------------------------------------------------------------------------

export default function LegalIntakeForm({ onComplete }: LegalIntakeFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string | string[]>>({});
  
  const currentModule = MODULES[currentStep];
  const isLastStep = currentStep === MODULES.length - 1;

  const handleRadioChange = useCallback((fieldName: string, value: string) => {
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  }, []);

  const handleCheckboxChange = useCallback((fieldName: string, value: string, checked: boolean) => {
    setFormData((prev) => {
      const currentList = (prev[fieldName] as string[]) || [];
      if (checked) {
        return { ...prev, [fieldName]: [...currentList, value] };
      } else {
        return { ...prev, [fieldName]: currentList.filter((v: string) => v !== value) };
      }
    });
  }, []);

  const handleNext = useCallback(() => {
    if (isLastStep) {
      onComplete(formData);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  }, [isLastStep, formData, onComplete]);

  return (
    <div className="w-full h-full flex flex-col md:flex-row bg-white dark:bg-slate-950 animate-in fade-in duration-300 relative overflow-hidden">
      
      {/* Left Panel: Theme-Synced Matte Finish */}
      <div className="w-full md:w-[35%] lg:w-[420px] shrink-0 bg-brand-100 dark:bg-brand-900 border-r border-brand-200 dark:border-brand-800 flex flex-col z-20 relative overflow-y-auto scrollbar-hide shadow-[4px_0_24px_rgba(0,0,0,0.03)]">
        <div className="flex flex-col min-h-full p-8 lg:p-12 relative z-10">
          
          <div className="flex items-center gap-3 mb-10 border-b border-slate-200/60 dark:border-slate-800/60 pb-6">
            <Scale size={24} className="text-brand-500" />
            <span className="font-bold tracking-widest uppercase text-sm text-slate-800 dark:text-slate-200">Assessment Engine</span>
          </div>

          {/* Premium Horizontal Stepper */}
          <FormStepper currentStep={currentStep} setCurrentStep={setCurrentStep} />

          <div className="flex flex-col animate-in slide-in-from-left-4 fade-in duration-500" key={`title-${currentStep}`}>
            <div className="text-[12px] font-bold text-brand-500 uppercase tracking-widest mb-3">
              Module {currentModule.id} of {MODULES.length}
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight text-slate-900 dark:text-white tracking-tight">
              {currentModule.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-[16px] leading-relaxed font-medium">
              {currentModule.description}
            </p>
          </div>

        </div>
      </div>

      {/* Right Panel: Scrollable form with Gradient */}
      <div className="flex-1 h-full overflow-y-auto relative bg-gradient-to-br from-brand-50/80 via-white to-brand-100/60 dark:from-brand-950/40 dark:via-slate-950 dark:to-brand-900/20 p-8 lg:p-16 scroll-smooth z-10">
         
         {/* Premium Decorative Glow Blobs (Restricted to Right Panel) */}
         <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-400/10 dark:bg-brand-500/5 blur-[100px] rounded-full pointer-events-none -translate-x-1/3 -translate-y-1/3 z-0"></div>
         <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-brand-300/15 dark:bg-brand-600/10 blur-[120px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3 z-0"></div>

         <div className="max-w-4xl mx-auto min-h-full flex flex-col relative z-10" key={`form-${currentStep}`}>
           
           <div className="flex-1 space-y-16 pb-12">
             {currentModule.fields.map((field, fieldIdx) => (
               <div 
                  key={field.name} 
                  className="animate-in slide-in-from-bottom-4 fade-in duration-300 fill-mode-both"
                  style={{ animationDelay: `${fieldIdx * 50}ms` }}
               >
                 <label className="block text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center tracking-tight">
                   {field.label}
                   <FieldHelper title={field.label} />
                 </label>

                 {/* Action Blocks Container */}
                 <div className="grid grid-cols-1 gap-4">
                   {field.options.map((optionObj) => {
                     const isSelected = field.type === 'radio' 
                       ? formData[field.name] === optionObj.label 
                       : (formData[field.name] || []).includes(optionObj.label);
                     
                     return (
                       <ActionBlock 
                         key={optionObj.label}
                         optionLabel={optionObj.label}
                         optionDescription={optionObj.description}
                         isSelected={isSelected}
                         type={field.type}
                         name={field.name}
                         onRadioChange={handleRadioChange}
                         onCheckboxChange={handleCheckboxChange}
                       />
                     );
                   })}
                 </div>
               </div>
             ))}
           </div>

           {/* Navigation */}
           <div className="flex items-center justify-between mt-auto pt-8 pb-4 border-t-2 border-slate-200 dark:border-slate-800 animate-in fade-in duration-500">
             <button
               onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
               disabled={currentStep === 0}
               className="flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white disabled:opacity-0 transition-colors uppercase tracking-wider"
             >
               <ArrowLeft size={16} strokeWidth={2.5} />
               Back
             </button>
             
              <button
                onClick={handleNext}
                className="flex items-center gap-3 px-8 py-4 rounded-md text-sm font-bold border-2 border-brand-500 text-brand-700 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-950/30 transition-colors uppercase tracking-wider shadow-sm"
              >
                {isLastStep ? 'Submit Assessment' : 'Save & Continue'}
                {isLastStep ? <CheckCircle2 size={18} strokeWidth={2.5} /> : <ChevronRight size={18} strokeWidth={2.5} />}
              </button>
            </div>
           
         </div>
      </div>

    </div>
  );
}
