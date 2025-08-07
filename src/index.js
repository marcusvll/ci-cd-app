// src/index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Endpoint de exemplo simples para a apresentação
app.get('/', (req, res) => {
  res.send('Hello World! Esta é uma API de exemplo para CI/CD.');
});

// Outro endpoint de exemplo que será testado
app.get('/status', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Serviço está online.' });
});

// A aplicação só inicia se não estiver em ambiente de teste
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Aplicação rodando na porta ${port}`);
  });
}

module.exports = app;
