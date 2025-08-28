import { useState } from "react";

function LogicalAnd() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Using Logical AND Operator</h2>

      {/* button to toggle */}
      <button onClick={() => setShowMessage(!showMessage)}>
        {showMessage ? "Hide Message" : "Show Message"}
      </button>

      {/* Conditional rendering using && operatorr. So if showMessage is true then only the other argument is implemented */}
      {showMessage && (
        <p>This message appears only when showMessage is true!</p>
      )}
    </div>
  );
}

export default LogicalAnd;
