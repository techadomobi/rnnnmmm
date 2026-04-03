import { Link } from "wouter";
import { Building2, Users, TrendingUp, Globe, Star, Quote, ChevronRight, CheckCircle, ArrowRight, Award, PieChart, BarChart3, Handshake, Shield, Zap } from "lucide-react";

const clientGroups = [
  {
    type: "Large Corporates",
    desc: "We serve India's largest corporations with comprehensive audit, tax, and advisory services.",
    clients: ["DLF Ltd.", "ITC Ltd.", "BSNL", "Oriental Insurance Co.", "United India Insurance Co.", "Indian Oil Corporation", "Steel Authority of India Ltd.", "Air India Ltd.", "Power Finance Corporation", "REC Ltd.", "NTPC Ltd.", "Coal India Ltd."],
  },
  {
    type: "Public Sector Undertakings",
    desc: "Trusted by leading PSUs for statutory compliance, advisory, and strategic consulting.",
    clients: ["Indian Railways", "ONGC", "Coal India", "NTPC", "GAIL", "SAIL", "Bharat Petroleum", "Hindustan Petroleum", "MTNL", "Doordarshan", "BHEL", "IOC"],
  },
  {
    type: "Banking & Insurance",
    desc: "Specialized services for banks, insurance companies, and NBFCs across regulatory compliance.",
    clients: ["Oriental Insurance", "United India Insurance", "National Insurance", "New India Assurance", "Punjab National Bank", "UCO Bank", "Central Bank of India", "Bank of India", "Indian Bank", "HDFC Bank"],
  },
  {
    type: "Mid-Market & Startups",
    desc: "Helping growing businesses scale with virtual CFO, fundraising, and compliance services.",
    clients: ["Leading E-commerce Companies", "Tech Startups (Series A-C)", "FMCG Companies", "Healthcare Groups", "Real Estate Developers", "Manufacturing Units", "Hospitality Chains", "EdTech Platforms", "Fintech Companies", "SaaS Businesses"],
  },
];

const industries = [
  { icon: Building2, name: "Real Estate", desc: "Audit, tax, REIT advisory, and M&A for developers and property funds." },
  { icon: Globe, name: "Information Technology", desc: "ESOP structuring, international tax, transfer pricing for IT companies." },
  { icon: Users, name: "Healthcare", desc: "Financial advisory, regulatory compliance for hospitals and pharma." },
  { icon: TrendingUp, name: "Banking & Insurance", desc: "Statutory audit, RBI compliance, and risk advisory services." },
  { icon: CheckCircle, name: "Manufacturing", desc: "Cost audit, GST compliance, export incentives, and automation." },
  { icon: CheckCircle, name: "Hospitality", desc: "Financial restructuring, tax planning for hotel chains and resorts." },
  { icon: CheckCircle, name: "Defence", desc: "Government contract advisory, compliance, and offset obligations." },
  { icon: CheckCircle, name: "Telecommunications", desc: "Regulatory advisory, spectrum valuation, and licensing support." },
  { icon: CheckCircle, name: "E-commerce", desc: "Multi-state GST, inventory valuation, and marketplace compliance." },
  { icon: CheckCircle, name: "Education", desc: "Compliance, funding advisory, and institutional structuring." },
  { icon: CheckCircle, name: "Energy", desc: "Project finance, regulatory compliance, and renewable energy advisory." },
  { icon: CheckCircle, name: "Automobile", desc: "GST optimization, supply chain advisory, and EV transition support." },
];

