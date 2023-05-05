import axios from 'axios';

const API_KEY = '35e4029009d2b1b2fd3abd64436fbdbc9';
const API_PATH = 'https://api.themoviedb.org/3';
const MEDIA_TYPE = 'movie';
const TIME_WINDOW = 'week';
const LANGUAGE = 'en-US';


export async function fetchTrendMovies() {
  const response = await axios.get(
    `${API_PATH}/trending/${MEDIA_TYPE}/${TIME_WINDOW}?api_key=${API_KEY}`
  );
  if (response.statusText) {
    throw new Error(response.statusText);
  }
  return response.data;
}

export async function fetchSearch(searchQuery) {
  const response = await axios.get(
    `${API_PATH}/search/movie?api_key=${API_KEY}&language=${LANGUAGE}&query=${searchQuery}&page=1&include_adult=false`
  );
  if (response.statusText) {
    throw new Error(response.statusText);
  }
  return response.data;
}

export async function fetchMovie(movieId) {
  const response = await axios.get(
    `${API_PATH}/movie/${movieId}?api_key=${API_KEY}&language=${LANGUAGE}`
  );
  if (response.statusText) {
    throw new Error(response.statusText);
  }
  return response.data;
}

export async function fetchReview(movieId) {
  const response = await axios.get(
    `${API_PATH}/movie/${movieId}/reviews?api_key=${API_KEY}&language=${LANGUAGE}&page=1`
  );
  if (response.statusText) {
    throw new Error(response.statusText);
  }
  return response.data;
}

export async function fetchCast(movieId) {
  const response = await axios.get(
    `${API_PATH}/movie/${movieId}/credits?api_key=${API_KEY}&language=${LANGUAGE}`
  );
  if (response.statusText) {
    throw new Error(response.statusText);
  }
  return response.data;
}