import React from "react";

// Child component
function Child({ onChange }) {
  // Calls the parent's onChange whenever input changes
  return (
    <input
      type="text"
      placeholder="Type something..."
      onChange={(lol) => onChange(lol.target.value)}
    />
  );
}

// Parent component
function Parent() {
  const [text, setText] = React.useState(""); // State to hold input value

  return (
    <div>
      {/* Passing setText to child so child can update parent's state */}
      <Child onChange={setText} />
      <p>You typed: {text}</p>
    </div>
  );
}

export default Parent;
