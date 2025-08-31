import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, language } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    
    // Debug logging (remove after testing)
    console.log('API Key exists:', !!apiKey);
    console.log('API Key length:', apiKey ? apiKey.length : 0);
    
    if (!apiKey) {
      // Fallback response if no API key is configured
      const fallbackResponse = language === 'en'
        ? `I understand your question about "${message}". Here's what I can help you with:

• Microsoft Office skills and certification preparation
• Step-by-step tutorials for Word, Excel, PowerPoint, and Outlook
• Best practices for productivity and efficiency
• Troubleshooting common issues

For a complete AI experience, please configure the Gemini API key in your environment variables.`
        : `Tôi hiểu câu hỏi của bạn về "${message}". Đây là những gì tôi có thể giúp bạn:

• Kỹ năng Microsoft Office và chuẩn bị chứng chỉ
• Hướng dẫn từng bước cho Word, Excel, PowerPoint và Outlook  
• Thực hành tốt nhất để tăng năng suất và hiệu quả
• Khắc phục sự cố thường gặp

Để có trải nghiệm AI hoàn chỉnh, vui lòng cấu hình khóa API Gemini trong biến môi trường.`;

      return res.json({ response: fallbackResponse });
    }

    // Craft a specialized prompt for MOS learning
    const systemPrompt = language === 'en'
      ? `You are an expert Microsoft Office instructor helping users prepare for MOS certification. Provide clear, actionable advice about Word, Excel, PowerPoint, and Outlook. Be encouraging and supportive. Keep responses focused on practical learning.`
      : `Bạn là một giảng viên Microsoft Office chuyên nghiệp giúp người dùng chuẩn bị chứng chỉ MOS. Đưa ra lời khuyên rõ ràng, có thể thực hiện được về Word, Excel, PowerPoint và Outlook. Hãy khuyến khích và hỗ trợ. Tập trung vào việc học thực tế.`;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `${systemPrompt}\n\nUser question: ${message}`
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        }
      })
    });

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I could not generate a response.';

    return res.json({ response: aiResponse });

  } catch (error) {
    console.error('Chat API error:', error);
    
    // Provide a helpful fallback response
    const { message, language } = req.body;
    const errorResponse = language === 'en'
      ? `I'm experiencing some technical difficulties, but I'd still like to help! Your question about "${message}" is important. Here are some general tips:

• For Word: Focus on document formatting, styles, and collaboration features
• For Excel: Practice formulas, charts, and data analysis tools  
• For PowerPoint: Master slide design, transitions, and presenter tools
• For Outlook: Learn email management, calendar, and task organization

Please try again in a moment, or check our practice tests for hands-on learning!`
      : `Tôi đang gặp một số khó khăn kỹ thuật, nhưng vẫn muốn giúp bạn! Câu hỏi của bạn về "${message}" rất quan trọng. Đây là một số mẹo chung:

• Cho Word: Tập trung vào định dạng tài liệu, kiểu dáng và tính năng cộng tác
• Cho Excel: Thực hành công thức, biểu đồ và công cụ phân tích dữ liệu
• Cho PowerPoint: Thành thạo thiết kế slide, hiệu ứng chuyển tiếp và công cụ trình bày
• Cho Outlook: Học quản lý email, lịch và tổ chức công việc

Vui lòng thử lại sau một lúc, hoặc kiểm tra các bài kiểm tra thực hành để học tập thực tế!`;

    return res.json({ response: errorResponse });
  }
}
