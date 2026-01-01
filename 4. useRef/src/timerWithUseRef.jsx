import { useState, useRef } from "react";

export default function TimerWithRef() {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current) return; // prevent multiple timers
    timerRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setCount(0);
  };

  console.log("TimerWithRef rendered");

  return (
    <div style={{ border: "2px solid green", padding: "20px" }}>
      <h2 style={{ color: "green" }}>Timer With useRef (Safe)</h2>
      <p style={{ fontSize: "24px" }}>Count: {count}</p>
      <button onClick={startTimer} style={{ marginRight: "10px" }}>
        Start
      </button>
      <button onClick={stopTimer} style={{ marginRight: "10px" }}>
        Stop
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}
