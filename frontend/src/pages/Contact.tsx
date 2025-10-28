import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactSchema = z.object({
    name: z.string().trim().min(1, { message: t('contact.errors.nameRequired') }).max(100),
    email: z.string().trim().email({ message: t('contact.errors.emailInvalid') }).max(255),
    subject: z.string().trim().min(1, { message: t('contact.errors.subjectRequired') }).max(200),
    message: z.string().trim().min(10, { message: t('contact.errors.messageMin') }).max(1000),
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    try {
      contactSchema.parse(data);
      
      // Simulate submission

      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: t('contact.successTitle'),
          description: t('contact.successMessage'),
        });
        (e.target as HTMLFormElement).reset();
      } else {
        toast({
          title: t('contact.errorTitle'),
          description: t('contact.errors.sendFailed'),
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: t('contact.errorTitle'),
        description: error instanceof z.ZodError
          ? error.errors[0].message
          : t('contact.errors.sendFailed'),
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.email'),
      value: 'janrakta@gmail.com',
      href: 'mailto:janrakta@gmail.com',
    },
    {
      icon: Phone,
      title: t('contact.phone'),
      value: t('footer.phone'),
      href: 'tel:+02024449527',
    },
    {
      icon: MapPin,
      title: t('contact.address'),
      value: t('contact.addressValue'),
      href: null,
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6 animate-fade-up animation-delay-200">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="bg-white border border-slate-100 shadow-card hover:shadow-elevated transition-all duration-300 rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">{info.title}</h3>
                        {info.href ? (
                          <a href={info.href} className="text-slate-600 hover:text-primary transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-slate-600">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 bg-white border border-slate-100 shadow-card rounded-2xl animate-scale-in animation-delay-400">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-900">
                      {t('contact.form.name')}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      maxLength={100}
                      className="bg-white border-slate-200 focus:border-primary"
                      placeholder={t('contact.form.namePlaceholder')}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-900">
                      {t('contact.form.email')}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      maxLength={255}
                      className="bg-white border-slate-200 focus:border-primary"
                      placeholder={t('contact.form.emailPlaceholder')}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-slate-900">
                    {t('contact.form.subject')}
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    maxLength={200}
                    className="bg-white border-slate-200 focus:border-primary"
                    placeholder={t('contact.form.subjectPlaceholder')}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-900">
                    {t('contact.form.message')}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    minLength={10}
                    maxLength={1000}
                    className="bg-white border-slate-200 focus:border-primary resize-none"
                    placeholder={t('contact.form.messagePlaceholder')}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full rounded-full py-6 font-semibold"
                >
                  {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
