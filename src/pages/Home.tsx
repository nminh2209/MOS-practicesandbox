import { Link } from 'react-router-dom';
import { useTest } from '../context/TestContext';

const Home: React.FC = () => {
  const { state } = useTest();
  const isVietnamese = state.language === 'vi';

  return (
    <div className="container" style={{ paddingTop: '40px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '20px', color: '#0078d4' }}>
          MOS Practice Sandbox
        </h1>
        <p style={{ fontSize: '20px', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
          {isVietnamese 
            ? 'Thành thạo Microsoft Office với các bài kiểm tra thực hành toàn diện của chúng tôi. Mô phỏng môi trường chứng chỉ MOS thực tế và tăng cường sự tự tin của bạn!'
            : 'Master Microsoft Office with our comprehensive practice tests. Simulate the real MOS certification environment and boost your confidence!'
          }
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '40px' }}>
        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>📝</div>
          <h3 style={{ marginBottom: '15px', color: '#0078d4' }}>
            {isVietnamese ? 'Bài Kiểm tra Thực hành' : 'Practice Tests'}
          </h3>
          <p style={{ marginBottom: '20px', color: '#666' }}>
            {isVietnamese 
              ? 'Tham gia các bài thi thực hành thực tế cho Word, Excel, PowerPoint và Outlook'
              : 'Take realistic practice exams for Word, Excel, PowerPoint, and Outlook'
            }
          </p>
          <Link to="/select" className="btn btn-primary">
            {isVietnamese ? 'Bắt đầu Thực hành' : 'Start Practice'}
          </Link>
        </div>

        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>🤖</div>
          <h3 style={{ marginBottom: '15px', color: '#0078d4' }}>
            {isVietnamese ? 'Trợ lý Học tập AI' : 'AI Learning Assistant'}
          </h3>
          <p style={{ marginBottom: '20px', color: '#666' }}>
            {isVietnamese 
              ? 'Trò chuyện với AI để nhận hướng dẫn cá nhân hóa và giải thích chi tiết'
              : 'Chat with AI for personalized guidance and detailed explanations'
            }
          </p>
          <Link to="/learning" className="btn btn-primary">
            {isVietnamese ? 'Bắt đầu Học tập' : 'Start Learning'}
          </Link>
        </div>

        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>⏱️</div>
          <h3 style={{ marginBottom: '15px', color: '#0078d4' }}>
            {isVietnamese ? 'Môi trường Có thời hạn' : 'Timed Environment'}
          </h3>
          <p style={{ marginBottom: '20px', color: '#666' }}>
            {isVietnamese
              ? 'Trải nghiệm điều kiện thi thật với giới hạn thời gian và tính điểm'
              : 'Experience real exam conditions with time limits and scoring'
            }
          </p>
        </div>

        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>📊</div>
          <h3 style={{ marginBottom: '15px', color: '#0078d4' }}>
            {isVietnamese ? 'Theo dõi Tiến trình' : 'Track Progress'}
          </h3>
          <p style={{ marginBottom: '20px', color: '#666' }}>
            {isVietnamese
              ? 'Theo dõi sự cải thiện của bạn và xác định các lĩnh vực cần học tập'
              : 'Monitor your improvement and identify areas for study'
            }
          </p>
        </div>
      </div>

      {state.userProgress.completedTests > 0 && (
        <div className="card">
          <h3 style={{ marginBottom: '20px', color: '#0078d4' }}>
            {isVietnamese ? 'Tiến trình của Bạn' : 'Your Progress'}
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            <div style={{ textAlign: 'center' }}>
              <div className="score">{state.userProgress.completedTests}</div>
              <p>{isVietnamese ? 'Bài Kiểm tra Hoàn thành' : 'Tests Completed'}</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div className="score">{state.userProgress.averageScore}%</div>
              <p>{isVietnamese ? 'Điểm Trung bình' : 'Average Score'}</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div className="score">{Math.max(...Object.values(state.userProgress.bestScores))}%</div>
              <p>{isVietnamese ? 'Điểm Tốt nhất' : 'Best Score'}</p>
            </div>
          </div>
        </div>
      )}

      <div className="card" style={{ backgroundColor: '#f8f9fa', border: '1px solid #0078d4' }}>
        <h3 style={{ marginBottom: '15px', color: '#0078d4' }}>
          {isVietnamese ? 'Về Chứng chỉ MOS' : 'About MOS Certification'}
        </h3>
        <p style={{ marginBottom: '15px', color: '#666' }}>
          {isVietnamese
            ? 'Chứng chỉ Microsoft Office Specialist (MOS) chứng minh khả năng thành thạo trong các chương trình Microsoft Office. Sandbox thực hành của chúng tôi giúp bạn chuẩn bị cho:'
            : 'Microsoft Office Specialist (MOS) certification demonstrates proficiency in Microsoft Office programs. Our practice sandbox helps you prepare for:'
          }
        </p>
        <ul style={{ color: '#666', paddingLeft: '20px' }}>
          <li>MOS Word ({isVietnamese ? 'Cấp độ Cơ bản và Chuyên gia' : 'Core and Expert levels'})</li>
          <li>MOS Excel ({isVietnamese ? 'Cấp độ Cơ bản và Chuyên gia' : 'Core and Expert levels'})</li>
          <li>MOS PowerPoint</li>
          <li>MOS Outlook</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
