import React from "react"; /* не забывать после npx react-app писать npm i внутри проекта */
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/app";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
