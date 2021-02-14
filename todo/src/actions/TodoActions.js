export const SET_TODO = "SET_TODO";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const SET_INPUT = "SET_INPUT";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";

export const setTodo = (newTodo) => {
  return { type: SET_TODO, payload: newTodo };
};

export const toggleCompleted = (id) => {
  return { type: TOGGLE_COMPLETED, payload: id };
};

export const setInput = (input) => {
  return { type: SET_INPUT, payload: input };
};

export const clearCompleted = () => {
  return { type: CLEAR_COMPLETED };
};
