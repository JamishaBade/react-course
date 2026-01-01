import { useState } from "react";

export default function TimerWithoutRef() {
  const [count, setCount] = useState(0);

  // intentionally NOT using useRef
  // every click will start a new interval
  const startTimer = () => {
    setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  const stopAllTimers = () => {
    // Can't stop intervals easily because we didn't store the IDs
    alert("Cannot reliably stop timers! This is why useRef is needed.");
  };

  const resetTimer = () => {
    setCount(0);
  };

  console.log("TimerWithoutRef rendered");

  return (
    <div style={{ border: "2px solid red", padding: "20px" }}>
      <h2 style={{ color: "red" }}>Timer Without useRef (Buggy)</h2>
      <p style={{ fontSize: "24px" }}>Count: {count}</p>
      <button onClick={startTimer} style={{ marginRight: "10px" }}>
        Start (Each click adds new interval!)
      </button>
      <button onClick={stopAllTimers} style={{ marginRight: "10px" }}>
        Stop (Impossible!)
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}
