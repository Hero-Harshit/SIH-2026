export interface ModuleFieldOption {
  label: string;
  description: string;
}

export interface ModuleField {
  name: string;
  label: string;
  type: 'radio' | 'checkbox';
  options: ModuleFieldOption[];
}

export interface Module {
  id: number;
  title: string;
  description: string;
  fields: ModuleField[];
}

export const MODULES: Module[] = [
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
