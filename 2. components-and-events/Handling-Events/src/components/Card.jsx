import React from "react";
import styles from "./Card.module.css";

function Card({ title, children, onClick }) {
  return (
    <div
      className={styles.Card}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}

export default Card;
