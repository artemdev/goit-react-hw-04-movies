import { useEffect, useState } from 'react';
import { useRouteMatch, Route, Link } from 'react-router-dom';
import {
  getMovieDetails,
  getMovieReviews,
  getMovieCredits,
} from '../api/fetchMovies';
import Navbar from './navbar';
import Cast from './cast';
import Reviews from './reviews';

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
      <button type="submit" onClick={goBack}>
        {' '}
        Go back
      </button>
      <h1>{movie && `${movie.original_title} (${movie.release_date}) `}</h1>

      <h2>
        {movie &&
          `Avarage vote (${movie.vote_average} from ${movie.vote_count} votes) `}
      </h2>
      <img
        width="200"
        src={
          movie && 'https://image.tmdb.org/t/p/original/' + movie.poster_path
        }
        alt=""
      />
      <h2>Overview</h2>

      {movie && movie.overview}
      <h2>Genres</h2>

      <ul>
        {movie &&
          movie.genres &&
          movie.genres.map((genre, i) => <li key={i}>{genre.name}</li>)}
      </ul>

      <Link
        to={{
          pathname: `${url}/cast`,
          state: { from: '/movies' },
        }}
      >
        Cast
      </Link>

      <Link
        to={{
          pathname: `${url}/reviews`,
          state: { from: '/movies' },
        }}
      >
        Reviews
      </Link>

      <Route path="/movies/:movieId/cast" exact>
        <Cast {...castProps} />
      </Route>

      <Route path="/movies/:movieId/reviews" exact>
        <Reviews {...reviewsProps} />
      </Route>
    </>
  );
}
