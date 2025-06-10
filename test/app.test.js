const request = require('supertest');
const app = require('../src/index'); // Certifique-se de que index.js exporta `app`

describe('API Endpoints', () => {
  let server;

  // Antes de todos os testes, inicie o servidor
  beforeAll((done) => {
    server = app.listen(0, done); // Porta 0 para que o sistema escolha uma porta livre
  });

  // Depois de todos os testes, feche o servidor
  afterAll((done) => {
    server.close(done);
  });

  test('GET / should return "Olá do meu aplicativo CI/CD!"', async () => {
    const response = await request(server).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Olá do meu aplicativo CI/CD!');
  });

  test('GET /api/status should return JSON with status and version', async () => {
    const response = await request(server).get('/api/status');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ status: 'Rodando', version: '1.0.0' });
  });
});
