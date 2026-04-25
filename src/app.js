const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// HTML Principal
const htmlPrincipal = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>🚀 DevOps CI/CD - Práctica Final</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    
    .container {
      background: rgba(255, 255, 255, 0.95);
      border-radius: 20px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      max-width: 600px;
      width: 100%;
      padding: 50px;
      text-align: center;
    }
    
    .rocket {
      font-size: 80px;
      margin-bottom: 20px;
      animation: bounce 2s infinite;
    }
    
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
    
    h1 {
      color: #333;
      font-size: 2.5em;
      margin-bottom: 10px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .subtitle {
      color: #666;
      font-size: 1.1em;
      margin-bottom: 40px;
    }
    
    .info-box {
      background: #f8f9fa;
      border-left: 5px solid #667eea;
      padding: 20px;
      margin: 20px 0;
      border-radius: 10px;
      text-align: left;
    }
    
    .info-box p {
      color: #555;
      margin: 8px 0;
      font-size: 0.95em;
    }
    
    .status {
      display: inline-block;
      background: #10b981;
      color: white;
      padding: 8px 16px;
      border-radius: 20px;
      font-weight: bold;
      font-size: 0.9em;
      margin-top: 10px;
    }
    
    .endpoints {
      margin-top: 40px;
      text-align: left;
    }
    
    .endpoints h3 {
      color: #333;
      margin-bottom: 15px;
      text-align: center;
    }
    
    .endpoint {
      background: #f0f4ff;
      padding: 12px;
      margin: 10px 0;
      border-radius: 8px;
      font-family: 'Courier New', monospace;
      font-size: 0.9em;
      color: #667eea;
      border-left: 3px solid #667eea;
    }
    
    .footer {
      margin-top: 30px;
      color: #999;
      font-size: 0.85em;
    }
    
    .badge {
      display: inline-block;
      background: #667eea;
      color: white;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.8em;
      margin: 5px 5px 5px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="rocket">🚀</div>
    <h1>DevOps CI/CD</h1>
    <p class="subtitle">Práctica Final con GitHub Actions</p>
    
    <div class="info-box">
      <p><strong>🎉 Saludos Leury Brand</strong></p>
      <p>Aplicación desplegada exitosamente con pipeline automático</p>
      <div class="status">✅ Sistema Operativo</div>
    </div>
    
    <div class="info-box">
      <p><strong>📊 Estado:</strong> Healthy</p>
      <p><strong>⏰ Hora:</strong> <span id="timestamp"></span></p>
      <p><strong>👤 Autor:</strong> Leury Brand</p>
    </div>
    
    <div class="endpoints">
      <h3>📡 API Endpoints</h3>
      <div class="endpoint">GET /api/v1/saludo/:nombre</div>
      <div class="endpoint">GET /health</div>
      <div class="endpoint">GET /api/v1/info</div>
    </div>
    
    <div style="margin-top: 30px;">
      <p>Stack Tecnológico:</p>
      <div>
        <span class="badge">Node.js</span>
        <span class="badge">Express</span>
        <span class="badge">Docker</span>
        <span class="badge">GitHub Actions</span>
      </div>
    </div>
    
    <div class="footer">
      <p>🔗 DevOps Pipeline | CI/CD Automático | Deployment Continuo</p>
    </div>
  </div>
  
  <script>
    function updateTimestamp() {
      const now = new Date().toLocaleString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      document.getElementById('timestamp').textContent = now;
    }
    
    updateTimestamp();
    setInterval(updateTimestamp, 1000);
  </script>
</body>
</html>
`;

// Rutas
app.get('/', (req, res) => {
  res.send(htmlPrincipal);
});

app.get('/api/v1/saludo/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.json({
    mensaje: `¡Hola ${nombre}! 🎉`,
    estado: 'OK'
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.get('/api/v1/info', (req, res) => {
  res.json({
    mensaje: '¡Hola Mundo! 👋',
    estado: 'OK',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    autor: 'Leury Brand'
  });
});

app.get('/saludo/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.json({
    mensaje: `¡Hola ${nombre}! 🎉`,
    estado: 'OK'
  });
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

module.exports = app;

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  });
}