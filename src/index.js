import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./Component/CSS/style.css";
import "./Component/CSS/login.css"
import "./Component/CSS/Home.css"
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Component/redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
