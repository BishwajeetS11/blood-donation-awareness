import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Heart } from 'lucide-react';

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: t('testimonials.donor1.name'),
      role: t('testimonials.donor1.role'),
      quote: t('testimonials.donor1.quote'),
      image: '👨‍⚕️',
      donations: 15,
    },
    {
      name: t('testimonials.donor2.name'),
      role: t('testimonials.donor2.role'),
      quote: t('testimonials.donor2.quote'),
      image: '👩‍💼',
      donations: 8,
    },
    {
      name: t('testimonials.donor3.name'),
      role: t('testimonials.donor3.role'),
      quote: t('testimonials.donor3.quote'),
      image: '👨‍🎓',
      donations: 12,
    },
    {
      name: t('testimonials.recipient1.name'),
      role: t('testimonials.recipient1.role'),
      quote: t('testimonials.recipient1.quote'),
      image: '👩‍🦰',
      isRecipient: true,
    },
    {
      name: t('testimonials.recipient2.name'),
      role: t('testimonials.recipient2.role'),
      quote: t('testimonials.recipient2.quote'),
      image: '👨‍👩‍👧',
      isRecipient: true,
    },
    {
      name: t('testimonials.donor4.name'),
      role: t('testimonials.donor4.role'),
      quote: t('testimonials.donor4.quote'),
      image: '👩‍🏫',
      donations: 20,
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            {t('testimonials.title')}
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white border border-slate-100 shadow-card hover:shadow-elevated transition-all duration-500 rounded-2xl animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <p className="text-slate-700 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-3xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                    {testimonial.donations && (
                      <div className="flex items-center gap-1 mt-1">
                        <Heart className="w-3 h-3 text-primary fill-primary" />
                        <span className="text-xs text-primary font-medium">
                          {testimonial.donations} {t('testimonials.donations')}
                        </span>
                      </div>
                    )}
                    {testimonial.isRecipient && (
                      <span className="inline-block mt-1 text-xs text-emerald-600 font-medium">
                        {t('testimonials.recipient')}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-up animation-delay-600">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 rounded-3xl">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {t('testimonials.cta.title')}
              </h2>
              <p className="text-lg text-slate-700 max-w-2xl mx-auto">
                {t('testimonials.cta.description')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
