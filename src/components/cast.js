export default function Cast({ cast }) {
  return (
    <ul>
      {cast && !!cast.length ? (
        cast.map((actor, i) => (
          <li key={i}>
            {
              <img
                width="40"
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/original/${actor.profile_path}`
                    : 'https://via.placeholder.com/150'
                }
                alt=""
              />
            }
            {actor.name}
          </li>
        ))
      ) : (
        <h5>Cast not found</h5>
      )}
    </ul>
  );
}
