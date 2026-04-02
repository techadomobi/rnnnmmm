import { Link } from "wouter";
import { Building2, Users, TrendingUp, Globe, Star, Quote, ChevronRight, CheckCircle, ArrowRight } from "lucide-react";

const clientGroups = [
  {
    type: "Large Corporates",
    clients: ["DLF Ltd.", "ITC Ltd.", "BSNL", "Oriental Insurance Co.", "United India Insurance Co.", "Indian Oil Corporation", "Steel Authority of India Ltd.", "Air India Ltd.", "Power Finance Corporation", "REC Ltd."],
  },
  {
    type: "Public Sector Undertakings",
    clients: ["Indian Railways", "ONGC", "Coal India", "NTPC", "GAIL", "SAIL", "Bharat Petroleum", "Hindustan Petroleum", "MTNL", "Doordarshan"],
  },
  {
    type: "Banking & Insurance",
    clients: ["Oriental Insurance", "United India Insurance", "National Insurance", "New India Assurance", "Punjab National Bank", "UCO Bank", "Central Bank of India"],
  },
  {
    type: "Mid-Market & Startups",
    clients: ["Leading E-commerce Companies", "Tech Startups", "FMCG Companies", "Healthcare Groups", "Real Estate Developers", "Manufacturing Units", "Hospitality Chains"],
  },
];

const industries = [
  { icon: Building2, name: "Real Estate", desc: "Audit, tax, and M&A advisory for developers and REITs." },
  { icon: Globe, name: "Information Technology", desc: "Tax optimization and compliance for IT companies." },
  { icon: Users, name: "Healthcare", desc: "Financial advisory for hospitals and pharmaceutical firms." },
  { icon: TrendingUp, name: "Banking & Insurance", desc: "Statutory audit and regulatory compliance services." },
  { icon: CheckCircle, name: "Manufacturing", desc: "Cost audit, GST compliance, and export incentives." },
  { icon: CheckCircle, name: "Hospitality", desc: "Financial restructuring and tax planning for hotel chains." },
  { icon: CheckCircle, name: "Defence", desc: "Government contract advisory and compliance." },
  { icon: CheckCircle, name: "Telecommunications", desc: "Regulatory advisory and spectrum valuation support." },
];

const testimonials = [
  {
    quote: "RNM has been our trusted financial partner for over two decades. Their expertise in tax planning and compliance has been invaluable to our growth journey.",
    author: "CFO",
    company: "Leading Real Estate Developer",
  },
  {
    quote: "The team's deep understanding of international taxation helped us structure our overseas investments efficiently. Highly recommended for cross-border transactions.",
    author: "Finance Director",
    company: "Multinational Manufacturing Corp",
  },
  {
    quote: "Their virtual CFO services have transformed how we manage our finances. Professional, responsive, and incredibly knowledgeable.",
    author: "Founder & CEO",
    company: "Tech Startup",
  },
];

const caseStudies = [
  {
    title: "Cross-Border M&A Advisory",
    client: "Confidential",
    challenge: "A UK-based company sought to acquire an Indian manufacturing firm valued at ₹500 Cr.",
    solution: "RNM provided end-to-end advisory including due diligence, FEMA compliance, valuation, and post-merger integration support.",
    outcome: "Successfully completed the transaction within 4 months with optimal tax structuring.",
  },
  {
    title: "GST Optimization for E-commerce",
    client: "Leading E-commerce Platform",
    challenge: "Complex multi-state GST compliance across 500+ vendors and 20+ warehouses.",
    solution: "Implemented automated GST reconciliation system and optimized input tax credit claims.",
    outcome: "Reduced GST liability by 18% and improved compliance efficiency by 40%.",
  },
  {
    title: "Fundraising for SaaS Startup",
    client: "Confidential",
    challenge: "Series B fundraising target of $30 Mn for a B2B SaaS company.",
    solution: "Prepared financial models, investor pitch materials, and led negotiations with PE firms.",
    outcome: "Secured $35 Mn at favorable valuation with strategic investor partnership.",
  },
];

