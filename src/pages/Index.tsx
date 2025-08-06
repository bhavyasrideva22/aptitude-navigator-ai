import { useState } from "react";
import { AssessmentHeader } from "@/components/AssessmentHeader";
import { AssessmentIntro } from "@/components/AssessmentIntro";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { QuestionCard } from "@/components/QuestionCard";
import { AssessmentResults } from "@/components/AssessmentResults";
import { useAssessment } from "@/hooks/useAssessment";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [assessmentStarted, setAssessmentStarted] = useState(false);
  const { toast } = useToast();
  
  const {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    isComplete,
    addResponse,
    getCurrentResponse,
    goToNext,
    goToPrevious,
    calculateResults,
    reset
  } = useAssessment();

  const stepNames = ['Introduction', 'Motivation', 'Interests', 'Skills', 'Cognitive', 'Learning', 'Job Fit', 'Results'];

  const handleStart = () => {
    setAssessmentStarted(true);
    toast({
      title: "Assessment Started",
      description: "Take your time and answer honestly for the most accurate results.",
    });
  };

  const handleRestart = () => {
    reset();
    setAssessmentStarted(false);
    toast({
      title: "Assessment Reset",
      description: "Ready to start fresh? Let's discover your career fit!",
    });
  };

  const handleAnswerChange = (value: string) => {
    if (currentQuestion) {
      addResponse(currentQuestion.id, value);
    }
  };

  const handleNext = () => {
    goToNext();
    if (currentQuestionIndex === totalQuestions - 1) {
      toast({
        title: "Assessment Complete!",
        description: "Calculating your personalized results...",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <AssessmentHeader
          title="Is Medical Coding Your Career Fit?"
          subtitle="Discover if you have the skills, interests, and mindset to succeed as a Medical Coding Specialist through our comprehensive WISCAR assessment framework."
          estimatedTime="15-20 minutes"
        />

        <div className="mt-8">
          {!assessmentStarted ? (
            <AssessmentIntro onStart={handleStart} />
          ) : isComplete ? (
            <AssessmentResults 
              results={calculateResults()} 
              onRestart={handleRestart}
            />
          ) : (
            <>
              <ProgressIndicator
                currentStep={currentQuestionIndex + 2} // +2 because intro is step 1 and we're 0-indexed
                totalSteps={stepNames.length}
                stepNames={stepNames}
              />
              
              {currentQuestion && (
                <QuestionCard
                  question={currentQuestion.question}
                  description={currentQuestion.description}
                  options={currentQuestion.options.map(opt => ({
                    value: opt.value,
                    label: opt.label,
                    description: opt.description
                  }))}
                  selectedValue={getCurrentResponse()}
                  onValueChange={handleAnswerChange}
                  onNext={handleNext}
                  onPrevious={goToPrevious}
                  isFirst={currentQuestionIndex === 0}
                  isLast={currentQuestionIndex === totalQuestions - 1}
                  category={currentQuestion.category}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;