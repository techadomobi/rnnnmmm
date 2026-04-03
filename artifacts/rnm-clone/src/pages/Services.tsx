import { Link } from "wouter";
import { Shield, FileText, TrendingUp, Building, Users, Globe, CheckCircle, ArrowRight, PieChart, BarChart3, LineChart, Zap, Target, Award, Clock, RefreshCcw, Briefcase } from "lucide-react";

const serviceCategories = [
  {
    icon: Shield,
    title: "Audit & Business Advisory",
    id: "audit",
    color: "bg-blue-50 text-blue-700",
    desc: "Our audit team delivers comprehensive assurance services with unwavering independence and professional scepticism, ensuring regulatory compliance and financial transparency.",
    services: [
      "Statutory Audit (Companies Act, 2013)",
      "Tax Audit under Income Tax Act, 1961",
      "Internal Audit & Risk Assessment",
      "Forensic Audit & Investigation",
      "IT Audit & Information Systems Review",
      "Bank Branch Audits & RBI Compliance",
      "Revenue Audit & Cost Audit",
      "Due Diligence Review for M&A",
      "Stock Verification & Valuation",
      "Concurrent Audit for Banks",
    ],
  },
  {
    icon: FileText,
    title: "Taxation Services",
    id: "taxation",
    color: "bg-green-50 text-green-700",
    desc: "Expert taxation advisory spanning domestic and international tax regimes with end-to-end compliance support and strategic tax planning for optimal outcomes.",
    services: [
      "Direct Tax Planning & Advisory",
      "Corporate Tax Compliance & Filing",
      "GST Registration & Returns Filing",
      "GST Advisory & Refund Claims",
      "Transfer Pricing Advisory & Documentation",
      "International Tax & DTAA Planning",
      "UK Tax Outsourcing Services",
      "US Tax Filing & Accounting Support",
      "Tax Litigation & Dispute Resolution",
      "Personal Taxation for HNIs & NRIs",
    ],
  },
  {
    icon: TrendingUp,
    title: "Transaction & Regulatory Advisory",
    id: "transaction",
    color: "bg-orange-50 text-orange-700",
    desc: "End-to-end advisory for domestic and cross-border transactions with regulatory compliance expertise, ensuring smooth deal execution and value maximization.",
    services: [
      "Mergers & Acquisitions Advisory",
      "FEMA Consulting & Compliance",
      "RBI Liaison & Regulatory Approvals",
      "Company Formation & Registration",
      "Joint Venture Structuring & Advisory",
      "Due Diligence (Financial & Legal)",
      "Cross-border Transaction Advisory",
      "Foreign Investment Compliance",
      "Private Equity & Venture Capital Deals",
      "Business Transfer & Slump Sale Advisory",
    ],
  },
  {
    icon: Building,
    title: "Corporate Finance",
    id: "corporate-finance",
    color: "bg-purple-50 text-purple-700",
    desc: "Strategic corporate finance advisory to help businesses raise capital, grow through acquisitions, restructure operations, and maximize shareholder value.",
    services: [
      "M&A Financial Advisory & Structuring",
      "Fund Raising (Private Equity/Debt/VC)",
      "Business Valuations & Fairness Opinions",
      "Corporate Restructuring & Turnaround",
      "India Entry Strategy for MNCs",
      "Project Finance Advisory",
      "IPO & Capital Market Support",
      "GIFT City Investments & Structuring",
      "Financial Modeling & Forecasting",
      "Capital Structure Optimization",
    ],
  },
  {
    icon: Users,
    title: "Consultancy & CFO Services",
    id: "consultancy",
    color: "bg-teal-50 text-teal-700",
    desc: "Outsourced financial leadership and advisory solutions for businesses of all sizes, providing CFO-level expertise without the cost of a full-time executive.",
    services: [
      "Virtual CFO Services (Full & Fractional)",
      "ESOP Solutions & Administration",
      "Payroll Processing & Compliance",
      "IND-AS Conversion & Implementation",
      "Internal Control Assessment & Design",
      "Business Process Outsourcing (BPO)",
      "UK Accounting & Bookkeeping Services",
      "Financial Reporting & MIS Development",
      "Budgeting & Financial Planning",
      "Cash Flow Management & Optimization",
    ],
  },
  {
    icon: Globe,
    title: "Corporate & Legal Services",
    id: "legal",
    color: "bg-red-50 text-red-700",
    desc: "Comprehensive corporate and legal advisory for businesses navigating complex regulatory environments, ensuring compliance and minimizing legal risks.",
    services: [
      "Company Law Compliance & Filings",
      "Corporate Secretarial Services",
      "Offshore Company Structuring",
      "Cross-border Legal Transactions",
      "Contract Review & Drafting",
      "Regulatory Filings & Compliance",
      "Labour Law Advisory & Compliance",
      "Intellectual Property Advisory",
      "LLP & Partnership Compliance",
      "NCLT & Corporate Insolvency Matters",
    ],
  },
];

