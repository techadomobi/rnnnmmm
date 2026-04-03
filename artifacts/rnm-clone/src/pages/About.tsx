import { Link } from "wouter";
import { CheckCircle, ArrowRight, Globe, Award, Users, Calendar, Target, Heart, Shield, Lightbulb, Handshake, TrendingUp, BookOpen, Medal, Coffee, Rocket } from "lucide-react";

const milestones = [
  { year: "1946", event: "Founded by Late Mr. R.N. Marwah to cater to post-independence India's accounting and auditing needs during a transformative period in the nation's history." },
  { year: "1947", event: "Established permanent headquarters at Janpath, New Delhi, strategically positioned to serve the capital's growing business community." },
  { year: "1960s", event: "Expanded practice to include comprehensive taxation services, becoming one of the early adopters of specialized tax advisory in India." },
  { year: "1980s", event: "Diversified service portfolio to include legal advisory, corporate law compliance, and business consulting services for large enterprises." },
  { year: "1990s", event: "Pioneered cross-border advisory services following India's economic liberalization, helping multinational corporations enter the Indian market." },
  { year: "2000s", event: "Joined Geneva Group International (GGI), gaining global reach across 100 countries and establishing RNM as an internationally connected firm." },
  { year: "2010s", event: "Major expansion phase - opened offices in Mumbai, Bengaluru, Gurugram, Raipur, and London to serve clients across geographies." },
  { year: "2020s", event: "Launched digital transformation initiatives and virtual CFO services, adapting to the changing business landscape and remote work trends." },
  { year: "2024", event: "Team of 200+ professionals serving diverse industries across India and globally, with a legacy spanning 77+ years of excellence." },
];

const leadership = [
  { name: "R.N. Marwah", role: "Founder (Late)", desc: "Pioneered one of India's finest CA practices during India's formative years, establishing a legacy of excellence and integrity that continues to guide the firm today." },
  { name: "Senior Partner", role: "Managing Partner", desc: "Heads the firm's strategic direction and key client relationships with over 30 years of experience in corporate advisory and business transformation." },
  { name: "Partner – Audit", role: "Audit & Advisory", desc: "25+ years of expertise in statutory audit and business advisory, leading complex audit engagements for large corporates and PSUs across multiple industries." },
  { name: "Partner – Tax", role: "Taxation", desc: "Leading India's complex direct and indirect tax landscape for clients, with deep expertise in international taxation and transfer pricing matters." },
  { name: "Partner – Transactions", role: "Transaction Advisory", desc: "18+ years specializing in M&A, due diligence, and cross-border transactions, having advised on deals worth over ₹10,000 Crores." },
  { name: "Partner – Finance", role: "Corporate Finance", desc: "Expert in fund raising, valuations, and India entry strategy, with a track record of facilitating successful transactions for global businesses." },
];

const operatingModel = [
  {
    title: "Listen & Diagnose",
    description:
      "We begin every engagement by understanding business context, risk profile, and the specific outcome stakeholders want. Our discovery process involves detailed discussions with key personnel and thorough analysis of existing systems.",
  },
  {
    title: "Design Clear Roadmaps",
    description:
      "Our teams create practical advisory roadmaps with timelines, responsibility matrices, and transparent effort estimates. Every project plan includes clear milestones, deliverables, and success criteria.",
  },
  {
    title: "Execute With Discipline",
    description:
      "Cross-functional specialists collaborate to execute audits, tax plans, and advisory mandates with predictable quality. Regular progress reviews and transparent communication ensure alignment throughout.",
  },
  {
    title: "Sustain Long-Term Value",
    description:
      "We monitor implementation, refine controls, and support leadership teams as regulations and market conditions evolve. Our relationship doesn't end with delivery — we provide ongoing support and guidance.",
  },
];

const qualityPromises = [
  "Partner-led delivery with clear escalation channels and direct access to senior leadership",
  "Transparent communication and milestone reporting with regular status updates",
  "Structured quality reviews before every major deliverable ensuring accuracy and completeness",
  "Confidential handling of sensitive financial information with robust data security protocols",
  "Solutions tailored to sector and business maturity, not one-size-fits-all approaches",
  "Focused on actionable outcomes, not generic advice — we provide practical recommendations",
  "Timely delivery with predictable timelines and proactive issue management",
  "Continuous learning and adaptation to regulatory changes affecting your business",
];

