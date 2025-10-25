import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Droplet } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();

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
              <Droplet className="w-6 h-6 text-white" fill="white" />
            </div>
            <span className="text-xl font-bold text-slate-900">BloodBank</span>
          </Link>

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

          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
