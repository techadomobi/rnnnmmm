import { Link } from "wouter";
import { Shield, FileText, TrendingUp, Building, Users, Globe, CheckCircle, ArrowRight } from "lucide-react";

const serviceCategories = [
  {
    icon: Shield,
    title: "Audit & Business Advisory",
    id: "audit",
    color: "bg-blue-50 text-blue-700",
    desc: "Our audit team delivers comprehensive assurance services with unwavering independence and professional scepticism.",
    services: [
      "Statutory Audit (Companies Act)",
      "Tax Audit under Income Tax Act",
      "Internal Audit & Risk Assessment",
      "Forensic Audit & Investigation",
      "IT Audit & Information Systems",
      "Bank Branch Audits",
      "Revenue Audit & Cost Audit",
      "Due Diligence Review",
    ],
  },
  {
    icon: FileText,
    title: "Taxation Services",
    id: "taxation",
    color: "bg-green-50 text-green-700",
    desc: "Expert taxation advisory spanning domestic and international tax regimes with end-to-end compliance support.",
    services: [
      "Direct Tax Planning & Advisory",
      "Corporate Tax Compliance",
      "GST Registration & Returns",
      "GST Advisory & Refund Claims",
      "Transfer Pricing Advisory",
      "International Tax & DTAA",
      "UK Tax Outsourcing Services",
      "US Tax Filing & Accounting",
    ],
  },
  {
    icon: TrendingUp,
    title: "Transaction & Regulatory Advisory",
    id: "transaction",
    color: "bg-orange-50 text-orange-700",
    desc: "End-to-end advisory for domestic and cross-border transactions with regulatory compliance expertise.",
    services: [
      "Mergers & Acquisitions Advisory",
      "FEMA Consulting",
      "RBI Liaison & Compliance",
      "Company Formation & Registration",
      "Joint Venture Structuring",
      "Due Diligence (Financial & Legal)",
      "Cross-border Transaction Advisory",
      "Foreign Investment Compliance",
    ],
  },
  {
    icon: Building,
    title: "Corporate Finance",
    id: "corporate-finance",
    color: "bg-purple-50 text-purple-700",
    desc: "Strategic corporate finance advisory to help businesses raise capital, grow, and restructure effectively.",
    services: [
      "M&A Financial Advisory",
      "Fund Raising (Private Equity/Debt)",
      "Business Valuations",
      "Corporate Restructuring",
      "India Entry Strategy",
      "Project Finance Advisory",
      "IPO & Capital Market Support",
      "GIFT City Investments",
    ],
  },
  {
    icon: Users,
    title: "Consultancy",
    id: "consultancy",
    color: "bg-teal-50 text-teal-700",
    desc: "Outsourced financial leadership and advisory solutions for businesses of all sizes.",
    services: [
      "Virtual CFO Services",
      "ESOP Solutions & Administration",
      "Payroll Processing & Compliance",
      "IND-AS Conversion Support",
      "Internal Control Assessment",
      "Business Process Outsourcing",
      "UK Accounting & Bookkeeping",
      "Financial Reporting & MIS",
    ],
  },
  {
    icon: Globe,
    title: "Corporate & Legal Services",
    id: "legal",
    color: "bg-red-50 text-red-700",
    desc: "Comprehensive corporate and legal advisory for businesses navigating complex regulatory environments.",
    services: [
      "Company Law Compliance",
      "Corporate Secretarial Services",
      "Offshore Company Structuring",
      "Cross-border Transactions",
      "Contract Review & Drafting",
      "Regulatory Filings & Compliance",
      "Labour Law Advisory",
      "Intellectual Property Advisory",
    ],
  },
];

const engagementProcess = [
  {
    title: "Discovery & Scoping",
    detail: "We assess your business stage, compliance posture, and decision priorities before proposing the scope.",
  },
  {
    title: "Service Blueprint",
    detail: "A partner-led team prepares timelines, dependencies, deliverables, and governance checkpoints.",
  },
  {
    title: "Execution",
    detail: "Domain experts execute with periodic reviews, status updates, and proactive issue management.",
  },
  {
    title: "Closure & Improvement",
    detail: "We provide implementation guidance and recommendations for sustained control and growth.",
  },
];

