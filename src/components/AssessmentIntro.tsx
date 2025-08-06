import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, TrendingUp, Shield, Brain } from "lucide-react";
import medicalCodingIcon from "@/assets/medical-coding-icons.jpg";

interface AssessmentIntroProps {
  onStart: () => void;
}

export const AssessmentIntro = ({ onStart }: AssessmentIntroProps) => {
  const careerHighlights = [
    { icon: <TrendingUp className="h-5 w-5 text-success" />, text: "8% job growth (faster than average)" },
    { icon: <Users className="h-5 w-5 text-primary" />, text: "Work independently or in teams" },
    { icon: <Shield className="h-5 w-5 text-accent" />, text: "Essential healthcare support role" },
    { icon: <Brain className="h-5 w-5 text-warning" />, text: "Detail-oriented analytical work" }
  ];

  const assessmentFeatures = [
    "Psychometric personality evaluation",
    "Technical aptitude assessment", 
    "WISCAR framework analysis",
    "Personalized career recommendations",
    "Learning path guidance"
  ];

  return (
    <div className="space-y-8">
      <Card className="gradient-card shadow-elegant">
        <CardHeader className="text-center pb-6">
          <div className="flex justify-center mb-4">
            <img 
              src={medicalCodingIcon} 
              alt="Medical Coding" 
              className="w-20 h-20 rounded-full object-cover shadow-card"
            />
          </div>
          <Badge className="mb-2 bg-primary text-primary-foreground">
            Healthcare Career Assessment
          </Badge>
          <CardTitle className="text-2xl">About Medical Coding</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-center text-muted-foreground leading-relaxed">
            Medical Coding involves converting patient health information into standardized medical codes 
            using classification systems like ICD-10, CPT, and HCPCS. This critical role ensures accurate 
            billing, insurance processing, and healthcare data management.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {careerHighlights.map((highlight, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                {highlight.icon}
                <span className="text-sm">{highlight.text}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="gradient-card shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            What This Assessment Evaluates
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-3">
            {assessmentFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="bg-primary/10 rounded-lg p-4 mt-6">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-4 w-4 text-primary" />
              <span className="font-medium text-sm">Assessment Details</span>
            </div>
            <div className="text-sm text-muted-foreground space-y-1">
              <p><strong>Duration:</strong> 15-20 minutes</p>
              <p><strong>Questions:</strong> 15 scenario-based questions</p>
              <p><strong>Focus:</strong> Personality, aptitude, and career fit analysis</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="gradient-card shadow-card">
        <CardHeader>
          <CardTitle>Career Paths You'll Explore</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              'Medical Coding Specialist',
              'Clinical Documentation Specialist', 
              'Health Information Technician',
              'Medical Billing Coordinator',
              'Insurance Claims Analyst'
            ].map((role, index) => (
              <Badge key={index} variant="outline" className="justify-start p-2">
                {role}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="text-center">
        <Button 
          onClick={onStart}
          size="lg"
          className="gradient-primary shadow-button px-8 py-3 text-lg transition-bounce hover:scale-105"
        >
          Start Your Career Assessment
        </Button>
        <p className="text-xs text-muted-foreground mt-2">
          Free assessment • No account required • Immediate results
        </p>
      </div>
    </div>
  );
};