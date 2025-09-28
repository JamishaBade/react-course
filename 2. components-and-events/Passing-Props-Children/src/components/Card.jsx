// Card.js
import React from "react";
function Card(props) {
  return <div className="border p-4 rounded shadow-md">{props.children}</div>;
}

export default Card;
