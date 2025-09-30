import React from "react";

function Button({ onClick, label }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-green-500 text-white rounded"
    >
      {label}
    </button>
  );
}

export default Button;
