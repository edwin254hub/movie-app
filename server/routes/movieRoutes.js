// movieRoutes.js

const express = require('express');
const router = express.Router();

// Example movie data
const movies = [
  { title: 'Movie 1', genre: 'Action', rating: 4.5, poster: 'https://via.placeholder.com/200x300' },
  { title: 'Movie 2', genre: 'Comedy', rating: 3.8, poster: 'https://via.placeholder.com/200x300' },
  { title: 'Movie 3', genre: 'Drama', rating: 4.2, poster: 'https://via.placeholder.com/200x300' }
];

// GET /api/movies
router.get('/', (req, res) => {
  res.json(movies);
});

module.exports = router;


