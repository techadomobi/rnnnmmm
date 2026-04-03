import { Linkedin, Mail, GraduationCap, Briefcase, HeartHandshake, Sparkles, Award, Users, Target, BookOpen, Coffee, Rocket, Star, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const partners = [
  {
    name: "R.N. Marwah",
    role: "Founder (Late)",
    experience: "Founder",
    expertise: ["Audit", "Tax Advisory", "Corporate Finance"],
    bio: "Late Mr. R.N. Marwah founded this esteemed practice to serve India's growing financial advisory needs in the pre-independence era. His legacy continues to guide the firm's values and mission.",
    education: "FCA (England & Wales), Fellow of ICAI",
  },
  {
    name: "Managing Partner",
    role: "Managing Partner",
    experience: "30+ Years",
    expertise: ["Corporate Strategy", "M&A Advisory", "Client Relations"],
    bio: "Leads the firm's overall strategic direction, key client relationships, and international partnerships. Instrumental in expanding RNM's global network through GGI membership and driving digital transformation initiatives.",
    education: "FCA, MBA (Finance)",
  },
  {
    name: "Partner – Audit",
    role: "Audit & Advisory",
    experience: "25+ Years",
    expertise: ["Statutory Audit", "Internal Audit", "Risk Advisory"],
    bio: "Heads the audit practice with extensive experience in statutory and internal audits across industries including banking, insurance, manufacturing, and real estate. Has led audits for several Fortune 500 companies.",
    education: "FCA, DISA (ICAI)",
  },
  {
    name: "Partner – Taxation",
    role: "Direct & Indirect Tax",
    experience: "22+ Years",
    expertise: ["Direct Tax", "GST", "International Tax"],
    bio: "Leads the taxation practice, specialising in complex direct tax planning, GST advisory, and international taxation matters including transfer pricing and DTAA. Regular speaker at tax conferences.",
    education: "FCA, LLB",
  },
  {
    name: "Partner – Transaction",
    role: "Transaction Advisory",
    experience: "18+ Years",
    expertise: ["M&A", "Due Diligence", "FEMA"],
    bio: "Expert in cross-border transactions, M&A advisory, FEMA compliance, and regulatory matters for domestic and international clients. Has advised on transactions worth over ₹10,000 Crores.",
    education: "FCA, CPA (US)",
  },
  {
    name: "Partner – Corporate Finance",
    role: "Corporate Finance",
    experience: "20+ Years",
    expertise: ["Fund Raising", "Valuations", "India Entry"],
    bio: "Advises clients on capital raising, business valuations, restructuring, and India entry strategy. Has facilitated transactions exceeding INR 5,000 Cr and helped numerous startups scale.",
    education: "FCA, CFA",
  },
  {
    name: "Partner – Consultancy",
    role: "CFO & Outsourcing",
    experience: "15+ Years",
    expertise: ["Virtual CFO", "ESOP", "UK/US Tax"],
    bio: "Heads the consultancy division, delivering virtual CFO services, ESOP advisory, and UK/US accounting and taxation outsourcing. Passionate about helping startups build strong financial foundations.",
    education: "FCA, CPA (UK)",
  },
  {
    name: "Partner – Legal",
    role: "Corporate & Legal",
    experience: "17+ Years",
    expertise: ["Company Law", "Offshore Structures", "Contracts"],
    bio: "Specialises in corporate law, company secretarial services, offshore structuring, and cross-border regulatory compliance. Has advised on complex corporate restructuring and NCLT matters.",
    education: "FCS, LLB",
  },
];

const departments = [
  { dept: "Audit & Assurance", count: "50+", desc: "Statutory, internal, and forensic audits" },
  { dept: "Taxation", count: "40+", desc: "Direct, indirect, and international tax" },
  { dept: "Transaction Advisory", count: "25+", desc: "M&A, due diligence, FEMA" },
  { dept: "Corporate Finance", count: "20+", desc: "Fundraising, valuations, restructuring" },
  { dept: "Consultancy", count: "35+", desc: "Virtual CFO, ESOP, outsourcing" },
  { dept: "Legal & Secretarial", count: "15+", desc: "Company law, compliance, contracts" },
  { dept: "Support & Admin", count: "15+", desc: "Operations, IT, and client services" },
];

const teamPrinciples = [
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    text: "Regular technical upskilling across accounting standards, tax law, technology tools, and sector developments through internal training and external programs.",
  },
  {
    icon: Briefcase,
    title: "Ownership Mindset",
    text: "Each engagement is handled with accountability, clear communication, and a focus on measurable client outcomes. We treat every client's business as our own.",
  },
  {
    icon: HeartHandshake,
    title: "Collaborative Culture",
    text: "Multidisciplinary teams work together to solve complex business challenges with practical recommendations, breaking down silos for better outcomes.",
  },
  {
    icon: Sparkles,
    title: "Professional Excellence",
    text: "We maintain high review standards and quality controls to ensure consistency in every deliverable, with partner-level oversight on all critical matters.",
  },
];

