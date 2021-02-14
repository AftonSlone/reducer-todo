import React, { useReducer } from "react";
import reducer from "../reducers/TodoReducer";
import { setInput, setTodo, clearCompleted } from "../actions/TodoActions";

export default function TodoForm(props) {
  const initialInput = {
    input: "",
  };
  const [state, dispatch] = useReducer(reducer, initialInput);

  const onChange = (e) => {
    dispatch(setInput(e.target.value));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      task: state.input,
      completed: false,
    };
    props.addTodo(setTodo(newTodo));
    dispatch(setInput(""));
  };

  const onClear = (e) => {
    e.preventDefault();
    props.addTodo(clearCompleted());
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="input"
          onChange={onChange}
          value={state.input}
        />
        <button onClick={onSubmit}>Add Todo</button>
        <button onClick={onClear}>Clear Completed</button>
      </form>
    </div>
  );
}
