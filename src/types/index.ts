export interface TestQuestion {
  id: string;
  type: 'word' | 'excel' | 'powerpoint' | 'outlook';
  title: string;
  description: string;
  instruction: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  timeLimit: number; // in seconds
  points: number;
  correctAnswer?: any;
  options?: string[];
}

export interface TestSession {
  id: string;
  appType: string;
  questions: TestQuestion[];
  currentQuestionIndex: number;
  answers: { [questionId: string]: any };
  startTime: Date;
  endTime?: Date;
  score: number;
  timeRemaining: number;
}

export interface UserProgress {
  totalTests: number;
  completedTests: number;
  averageScore: number;
  bestScores: {
    word: number;
    excel: number;
    powerpoint: number;
    outlook: number;
  };
}