const testimonials = [
  {
    quote: "RNM has been our trusted financial partner for over two decades. Their expertise in tax planning and compliance has been invaluable to our growth journey, helping us navigate complex regulatory landscapes with confidence.",
    author: "Rajesh Kumar",
    role: "CFO",
    company: "Leading Real Estate Developer",
    rating: 5,
  },
  {
    quote: "The team's deep understanding of international taxation helped us structure our overseas investments efficiently. Their cross-border expertise is truly world-class, and they delivered significant tax savings for our organization.",
    author: "Sarah Mitchell",
    role: "Finance Director",
    company: "Multinational Manufacturing Corp",
    rating: 5,
  },
  {
    quote: "Their virtual CFO services have transformed how we manage our finances. Professional, responsive, and incredibly knowledgeable — they've become an extension of our leadership team.",
    author: "Amit Sharma",
    role: "Founder & CEO",
    company: "Tech Startup (Series B)",
    rating: 5,
  },
  {
    quote: "RNM's audit team is thorough, professional, and always available to address our queries. They bring valuable insights beyond compliance that have helped improve our internal controls.",
    author: "Priya Menon",
    role: "Head of Finance",
    company: "Healthcare Group",
    rating: 5,
  },
  {
    quote: "We engaged RNM for a complex cross-border acquisition. Their due diligence was comprehensive, and they identified key risks that saved us from a potentially costly mistake.",
    author: "David Chen",
    role: "Investment Director",
    company: "Private Equity Firm",
    rating: 5,
  },
  {
    quote: "The ESOP advisory team at RNM helped us design and implement a comprehensive employee stock option plan that has been instrumental in attracting and retaining top talent.",
    author: "Neha Gupta",
    role: "CHRO",
    company: "Unicorn Startup",
    rating: 5,
  },
];

const caseStudies = [
  {
    title: "Cross-Border M&A Advisory",
    client: "Confidential - UK Manufacturing",
    industry: "Manufacturing",
    challenge: "A UK-based company sought to acquire an Indian manufacturing firm valued at ₹500 Cr, requiring complex cross-border structuring and regulatory approvals.",
    solution: "RNM provided end-to-end advisory including financial due diligence, FEMA compliance, valuation support, tax structuring, and post-merger integration planning.",
    outcome: "Successfully completed the transaction within 4 months with optimal tax structuring, saving the client approximately ₹15 Cr in tax costs.",
    metrics: ["₹500 Cr deal value", "4 months timeline", "₹15 Cr tax savings"],
  },
  {
    title: "GST Optimization for E-commerce",
    client: "Leading E-commerce Platform",
    industry: "E-commerce",
    challenge: "Complex multi-state GST compliance across 500+ vendors and 20+ warehouses with significant input tax credit accumulation and compliance challenges.",
    solution: "Implemented automated GST reconciliation system, optimized supply chain for GST efficiency, restructured vendor agreements, and trained internal teams.",
    outcome: "Reduced GST liability by 18%, improved compliance efficiency by 40%, and released ₹8 Cr of blocked working capital.",
    metrics: ["18% GST reduction", "40% efficiency gain", "₹8 Cr working capital"],
  },
  {
    title: "Fundraising for SaaS Startup",
    client: "Confidential - B2B SaaS",
    industry: "Technology",
    challenge: "Series B fundraising target of $30 Mn for a B2B SaaS company with complex ESOP structure and need for strategic investor partnership.",
    solution: "Prepared comprehensive financial models, investor pitch materials, conducted valuation, led negotiations with PE firms, and structured ESOP pool.",
    outcome: "Secured $35 Mn at favorable valuation with strategic investor partnership, and implemented robust ESOP administration for 200+ employees.",
    metrics: ["$35 Mn raised", "200+ ESOP beneficiaries", "Strategic investor"],
  },
  {
    title: "Turnaround Advisory for Manufacturing",
    client: "Confidential - Auto Components",
    industry: "Manufacturing",
    challenge: "A ₹200 Cr manufacturing company facing cash flow issues, declining margins, and strained lender relationships needed comprehensive restructuring.",
    solution: "Conducted operational review, renegotiated debt terms, optimized working capital, implemented cost controls, and advised on product mix rationalization.",
    outcome: "Returned to profitability within 18 months, improved EBITDA margin by 8%, and restored healthy lender relationships.",
    metrics: ["8% margin improvement", "18 months to profitability", "Debt restructuring"],
  },
];

