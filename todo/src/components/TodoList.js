import React, { useReducer } from "react";
import reducer from "../reducers/TodoReducer";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

export default function TodoList() {
  const initialState = {
    todos: [
      {
        task: "Java",
        id: 34,
        completed: false,
      },
    ],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {state.todos.map((todo) => {
        return <Todo todo={todo} key={todo.id} dispatch={dispatch} />;
      })}
      <TodoForm addTodo={dispatch} />
    </div>
  );
}
