import styles from "./MovieCard.module.css";

function MovieCard({ title, year, image }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.year}>{year}</p>
    </div>
  );
}

export default MovieCard;
