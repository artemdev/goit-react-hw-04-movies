import { useState, useEffect, Suspense, lazy } from 'react';
import { getTrending } from '../api/fetchMovies';
import Navbar from './navbar';
import styles from '../styles/home.module.css';

const AsyncMoviesList = lazy(() => import('./moviesList'));

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending().then(setMovies).catch(console.log);
  }, []);
  const moviesListProps = {
    movies: movies,
    styles: styles,
  };
  return (
    <>
      <Navbar />
      <section className={styles.movies}>
        <h1 className={styles.main_header}>Trending now</h1>
      </section>
      <Suspense fallback={<div>Loading...</div>}>
        <AsyncMoviesList {...moviesListProps} />
      </Suspense>
    </>
  );
}
