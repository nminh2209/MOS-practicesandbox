import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTest } from '../context/TestContext';
import { getQuestionsForApp } from '../data/questions';
import { TestSession } from '../types';

const Practice: React.FC = () => {
  const { appType } = useParams<{ appType: string }>();
  const { state, dispatch } = useTest();
  const navigate = useNavigate();
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showInstructions, setShowInstructions] = useState(true);
  const isVietnamese = state.language === 'vi';

  useEffect(() => {
    if (appType) {
      // Clear current session when switching apps
      if (state.currentSession && state.currentSession.appType !== appType) {
        dispatch({ type: 'END_TEST' });
      }
      
      // Only start new test if no session or different app
      if (!state.currentSession || state.currentSession.appType !== appType) {
        const questions = getQuestionsForApp(appType, state.language);
        const totalTime = questions.reduce((sum, q) => sum + q.timeLimit, 0);
        
        const session: TestSession = {
          id: `test-${Date.now()}`,
          appType,
          questions,
          currentQuestionIndex: 0,
          answers: {},
          startTime: new Date(),
          score: 0,
          timeRemaining: totalTime
        };
        
        dispatch({ type: 'START_TEST', payload: session });
      }
    }
  }, [appType, dispatch, state.language]); // Added language dependency

  useEffect(() => {
    if (state.currentSession && state.isTestActive) {
      const timer = setInterval(() => {
        if (state.currentSession && state.currentSession.timeRemaining > 0) {
          dispatch({ 
            type: 'UPDATE_TIMER', 
            payload: state.currentSession.timeRemaining - 1 
          });
        } else {
          handleEndTest();
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [state.currentSession, state.isTestActive]);

  const startTest = () => {
    setShowInstructions(false);
  };

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (state.currentSession && selectedAnswer) {
      const currentQuestion = state.currentSession.questions[state.currentSession.currentQuestionIndex];
      dispatch({
        type: 'ANSWER_QUESTION',
        payload: { questionId: currentQuestion.id, answer: selectedAnswer }
      });
      
      setSelectedAnswer('');
      
      if (state.currentSession.currentQuestionIndex < state.currentSession.questions.length - 1) {
        dispatch({ type: 'NEXT_QUESTION' });
      } else {
        handleEndTest();
      }
    }
  };

  const handlePreviousQuestion = () => {
    dispatch({ type: 'PREVIOUS_QUESTION' });
    const currentQuestion = state.currentSession?.questions[state.currentSession.currentQuestionIndex - 1];
    if (currentQuestion && state.currentSession?.answers[currentQuestion.id]) {
      setSelectedAnswer(state.currentSession.answers[currentQuestion.id]);
    } else {
      setSelectedAnswer('');
    }
  };

  const handleEndTest = () => {
    dispatch({ type: 'END_TEST' });
    navigate('/results');
  };

  if (!state.currentSession) {
    return <div>Loading...</div>;
  }

  if (showInstructions) {
    return (
      <div className="container" style={{ paddingTop: '40px' }}>
        <div className="card" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '30px', color: '#0078d4' }}>
            {appType ? appType.charAt(0).toUpperCase() + appType.slice(1) : 'Practice'} {isVietnamese ? 'Bài Kiểm tra Thực hành' : 'Practice Test'}
          </h2>
          
          <div style={{ marginBottom: '30px', textAlign: 'left' }}>
            <h3 style={{ marginBottom: '15px' }}>
              {isVietnamese ? 'Hướng dẫn Bài kiểm tra:' : 'Test Instructions:'}
            </h3>
            <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
              {isVietnamese ? (
                <>
                  <li>Bạn có {Math.floor(state.currentSession.timeRemaining / 60)} phút để hoàn thành bài kiểm tra này</li>
                  <li>Tổng cộng có {state.currentSession.questions.length} câu hỏi</li>
                  <li>Mỗi câu hỏi mô phỏng các nhiệm vụ chứng chỉ MOS thực tế</li>
                  <li>Bạn có thể điều hướng giữa các câu hỏi bằng nút Trước/Tiếp theo</li>
                  <li>Câu trả lời của bạn được lưu tự động</li>
                  <li>Bài kiểm tra sẽ tự động nộp khi hết thời gian</li>
                </>
              ) : (
                <>
                  <li>You have {Math.floor(state.currentSession.timeRemaining / 60)} minutes to complete this test</li>
                  <li>There are {state.currentSession.questions.length} questions total</li>
                  <li>Each question simulates real MOS certification tasks</li>
                  <li>You can navigate between questions using the Previous/Next buttons</li>
                  <li>Your answers are automatically saved</li>
                  <li>The test will automatically submit when time expires</li>
                </>
              )}
            </ul>
          </div>
          
          <div style={{ marginBottom: '30px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '5px' }}>
            <h4 style={{ marginBottom: '10px', color: '#0078d4' }}>
              {isVietnamese ? 'Những gì mong đợi:' : 'What to Expect:'}
            </h4>
            <p>
              {isVietnamese 
                ? 'Mỗi câu hỏi trình bày một tình huống thực tế mà bạn có thể gặp trong kỳ thi chứng chỉ MOS thực tế. Đọc kỹ hướng dẫn và chọn câu trả lời tốt nhất dựa trên thực hành tốt nhất của Microsoft Office.'
                : 'Each question presents a realistic scenario you might encounter in the actual MOS certification exam. Read the instructions carefully and select the best answer based on Microsoft Office best practices.'
              }
            </p>
          </div>
          
          <button className="btn btn-primary" onClick={startTest} style={{ fontSize: '18px', padding: '15px 40px' }}>
            {isVietnamese ? 'Bắt đầu Bài kiểm tra Ngay' : 'Start Test Now'}
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = state.currentSession.questions[state.currentSession.currentQuestionIndex];
  const progressPercentage = ((state.currentSession.currentQuestionIndex + 1) / state.currentSession.questions.length) * 100;

  return (
    <div className="container" style={{ paddingTop: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progressPercentage}%` }}></div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', fontSize: '14px', color: '#666' }}>
          <span>Question {state.currentSession.currentQuestionIndex + 1} of {state.currentSession.questions.length}</span>
          <span>Progress: {Math.round(progressPercentage)}%</span>
        </div>
      </div>

      <div className="card">
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <span style={{ 
              backgroundColor: currentQuestion.difficulty === 'beginner' ? '#28a745' : 
                              currentQuestion.difficulty === 'intermediate' ? '#ffc107' : '#dc3545',
              color: 'white',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: 'bold',
              textTransform: 'uppercase'
            }}>
              {currentQuestion.difficulty}
            </span>
            <span style={{ fontSize: '14px', color: '#666' }}>
              {currentQuestion.points} {isVietnamese ? 'điểm' : 'points'}
            </span>
          </div>
          
          <h3 style={{ marginBottom: '15px', color: '#333' }}>
            {currentQuestion.title}
          </h3>
          
          <p style={{ marginBottom: '20px', color: '#666', fontSize: '16px' }}>
            {currentQuestion.description}
          </p>
          
          <div style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '20px', 
            borderRadius: '5px',
            border: '1px solid #e9ecef',
            marginBottom: '30px'
          }}>
            <h4 style={{ marginBottom: '10px', color: '#0078d4' }}>
              {isVietnamese ? 'Hướng dẫn Nhiệm vụ:' : 'Task Instructions:'}
            </h4>
            <p style={{ fontWeight: '500', color: '#333' }}>
              {currentQuestion.instruction}
            </p>
          </div>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h4 style={{ marginBottom: '15px' }}>
            {isVietnamese ? 'Chọn câu trả lời tốt nhất:' : 'Choose the best answer:'}
          </h4>
          {currentQuestion.options?.map((option, index) => (
            <label 
              key={index}
              style={{ 
                display: 'block',
                marginBottom: '10px',
                padding: '15px',
                border: '2px solid #e9ecef',
                borderRadius: '5px',
                cursor: 'pointer',
                backgroundColor: selectedAnswer === option ? '#e3f2fd' : 'white',
                borderColor: selectedAnswer === option ? '#2196f3' : '#e9ecef',
                transition: 'all 0.3s ease'
              }}
            >
              <input
                type="radio"
                name="answer"
                value={option}
                checked={selectedAnswer === option}
                onChange={() => handleAnswerSelect(option)}
                style={{ marginRight: '10px' }}
              />
              <span style={{ fontSize: '16px' }}>{option}</span>
            </label>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button
            className="btn btn-secondary"
            onClick={handlePreviousQuestion}
            disabled={state.currentSession.currentQuestionIndex === 0}
            style={{ 
              opacity: state.currentSession.currentQuestionIndex === 0 ? 0.5 : 1,
              cursor: state.currentSession.currentQuestionIndex === 0 ? 'not-allowed' : 'pointer'
            }}
          >
            ← {isVietnamese ? 'Trước' : 'Previous'}
          </button>

          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>
              {isVietnamese ? 'Thời gian còn lại:' : 'Time Remaining:'} {Math.floor(state.currentSession.timeRemaining / 60)}:
              {(state.currentSession.timeRemaining % 60).toString().padStart(2, '0')}
            </p>
          </div>

          <button
            className={selectedAnswer ? 'btn btn-primary' : 'btn btn-secondary'}
            onClick={handleNextQuestion}
            disabled={!selectedAnswer}
            style={{ 
              opacity: !selectedAnswer ? 0.5 : 1,
              cursor: !selectedAnswer ? 'not-allowed' : 'pointer'
            }}
          >
            {state.currentSession.currentQuestionIndex === state.currentSession.questions.length - 1 
              ? (isVietnamese ? 'Kết thúc Bài kiểm tra' : 'Finish Test')
              : (isVietnamese ? 'Tiếp theo →' : 'Next →')
            }
          </button>
        </div>
      </div>

      <div className="card" style={{ backgroundColor: '#fff3cd', border: '1px solid #ffeaa7' }}>
        <p style={{ color: '#856404', margin: 0, fontSize: '14px' }}>
          💡 <strong>{isVietnamese ? 'Mẹo:' : 'Tip:'}</strong> {isVietnamese 
            ? 'Trong kỳ thi MOS thực tế, bạn sẽ thực hiện những nhiệm vụ này trong các ứng dụng Microsoft Office thật. Bài kiểm tra thực hành này giúp bạn hiểu các loại tình huống và giải pháp được mong đợi.'
            : 'In the actual MOS exam, you would perform these tasks in the real Microsoft Office applications. This practice test helps you understand the types of scenarios and solutions expected.'
          }
        </p>
      </div>
    </div>
  );
};

export default Practice;
