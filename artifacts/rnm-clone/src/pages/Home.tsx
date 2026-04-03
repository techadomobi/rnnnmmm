import { Link } from "wouter";
import { ArrowRight, Shield, Award, Globe, Users, TrendingUp, FileText, Building, CheckCircle, ChevronRight, Star, Zap, Target, Heart, Clock, BarChart3, PieChart, LineChart } from "lucide-react";

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
    desc: "Statutory audit, internal audit, forensic audit, IT audit, and bank audit services with meticulous attention to detail and regulatory compliance.",
    href: "/services/audit",
  },
  {
    icon: FileText,
    title: "Taxation Services",
    desc: "Direct tax, indirect tax, GST advisory, UK & US tax outsourcing with comprehensive compliance support and strategic tax planning.",
    href: "/services/taxation",
  },
  {
    icon: TrendingUp,
    title: "Transaction Advisory",
    desc: "M&A consulting, FEMA advisory, due diligence, and company formation for domestic and cross-border deals with end-to-end support.",
    href: "/services/transaction",
  },
  {
    icon: Building,
    title: "Corporate Finance",
    desc: "M&A advisory, fund raising, valuations, restructuring, and India entry strategy for global businesses seeking growth opportunities.",
    href: "/services/corporate-finance",
  },
  {
    icon: Users,
    title: "Consultancy",
    desc: "Virtual CFO services, ESOP solutions, payroll, IND-AS conversion, and UK/US accounting outsourcing for businesses of all sizes.",
    href: "/services/consultancy",
  },
  {
    icon: Globe,
    title: "Corporate & Legal",
    desc: "Company law compliance, offshore structuring, and complex cross-border transaction advisory with expert legal guidance.",
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

const approachSteps = [
  {
    icon: Target,
    title: "Understand Your Goals",
    desc: "We begin by deeply understanding your business objectives, challenges, and success metrics to tailor our approach."
  },
  {
    icon: BarChart3,
    title: "Analyze & Strategize",
    desc: "Our team conducts thorough analysis and develops comprehensive strategies aligned with your business needs."
  },
  {
    icon: Zap,
    title: "Execute with Precision",
    desc: "We implement solutions with meticulous attention to detail, ensuring timely delivery and quality outcomes."
  },
  {
    icon: LineChart,
    title: "Monitor & Optimize",
    desc: "Continuous monitoring and optimization ensure sustained value and adaptation to changing circumstances."
  }
];

const testimonials = [
  {
    quote: "RNM has been instrumental in guiding our financial strategy for over a decade. Their expertise in tax planning and compliance is unmatched.",
    author: "Rajesh Kumar",
    role: "CFO",
    company: "Leading Real Estate Group"
  },
  {
    quote: "The team's deep understanding of international taxation helped us structure our overseas investments efficiently. Highly recommended for cross-border transactions.",
    author: "Sarah Mitchell",
    role: "Finance Director",
    company: "UK-based Manufacturing Corp"
  },
  {
    quote: "Their virtual CFO services have transformed how we manage our finances. Professional, responsive, and incredibly knowledgeable team.",
    author: "Amit Sharma",
    role: "Founder & CEO",
    company: "Tech Startup"
  }
];

const insights = [
  {
    category: "Taxation",
    title: "Understanding GST Input Tax Credit: A Comprehensive Guide",
    date: "March 8, 2024",
    excerpt: "GST input tax credit remains one of the most complex yet crucial aspects of India's indirect taxation framework."
  },
  {
    category: "Regulatory",
    title: "FEMA Compliance for Foreign Investments in India",
    date: "February 28, 2024",
    excerpt: "Foreign exchange management remains a critical compliance area for businesses with international operations."
  },
  {
    category: "Consultancy",
    title: "Virtual CFO Services: The Future of Financial Management",
    date: "February 20, 2024",
    excerpt: "Small and mid-sized enterprises increasingly recognize the value of Virtual CFO services."
  }
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
              R N Marwah & Co. LLP has been India's trusted Chartered Accountancy partner for over 77 years — delivering expert audit, tax, advisory, and corporate finance services to businesses of all sizes.
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
              From statutory compliance to strategic M&A advisory, we deliver end-to-end financial and legal services tailored to your business needs across all industries.
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

      {/* Our Approach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#8B1A1A] text-sm font-semibold uppercase tracking-widest mb-3">Our Approach</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Deliver Value
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our proven methodology ensures consistent delivery of high-quality advisory services that drive measurable results for our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-[#8B1A1A]/30 hover:shadow-md transition-all"
                  data-testid={`approach-step-${i}`}
                >
                  <div className="w-12 h-12 bg-[#8B1A1A]/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={22} className="text-[#8B1A1A]" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
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
                Founded in the pre-independence era, R N Marwah & Co. LLP has grown to become one of India's leading Chartered Accountancy firms. With a team of 200+ professionals spanning Chartered Accountants, Company Secretaries, Lawyers, MBAs, and CFAs, we provide comprehensive financial and advisory services to businesses across all sectors.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                As an Independent Member of the Geneva Group International (GGI), we offer our clients seamless access to expert advisory in 100+ countries through 592+ member offices worldwide, enabling truly global support for international business needs.
              </p>
              <ul className="space-y-3 mb-8">
                {whyUs.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600" data-testid={`why-us-${i}`}>
                    <CheckCircle size={16} className="text-[#8B1A1A] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-[#8B1A1A] text-white font-medium px-5 py-2.5 rounded hover:bg-[#7a1515] transition-colors"
                  data-testid="button-learn-more"
                >
                  Learn More About Us
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 border border-[#8B1A1A] text-[#8B1A1A] font-medium px-5 py-2.5 rounded hover:bg-[#8B1A1A]/5 transition-colors"
                  data-testid="button-view-services"
                >
                  View All Services
                </Link>
              </div>
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

      {/* Client Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#8B1A1A] text-sm font-semibold uppercase tracking-widest mb-3">Testimonials</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Don't just take our word for it — hear from the business leaders who have trusted RNM with their financial advisory needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
                data-testid={`testimonial-${i}`}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-xs text-gray-500">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            ))}
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
              Serving clients across diverse sectors, irrespective of size — from startups to large corporates and PSUs, we bring specialized expertise to every engagement.
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

      {/* Latest Insights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#8B1A1A] text-sm font-semibold uppercase tracking-widest mb-3">Insights</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Stay informed with expert analysis on taxation, regulatory changes, and business advisory insights from our team of professionals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.map((insight, i) => (
              <article
                key={i}
                className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition-shadow group"
                data-testid={`insight-${i}`}
              >
                <span className="text-xs font-medium text-[#8B1A1A] bg-[#8B1A1A]/10 px-3 py-1 rounded-full">
                  {insight.category}
                </span>
                <h3 className="font-semibold text-gray-900 mt-3 mb-2 group-hover:text-[#8B1A1A] transition-colors">
                  {insight.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{insight.excerpt}</p>
                <p className="text-xs text-gray-400">{insight.date}</p>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#8B1A1A] font-medium hover:underline"
              data-testid="button-view-blog"
            >
              View All Articles <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Notable Clients */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[#8B1A1A] text-sm font-semibold uppercase tracking-widest mb-3">Trusted By</p>
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">Our Notable Clients</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              We have served leading organisations across India's public and private sectors for decades, building long-term partnerships based on trust and excellence.
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
          <p className="text-white/80 mb-8 text-lg max-w-2xl mx-auto">
            Let's discuss how RNM can help navigate your financial, tax, and compliance challenges with expert guidance tailored to your business needs.
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