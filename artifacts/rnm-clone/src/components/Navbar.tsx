import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";

const services = [
  { label: "Audit & Business Advisory", href: "/services/audit" },
  { label: "Taxation Services", href: "/services/taxation" },
  { label: "Transaction & Regulatory Advisory", href: "/services/transaction" },
  { label: "Corporate Finance", href: "/services/corporate-finance" },
  { label: "Consultancy", href: "/services/consultancy" },
  { label: "Corporate & Legal Services", href: "/services/legal" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#8B1A1A] text-white text-xs py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <span className="font-medium tracking-wider uppercase">R N Marwah & Co. LLP | Chartered Accountants | Est. 1946</span>
          <div className="flex items-center gap-6">
            <a href="tel:+911143192000" className="flex items-center gap-1.5 hover:text-orange-200 transition-colors" data-testid="link-phone">
              <Phone size={11} />
              <span>+91-11-4319 2000</span>
            </a>
            <a href="mailto:rnm@rnm.in" className="flex items-center gap-1.5 hover:text-orange-200 transition-colors" data-testid="link-email">
              <Mail size={11} />
              <span>rnm@rnm.in</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          isScrolled ? "shadow-md" : "shadow-sm"
        }`}
        data-testid="navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group" data-testid="link-logo">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#8B1A1A] rounded flex items-center justify-center flex-shrink-0">
                <span className="text-white font-serif font-bold text-lg md:text-xl">R</span>
              </div>
              <div>
                <div className="font-serif font-bold text-[#8B1A1A] text-lg md:text-xl leading-tight">RNM India</div>
                <div className="text-[10px] text-gray-500 tracking-widest uppercase leading-tight hidden sm:block">Chartered Accountants</div>
              </div>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-1">
              <NavLink href="/" label="Home" />
              <NavLink href="/about" label="About Us" />

              {/* Services dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#8B1A1A] transition-colors rounded"
                  data-testid="button-services-dropdown"
                >
                  Services
                  <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 w-64 bg-white border border-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#8B1A1A] transition-colors"
                      data-testid={`link-service-${s.label.replace(/\s+/g, '-').toLowerCase()}`}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>

              <NavLink href="/team" label="Our Team" />
              <NavLink href="/clients" label="Clients" />
              <NavLink href="/blog" label="Blog" />
              <NavLink href="/contact" label="Contact" />
            </div>

            {/* CTA button */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="bg-[#8B1A1A] text-white text-sm font-medium px-5 py-2.5 rounded hover:bg-[#7a1515] transition-colors"
                data-testid="button-get-in-touch"
              >
                Get In Touch
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-[#8B1A1A] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-1">
            <MobileNavLink href="/" label="Home" />
            <MobileNavLink href="/about" label="About Us" />
            <div>
              <button
                className="w-full flex items-center justify-between py-2.5 text-sm font-medium text-gray-700"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                data-testid="button-mobile-services"
              >
                Services
                <ChevronDown size={14} className={`transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {isServicesOpen && (
                <div className="pl-4 space-y-1 mt-1">
                  {services.map((s) => (
                    <MobileNavLink key={s.href} href={s.href} label={s.label} />
                  ))}
                </div>
              )}
            </div>
            <MobileNavLink href="/team" label="Our Team" />
            <MobileNavLink href="/clients" label="Clients" />
            <MobileNavLink href="/blog" label="Blog" />
            <MobileNavLink href="/contact" label="Contact" />
            <div className="pt-2">
              <Link
                href="/contact"
                className="block text-center bg-[#8B1A1A] text-white text-sm font-medium px-4 py-2.5 rounded"
                data-testid="button-mobile-get-in-touch"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  const [location] = useLocation();
  const isActive = location === href;
  return (
    <Link
      href={href}
      className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
        isActive
          ? "text-[#8B1A1A] bg-orange-50"
          : "text-gray-700 hover:text-[#8B1A1A] hover:bg-orange-50"
      }`}
      data-testid={`link-nav-${label.replace(/\s+/g, '-').toLowerCase()}`}
    >
      {label}
    </Link>
  );
}

function MobileNavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block py-2.5 text-sm font-medium text-gray-700 hover:text-[#8B1A1A] transition-colors border-b border-gray-50"
      data-testid={`link-mobile-nav-${label.replace(/\s+/g, '-').toLowerCase()}`}
    >
      {label}
    </Link>
  );
}
