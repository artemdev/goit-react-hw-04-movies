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

export default function MovieDetailsPage() {
  const { url, params } = useRouteMatch();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState(0);
  const [cast, setCast] = useState(0);
  const id = params.movieId;
  useEffect(() => {
    getMovieDetails(id).then(setMovie).catch(console.log);
  }, [id]);

  useEffect(() => {
    getMovieReviews(id).then(setReviews).catch(console.log);
  }, [id]);

  useEffect(() => {
    getMovieCredits(id).then(setCast).catch(console.log);
  }, [id]);

  return (
    <>
      <Navbar />
      <h1>{movie && movie.original_title}</h1>
      <Link to={`${url}/cast`}>Cast</Link>
      <Link to={`${url}/reviews`}>Reviews</Link>
      <Route path="/movies/:movieId/cast" exact>
        <Cast cast={cast} />
      </Route>

      <Route path="/movies/:movieId/reviews" exact>
        <Reviews reviews={reviews} />
      </Route>
    </>
  );
}
