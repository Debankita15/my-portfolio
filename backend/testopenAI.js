// backend/testOpenAI.js
const axios = require('axios');
require('dotenv').config();

const testOpenAI = async () => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: 'Hello, AI!' }],
        max_tokens: 50,
        n: 1,
        stop: null,
        temperature: 0.7,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    console.log('OpenAI Response:', response.data.choices[0].message.content.trim());
  } catch (error) {
    if (error.response) {
      console.error('OpenAI API Error:', error.response.status);
      console.error('Error Data:', error.response.data);
    } else if (error.request) {
      console.error('No response received from OpenAI API.');
    } else {
      console.error('Error setting up OpenAI API request:', error.message);
    }
  }
};

testOpenAI();
