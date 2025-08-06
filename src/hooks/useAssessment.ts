import { useState, useCallback } from 'react';
import { assessmentQuestions, type Question } from '@/data/assessmentData';

export interface AssessmentResponse {
  questionId: string;
  value: string;
  score: number;
}

export interface AssessmentScores {
  W: number; // Will
  I: number; // Interest
  S: number; // Skill
  C: number; // Cognitive
  A: number; // Ability to Learn
  R: number; // Real-world Fit
}

export interface AssessmentResults {
  responses: AssessmentResponse[];
  scores: AssessmentScores;
  overallScore: number;
  recommendation: 'yes' | 'maybe' | 'no';
  confidenceScore: number;
}

export const useAssessment = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<AssessmentResponse[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const currentQuestion = assessmentQuestions[currentQuestionIndex];
  const totalQuestions = assessmentQuestions.length;

  const addResponse = useCallback((questionId: string, value: string) => {
    const question = assessmentQuestions.find(q => q.id === questionId);
    const option = question?.options.find(opt => opt.value === value);
    
    if (question && option) {
      setResponses(prev => {
        const filtered = prev.filter(r => r.questionId !== questionId);
        return [...filtered, {
          questionId,
          value,
          score: option.score
        }];
      });
    }
  }, []);

  const getCurrentResponse = useCallback(() => {
    return responses.find(r => r.questionId === currentQuestion?.id)?.value || '';
  }, [responses, currentQuestion]);

  const goToNext = useCallback(() => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setIsComplete(true);
    }
  }, [currentQuestionIndex, totalQuestions]);

  const goToPrevious = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  }, [currentQuestionIndex]);

  const calculateResults = useCallback((): AssessmentResults => {
    const scores: AssessmentScores = { W: 0, I: 0, S: 0, C: 0, A: 0, R: 0 };
    const dimensionCounts = { W: 0, I: 0, S: 0, C: 0, A: 0, R: 0 };

    responses.forEach(response => {
      const question = assessmentQuestions.find(q => q.id === response.questionId);
      if (question) {
        scores[question.dimension] += response.score;
        dimensionCounts[question.dimension]++;
      }
    });

    // Normalize scores to 0-100 scale
    Object.keys(scores).forEach(dimension => {
      const dim = dimension as keyof AssessmentScores;
      const maxPossible = dimensionCounts[dim] * 5; // Max score per question is 5
      scores[dim] = Math.round((scores[dim] / maxPossible) * 100);
    });

    // Calculate overall score (weighted average)
    const weights = { W: 0.2, I: 0.2, S: 0.15, C: 0.15, A: 0.15, R: 0.15 };
    const overallScore = Math.round(
      Object.keys(scores).reduce((sum, dim) => {
        const dimension = dim as keyof AssessmentScores;
        return sum + (scores[dimension] * weights[dimension]);
      }, 0)
    );

    // Determine recommendation
    let recommendation: 'yes' | 'maybe' | 'no';
    let confidenceScore: number;

    const criticalDimensions = [scores.W, scores.I, scores.S, scores.C];
    const minCritical = Math.min(...criticalDimensions);
    const avgCritical = criticalDimensions.reduce((a, b) => a + b, 0) / criticalDimensions.length;

    if (overallScore >= 75 && minCritical >= 60) {
      recommendation = 'yes';
      confidenceScore = Math.min(95, overallScore + 5);
    } else if (overallScore >= 50 && avgCritical >= 50) {
      recommendation = 'maybe';
      confidenceScore = Math.min(85, overallScore);
    } else {
      recommendation = 'no';
      confidenceScore = Math.max(15, overallScore - 10);
    }

    return {
      responses,
      scores,
      overallScore,
      recommendation,
      confidenceScore
    };
  }, [responses]);

  const reset = useCallback(() => {
    setCurrentQuestionIndex(0);
    setResponses([]);
    setIsComplete(false);
  }, []);

  return {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    responses,
    isComplete,
    addResponse,
    getCurrentResponse,
    goToNext,
    goToPrevious,
    calculateResults,
    reset
  };
};