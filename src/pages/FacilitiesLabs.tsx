import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Building2, Refrigerator, Microscope, TestTubes, ShieldCheck, Bed } from 'lucide-react';
import { Link } from 'react-router-dom';

const FacilitiesLabs = () => {
  const facilities = [
    {
      icon: Building2,
      title: 'Blood Collection Facilities',
      description: 'Comfortable donation chairs, sterile equipment, and professional phlebotomists ensure a safe and convenient donation experience.',
      color: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Refrigerator,
      title: 'Blood Storage & Preservation',
      description: 'Temperature-controlled refrigerators and deep freezers ensure the correct storage conditions: RBCs at 2–6°C, Platelets at 20–24°C with constant agitation, and Plasma frozen at −30°C or below.',
      color: 'bg-cyan-50',
      iconColor: 'text-cyan-600'
    },
    {
      icon: Microscope,
      title: 'Pathology & Serology Laboratories',
      description: 'Advanced analyzers conduct mandatory infectious disease screenings. Qualified lab technicians follow national and WHO safety standards.',
      color: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: TestTubes,
      title: 'Component Separation Laboratory',
      description: 'Automated centrifugation systems and sterile transfer apparatus allow accurate separation of whole blood into components.',
      color: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    },
    {
      icon: ShieldCheck,
      title: 'Quality Control & Hemovigilance Unit',
      description: 'Routine quality assessments of each component. Traceability systems to monitor adverse reactions and maintain patient safety.',
      color: 'bg-amber-50',
      iconColor: 'text-amber-600'
    },
    {
      icon: Bed,
      title: 'Donor Recovery & Counseling Room',
      description: 'Donors relax after donation under supervision and receive post-care guidance. Counselors address concerns related to diet, lifestyle, and repeat donation.',
      color: 'bg-rose-50',
      iconColor: 'text-primary'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/awareness">Awareness</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Facilities & Labs</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            Facilities & Labs
          </h1>
          <p className="text-xl text-slate-600">
            State-of-the-art facilities and laboratories ensuring safe blood donation and testing
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <Card 
                key={index}
                className="bg-white border border-slate-100 shadow-card hover:shadow-elevated transition-all duration-300"
              >
                <CardHeader>
                  <div className={`w-14 h-14 rounded-2xl ${facility.color} flex items-center justify-center mb-4`}>
                    <Icon className={`w-7 h-7 ${facility.iconColor}`} />
                  </div>
                  <CardTitle className="text-xl text-slate-900">{facility.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 leading-relaxed">
                    {facility.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FacilitiesLabs;
