// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { OpenAI } = require('openai');

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Here’s your chat endpoint with logging:
app.post('/api/chat', async (req, res) => {
  // Log incoming prompt
  console.log('Received prompt:', req.body.prompt);

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You’re a helpful assistant about Nikhil’s portfolio.' },
        { role: 'user', content: req.body.prompt }
      ],
      max_tokens: 200
    });

    // Send back the AI’s reply
    res.json({ reply: completion.choices[0].message.content });
  } catch (err) {
    // Log any OpenAI errors
    console.error('OpenAI error:', err);
    res.status(500).json({ error: 'OpenAI request failed' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend listening on port ${PORT}`));
