import {
  SET_TODO,
  TOGGLE_COMPLETED,
  SET_INPUT,
  CLEAR_COMPLETED,
} from "../actions/TodoActions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case TOGGLE_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, completed: !todo.completed };
          } else {
            return todo;
          }
        }),
      };
    case SET_INPUT:
      return { ...state, input: action.payload };
    case CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          return !todo.completed;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
