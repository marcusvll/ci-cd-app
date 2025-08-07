// app.test.js
const request = require('supertest');
const app = require('./src/index');

// Teste para o endpoint '/'
describe('GET /', () => {
  test('Deve retornar "Hello World!"', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello World! Esta é uma API de exemplo para CI/CD.');
  });
});

// Teste para o endpoint '/status'
describe('GET /status', () => {
  test('Deve retornar status OK', async () => {
    const response = await request(app).get('/status');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ status: 'OK', message: 'Serviço está online.' });
  });
});
