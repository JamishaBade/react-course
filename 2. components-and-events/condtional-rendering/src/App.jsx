import IfElse from "./components/if-else";
import LogicalAnd from "./components/logicalOperator";
import Ternary from "./components/ternary";
import "./App.css";

function App() {
  return (
    <div className="appContainer">
      <h1>Learning about Conditional Rendering</h1>
      <IfElse />
      <LogicalAnd />
      <Ternary />
    </div>
  );
}

export default App;
