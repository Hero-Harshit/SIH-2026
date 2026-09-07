"use client";

import Header from "@/components/Header";
import Link from "next/link";
import { Settings, ChevronDown } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-black flex flex-col transition-colors duration-300">
      <Header />
      
      <div className="flex flex-1 w-full max-w-[1600px] mx-auto relative">
        {/* Sidebar */}
        <aside className="hidden lg:flex w-16 hover:w-64 fixed left-0 top-[73px] h-[calc(100vh-73px)] border-r border-brand-200 dark:border-zinc-800 bg-white/80 dark:bg-black/80 backdrop-blur-xl z-20 flex-col py-6 gap-4 group transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden shadow-[1px_0_10px_rgba(0,0,0,0.02)]">
          <div className="px-3 w-full flex flex-col gap-3">
            <Link href="/" className="w-full flex items-center gap-4 p-3 rounded-xl text-slate-400 dark:text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50/80 dark:hover:bg-zinc-900/50 hover:shadow-sm transition-all relative overflow-hidden group/btn" title="Home">
              <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              <span className="font-semibold text-sm tracking-wide whitespace-nowrap opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Home</span>
            </Link>
            <Link href="/dashboard" className="w-full flex items-center gap-4 p-3 rounded-xl text-slate-400 dark:text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50/80 dark:hover:bg-zinc-900/50 hover:shadow-sm transition-all relative overflow-hidden group/btn" title="Assessment">
              <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
              <span className="font-semibold text-sm tracking-wide whitespace-nowrap opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Assessment</span>
            </Link>
            <Link href="/corpus" className="w-full flex items-center gap-4 p-3 rounded-xl text-slate-400 dark:text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50/80 dark:hover:bg-zinc-900/50 hover:shadow-sm transition-all relative overflow-hidden group/btn" title="Legal Corpus">
              <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
              <span className="font-semibold text-sm tracking-wide whitespace-nowrap opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Legal Corpus</span>
            </Link>
          </div>
          
          <div className="mt-auto px-3 w-full">
            <Link href="/settings" className="w-full flex items-center gap-4 p-3 rounded-xl text-slate-400 dark:text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50/80 dark:hover:bg-zinc-900/50 hover:shadow-sm transition-all relative overflow-hidden group/btn" title="Settings">
              <Settings size={22} className="shrink-0" />
              <span className="font-semibold text-sm tracking-wide whitespace-nowrap opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Settings</span>
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 lg:ml-16 w-full px-4 lg:px-12 flex flex-col items-center py-16">
          <div className="w-full max-w-4xl flex flex-col animate-in fade-in zoom-in duration-500">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center text-slate-800 dark:text-slate-100 mb-12 tracking-tight">
              Privacy Policy
            </h1>

            <div className="w-full flex flex-col gap-4">
              <details className="group border border-slate-200 dark:border-zinc-800/80 rounded-xl bg-white dark:bg-zinc-950/50 overflow-hidden [&_summary::-webkit-details-marker]:hidden shadow-sm hover:border-brand-300 dark:hover:border-zinc-700 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg md:text-xl text-slate-800 dark:text-slate-100 outline-none select-none">
                  <span>Data & Privacy</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 text-slate-400 dark:text-slate-500">
                    <ChevronDown size={24} />
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-2 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-zinc-800/80 mt-2 animate-in slide-in-from-top-2 duration-300">
                  Laura is designed with a privacy-first approach to ensure that user information is collected, processed, and protected responsibly. Since the platform deals with intellectual property, traditional knowledge, formulations, research-related information, and regulatory queries, protecting user data is an important part of the system design.
                </div>
              </details>

              <details className="group border border-slate-200 dark:border-zinc-800/80 rounded-xl bg-white dark:bg-zinc-950/50 overflow-hidden [&_summary::-webkit-details-marker]:hidden shadow-sm hover:border-brand-300 dark:hover:border-zinc-700 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg md:text-xl text-slate-800 dark:text-slate-100 outline-none select-none">
                  <span>Data Minimization</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 text-slate-400 dark:text-slate-500">
                    <ChevronDown size={24} />
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-2 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-zinc-800/80 mt-2 animate-in slide-in-from-top-2 duration-300">
                  Our system follows the principle of collecting only the information that is necessary to provide relevant Ayurveda, IPR, ABS, and regulatory guidance. Unnecessary personal or sensitive information is not required for using the core services.
                </div>
              </details>

              <details className="group border border-slate-200 dark:border-zinc-800/80 rounded-xl bg-white dark:bg-zinc-950/50 overflow-hidden [&_summary::-webkit-details-marker]:hidden shadow-sm hover:border-brand-300 dark:hover:border-zinc-700 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg md:text-xl text-slate-800 dark:text-slate-100 outline-none select-none">
                  <span>User Data Protection</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 text-slate-400 dark:text-slate-500">
                    <ChevronDown size={24} />
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-2 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-zinc-800/80 mt-2 animate-in slide-in-from-top-2 duration-300">
                  Personal information and user-generated content are handled with appropriate security measures to reduce the risk of unauthorized access, disclosure, alteration, or misuse.
                </div>
              </details>

              <details className="group border border-slate-200 dark:border-zinc-800/80 rounded-xl bg-white dark:bg-zinc-950/50 overflow-hidden [&_summary::-webkit-details-marker]:hidden shadow-sm hover:border-brand-300 dark:hover:border-zinc-700 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg md:text-xl text-slate-800 dark:text-slate-100 outline-none select-none">
                  <span>Confidential Information Protection</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 text-slate-400 dark:text-slate-500">
                    <ChevronDown size={24} />
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-2 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-zinc-800/80 mt-2 animate-in slide-in-from-top-2 duration-300">
                  Users are clearly informed that confidential formulations, unpublished inventions, trade secrets, proprietary research, and sensitive business information should not be unnecessarily entered into the system.
                </div>
              </details>

              <details className="group border border-slate-200 dark:border-zinc-800/80 rounded-xl bg-white dark:bg-zinc-950/50 overflow-hidden [&_summary::-webkit-details-marker]:hidden shadow-sm hover:border-brand-300 dark:hover:border-zinc-700 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg md:text-xl text-slate-800 dark:text-slate-100 outline-none select-none">
                  <span>Secure Data Transmission</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 text-slate-400 dark:text-slate-500">
                    <ChevronDown size={24} />
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-2 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-zinc-800/80 mt-2 animate-in slide-in-from-top-2 duration-300">
                  All communication between the user and the platform is designed to use secure protocols such as HTTPS/TLS to protect information during transmission.
                </div>
              </details>

              <details className="group border border-slate-200 dark:border-zinc-800/80 rounded-xl bg-white dark:bg-zinc-950/50 overflow-hidden [&_summary::-webkit-details-marker]:hidden shadow-sm hover:border-brand-300 dark:hover:border-zinc-700 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg md:text-xl text-slate-800 dark:text-slate-100 outline-none select-none">
                  <span>User Control and Consent</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 text-slate-400 dark:text-slate-500">
                    <ChevronDown size={24} />
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-2 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-zinc-800/80 mt-2 animate-in slide-in-from-top-2 duration-300">
                  Users should have appropriate control over their information and permissions. Where data is stored or processed beyond the basic functioning of the service, appropriate consent and transparency mechanisms should be provided.
                </div>
              </details>

              <details className="group border border-slate-200 dark:border-zinc-800/80 rounded-xl bg-white dark:bg-zinc-950/50 overflow-hidden [&_summary::-webkit-details-marker]:hidden shadow-sm hover:border-brand-300 dark:hover:border-zinc-700 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg md:text-xl text-slate-800 dark:text-slate-100 outline-none select-none">
                  <span>Data Access and Deletion</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 text-slate-400 dark:text-slate-500">
                    <ChevronDown size={24} />
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-2 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-zinc-800/80 mt-2 animate-in slide-in-from-top-2 duration-300">
                  The platform is designed to provide appropriate mechanisms for users to manage their stored information, including access, correction, and deletion where applicable.
                </div>
              </details>

              <details className="group border border-slate-200 dark:border-zinc-800/80 rounded-xl bg-white dark:bg-zinc-950/50 overflow-hidden [&_summary::-webkit-details-marker]:hidden shadow-sm hover:border-brand-300 dark:hover:border-zinc-700 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg md:text-xl text-slate-800 dark:text-slate-100 outline-none select-none">
                  <span>Responsible Use of AI Data</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 text-slate-400 dark:text-slate-500">
                    <ChevronDown size={24} />
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-2 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-zinc-800/80 mt-2 animate-in slide-in-from-top-2 duration-300">
                  User conversations and submitted information should not be automatically used for AI model training or improvement without appropriate permission and a clearly defined data-use policy.
                </div>
              </details>

              <details className="group border border-slate-200 dark:border-zinc-800/80 rounded-xl bg-white dark:bg-zinc-950/50 overflow-hidden [&_summary::-webkit-details-marker]:hidden shadow-sm hover:border-brand-300 dark:hover:border-zinc-700 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg md:text-xl text-slate-800 dark:text-slate-100 outline-none select-none">
                  <span>Source Transparency</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 text-slate-400 dark:text-slate-500">
                    <ChevronDown size={24} />
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-2 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-zinc-800/80 mt-2 animate-in slide-in-from-top-2 duration-300">
                  Laura uses a Retrieval-Augmented Generation (RAG) approach to provide sourcegrounded responses. Relevant answers are supported by citations so that users can verify the underlying laws, rules, regulations, treaties, or official records.
                </div>
              </details>

              <details className="group border border-slate-200 dark:border-zinc-800/80 rounded-xl bg-white dark:bg-zinc-950/50 overflow-hidden [&_summary::-webkit-details-marker]:hidden shadow-sm hover:border-brand-300 dark:hover:border-zinc-700 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg md:text-xl text-slate-800 dark:text-slate-100 outline-none select-none">
                  <span>Jurisdictional Separation</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 text-slate-400 dark:text-slate-500">
                    <ChevronDown size={24} />
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-2 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-zinc-800/80 mt-2 animate-in slide-in-from-top-2 duration-300">
                  The system maintains a clear distinction between Indian and International legal and regulatory information. This helps prevent information from different jurisdictions from being incorrectly combined or presented as universally applicable.
                </div>
              </details>

              <details className="group border border-slate-200 dark:border-zinc-800/80 rounded-xl bg-white dark:bg-zinc-950/50 overflow-hidden [&_summary::-webkit-details-marker]:hidden shadow-sm hover:border-brand-300 dark:hover:border-zinc-700 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg md:text-xl text-slate-800 dark:text-slate-100 outline-none select-none">
                  <span>Controlled Third-Party Processing</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 text-slate-400 dark:text-slate-500">
                    <ChevronDown size={24} />
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-2 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-zinc-800/80 mt-2 animate-in slide-in-from-top-2 duration-300">
                  External services used for AI processing, translation, multilingual support, or other platform functions should receive only the information necessary for the specific service. Third-party data processing should be governed by appropriate security and privacy controls.
                </div>
              </details>

              <details className="group border border-slate-200 dark:border-zinc-800/80 rounded-xl bg-white dark:bg-zinc-950/50 overflow-hidden [&_summary::-webkit-details-marker]:hidden shadow-sm hover:border-brand-300 dark:hover:border-zinc-700 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg md:text-xl text-slate-800 dark:text-slate-100 outline-none select-none">
                  <span>Role-Based Access Control</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 text-slate-400 dark:text-slate-500">
                    <ChevronDown size={24} />
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-2 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-zinc-800/80 mt-2 animate-in slide-in-from-top-2 duration-300">
                  Access to stored information is restricted according to user roles and responsibilities. Authorized administrators and system personnel should only access information necessary for their assigned functions.
                </div>
              </details>

              <details className="group border border-slate-200 dark:border-zinc-800/80 rounded-xl bg-white dark:bg-zinc-950/50 overflow-hidden [&_summary::-webkit-details-marker]:hidden shadow-sm hover:border-brand-300 dark:hover:border-zinc-700 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg md:text-xl text-slate-800 dark:text-slate-100 outline-none select-none">
                  <span>Audit and Accountability</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 text-slate-400 dark:text-slate-500">
                    <ChevronDown size={24} />
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-2 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-zinc-800/80 mt-2 animate-in slide-in-from-top-2 duration-300">
                  The platform can maintain appropriate audit logs for important system and administrative activities. These logs support accountability, security monitoring, and investigation of unauthorized or unusual activities.
                </div>
              </details>

              <details className="group border border-slate-200 dark:border-zinc-800/80 rounded-xl bg-white dark:bg-zinc-950/50 overflow-hidden [&_summary::-webkit-details-marker]:hidden shadow-sm hover:border-brand-300 dark:hover:border-zinc-700 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg md:text-xl text-slate-800 dark:text-slate-100 outline-none select-none">
                  <span>Data Retention</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 text-slate-400 dark:text-slate-500">
                    <ChevronDown size={24} />
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-2 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-zinc-800/80 mt-2 animate-in slide-in-from-top-2 duration-300">
                  User information should be retained only for as long as it is necessary for the purpose for which it was collected, subject to applicable legal, regulatory, and operational requirements.
                </div>
              </details>

              <details className="group border border-slate-200 dark:border-zinc-800/80 rounded-xl bg-white dark:bg-zinc-950/50 overflow-hidden [&_summary::-webkit-details-marker]:hidden shadow-sm hover:border-brand-300 dark:hover:border-zinc-700 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg md:text-xl text-slate-800 dark:text-slate-100 outline-none select-none">
                  <span>Data Security</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 text-slate-400 dark:text-slate-500">
                    <ChevronDown size={24} />
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-2 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-zinc-800/80 mt-2 animate-in slide-in-from-top-2 duration-300">
                  The system is designed with security measures such as encrypted communication, access controls, secure authentication, protected databases, monitoring, backups, and appropriate security practices.
                </div>
              </details>

              <details className="group border border-slate-200 dark:border-zinc-800/80 rounded-xl bg-white dark:bg-zinc-950/50 overflow-hidden [&_summary::-webkit-details-marker]:hidden shadow-sm hover:border-brand-300 dark:hover:border-zinc-700 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg md:text-xl text-slate-800 dark:text-slate-100 outline-none select-none">
                  <span>Safe and Responsible AI</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 text-slate-400 dark:text-slate-500">
                    <ChevronDown size={24} />
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-2 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-zinc-800/80 mt-2 animate-in slide-in-from-top-2 duration-300">
                  The system should not generate unsupported legal or regulatory claims. When sufficient verified information is unavailable, the assistant should communicate uncertainty or abstain from providing a definitive response.
                </div>
              </details>

              <details className="group border border-slate-200 dark:border-zinc-800/80 rounded-xl bg-white dark:bg-zinc-950/50 overflow-hidden [&_summary::-webkit-details-marker]:hidden shadow-sm hover:border-brand-300 dark:hover:border-zinc-700 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg md:text-xl text-slate-800 dark:text-slate-100 outline-none select-none">
                  <span>Human Expert Escalation</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 text-slate-400 dark:text-slate-500">
                    <ChevronDown size={24} />
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-2 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-zinc-800/80 mt-2 animate-in slide-in-from-top-2 duration-300">
                  For complex, highly specific, or legally sensitive matters, the system can provide a pathway toward qualified IP professionals, legal experts, or regulatory facilitators rather than presenting AI output as a final legal decision.
                </div>
              </details>

              <details className="group border border-slate-200 dark:border-zinc-800/80 rounded-xl bg-white dark:bg-zinc-950/50 overflow-hidden [&_summary::-webkit-details-marker]:hidden shadow-sm hover:border-brand-300 dark:hover:border-zinc-700 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg md:text-xl text-slate-800 dark:text-slate-100 outline-none select-none">
                  <span>Not Legal Advice</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 text-slate-400 dark:text-slate-500">
                    <ChevronDown size={24} />
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-2 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-zinc-800/80 mt-2 animate-in slide-in-from-top-2 duration-300">
                  Laura is an informational and educational AI assistant. The information provided by the platform does not constitute professional legal advice. Users should consult qualified intellectual property, legal, or regulatory professionals for decisions requiring professional expertise.
                </div>
              </details>

              <details className="group border border-slate-200 dark:border-zinc-800/80 rounded-xl bg-white dark:bg-zinc-950/50 overflow-hidden [&_summary::-webkit-details-marker]:hidden shadow-sm hover:border-brand-300 dark:hover:border-zinc-700 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg md:text-xl text-slate-800 dark:text-slate-100 outline-none select-none">
                  <span>Privacy & Compliance</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 text-slate-400 dark:text-slate-500">
                    <ChevronDown size={24} />
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-2 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-zinc-800/80 mt-2 animate-in slide-in-from-top-2 duration-300">
                  The privacy and security design of Laura is intended to take into consideration India's Digital Personal Data Protection Act, 2023 and Digital Personal Data Protection Rules, 2025, along with applicable security, consent, data-retention, access-control, and user-rights requirements.
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
