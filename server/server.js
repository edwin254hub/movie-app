// server.js

const express = require('express');
const app = express();
const dotenv = require('dotenv');
const movieRoutes = require('./routes/movieRoutes');
const path = require('path');

// Load environment variables from .env file
dotenv.config();

// Middleware to parse JSON body
app.use(express.json());

// Use movie routes
app.use('/api/movies', movieRoutes);

// Serve static files (CSS, client-side JavaScript, images)
app.use(express.static('public'));

// Root endpoint route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

