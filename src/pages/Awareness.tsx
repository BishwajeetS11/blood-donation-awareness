import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Heart, Shield, Activity } from 'lucide-react';

const Awareness = () => {
  const { t } = useTranslation();

  const eligibilityItems = [
    t('awareness.whoCanDonate.age'),
    t('awareness.whoCanDonate.weight'),
    t('awareness.whoCanDonate.health'),
    t('awareness.whoCanDonate.interval'),
  ];

  const processSteps = [
    t('awareness.process.step1'),
    t('awareness.process.step2'),
    t('awareness.process.step3'),
    t('awareness.process.step4'),
  ];

  const postCareTips = [
    t('awareness.postCare.tip1'),
    t('awareness.postCare.tip2'),
    t('awareness.postCare.tip3'),
    t('awareness.postCare.tip4'),
  ];

  const sections = [
    {
      icon: Heart,
      title: t('awareness.whoCanDonate.title'),
      items: eligibilityItems,
      color: 'bg-rose-50',
      iconColor: 'text-primary',
      delay: '0s',
    },
    {
      icon: Activity,
      title: t('awareness.process.title'),
      items: processSteps,
      color: 'bg-blue-50',
      iconColor: 'text-blue-600',
      delay: '0.2s',
      numbered: true,
    },
    {
      icon: Shield,
      title: t('awareness.postCare.title'),
      items: postCareTips,
      color: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
      delay: '0.4s',
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            {t('awareness.title')}
          </h1>
          <p className="text-xl text-slate-600">
            {t('awareness.subTitle')}
          </p>
        </div>

        {/* Information Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <Card 
                key={index}
                className="bg-white border border-slate-100 shadow-card hover:shadow-elevated transition-all duration-500 rounded-2xl overflow-hidden animate-scale-in"
                style={{ animationDelay: section.delay }}
              >
                <CardHeader className="pb-6">
                  <div className={`w-14 h-14 rounded-2xl ${section.color} flex items-center justify-center mb-6`}>
                    <Icon className={`w-7 h-7 ${section.iconColor}`} />
                  </div>
                  <CardTitle className="text-2xl text-slate-900">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 group">
                        {section.numbered ? (
                          <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <span className="text-sm font-semibold">{itemIndex + 1}</span>
                          </div>
                        ) : (
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        )}
                        <span className="text-slate-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Information */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-10 shadow-card border border-slate-100 animate-fade-up animation-delay-600">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              {t('awareness.whyImportant.title')}
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              - {t('awareness.whyImportant.point1')}
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              - {t('awareness.whyImportant.point2')}
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              - {t('awareness.whyImportant.point3')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awareness;
