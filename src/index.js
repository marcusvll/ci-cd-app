const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Olá do meu aplicativo CI/CD!');
});

app.get('/api/status', (req, res) => {
  res.json({ status: 'Rodando', version: '1.0.0' });
});

// Apenas inicie o servidor se o arquivo for executado diretamente
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}

module.exports = app; // Exporta a instância do app para testes