const engagementProcess = [
  {
    title: "Discovery & Scoping",
    detail: "We assess your business stage, compliance posture, and decision priorities before proposing the scope. This includes detailed discussions with key stakeholders and analysis of existing systems.",
    icon: Target,
  },
  {
    title: "Service Blueprint",
    detail: "A partner-led team prepares timelines, dependencies, deliverables, and governance checkpoints. Every project plan includes clear milestones and success criteria.",
    icon: PieChart,
  },
  {
    title: "Execution",
    detail: "Domain experts execute with periodic reviews, status updates, and proactive issue management. We maintain transparent communication throughout the engagement.",
    icon: Zap,
  },
  {
    title: "Closure & Improvement",
    detail: "We provide implementation guidance and recommendations for sustained control and growth. Our support continues beyond delivery with ongoing advisory as needed.",
    icon: RefreshCcw,
  },
];

const serviceDifferentiators = [
  "Partner-level involvement in critical milestones and deliverables",
  "Integrated advisory across tax, finance, legal, and compliance domains",
  "Sector-informed recommendations grounded in practical business realities",
  "Detailed documentation and audit-ready working papers for all engagements",
  "Predictable turnaround through structured workflows and project management",
  "Transparent commercials with clear scope boundaries and no hidden costs",
  "Access to global expertise through GGI network for cross-border matters",
  "Technology-enabled delivery leveraging modern tools and platforms",
];

const industryExpertise = [
  { name: "Real Estate & Construction", desc: "REIT advisory, project finance, GST optimization" },
  { name: "Information Technology", desc: "ESOP structuring, international tax, transfer pricing" },
  { name: "Healthcare & Pharmaceuticals", desc: "Regulatory compliance, M&A, funding advisory" },
  { name: "Banking & Financial Services", desc: "RBI compliance, concurrent audit, risk advisory" },
  { name: "Manufacturing", desc: "Cost optimization, export incentives, GST compliance" },
  { name: "E-commerce & Retail", desc: "Multi-state GST, inventory valuation, funding" },
  { name: "Startups & Emerging Companies", desc: "Fundraising, ESOPs, virtual CFO services" },
  { name: "Hospitality & Tourism", desc: "Asset restructuring, tax planning, compliance" },
];

const serviceFaqs = [
  {
    question: "Can RNM support both one-time and ongoing mandates?",
    answer:
      "Yes. We handle one-time engagements such as due diligence, transaction support, and system implementations, as well as long-term retainers for audit, tax, compliance, and CFO advisory services. Our flexible engagement models are designed to meet your specific needs.",
  },
  {
    question: "Do you provide cross-border advisory support?",
    answer:
      "Absolutely. Through our global network as a member of Geneva Group International (GGI) and our in-house international tax team, we support FEMA compliance, international tax planning, inbound/outbound structuring, transfer pricing, and multi-jurisdiction coordination for cross-border transactions.",
  },
  {
    question: "How quickly can a project be started?",
    answer:
      "After the initial consultation and scope alignment, most mandates can be mobilized within 1-2 weeks with a dedicated team and comprehensive kickoff plan. For urgent matters, we can often deploy resources on an expedited basis.",
  },
  {
    question: "Which industries do you typically work with?",
    answer:
      "Our teams regularly support real estate, manufacturing, healthcare, IT/ITES, banking & financial services, insurance, hospitality, e-commerce, and emerging startups. We have dedicated sector teams with deep industry knowledge.",
  },
  {
    question: "What is your fee structure?",
    answer:
      "We offer transparent fee structures with clear scope boundaries. Depending on the nature of the engagement, we may work on a fixed-fee, time-and-materials, or retainer basis. All commercial terms are discussed and agreed upon before commencement of work.",
  },
  {
    question: "How do you ensure quality and confidentiality?",
    answer:
      "We have robust quality control processes including partner reviews, technical consultations, and structured methodologies. All team members sign confidentiality agreements, and we have secure systems for handling sensitive information in compliance with professional standards.",
  },
];

