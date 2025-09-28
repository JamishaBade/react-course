// Card.js
import React from "react";
import styles from "./Card.module.css";
function Card(props) {
  return (
    <div className={`${styles.Card}  border p-4 rounded shadow-md`}>
      {props.children}
    </div>
  );
}

export default Card;
