const express = require('express');
const router = express.Router();
const os = require('os');

// Home page
router.get('/', (req, res) => {
  const data = {
    title: 'DevOps Practice App',
    version: process.env.npm_package_version || '1.0.0',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  };
  res.render('index', data);
});

// Health check endpoint
router.get('/health', (req, res) => {
  const healthData = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: process.env.npm_package_version || '1.0.0',
    environment: process.env.NODE_ENV || 'development',
    system: {
      platform: os.platform(),
      arch: os.arch(),
      nodeVersion: process.version,
      memory: {
        used: Math.round(process.memoryUsage().heapUsed / 1024 / 1024) + ' MB',
        total: Math.round(os.totalmem() / 1024 / 1024) + ' MB'
      }
    }
  };
  res.json(healthData);
});

// API endpoint for testing
router.get('/api/info', (req, res) => {
  res.json({
    message: 'DevOps Practice API',
    timestamp: new Date().toISOString(),
    requestInfo: {
      ip: req.ip,
      method: req.method,
      userAgent: req.get('User-Agent')
    }
  });
});

// Metrics endpoint (basic)
router.get('/metrics', (req, res) => {
  const metrics = {
    requests_total: Math.floor(Math.random() * 1000),
    response_time_ms: Math.floor(Math.random() * 100),
    active_connections: Math.floor(Math.random() * 50),
    timestamp: new Date().toISOString()
  };
  res.json(metrics);
});

module.exports = router;