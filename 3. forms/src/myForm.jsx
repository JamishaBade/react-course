import React, { useState } from "react";

function MyForm() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    console.log("Form submitted with:", inputValue);
    console.log("Happy New Year");
    // You can add further processing here, like sending data to an API
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Your Input:
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // helps to track the key stroke in the placeholder
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
