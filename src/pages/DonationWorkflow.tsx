import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ClipboardCheck, Droplets, TestTube, Boxes, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const DonationWorkflow = () => {
  const { t } = useTranslation();

  const handleDownloadGuidelines = () => {
    // Create a simple PDF download or link to guidelines
    const guidelinesText = `
BLOOD DONATION GUIDELINES

Before Donation:
- Get adequate sleep the night before
- Eat a healthy meal before donating
- Drink plenty of water
- Bring a valid ID
- Fill out the health questionnaire honestly

During Donation:
- Relax and breathe normally
- Alert staff if you feel dizzy or uncomfortable
- The process takes 8-12 minutes

After Donation:
- Rest for 10-15 minutes
- Drink fluids and have a snack
- Avoid heavy exercise for 24 hours
- Avoid alcohol for 24 hours
- Keep the bandage on for several hours

When to Donate Again:
- Whole blood: Every 56 days
- Platelets: Every 7 days
- Plasma: Every 28 days

Contact your blood bank if you have any concerns.
    `;
    
    const blob = new Blob([guidelinesText], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'donor-guidelines.txt';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const statistics = [
    { label: 'Average Donation Time', value: '8-12 mins', color: 'text-blue-600' },
    { label: 'Blood Volume Collected', value: '350-450 ml', color: 'text-rose-600' },
    { label: 'Lives Saved Per Donation', value: 'Up to 3', color: 'text-emerald-600' },
    { label: 'Recovery Time', value: '24-48 hrs', color: 'text-purple-600' }
  ];

  const sections = [
    {
      icon: ClipboardCheck,
      title: 'Before Donation',
      color: 'bg-blue-50',
      iconColor: 'text-blue-600',
      items: [
        {
          heading: 'Registration and Donor History',
          text: 'Prospective donors provide demographic information and complete a mandatory health questionnaire related to travel, medications, and medical history. This includes questions about recent illnesses, surgeries, vaccinations, and lifestyle factors that might affect blood safety.'
        },
        {
          heading: 'Vital Check and Screening',
          text: 'Healthcare professionals measure blood pressure, hemoglobin levels (minimum 12.5 g/dL for women, 13.0 g/dL for men), weight (minimum 50 kg), pulse rate, and body temperature to confirm donor eligibility. This ensures the safety of both donor and recipient.'
        },
        {
          heading: 'Counseling and Consent',
          text: 'Donors receive official guidance about the process, benefits, and potential risks, followed by signed consent that authorizes the collection. Counselors explain the importance of honest disclosure and answer any questions about the donation process.'
        },
        {
          heading: 'Pre-Donation Instructions',
          text: 'Donors are advised to have had adequate sleep, eaten a healthy meal, and consumed plenty of fluids before donation. They should avoid fatty foods and alcohol 24 hours prior to donation for optimal blood quality.'
        }
      ]
    },
    {
      icon: Droplets,
      title: 'Blood Draw',
      color: 'bg-rose-50',
      iconColor: 'text-primary',
      items: [
        {
          heading: 'Phlebotomy Procedure',
          text: 'A sterile needle is used to collect approximately 350 to 450 ml of whole blood under aseptic conditions. The collection site is thoroughly cleaned with antiseptic solution, and single-use sterile equipment ensures complete safety.'
        },
        {
          heading: 'Duration and Monitoring',
          text: 'The process typically takes 8 to 12 minutes, with medical supervision throughout. Trained staff monitor donors for any signs of discomfort or adverse reactions. Donors can squeeze a stress ball to improve blood flow during collection.'
        },
        {
          heading: 'Post-Donation Care',
          text: 'Donors are offered fluids and rest briefly to prevent dizziness. They receive recommendations to avoid heavy exercise and alcohol for the next 24 hours. Refreshments are provided, and donors are monitored for 10-15 minutes before leaving.'
        },
        {
          heading: 'Donation Frequency Guidelines',
          text: 'Whole blood can be donated every 56 days, platelets every 7 days, and plasma every 28 days. Maintaining proper intervals ensures donor health and blood quality.'
        }
      ]
    },
    {
      icon: TestTube,
      title: 'Testing and Quality Assurance',
      color: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
      items: [
        {
          heading: 'Testing for Transfusion Safety',
          text: 'Each unit undergoes screening for transmissible infections using advanced testing methods including ELISA and NAT (Nucleic Acid Testing). Tests include: HIV-1 and HIV-2, Hepatitis B (HBsAg) and Hepatitis C (Anti-HCV), Syphilis (VDRL/RPR), and Malaria. NAT testing can detect infections during the window period when antibodies are not yet detectable.'
        },
        {
          heading: 'Blood Grouping and Cross-Matching',
          text: 'Both ABO and Rh typing are performed using automated systems for accuracy. Compatibility testing ensures the safest match for the patient. Additional antibody screening is conducted to detect irregular antibodies that could cause transfusion reactions.'
        },
        {
          heading: 'Quality Control Measures',
          text: 'All testing equipment undergoes regular calibration and validation. Internal and external quality control samples are processed daily. Any reactive results are confirmed through repeat testing and alternative methods before deferring donors.'
        }
      ]
    },
    {
      icon: Boxes,
      title: 'Component Segregation',
      color: 'bg-purple-50',
      iconColor: 'text-purple-600',
      items: [
        {
          heading: 'Separation Techniques',
          text: 'The collected blood is centrifuged using refrigerated centrifuges at controlled speeds and temperatures to isolate life-saving components: Packed Red Blood Cells (stored at 2-6°C for up to 35-42 days, used for trauma and anemia cases), Platelets (stored at 20-24°C with constant agitation for 5 days, critical for cancer therapy and bleeding disorders), Fresh Frozen Plasma (frozen at -30°C or below within 6-8 hours, essential for liver disease and surgeries, valid for 1 year), and Cryoprecipitate (rich in clotting factors, used to treat hemophilia and clotting issues).'
        },
        {
          heading: 'Leukoreduction Process',
          text: 'White blood cells are removed through filtration to reduce the risk of febrile reactions, CMV transmission, and HLA alloimmunization. This process improves transfusion safety and is especially important for immunocompromised patients.'
        },
        {
          heading: 'Pathogen Inactivation',
          text: 'Advanced pathogen reduction technologies treat platelets and plasma to inactivate bacteria, viruses, and parasites while preserving therapeutic properties. This adds an extra layer of safety to the blood supply.'
        },
        {
          heading: 'Outcome',
          text: 'Through component therapy, a single donation can support up to three different patients, enhancing clinical impact. This approach maximizes the utility of each donation and ensures patients receive exactly what they need.'
        }
      ]
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
              <BreadcrumbPage>Donation Workflow</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Header */}
        <div className="text-center mb-12 max-w-4xl mx-auto animate-fade-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-slate-900">
            Donation Workflow
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 mb-6 px-4">
            Understanding the complete blood donation process from registration to component segregation
          </p>
          <Button 
            onClick={handleDownloadGuidelines}
            className="mt-4"
            variant="outline"
            size="lg"
          >
            <Download className="mr-2 w-4 h-4" />
            Download Donor Guidelines
          </Button>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {statistics.map((stat, index) => (
            <Card key={index} className="bg-white border border-slate-100 shadow-card hover:shadow-elevated transition-all duration-300">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-600">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Workflow Sections */}
        <div className="space-y-8 sm:space-y-12">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <Card 
                key={index}
                className="bg-white border border-slate-100 shadow-card hover:shadow-elevated transition-all duration-300"
              >
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl ${section.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${section.iconColor}`} />
                    </div>
                    <CardTitle className="text-2xl sm:text-3xl text-slate-900">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <div className="space-y-4 sm:space-y-6">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="pl-3 sm:pl-4 border-l-2 sm:border-l-4 border-slate-200 hover:border-slate-400 transition-colors">
                        <h4 className="text-base sm:text-lg font-semibold text-slate-900 mb-1 sm:mb-2">
                          {item.heading}
                        </h4>
                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DonationWorkflow;
