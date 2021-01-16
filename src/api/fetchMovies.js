import axios from 'axios';
const API_KEY = 'ca745db198ca3fbe8342f07480e09405';
const BASE_URL = 'https://api.themoviedb.org/3/';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
};

export const getMovieDetails = async id => {
  try {
    const { data } = await axios.get(`movie/${id}`);
    return data;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

export const getMovieReviews = async id => {
  try {
    const { data } = await axios.get(`/movie/${id}/reviews`);
    return data.results;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

export const getMovieCredits = async id => {
  try {
    const { data } = await axios.get(`/movie/${id}/credits`);
    return data.cast;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

export const getTrending = async () => {
  try {
    const { data } = await axios.get(`/trending/all/week`);
    return data.results;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

export const searchMovie = async q => {
  try {
    const { data } = await axios.get(`/search/movies`, { query: q });
    return data.hits;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};
