import TimerWithRef from "./TimerWithUseRef";
import TimerWithoutRef from "./TimerWithoutUseRef";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Timers Demo: useRef vs useState</h1>
      <div style={{ marginBottom: "40px" }}>
        <TimerWithRef />
      </div>
      <div>
        <TimerWithoutRef />
      </div>
    </div>
  );
}

export default App;