const serviceDifferentiators = [
  "Partner-level involvement in critical milestones",
  "Integrated advisory across tax, finance, legal, and compliance",
  "Sector-informed recommendations grounded in practical realities",
  "Detailed documentation and audit-ready working papers",
  "Predictable turnaround through structured workflows",
  "Transparent commercials with clear scope boundaries",
];

const serviceFaqs = [
  {
    question: "Can RNM support both one-time and ongoing mandates?",
    answer:
      "Yes. We handle one-time engagements such as due diligence and transaction support, as well as long-term retainers for audit, tax, compliance, and CFO advisory.",
  },
  {
    question: "Do you provide cross-border advisory support?",
    answer:
      "Absolutely. Through our global network and in-house teams, we support FEMA, international tax, inbound/outbound structuring, and multi-jurisdiction coordination.",
  },
  {
    question: "How quickly can a project be started?",
    answer:
      "After the initial consultation and scope alignment, most mandates can be mobilized quickly with a dedicated team and kickoff plan.",
  },
  {
    question: "Which industries do you typically work with?",
    answer:
      "Our teams regularly support real estate, manufacturing, healthcare, IT, banking, insurance, hospitality, and emerging startups.",
  },
];

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-[#1a0808] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-[#c4793a] text-sm font-semibold uppercase tracking-widest mb-4">Our Services</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5">
              Comprehensive Financial & Advisory Services
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              From statutory audit to global M&A advisory, RNM delivers expert professional services across every dimension of financial and corporate governance.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, i) => {
              const Icon = category.icon;
              return (
                <div
                  key={i}
                  id={category.id}
                  className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  data-testid={`service-category-${i}`}
                >
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon size={22} />
                      </div>
                      <div>
                        <h2 className="font-serif text-xl font-bold text-gray-900 mb-2">{category.title}</h2>
                        <p className="text-gray-500 text-sm leading-relaxed">{category.desc}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {category.services.map((service, j) => (
                        <div key={j} className="flex items-start gap-2 text-sm text-gray-600" data-testid={`service-item-${i}-${j}`}>
                          <CheckCircle size={14} className="text-[#8B1A1A] mt-0.5 flex-shrink-0" />
                          {service}
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 pt-4 border-t border-gray-50">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-[#8B1A1A] text-sm font-medium hover:underline"
                        data-testid={`link-service-enquire-${i}`}
                      >
                        Enquire Now <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Delivery model */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[#8B1A1A] text-sm font-semibold uppercase tracking-widest mb-3">Delivery Model</p>
            <h2 className="font-serif text-3xl font-bold text-gray-900">How We Deliver Value</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {engagementProcess.map((step, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-100 bg-gray-50 p-6 hover:border-[#8B1A1A]/30 transition-colors"
                data-testid={`engagement-step-${i}`}
              >
                <div className="w-8 h-8 rounded-full bg-[#8B1A1A] text-white text-sm font-semibold flex items-center justify-center mb-3">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 md:p-8">
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Why Businesses Choose RNM</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {serviceDifferentiators.map((point, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-600" data-testid={`service-differentiator-${i}`}>
                  <CheckCircle size={14} className="text-[#8B1A1A] mt-0.5 flex-shrink-0" />
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[#8B1A1A] text-sm font-semibold uppercase tracking-widest mb-3">FAQs</p>
            <h2 className="font-serif text-3xl font-bold text-gray-900">Common Service Questions</h2>
          </div>
          <div className="space-y-4">
            {serviceFaqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-6" data-testid={`services-faq-${i}`}>
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#8B1A1A] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Need Expert Financial Advisory?</h2>
          <p className="text-white/80 mb-6">
            Talk to one of our experts about your specific requirements and how RNM can assist you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#8B1A1A] font-semibold px-6 py-3 rounded hover:bg-gray-100 transition-colors"
            data-testid="button-services-cta"
          >
            Get In Touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
