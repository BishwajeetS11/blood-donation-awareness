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

  const sections = [
    {
      icon: ClipboardCheck,
      title: 'Before Donation',
      color: 'bg-blue-50',
      iconColor: 'text-blue-600',
      items: [
        {
          heading: 'Registration and Donor History',
          text: 'Prospective donors provide demographic information and complete a mandatory health questionnaire related to travel, medications, and medical history.'
        },
        {
          heading: 'Vital Check and Screening',
          text: 'Healthcare professionals measure blood pressure, hemoglobin levels, weight, pulse, and temperature to confirm donor eligibility.'
        },
        {
          heading: 'Counseling and Consent',
          text: 'Donors receive official guidance about the process, benefits, and potential risks, followed by signed consent that authorizes the collection.'
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
          text: 'A sterile needle is used to collect approximately 350 to 450 ml of whole blood under aseptic conditions.'
        },
        {
          heading: 'Duration and Monitoring',
          text: 'The process typically takes 8 to 12 minutes, with medical supervision throughout.'
        },
        {
          heading: 'Post-Donation Care',
          text: 'Donors are offered fluids and rest briefly to prevent dizziness. They receive recommendations to avoid heavy exercise and alcohol for the next 24 hours.'
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
          text: 'Each unit undergoes screening for transmissible infections, including HIV-1 and HIV-2, Hepatitis B and Hepatitis C, Syphilis, and Malaria.'
        },
        {
          heading: 'Blood Grouping and Cross-Matching',
          text: 'Both ABO and Rh typing are performed. Compatibility testing ensures the safest match for the patient.'
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
          text: 'The collected blood is centrifuged to isolate life-saving components: Packed Red Blood Cells (used for trauma and anemia cases), Platelets (critical for cancer therapy and bleeding disorders), Fresh Frozen Plasma (essential for liver disease and surgeries), and Cryoprecipitate (used to treat hemophilia and clotting issues).'
        },
        {
          heading: 'Outcome',
          text: 'Through component therapy, a single donation can support up to three different patients, enhancing clinical impact.'
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
        <div className="text-center mb-16 max-w-3xl mx-auto animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            Donation Workflow
          </h1>
          <p className="text-xl text-slate-600">
            Understanding the complete blood donation process from registration to component segregation
          </p>
          <Button 
            onClick={handleDownloadGuidelines}
            className="mt-6"
            variant="outline"
          >
            <Download className="mr-2 w-4 h-4" />
            Download Donor Guidelines
          </Button>
        </div>

        {/* Workflow Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <Card 
                key={index}
                className="bg-white border border-slate-100 shadow-card hover:shadow-elevated transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-2xl ${section.color} flex items-center justify-center`}>
                      <Icon className={`w-8 h-8 ${section.iconColor}`} />
                    </div>
                    <CardTitle className="text-3xl text-slate-900">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="pl-4 border-l-4 border-slate-200">
                        <h4 className="text-lg font-semibold text-slate-900 mb-2">
                          {item.heading}
                        </h4>
                        <p className="text-slate-700 leading-relaxed">
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
