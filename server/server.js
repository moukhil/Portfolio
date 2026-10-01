const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const { connectDB } = require('./config/db');
const apiRoutes = require('./routes/apiRoutes');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to Database (with automatic graceful fallback)
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logger for API calls
app.use((req, res, next) => {
  if (req.path.startsWith('/api')) {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  }
  next();
});

// API Routes
app.use('/api', apiRoutes);

// Production Static Asset Serving
const clientDistPath = path.join(__dirname, '..', 'client', 'dist');
app.use(express.static(clientDistPath));

// For SPA routing: any non-API route returns index.html if built
app.get('*', (req, res) => {
  const indexPath = path.join(clientDistPath, 'index.html');
  if (require('fs').existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.json({
      message: 'Portfolio Backend API is running.',
      frontendDevUrl: 'http://localhost:5173',
      endpoints: [
        '/api/profile',
        '/api/skills',
        '/api/projects',
        '/api/contact',
        '/api/health'
      ]
    });
  }
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled Server Error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error occurred',
    error: process.env.NODE_ENV === 'production' ? undefined : err.message
  });
});

const server = app.listen(PORT, () => {
  console.log(`🚀 Portfolio Server running at http://localhost:${PORT}`);
  console.log(`📡 API Endpoints available at http://localhost:${PORT}/api/`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\n⚠️  Port ${PORT} is currently occupied by another process.`);
    console.error(`💡 Tip: Another instance may already be running. You can stop it with:`);
    console.error(`   Get-NetTCPConnection -LocalPort ${PORT} | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force }`);
    console.error(`   Or configure a different port in your environment: $env:PORT=5001\n`);
  } else {
    console.error('Server error:', err);
  }
  process.exit(1);
});

module.exports = app;
