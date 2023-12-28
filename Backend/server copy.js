require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const openai = require('openai');
const cors = require('cors');
const axios = require('axios');

openai.apiKey = process.env.OPENAI_API_KEY;

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Esto habilita CORS para todas las rutas


app.post('/message', async (req, res) => {
  try {
    const userMessage = req.body.message;

    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: "gpt-3.5-turbo-1106",
      messages: [{ role: "user", content: userMessage }]
    }, 
      {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    const reply = response.data.choices[0].message.content;
    res.json({ reply: reply });
  } 
  
  catch (error) {
    console.error('Error en la API de OpenAI:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
