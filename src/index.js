import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = 0;

const reduce = (state = initialState, action) => {
  switch (action.type) {
    case "plus":
      return state + action.payload;
    case "minus":
      return state > 0 ? state - 1 : state;
    case "reset":
      return 0;
  }
  return state;
};

const store = createStore(reduce);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
