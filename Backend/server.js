const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/chat', async (req, res) => {
    try {
        const response = await axios.post('https://api.openai.com/v1/engines/gpt-3.5-turbo/completions', {
            prompt: req.body.message, // El mensaje del usuario
            max_tokens: 150
        }, {
            headers: {
                'Authorization': `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`
            }
        });
        res.json({ reply: response.data.choices[0].text });
    } catch (error) {
        res.status(500).send(error.toString());
    }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor ejecutándose en el puerto ${PORT}`));
