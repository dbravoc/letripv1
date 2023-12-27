const express = require('express');
const bodyParser = require('body-parser');
const { Configuration, OpenAIApi } = require('openai');

const app = express();
const port = 3000;

// Configurar el body-parser para manejar las solicitudes POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configurar OpenAI
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Asegúrate de definir tu clave API en las variables de entorno
});
const openai = new OpenAIApi(configuration);

// Endpoint para procesar mensajes
app.post('/message', async (req, res) => {
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo ", // O el modelo que desees usar
      messages: [{
        role: "user",
        content: req.body.message
      }]
    });

    res.send({ reply: response.data.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al procesar el mensaje");
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
