"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const policies = [
  {
    id: "introduction",
    title: "Introduction",
    paragraphs: [
      "Welcome to Laura, an advanced AI powered assistant dedicated to providing guidance on Ayurveda, Intellectual Property Rights (IPR), Access and Benefit Sharing (ABS), and regulatory frameworks. Our infrastructure is engineered to facilitate secure educational experiences, recognizing that the subject matter we handle requires the highest standards of discretion.",
      "We process your queries and documents exclusively to generate accurate, context aware, and source grounded responses. Your interactions are isolated within secure sessions and are never mined indiscriminately or sold to external marketing agencies, ensuring your specific inquiries remain strictly private."
    ]
  },
  {
    id: "data-privacy",
    title: "Data & Privacy",
    paragraphs: [
      "Laura is designed with a privacy first approach to ensure that user information is collected, processed, and protected responsibly. Since the platform deals with intellectual property, traditional knowledge, formulations, research related information, and regulatory queries, protecting user data is an important part of the system design.",
      "We understand that the queries submitted to our platform often contain nuanced intellectual property considerations. Therefore, our data pipeline is structured to isolate individual sessions and prevent cross pollination of data between distinct user accounts. All processing occurs within secure environments that prioritize confidentiality at every operational layer.",
      "Our privacy protocols are continuously reviewed by dedicated security teams to ensure they meet modern standards. We employ advanced architectural safeguards to guarantee that your interaction history remains strictly confidential and is never exposed to unauthorized personnel or external entities."
    ]
  },
  {
    id: "data-minimization",
    title: "Data Minimization",
    paragraphs: [
      "Our system follows the principle of collecting only the information that is absolutely necessary to provide relevant Ayurveda, IPR, ABS, and regulatory guidance. Unnecessary personal or sensitive information is deliberately not required for using our core services.",
      "When you interact with the platform, we avoid logging extraneous metadata that does not directly contribute to the quality of the legal or regulatory output. Any supplementary data that is inadvertently captured during an interaction is routinely purged through automated sanitization processes.",
      "This strict adherence to data minimization ensures that our digital footprint remains exceptionally small. By refusing to hoard irrelevant data, we proactively mitigate risk and uphold our commitment to user privacy and systemic integrity."
    ]
  },
  {
    id: "user-data-protection",
    title: "User Data Protection",
    paragraphs: [
      "Personal information and user generated content are handled with appropriate security measures to reduce the risk of unauthorized access, disclosure, alteration, or misuse. We utilize industry standard encryption both at rest and in transit to shield your information from interception.",
      "Our infrastructure incorporates comprehensive access logs and real time monitoring systems designed specifically to detect and neutralize unauthorized access attempts. These systems operate continuously in the background, providing an invisible but highly effective layer of defense around your account.",
      "In the highly unlikely event of a security anomaly, our incident response protocols are engineered to immediately lock down affected segments and notify appropriate parties. Protecting the sanctity of your submitted data is the foundational premise upon which our entire platform operates."
    ]
  },
  {
    id: "confidential-information",
    title: "Confidential Information Protection",
    paragraphs: [
      "Users are clearly informed that confidential formulations, unpublished inventions, trade secrets, proprietary research, and sensitive business information should not be unnecessarily entered into the system. While our platform is highly secure, exercising caution with raw trade secrets is a fundamental best practice in intellectual property management.",
      "We strongly advise users to abstract their queries when dealing with highly sensitive or unpatented chemical formulations. By asking questions based on general regulatory principles rather than disclosing the exact proprietary ratios of a new invention, users can receive maximum benefit from the platform while maintaining total control over their trade secrets.",
      "The platform is intended to interpret law and regulation, not to serve as a secure vault for unpublished intellectual property. Maintaining this distinction protects you from inadvertent disclosures and ensures that your proprietary advantages remain entirely within your own secure environments."
    ]
  },
  {
    id: "secure-transmission",
    title: "Secure Data Transmission",
    paragraphs: [
      "All communication between the user and the platform is designed to use secure cryptographic protocols such as advanced HTTPS and modern TLS standards. These protocols establish an impenetrable tunnel between your browser and our servers, completely protecting information during transmission.",
      "We strictly enforce secure connections, meaning the platform will actively reject any attempts to communicate over unencrypted or outdated protocols. This ensures that man in the middle attacks and external eavesdropping are mathematically infeasible during your session.",
      "Furthermore, our cryptographic certificates are regularly rotated and our cipher suites are continuously updated to stay ahead of emerging computational threats. You can trust that the data moving between your device and our systems is heavily shielded at all times."
    ]
  },
  {
    id: "user-control",
    title: "User Control and Consent",
    paragraphs: [
      "Users maintain absolute control over their information and permissions. Where data is stored or processed beyond the basic functioning of the service, explicit consent and clear transparency mechanisms are provided prior to any processing.",
      "Our interface is designed to make permission management intuitive and accessible. Users can easily navigate to their account settings to grant, modify, or revoke permissions at any given time without facing artificial friction or confusing terminology.",
      "We operate on a philosophy of affirmative consent. This means that features requiring extended data access are completely disabled by default and are only activated when you explicitly choose to enable them. Your choices are respected unequivocally."
    ]
  },
  {
    id: "access-deletion",
    title: "Data Access and Deletion",
    paragraphs: [
      "The platform is designed to provide highly accessible mechanisms for users to manage their stored information, including full data access, correction of inaccuracies, and complete deletion where applicable.",
      "Should you choose to terminate your relationship with our platform, you possess the autonomous ability to trigger a comprehensive data deletion sequence. This process permanently eradicates your query history, profile data, and associated records from our primary databases and scheduled backup cycles.",
      "We are committed to executing these requests promptly. Once a deletion command is authorized by the user, the data is cryptographically rendered unrecoverable, ensuring that your right to be forgotten is fully honored."
    ]
  },
  {
    id: "responsible-ai",
    title: "Responsible Use of AI Data",
    paragraphs: [
      "User conversations and submitted information are strictly isolated and are never automatically used for foundational AI model training or broader system improvement without explicit, granular permission and a clearly defined data use policy.",
      "We recognize that the queries processed by Laura often contain proprietary contexts. Therefore, our agreements with underlying language model providers explicitly prohibit the retention or utilization of our users' input for their own model training regimens.",
      "When internal cache optimization is performed, it is done using completely anonymized and synthetic datasets. Your real world legal questions and intellectual property inquiries remain your exclusive property and are never commodified."
    ]
  },
  {
    id: "source-transparency",
    title: "Source Transparency",
    paragraphs: [
      "Laura uses a sophisticated Retrieval Augmented Generation approach to provide source grounded responses. Relevant answers are directly supported by exact citations so that users can independently verify the underlying laws, rules, regulations, treaties, or official records.",
      "This mechanism ensures that the AI does not invent legal precedent. Every regulatory claim or procedural guideline presented by the platform can be traced back to a specific, verified legal document, providing a transparent chain of custody for the information.",
      "By surfacing these citations clearly alongside the generated text, we empower our users to move beyond merely trusting the AI. Users can confidently follow the provided references to read the raw legal statutes themselves, ensuring total confidence in their compliance strategies."
    ]
  },
  {
    id: "jurisdictional-separation",
    title: "Jurisdictional Separation",
    paragraphs: [
      "The system maintains a rigid architectural distinction between Indian domestic law and International legal and regulatory frameworks. This deliberate separation prevents information from different geographical jurisdictions from being incorrectly blended or presented as universally applicable.",
      "When a user queries the system regarding local biodiversity laws, the retrieval engine restricts its search perimeter exclusively to the relevant national databases. This eliminates the dangerous possibility of international treaties being mistakenly presented as local compliance requirements.",
      "This precise compartmentalization is crucial for intellectual property management, where a rule that applies in one nation may be completely invalid in another. Our system is engineered to understand and respect these sovereign legal boundaries at all times."
    ]
  },
  {
    id: "controlled-third-party",
    title: "Controlled Third-Party Processing",
    paragraphs: [
      "External services utilized for specialized AI processing, language translation, or other peripheral platform functions receive only the absolute minimum information necessary to execute that specific service. Third party data processing is governed by exceptionally strict security and privacy controls.",
      "We employ a rigorous vendor risk management framework. Any external entity that interacts with our platform's data must sign legally binding data processing agreements that explicitly forbid secondary data usage, retention, or external sharing.",
      "Furthermore, data transmitted to these controlled third parties is routinely stripped of identifying metadata prior to dispatch. This ensures that even in the context of authorized third party processing, the core identity and strategic intent of our users remain fully obscured."
    ]
  },
  {
    id: "role-based-access",
    title: "Role-Based Access Control",
    paragraphs: [
      "Access to stored information within our infrastructure is heavily restricted according to specific user roles and operational responsibilities. Authorized administrators and system personnel are physically and logically blocked from accessing information unless it is strictly necessary for their assigned technical functions.",
      "We implement the principle of least privilege across our entire organization. This means that a developer working on the user interface has zero access to the database containing user queries, and support staff can only view diagnostic data that users explicitly authorize them to see.",
      "To enforce these boundaries, administrative access requires mandatory multi factor authentication and is routed through secure, audited internal gateways. Unauthorized internal access attempts are automatically blocked and escalated to our security directors."
    ]
  },
  {
    id: "audit-accountability",
    title: "Audit and Accountability",
    paragraphs: [
      "The platform maintains comprehensive, immutable audit logs for all important system modifications and administrative activities. These logs support stringent accountability, continuous security monitoring, and rapid investigation of any unusual activities.",
      "Every time a system configuration is altered or a data access request is executed, the event is securely recorded with exact timestamps and cryptographic signatures. This creates a tamper evident trail of all structural actions taken within the platform environment.",
      "By maintaining these robust accountability structures, we ensure that our operational integrity can be verified at any moment. This level of internal transparency is critical for maintaining a platform trusted by professionals dealing with highly regulated intellectual property."
    ]
  },
  {
    id: "data-retention",
    title: "Data Retention",
    paragraphs: [
      "User information is deliberately retained only for as long as it is functionally necessary for the specific purpose for which it was originally collected, subject entirely to applicable legal, regulatory, and technical operational requirements.",
      "We do not believe in indefinite data storage. Once an account is marked for deletion or a specific operational timeframe expires, the associated data is caught by our automated lifecycle management protocols and permanently destroyed.",
      "This aggressive stance on data lifecycle management ensures that stale data does not become a liability. We continuously optimize our storage arrays to ensure that we hold exactly what is needed to serve you today, and absolutely nothing more."
    ]
  },
  {
    id: "data-security",
    title: "Data Security",
    paragraphs: [
      "The system is fortified with extensive security measures including robust database encryption, strict network firewalls, secure authentication flows, continuous threat monitoring, automated backups, and industry leading security practices.",
      "Our defense in depth strategy ensures that there is no single point of failure within our security architecture. If one layer of defense encounters an anomaly, subsequent independent layers immediately activate to contain and neutralize the potential threat.",
      "We conduct routine vulnerability scanning and engage in proactive threat modeling to anticipate and defend against emerging cyber threats. Protecting the operational continuity and data sanctity of our platform is a relentless, round the clock endeavor."
    ]
  },
  {
    id: "safe-ai",
    title: "Safe and Responsible AI",
    paragraphs: [
      "The system is governed by strict systemic guardrails designed specifically to prevent the generation of unsupported legal or regulatory claims. When sufficient verified information is unavailable within our verified corpus, the assistant is programmed to explicitly communicate uncertainty.",
      "We mandate that the AI must abstain from providing a definitive response rather than attempting to guess a legal outcome. This deterministic fallback mechanism is crucial in the legal and regulatory domain, where inaccurate information is significantly more dangerous than a lack of information.",
      "By prioritizing factual accuracy and source verification over conversational fluency, we ensure that the AI acts as a reliable, grounded research assistant rather than an unpredictable generative engine."
    ]
  },
  {
    id: "expert-escalation",
    title: "Human Expert Escalation",
    paragraphs: [
      "For complex, highly specific, or legally sensitive matters, the system provides a seamless pathway toward qualified IP professionals, legal experts, or regulatory facilitators rather than presenting AI output as a final binding legal decision.",
      "We recognize that while AI excels at rapid information retrieval and initial regulatory mapping, the nuanced strategic execution of intellectual property law requires human judgment. Our escalation protocols allow users to easily transition their research context to vetted human professionals when necessary.",
      "This hybrid approach guarantees that users are never left at a dead end. When a query exceeds the operational boundaries of automated legal informatics, a specialized human expert is always available to take the helm and provide definitive guidance."
    ]
  },
  {
    id: "not-legal-advice",
    title: "Not Legal Advice",
    paragraphs: [
      "Laura is strictly an informational and educational AI assistant. The information provided by the platform does not constitute professional legal advice, and interacting with the system does not establish an attorney client relationship under any jurisdiction.",
      "While we strive for the utmost accuracy by grounding our responses in official statutes and records, the output generated by the platform should always be viewed as a preparatory research tool rather than a substitute for formal legal counsel.",
      "Users are strongly urged to consult qualified intellectual property attorneys, legal professionals, or certified regulatory authorities before making any binding decisions, filing official patents, or executing compliance strategies based on information retrieved from this platform."
    ]
  },
  {
    id: "privacy-compliance",
    title: "Privacy & Compliance",
    paragraphs: [
      "The comprehensive privacy and security architecture of Laura is specifically intended to align with India's Digital Personal Data Protection Act of 2023 and the subsequent Digital Personal Data Protection Rules of 2025.",
      "We have meticulously integrated all applicable statutory requirements regarding data security, explicit user consent mechanisms, strict data retention limits, granular access controls, and comprehensive user rights frameworks directly into our technical infrastructure.",
      "By embedding these legal compliance mandates into our foundational code, we ensure that our platform not only assists you in navigating regulatory landscapes, but also stands as an operational benchmark for digital compliance and data sovereignty."
    ]
  }
];

