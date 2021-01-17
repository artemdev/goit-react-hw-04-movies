import { useState, useEffect } from 'react';
import { searchMovie } from '../api/fetchMovies';
import { Link, useLocation } from 'react-router-dom';
import Navbar from './navbar';

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

  return (
    <>
      <Navbar />
      <form action="" onSubmit={handleQuery}>
        <input
          type="text"
          id="query"
          placeholder="please, enter the movie name"
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.length > 0 ? (
          movies.map((movie, index) => (
            <li key={index}>
              <Link
                to={{
                  pathname: `movies/${movie.id}`,
                  state: { from: '/movies' },
                }}
              >
                {movie.original_title}
              </Link>
            </li>
          ))
        ) : (
          <section>
            {query === '' ? 'Please enter the movie name' : 'Movies not found'}
          </section>
        )}
      </ul>
    </>
  );
}
