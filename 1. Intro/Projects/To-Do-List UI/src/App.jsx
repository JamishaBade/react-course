import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Java DSA",
      dueDate: "9/10/2025",
    },
    {
      name: "Review calc",
      dueDate: "4/10/2025",
    },
    {
      name: "Robotics FRC",
      dueDate: "as soon as possible",
    },
    {
      name: " Chemistry homework",
      dueDate: "4/11/25",
    },
    {
      name: " Essay Writing",
      dueDate: "4/11/25",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
