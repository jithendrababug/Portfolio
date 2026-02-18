import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // Tailwind styles
document.documentElement.classList.add("dark");


// ✅ Apply saved theme before React renders (prevents "flash" on load)
const savedTheme = localStorage.getItem("theme"); // "dark" | "light" | null
const prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const shouldUseDark = savedTheme
  ? savedTheme === "dark"
  : prefersDark;

document.documentElement.classList.toggle("dark", shouldUseDark);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);