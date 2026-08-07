import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// Self-hosted fonts (latin subsets only) — no render-blocking third-party
// stylesheet, no cross-origin font downloads. Same look as Google Fonts.
// Only the weights actually used in the UI are loaded:
//   Inter: 400 (body) / 500 / 600 / 700 / 800 (headings & bold labels)
//   Playfair Display: 400 only (one serif quote on doctor pages)
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/inter/latin-700.css";
import "@fontsource/inter/latin-800.css";
import "@fontsource/playfair-display/latin-400.css";

import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Offline + repeat-visit performance: register the service worker in
// production only (dev HMR would otherwise fight the SW cache).
if (import.meta.env.PROD && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {
      /* SW is best-effort; never block the app on it */
    });
  });
}
