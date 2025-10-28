import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Droplet, Menu, X } from 'lucide-react';
import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { cn } from '@/lib/utils';
import logo from './jkrp.jpg';

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/awareness', label: t('nav.awareness') },
    { path: '/enroll', label: t('nav.enroll') },
    { path: '/compatibility', label: t('nav.compatibility') },
    { path: '/locations', label: t('nav.locations') },
    { path: '/testimonials', label: t('nav.testimonials') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center shadow-soft group-hover:shadow-card transition-all duration-300">
              <img 
                src={logo}
                alt="BloodBank Logo" 
                className="w-12 h-12 object-contain rounded-md"
              />
            </div>
            <span className="text-xl font-bold text-slate-900 hidden sm:block"><b>{t('nav.title')}</b></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors relative py-2",
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-slate-600 hover:text-slate-900"
                )}
              >
                {link.label}
                {location.pathname === link.path && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Language Switcher */}
          <div className="hidden md:flex">
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200/60 bg-white/95 backdrop-blur-xl">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-base font-medium transition-colors px-4 py-2 rounded-lg",
                    location.pathname === link.path
                      ? "text-primary bg-primary/10"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 pt-2 border-t border-slate-200">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
