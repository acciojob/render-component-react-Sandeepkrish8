import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <p>I am learning React. My life is getting better.</p>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
