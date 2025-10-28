import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Heart, Check } from 'lucide-react';
const BASE_API_URL = import.meta.env.VITE_BASE_API_URL || 'http://localhost:5000';

const Enroll = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bloodType: '',
    city: '',
  });

  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  const benefits = [
  t('enroll.b1'),
  t('enroll.b2'),
  t('enroll.b3'),
  t('enroll.b4'),
];

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  if (!formData.name || !formData.email || !formData.phone || !formData.bloodType || !formData.city) {
    toast({
      title: "Error",
      description: "Please fill in all fields",
      variant: "destructive",
    });
    return;
  }

  try {
    const response = await fetch(`${BASE_API_URL}/api/enroll`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      toast({
        title: t('enroll.successTitle'),
        description: t('enroll.success'),
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        bloodType: '',
        city: '',
      });
    } else {
      toast({
        title: t('enroll.errorTitle'),
        description: t('enroll.error'),
        variant: "destructive",
      });
    }
  } catch (err) {
    toast({
      title: t('enroll.errorTitle'),
      description: t('enroll.networkError'),
      variant: "destructive",
    });
    console.log("Submission error:", err);
  }
};


  return (
    <div className="min-h-screen pt-32 pb-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-up">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            {t('enroll.title')}
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t('enroll.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Benefits Card */}
          <div className="lg:col-span-1 animate-scale-in">
            <Card className="bg-white border border-slate-100 shadow-card rounded-2xl sticky top-24">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl text-slate-900">{t('enroll.donorBenefits')}</CardTitle>
                <CardDescription className="text-slate-600">
                  {t('enroll.whatBenefits')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Registration Form */}
          <div className="lg:col-span-2 animate-scale-in animation-delay-200">
            <Card className="bg-white border border-slate-100 shadow-card rounded-2xl">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl text-slate-900">Registration Form</CardTitle>
                <CardDescription className="text-slate-600">
                  Fill in your details to become a registered blood donor
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-slate-900 font-medium">
                      {t('enroll.name')}
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="rounded-lg border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-900 font-medium">
                      {t('enroll.email')}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="rounded-lg border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-slate-900 font-medium">
                      {t('enroll.phone')}
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 9876543210"
                      className="rounded-lg border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="bloodType" className="text-slate-900 font-medium">
                        {t('enroll.bloodType')}
                      </Label>
                      <Select
                        value={formData.bloodType}
                        onValueChange={(value) => setFormData({ ...formData, bloodType: value })}
                      >
                        <SelectTrigger className="rounded-lg border-slate-200 focus:ring-2 focus:ring-primary/20">
                          <SelectValue placeholder={t('enroll.selectBloodType')} />
                        </SelectTrigger>
                        <SelectContent>
                          {bloodTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="city" className="text-slate-900 font-medium">
                        {t('enroll.city')}
                      </Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="Mumbai"
                        className="rounded-lg border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        required
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full rounded-full py-6 text-lg font-semibold shadow-elevated hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
                    size="lg"
                  >
                    {t('enroll.submit')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enroll;
