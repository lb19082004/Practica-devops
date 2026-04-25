const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Rutas
app.get('/', (req, res) => {
  res.json({
    mensaje: '¡Hola Mundo! 👋',
    estado: 'OK',
    timestamp: new Date().toISOString()
  });
});

app.get('/saludo/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.json({
    mensaje: `¡Hola ${nombre}! 🎉`,
    estado: 'OK'
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

// Error handler
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

// Exportar para testing
module.exports = app;

// Iniciar servidor si no está en testing
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  });
}