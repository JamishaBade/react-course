function AddTodo() {
  return (
    <div className="addTodoContainer">
      <div className="addTodoRow">
        <div className="addTodoInput">
          <input type="text" placeholder="Enter Here" />
        </div>
        <div className="addTodoDate">
          <input type="date" />
        </div>
        <div className="addTodoButton">
          <button type="button">Add</button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
