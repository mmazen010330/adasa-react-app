import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'من نحن', href: '/about' },
  { label: 'المدونة', href: '/blog' },
  { label: 'الرئيسية', href: '/' },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isLinkActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/blog"
              className="px-4 py-2 rounded-xl bg-linear-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold hover:from-orange-600 hover:to-orange-700 transition-all shadow-md shadow-orange-500/20"
            >
              ابدأ القراءة
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center bg-[#161616] rounded-full p-1.5 border border-[#262626]">
            {navLinks.map(({ label, href }) => {
              const active = isLinkActive(href);

              return (
                <Link
                  key={href}
                  to={href}
                  aria-current={active ? 'page' : undefined}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    active
                      ? 'bg-linear-to-r from-orange-500 to-orange-600 text-white border border-white/20 shadow-md shadow-orange-500/30'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex flex-col text-right">
              <span className="text-xl font-bold bg-linear-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                عدسة
              </span>
              <span className="text-xs text-orange-400/80 hidden sm:block tracking-wide">
                عالم التصوير الفوتوغرافي
              </span>
            </div>
            <div className="relative w-11 h-11 rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-300 border border-neutral-800">
              <img
                alt="Photography Logo"
                className="w-full h-full object-cover"
                src="https://adasa-psi.vercel.app/assets/logo-GdqARQRt.png"
              />
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="قائمة التنقل"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2.5 text-neutral-400 hover:text-white hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e0e0e] border-b border-neutral-800 px-4 pt-2 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 text-right">
            {navLinks.map(({ label, href }) => {
              const active = isLinkActive(href);
              return (
                <Link
                  key={href}
                  to={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    active
                      ? 'bg-orange-500 text-white font-bold'
                      : 'text-neutral-300 hover:bg-neutral-900 hover:text-white'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
          <div className="pt-2 border-t border-neutral-800 flex justify-center">
            <Link
              to="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-4 py-2.5 rounded-xl bg-linear-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold"
            >
              ابدأ القراءة
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;