const faqs = [
  {
    question: "What industries does RNM specialize in?",
    answer: "RNM serves a diverse range of industries including real estate, IT, healthcare, banking & insurance, manufacturing, hospitality, defence, and telecommunications. Our multidisciplinary team brings specialized expertise to each sector.",
  },
  {
    question: "How long has RNM been serving clients?",
    answer: "R N Marwah & Co. LLP has been serving clients since 1946 — over 77 years of trusted professional service. Many of our client relationships span multiple decades, reflecting the deep trust and value we deliver.",
  },
  {
    question: "Does RNM work with startups and SMEs?",
    answer: "Absolutely. While we serve large corporates and PSUs, we have dedicated teams for mid-market companies and startups. Our virtual CFO services and advisory solutions are particularly popular with growing businesses.",
  },
  {
    question: "Can RNM help with international business expansion?",
    answer: "Yes. As an Independent Member of Geneva Group International (GGI), we provide seamless access to expert advisory in 100+ countries through 592+ member offices. We specialize in India entry strategy for foreign companies and outbound investments by Indian businesses.",
  },
];

export default function Clients() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-[#1a0808] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-[#c4793a] text-sm font-semibold uppercase tracking-widest mb-4">Our Clients</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5">
              Trusted by India's Finest Organisations
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              From startups to Fortune 500 companies and PSUs — RNM has served a diverse portfolio of clients across all sectors and sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Client types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#8B1A1A] text-sm font-semibold uppercase tracking-widest mb-3">Client Portfolio</p>
            <h2 className="font-serif text-3xl font-bold text-gray-900">Our Diverse Client Base</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clientGroups.map((group, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden"
                data-testid={`client-group-${i}`}
              >
                <div className="bg-[#8B1A1A] px-6 py-4">
                  <h3 className="text-white font-semibold">{group.type}</h3>
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

      {/* Trust stats */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#8B1A1A] text-sm font-semibold uppercase tracking-widest mb-3">Client Trust</p>
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-10">Decades of Client Relationships</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { stat: "77+", label: "Years of Trusted Service", desc: "Serving clients since before India's independence" },
              { stat: "500+", label: "Active Client Relationships", desc: "Across industries and geographies" },
              { stat: "95%", label: "Client Retention Rate", desc: "Reflecting the trust clients place in RNM" },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100" data-testid={`trust-stat-${i}`}>
                <div className="font-serif text-3xl font-bold text-[#8B1A1A] mb-2">{item.stat}</div>
                <div className="font-semibold text-gray-900 text-sm mb-2">{item.label}</div>
                <div className="text-xs text-gray-500">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#8B1A1A] text-sm font-semibold uppercase tracking-widest mb-3">Testimonials</p>
            <h2 className="font-serif text-3xl font-bold text-gray-900">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 p-6 relative"
                data-testid={`testimonial-${i}`}
              >
                <Quote className="text-[#8B1A1A]/20 w-10 h-10 mb-4" />
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{testimonial.author}</p>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#8B1A1A] text-sm font-semibold uppercase tracking-widest mb-3">Case Studies</p>
            <h2 className="font-serif text-3xl font-bold text-gray-900">Success Stories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 p-6 hover:border-[#8B1A1A]/30 hover:shadow-md transition-all"
                data-testid={`case-study-${i}`}
              >
                <div className="bg-[#8B1A1A]/10 rounded-lg px-4 py-2 inline-block mb-4">
                  <span className="text-[#8B1A1A] text-xs font-semibold uppercase tracking-wider">Case Study</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">{study.title}</h3>
                <p className="text-xs text-gray-500 mb-4">Client: {study.client}</p>
                <div className="space-y-3">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[#c4793a] text-sm font-semibold uppercase tracking-widest mb-3">Our Reach</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Serving clients across diverse sectors, irrespective of size — from startups to large corporates and PSUs.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-[#8B1A1A]/50 transition-all"
                  data-testid={`industry-${i}`}
                >
                  <Icon className="text-[#c4793a] w-8 h-8 mb-3" />
                  <h3 className="font-semibold text-white mb-2">{industry.name}</h3>
                  <p className="text-sm text-gray-400">{industry.desc}</p>
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
          <p className="text-white/80 mb-8 text-lg">
            Experience the RNM difference — expert advisory, transparent communication, and results that matter.
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
