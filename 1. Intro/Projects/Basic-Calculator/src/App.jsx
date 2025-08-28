import "./App.css";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Button from "./components/Button";
function App() {
  return (
    <div class="app-container">
      <Heading></Heading>
      <Input></Input>
      <div class="button-container">
        <Button></Button>
      </div>
    </div>
  );
}
export default App;
