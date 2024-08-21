import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/Store.js";
import TodoApp from "./components/Todocomponents.js";
function App()
{
  return(
    ReactDOM.render(
      <Provider store={store}>
        <TodoApp />
      </Provider>,
      document.getElementById("root")
  )
)
}
export default App;
