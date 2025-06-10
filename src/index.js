// src/index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Esse é CI-CD-APPX');
});

app.get('/api/status', (req, res) => {
  res.json({ status: 'Rodando', version: '1.0.0' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
