import styles from '../styles/reviews.module.css';

export default function Reviews({ reviews, history }) {
  return (
    <ul className={styles.reviewsList}>
      {!!reviews && reviews.length > 0 ? (
        reviews.map((review, i) => (
          <li className={styles.reviewsItem} key={i}>
            <span className={styles.reviewsAuthor}> {review.author}</span>
            <p>{review.content.substring(0, 100)}</p>
          </li>
        ))
      ) : (
        <p className={styles.reviewsItem}>Reviews not found</p>
      )}
    </ul>
  );
}
