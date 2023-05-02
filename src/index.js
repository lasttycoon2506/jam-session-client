import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./state";

// Redux setup
const store = configureStore({
  reducer: rootReducer,
});

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
