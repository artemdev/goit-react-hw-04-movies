import { useState, useEffect } from 'react';
import { getTrending } from '../api/fetchMovies';
import shortid from 'shortid';
import { useRouteMatch, Link } from 'react-router-dom';
import Navbar from './navbar';

export default function Home() {
  const { path } = useRouteMatch();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending().then(setMovies).catch(console.log);
  }, []);

  return (
    <>
      <Navbar />
      <h1>Trending now</h1>
      <ul>
        {movies &&
          movies.map(movie => (
            <li key={shortid.generate()}>
              <Link to={`/movies/${movie.id}`}>
                {movie.original_name || movie.original_title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
