const request = require('supertest');
const app = require('../src/app');

describe('API - Aplicación DevOps', () => {
  
  test('GET / debe retornar HTML', async () => {
    const response = await request(app).get('/');
    
    expect(response.status).toBe(200);
    expect(response.text).toContain('Saludos Leury Brand');
    expect(response.text).toContain('DevOps CI/CD');
  });

  test('GET /api/v1/info debe retornar JSON con info', async () => {
    const response = await request(app).get('/api/v1/info');
    
    expect(response.status).toBe(200);
    expect(response.body.mensaje).toBe('¡Hola Mundo! 👋');
    expect(response.body.estado).toBe('OK');
    expect(response.body.autor).toBe('Leury Brand');
  });

  test('GET /saludo/:nombre debe retornar saludo personalizado', async () => {
    const response = await request(app).get('/saludo/Leury');
    
    expect(response.status).toBe(200);
    expect(response.body.mensaje).toContain('Leury');
    expect(response.body.estado).toBe('OK');
  });

  test('GET /health debe retornar status healthy', async () => {
    const response = await request(app).get('/health');
    
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('healthy');
  });

  test('GET /api/v1/info debe incluir timestamp válido', async () => {
    const response = await request(app).get('/api/v1/info');
    
    expect(response.body.timestamp).toBeDefined();
    expect(new Date(response.body.timestamp)).toBeInstanceOf(Date);
  });
});