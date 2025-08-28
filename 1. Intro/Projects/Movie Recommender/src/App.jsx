import { useState } from "react";
import MovieCard from "./MovieCard";
import data from "./data";
import styles from "./App.module.css";

function App() {
  const [showMovies, setShowMovies] = useState(true); // toggle state

  const Data = showMovies ? data.movies : data.books;

  return (
    <div className={styles.container}>
      {/* Toggle Buttons */}
      <div className={styles.toggleButtons}>
        <button
          className={`btn ${
            showMovies ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setShowMovies(true)}
        >
          Movies
        </button>
        <button
          className={`btn ${
            !showMovies ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setShowMovies(false)}
        >
          Books
        </button>
      </div>

      {/* Title */}
      <h1 className={styles.title}>
        {showMovies ? "Movie Recommendations" : "Book Recommendations"}
      </h1>

      {/* Cards */}
      <div className={styles.cardGrid}>
        {Data.map((item, index) => (
          <MovieCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default App;
