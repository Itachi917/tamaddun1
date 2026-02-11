import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from "@/components/theme-provider" 
import { LanguageProvider } from "@/components/language-provider"

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <App />
  </ThemeProvider>
);

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="dark">
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </ThemeProvider>
);
