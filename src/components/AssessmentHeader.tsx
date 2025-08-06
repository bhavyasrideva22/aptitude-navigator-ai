import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-medical-coding.jpg";

interface AssessmentHeaderProps {
  title: string;
  subtitle: string;
  estimatedTime: string;
}

export const AssessmentHeader = ({ title, subtitle, estimatedTime }: AssessmentHeaderProps) => {
  return (
    <div className="relative overflow-hidden rounded-xl shadow-elegant">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80" />
      
      <div className="relative px-8 py-12 text-center">
        <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
          Career Assessment
        </Badge>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          {title}
        </h1>
        
        <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        
        <Card className="inline-block bg-white/10 backdrop-blur-sm border-white/20 text-white px-4 py-2">
          <span className="text-sm font-medium">
            ⏱️ Estimated time: {estimatedTime}
          </span>
        </Card>
      </div>
    </div>
  );
};