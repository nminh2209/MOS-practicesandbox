import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, BookOpen, Brain, Lightbulb, User, Bot, LucideIcon } from 'lucide-react';
import { useTest } from '../context/TestContext';
import '../styles/Learning.css';

interface ChatMessage {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface LanguageText {
  title: string;
  subtitle: string;
  placeholder: string;
  send: string;
  typing: string;
  quickQuestions: string;
  examples: string[];
  features: Feature[];
}

const Learning: React.FC = () => {
  const { state } = useTest();
  const language = state.language as 'en' | 'vi';
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const text: Record<'en' | 'vi', LanguageText> = {
    en: {
      title: 'AI Learning Assistant',
      subtitle: 'Get personalized help with Microsoft Office skills',
      placeholder: 'Ask me anything about Word, Excel, PowerPoint, or Outlook...',
      send: 'Send',
      typing: 'AI is typing...',
      quickQuestions: 'Quick Questions',
      examples: [
        'How do I create a pivot table in Excel?',
        'What are the best practices for PowerPoint presentations?',
        'How do I use mail merge in Word?',
        'How can I organize my Outlook inbox effectively?'
      ],
      features: [
        {
          icon: Brain,
          title: 'Personalized Learning',
          description: 'Get tailored explanations based on your skill level'
        },
        {
          icon: BookOpen,
          title: 'Interactive Tutorials',
          description: 'Step-by-step guidance for complex tasks'
        },
        {
          icon: Lightbulb,
          title: 'Smart Tips',
          description: 'Discover productivity tips and best practices'
        }
      ]
    },
    vi: {
      title: 'Trợ lý Học tập AI',
      subtitle: 'Nhận hỗ trợ cá nhân hóa về kỹ năng Microsoft Office',
      placeholder: 'Hỏi tôi bất cứ điều gì về Word, Excel, PowerPoint, hoặc Outlook...',
      send: 'Gửi',
      typing: 'AI đang gõ...',
      quickQuestions: 'Câu hỏi nhanh',
      examples: [
        'Làm thế nào để tạo bảng pivot trong Excel?',
        'Thực hành tốt nhất cho bài thuyết trình PowerPoint là gì?',
        'Làm thế nào để sử dụng mail merge trong Word?',
        'Làm thế nào để tổ chức hộp thư Outlook hiệu quả?'
      ],
      features: [
        {
          icon: Brain,
          title: 'Học tập Cá nhân hóa',
          description: 'Nhận giải thích phù hợp với trình độ của bạn'
        },
        {
          icon: BookOpen,
          title: 'Hướng dẫn Tương tác',
          description: 'Hướng dẫn từng bước cho các tác vụ phức tạp'
        },
        {
          icon: Lightbulb,
          title: 'Mẹo Thông minh',
          description: 'Khám phá các mẹo năng suất và thực hành tốt nhất'
        }
      ]
    }
  };

  const currentText = text[language];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize with welcome message
  useEffect(() => {
    if (messages.length === 0) {
      const welcomeMessage: ChatMessage = {
        id: '1',
        type: 'ai',
        content: language === 'en' 
          ? "Hello! I'm your MOS learning assistant. I can help you understand Microsoft Office concepts, provide step-by-step tutorials, and answer any questions you have about Word, Excel, PowerPoint, or Outlook. What would you like to learn today?"
          : "Xin chào! Tôi là trợ lý học tập MOS của bạn. Tôi có thể giúp bạn hiểu các khái niệm Microsoft Office, cung cấp hướng dẫn từng bước, và trả lời bất kỳ câu hỏi nào về Word, Excel, PowerPoint, hoặc Outlook. Bạn muốn học gì hôm nay?",
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [language]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Call Vercel serverless function
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: inputMessage, language })
      });
      
      if (!response.ok) {
        throw new Error('Failed to get AI response');
      }
      
      const data = await response.json();
      
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: data.response,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    } catch (error) {
      console.error('Error sending message:', error);
      setIsLoading(false);
    }
  };

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="learning-container">
      <div className="learning-header">
        <div className="header-content">
          <MessageCircle size={32} className="header-icon" />
          <div>
            <h1>{currentText.title}</h1>
            <p>{currentText.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="learning-content">
        {messages.length <= 1 && (
          <div className="features-grid">
            {currentText.features.map((feature: Feature, index: number) => (
              <div key={index} className="feature-card">
                <feature.icon size={24} className="feature-icon" />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        )}

        {messages.length <= 1 && (
          <div className="quick-questions">
            <h3>{currentText.quickQuestions}</h3>
            <div className="questions-grid">
              {currentText.examples.map((question: string, index: number) => (
                <button
                  key={index}
                  className="question-btn"
                  onClick={() => handleQuickQuestion(question)}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="chat-container">
          <div className="messages">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.type}`}>
                <div className="message-avatar">
                  {message.type === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div className="message-content">
                  <div className="message-text">{message.content}</div>
                  <div className="message-time">
                    {message.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="message ai">
                <div className="message-avatar">
                  <Bot size={16} />
                </div>
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="message-text">{currentText.typing}</div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input">
            <div className="input-container">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={currentText.placeholder}
                disabled={isLoading}
                rows={1}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="send-btn"
              >
                <Send size={20} />
                {currentText.send}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learning;
