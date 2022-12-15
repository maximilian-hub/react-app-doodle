import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const DATA = [
  { id: "todo-0", name: "learn valuable skills", completed: true },
  { id: "todo-1", name: "build projects", completed: true },
  { id: "todo-2", name: "get a job", completed: false },
  {
    id: "todo-3",
    name: "swear undying fealty to your new employer",
    completed: false,
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>
);
