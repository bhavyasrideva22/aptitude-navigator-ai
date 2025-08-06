import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Briefcase, TrendingUp, DollarSign } from "lucide-react";

interface CareerRole {
  title: string;
  description: string;
  matchPercentage: number;
  salaryRange: string;
  growthOutlook: string;
  requiredSkills: string[];
  timeToEntry: string;
}

interface CareerPathCardProps {
  role: CareerRole;
  isRecommended?: boolean;
}

export const CareerPathCard = ({ role, isRecommended = false }: CareerPathCardProps) => {
  const getMatchLevel = (percentage: number) => {
    if (percentage >= 80) return { color: 'text-success', bg: 'bg-success/10' };
    if (percentage >= 60) return { color: 'text-warning', bg: 'bg-warning/10' };
    return { color: 'text-destructive', bg: 'bg-destructive/10' };
  };

  const matchLevel = getMatchLevel(role.matchPercentage);

  return (
    <Card className={`gradient-card shadow-card transition-smooth hover:shadow-elegant ${
      isRecommended ? 'ring-2 ring-primary' : ''
    }`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              {role.title}
              {isRecommended && (
                <Badge className="bg-primary text-primary-foreground">
                  Top Match
                </Badge>
              )}
            </CardTitle>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {role.description}
            </p>
          </div>
        </div>

        <div className={`p-3 rounded-lg ${matchLevel.bg} space-y-2`}>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Career Match</span>
            <span className={`text-lg font-bold ${matchLevel.color}`}>
              {role.matchPercentage}%
            </span>
          </div>
          <Progress value={role.matchPercentage} className="h-2" />
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-success" />
            <div>
              <p className="text-xs text-muted-foreground">Salary Range</p>
              <p className="text-sm font-medium">{role.salaryRange}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Growth Outlook</p>
              <p className="text-sm font-medium">{role.growthOutlook}</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs text-muted-foreground mb-2">Time to Entry</p>
          <Badge variant="outline">{role.timeToEntry}</Badge>
        </div>

        <div>
          <p className="text-sm font-medium mb-2">Key Skills Required</p>
          <div className="flex flex-wrap gap-1">
            {role.requiredSkills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};