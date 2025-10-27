import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Building2, Refrigerator, Microscope, TestTubes, ShieldCheck, Bed, Droplets, Activity, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const FacilitiesLabs = () => {
  const facilities = [
    {
      icon: Building2,
      title: 'Blood Collection Facilities',
      description: 'State-of-the-art donor rooms equipped with comfortable donation chairs, advanced phlebotomy equipment, and professional medical staff. Operating 365 days a year from 8 AM to 8 PM, ensuring accessibility for all voluntary donors. Equipped with donor management systems and automated donor screening tools.',
      color: 'bg-blue-50',
      iconColor: 'text-blue-600',
      details: [
        'Comfortable reclining donor chairs with adjustable positions',
        'Sterile single-use collection sets and safety-engineered needles',
        'Professional phlebotomists with continuous training',
        'Donor privacy screens and comfortable waiting areas',
        'Emergency medical equipment and trained first-aid responders'
      ]
    },
    {
      icon: Refrigerator,
      title: 'Blood Storage & Preservation',
      description: 'Advanced temperature-controlled storage systems with continuous monitoring ensure optimal preservation conditions: Red Blood Cells at 2–6°C in validated blood bank refrigerators, Platelets at 20–24°C with constant agitation in platelet incubators, and Plasma frozen at −30°C or below in deep freezers with backup power systems.',
      color: 'bg-cyan-50',
      iconColor: 'text-cyan-600',
      details: [
        'Refrigerators with digital temperature monitoring and alarms',
        'Platelet agitators maintaining optimal storage conditions',
        'Ultra-low temperature freezers for plasma and cryoprecipitate',
        'Backup generators ensuring uninterrupted cold chain',
        'RFID-based inventory management for component tracking'
      ]
    },
    {
      icon: Microscope,
      title: 'Pathology & Serology Laboratories',
      description: 'Equipped with automated ELISA systems, NAT platforms (COBAS TaqScreen MPX for HIV, HBV, HCV), and advanced blood grouping analyzers. Qualified laboratory technicians conduct mandatory screening following National Blood Transfusion Council and WHO safety standards.',
      color: 'bg-purple-50',
      iconColor: 'text-purple-600',
      details: [
        'Automated ELISA systems with daily quality control',
        'NAT testing platform detecting infections in window period',
        'Automated blood grouping (Neo Iris, Automax systems)',
        'Serological testing for HIV, HBV, HCV, Syphilis, Malaria',
        'Regular proficiency testing and external quality assessment'
      ]
    },
    {
      icon: TestTubes,
      title: 'Component Separation Laboratory',
      description: 'Advanced automated centrifugation systems (refrigerated centrifuges) and sterile connecting devices enable precise separation of whole blood into therapeutic components. Automated component extractors ensure standardized processing with minimal manual intervention.',
      color: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
      details: [
        'Refrigerated centrifuges with programmable protocols',
        'Automated component extractors for precision',
        'Plasma expressors and platelet separation systems',
        'Sterile connection devices preventing contamination',
        'Leukoreduction filters for enhanced safety'
      ]
    },
    {
      icon: ShieldCheck,
      title: 'Quality Control & Hemovigilance Unit',
      description: 'Comprehensive quality management system conducting routine assessments of each component for volume, hemoglobin content, sterility, and storage conditions. Traceability systems monitor adverse reactions, near-miss events, and maintain continuous patient safety surveillance.',
      color: 'bg-amber-50',
      iconColor: 'text-amber-600',
      details: [
        'Quality control testing on representative samples',
        'Donor and recipient traceability system',
        'Adverse event reporting and investigation',
        'Regular internal audits and compliance checks',
        'Look-back procedures for post-donation information'
      ]
    },
    {
      icon: Bed,
      title: 'Donor Recovery & Counseling Room',
      description: 'Dedicated rest area where donors relax post-donation under medical supervision. Refreshments including fluids and snacks help restore blood volume. Trained counselors provide personalized post-care guidance, address concerns related to diet, lifestyle, repeat donation eligibility, and answer questions about the donation experience.',
      color: 'bg-rose-50',
      iconColor: 'text-primary',
      details: [
        'Comfortable seating area with medical supervision',
        'Complimentary refreshments and hydration stations',
        'Post-donation counseling on recovery and health',
        'Information about repeat donation schedules',
        'Emergency response protocols for adverse reactions'
      ]
    }
  ];

  const additionalServices = [
    {
      title: 'Apheresis & Plateletpheresis Services',
      description: 'Advanced single-donor platelet collection using automated apheresis machines (Haemonetics, Trima Accel). Provides higher platelet yields with reduced donor exposure for cancer patients and transplant recipients.',
      icon: Droplets
    },
    {
      title: 'Blood Irradiation Facility',
      description: 'BARC BI-2000 blood irradiator for preventing Transfusion-Associated Graft-versus-Host Disease (TA-GVHD) in immunocompromised patients. Critical for bone marrow transplant and chemotherapy patients.',
      icon: ShieldCheck
    },
    {
      title: 'Therapeutic Procedures',
      description: 'Therapeutic Phlebotomy (TPH) for polycythemia patients and Therapeutic Plasma Exchange (TPE) for treating neurological and autoimmune disorders using automated systems.',
      icon: Activity
    },
    {
      title: 'Donor Services',
      description: 'Raktadoot blood courier service ensuring timely delivery, blood group confirmation certificates, donor test reports, and voluntary donor recognition programs.',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen pt-24 sm:pt-32 pb-16 sm:pb-24 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6 sm:mb-8">
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
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto animate-fade-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-slate-900 px-4">
            Facilities & Labs
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 px-4">
            State-of-the-art facilities and laboratories ensuring safe blood donation, testing, and component preparation
          </p>
        </div>

        {/* Main Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <Card 
                key={index}
                className="bg-white border border-slate-100 shadow-card hover:shadow-elevated transition-all duration-300 flex flex-col"
              >
                <CardHeader className="p-4 sm:p-6">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl ${facility.color} flex items-center justify-center mb-3 sm:mb-4`}>
                    <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${facility.iconColor}`} />
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-slate-900">{facility.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0 flex-grow">
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                    {facility.description}
                  </p>
                  <div className="space-y-2">
                    {facility.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 flex-shrink-0" />
                        <p className="text-xs sm:text-sm text-slate-600">{detail}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Services Section */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-slate-900 text-center px-4">
            Additional Services & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="bg-gradient-to-br from-white to-slate-50 border border-slate-100 shadow-card hover:shadow-elevated transition-all duration-300">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg sm:text-xl text-slate-900 mb-2">{service.title}</CardTitle>
                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Accreditation & Standards */}
        <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-6 sm:p-8">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
                Accreditation & Quality Standards
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed">
                Our facilities comply with National Blood Transfusion Council (NBTC) guidelines, Drugs and Cosmetics Act regulations, 
                and World Health Organization (WHO) standards. Regular inspections, internal audits, and external quality assessment 
                programs ensure continuous improvement and maintain the highest standards of blood safety and transfusion medicine.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FacilitiesLabs;
