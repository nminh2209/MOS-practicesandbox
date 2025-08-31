import { Link, useNavigate } from 'react-router-dom';
import { useTest } from '../context/TestContext';
import { calculateScore, getPerformanceFeedback } from '../utils/scoring';

const Results: React.FC = () => {
  const { state } = useTest();
  const navigate = useNavigate();

  if (!state.currentSession) {
    navigate('/');
    return null;
  }

  const scoringResult = calculateScore(state.currentSession.questions, state.currentSession.answers);
  const performance = getPerformanceFeedback(scoringResult.score, state.currentSession.appType);
  const totalQuestions = state.currentSession.questions.length;
  const answeredQuestions = Object.keys(state.currentSession.answers).length;
  const testDuration = state.currentSession.endTime 
    ? Math.floor((state.currentSession.endTime.getTime() - state.currentSession.startTime.getTime()) / 1000 / 60)
    : 0;

  const handleRetakeTest = () => {
    navigate(`/practice/${state.currentSession!.appType}`);
  };

  const handleNewTest = () => {
    navigate('/select');
  };

  return (
    <div className="container" style={{ paddingTop: '40px' }}>
      <div className="card" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '20px', color: '#333' }}>Test Results</h1>
        
        <div style={{ 
          fontSize: '72px', 
          fontWeight: 'bold', 
          color: performance.color,
          marginBottom: '20px' 
        }}>
          {scoringResult.score}%
        </div>
        
        <div style={{ 
          fontSize: '24px', 
          marginBottom: '30px',
          color: performance.color,
          fontWeight: 'bold'
        }}>
          {performance.icon} {performance.level}
        </div>

        <div style={{ 
          fontSize: '18px',
          marginBottom: '40px',
          color: '#666',
          maxWidth: '600px',
          margin: '0 auto 40px'
        }}>
          {performance.message}
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '20px',
          marginBottom: '40px'
        }}>
          <div className="card" style={{ padding: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#0078d4', marginBottom: '10px' }}>
              {scoringResult.correctAnswers}/{totalQuestions}
            </div>
            <div style={{ color: '#666' }}>Correct Answers</div>
          </div>

          <div className="card" style={{ padding: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#0078d4', marginBottom: '10px' }}>
              {answeredQuestions}/{totalQuestions}
            </div>
            <div style={{ color: '#666' }}>Questions Answered</div>
          </div>

          <div className="card" style={{ padding: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#0078d4', marginBottom: '10px' }}>
              {testDuration}min
            </div>
            <div style={{ color: '#666' }}>Time Taken</div>
          </div>

          <div className="card" style={{ padding: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0078d4', marginBottom: '10px' }}>
              {state.currentSession.appType.charAt(0).toUpperCase() + state.currentSession.appType.slice(1)}
            </div>
            <div style={{ color: '#666' }}>Test Subject</div>
          </div>
        </div>

        {/* Performance Breakdown */}
        <div className="card" style={{ textAlign: 'left', marginBottom: '30px' }}>
          <h3 style={{ marginBottom: '20px', color: '#333', textAlign: 'center' }}>Performance by Difficulty</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {Object.entries(scoringResult.breakdown).map(([difficulty, stats]) => {
              const percentage = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
              const color = percentage >= 80 ? '#28a745' : percentage >= 60 ? '#ffc107' : '#dc3545';
              
              return (
                <div key={difficulty} style={{ 
                  padding: '15px', 
                  border: `2px solid ${color}`, 
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  <h4 style={{ 
                    marginBottom: '10px', 
                    color: color, 
                    textTransform: 'capitalize' 
                  }}>
                    {difficulty}
                  </h4>
                  <div style={{ fontSize: '24px', fontWeight: 'bold', color }}>
                    {percentage}%
                  </div>
                  <div style={{ fontSize: '14px', color: '#666' }}>
                    {stats.correct}/{stats.total} correct
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recommendations */}
        <div className="card" style={{ textAlign: 'left', marginBottom: '30px', backgroundColor: '#f8f9fa' }}>
          <h3 style={{ marginBottom: '20px', color: performance.color }}>📋 Recommendations</h3>
          <ul style={{ paddingLeft: '20px', color: '#333' }}>
            {performance.recommendations.map((rec, index) => (
              <li key={index} style={{ marginBottom: '10px', lineHeight: '1.6' }}>{rec}</li>
            ))}
          </ul>
        </div>

        {/* Question Review */}
        <div className="card" style={{ textAlign: 'left', marginBottom: '30px' }}>
          <h3 style={{ marginBottom: '20px', color: '#333' }}>Question Review</h3>
          {state.currentSession.questions.map((question, index) => {
            const userAnswer = state.currentSession!.answers[question.id];
            const isAnswered = !!userAnswer;
            const isCorrect = isAnswered && question.options && question.options[0] === userAnswer;
            
            return (
              <div 
                key={question.id}
                style={{ 
                  padding: '15px',
                  marginBottom: '15px',
                  border: '2px solid #e9ecef',
                  borderRadius: '8px',
                  backgroundColor: isCorrect ? '#d4edda' : isAnswered ? '#f8d7da' : '#fff3cd',
                  borderColor: isCorrect ? '#28a745' : isAnswered ? '#dc3545' : '#ffc107'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                      Question {index + 1}: {question.title}
                    </div>
                    <div style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>
                      {question.difficulty} • {question.points} points
                    </div>
                    <div style={{ fontSize: '14px', color: '#555', lineHeight: '1.4' }}>
                      {question.description}
                    </div>
                  </div>
                  <div style={{ 
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    backgroundColor: isCorrect ? '#28a745' : isAnswered ? '#dc3545' : '#ffc107',
                    color: 'white',
                    minWidth: '80px',
                    textAlign: 'center'
                  }}>
                    {isCorrect ? '✓ Correct' : isAnswered ? '✗ Incorrect' : 'Skipped'}
                  </div>
                </div>
                {userAnswer && (
                  <div style={{ marginTop: '10px', fontSize: '14px' }}>
                    <strong>Your answer:</strong> <span style={{ color: isCorrect ? '#28a745' : '#dc3545' }}>{userAnswer}</span>
                  </div>
                )}
                {!isCorrect && question.options && (
                  <div style={{ marginTop: '8px', fontSize: '14px' }}>
                    <strong>Correct answer:</strong> <span style={{ color: '#28a745' }}>{question.options[0]}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ 
          display: 'flex', 
          gap: '20px', 
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button className="btn btn-primary" onClick={handleRetakeTest} style={{ minWidth: '150px' }}>
            Retake This Test
          </button>
          <button className="btn btn-secondary" onClick={handleNewTest} style={{ minWidth: '150px' }}>
            Try Different Test
          </button>
          <Link to="/" className="btn btn-secondary" style={{ minWidth: '150px' }}>
            Back to Home
          </Link>
        </div>
      </div>

      <div className="card" style={{ marginTop: '40px', backgroundColor: '#e8f4ff', border: '1px solid #0078d4' }}>
        <h3 style={{ marginBottom: '15px', color: '#0078d4' }}>🎯 About MOS Certification</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <div>
            <h4 style={{ color: '#0078d4', marginBottom: '10px' }}>Passing Score</h4>
            <p style={{ color: '#333', margin: 0 }}>
              MOS exams typically require a score of 700/1000 (70%) to pass. Consistently scoring 80%+ on practice tests indicates strong readiness.
            </p>
          </div>
          <div>
            <h4 style={{ color: '#0078d4', marginBottom: '10px' }}>Exam Format</h4>
            <p style={{ color: '#333', margin: 0 }}>
              MOS exams are performance-based, requiring you to complete tasks in the actual Office applications within 45-60 minutes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
