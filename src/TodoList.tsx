import useTodoStore from "./components/useTodoStore";
import React from "react";

const TodoList = () => {
  const { todos, addTodo, removeTodo, toggleTodo } = useTodoStore();

  return (
    <div>
      <h2>Todos</h2>
      <ul>
        <input
          type="text"
          placeholder="Add a Todo"
          onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
            const value = event.currentTarget.value.trim();
            if (event.key === "Enter" && value) {
              addTodo(value);
              event.currentTarget.value = ""; // Limpa o campo após adicionar
            }
          }}
        />
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
