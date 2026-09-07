"use client";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { Settings, ChevronDown, ShieldCheck } from "lucide-react";

const policies = [
  {
    title: "Data & Privacy",
    content: "Laura is designed with a privacy-first approach to ensure that user information is collected, processed, and protected responsibly. Since the platform deals with intellectual property, traditional knowledge, formulations, research-related information, and regulatory queries, protecting user data is an important part of the system design."
  },
  {
    title: "Data Minimization",
    content: "Our system follows the principle of collecting only the information that is necessary to provide relevant Ayurveda, IPR, ABS, and regulatory guidance. Unnecessary personal or sensitive information is not required for using the core services."
  },
  {
    title: "User Data Protection",
    content: "Personal information and user-generated content are handled with appropriate security measures to reduce the risk of unauthorized access, disclosure, alteration, or misuse."
  },
  {
    title: "Confidential Information Protection",
    content: "Users are clearly informed that confidential formulations, unpublished inventions, trade secrets, proprietary research, and sensitive business information should not be unnecessarily entered into the system."
  },
  {
    title: "Secure Data Transmission",
    content: "All communication between the user and the platform is designed to use secure protocols such as HTTPS/TLS to protect information during transmission."
  },
  {
    title: "User Control and Consent",
    content: "Users should have appropriate control over their information and permissions. Where data is stored or processed beyond the basic functioning of the service, appropriate consent and transparency mechanisms should be provided."
  },
  {
    title: "Data Access and Deletion",
    content: "The platform is designed to provide appropriate mechanisms for users to manage their stored information, including access, correction, and deletion where applicable."
  },
  {
    title: "Responsible Use of AI Data",
    content: "User conversations and submitted information should not be automatically used for AI model training or improvement without appropriate permission and a clearly defined data-use policy."
  },
  {
    title: "Source Transparency",
    content: "Laura uses a Retrieval-Augmented Generation (RAG) approach to provide sourcegrounded responses. Relevant answers are supported by citations so that users can verify the underlying laws, rules, regulations, treaties, or official records."
  },
  {
    title: "Jurisdictional Separation",
    content: "The system maintains a clear distinction between Indian and International legal and regulatory information. This helps prevent information from different jurisdictions from being incorrectly combined or presented as universally applicable."
  },
  {
    title: "Controlled Third-Party Processing",
    content: "External services used for AI processing, translation, multilingual support, or other platform functions should receive only the information necessary for the specific service. Third-party data processing should be governed by appropriate security and privacy controls."
  },
  {
    title: "Role-Based Access Control",
    content: "Access to stored information is restricted according to user roles and responsibilities. Authorized administrators and system personnel should only access information necessary for their assigned functions."
  },
  {
    title: "Audit and Accountability",
    content: "The platform can maintain appropriate audit logs for important system and administrative activities. These logs support accountability, security monitoring, and investigation of unauthorized or unusual activities."
  },
  {
    title: "Data Retention",
    content: "User information should be retained only for as long as it is necessary for the purpose for which it was collected, subject to applicable legal, regulatory, and operational requirements."
  },
  {
    title: "Data Security",
    content: "The system is designed with security measures such as encrypted communication, access controls, secure authentication, protected databases, monitoring, backups, and appropriate security practices."
  },
  {
    title: "Safe and Responsible AI",
    content: "The system should not generate unsupported legal or regulatory claims. When sufficient verified information is unavailable, the assistant should communicate uncertainty or abstain from providing a definitive response."
  },
  {
    title: "Human Expert Escalation",
    content: "For complex, highly specific, or legally sensitive matters, the system can provide a pathway toward qualified IP professionals, legal experts, or regulatory facilitators rather than presenting AI output as a final legal decision."
  },
  {
    title: "Not Legal Advice",
    content: "Laura is an informational and educational AI assistant. The information provided by the platform does not constitute professional legal advice. Users should consult qualified intellectual property, legal, or regulatory professionals for decisions requiring professional expertise."
  },
  {
    title: "Privacy & Compliance",
    content: "The privacy and security design of Laura is intended to take into consideration India's Digital Personal Data Protection Act, 2023 and Digital Personal Data Protection Rules, 2025, along with applicable security, consent, data-retention, access-control, and user-rights requirements."
  }
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col transition-colors duration-300">
      <Header />
      
      <div className="flex flex-1 w-full max-w-[1600px] mx-auto relative">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 lg:ml-16 w-full px-4 lg:px-12 flex flex-col items-center py-12 md:py-20 overflow-y-auto">
          <div className="w-full max-w-6xl flex flex-col animate-in fade-in zoom-in duration-500">
            
            {/* Hero Section */}
            <div className="flex flex-col items-center justify-center text-center mb-12 space-y-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-brand-400 to-brand-accent shadow-xl shadow-brand-500/20 flex items-center justify-center text-white mb-2">
                <ShieldCheck size={40} strokeWidth={1.5} />
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight">
                Privacy Policy
              </h1>
              <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl">
                Your trust and data security are our top priorities. Learn how we collect, process, and protect your information responsibly.
              </p>
            </div>

            {/* Intro Paragraphs */}
            <div className="w-full max-w-4xl mx-auto mb-16 space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              <p>
                Welcome to Laura, an advanced AI-powered assistant dedicated to providing guidance on Ayurveda, Intellectual Property Rights (IPR), Access and Benefit Sharing (ABS), and regulatory frameworks. We respect your privacy and are deeply committed to protecting the integrity of your information while you interact with our platform.
              </p>
              <p>
                As a specialized system navigating the complex intersections of traditional knowledge and modern legal frameworks, Laura operates with a strong ethos of digital responsibility. Our infrastructure is engineered to facilitate secure educational and informational experiences, recognizing that the subject matter we handle, ranging from cultural heritage to proprietary research, requires the highest standards of discretion.
              </p>
              <p>
                We believe that transparency is the cornerstone of trust. While interacting with Laura, you may submit queries, documents, or research parameters. We process this information exclusively to generate accurate, context-aware, and source-grounded responses. We do not engage in the indiscriminate mining of your inputs, nor do we sell your data to external marketing or advertising agencies.
              </p>
              <p>
                Furthermore, our platform is built on the principle of privacy by design. We continuously monitor and upgrade our security practices to align with evolving digital landscapes and legal requirements. Your interactions are isolated within secure sessions, ensuring that your specific inquiries remain private and are not inadvertently cross-contaminated with other users&apos; data.
              </p>
            </div>

            {/* True Masonry-style Grid for Policies (Prevents Reflow) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full pb-20 items-start">
              {/* Left Column */}
              <div className="flex flex-col gap-6">
                {policies.filter((_, i) => i % 2 === 0).map((policy, index) => (
                  <details 
                    key={index} 
                    className="group border border-slate-200 dark:border-zinc-800/80 rounded-2xl bg-white dark:bg-zinc-950/50 overflow-hidden [&_summary::-webkit-details-marker]:hidden shadow-sm hover:shadow-md hover:border-brand-300 dark:hover:border-zinc-700 transition-all duration-300"
                  >
                    <summary className="flex items-start justify-between cursor-pointer p-6 outline-none select-none">
                      <span className="font-bold text-lg text-slate-800 dark:text-slate-100 pr-4 leading-tight">
                        {policy.title}
                      </span>
                      <span className="shrink-0 w-8 h-8 rounded-full bg-slate-100 dark:bg-zinc-900 flex items-center justify-center transition-transform duration-300 group-open:rotate-180 text-slate-500 dark:text-slate-400 group-hover:bg-brand-50 dark:group-hover:bg-brand-900/30 group-hover:text-brand-600 dark:group-hover:text-brand-400">
                        <ChevronDown size={18} strokeWidth={2.5} />
                      </span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-zinc-800/80 mt-1 animate-in slide-in-from-top-2 duration-300">
                      {policy.content}
                    </div>
                  </details>
                ))}
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-6">
                {policies.filter((_, i) => i % 2 !== 0).map((policy, index) => (
                  <details 
                    key={index} 
                    className="group border border-slate-200 dark:border-zinc-800/80 rounded-2xl bg-white dark:bg-zinc-950/50 overflow-hidden [&_summary::-webkit-details-marker]:hidden shadow-sm hover:shadow-md hover:border-brand-300 dark:hover:border-zinc-700 transition-all duration-300"
                  >
                    <summary className="flex items-start justify-between cursor-pointer p-6 outline-none select-none">
                      <span className="font-bold text-lg text-slate-800 dark:text-slate-100 pr-4 leading-tight">
                        {policy.title}
                      </span>
                      <span className="shrink-0 w-8 h-8 rounded-full bg-slate-100 dark:bg-zinc-900 flex items-center justify-center transition-transform duration-300 group-open:rotate-180 text-slate-500 dark:text-slate-400 group-hover:bg-brand-50 dark:group-hover:bg-brand-900/30 group-hover:text-brand-600 dark:group-hover:text-brand-400">
                        <ChevronDown size={18} strokeWidth={2.5} />
                      </span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-zinc-800/80 mt-1 animate-in slide-in-from-top-2 duration-300">
                      {policy.content}
                    </div>
                  </details>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
