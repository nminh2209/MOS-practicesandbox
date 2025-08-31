import { createContext, useContext, useReducer, ReactNode } from 'react';
import { TestSession, UserProgress } from '../types';

interface TestState {
  currentSession: TestSession | null;
  userProgress: UserProgress;
  isTestActive: boolean;
  language: string;
}

type TestAction = 
  | { type: 'START_TEST'; payload: TestSession }
  | { type: 'ANSWER_QUESTION'; payload: { questionId: string; answer: any } }
  | { type: 'NEXT_QUESTION' }
  | { type: 'PREVIOUS_QUESTION' }
  | { type: 'END_TEST' }
  | { type: 'UPDATE_TIMER'; payload: number }
  | { type: 'UPDATE_PROGRESS'; payload: Partial<UserProgress> }
  | { type: 'SET_LANGUAGE'; payload: string };

const initialState: TestState = {
  currentSession: null,
  userProgress: {
    totalTests: 0,
    completedTests: 0,
    averageScore: 0,
    bestScores: {
      word: 0,
      excel: 0,
      powerpoint: 0,
      outlook: 0
    }
  },
  isTestActive: false,
  language: 'en'
};

function testReducer(state: TestState, action: TestAction): TestState {
  switch (action.type) {
    case 'START_TEST':
      return {
        ...state,
        currentSession: action.payload,
        isTestActive: true
      };
    
    case 'ANSWER_QUESTION':
      if (!state.currentSession) return state;
      return {
        ...state,
        currentSession: {
          ...state.currentSession,
          answers: {
            ...state.currentSession.answers,
            [action.payload.questionId]: action.payload.answer
          }
        }
      };
    
    case 'NEXT_QUESTION':
      if (!state.currentSession) return state;
      return {
        ...state,
        currentSession: {
          ...state.currentSession,
          currentQuestionIndex: Math.min(
            state.currentSession.currentQuestionIndex + 1,
            state.currentSession.questions.length - 1
          )
        }
      };
    
    case 'PREVIOUS_QUESTION':
      if (!state.currentSession) return state;
      return {
        ...state,
        currentSession: {
          ...state.currentSession,
          currentQuestionIndex: Math.max(state.currentSession.currentQuestionIndex - 1, 0)
        }
      };
    
    case 'END_TEST':
      if (!state.currentSession) return state;
      return {
        ...state,
        currentSession: {
          ...state.currentSession,
          endTime: new Date()
        },
        isTestActive: false
      };
    
    case 'UPDATE_TIMER':
      if (!state.currentSession) return state;
      return {
        ...state,
        currentSession: {
          ...state.currentSession,
          timeRemaining: action.payload
        }
      };
    
    case 'UPDATE_PROGRESS':
      return {
        ...state,
        userProgress: {
          ...state.userProgress,
          ...action.payload
        }
      };
    
    case 'SET_LANGUAGE':
      return {
        ...state,
        language: action.payload
      };
    
    default:
      return state;
  }
}

const TestContext = createContext<{
  state: TestState;
  dispatch: (action: TestAction) => void;
} | null>(null);

export function TestProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(testReducer, initialState);

  return (
    <TestContext.Provider value={{ state, dispatch }}>
      {children}
    </TestContext.Provider>
  );
}

export function useTest() {
  const context = useContext(TestContext);
  if (!context) {
    throw new Error('useTest must be used within a TestProvider');
  }
  return context;
}
