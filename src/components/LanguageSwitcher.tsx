import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'hi', label: 'हिं' },
    { code: 'mr', label: 'मर' },
  ];

  return (
    <div className="flex items-center gap-2">
      <Languages className="w-5 h-5 text-slate-400" />
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant={i18n.language === lang.code ? 'default' : 'ghost'}
          size="sm"
          onClick={() => i18n.changeLanguage(lang.code)}
          className={`min-w-[50px] rounded-lg font-medium transition-all duration-300 ${
            i18n.language === lang.code 
              ? 'shadow-soft' 
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          {lang.label}
        </Button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
