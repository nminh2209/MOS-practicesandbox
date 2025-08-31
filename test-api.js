// Test script to validate Gemini API key
const GEMINI_API_KEY = 'AIzaSyAI0NkoqbbDxtPwxQ4pIFsJ5K-9_xJHC9E'; // Newest key from user

async function testGeminiAPI() {
  try {
    console.log('Testing Gemini API...');
    
    // Use the correct model endpoint from Google AI Studio
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: 'Hello, can you help me with Microsoft Word?'
          }]
        }]
      })
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers));
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      return;
    }

    const data = await response.json();
    console.log('Success! Response data:', JSON.stringify(data, null, 2));
    
  } catch (error) {
    console.error('Error:', error);
  }
}

testGeminiAPI();
