import React from "react";
import ReactDOM from "react-dom/client";

// Global CSS
import "./global.css";

// Theme
import ThemeContextProvider from "./hooks/useTheme";

// App Page
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);
