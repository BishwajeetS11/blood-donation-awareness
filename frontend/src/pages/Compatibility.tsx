import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Droplet, ArrowRight, Info } from 'lucide-react';

const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

const compatibilityData: Record<string, { canDonateTo: string[]; canReceiveFrom: string[] }> = {
  'O-': { canDonateTo: ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'], canReceiveFrom: ['O-'] },
  'O+': { canDonateTo: ['O+', 'A+', 'B+', 'AB+'], canReceiveFrom: ['O-', 'O+'] },
  'A-': { canDonateTo: ['A-', 'A+', 'AB-', 'AB+'], canReceiveFrom: ['O-', 'A-'] },
  'A+': { canDonateTo: ['A+', 'AB+'], canReceiveFrom: ['O-', 'O+', 'A-', 'A+'] },
  'B-': { canDonateTo: ['B-', 'B+', 'AB-', 'AB+'], canReceiveFrom: ['O-', 'B-'] },
  'B+': { canDonateTo: ['B+', 'AB+'], canReceiveFrom: ['O-', 'O+', 'B-', 'B+'] },
  'AB-': { canDonateTo: ['AB-', 'AB+'], canReceiveFrom: ['O-', 'A-', 'B-', 'AB-'] },
  'AB+': { canDonateTo: ['AB+'], canReceiveFrom: ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'] },
};

const Compatibility = () => {
  const { t } = useTranslation();
  const [selectedBloodType, setSelectedBloodType] = useState<string | null>(null);

  const compatibility = selectedBloodType ? compatibilityData[selectedBloodType] : null;

  return (
    <div className="min-h-screen pt-32 pb-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Droplet className="w-10 h-10 text-primary" fill="currentColor" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            {t('compatibility.title')}
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t('compatibility.subtitle')}
          </p>
        </div>

        {/* Blood Type Selection */}
        <div className="mb-12 animate-scale-in animation-delay-200">
          <Card className="bg-white border border-slate-100 shadow-card rounded-2xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                {t('compatibility.selectType')}
              </h2>
              <div className="grid grid-cols-4 gap-4">
                {bloodTypes.map((type) => (
                  <Button
                    key={type}
                    onClick={() => setSelectedBloodType(type)}
                    variant={selectedBloodType === type ? 'default' : 'outline'}
                    className="h-20 text-2xl font-bold rounded-2xl transition-all duration-300"
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Compatibility Results */}
        {compatibility && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-up">
            {/* Can Donate To */}
            <Card className="bg-white border border-slate-100 shadow-card rounded-2xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {t('compatibility.canDonateTo')}
                  </h3>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {compatibility.canDonateTo.map((type) => (
                    <div
                      key={type}
                      className="aspect-square rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-lg font-bold text-emerald-700"
                    >
                      {type}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Can Receive From */}
            <Card className="bg-white border border-slate-100 shadow-card rounded-2xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-blue-600 rotate-180" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {t('compatibility.canReceiveFrom')}
                  </h3>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {compatibility.canReceiveFrom.map((type) => (
                    <div
                      key={type}
                      className="aspect-square rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-lg font-bold text-blue-700"
                    >
                      {type}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Information Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-up animation-delay-400">
          <Card className="bg-primary/5 border-primary/20 rounded-2xl">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Info className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {t('compatibility.universalDonor.title')}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    {t('compatibility.universalDonor.description')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-emerald-50 border-emerald-200 rounded-2xl">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Info className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {t('compatibility.universalRecipient.title')}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    {t('compatibility.universalRecipient.description')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Compatibility;
