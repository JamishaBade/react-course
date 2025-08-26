import ClockHeading from "./component/heading";
import CurrentTime from "./component/currentTime";
import ClockSlogan from "./component/slogan";
import "./App.css";
function App() {
  return (
    <center>
      <ClockHeading />
      <ClockSlogan />
      <CurrentTime />
    </center>
  );
}

export default App;
