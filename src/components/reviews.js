export default function Reviews({ reviews, history }) {
  return (
    <ul>
      {!!reviews && reviews.length > 0 ? (
        reviews.map((review, i) => <li key={i}>{review.author}</li>)
      ) : (
        <li>Reviews not found</li>
      )}
    </ul>
  );
}
