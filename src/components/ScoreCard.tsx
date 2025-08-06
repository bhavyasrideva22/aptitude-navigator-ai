import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface ScoreCardProps {
  title: string;
  score: number;
  maxScore: number;
  description: string;
  level: 'low' | 'moderate' | 'high';
  icon?: React.ReactNode;
}

export const ScoreCard = ({ title, score, maxScore, description, level, icon }: ScoreCardProps) => {
  const percentage = (score / maxScore) * 100;
  
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-destructive';
      case 'moderate': return 'text-warning';
      case 'high': return 'text-success';
      default: return 'text-muted-foreground';
    }
  };

  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'low': return <Badge variant="destructive">Needs Improvement</Badge>;
      case 'moderate': return <Badge variant="outline" className="border-warning text-warning">Moderate</Badge>;
      case 'high': return <Badge variant="default" className="bg-success text-success-foreground">Strong</Badge>;
      default: return null;
    }
  };

  return (
    <Card className="gradient-card shadow-card transition-smooth hover:shadow-elegant">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div className="space-y-1">
          <CardTitle className="text-lg">{title}</CardTitle>
          {getLevelBadge(level)}
        </div>
        {icon && (
          <div className="text-2xl text-primary">
            {icon}
          </div>
        )}
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-baseline justify-between">
            <span className={`text-2xl font-bold ${getLevelColor(level)}`}>
              {score}
            </span>
            <span className="text-sm text-muted-foreground">
              / {maxScore}
            </span>
          </div>
          
          <Progress value={percentage} className="h-2" />
          
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};