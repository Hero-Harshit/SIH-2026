"use client";

import { useState } from "react";
import { ArrowLeft, CheckCircle2, ChevronRight, Scale } from "lucide-react";
import FieldHelper from "./FieldHelper";

interface LegalIntakeFormProps {
  onComplete: (data: any) => void;
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
          "Individual AYUSH Practitioner / Vaidya / Hakim",
          "Indian Start-up / MSME",
          "Indian Large Corporate",
          "Foreign Entity / Company with foreign equity/shareholding"
        ]
      },
      {
        name: "stageOfDevelopment",
        label: "Stage of Development",
        type: "radio",
        options: [
          "Concept / Lab scale",
          "Formulation ready, seeking manufacturing license",
          "Commercialized & selling in market"
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
          "Directly from a First Schedule Text (e.g., Charaka Samhita)",
          "Modified recipe from a First Schedule text",
          "Completely novel / indigenous recipe from folk/tribal knowledge",
          "Purified fraction/isolated extract"
        ]
      },
      {
        name: "extractionProcessing",
        label: "Extraction & Processing",
        type: "checkbox",
        options: [
          "Traditional methods (Kashaya, Asava, Arishta, Bhasma, Taila)",
          "Modern hydro-alcoholic / solvent extraction",
          "Standardized fraction (minimum 4 bioactive markers identified)",
          "Nanotechnology / novel drug delivery system (NDDS)"
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
          "Wild-harvested from forests in India",
          "Cultivated on commercial farmland in India",
          "Imported from abroad",
          "Plant tissue culture / synthesized"
        ]
      },
      {
        name: "ntacStatus",
        label: "NTAC Status Check",
        type: "radio",
        options: [
          "Contains ONLY items on the 'Normally Traded as Commodities' list",
          "Contains non-NTAC biological resources"
        ]
      },
      {
        name: "hazardousCheck",
        label: "Hazardous / Schedule E(1) Check",
        type: "checkbox",
        options: [
          "Contains ingredients like Bhang (Cannabis), Vatsanabha (Aconite), Kupilu (Strychnos)",
          "Contains Parada (Purified Mercury) or Arsenic compounds",
          "None of the above"
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
          "Oral (Tablets, Churna, Syrup, Kadha)",
          "Topical/External (Oil, Lepa, Cream, Wash)",
          "Inhalation / Nasal (Nasya, Dhoopana)"
        ]
      },
      {
        name: "intendedBenefit",
        label: "Intended Benefit Claim",
        type: "checkbox",
        options: [
          "General wellness / immunity / digestion / rejuvenation (Rasayana)",
          "Beautification, skin glow, hair conditioning",
          "Prevention or treatment of a specific disease"
        ]
      },
      {
        name: "targetConditions",
        label: "Target Conditions Check",
        type: "checkbox",
        options: [
          "Claims on Diabetes, Cancer, Infertility, Obesity, Kidney stones",
          "None of the listed Schedule J conditions"
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
          "Simple mixture of herbs without formal data",
          "In-vitro / in-vivo animal data showing synergistic therapeutic activity",
          "Human clinical trial data (CTRI registered)"
        ]
      },
      {
        name: "noveltyClaim",
        label: "Novelty Claim",
        type: "checkbox",
        options: [
          "Novel formulation ratio",
          "Novel extraction/purification method",
          "New medical use of a known herb",
          "Novel dosage form (e.g., transdermal patch)"
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
          "Domestic (India only)",
          "United States (FDA / DSHEA)",
          "European Union (EMA THMPD Directive)",
          "Global PCT patent filing"
        ]
      }
    ]
  }
];

