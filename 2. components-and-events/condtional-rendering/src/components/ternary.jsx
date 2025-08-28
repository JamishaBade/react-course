import { useState } from "react";

function Ternary() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div>
      <h2> Using Ternary Operator </h2>

      {/* Conditional rendering using ternary */}
      <p>
        The current theme is: {isDarkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </p>

      <button onClick={() => setIsDarkMode(!isDarkMode)}>Toggle Theme</button>
    </div>
  );
}

export default Ternary;
