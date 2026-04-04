import { Link } from "wouter";

interface LogoProps {
  variant?: "navbar" | "footer" | "icon";
  href?: string;
  className?: string;
}

export default function Logo({ variant = "navbar", href = "/", className = "" }: LogoProps) {
  const logoContent = (
    <>
      {variant === "icon" ? (
        /* Icon-only version for favicon/small sizes */
        <div className={`bg-[#8B1A1A] rounded flex items-center justify-center ${className || "w-10 h-10"}`}>
          <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" className="fill-white font-serif font-bold" fontSize="18">R</text>
          </svg>
        </div>
      ) : (
        /* Full logo with icon and text */
        <>
          {/* Logo Icon */}
          <div className={`bg-[#8B1A1A] rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm ${
            variant === "navbar" ? "w-12 h-12 md:w-14 md:h-14" : "w-11 h-11"
          }`}>
            <svg viewBox="0 0 48 48" className={`${variant === "navbar" ? "w-8 h-8 md:w-9 md:h-9" : "w-7 h-7"}`} fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Decorative circle background */}
              <circle cx="24" cy="24" r="22" fill="white" opacity="0.15" />
              {/* R Letter */}
              <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" className="fill-white font-serif font-bold" fontSize="24">R</text>
            </svg>
          </div>

          {/* Logo Text */}
          <div className="flex flex-col justify-center">
            <div className={`font-serif font-bold text-[#8B1A1A] leading-tight ${
              variant === "navbar" ? "text-xl md:text-2xl" : "text-lg"
            }`}>
              RNM India
            </div>
            <div className={`tracking-widest uppercase leading-tight ${
              variant === "navbar" 
                ? "text-[10px] text-gray-500 hidden sm:block" 
                : "text-[9px] text-gray-400"
            }`}>
              {variant === "navbar" ? "Chartered Accountants" : "Est. 1946"}
            </div>
          </div>
        </>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`flex items-center gap-3 group ${className}`} data-testid="link-logo">
        {logoContent}
      </Link>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {logoContent}
    </div>
  );
}