const faqs = [
  {
    question: "What industries does RNM specialize in?",
    answer: "RNM serves a diverse range of industries including real estate, IT, healthcare, banking & insurance, manufacturing, hospitality, defence, telecommunications, e-commerce, education, energy, and automobiles. Our multidisciplinary team brings specialized expertise to each sector, with dedicated practice groups for key industries.",
  },
  {
    question: "How long has RNM been serving clients?",
    answer: "R N Marwah & Co. LLP has been serving clients since 1946 — over 77 years of trusted professional service. Many of our client relationships span multiple decades, reflecting the deep trust and value we deliver. Our founder Late Mr. R.N. Marwah established the firm even before India's independence.",
  },
  {
    question: "Does RNM work with startups and SMEs?",
    answer: "Absolutely. While we serve large corporates and PSUs, we have dedicated teams for mid-market companies and startups. Our virtual CFO services, fundraising advisory, and ESOP solutions are particularly popular with growing businesses. We've helped numerous startups from seed stage to IPO.",
  },
  {
    question: "Can RNM help with international business expansion?",
    answer: "Yes. As an Independent Member of Geneva Group International (GGI), we provide seamless access to expert advisory in 100+ countries through 592+ member offices. We specialize in India entry strategy for foreign companies and outbound investments by Indian businesses, handling FEMA, international tax, and cross-border structuring.",
  },
  {
    question: "What is RNM's approach to client relationships?",
    answer: "We believe in building long-term partnerships, not just transactional relationships. Our partner-led delivery model ensures senior-level attention on every engagement. We maintain transparent communication, provide proactive advice, and work as an extension of your team to achieve your business objectives.",
  },
  {
    question: "How does RNM ensure quality and confidentiality?",
    answer: "We have robust quality control processes including multi-level reviews, technical consultations, and structured methodologies. All team members sign strict confidentiality agreements, and we have secure systems for handling sensitive information. We comply with all professional standards and regulatory requirements.",
  },
];

const trustStats = [
  { stat: "77+", label: "Years of Trusted Service", desc: "Serving clients since before India's independence", icon: Award },
  { stat: "500+", label: "Active Client Relationships", desc: "Across industries and geographies", icon: Handshake },
  { stat: "95%", label: "Client Retention Rate", desc: "Reflecting the trust clients place in RNM", icon: Shield },
  { stat: "200+", label: "Successful Transactions", desc: "M&A, fundraising, and restructuring deals", icon: Zap },
];

