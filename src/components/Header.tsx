import { Link, useLocation } from 'react-router-dom';
import { useTest } from '../context/TestContext';
import LanguageToggle from './LanguageToggle';

const Header: React.FC = () => {
  const { state } = useTest();
  const location = useLocation();
  const isVietnamese = state.language === 'vi';

  return (
    <header style={{ 
      background: '#0078d4', 
      color: 'white', 
      padding: '1rem 0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div className="container" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
      }}>
        <Link 
          to="/" 
          style={{ 
            color: 'white', 
            textDecoration: 'none', 
            fontSize: '24px', 
            fontWeight: 'bold' 
          }}
        >
          MOS Practice Sandbox
        </Link>
        
        <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <LanguageToggle />
          
          {location.pathname !== '/' && (
            <Link 
              to="/" 
              style={{ color: 'white', textDecoration: 'none' }}
            >
              {isVietnamese ? 'Trang chủ' : 'Home'}
            </Link>
          )}
          
          <Link 
            to="/learning" 
            style={{ color: 'white', textDecoration: 'none' }}
          >
            {isVietnamese ? 'Học tập AI' : 'AI Learning'}
          </Link>
          
          {state.isTestActive && state.currentSession && (
            <div style={{ 
              display: 'flex', 
              gap: '15px', 
              alignItems: 'center',
              fontSize: '14px'
            }}>
              <span>
                {isVietnamese 
                  ? `Câu hỏi ${state.currentSession.currentQuestionIndex + 1} / ${state.currentSession.questions.length}`
                  : `Question ${state.currentSession.currentQuestionIndex + 1} of ${state.currentSession.questions.length}`
                }
              </span>
              <span className="timer">
                {isVietnamese ? 'Thời gian:' : 'Time:'} {Math.floor(state.currentSession.timeRemaining / 60)}:
                {(state.currentSession.timeRemaining % 60).toString().padStart(2, '0')}
              </span>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