const talentPrograms = [
  "Structured induction for new associates and trainees covering technical and soft skills",
  "Quarterly workshops led by partners and external experts on emerging topics",
  "Cross-functional rotations for broader advisory exposure and skill development",
  "Mentorship tracks for high-potential professionals with senior partner guidance",
  "Leadership development for senior managers and directors focusing on strategic thinking",
  "Ethics and confidentiality training integrated into all workflows and decision-making",
  "Technical certification support for CA, CS, CFA, CPA, and other professional qualifications",
  "Annual offsites and team building activities to strengthen culture and collaboration",
];

const benefits = [
  { icon: Target, title: "Career Growth", desc: "Clear progression paths with regular performance reviews and promotion opportunities." },
  { icon: BookOpen, title: "Learning Budget", desc: "Annual budget for courses, certifications, conferences, and professional development." },
  { icon: Users, title: "Collaborative Environment", desc: "Work alongside some of the brightest minds in the industry." },
  { icon: Star, title: "Recognition", desc: "Performance-based bonuses and recognition programs for outstanding contributions." },
];

function getInitials(name: string) {
  return name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();
}

const colors = [
  "bg-[#8B1A1A]", "bg-blue-700", "bg-gray-700", "bg-teal-700",
  "bg-purple-700", "bg-orange-700", "bg-green-700", "bg-indigo-700",
];

