const Movie = require('../models/Movie');

module.exports = {
  getAllMovies: async (req, res) => {
    try {
      const movies = await Movie.find();
      res.json(movies);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createMovie: async (req, res) => {
    const movie = new Movie({
      title: req.body.title,
      // Add other fields here
    });
    try {
      const newMovie = await movie.save();
      res.status(201).json(newMovie);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Implement other controller methods (getMovieById, updateMovie, deleteMovie) similarly
};

