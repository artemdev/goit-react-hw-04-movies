import castStyles from '../styles/cast.module.css';

export default function Cast({ cast }) {
  return (
    <ul className={castStyles.castList}>
      {cast && !!cast.length ? (
        cast.map((actor, i) => (
          <li className={castStyles.castItem} key={i}>
            {
              <img
                className={castStyles.castImage}
                width="40"
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/original/${actor.profile_path}`
                    : 'https://via.placeholder.com/150'
                }
                alt=""
              />
            }
            <p className={castStyles.castName}>{actor.name}</p>
          </li>
        ))
      ) : (
        <h5>Cast not found</h5>
      )}
    </ul>
  );
}
