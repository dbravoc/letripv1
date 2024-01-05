const express = require('express');
const mercadopago = require('@mercadopago/sdk-js');
const app = express();

app.use(express.json());

mercadopago.configure({
  access_token: "YOUR_ACCESS_TOKEN"
});

app.post('/process_payment', (req, res) => {
  let payment_data = {
    transaction_amount: Number(req.body.transaction_amount),
    token: req.body.token,
    description: req.body.description,
    installments: Number(req.body.installments),
    payment_method_id: req.body.payment_method_id,
    issuer_id: req.body.issuer_id,
    payer: {
      email: req.body.payer.email,
      identification: {
        type: req.body.payer.identification.type,
        number: req.body.payer.identification.number
      }
    }
  };

  mercadopago.payment.save(payment_data)
    .then(response => {
      res.status(201).json(response.body);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
