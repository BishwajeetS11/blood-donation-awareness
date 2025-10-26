import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Heart, Activity } from 'lucide-react';
import Scene3D from '@/components/Scene3D';

const Home = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: Users, number: '500K+', text: t('home.stats.st1'), delay: '0s' },
    { icon: Heart, number: '50K+', text: t('home.stats.st2'), delay: '0.2s' },
    { icon: Activity, number: '100+', text: t('home.stats.st3'), delay: '0.4s' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Abstract Background */}
      <section className="relative pt-32 pb-23 px-4 overflow-hidden">
        {/* Abstract 3D Background */}
        <div className="absolute inset-0 z-0">
          <Scene3D />
        </div>

        <div className="container mx-auto relative z-10 pt-8 md:pt-12 lg:pt-16">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-up">
                <span className="text-slate-900">{t('hero.title').split(',')[0]},</span>
                <br />
                <span className="text-primary">{t('hero.title').split(',')[1]}</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto animate-fade-up animation-delay-200">
                {t('hero.subtitle')}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 animate-fade-up animation-delay-300">
              <Link to="/enroll">
                <Button 
                  size="lg" 
                  className="rounded-full px-8 py-6 text-lg font-semibold shadow-elevated hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
                >
                  {t('hero.cta')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/awareness">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="rounded-full px-8 py-6 text-lg font-semibold bg-white hover:bg-slate-50 transition-all duration-300"
                >
                  {t('hero.learn')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-10 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-10 shadow-card hover:shadow-elevated transition-all duration-500 text-center animate-scale-in border border-slate-100"
                  style={{ animationDelay: stat.delay }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-4xl font-bold text-slate-900 mb-2">{stat.number}</h3>
                  <p className="text-slate-600 font-medium">{stat.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-3xl p-12 md:p-16 shadow-card text-center border border-slate-100">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              {t('home.readyTitle')}
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              {t('home.readySubtitle')}
            </p>
            <Link to="/enroll">
              <Button 
                size="lg" 
                className="rounded-full px-10 py-6 text-lg font-semibold shadow-elevated hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
              >
                {t('home.readyCta')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
