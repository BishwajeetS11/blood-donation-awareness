import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Heart, Stethoscope, Activity, FileText, Users, Syringe } from 'lucide-react';
import { Link } from 'react-router-dom';

const BloodDiseases = () => {
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
              <BreadcrumbPage>Blood Diseases Awareness</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            Blood Diseases Awareness
          </h1>
          <p className="text-xl text-slate-600">
            Understanding Thalassemia and other hereditary blood disorders
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Overview */}
          <Card className="bg-white border border-slate-100 shadow-card">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-rose-50 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-3xl text-slate-900">
                  Thalassemia: A Preventable Genetic Disorder
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-slate-700 leading-relaxed">
                Thalassemia is an inherited blood disease characterized by defective hemoglobin production, 
                leading to severe anemia and organ complications.
              </p>
            </CardContent>
          </Card>

          {/* Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white border border-slate-100 shadow-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-3">
                  <Activity className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="text-2xl text-slate-900">Thalassemia Major</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Symptoms appear early in childhood, requiring lifelong blood transfusions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-slate-100 shadow-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-3">
                  <Activity className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-2xl text-slate-900">Thalassemia Minor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Individuals remain mostly asymptomatic but can pass the condition to children.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Symptoms */}
          <Card className="bg-white border border-slate-100 shadow-card">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center">
                  <Stethoscope className="w-7 h-7 text-purple-600" />
                </div>
                <CardTitle className="text-2xl text-slate-900">Symptoms</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-slate-700">Paleness and fatigue</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-slate-700">Delayed growth</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-slate-700">Bone deformities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-slate-700">Enlarged spleen and liver</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Diagnosis */}
          <Card className="bg-white border border-slate-100 shadow-card">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">
                  <FileText className="w-7 h-7 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-slate-900">Diagnosis & Screening</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                  <span className="text-slate-700">Complete blood count (CBC)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                  <span className="text-slate-700">Hemoglobin electrophoresis</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                  <span className="text-slate-700">Genetic carrier testing for couples planning marriage</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Treatment */}
          <Card className="bg-white border border-slate-100 shadow-card">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center">
                  <Syringe className="w-7 h-7 text-emerald-600" />
                </div>
                <CardTitle className="text-2xl text-slate-900">Treatment</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                  <span className="text-slate-700">Regular blood transfusions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                  <span className="text-slate-700">Iron chelation therapy to prevent iron overload</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                  <span className="text-slate-700">Bone marrow transplantation in severe cases</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Articles & Resources */}
          <Card className="bg-white border border-slate-100 shadow-card">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center">
                  <FileText className="w-7 h-7 text-amber-600" />
                </div>
                <CardTitle className="text-2xl text-slate-900">Articles & Knowledge Resources</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-600 mt-2 flex-shrink-0" />
                  <span className="text-slate-700">Myths vs. Facts about hereditary blood disorders</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-600 mt-2 flex-shrink-0" />
                  <span className="text-slate-700">Importance of carrier detection programs in India</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-600 mt-2 flex-shrink-0" />
                  <span className="text-slate-700">National policies and support groups improving Thalassemia care</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Case Studies */}
          <Card className="bg-white border border-slate-100 shadow-card">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center">
                  <Users className="w-7 h-7 text-indigo-600" />
                </div>
                <CardTitle className="text-2xl text-slate-900">Case Studies</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-4 border-indigo-600 pl-4">
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Lifetime Support Cases</h4>
                <p className="text-slate-700">
                  Children with Thalassemia Major who rely on consistent platelet and RBC transfusions.
                </p>
              </div>
              <div className="border-l-4 border-indigo-600 pl-4">
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Carrier Awareness Programs</h4>
                <p className="text-slate-700">
                  Communities implementing mandatory premarital screening with significant reduction in cases.
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
