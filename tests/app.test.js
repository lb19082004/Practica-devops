const request = require('supertest');
const app = require('../src/app');

describe('API - Aplicación Hola Mundo', () => {
  
  test('GET / debe retornar mensaje de bienvenida', async () => {
    const response = await request(app).get('/');
    
    expect(response.status).toBe(200);
    expect(response.body.mensaje).toBe('¡Hola Mundo! 👋');
    expect(response.body.estado).toBe('OK');
  });

  test('GET /saludo/:nombre debe retornar saludo personalizado', async () => {
    const response = await request(app).get('/saludo/Yeli');
    
    expect(response.status).toBe(200);
    expect(response.body.mensaje).toContain('Yeli');
    expect(response.body.estado).toBe('OK');
  });

  test('GET /health debe retornar status healthy', async () => {
    const response = await request(app).get('/health');
    
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('healthy');
  });

  test('GET / debe incluir timestamp válido', async () => {
    const response = await request(app).get('/');
    
    expect(response.body.timestamp).toBeDefined();
    expect(new Date(response.body.timestamp)).toBeInstanceOf(Date);
  });
});