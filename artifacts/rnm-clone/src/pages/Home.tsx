import { Link } from "wouter";
import { ArrowRight, Shield, Award, Globe, Users, TrendingUp, FileText, Building, CheckCircle, ChevronRight } from "lucide-react";

const stats = [
  { value: "77+", label: "Years of Experience" },
  { value: "200+", label: "Professionals" },
  { value: "6", label: "Office Locations" },
  { value: "100+", label: "Countries via GGI" },
];

const services = [
  {
    icon: Shield,
    title: "Audit & Business Advisory",
    desc: "Statutory audit, internal audit, forensic audit, IT audit, and bank audit services with meticulous attention to detail.",
    href: "/services/audit",
  },
  {
    icon: FileText,
    title: "Taxation Services",
    desc: "Direct tax, indirect tax, GST advisory, UK & US tax outsourcing with comprehensive compliance support.",
    href: "/services/taxation",
  },
  {
    icon: TrendingUp,
    title: "Transaction Advisory",
    desc: "M&A consulting, FEMA advisory, due diligence, and company formation for domestic and cross-border deals.",
    href: "/services/transaction",
  },
  {
    icon: Building,
    title: "Corporate Finance",
    desc: "M&A advisory, fund raising, valuations, restructuring, and India entry strategy for global businesses.",
    href: "/services/corporate-finance",
  },
  {
    icon: Users,
    title: "Consultancy",
    desc: "Virtual CFO services, ESOP solutions, payroll, IND-AS conversion, and UK/US accounting outsourcing.",
    href: "/services/consultancy",
  },
  {
    icon: Globe,
    title: "Corporate & Legal",
    desc: "Company law compliance, offshore structuring, and complex cross-border transaction advisory.",
    href: "/services/legal",
  },
];

const clients = [
  "DLF Ltd.", "ITC Ltd.", "BSNL", "Oriental Insurance Co.", "United India Insurance",
  "Indian Oil Corporation", "Air India", "Steel Authority of India",
];

const whyUs = [
  "Established in 1946 with 77+ years of trusted advisory",
  "200+ professionals including CAs, CSs, Lawyers, MBAs & CFAs",
  "Member of Geneva Group International (GGI) — 100 countries",
  "Offices across Delhi, Gurugram, Mumbai, Bengaluru, Raipur & London",
  "Expertise across mid-market, large corporates, PSUs & startups",
  "Transparent fee structure with no hidden costs",
];

