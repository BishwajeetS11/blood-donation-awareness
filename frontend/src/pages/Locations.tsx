import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Locations = () => {
  const { t } = useTranslation();

  const locations = [
    {
      name: t('locations.center1.name'),
      address: t('locations.center1.address'),
      phone: '+91 9876543210',
      hours: t('locations.hours.weekdays'),
      city: t('locations.cities.mumbai'),
    },
    {
      name: t('locations.center2.name'),
      address: t('locations.center2.address'),
      phone: '+91 9876543211',
      hours: t('locations.hours.allDays'),
      city: t('locations.cities.delhi'),
    },
    {
      name: t('locations.center3.name'),
      address: t('locations.center3.address'),
      phone: '+91 9876543212',
      hours: t('locations.hours.weekdays'),
      city: t('locations.cities.bangalore'),
    },
    {
      name: t('locations.center4.name'),
      address: t('locations.center4.address'),
      phone: '+91 9876543213',
      hours: t('locations.hours.allDays'),
      city: t('locations.cities.pune'),
    },
    {
      name: t('locations.center5.name'),
      address: t('locations.center5.address'),
      phone: '+91 9876543214',
      hours: t('locations.hours.weekdays'),
      city: t('locations.cities.chennai'),
    },
    {
      name: t('locations.center6.name'),
      address: t('locations.center6.address'),
      phone: '+91 9876543215',
      hours: t('locations.hours.allDays'),
      city: t('locations.cities.kolkata'),
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <MapPin className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            {t('locations.title')}
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t('locations.subtitle')}
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <Card
              key={index}
              className="bg-white border border-slate-100 shadow-card hover:shadow-elevated transition-all duration-500 rounded-2xl animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                    {location.city}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {location.name}
                  </h3>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-600 text-sm">{location.address}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    <a href={`tel:${location.phone}`} className="text-slate-600 text-sm hover:text-primary transition-colors">
                      {location.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    <p className="text-slate-600 text-sm">{location.hours}</p>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full rounded-full"
                  onClick={() => window.open(`https://www.google.com/maps/search/${encodeURIComponent(location.address)}`, '_blank')}
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  {t('locations.getDirections')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 animate-fade-up animation-delay-600">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 rounded-3xl">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {t('locations.emergency.title')}
              </h2>
              <p className="text-lg text-slate-700 mb-6">
                {t('locations.emergency.description')}
              </p>
              <a
                href="tel:+02024449527"
                className="inline-flex items-center gap-2 text-2xl font-bold text-primary hover:text-primary-hover transition-colors"
              >
                <Phone className="w-6 h-6" />
                {t('footer.phone')}
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Locations;
