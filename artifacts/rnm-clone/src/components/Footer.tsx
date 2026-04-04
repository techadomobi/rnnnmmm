import { Link } from "wouter";
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import Logo from "./Logo";

const offices = [
  { city: "New Delhi", address: "4/80, Janpath, New Delhi - 110001", phone: "+91-11-4319 2000" },
  { city: "Gurugram", address: "Golf Course Road, Gurugram, Haryana", phone: "+91-124-4207 800" },
  { city: "Mumbai", address: "Bandra Kurla Complex, Mumbai - 400051", phone: "+91-22-6686 2000" },
  { city: "Bengaluru", address: "MG Road, Bengaluru - 560001", phone: "+91-80-4152 3000" },
];

const serviceLinks = [
  { label: "Audit & Business Advisory", href: "/services/audit" },
  { label: "Taxation Services", href: "/services/taxation" },
  { label: "Transaction Advisory", href: "/services/transaction" },
  { label: "Corporate Finance", href: "/services/corporate-finance" },
  { label: "Consultancy", href: "/services/consultancy" },
  { label: "Corporate & Legal Services", href: "/services/legal" },
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Our Clients", href: "/clients" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
  { label: "Career", href: "/career" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div>
            <div className="mb-5">
              <Logo variant="footer" href="/" className="!gap-2.5" />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              R N Marwah & Co. LLP — one of India's premier Chartered Accountancy firms with over 77 years of trusted financial advisory services.
            </p>
            <p className="text-xs text-[#c4793a] font-medium italic mb-5">
              "Thinking of the Bottom Line, Think of Us"
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://in.linkedin.com/company/rnmindia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-[#8B1A1A] transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-[#8B1A1A] transition-colors"
                data-testid="link-twitter"
              >
                <Twitter size={14} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-[#8B1A1A] transition-colors"
                data-testid="link-facebook"
              >
                <Facebook size={14} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Our Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#c4793a] transition-colors flex items-center gap-2"
                    data-testid={`footer-link-${link.label.replace(/\s+/g, '-').toLowerCase()}`}
                  >
                    <span className="w-1 h-1 bg-[#8B1A1A] rounded-full inline-block flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#c4793a] transition-colors flex items-center gap-2"
                    data-testid={`footer-link-${link.label.replace(/\s+/g, '-').toLowerCase()}`}
                  >
                    <span className="w-1 h-1 bg-[#8B1A1A] rounded-full inline-block flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Head Office</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-[#c4793a] mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-400 leading-relaxed">
                  K - 318, 3rd Floor, Nai Basti, Lado Sarai <br />
                  New Delhi, Delhi 110030<br />
                  India
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-[#c4793a] flex-shrink-0" />
                <a href="tel:+916395622281" className="text-sm text-gray-400 hover:text-[#c4793a] transition-colors" data-testid="footer-phone">
                  +91-6395622281
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-[#c4793a] flex-shrink-0" />
                <a href="mailto:rnm@rnm.in" className="text-sm text-gray-400 hover:text-[#c4793a] transition-colors" data-testid="footer-email">
                  rnm@rnm.in
                </a>
              </div>
            </div>

            <div className="mt-5 pt-5 border-t border-gray-700">
              <p className="text-xs text-gray-500 mb-2">Member of</p>
              <div className="bg-gray-700 px-3 py-2 rounded text-xs text-gray-300 font-medium">
                Geneva Group International (GGI)
              </div>
              <p className="text-xs text-gray-500 mt-2">592+ offices in 100 countries</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} R N Marwah & Co. LLP. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-gray-300 transition-colors" data-testid="footer-link-privacy">
              Privacy Policy
            </Link>
            <Link href="/disclaimer" className="text-xs text-gray-500 hover:text-gray-300 transition-colors" data-testid="footer-link-disclaimer">
              Disclaimer
            </Link>
            <Link href="/sitemap" className="text-xs text-gray-500 hover:text-gray-300 transition-colors" data-testid="footer-link-sitemap">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
