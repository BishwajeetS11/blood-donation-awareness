import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Video } from 'lucide-react';

const Media = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-32 pb-24 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-up">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Video className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            {t('media.title')}
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t('media.subtitle')}
          </p>
        </div>

        {/* Video Card */}
        <Card className="bg-white border border-slate-100 shadow-card rounded-2xl overflow-hidden animate-scale-in animation-delay-200">
          <CardContent className="p-0">
            <div className="aspect-video bg-slate-100 relative group">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Q55LrC7vijM"
                title="Blood Donation Process"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300 pointer-events-none" />
            </div>
          </CardContent>
        </Card>

        {/* Description Card */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-up animation-delay-400">
          <Card className="bg-white border border-slate-100 shadow-card rounded-2xl">
            <CardContent className="p-8 text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Play className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Simple Process</h3>
              <p className="text-sm text-slate-600">
                Watch how straightforward and quick the donation process is
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border border-slate-100 shadow-card rounded-2xl">
            <CardContent className="p-8 text-center">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🩺</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Safe & Sterile</h3>
              <p className="text-sm text-slate-600">
                All equipment is sterile and used only once
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border border-slate-100 shadow-card rounded-2xl">
            <CardContent className="p-8 text-center">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏱️</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Quick Visit</h3>
              <p className="text-sm text-slate-600">
                The entire process takes less than an hour
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-8 animate-fade-up animation-delay-600">
          <Card className="bg-white border border-slate-100 shadow-card rounded-2xl">
            <CardContent className="p-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">About the Process</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                {t('media.description')}
              </p>
              <p className="text-slate-600 leading-relaxed">
                The video demonstrates each step clearly, from the initial health screening to the actual donation and post-donation care. You'll see that our trained medical professionals ensure your comfort and safety throughout the entire experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Media;
