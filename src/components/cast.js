export default function Cast({ cast }) {
  return (
    <ul>{cast && cast.map((actor, i) => <li key={i}>{actor.name}</li>)}</ul>
  );
}
