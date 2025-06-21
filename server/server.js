const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/database/connection');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to database and start server
connectDB().then(() => {
  // Middleware
  app.use(cors());
  app.use(express.json());

  // Routes

app.use('/api/assessment', require('./routes/assessment'));


  // Basic route
  app.get('/', (req, res) => {
    res.json({ 
      message: 'Personality Assessment API is running!',
      status: 'success',
      database: 'connected',
      endpoints: [
        'POST /api/assessment/submit',
        'GET /api/assessment/result/:id',
        'GET /api/assessment/stats'
      ],
      timestamp: new Date().toISOString()
    });
  });

  // Health check route
  app.get('/api/health', (req, res) => {
    res.json({ 
      status: 'healthy',
      service: 'personality-assessment-api',
      version: '1.0.0',
      database: 'MongoDB Atlas'
    });
  });

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📱 Frontend: http://localhost:3000`);
    console.log(`🔧 Backend: http://localhost:${PORT}`);
    console.log(`📊 API Endpoints:`);
    console.log(`   POST ${PORT}/api/assessment/submit`);
    console.log(`   GET  ${PORT}/api/assessment/result/:id`);
    console.log(`   GET  ${PORT}/api/assessment/stats`);
  });
}).catch((error) => {
  console.error('Failed to connect to database:', error);
});
