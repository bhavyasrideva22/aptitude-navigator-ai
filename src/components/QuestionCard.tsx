import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface QuestionOption {
  value: string;
  label: string;
  description?: string;
}

interface QuestionCardProps {
  question: string;
  description?: string;
  options: QuestionOption[];
  selectedValue: string;
  onValueChange: (value: string) => void;
  onNext: () => void;
  onPrevious?: () => void;
  isFirst?: boolean;
  isLast?: boolean;
  category?: string;
}

export const QuestionCard = ({
  question,
  description,
  options,
  selectedValue,
  onValueChange,
  onNext,
  onPrevious,
  isFirst = false,
  isLast = false,
  category
}: QuestionCardProps) => {
  return (
    <Card className="gradient-card shadow-card transition-smooth hover:shadow-elegant">
      <CardHeader className="pb-6">
        {category && (
          <Badge variant="outline" className="w-fit mb-2">
            {category}
          </Badge>
        )}
        <CardTitle className="text-xl leading-relaxed">{question}</CardTitle>
        {description && (
          <p className="text-muted-foreground mt-2">{description}</p>
        )}
      </CardHeader>
      
      <CardContent className="space-y-6">
        <RadioGroup value={selectedValue} onValueChange={onValueChange}>
          {options.map((option) => (
            <div key={option.value} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-smooth">
              <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
              <div className="flex-1">
                <Label htmlFor={option.value} className="cursor-pointer text-base leading-relaxed">
                  {option.label}
                </Label>
                {option.description && (
                  <p className="text-sm text-muted-foreground mt-1">{option.description}</p>
                )}
              </div>
            </div>
          ))}
        </RadioGroup>
        
        <div className="flex justify-between pt-4">
          <Button 
            variant="outline" 
            onClick={onPrevious}
            disabled={isFirst}
            className="transition-smooth"
          >
            Previous
          </Button>
          
          <Button 
            onClick={onNext}
            disabled={!selectedValue}
            className="gradient-primary shadow-button transition-smooth"
          >
            {isLast ? 'Complete Assessment' : 'Next Question'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};