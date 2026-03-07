// ==========================================
// main.jsx - Application Entry Point
// Mounts the React app to the DOM with providers
// ==========================================

import { createRoot } from "react-dom/client"; // React 18+ root API
import { BrowserRouter } from "react-router"; // Enables client-side routing
import App from "./App.jsx"; // Root application component
import StoreContextProvider from "./Context/StoreContext.jsx"; // Global state provider (cart, products, etc.)

// Render app wrapped in BrowserRouter (routing) and StoreContextProvider (global state)
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>,
);
