const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  // Define other fields here
});

module.exports = mongoose.model('Movie', movieSchema);