export default function Clients() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-[#1a0808] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-medium tracking-wider uppercase mb-6">
              <Handshake size={12} className="text-[#c4793a]" />
              Trusted Partnerships
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Trusted by India's<br />
              <span className="text-[#c4793a]">Finest Organisations</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              From startups to Fortune 500 companies and PSUs — RNM has served a diverse portfolio of clients across all sectors and sizes for over 77 years, building lasting partnerships based on trust and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustStats.map((item, i) => (
              <div key={i} className="text-center p-4" data-testid={`trust-stat-${i}`}>
                <div className="w-12 h-12 bg-[#8B1A1A]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <item.icon size={22} className="text-[#8B1A1A]" />
                </div>
                <div className="font-serif text-3xl font-bold text-[#8B1A1A] mb-2">{item.stat}</div>
                <div className="font-semibold text-gray-900 text-sm mb-1">{item.label}</div>
                <div className="text-xs text-gray-500">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#8B1A1A] text-sm font-semibold uppercase tracking-widest mb-3">Client Portfolio</p>
            <h2 className="font-serif text-3xl font-bold text-gray-900">Our Diverse Client Base</h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              We serve organizations of all sizes across industries, from large corporates and PSUs to high-growth startups and mid-market enterprises.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clientGroups.map((group, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                data-testid={`client-group-${i}`}
              >
                <div className="bg-[#8B1A1A] px-6 py-4">
                  <h3 className="text-white font-semibold">{group.type}</h3>
                  <p className="text-white/80 text-xs mt-1">{group.desc}</p>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {group.clients.map((client, j) => (
                      <span
                        key={j}
                        className="px-3 py-1.5 bg-gray-50 border border-gray-100 rounded text-sm text-gray-700 hover:border-[#8B1A1A]/30 hover:bg-orange-50/50 transition-colors"
                        data-testid={`client-tag-${i}-${j}`}
                      >
                        {client}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#8B1A1A] text-sm font-semibold uppercase tracking-widest mb-3">Testimonials</p>
            <h2 className="font-serif text-3xl font-bold text-gray-900">What Our Clients Say</h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              Don't just take our word for it — hear from the business leaders who have trusted RNM with their financial advisory needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition-shadow"
                data-testid={`testimonial-${i}`}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <Quote className="text-[#8B1A1A]/20 w-8 h-8 mb-3" />
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic line-clamp-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{testimonial.author}</p>
                  <p className="text-xs text-gray-500">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#8B1A1A] text-sm font-semibold uppercase tracking-widest mb-3">Case Studies</p>
            <h2 className="font-serif text-3xl font-bold text-gray-900">Success Stories</h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              Explore how we've helped clients across industries achieve their financial and strategic objectives with measurable results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((study, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 p-6 hover:border-[#8B1A1A]/30 hover:shadow-lg transition-all"
                data-testid={`case-study-${i}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-[#8B1A1A]/10 rounded-lg px-4 py-2">
                    <span className="text-[#8B1A1A] text-xs font-semibold uppercase tracking-wider">{study.industry}</span>
                  </div>
                  <span className="text-xs text-gray-400">{study.client}</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-4">{study.title}</h3>
                <div className="space-y-3 mb-4">
                  <div>
                    <span className="text-xs font-semibold text-gray-700">Challenge:</span>
                    <p className="text-sm text-gray-600 mt-1">{study.challenge}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-gray-700">Solution:</span>
                    <p className="text-sm text-gray-600 mt-1">{study.solution}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#8B1A1A]">Outcome:</span>
                    <p className="text-sm text-[#8B1A1A] font-medium mt-1">{study.outcome}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                  {study.metrics.map((metric, j) => (
                    <span key={j} className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full font-medium">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#8B1A1A] text-sm font-semibold uppercase tracking-widest mb-3">Our Reach</p>
            <h2 className="font-serif text-3xl font-bold text-gray-900">Industries We Serve</h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              Our multidisciplinary team brings deep sector expertise, understanding the unique challenges and opportunities in each industry we serve.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <div
                  key={i}
                  className="bg-gray-50 border border-gray-100 rounded-xl p-5 hover:bg-white hover:border-[#8B1A1A]/30 hover:shadow-md transition-all"
                  data-testid={`industry-${i}`}
                >
                  <Icon className="text-[#8B1A1A] w-8 h-8 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">{industry.name}</h3>
                  <p className="text-sm text-gray-500">{industry.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#8B1A1A] text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="font-serif text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              Find answers to common questions about our clients, services, and approach.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="bg-white rounded-xl border border-gray-100 group"
                data-testid={`faq-${i}`}
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-5 pb-5 pt-0">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#8B1A1A] to-[#6b1010] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Join Our Growing Client Portfolio
          </h2>
          <p className="text-white/80 mb-8 text-lg max-w-2xl mx-auto">
            Experience the RNM difference — expert advisory, transparent communication, and results that matter. Let us help you achieve your business goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#8B1A1A] font-semibold px-6 py-3 rounded hover:bg-gray-100 transition-colors"
              data-testid="button-clients-contact"
            >
              Become a Client
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-white/50 text-white font-medium px-6 py-3 rounded hover:bg-white/10 transition-colors"
              data-testid="button-clients-services"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}