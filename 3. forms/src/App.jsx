import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AdvancedForm from "./advancedForm";
import MyForm from "./myForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Hello World</p>
      <MyForm />
      <AdvancedForm />
    </>
  );
}

export default App;
