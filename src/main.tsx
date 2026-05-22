import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// 1. Load Tailwind Base first
import "./styles/globals.css"; 

// 2. Load your Theme variables second
import "./styles/default_shadcn_theme.css";

// 3. Load other custom styles last
import "./styles/theme.css"; 
import "./styles/fonts.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)