const caseStudies = [
  {
    title: "Cross-Border M&A Advisory",
    industry: "Manufacturing",
    challenge: "A UK-based company sought to acquire an Indian manufacturing firm valued at ₹500 Cr, requiring complex cross-border structuring.",
    solution: "RNM provided end-to-end advisory including financial due diligence, FEMA compliance, valuation support, tax structuring, and post-merger integration planning.",
    outcome: "Successfully completed the transaction within 4 months with optimal tax structuring, saving the client approximately ₹15 Cr in tax costs.",
  },
  {
    title: "GST Optimization for E-commerce",
    industry: "E-commerce",
    challenge: "Complex multi-state GST compliance across 500+ vendors and 20+ warehouses with significant input tax credit accumulation.",
    solution: "Implemented automated GST reconciliation system, optimized supply chain for GST efficiency, and restructured vendor agreements.",
    outcome: "Reduced GST liability by 18%, improved compliance efficiency by 40%, and released ₹8 Cr of blocked working capital.",
  },
  {
    title: "Fundraising for SaaS Startup",
    industry: "Technology",
    challenge: "Series B fundraising target of $30 Mn for a B2B SaaS company with complex ESOP and investor structure.",
    solution: "Prepared comprehensive financial models, investor pitch materials, conducted valuation, and led negotiations with PE firms.",
    outcome: "Secured $35 Mn at favorable valuation with strategic investor partnership, and implemented robust ESOP administration.",
  },
];

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-[#1a0808] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-medium tracking-wider uppercase mb-6">
              <Award size={12} className="text-[#c4793a]" />
              Comprehensive Financial Solutions
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Comprehensive Financial<br />
              <span className="text-[#c4793a]">Advisory Services</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              From statutory audit to global M&A advisory, RNM delivers expert professional services across every dimension of financial and corporate governance. Our multidisciplinary team brings deep sector expertise and a commitment to delivering measurable value.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#8B1A1A] text-sm font-semibold uppercase tracking-widest mb-3">Our Services</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Full Spectrum of Professional Services
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We offer a comprehensive range of services across audit, tax, advisory, and corporate finance, delivered by our team of 200+ professionals.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, i) => {
              const Icon = category.icon;
              return (
                <div
                  key={i}
                  id={category.id}
                  className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
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

      {/* Industry Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#8B1A1A] text-sm font-semibold uppercase tracking-widest mb-3">Industry Focus</p>
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
              Sector-Specific Expertise
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our teams bring deep industry knowledge, understanding the unique challenges and opportunities in each sector we serve.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryExpertise.map((industry, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-[#8B1A1A]/30 hover:shadow-md transition-all"
                data-testid={`industry-${i}`}
              >
                <h3 className="font-semibold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-sm text-gray-500">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery model */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[#8B1A1A] text-sm font-semibold uppercase tracking-widest mb-3">Delivery Model</p>
            <h2 className="font-serif text-3xl font-bold text-gray-900">How We Deliver Value</h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              Our structured approach ensures consistent quality, timely delivery, and measurable outcomes for every engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {engagementProcess.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  className="rounded-xl border border-gray-100 bg-white p-6 hover:border-[#8B1A1A]/30 hover:shadow-md transition-all"
                  data-testid={`engagement-step-${i}`}
                >
                  <div className="w-12 h-12 bg-[#8B1A1A]/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={20} className="text-[#8B1A1A]" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#8B1A1A] text-white text-sm font-semibold flex items-center justify-center mb-3 -mt-8 self-end">
                    {i + 1}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.detail}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6 md:p-8">
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

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#8B1A1A] text-sm font-semibold uppercase tracking-widest mb-3">Case Studies</p>
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Explore how we've helped clients across industries achieve their financial and strategic objectives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 p-6 hover:border-[#8B1A1A]/30 hover:shadow-lg transition-all"
                data-testid={`case-study-${i}`}
              >
                <div className="bg-[#8B1A1A]/10 rounded-lg px-4 py-2 inline-block mb-4">
                  <span className="text-[#8B1A1A] text-xs font-semibold uppercase tracking-wider">{study.industry}</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-4">{study.title}</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-semibold text-gray-700 flex items-center gap-1">
                      <Target size={12} /> Challenge:
                    </span>
                    <p className="text-sm text-gray-600 mt-1">{study.challenge}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-gray-700 flex items-center gap-1">
                      <Briefcase size={12} /> Solution:
                    </span>
                    <p className="text-sm text-gray-600 mt-1">{study.solution}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#8B1A1A] flex items-center gap-1">
                      <Award size={12} /> Outcome:
                    </span>
                    <p className="text-sm text-[#8B1A1A] font-medium mt-1">{study.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[#8B1A1A] text-sm font-semibold uppercase tracking-widest mb-3">FAQs</p>
            <h2 className="font-serif text-3xl font-bold text-gray-900">Common Service Questions</h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              Find answers to frequently asked questions about our services and engagement process.
            </p>
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
      <section className="py-20 bg-gradient-to-r from-[#8B1A1A] to-[#6b1010] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 mb-8 text-lg max-w-2xl mx-auto">
            Talk to one of our experts about your specific requirements and discover how RNM can help you achieve your business objectives.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#8B1A1A] font-semibold px-6 py-3 rounded hover:bg-gray-100 transition-colors"
              data-testid="button-services-cta"
            >
              Get In Touch
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border border-white/50 text-white font-medium px-6 py-3 rounded hover:bg-white/10 transition-colors"
              data-testid="button-services-about"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}