export default function Team() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-[#1a0808] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-medium tracking-wider uppercase mb-6">
              <Users size={12} className="text-[#c4793a]" />
              Our People
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              200+ Dedicated<br />
              <span className="text-[#c4793a]">Professionals</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              A diverse team of Chartered Accountants, Company Secretaries, Lawyers, MBAs, and CFAs — united by a commitment to delivering exceptional client service and driving business success.
            </p>
          </div>
        </div>
      </section>

      {/* Team stats */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "200+", label: "Total Professionals" },
              { value: "8+", label: "Partners" },
              { value: "50+", label: "Senior Associates" },
              { value: "77+", label: "Years of Excellence" },
            ].map((stat, i) => (
              <div key={i} data-testid={`team-stat-${i}`}>
                <div className="font-serif text-3xl font-bold text-[#8B1A1A]">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#8B1A1A] text-sm font-semibold uppercase tracking-widest mb-3">Leadership</p>
            <h2 className="font-serif text-3xl font-bold text-gray-900">Our Partners</h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              Our partners bring decades of combined experience and lead our practice areas with deep expertise and client focus.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {partners.map((partner, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
                data-testid={`partner-card-${i}`}
              >
                <div className={`${colors[i % colors.length]} h-20 flex items-end px-5 pb-0 relative`}>
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center border-2 border-white shadow-md translate-y-8 flex-shrink-0">
                    <span className="font-bold text-lg text-gray-700">{getInitials(partner.name)}</span>
                  </div>
                </div>
                <div className="pt-10 pb-5 px-5">
                  <h3 className="font-semibold text-gray-900">{partner.name}</h3>
                  <p className="text-[#8B1A1A] text-sm font-medium mt-0.5">{partner.role}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{partner.experience}</p>
                  <p className="text-xs text-gray-600 leading-relaxed mt-3 mb-3 line-clamp-3">{partner.bio}</p>
                  <div className="bg-gray-50 rounded-lg px-3 py-2 mb-3">
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Education</p>
                    <p className="text-xs text-gray-700">{partner.education}</p>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {partner.expertise.map((exp, j) => (
                      <span key={j} className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{exp}</span>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-3 border-t border-gray-50">
                    <button className="w-7 h-7 bg-gray-100 rounded flex items-center justify-center text-gray-500 hover:bg-[#8B1A1A] hover:text-white transition-colors" data-testid={`partner-linkedin-${i}`}>
                      <Linkedin size={12} />
                    </button>
                    <button className="w-7 h-7 bg-gray-100 rounded flex items-center justify-center text-gray-500 hover:bg-[#8B1A1A] hover:text-white transition-colors" data-testid={`partner-email-${i}`}>
                      <Mail size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[#8B1A1A] text-sm font-semibold uppercase tracking-widest mb-3">Our Structure</p>
            <h2 className="font-serif text-3xl font-bold text-gray-900">Practice Groups</h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              Our multidisciplinary teams are organized into specialized practice groups, each bringing deep expertise in their domain.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {departments.map((d, i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-center hover:border-[#8B1A1A]/30 hover:shadow-md transition-all"
                data-testid={`dept-${i}`}
              >
                <div className="text-2xl font-serif font-bold text-[#8B1A1A]">{d.count}</div>
                <div className="text-xs font-semibold text-gray-900 mt-1">{d.dept}</div>
                <div className="text-[10px] text-gray-500 mt-1">{d.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[#8B1A1A] text-sm font-semibold uppercase tracking-widest mb-3">Our Culture</p>
            <h2 className="font-serif text-3xl font-bold text-gray-900">How Our Team Operates</h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              Our culture is built on collaboration, continuous learning, and a commitment to excellence in everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {teamPrinciples.map((principle, i) => {
              const Icon = principle.icon;
              return (
                <div
                  key={i}
                  className="bg-white border border-gray-100 rounded-xl p-6 hover:border-[#8B1A1A]/30 hover:shadow-md transition-all"
                  data-testid={`team-principle-${i}`}
                >
                  <div className="w-11 h-11 bg-[#8B1A1A]/10 rounded-lg flex items-center justify-center mb-3">
                    <Icon size={20} className="text-[#8B1A1A]" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{principle.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{principle.text}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-white border border-gray-100 rounded-xl p-6 md:p-8">
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Talent Development Programs</h3>
            <p className="text-gray-500 text-sm mb-6">We invest heavily in our people's growth through structured programs and continuous learning opportunities.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {talentPrograms.map((program, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-600" data-testid={`talent-program-${i}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B1A1A] mt-2 flex-shrink-0" />
                  {program}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[#8B1A1A] text-sm font-semibold uppercase tracking-widest mb-3">Why RNM</p>
            <h2 className="font-serif text-3xl font-bold text-gray-900">Benefits of Working With Us</h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              Whether you're a client or a team member, RNM offers unique advantages that set us apart.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-[#8B1A1A]/30 hover:shadow-md transition-all"
                data-testid={`benefit-${i}`}
              >
                <div className="w-12 h-12 bg-[#8B1A1A]/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon size={22} className="text-[#8B1A1A]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join us */}
      <section className="py-20 bg-gradient-to-r from-[#8B1A1A] to-[#6b1010] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-medium tracking-wider uppercase mb-6">
            <Rocket size={12} className="text-[#c4793a]" />
            We're Hiring
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Join Our Team</h2>
          <p className="text-white/80 mb-8 text-lg max-w-2xl mx-auto">
            We're always looking for talented professionals to join our growing team. Explore opportunities with RNM and be part of a legacy of excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:careers@rnm.in"
              className="inline-flex items-center gap-2 bg-white text-[#8B1A1A] font-semibold px-6 py-3 rounded hover:bg-gray-100 transition-colors"
              data-testid="button-join-team"
            >
              Send Your Resume
              <ArrowRight size={16} />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/50 text-white font-medium px-6 py-3 rounded hover:bg-white/10 transition-colors"
              data-testid="button-team-contact"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}