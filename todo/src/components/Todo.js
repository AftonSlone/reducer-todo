import React from "react";
import { toggleCompleted } from "../actions/TodoActions";

export default function Todo(props) {
  const { todo, dispatch } = props;
  const onClick = () => {
    dispatch(toggleCompleted(todo.id));
  };
  return (
    <div className={todo.completed ? "completed" : ""} onClick={onClick}>
      {todo.task}
    </div>
  );
}
