// ==========================================
// App.jsx - Root Application Component
// Main layout wrapper with routing configuration
// ==========================================

import "./App.css"; // Global styles & Tailwind imports
import Navbar from "./Components/Navbar"; // Top navigation bar
import Cart from "./Pages/Cart"; // Shopping cart page
import Home from "./Pages/Home"; // Homepage
import { Routes, Route } from "react-router"; // Client-side routing
import ProductDetail from "./Pages/ProductDetail"; // Single product view
import Footer from "./Components/Footer"; // Site footer
import Products from "./Pages/Products"; // Products listing page
import About from "./Pages/About"; // About us page
import SignUp from "./Pages/SignUp"; // User registration page
import SignIn from "./Pages/SignIn"; // User login page

function App() {
  return (
    <>
      {/* Navbar stays outside .app so it spans full width */}
      <Navbar />

      {/* Main content wrapper - constrained width with auto margins */}
      <div className="app">
        {/* Route definitions for all pages */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Homepage */}
          <Route path="/Cart" element={<Cart />} /> {/* Cart page */}
          <Route path="/products" element={<Products />} /> {/* All products */}
          <Route path="/products/:id" element={<ProductDetail />} /> {/* Product detail by ID */}
          <Route path="/sign-in" element={<SignIn />} /> {/* Login */}
          <Route path="/sign-up" element={<SignUp />} /> {/* Register */}
          <Route path="/about" element={<About />} /> {/* About page */}
        </Routes>

        {/* Footer appears on every page */}
        <Footer />
      </div>
    </>
  );
}

export default App;
