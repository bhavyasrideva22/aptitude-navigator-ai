import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, AlertCircle, ArrowRight } from "lucide-react";

interface RecommendationCardProps {
  recommendation: 'yes' | 'maybe' | 'no';
  title: string;
  summary: string;
  reasons: string[];
  nextSteps: string[];
  confidenceScore: number;
}

export const RecommendationCard = ({
  recommendation,
  title,
  summary,
  reasons,
  nextSteps,
  confidenceScore
}: RecommendationCardProps) => {
  const getRecommendationConfig = (rec: string) => {
    switch (rec) {
      case 'yes':
        return {
          icon: <CheckCircle className="h-6 w-6" />,
          badge: <Badge className="bg-success text-success-foreground">✅ Recommended</Badge>,
          color: 'text-success',
          bgColor: 'bg-success/10'
        };
      case 'maybe':
        return {
          icon: <AlertCircle className="h-6 w-6" />,
          badge: <Badge variant="outline" className="border-warning text-warning">🤔 Consider With Preparation</Badge>,
          color: 'text-warning',
          bgColor: 'bg-warning/10'
        };
      case 'no':
        return {
          icon: <XCircle className="h-6 w-6" />,
          badge: <Badge variant="destructive">❌ Not Recommended Currently</Badge>,
          color: 'text-destructive',
          bgColor: 'bg-destructive/10'
        };
      default:
        return {
          icon: <AlertCircle className="h-6 w-6" />,
          badge: <Badge variant="outline">Under Review</Badge>,
          color: 'text-muted-foreground',
          bgColor: 'bg-muted/10'
        };
    }
  };

  const config = getRecommendationConfig(recommendation);

  return (
    <Card className="gradient-card shadow-elegant border-2">
      <CardHeader className={`${config.bgColor} border-b`}>
        <div className="flex items-center gap-3 mb-2">
          <div className={config.color}>
            {config.icon}
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
        {config.badge}
        
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Confidence Score</span>
            <span className={`text-lg font-bold ${config.color}`}>
              {confidenceScore}%
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-500 ${
                recommendation === 'yes' ? 'bg-success' :
                recommendation === 'maybe' ? 'bg-warning' : 'bg-destructive'
              }`}
              style={{ width: `${confidenceScore}%` }}
            />
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-6 space-y-6">
        <div>
          <h4 className="font-semibold mb-2">Summary</h4>
          <p className="text-muted-foreground leading-relaxed">{summary}</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Key Reasons</h4>
          <ul className="space-y-2">
            {reasons.map((reason, index) => (
              <li key={index} className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Recommended Next Steps</h4>
          <ul className="space-y-3">
            {nextSteps.map((step, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className={`w-6 h-6 rounded-full ${config.bgColor} ${config.color} flex items-center justify-center text-xs font-bold`}>
                  {index + 1}
                </div>
                <span className="text-sm leading-relaxed">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <Button className="w-full gradient-primary shadow-button transition-smooth">
          View Detailed Learning Path
        </Button>
      </CardContent>
    </Card>
  );
};