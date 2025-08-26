import Button from "./Button.jsx";
import TextBox from "./textBox.jsx";
import Introduction from "./introduction.jsx";
import Hello from "./Hello.jsx";
function App() {
  return (
    <div>
      <h1> Hello world</h1>
      <p> Kids section: </p>
      <Button></Button>
      <TextBox />
      <Introduction />
      <p> Adult Section: </p>
      <TextBox />
      <Hello />
    </div>
  );
}
export default App;
