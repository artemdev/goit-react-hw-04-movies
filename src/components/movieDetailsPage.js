import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useRouteMatch, Route, Link } from 'react-router-dom';
import {
  getMovieDetails,
  getMovieReviews,
  getMovieCredits,
} from '../api/fetchMovies';
import Navbar from './navbar';

import movieStyles from '../styles/movie.module.css';
const AsyncCast = lazy(() => import('./cast'));
const AsyncReviews = lazy(() => import('./reviews'));

export default function MovieDetailsPage({ history }) {
  const { url, params } = useRouteMatch();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState(0);
  const [cast, setCast] = useState(0);
  const id = params.movieId;

  const goBack = () => {
    history.push(history.location.state.from);
  };

  useEffect(() => {
    getMovieDetails(id).then(setMovie).catch(console.log);
    getMovieCredits(id).then(setCast).catch(console.log);
    getMovieReviews(id).then(setReviews).catch(console.log);
  }, [id]);

  const reviewsProps = {
    reviews: reviews,
    history: history,
  };
  const castProps = {
    cast: cast,
    history: history,
  };
  return (
    <>
      <Navbar />

      <button
        className={movieStyles.goBackButton}
        type="submit"
        onClick={goBack}
      >
        Go back
      </button>

      <h1 className={movieStyles.title}>
        {movie && `${movie.original_title} (${movie.release_date}) `}
      </h1>
      <section className={movieStyles.movieContainer}>
        <img
          className={movieStyles.cover}
          width="200"
          src={
            movie && 'https://image.tmdb.org/t/p/original/' + movie.poster_path
          }
          alt=""
        />
        <section className={movieStyles.infoContainer}>
          <h2 className={movieStyles.subTitle}>
            {movie &&
              `Avarage vote (${movie.vote_average} from ${movie.vote_count} votes) `}
          </h2>

          <h2 className={movieStyles.subTitle}>Overview</h2>
          <p className={movieStyles.description}>{movie && movie.overview}</p>
          <h2 className={movieStyles.subTitle}>Genres</h2>

          <ul className={movieStyles.genres}>
            {movie &&
              movie.genres &&
              movie.genres.map((genre, i) => (
                <li className={movieStyles.genresItem} key={i}>
                  {genre.name}
                </li>
              ))}
          </ul>
        </section>
      </section>

      <ul className={movieStyles.bottomList}>
        <li className={movieStyles.bottomItem}>
          <Link
            to={{
              pathname: `${url}/cast`,
              state: { from: '/movies' },
            }}
          >
            Cast
          </Link>
        </li>
        <li className={movieStyles.bottomItem}>
          <Link
            to={{
              pathname: `${url}/reviews`,
              state: { from: '/movies' },
            }}
          >
            Reviews
          </Link>
        </li>
      </ul>

      <Route path="/movies/:movieId/cast" exact>
        <Suspense fallback={<div>Loading...</div>}>
          <AsyncCast {...castProps} />
        </Suspense>
      </Route>

      <Route path="/movies/:movieId/reviews" exact>
        <Suspense fallback={<div>Loading...</div>}>
          <AsyncReviews {...reviewsProps} />
        </Suspense>
      </Route>
    </>
  );
}
