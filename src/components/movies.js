import React, { useState, useEffect, lazy, Suspense } from 'react';
import { searchMovie } from '../api/fetchMovies';
import Navbar from './navbar';
import search from '../styles/search.module.css';
import moviesStyles from '../styles/home.module.css';

const AsyncMoviesList = lazy(() => import('./moviesList'));

export default function Movies({ history, location }) {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query === '') return;
    searchMovie(query).then(setMovies).catch(console.log);
  }, [query]);

  const handleQuery = e => {
    e.preventDefault();
    setQuery(e.target.query.value);
    history.push({
      path: location.pathname,
      search: `query=${e.target.query.value}`,
    });
  };
  const moviesListProps = {
    styles: moviesStyles,
    movies: movies,
  };
  return (
    <>
      <Navbar />
      <form className={search.search} action="" onSubmit={handleQuery}>
        <input
          className={search.searchField}
          type="text"
          id="query"
          placeholder="Please, enter the movie name"
        />
        <button className={search.searchButton} type="submit">
          Search
        </button>
      </form>

      <Suspense fallback={<div>Loading...</div>}>
        <AsyncMoviesList {...moviesListProps} />
      </Suspense>
    </>
  );
}
