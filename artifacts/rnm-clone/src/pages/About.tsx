import { Link } from "wouter";
import { CheckCircle, ArrowRight, Globe, Award, Users, Calendar } from "lucide-react";

const milestones = [
  { year: "1946", event: "Founded by Late Mr. R.N. Marwah to cater to post-independence India's accounting needs." },
  { year: "1947", event: "Established permanent headquarters at Janpath, New Delhi." },
  { year: "1980s", event: "Expanded service portfolio to include taxation and legal advisory." },
  { year: "2000s", event: "Joined Geneva Group International (GGI), gaining global reach across 100 countries." },
  { year: "2010s", event: "Expanded to Mumbai, Bengaluru, Gurugram, Raipur, and London." },
  { year: "2024", event: "Team of 200+ professionals serving diverse industries across India and globally." },
];

const leadership = [
  { name: "RN Marwah", role: "Founder (Late)", desc: "Pioneered one of India's finest CA practices during India's formative years." },
  { name: "Senior Partner", role: "Managing Partner", desc: "Heads the firm's strategic direction and key client relationships." },
  { name: "Partner – Audit", role: "Audit & Advisory", desc: "25+ years of expertise in statutory audit and business advisory." },
  { name: "Partner – Tax", role: "Taxation", desc: "Leading India's complex direct and indirect tax landscape for clients." },
];

const operatingModel = [
  {
    title: "Listen & Diagnose",
    description:
      "We begin every engagement by understanding business context, risk profile, and the specific outcome stakeholders want.",
  },
  {
    title: "Design Clear Roadmaps",
    description:
      "Our teams create practical advisory roadmaps with timelines, responsibility matrices, and transparent effort estimates.",
  },
  {
    title: "Execute With Discipline",
    description:
      "Cross-functional specialists collaborate to execute audits, tax plans, and advisory mandates with predictable quality.",
  },
  {
    title: "Sustain Long-Term Value",
    description:
      "We monitor implementation, refine controls, and support leadership teams as regulations and market conditions evolve.",
  },
];

const qualityPromises = [
  "Partner-led delivery with clear escalation channels",
  "Transparent communication and milestone reporting",
  "Structured quality reviews before every major deliverable",
  "Confidential handling of sensitive financial information",
  "Solutions tailored to sector and business maturity",
  "Focused on actionable outcomes, not generic advice",
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-[#1a0808] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-[#c4793a] text-sm font-semibold uppercase tracking-widest mb-4">About Us</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5">
              77 Years of Trusted Excellence
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              R N Marwah & Co. LLP is one of India's most respected Chartered Accountancy firms, serving clients with integrity, expertise, and a commitment to excellence since 1946.
            </p>
          </div>
        </div>
      </section>

      {/* About content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-5">Our Story</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Founded in 1946 by Late Mr. R.N. Marwah — even before India's independence — R N Marwah & Co. LLP has stood as a beacon of financial integrity and professional excellence. From the pre-independence era to the modern age of science and technology, RNM has loyally served clients for over 77 years.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Today, we are a team of 200+ professionals including Chartered Accountants, Company Secretaries, Lawyers, MBAs, and CFAs with years of experience in their respective fields. Our team brings together multidisciplinary expertise to offer holistic financial advisory solutions.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                As an Independent Member of the Geneva Group International (GGI), we facilitate seamless cross-border services to clients across 100+ countries through our global network of 592+ member offices.
              </p>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { icon: Calendar, value: "1946", label: "Year Founded" },
                  { icon: Users, value: "200+", label: "Professionals" },
                  { icon: Globe, value: "100+", label: "Countries" },
                  { icon: Award, value: "6", label: "Office Locations" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="bg-gray-50 rounded-lg p-4 text-center" data-testid={`about-stat-${i}`}>
                      <Icon size={22} className="text-[#8B1A1A] mx-auto mb-2" />
                      <div className="font-serif text-2xl font-bold text-gray-900">{item.value}</div>
                      <div className="text-xs text-gray-500 mt-1">{item.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-5">Our Mission & Values</h2>
              <div className="space-y-4 mb-8">
                {[
                  { title: "Integrity", desc: "We maintain the highest standards of professional and ethical conduct in every engagement." },
                  { title: "Excellence", desc: "We continuously strive for superior quality in all our services and client deliverables." },
                  { title: "Client Focus", desc: "Our clients' success is our primary objective — we tailor every solution to their unique needs." },
                  { title: "Innovation", desc: "We embrace modern tools and methodologies to stay ahead in a rapidly changing landscape." },
                  { title: "Transparency", desc: "We maintain full transparency in fee structures and disclose all costs upfront." },
                ].map((value, i) => (
                  <div key={i} className="flex gap-3" data-testid={`value-${i}`}>
                    <CheckCircle size={18} className="text-[#8B1A1A] mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900">{value.title}: </span>
                      <span className="text-gray-600 text-sm">{value.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#8B1A1A]/5 border border-[#8B1A1A]/20 rounded-xl p-6">
                <blockquote className="font-serif text-xl text-gray-800 italic leading-relaxed mb-3">
                  "Thinking of the Bottom Line, Think of Us"
                </blockquote>
                <p className="text-sm text-gray-500">— RNM India Motto</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#8B1A1A] text-sm font-semibold uppercase tracking-widest mb-3">Our Journey</p>
            <h2 className="font-serif text-3xl font-bold text-gray-900">A Legacy of Excellence</h2>
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
                    <p className="text-gray-600 text-sm">{m.event}</p>
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
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((member, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-100 p-6 bg-gray-50 hover:border-[#8B1A1A]/30 transition-colors"
                data-testid={`leadership-member-${i}`}
              >
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
                R N Marwah & Co. is an Independent Member of Geneva Group International (GGI) — one of the world's leading networks of independent chartered accountants, lawyers, and management consultants.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                Through our GGI membership, we give clients access to expert advisory services in 100 countries through 592+ member offices, with over 20,500 employees worldwide — all headquartered in Zurich, Switzerland.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#8B1A1A] text-white font-medium px-5 py-2.5 rounded hover:bg-[#7a1515] transition-colors"
                data-testid="button-about-contact"
              >
                Connect With Us
                <ArrowRight size={15} />
              </Link>
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
    </div>
  );
}
