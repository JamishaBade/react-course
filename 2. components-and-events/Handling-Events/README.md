# Handling events

Applications-> Virtual DOM -> DOM

react introduces the virtual DOM which helps to maintain a synthetic event system for performance and cross-browser consistency.

# Syntax vs DOM Events

React uses camelCase event names instead of lowercase:
<button onClick={handleClick}>Click Me</button>
vs.
<button onclick="handleClick()">Click Me</button>

In React, you pass a function reference instead of a string of code.
