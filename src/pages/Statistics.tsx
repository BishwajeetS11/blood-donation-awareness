import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Clock, Users, Heart } from 'lucide-react';

const Statistics = () => {
  const { t } = useTranslation();

  const mainStats = [
    {
      icon: Users,
      number: t('statistics.stat1.number'),
      text: t('statistics.stat1.text'),
      delay: '0s',
    },
    {
      icon: Clock,
      number: t('statistics.stat2.number'),
      text: t('statistics.stat2.text'),
      delay: '0.2s',
    },
    {
      icon: TrendingUp,
      number: t('statistics.stat3.number'),
      text: t('statistics.stat3.text'),
      delay: '0.4s',
    },
    {
      icon: Heart,
      number: t('statistics.stat4.number'),
      text: t('statistics.stat4.text'),
      delay: '0.6s',
    },
  ];

  const additionalFacts = [
    { text: t('statistics.thalassemia'), icon: '🩺' },
    { text: t('statistics.accident'), icon: '🚑' },
    { text: t('statistics.surgery'), icon: '⚕️' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto animate-fade-up">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <TrendingUp className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            {t('statistics.title')}
          </h1>
          <p className="text-xl text-slate-600">
            {t('statistics.subtitle')}
          </p>
        </div>

        {/* Main Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mainStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="bg-white border border-slate-100 shadow-card hover:shadow-elevated transition-all duration-500 rounded-2xl overflow-hidden group animate-scale-in"
                style={{ animationDelay: stat.delay }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-4xl font-bold text-slate-900 mb-3">{stat.number}</h3>
                  <p className="text-slate-600 font-medium">{stat.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Facts */}
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center animate-fade-up animation-delay-800">
            Critical Facts
          </h2>
          {additionalFacts.map((fact, index) => (
            <Card
              key={index}
              className="bg-white border border-slate-100 shadow-card hover:shadow-elevated transition-all duration-500 rounded-2xl animate-fade-up"
              style={{ animationDelay: `${0.8 + index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="text-4xl flex-shrink-0">{fact.icon}</div>
                  <p className="text-lg text-slate-700 leading-relaxed pt-2">{fact.text}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Statement */}
        <div className="mt-16 max-w-4xl mx-auto animate-fade-up animation-delay-600">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-12 text-center border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Your donation matters
            </h2>
            <p className="text-xl text-slate-700 leading-relaxed">
              Behind every statistic is a real person whose life can be saved or improved through blood donation. Your contribution makes a tangible difference in your community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