const industries = [
  "Hospitality", "Information Technology", "Defence", "Healthcare",
  "Automobile", "Real Estate", "Telecommunications", "Agriculture",
  "Trading", "Manufacturing", "Banking", "Insurance",
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-[#1a0808] to-[#2d0a0a] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-medium tracking-wider uppercase mb-6">
              <Award size={12} className="text-[#c4793a]" />
              Established 1946 · Top Financial Advisory Firm in India
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Trusted Financial <br />
              <span className="text-[#c4793a]">Advisors</span> Since<br />
              Independence
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
              R N Marwah & Co. LLP has been India's trusted Chartered Accountancy partner for over 77 years — delivering expert audit, tax, advisory, and corporate finance services.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#8B1A1A] hover:bg-[#7a1515] text-white font-medium px-6 py-3 rounded transition-colors"
                data-testid="button-hero-contact"
              >
                Get In Touch
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-white/30 text-white hover:bg-white/10 font-medium px-6 py-3 rounded transition-colors"
                data-testid="button-hero-about"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative border-t border-white/10 bg-black/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="text-center" data-testid={`stat-${i}`}>
                  <div className="text-3xl md:text-4xl font-serif font-bold text-[#c4793a]">{stat.value}</div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#8B1A1A] text-sm font-semibold uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Professional Services
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              From statutory compliance to strategic M&A advisory, we deliver end-to-end financial and legal services tailored to your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Link
                  key={i}
                  href={service.href}
                  className="group bg-white rounded-lg p-6 border border-gray-100 hover:border-[#8B1A1A]/30 hover:shadow-lg transition-all duration-300"
                  data-testid={`card-service-${i}`}
                >
                  <div className="w-12 h-12 bg-[#8B1A1A]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#8B1A1A] transition-colors">
                    <Icon size={22} className="text-[#8B1A1A] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#8B1A1A] transition-colors">{service.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{service.desc}</p>
                  <div className="flex items-center gap-1 text-[#8B1A1A] text-sm font-medium">
                    Learn More <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-[#8B1A1A] text-sm font-semibold uppercase tracking-widest mb-3">About RNM</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                India's Trusted Financial Advisory Partner Since 1946
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Founded in the pre-independence era, R N Marwah & Co. LLP has grown to become one of India's leading Chartered Accountancy firms. With a team of 200+ professionals spanning Chartered Accountants, Company Secretaries, Lawyers, MBAs, and CFAs, we provide comprehensive financial and advisory services.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                As an Independent Member of the Geneva Group International (GGI), we offer our clients seamless access to expert advisory in 100+ countries through 592+ member offices worldwide.
              </p>
              <ul className="space-y-3 mb-8">
                {whyUs.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600" data-testid={`why-us-${i}`}>
                    <CheckCircle size={16} className="text-[#8B1A1A] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#8B1A1A] text-white font-medium px-5 py-2.5 rounded hover:bg-[#7a1515] transition-colors"
                data-testid="button-learn-more"
              >
                Learn More About Us
                <ArrowRight size={15} />
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#8B1A1A] to-[#2d0a0a] rounded-xl p-8 text-white">
                <h3 className="font-serif text-2xl font-bold mb-6">Our Global Network</h3>
                <div className="grid grid-cols-2 gap-5 mb-8">
                  {[
                    { n: "592+", l: "Member Offices" },
                    { n: "100", l: "Countries" },
                    { n: "20,500+", l: "Employees Globally" },
                    { n: "6", l: "Indian Offices" },
                  ].map((item, i) => (
                    <div key={i} className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-[#f0b070]">{item.n}</div>
                      <div className="text-sm text-gray-300 mt-1">{item.l}</div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-white/20 pt-5">
                  <p className="text-sm text-gray-300 italic">
                    "Member of Geneva Group International (GGI) — headquartered in Zurich, Switzerland"
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#c4793a]/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[#c4793a] text-sm font-semibold uppercase tracking-widest mb-3">Our Reach</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Serving clients across diverse sectors, irrespective of size — from startups to large corporates and PSUs.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry, i) => (
              <div
                key={i}
                className="px-5 py-2.5 bg-white/10 border border-white/10 rounded-full text-sm font-medium hover:bg-[#8B1A1A] hover:border-[#8B1A1A] transition-colors cursor-default"
                data-testid={`industry-tag-${i}`}
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notable Clients */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[#8B1A1A] text-sm font-semibold uppercase tracking-widest mb-3">Trusted By</p>
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">Our Notable Clients</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              We have served leading organisations across India's public and private sectors for decades.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {clients.map((client, i) => (
              <div
                key={i}
                className="border border-gray-100 rounded-lg py-5 px-4 text-center font-semibold text-gray-700 hover:border-[#8B1A1A]/40 hover:text-[#8B1A1A] hover:bg-orange-50/50 transition-all"
                data-testid={`client-${i}`}
              >
                {client}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/clients"
              className="inline-flex items-center gap-2 text-[#8B1A1A] font-medium hover:underline"
              data-testid="button-view-all-clients"
            >
              View All Clients <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#8B1A1A] to-[#6b1010] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Ready to Work With India's Trusted CA Firm?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Let's discuss how RNM can help navigate your financial, tax, and compliance challenges.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#8B1A1A] font-semibold px-6 py-3 rounded hover:bg-gray-100 transition-colors"
              data-testid="button-cta-contact"
            >
              Contact Us Today
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border border-white/50 text-white font-medium px-6 py-3 rounded hover:bg-white/10 transition-colors"
              data-testid="button-cta-about"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
