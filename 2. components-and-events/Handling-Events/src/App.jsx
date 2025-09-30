import React, { useState } from "react";
import Card from "./components/Card";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  const [name, setName] = useState("");

  const handleCardClick = () => {
    alert("You clicked the card!");
  };

  const handleButtonClick = () => {
    alert(`Hello, ${name || "stranger"}!`);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <Card title="My Card" onClick={handleCardClick}>
        <p>This is content inside the card. Click the card to see an alert.</p>
      </Card>

      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type your name"
      />

      <div className="mt-4">
        <Button onClick={handleButtonClick} label="Greet Me" />
      </div>
    </div>
  );
}

export default App;
