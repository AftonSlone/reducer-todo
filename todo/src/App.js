import TodoList from "./components/TodoList";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


  body {width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #2d2d37;}

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  div,
  p,
  span {
    color: white;
    font-family: "Roboto", sans-serif;
  }

  h2 {
    text-align: left;
  }

  form {
    width: 50%;
    display: flex;
  }

  button {
    background-color: #e64944;
    border: 1px solid #e64944;
    color: white;
    font-size: 16px;
    padding: 6px 14px;
    margin: 5px;
  }

  .completed {
    text-decoration: line-through;
  }

  .main {
    width: 70%;
    margin: 0 auto;
  }


`;

function App() {
  return (
    <div className="main">
      <GlobalStyle />
      <h2>Todo List:</h2>
      <TodoList />
    </div>
  );
}

export default App;
