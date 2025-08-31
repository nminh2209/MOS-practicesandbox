import { useNavigate } from 'react-router-dom';
import { useTest } from '../context/TestContext';

const TestSelection: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useTest();
  const isVietnamese = state.language === 'vi';

  const officeApps = [
    {
      type: 'word',
      name: 'Microsoft Word',
      description: isVietnamese 
        ? 'Tạo tài liệu, định dạng, bảng và các tính năng cộng tác'
        : 'Document creation, formatting, tables, and collaboration features',
      color: '#2B579A',
      icon: '📄',
      testCount: 5
    },
    {
      type: 'excel',
      name: 'Microsoft Excel',
      description: isVietnamese
        ? 'Bảng tính, công thức, biểu đồ, phân tích dữ liệu và bảng tổng hợp'
        : 'Spreadsheets, formulas, charts, data analysis, and pivot tables',
      color: '#217346',
      icon: '📊',
      testCount: 5
    },
    {
      type: 'powerpoint',
      name: 'Microsoft PowerPoint',
      description: isVietnamese
        ? 'Bài thuyết trình, hoạt ảnh, thiết kế slide và đa phương tiện'
        : 'Presentations, animations, slide design, and multimedia',
      color: '#D24726',
      icon: '📽️',
      testCount: 5
    },
    {
      type: 'outlook',
      name: 'Microsoft Outlook',
      description: isVietnamese
        ? 'Quản lý email, lịch, liên hệ và tổ chức công việc'
        : 'Email management, calendar, contacts, and task organization',
      color: '#0078D4',
      icon: '📧',
      testCount: 5
    }
  ];

  const handleAppSelection = (appType: string) => {
    navigate(`/practice/${appType}`);
  };

  return (
    <div className="container" style={{ paddingTop: '40px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '36px', marginBottom: '20px', color: '#333' }}>
          {isVietnamese ? 'Chọn Bài Kiểm tra Thực hành' : 'Choose Your Practice Test'}
        </h1>
        <p style={{ fontSize: '18px', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
          {isVietnamese 
            ? 'Chọn một ứng dụng Microsoft Office để bắt đầu phiên thực hành của bạn. Mỗi bài kiểm tra bao gồm các tình huống thực tế và giới hạn thời gian.'
            : 'Select a Microsoft Office application to begin your practice session. Each test includes realistic scenarios and time limits.'
          }
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        {officeApps.map((app) => (
          <div
            key={app.type}
            className="card"
            style={{
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              border: `2px solid ${app.color}20`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
            }}
            onClick={() => handleAppSelection(app.type)}
          >
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '64px', 
                marginBottom: '20px',
                filter: `hue-rotate(${app.type === 'word' ? '220deg' : 
                                     app.type === 'excel' ? '90deg' : 
                                     app.type === 'powerpoint' ? '10deg' : '200deg'})`
              }}>
                {app.icon}
              </div>
              
              <h3 style={{ 
                marginBottom: '15px', 
                color: app.color,
                fontSize: '24px'
              }}>
                {app.name}
              </h3>
              
              <p style={{ 
                marginBottom: '20px', 
                color: '#666',
                fontSize: '16px',
                lineHeight: '1.5'
              }}>
                {app.description}
              </p>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px',
                fontSize: '14px',
                color: '#888'
              }}>
                <span>
                  {isVietnamese 
                    ? `${app.testCount} câu hỏi thực hành`
                    : `${app.testCount} practice questions`
                  }
                </span>
                <span>
                  ⏱️ {isVietnamese ? '45 phút' : '45 minutes'}
                </span>
              </div>
              
              <button 
                className="btn btn-primary"
                style={{ 
                  backgroundColor: app.color,
                  width: '100%',
                  fontSize: '16px',
                  padding: '15px'
                }}
              >
                {isVietnamese 
                  ? `Bắt đầu kiểm tra ${app.name}`
                  : `Start ${app.name} Test`
                }
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="card" style={{ marginTop: '40px', backgroundColor: '#fff3cd', border: '1px solid #ffeaa7' }}>
        <h3 style={{ color: '#856404', marginBottom: '15px' }}>
          📝 {isVietnamese ? 'Hướng dẫn Bài kiểm tra' : 'Test Instructions'}
        </h3>
        <ul style={{ color: '#856404', paddingLeft: '20px' }}>
          {isVietnamese ? (
            <>
              <li>Mỗi bài kiểm tra chứa các tình huống chứng chỉ MOS thực tế</li>
              <li>Bạn có 45 phút để hoàn thành bài kiểm tra</li>
              <li>Các câu hỏi dựa trên mục tiêu thi MOS thực tế</li>
              <li>Tiến trình của bạn sẽ được lưu tự động</li>
              <li>Xem lại câu trả lời trước khi nộp bài</li>
            </>
          ) : (
            <>
              <li>Each test contains realistic MOS certification scenarios</li>
              <li>You have 45 minutes to complete the test</li>
              <li>Questions are based on actual MOS exam objectives</li>
              <li>Your progress will be saved automatically</li>
              <li>Review your answers before submitting</li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default TestSelection;
