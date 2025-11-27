import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ThemeContext from "./Context/ThemeContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <ThemeContext>
    <App />
  </ThemeContext>
);
