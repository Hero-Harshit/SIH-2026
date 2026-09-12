"use client";

import { useState } from "react";
import { ArrowLeft, CheckCircle2, ChevronRight, Scale, Box, FileText, ShieldAlert, Sparkles, Globe } from "lucide-react";
import FieldHelper from "./FieldHelper";

interface LegalIntakeFormProps {
  onComplete: (data: Record<string, string | string[]>) => void;
}

const MODULES = [
  {
    id: 1,
    title: "Entity & Commercial Profile",
    description: "Determines exemptions under the Biological Diversity Act, MSME concessions, and licensing eligibility.",
    fields: [
      {
        name: "applicantType",
        label: "Applicant Type",
        type: "radio",
        options: [
          { label: "Individual AYUSH Practitioner / Vaidya / Hakim", description: "Typically exempt from stringent prior-approval under Section 7 of the Biological Diversity Act for local practice. Limited to small-scale dispensing without commercial branding." },
          { label: "Indian Start-up / MSME", description: "Eligible for fee concessions and expedited review under the Startup India initiative. May still require State Biodiversity Board (SBB) intimation for commercial utilization." },
          { label: "Indian Large Corporate", description: "Must strictly comply with Section 7 of the BD Act by providing prior intimation to the SBB. Full commercial licensing required under Drugs & Cosmetics Rules." },
          { label: "Foreign Entity / Company with foreign equity/shareholding", description: "Requires mandatory prior approval from the National Biodiversity Authority (NBA) under Section 3 of the BD Act. Subject to stricter Access and Benefit Sharing (ABS) obligations." }
        ]
      },
      {
        name: "stageOfDevelopment",
        label: "Stage of Development",
        type: "radio",
        options: [
          { label: "Concept / Lab scale", description: "Focus is on R&D exemptions under Section 5 of the BD Act. No immediate manufacturing license required from the State Licensing Authority (SLA)." },
          { label: "Formulation ready, seeking manufacturing license", description: "Triggers requirement for Form 24D application under Rule 153. Requires evidence of safety, rationale, and potentially clinical trial data." },
          { label: "Commercialized & selling in market", description: "Requires ongoing compliance with pharmacovigilance (ASU) guidelines. Subject to post-market surveillance and renewal of GMP certificates." }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Formulation Source & Authoritative Backing",
    description: "Differentiates Classical vs Proprietary vs New Drug vs Phytopharmaceutical.",
    fields: [
      {
        name: "textualSource",
        label: "Textual Source",
        type: "radio",
        options: [
          { label: "Directly from a First Schedule Text (e.g., Charaka Samhita)", description: "Classified as a Classical (Shastric) ASU medicine. No new safety/efficacy data required; licensed under standard classical provisions." },
          { label: "Modified recipe from a First Schedule text", description: "Considered a Patent & Proprietary (P&P) medicine. Requires documented rationale for modification and proof of safety under Rule 158B." },
          { label: "Completely novel / indigenous recipe from folk/tribal knowledge", description: "May require New Drug approval if no prior documented history exists. Triggers specific Benefit Sharing agreements with indigenous knowledge holders." },
          { label: "Purified fraction/isolated extract", description: "Likely crosses into the 'Phytopharmaceutical Drug' category under CDSCO rules. Requires extensive pre-clinical and clinical trial data comparable to allopathic drugs." }
        ]
      },
      {
        name: "extractionProcessing",
        label: "Extraction & Processing",
        type: "checkbox",
        options: [
          { label: "Traditional methods (Kashaya, Asava, Arishta, Bhasma, Taila)", description: "Regulated strictly under standard ASU manufacturing protocols (GMP). Recognized by the Pharmacopoeia Commission for Indian Medicine & Homoeopathy (PCIM&H)." },
          { label: "Modern hydro-alcoholic / solvent extraction", description: "Requires specific disclosures on solvent residues. Permitted for Proprietary medicines but must meet Pharmacopoeial standards for heavy metals and toxicity." },
          { label: "Standardized fraction (minimum 4 bioactive markers identified)", description: "Mandatory for Phytopharmaceutical classification under Schedule Y. Enhances patentability but requires sophisticated QA/QC infrastructure." },
          { label: "Nanotechnology / novel drug delivery system (NDDS)", description: "Regulated as a 'New Drug' under CDSCO regardless of herbal origin. Requires full Phase I-III clinical trial pathways before commercialization." }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Botanical & Biological Sourcing",
    description: "Determines Access and Benefit Sharing (ABS) duties, NTAC exemptions, and conservation bans.",
    fields: [
      {
        name: "ingredientOrigin",
        label: "Ingredient Origin",
        type: "checkbox",
        options: [
          { label: "Wild-harvested from forests in India", description: "High risk of triggering NBA/SBB oversight. Requires transit passes and proof of legal procurement from Joint Forest Management Committees (JFMCs)." },
          { label: "Cultivated on commercial farmland in India", description: "Generally exempt from ABS obligations if certified as cultivated. Requires origin certificate from the agriculture/horticulture department or Gram Panchayat." },
          { label: "Imported from abroad", description: "Exempt from India's Biological Diversity Act, provided species is not found in India. Must comply with Plant Quarantine Order and Customs regulations." },
          { label: "Plant tissue culture / synthesized", description: "Often falls outside standard wild-collection regulations. Still requires baseline safety data if the synthetic equivalent differs functionally." }
        ]
      },
      {
        name: "ntacStatus",
        label: "NTAC Status Check",
        type: "radio",
        options: [
          { label: "Contains ONLY items on the 'Normally Traded as Commodities' list", description: "Exempt from Access and Benefit Sharing (ABS) obligations under Section 40 of the BD Act. Simplifies supply chain compliance significantly." },
          { label: "Contains non-NTAC biological resources", description: "Triggers mandatory ABS compliance. Requires filing Form I (NBA) or Form A (SBB) and payment of benefit-sharing fees (0.1% to 0.5% of gross sales)." }
        ]
      },
      {
        name: "hazardousCheck",
        label: "Hazardous / Schedule E(1) Check",
        type: "checkbox",
        options: [
          { label: "Contains ingredients like Bhang (Cannabis), Vatsanabha (Aconite), Kupilu (Strychnos)", description: "Regulated under Schedule E(1). Mandatory requirement to display 'Caution: To be taken under medical supervision' on the product label." },
          { label: "Contains Parada (Purified Mercury) or Arsenic compounds", description: "Strictly regulated Rasa Aushadhis. Requires mandatory acute, sub-acute, and chronic toxicity data as per Rule 161B." },
          { label: "None of the above", description: "Standard labeling requirements apply under Rule 161. Over-the-counter (OTC) sales permitted without specific medical supervision warnings." }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Intended Use, Delivery & Claims",
    description: "Separates Ayurveda-Aahar (FSSAI) from Cosmetics from Drugs (AYUSH/CDSCO).",
    fields: [
      {
        name: "productForm",
        label: "Product Form",
        type: "radio",
        options: [
          { label: "Oral (Tablets, Churna, Syrup, Kadha)", description: "Default classification as an internal medicine. Subject to strict heavy metal, pesticide, and microbial load limits as per Pharmacopoeia." },
          { label: "Topical/External (Oil, Lepa, Cream, Wash)", description: "If claiming only beautification, may be licensed as an Ayurvedic Cosmetic. If claiming treatment (e.g., Eczema), licensed as an external ASU drug." },
          { label: "Inhalation / Nasal (Nasya, Dhoopana)", description: "Specialized delivery route requiring specific mucosal toxicity data if modified from classical texts. Not permitted under generic FSSAI rules." }
        ]
      },
      {
        name: "intendedBenefit",
        label: "Intended Benefit Claim",
        type: "checkbox",
        options: [
          { label: "General wellness / immunity / digestion / rejuvenation (Rasayana)", description: "Eligible for licensing as Ayurveda-Aahar under FSSAI (if food format) or generic Proprietary ASU medicine with minimal efficacy data." },
          { label: "Beautification, skin glow, hair conditioning", description: "Falls under the purview of Ayurvedic Cosmetics (Rule 169). Simplifies licensing but prohibits any therapeutic or disease-curing claims on the label." },
          { label: "Prevention or treatment of a specific disease", description: "Classified as a therapeutic drug. Prohibited from making misleading claims under the Drugs and Magic Remedies (Objectionable Advertisements) Act, 1954." }
        ]
      },
      {
        name: "targetConditions",
        label: "Target Conditions Check",
        type: "checkbox",
        options: [
          { label: "Claims on Diabetes, Cancer, Infertility, Obesity, Kidney stones", description: "Strictly prohibited from advertisement under the Drugs and Magic Remedies Act. Violations attract immediate prosecution and product recall." },
          { label: "None of the listed Schedule J conditions", description: "Cleared for general advertisement subject to standard AYUSH advertising guidelines and ASCI (Advertising Standards Council of India) clearance." }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "R&D Evidence & Patentability Factors",
    description: "Feeds the Section 3(d), 3(e), and 3(p) Patent analysis engine.",
    fields: [
      {
        name: "synergyEfficacy",
        label: "Synergy & Efficacy Data",
        type: "radio",
        options: [
          { label: "Simple mixture of herbs without formal data", description: "Not patentable under Section 3(e) of the Indian Patents Act (mere admixture). Sufficient for basic Proprietary medicine licensing." },
          { label: "In-vitro / in-vivo animal data showing synergistic therapeutic activity", description: "Overcomes Section 3(e) patent objections by demonstrating synergy. Provides strong scientific backing for therapeutic claims." },
          { label: "Human clinical trial data (CTRI registered)", description: "Gold standard for efficacy. Required for New Drugs and Phytopharmaceuticals. Allows for specific, validated therapeutic claims on packaging." }
        ]
      },
      {
        name: "noveltyClaim",
        label: "Novelty Claim",
        type: "checkbox",
        options: [
          { label: "Novel formulation ratio", description: "Must prove that the specific ratio results in an unexpected technical effect to overcome obviousness objections during patent examination." },
          { label: "Novel extraction/purification method", description: "Highly patentable as a process patent. Protects the manufacturing methodology even if the botanical ingredients are well-known." },
          { label: "New medical use of a known herb", description: "Not patentable in India under Section 3(d) (new use of a known substance). May be patentable in foreign jurisdictions like the US or EU." },
          { label: "Novel dosage form (e.g., transdermal patch)", description: "Patentable if the new form enhances therapeutic efficacy significantly. Requires specific stability and delivery validation data." }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Target Markets & Jurisdiction",
    description: "Controls the retrieval boundary: National vs International.",
    fields: [
      {
        name: "targetGeography",
        label: "Target Geography",
        type: "checkbox",
        options: [
          { label: "Domestic (India only)", description: "Subject only to CDSCO/AYUSH, FSSAI, and NBA regulations. Simplest compliance pathway for early-stage commercialization." },
          { label: "United States (FDA / DSHEA)", description: "Cannot be marketed as a 'drug' without clinical trials. Must be labeled as a 'Dietary Supplement' adhering to DSHEA regulations and cGMP." },
          { label: "European Union (EMA THMPD Directive)", description: "Requires registration under the Traditional Herbal Medicinal Products Directive. Must prove 30 years of safe use (15 years within the EU)." },
          { label: "Global PCT patent filing", description: "Requires filing within 12 months of the Indian priority application. Mandatory requirement to obtain NBA approval BEFORE filing foreign patents." }
        ]
      }
    ]
  }
];

const MODULE_ICONS = [
  <Box key="1" size={56} className="opacity-90 text-white" strokeWidth={1.5} />,
  <FileText key="2" size={56} className="opacity-90 text-white" strokeWidth={1.5} />,
  <ShieldAlert key="3" size={56} className="opacity-90 text-white" strokeWidth={1.5} />,
  <Sparkles key="4" size={56} className="opacity-90 text-white" strokeWidth={1.5} />,
  <Scale key="5" size={56} className="opacity-90 text-white" strokeWidth={1.5} />,
  <Globe key="6" size={56} className="opacity-90 text-white" strokeWidth={1.5} />,
];

export default function LegalIntakeForm({ onComplete }: LegalIntakeFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string | string[]>>({});
  
  const currentModule = MODULES[currentStep];
  const isLastStep = currentStep === MODULES.length - 1;

  const handleRadioChange = (fieldName: string, value: string) => {
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  };

  const handleCheckboxChange = (fieldName: string, value: string, checked: boolean) => {
    setFormData((prev) => {
      const currentList = (prev[fieldName] as string[]) || [];
      if (checked) {
        return { ...prev, [fieldName]: [...currentList, value] };
      } else {
        return { ...prev, [fieldName]: currentList.filter((v: string) => v !== value) };
      }
    });
  };

  const handleNext = () => {
    if (isLastStep) {
      onComplete(formData);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

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
                     const optionLabel = optionObj.label;
                     const optionDescription = optionObj.description;
                     const isSelected = field.type === 'radio' 
                       ? formData[field.name] === optionLabel 
                       : (formData[field.name] || []).includes(optionLabel);
                     
                     return (
                       <label 
                         key={optionLabel} 
                         className={`relative flex flex-col p-5 cursor-pointer transition-all border-2 rounded-md ${
                           isSelected
                             ? 'border-brand-600 bg-brand-50 dark:bg-brand-950/30'
                             : 'border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-400 dark:hover:border-slate-600'
                         }`}
                       >
                         {/* Hidden Input */}
                         <input
                           type={field.type}
                           name={field.name}
                           value={optionLabel}
                           checked={isSelected}
                           onChange={(e) => {
                             if (field.type === 'radio') {
                               handleRadioChange(field.name, optionLabel);
                             } else {
                               handleCheckboxChange(field.name, optionLabel, e.target.checked);
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
