import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
  <App />
</ThemeProvider>

createRoot(document.getElementById("root")!).render(<App />);