export default function LegalIntakeForm({ onComplete }: LegalIntakeFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, any>>({});

  const module = MODULES[currentStep];
  const isLastStep = currentStep === MODULES.length - 1;

  const handleRadioChange = (fieldName: string, value: string) => {
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  };

  const handleCheckboxChange = (fieldName: string, value: string, checked: boolean) => {
    setFormData((prev) => {
      const currentList = prev[fieldName] || [];
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
    <div className="w-full max-w-4xl mx-auto animate-in fade-in duration-500 pb-20">
      
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
          <Scale className="text-gold-600" size={32} />
          Legal Assessment Engine
        </h2>
        <p className="text-slate-500 mt-3 text-lg max-w-2xl">
          Please provide precise technical details for accurate classification and regulatory assessment.
        </p>
      </div>

      {/* Horizontal Stepper */}
      <div className="flex items-center justify-between mb-10 w-full px-2">
        {MODULES.map((m, idx) => {
          const isCompleted = idx < currentStep;
          const isCurrent = idx === currentStep;
          return (
            <div key={m.id} className="flex flex-col items-center flex-1 group">
              <button 
                onClick={() => idx < currentStep && setCurrentStep(idx)}
                disabled={idx > currentStep}
                className={`w-10 h-10 rounded-full flex shrink-0 items-center justify-center text-sm font-bold z-10 transition-all duration-300
                  ${isCompleted ? 'bg-gold-500 text-white cursor-pointer hover:bg-gold-600 hover:scale-110 shadow-sm' : 
                    isCurrent ? 'bg-white text-gold-600 ring-4 ring-gold-200 shadow-md border-2 border-gold-400' : 
                    'bg-white text-slate-400 border border-slate-200 cursor-not-allowed'}
                `}
              >
                {isCompleted ? <CheckCircle2 size={18} /> : m.id}
              </button>
              {idx < MODULES.length - 1 && (
                <div className={`h-1 w-full -mt-5 -z-10 translate-x-1/2 transition-colors duration-500 ${isCompleted ? 'bg-gold-400' : 'bg-slate-200'}`} />
              )}
            </div>
          );
        })}
      </div>

      {/* Main Form Content Area */}
      <div className="formal-panel rounded-2xl p-8 lg:p-12">
        <div className="mb-10 pb-6 border-b border-gold-100">
          <div className="flex items-center gap-2 text-sm font-bold text-gold-600 uppercase tracking-widest mb-2">
            Module {module.id} of {MODULES.length}
          </div>
          <h3 className="text-3xl font-bold text-slate-800">{module.title}</h3>
          <p className="text-slate-500 mt-3 text-base leading-relaxed">{module.description}</p>
        </div>

        <div className="space-y-12">
          {module.fields.map((field) => (
            <div key={field.name} className="animate-in slide-in-from-right-4 duration-300">
              <label className="block text-lg font-bold text-slate-800 mb-5 flex items-center">
                {field.label}
                <FieldHelper title={field.label} />
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {field.options.map((option) => (
                  <label 
                    key={option} 
                    className={`flex items-start p-5 rounded-xl border-2 cursor-pointer transition-all duration-200 group ${
                      (field.type === 'radio' && formData[field.name] === option) || 
                      (field.type === 'checkbox' && (formData[field.name] || []).includes(option))
                        ? 'border-gold-400 bg-gold-50/50 shadow-sm transform scale-[1.01]'
                        : 'border-slate-200 bg-white hover:border-gold-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center h-6 mt-0.5 shrink-0">
                      <input
                        type={field.type}
                        name={field.name}
                        value={option}
                        checked={
                          field.type === 'radio' 
                            ? formData[field.name] === option 
                            : (formData[field.name] || []).includes(option)
                        }
                        onChange={(e) => {
                          if (field.type === 'radio') {
                            handleRadioChange(field.name, option);
                          } else {
                            handleCheckboxChange(field.name, option, e.target.checked);
                          }
                        }}
                        className={`w-5 h-5 text-gold-500 focus:ring-gold-400 border-slate-300 ${field.type === 'radio' ? 'focus:ring-2' : 'rounded'} transition-all`}
                      />
                    </div>
                    <div className={`ml-4 text-[15px] font-semibold leading-snug transition-colors ${
                      (field.type === 'radio' && formData[field.name] === option) || 
                      (field.type === 'checkbox' && (formData[field.name] || []).includes(option))
                        ? 'text-gold-900'
                        : 'text-slate-600 group-hover:text-slate-900'
                    }`}>
                      {option}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-12 pt-8 border-t border-slate-100">
          <button
            onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
            disabled={currentStep === 0}
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-slate-500 hover:text-slate-800 hover:bg-slate-100 disabled:opacity-0 disabled:cursor-default transition-all"
          >
            <ArrowLeft size={18} />
            Previous Module
          </button>
          
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-slate-800 bg-white border border-slate-300 hover:border-gold-400 hover:text-gold-700 hover:bg-gold-50/50 shadow-sm hover:shadow-md transition-all"
          >
            {isLastStep ? 'Process Legal Assessment' : 'Save & Continue'}
            {isLastStep ? <CheckCircle2 size={18} /> : <ChevronRight size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
}
