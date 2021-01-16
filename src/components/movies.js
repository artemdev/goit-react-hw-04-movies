import { useState, useEffect } from 'react';
import { getTrending } from '../api/fetchMovies';
import shortid from 'shortid';
import { useRouteMatch, Link } from 'react-router-dom';
import Navbar from './navbar';

export default function Movies() {
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending().then(setMovies).catch(console.log);
  }, []);

  return (
    <>
      <Navbar />
      <ul>
        {movies.map(movie => (
          <li key={shortid.generate()}>
            <Link to={`${url}/${movie.id}`}>
              {movie.original_name || movie.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