const values = [
  {
    icon: Shield,
    title: "Integrity",
    desc: "We maintain the highest standards of professional and ethical conduct in every engagement, ensuring complete transparency and honesty in all our dealings."
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "We continuously strive for superior quality in all our services and client deliverables, never compromising on standards or cutting corners."
  },
  {
    icon: Heart,
    title: "Client Focus",
    desc: "Our clients' success is our primary objective — we tailor every solution to their unique needs and treat their challenges as our own."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We embrace modern tools and methodologies to stay ahead in a rapidly changing landscape, continuously upgrading our capabilities and approaches."
  },
  {
    icon: Handshake,
    title: "Transparency",
    desc: "We maintain full transparency in fee structures and disclose all costs upfront, with no hidden charges or surprise billing."
  },
  {
    icon: TrendingUp,
    title: "Growth Mindset",
    desc: "We believe in continuous learning and development, investing in our people and staying current with industry trends and regulations."
  }
];

const certifications = [
  "Institute of Chartered Accountants of India (ICAI)",
  "Institute of Company Secretaries of India (ICSI)",
  "Geneva Group International (GGI) Member",
  "Bar Council of India",
  "Association of Chartered Certified Accountants (ACCA)",
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-[#1a0808] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-medium tracking-wider uppercase mb-6">
              <Medal size={12} className="text-[#c4793a]" />
              Legacy of Excellence Since 1946
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              77 Years of Trusted<br />
              <span className="text-[#c4793a]">Excellence</span> & Integrity
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              R N Marwah & Co. LLP is one of India's most respected Chartered Accountancy firms, serving clients with integrity, expertise, and a commitment to excellence since 1946. Our legacy spans generations of business leaders who have trusted us with their financial success.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Calendar, value: "1946", label: "Year Founded" },
              { icon: Users, value: "200+", label: "Professionals" },
              { icon: Globe, value: "100+", label: "Countries Served" },
              { icon: Award, value: "77+", label: "Years of Excellence" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="p-4" data-testid={`about-stat-${i}`}>
                  <Icon size={28} className="text-[#8B1A1A] mx-auto mb-3" />
                  <div className="font-serif text-3xl font-bold text-gray-900">{item.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#8B1A1A] text-sm font-semibold uppercase tracking-widest mb-3">Our Story</p>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-5">A Legacy Built on Trust</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Founded in 1946 by Late Mr. R.N. Marwah — even before India's independence — R N Marwah & Co. LLP has stood as a beacon of financial integrity and professional excellence. From the pre-independence era to the modern age of science and technology, RNM has loyally served clients for over 77 years, witnessing and contributing to India's remarkable economic journey.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Today, we are a team of 200+ professionals including Chartered Accountants, Company Secretaries, Lawyers, MBAs, and CFAs with years of experience in their respective fields. Our team brings together multidisciplinary expertise to offer holistic financial advisory solutions that address complex business challenges.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                As an Independent Member of the Geneva Group International (GGI), we facilitate seamless cross-border services to clients across 100+ countries through our global network of 592+ member offices. This international connectivity enables us to serve Indian businesses expanding globally and foreign companies entering the Indian market.
              </p>
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Professional Certifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {certifications.map((cert, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle size={14} className="text-[#8B1A1A] flex-shrink-0" />
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <p className="text-[#8B1A1A] text-sm font-semibold uppercase tracking-widest mb-3">Our Mission & Values</p>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">Guiding Principles</h2>
              <div className="space-y-5 mb-8">
                {values.map((value, i) => (
                  <div key={i} className="flex gap-4" data-testid={`value-${i}`}>
                    <div className="w-10 h-10 bg-[#8B1A1A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon size={18} className="text-[#8B1A1A]" />
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900 block mb-1">{value.title}</span>
                      <span className="text-gray-600 text-sm">{value.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-[#8B1A1A] to-[#6b1010] rounded-xl p-6 text-white">
                <blockquote className="font-serif text-xl italic leading-relaxed mb-3">
                  "Thinking of the Bottom Line, Think of Us"
                </blockquote>
                <p className="text-sm text-white/80">— RNM India Motto</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose RNM */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#8B1A1A] text-sm font-semibold uppercase tracking-widest mb-3">Why RNM</p>
            <h2 className="font-serif text-3xl font-bold text-gray-900">The RNM Advantage</h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              What sets us apart is our combination of deep expertise, global connectivity, and unwavering commitment to client success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Target, title: "Sector Expertise", desc: "Deep knowledge across real estate, IT, healthcare, banking, manufacturing, and more." },
              { icon: Globe, title: "Global Network", desc: "Access to 592+ offices across 100 countries through GGI membership." },
              { icon: Users, title: "Multidisciplinary Team", desc: "CAs, CSs, Lawyers, MBAs, and CFAs working collaboratively." },
              { icon: Shield, title: "Risk Management", desc: "Comprehensive approach to identifying and mitigating financial risks." },
              { icon: Lightbulb, title: "Innovation", desc: "Leveraging technology and modern methodologies for better outcomes." },
              { icon: Handshake, title: "Long-term Partnerships", desc: "Building relationships that span decades, not just transactions." },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-[#8B1A1A]/30 hover:shadow-md transition-all"
                data-testid={`advantage-${i}`}
              >
                <div className="w-12 h-12 bg-[#8B1A1A]/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon size={22} className="text-[#8B1A1A]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#8B1A1A] text-sm font-semibold uppercase tracking-widest mb-3">Our Journey</p>
            <h2 className="font-serif text-3xl font-bold text-gray-900">A Legacy of Excellence</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              From our founding in 1946 to becoming one of India's leading CA firms, explore the milestones that have shaped our journey.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#8B1A1A]/20 transform md:-translate-x-0.5" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className={`relative pl-10 md:pl-0 ${i % 2 === 0 ? "md:pr-[52%]" : "md:pl-[52%]"}`}
                  data-testid={`milestone-${i}`}
                >
                  <div className="absolute left-0 md:left-1/2 top-3 w-8 h-8 bg-[#8B1A1A] rounded-full flex items-center justify-center text-white text-xs font-bold transform md:-translate-x-1/2 z-10 flex-shrink-0">
                    {i + 1}
                  </div>
                  <div className="bg-white rounded-lg p-5 border border-gray-100 shadow-sm">
                    <div className="text-[#8B1A1A] font-bold text-lg font-serif mb-1">{m.year}</div>
                    <p className="text-gray-600 text-sm leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[#8B1A1A] text-sm font-semibold uppercase tracking-widest mb-3">Leadership</p>
            <h2 className="font-serif text-3xl font-bold text-gray-900">Driven by Experienced Professionals</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Our leadership team brings decades of combined experience across audit, tax, advisory, and corporate finance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.map((member, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-100 p-6 bg-gray-50 hover:border-[#8B1A1A]/30 hover:shadow-md transition-all"
                data-testid={`leadership-member-${i}`}
              >
                <div className="w-12 h-12 bg-[#8B1A1A]/10 rounded-full flex items-center justify-center mb-4">
                  <Users size={20} className="text-[#8B1A1A]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-[#8B1A1A] text-sm font-medium mb-3">{member.role}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating model */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[#8B1A1A] text-sm font-semibold uppercase tracking-widest mb-3">How We Work</p>
            <h2 className="font-serif text-3xl font-bold text-gray-900">Our Engagement Approach</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Our structured methodology ensures consistent delivery of high-quality services with clear communication at every step.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {operatingModel.map((step, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-6" data-testid={`operating-model-${i}`}>
                <div className="w-8 h-8 rounded-full bg-[#8B1A1A] text-white text-sm font-semibold flex items-center justify-center mb-3">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-6 md:p-8">
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">What Clients Can Expect</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {qualityPromises.map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-600" data-testid={`quality-promise-${i}`}>
                  <CheckCircle size={14} className="text-[#8B1A1A] mt-0.5 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GGI Network */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#c4793a] text-sm font-semibold uppercase tracking-widest mb-3">Global Network</p>
              <h2 className="font-serif text-3xl font-bold mb-5">Member of Geneva Group International</h2>
              <p className="text-gray-300 leading-relaxed mb-5">
                R N Marwah & Co. is an Independent Member of Geneva Group International (GGI) — one of the world's leading networks of independent chartered accountants, lawyers, and management consultants, headquartered in Zurich, Switzerland.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Through our GGI membership, we give clients access to expert advisory services in 100 countries through 592+ member offices, with over 20,500 employees worldwide. This global connectivity enables us to provide seamless support for cross-border transactions, international tax planning, and global expansion strategies.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#8B1A1A] text-white font-medium px-5 py-2.5 rounded hover:bg-[#7a1515] transition-colors"
                  data-testid="button-about-contact"
                >
                  Connect With Us
                  <ArrowRight size={15} />
                </Link>
                <a
                  href="https://ggi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/30 text-white font-medium px-5 py-2.5 rounded hover:bg-white/10 transition-colors"
                >
                  Visit GGI Website
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "592+", label: "Member Offices" },
                { value: "100", label: "Countries" },
                { value: "20,500+", label: "Global Employees" },
                { value: "Zurich", label: "Headquarters" },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 rounded-xl p-6 text-center" data-testid={`ggi-stat-${i}`}>
                  <div className="text-3xl font-serif font-bold text-[#c4793a] mb-1">{item.value}</div>
                  <div className="text-sm text-gray-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#8B1A1A] to-[#6b1010] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Partner with India's Trusted CA Firm
          </h2>
          <p className="text-white/80 mb-8 text-lg max-w-2xl mx-auto">
            Experience the RNM difference — 77+ years of expertise, global connectivity, and unwavering commitment to your success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#8B1A1A] font-semibold px-6 py-3 rounded hover:bg-gray-100 transition-colors"
              data-testid="button-about-cta-contact"
            >
              Get In Touch
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-white/50 text-white font-medium px-6 py-3 rounded hover:bg-white/10 transition-colors"
              data-testid="button-about-cta-services"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}