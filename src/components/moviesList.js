import shortid from 'shortid';
import { Link } from 'react-router-dom';

export default function MoviesList({ movies, styles }) {
  return (
    <ul className={styles.moviesList}>
      {movies && !!movies.length ? (
        movies.map(movie => (
          <li className={styles.movies__itemWrap} key={shortid.generate()}>
            <Link
              to={{
                pathname: `movies/${movie.id}`,
                state: { from: '/' },
              }}
              className={styles.movies__itemLink}
            >
              {movie.original_name || movie.original_title}
            </Link>
          </li>
        ))
      ) : (
        <p className={styles.movies__itemLink}>{movies.length} movies found</p>
      )}
    </ul>
  );
}
