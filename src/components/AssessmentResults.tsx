import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScoreCard } from "./ScoreCard";
import { WISCARRadarChart } from "./RadarChart";
import { RecommendationCard } from "./RecommendationCard";
import { CareerPathCard } from "./CareerPathCard";
import { Brain, Heart, Wrench, Zap, BookOpen, Target, RotateCcw } from "lucide-react";
import { AssessmentResults as ResultsType } from "@/hooks/useAssessment";
import { careerRoles } from "@/data/assessmentData";

interface AssessmentResultsProps {
  results: ResultsType;
  onRestart: () => void;
}

export const AssessmentResults = ({ results, onRestart }: AssessmentResultsProps) => {
  const { scores, overallScore, recommendation, confidenceScore } = results;

  const getScoreLevel = (score: number): 'low' | 'moderate' | 'high' => {
    if (score >= 70) return 'high';
    if (score >= 40) return 'moderate';
    return 'low';
  };

  const dimensionData = [
    { dimension: 'Will', score: scores.W, maxScore: 100 },
    { dimension: 'Interest', score: scores.I, maxScore: 100 },
    { dimension: 'Skill', score: scores.S, maxScore: 100 },
    { dimension: 'Cognitive', score: scores.C, maxScore: 100 },
    { dimension: 'Ability', score: scores.A, maxScore: 100 },
    { dimension: 'Real-world', score: scores.R, maxScore: 100 }
  ];

  const getRecommendationData = () => {
    switch (recommendation) {
      case 'yes':
        return {
          title: 'Medical Coding is an Excellent Fit!',
          summary: 'Based on your assessment, you show strong alignment with the requirements and characteristics needed for a successful career in medical coding. Your combination of attention to detail, healthcare interest, and analytical thinking makes you an ideal candidate.',
          reasons: [
            `Strong overall readiness score of ${overallScore}%`,
            'High motivation and persistence for detailed work',
            'Good alignment with healthcare industry interests',
            'Strong technical and cognitive capabilities',
            'Excellent fit with typical job responsibilities'
          ],
          nextSteps: [
            'Research medical coding certification programs (AAPC CPC or AHIMA CCS)',
            'Begin studying medical terminology and anatomy basics',
            'Consider online courses in ICD-10 and CPT coding',
            'Connect with local medical coding professionals for insights',
            'Plan your certification timeline (typically 6-12 months)'
          ]
        };
      case 'maybe':
        return {
          title: 'Medical Coding Could Work With Preparation',
          summary: 'Your assessment shows moderate alignment with medical coding requirements. While you have some strong areas, there are specific skills and interests that would benefit from development before pursuing this career path.',
          reasons: [
            `Moderate readiness score of ${overallScore}%`,
            'Some areas show good potential for development',
            'Mixed alignment with job requirements and interests',
            'Certain skills need strengthening before career entry'
          ],
          nextSteps: [
            'Focus on developing attention to detail and analytical skills',
            'Take introductory healthcare or medical terminology courses',
            'Try volunteer work or internships in healthcare settings',
            'Improve computer and technical skills if needed',
            'Reassess your interest after gaining more exposure to the field'
          ]
        };
      case 'no':
        return {
          title: 'Medical Coding May Not Be the Best Fit',
          summary: 'Based on your assessment responses, medical coding may not align well with your current interests, skills, or work preferences. Consider exploring alternative career paths that better match your strengths.',
          reasons: [
            `Lower alignment score of ${overallScore}%`,
            'Limited interest in healthcare or detailed analytical work',
            'Work style preferences don\'t match typical job requirements',
            'May find the work environment or tasks unsatisfying'
          ],
          nextSteps: [
            'Explore alternative healthcare careers that better match your interests',
            'Consider medical administration or customer service roles',
            'Look into healthcare fields with more social interaction',
            'Investigate careers in data entry or general office administration',
            'Take career exploration assessments for other industries'
          ]
        };
    }
  };

  const recommendationData = getRecommendationData();

  // Sort career roles by match percentage for display
  const sortedCareerRoles = [...careerRoles].sort((a, b) => b.matchPercentage - a.matchPercentage);

  return (
    <div className="space-y-8">
      {/* Overall Results Header */}
      <Card className="gradient-card shadow-elegant">
        <CardHeader className="text-center">
          <Badge 
            className={`mb-4 ${
              recommendation === 'yes' ? 'bg-success text-success-foreground' :
              recommendation === 'maybe' ? 'bg-warning text-warning-foreground' :
              'bg-destructive text-destructive-foreground'
            }`}
          >
            Assessment Complete
          </Badge>
          <CardTitle className="text-2xl">Your Medical Coding Career Assessment</CardTitle>
          <div className="mt-4">
            <div className="text-4xl font-bold text-primary mb-2">
              {overallScore}%
            </div>
            <p className="text-muted-foreground">Overall Readiness Score</p>
          </div>
        </CardHeader>
      </Card>

      {/* WISCAR Dimension Scores */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ScoreCard
          title="Will (Motivation)"
          score={scores.W}
          maxScore={100}
          description="Your drive, persistence, and motivation for detailed analytical work"
          level={getScoreLevel(scores.W)}
          icon={<Heart />}
        />
        <ScoreCard
          title="Interest"
          score={scores.I}
          maxScore={100}
          description="Your alignment with healthcare industry and coding work preferences"
          level={getScoreLevel(scores.I)}
          icon={<Target />}
        />
        <ScoreCard
          title="Skills"
          score={scores.S}
          maxScore={100}
          description="Your current technical, communication, and attention-to-detail capabilities"
          level={getScoreLevel(scores.S)}
          icon={<Wrench />}
        />
        <ScoreCard
          title="Cognitive Ability"
          score={scores.C}
          maxScore={100}
          description="Your capacity for learning complex rules and processing detailed information"
          level={getScoreLevel(scores.C)}
          icon={<Brain />}
        />
        <ScoreCard
          title="Learning Ability"
          score={scores.A}
          maxScore={100}
          description="Your growth mindset, adaptability, and openness to feedback"
          level={getScoreLevel(scores.A)}
          icon={<BookOpen />}
        />
        <ScoreCard
          title="Real-world Fit"
          score={scores.R}
          maxScore={100}
          description="How well you align with actual medical coding job tasks and environment"
          level={getScoreLevel(scores.R)}
          icon={<Zap />}
        />
      </div>

      {/* WISCAR Radar Chart */}
      <WISCARRadarChart 
        data={dimensionData}
        title="WISCAR Analysis - Your Career Readiness Profile"
      />

      {/* Recommendation Card */}
      <RecommendationCard
        recommendation={recommendation}
        title={recommendationData.title}
        summary={recommendationData.summary}
        reasons={recommendationData.reasons}
        nextSteps={recommendationData.nextSteps}
        confidenceScore={confidenceScore}
      />

      {/* Career Paths */}
      <div className="space-y-6">
        <Card className="gradient-card shadow-card">
          <CardHeader>
            <CardTitle>Related Career Opportunities</CardTitle>
            <p className="text-muted-foreground">
              Based on your assessment, here are medical coding and related healthcare careers ranked by fit:
            </p>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {sortedCareerRoles.map((role, index) => (
            <CareerPathCard
              key={role.title}
              role={role}
              isRecommended={index === 0 && recommendation !== 'no'}
            />
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          onClick={onRestart}
          variant="outline"
          className="transition-smooth"
        >
          <RotateCcw className="h-4 w-4 mr-2" />
          Retake Assessment
        </Button>
        <Button className="gradient-primary shadow-button transition-smooth">
          Download Detailed Report
        </Button>
      </div>
    </div>
  );
};