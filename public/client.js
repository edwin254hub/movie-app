// client.js

window.onload = () => {
  // Fetch movie data and display it
  fetchMovies();
};

async function fetchMovies() {
  try {
    const response = await fetch('/api/movies');
    const movies = await response.json();
    displayMovies(movies);
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
}

function displayMovies(movies) {
  const moviesContainer = document.querySelector('.movies');
  moviesContainer.innerHTML = '';

  movies.forEach((movie) => {
    const movieCard = createMovieCard(movie);
    moviesContainer.appendChild(movieCard);
  });
}

function createMovieCard(movie) {
  const card = document.createElement('div');
  card.classList.add('movie');

  const image = document.createElement('img');
  image.src = movie.poster;
  image.alt = movie.title;

  const details = document.createElement('div');
  details.classList.add('details');

  const title = document.createElement('h3');
  title.textContent = movie.title;

  const genre = document.createElement('p');
  genre.textContent = movie.genre;

  const rating = document.createElement('p');
  rating.textContent = `Rating: ${movie.rating}`;

  details.appendChild(title);
  details.appendChild(genre);
  details.appendChild(rating);

  card.appendChild(image);
  card.appendChild(details);

  return card;
}