export default function PrivacyPage() {
  const [activeId, setActiveId] = useState<string>("introduction");

  // Determine the active policy object to render
  const activePolicy = policies.find((p) => p.id === activeId) || policies[0];

  return (
    <main className="h-screen overflow-hidden flex flex-col transition-colors duration-300">
      <Header />
      <div className="flex flex-1 w-full max-w-[1600px] mx-auto relative overflow-hidden">
        <Sidebar />
        
        {/* Main Content Area */}
        <div className="flex-1 lg:ml-16 w-full px-4 sm:px-8 lg:px-12 flex justify-center py-6 md:py-8 h-full overflow-hidden">
          
          {/* Documentation Layout Container */}
          <div className="w-full max-w-7xl flex flex-col lg:flex-row items-start gap-8 lg:gap-16 relative h-full">
            
            {/* Mobile Navigation (Horizontal Scroll) */}
            <div className="w-full lg:hidden overflow-x-auto pb-4 custom-scrollbar sticky top-[80px] z-20 bg-background/95 backdrop-blur-md">
              <div className="flex flex-row gap-2 px-1">
                {policies.map((policy) => (
                  <button
                    key={policy.id}
                    onClick={() => setActiveId(policy.id)}
                    className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                      activeId === policy.id
                        ? "bg-brand-600 text-white shadow-md"
                        : "bg-slate-100 dark:bg-zinc-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-zinc-800"
                    }`}
                  >
                    {policy.title}
                  </button>
                ))}
              </div>
            </div>

            {/* LEFT: Desktop Table of Contents */}
            <aside className="hidden lg:flex flex-col w-72 shrink-0 h-full overflow-y-auto pr-4 pb-12 custom-scrollbar">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-6 text-sm uppercase tracking-widest opacity-80 pl-4">
                Policy Sections
              </h3>
              <nav className="flex flex-col border-l-2 border-slate-200 dark:border-white/10 relative">
                {policies.map((policy) => (
                  <button
                    key={policy.id}
                    onClick={() => setActiveId(policy.id)}
                    className={`text-left pl-6 py-2.5 text-sm leading-relaxed font-medium transition-colors border-l-2 -ml-[2px] ${
                      activeId === policy.id
                        ? "text-brand-600 dark:text-brand-400 border-brand-600 dark:border-brand-400 bg-brand-50/50 dark:bg-brand-900/10"
                        : "text-slate-500 dark:text-slate-400 border-transparent hover:text-slate-800 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600"
                    }`}
                  >
                    {policy.title}
                  </button>
                ))}
              </nav>
            </aside>

            {/* RIGHT/CENTER: Main Reading Column (Tabbed Content) */}
            <div className="flex-1 w-full max-w-[800px] min-w-0 h-full pt-4 lg:pt-0 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both" key={activePolicy.id}>
              
              <div className="mb-12">
                {activePolicy.id === "introduction" && (
                  <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight mb-10 leading-tight">
                    Privacy Policy
                  </h1>
                )}
                
                {activePolicy.id !== "introduction" && (
                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight mb-8 leading-tight">
                    {activePolicy.title}
                  </h2>
                )}
                
                <div className="space-y-6">
                  {activePolicy.paragraphs.map((paragraph, idx) => (
                    <p key={idx} className="text-slate-700 dark:text-slate-300 text-lg leading-loose">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>



            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
