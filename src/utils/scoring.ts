import { TestQuestion } from '../types';

interface ScoringResult {
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  breakdown: {
    beginner: { correct: number; total: number };
    intermediate: { correct: number; total: number };
    advanced: { correct: number; total: number };
  };
}

export const calculateScore = (
  questions: TestQuestion[],
  answers: { [questionId: string]: string }
): ScoringResult => {
  let correctAnswers = 0;
  const breakdown = {
    beginner: { correct: 0, total: 0 },
    intermediate: { correct: 0, total: 0 },
    advanced: { correct: 0, total: 0 }
  };

  questions.forEach(question => {
    const userAnswer = answers[question.id];
    const isCorrect = userAnswer && question.options && question.options[0] === userAnswer;
    
    breakdown[question.difficulty].total++;
    
    if (isCorrect) {
      correctAnswers++;
      breakdown[question.difficulty].correct++;
    }
  });

  // Weight scores by difficulty
  const beginnerScore = breakdown.beginner.total > 0 
    ? (breakdown.beginner.correct / breakdown.beginner.total) * 100 
    : 0;
  const intermediateScore = breakdown.intermediate.total > 0 
    ? (breakdown.intermediate.correct / breakdown.intermediate.total) * 100 
    : 0;
  const advancedScore = breakdown.advanced.total > 0 
    ? (breakdown.advanced.correct / breakdown.advanced.total) * 100 
    : 0;

  // Weighted average (beginner: 1x, intermediate: 1.5x, advanced: 2x)
  const totalWeight = (breakdown.beginner.total * 1) + 
                     (breakdown.intermediate.total * 1.5) + 
                     (breakdown.advanced.total * 2);
  
  const weightedScore = totalWeight > 0 
    ? ((beginnerScore * breakdown.beginner.total * 1) +
       (intermediateScore * breakdown.intermediate.total * 1.5) +
       (advancedScore * breakdown.advanced.total * 2)) / totalWeight
    : 0;

  return {
    score: Math.round(weightedScore),
    correctAnswers,
    totalQuestions: questions.length,
    breakdown
  };
};

export const getPerformanceFeedback = (score: number, appType: string) => {
  if (score >= 90) {
    return {
      level: 'Excellent',
      message: `Outstanding! You're ready for the MOS ${appType} certification exam.`,
      icon: '🏆',
      color: '#28a745',
      recommendations: [
        'Schedule your official MOS certification exam',
        'Consider pursuing Expert level certification',
        'Share your knowledge by mentoring others'
      ]
    };
  } else if (score >= 80) {
    return {
      level: 'Very Good',
      message: `Great job! You're well-prepared for the MOS ${appType} exam.`,
      icon: '🎉',
      color: '#28a745',
      recommendations: [
        'Take a few more practice tests to build confidence',
        'Review any missed advanced topics',
        'Schedule your certification exam soon'
      ]
    };
  } else if (score >= 70) {
    return {
      level: 'Good',
      message: `Good progress! You're approaching certification readiness.`,
      icon: '👍',
      color: '#ffc107',
      recommendations: [
        'Focus on intermediate and advanced topics',
        'Practice hands-on exercises in actual Office applications',
        'Take additional practice tests in weak areas'
      ]
    };
  } else if (score >= 60) {
    return {
      level: 'Fair',
      message: `You're making progress but need more practice.`,
      icon: '📚',
      color: '#fd7e14',
      recommendations: [
        'Review fundamental concepts thoroughly',
        'Practice basic tasks repeatedly until comfortable',
        'Consider additional training resources or courses'
      ]
    };
  } else {
    return {
      level: 'Needs Improvement',
      message: `Keep practicing! Focus on building your foundational skills.`,
      icon: '💪',
      color: '#dc3545',
      recommendations: [
        'Start with beginner-level tutorials and exercises',
        'Practice basic features extensively',
        'Consider formal training or online courses',
        'Retake practice tests regularly to track improvement'
      ]
    };
  }
};
