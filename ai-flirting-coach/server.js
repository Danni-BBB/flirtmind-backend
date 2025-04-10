import express from 'express';
import { Configuration, OpenAIApi } from 'openai';
import dotenv from 'dotenv';

dotenv.config(); // Load biến môi trường từ .env

const app = express();
const port = 5000;

// Cấu hình OpenAI với biến môi trường
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Đọc key từ file .env
});
const openai = new OpenAIApi(configuration);

app.use(express.json());

// Pickup Line endpoint
app.post('/pickup-line', async (req, res) => {
  try {
    const { situation } = req.body;
    const response = await openai.createCompletion({
      model: 'gpt-4',
      prompt: `Create a pickup line for the following situation: ${situation}`,
      max_tokens: 150,
      temperature: 0.7,
    });
    res.json({ pickupLine: response.data.choices[0].text.trim() });
  } catch (error) {
    console.error('Error generating pickup line:', error.response?.data || error.message);
    res.status(500).send('Error generating pickup line');
  }
});

// Chat Analyzer endpoint
app.post('/chat-analyzer', async (req, res) => {
  try {
    const { chatHistory } = req.body;
    const response = await openai.createCompletion({
      model: 'gpt-4',
      prompt: `Analyze the following chat and suggest improvements: ${chatHistory}`,
      max_tokens: 200,
      temperature: 0.7,
    });
    res.json({ analysis: response.data.choices[0].text.trim() });
  } catch (error) {
    console.error('Error analyzing chat:', error.response?.data || error.message);
    res.status(500).send('Error analyzing chat');
  }
});

// Profile Mastery endpoint
app.post('/profile-master', async (req, res) => {
  try {
    const { profileText } = req.body;
    const response = await openai.createCompletion({
      model: 'gpt-4',
      prompt: `Provide suggestions to improve this dating profile: ${profileText}`,
      max_tokens: 200,
      temperature: 0.7,
    });
    res.json({ suggestions: response.data.choices[0].text.trim() });
  } catch (error) {
    console.error('Error generating profile suggestions:', error.response?.data || error.message);
    res.status(500).send('Error generating profile suggestions');
  }
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
