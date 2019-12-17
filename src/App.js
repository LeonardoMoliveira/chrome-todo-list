import React from "react";

import GlobalStyle from "./styles/global";

import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <TodoList />
      <GlobalStyle />
    </>
  );
}

export default App;
