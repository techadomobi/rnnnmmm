import { Building2, Users, TrendingUp, Globe } from "lucide-react";

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

      {/* Testimonial section */}
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
    </div>
  );
}
