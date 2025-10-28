import { useTranslation } from 'react-i18next';
import { Droplet, Mail, Phone } from 'lucide-react';
import logo from './jkrp.jpg';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-white border-t border-slate-200 mt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center shadow-soft group-hover:shadow-card transition-all duration-300">
              <img 
                src={logo}
                alt="BloodBank Logo" 
                className="w-12 h-12 object-contain rounded-md"
              />
            </div>
            <span className="text-xl font-bold text-slate-900"><b>{t('nav.title')}</b></span>
            </div>
            <p className="text-slate-600 leading-relaxed max-w-sm">{t('footer.tagline')}</p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-6">{t('footer.contact')}</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-600">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-sm">{t('footer.email')}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-sm">{t('footer.phone')}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-6">{t('footer.quickLinks')}</h3>
            <div className="space-y-3">
              <a href="/awareness" className="block text-slate-600 hover:text-primary transition-colors">
                {t('footer.donationInfo')}
              </a>
              <a href="/enroll" className="block text-slate-600 hover:text-primary transition-colors">
                {t('footer.becomeDonor')}
              </a>
              <a href="/statistics" className="block text-slate-600 hover:text-primary transition-colors">
                {t('footer.impactStats')}
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-500 text-center">
            © 2024 BloodBank. All rights reserved. Built with ❤️ to save lives.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
