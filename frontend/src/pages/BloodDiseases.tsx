import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Heart, Stethoscope, Activity, FileText, Users, Syringe, AlertCircle, TrendingDown, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const BloodDiseases = () => {
  const statistics = [
    { label: 'Thalassemia Carriers in India', value: '3-4%', color: 'text-rose-600', icon: Users },
    { label: 'Annual Birth Rate (Major)', value: '10,000+', color: 'text-amber-600', icon: TrendingDown },
    { label: 'Transfusion Frequency', value: 'Every 2-4 weeks', color: 'text-blue-600', icon: Activity },
    { label: 'Prevention Rate', value: '100%', color: 'text-emerald-600', icon: Shield }
  ];

  const preventionSteps = [
    {
      title: 'Pre-Marital Screening',
      description: 'Mandatory carrier testing for couples planning marriage. If both partners are carriers, genetic counseling is essential.',
      icon: Heart
    },
    {
      title: 'Prenatal Diagnosis',
      description: 'Chorionic villus sampling (CVS) or amniocentesis during pregnancy can detect Thalassemia Major in the fetus.',
      icon: Stethoscope
    },
    {
      title: 'Genetic Counseling',
      description: 'Professional guidance helps families understand inheritance patterns, risks, and available options for family planning.',
      icon: FileText
    },
    {
      title: 'Community Awareness',
      description: 'Educational programs in schools, colleges, and communities about carrier detection and prevention strategies.',
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
              <BreadcrumbPage>Blood Diseases Awareness</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto animate-fade-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-slate-900 px-4">
            Blood Diseases Awareness
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 px-4">
            Understanding Thalassemia and other hereditary blood disorders - Prevention through awareness
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {statistics.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="bg-white border border-slate-100 shadow-card hover:shadow-elevated transition-all duration-300">
                <CardContent className="p-4 sm:p-6 text-center">
                  <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color} mx-auto mb-2`} />
                  <div className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="space-y-8 sm:space-y-12">
          {/* Overview */}
          <Card className="bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-100 shadow-card">
            <CardHeader className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl sm:text-3xl text-slate-900">
                  Thalassemia: A Preventable Genetic Disorder
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
                Thalassemia is an inherited blood disease characterized by defective hemoglobin production, 
                leading to severe anemia and organ complications. India has the highest burden of Thalassemia 
                globally, with an estimated 10,000-15,000 babies born with Thalassemia Major annually.
              </p>
              <div className="bg-white/50 rounded-lg p-3 sm:p-4 mt-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-slate-700">
                    <strong>Important:</strong> Thalassemia is 100% preventable through carrier detection and genetic counseling 
                    before marriage. Early screening can help couples make informed decisions about family planning.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <Card className="bg-white border border-slate-100 shadow-card hover:shadow-elevated transition-all">
              <CardHeader className="p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-red-50 flex items-center justify-center mb-3">
                  <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                </div>
                <CardTitle className="text-xl sm:text-2xl text-slate-900">Thalassemia Major (Cooley's Anemia)</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <p className="text-sm sm:text-base text-slate-700 mb-4">
                  The most severe form. Symptoms appear within the first two years of life, requiring lifelong blood transfusions every 2-4 weeks.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1.5 flex-shrink-0" />
                    Severe anemia from early childhood
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1.5 flex-shrink-0" />
                    Requires regular blood transfusions
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1.5 flex-shrink-0" />
                    Iron chelation therapy mandatory
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border border-slate-100 shadow-card hover:shadow-elevated transition-all">
              <CardHeader className="p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-3">
                  <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl sm:text-2xl text-slate-900">Thalassemia Minor (Trait/Carrier)</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <p className="text-sm sm:text-base text-slate-700 mb-4">
                  Individuals are mostly asymptomatic with mild anemia but can pass the condition to their children if both parents are carriers.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-1.5 flex-shrink-0" />
                    Usually no symptoms or mild anemia
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-1.5 flex-shrink-0" />
                    Normal life without treatment
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-1.5 flex-shrink-0" />
                    25% risk if both parents are carriers
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Symptoms */}
          <Card className="bg-white border border-slate-100 shadow-card">
            <CardHeader className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-purple-50 flex items-center justify-center flex-shrink-0">
                  <Stethoscope className="w-6 h-6 sm:w-7 sm:h-7 text-purple-600" />
                </div>
                <CardTitle className="text-xl sm:text-2xl text-slate-900">Common Symptoms & Signs</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-slate-700">Severe paleness and chronic fatigue</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-slate-700">Delayed growth and development</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-slate-700">Bone deformities (especially facial bones)</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-slate-700">Enlarged spleen and liver (hepatosplenomegaly)</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-slate-700">Jaundice (yellowing of skin and eyes)</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-slate-700">Dark urine and frequent infections</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Diagnosis */}
          <Card className="bg-white border border-slate-100 shadow-card">
            <CardHeader className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
                </div>
                <CardTitle className="text-xl sm:text-2xl text-slate-900">Diagnosis & Screening Methods</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base text-slate-900 mb-1">Complete Blood Count (CBC)</h4>
                    <p className="text-xs sm:text-sm text-slate-600">Initial screening showing low hemoglobin and abnormal RBC indices</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base text-slate-900 mb-1">Hemoglobin Electrophoresis / HPLC</h4>
                    <p className="text-xs sm:text-sm text-slate-600">Gold standard test identifying hemoglobin variants and quantifying HbA2 and HbF levels</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base text-slate-900 mb-1">Genetic Carrier Testing</h4>
                    <p className="text-xs sm:text-sm text-slate-600">Mandatory for couples planning marriage, especially in high-prevalence communities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base text-slate-900 mb-1">Prenatal Diagnosis</h4>
                    <p className="text-xs sm:text-sm text-slate-600">CVS (10-12 weeks) or amniocentesis (15-20 weeks) for at-risk pregnancies</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Treatment */}
          <Card className="bg-white border border-slate-100 shadow-card">
            <CardHeader className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <Syringe className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-600" />
                </div>
                <CardTitle className="text-xl sm:text-2xl text-slate-900">Treatment Options & Management</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base text-slate-900 mb-1">Regular Blood Transfusions</h4>
                    <p className="text-xs sm:text-sm text-slate-600">Every 2-4 weeks to maintain hemoglobin above 9-10 g/dL. Lifelong requirement for Thalassemia Major patients.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base text-slate-900 mb-1">Iron Chelation Therapy</h4>
                    <p className="text-xs sm:text-sm text-slate-600">Essential to prevent iron overload from repeated transfusions. Medications like Deferasirox or Deferoxamine protect organs from iron toxicity.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base text-slate-900 mb-1">Bone Marrow / Stem Cell Transplantation</h4>
                    <p className="text-xs sm:text-sm text-slate-600">The only curative treatment. Success rate is high with matched sibling donors. Cost ranges from ₹15-30 lakhs in India.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base text-slate-900 mb-1">Supportive Care & Monitoring</h4>
                    <p className="text-xs sm:text-sm text-slate-600">Regular cardiac, liver, and endocrine monitoring. Folic acid supplementation and vaccinations to prevent infections.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Prevention Section */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 sm:p-8 border border-emerald-100">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
                Prevention: The Best Cure
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-700 max-w-3xl mx-auto">
                Thalassemia Major is 100% preventable through carrier screening and informed family planning decisions
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {preventionSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card key={index} className="bg-white border-none shadow-md">
                    <CardHeader className="p-4 sm:p-6">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-emerald-700" />
                        </div>
                        <div>
                          <CardTitle className="text-base sm:text-lg text-slate-900 mb-2">{step.title}</CardTitle>
                          <p className="text-xs sm:text-sm text-slate-600">{step.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Articles & Resources */}
          <Card className="bg-white border border-slate-100 shadow-card">
            <CardHeader className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-amber-600" />
                </div>
                <CardTitle className="text-xl sm:text-2xl text-slate-900">Knowledge Resources & Awareness</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <div className="space-y-4">
                <div className="bg-amber-50 rounded-lg p-3 sm:p-4">
                  <h4 className="font-semibold text-sm sm:text-base text-slate-900 mb-2">Common Myths vs. Facts</h4>
                  <ul className="space-y-2">
                    <li className="text-xs sm:text-sm text-slate-700">
                      <strong>Myth:</strong> Thalassemia is contagious. <strong>Fact:</strong> It's genetic, not infectious.
                    </li>
                    <li className="text-xs sm:text-sm text-slate-700">
                      <strong>Myth:</strong> Carriers should not marry. <strong>Fact:</strong> Carriers can marry non-carriers safely.
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm sm:text-base text-slate-900">Important Resources</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-700">National Thalassemia Welfare Fund provides financial assistance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-700">Free carrier screening programs in several states</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-700">Thalassemia patient support groups across India</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Case Studies */}
          <Card className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 shadow-card">
            <CardHeader className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-600" />
                </div>
                <CardTitle className="text-xl sm:text-2xl text-slate-900">Real-World Impact & Case Studies</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0 space-y-4 sm:space-y-6">
              <div className="bg-white rounded-lg p-3 sm:p-4 border-l-4 border-indigo-600">
                <h4 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">Lifetime Transfusion Dependency</h4>
                <p className="text-sm sm:text-base text-slate-700 mb-3">
                  Children with Thalassemia Major require blood transfusions every 2-4 weeks throughout their lives. 
                  Each patient needs approximately 12-24 units of blood annually, highlighting the critical importance 
                  of regular voluntary blood donation.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 italic">
                  "A single voluntary donor's regular donations can significantly support a Thalassemia patient's yearly treatment needs."
                </p>
              </div>
              <div className="bg-white rounded-lg p-3 sm:p-4 border-l-4 border-emerald-600">
                <h4 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">Prevention Success Stories</h4>
                <p className="text-sm sm:text-base text-slate-700 mb-3">
                  Communities in Gujarat, Maharashtra, and Punjab implementing mandatory premarital carrier screening 
                  have seen 60-80% reduction in Thalassemia Major births over the past decade. These programs combine 
                  free screening, genetic counseling, and community education.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 italic">
                  "Early detection and informed decision-making have prevented thousands of families from the burden of Thalassemia Major."
                </p>
              </div>
              <div className="bg-white rounded-lg p-3 sm:p-4 border-l-4 border-amber-600">
                <h4 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">Financial & Emotional Burden</h4>
                <p className="text-sm sm:text-base text-slate-700">
                  Annual treatment costs for Thalassemia Major range from ₹2-5 lakhs, creating significant economic 
                  burden on families. Beyond finances, the emotional toll of frequent hospital visits, treatment side 
                  effects, and uncertainty about the future impacts entire families. This reinforces why prevention 
                  through carrier screening is crucial.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BloodDiseases;
