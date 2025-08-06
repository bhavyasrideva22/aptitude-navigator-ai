import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  stepNames: string[];
}

export const ProgressIndicator = ({ currentStep, totalSteps, stepNames }: ProgressIndicatorProps) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <Card className="p-6 mb-8 gradient-card shadow-card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-foreground">Assessment Progress</h3>
        <span className="text-sm text-muted-foreground">
          Step {currentStep} of {totalSteps}
        </span>
      </div>
      
      <Progress value={progress} className="mb-4" />
      
      <div className="flex justify-between text-xs text-muted-foreground">
        {stepNames.map((name, index) => (
          <span 
            key={index}
            className={`${
              index < currentStep 
                ? 'text-primary font-medium' 
                : index === currentStep 
                  ? 'text-foreground font-medium' 
                  : 'text-muted-foreground'
            }`}
          >
            {name}
          </span>
        ))}
      </div>
    </Card>
  );
};