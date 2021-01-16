export default function Reviews({ reviews }) {
  return (
    <ul>
      {!!reviews ? (
        reviews.map((review, i) => <li key={i}>{review.author}</li>)
      ) : (
        <li>Reviews not found</li>
      )}
    </ul>
  );
}
