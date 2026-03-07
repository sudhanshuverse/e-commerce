// ==========================================
// StoreContext.jsx - Global State Management
// Provides app-wide state using React Context:
// - Product catalog and filtering
// - Shopping cart (persisted in localStorage)
// - Category selection
// ==========================================

import React, { createContext, useEffect, useState } from "react";
import { AllProducts } from "../assets/assets"; // Full product catalog

// Create the context object
// eslint-disable-next-line react-refresh/only-export-components
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  // Products state - filtered list displayed in the UI
  const [products, setProducts] = useState(AllProducts);

  // Currently selected category for filtering
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Cart state - object where keys are product IDs and values are quantities
  // Initialized from localStorage for persistence across page reloads
  const [cartItem, setCartItem] = useState(() => {
    try {
      const raw = localStorage.getItem("cart");
      return raw ? JSON.parse(raw) : {};
    } catch (err) {
      console.log(err);

      return {};
    }
  });

  // Sync cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cartItem));
    } catch (err) {
      console.log(err);

      // ignore storage errors
    }
  }, [cartItem]);

  // Add one unit of a product to the cart
  const addCartItem = (itemId) => {
    const key = String(itemId);
    setCartItem((prev) => ({
      ...prev,
      [key]: prev[key] ? prev[key] + 1 : 1,
    }));
  };

  // Remove one unit of a product from the cart (delete entry if qty reaches 0)
  const removeCartItem = (itemId) => {
    const key = String(itemId);
    setCartItem((prev) => {
      const current = prev[key] || 0;
      if (current <= 1) {
        const updated = { ...prev };
        delete updated[key];
        return updated;
      }
      return { ...prev, [key]: current - 1 };
    });
  };

  // Empty the entire cart
  const clearCart = () => setCartItem({});

  // Calculate total price of all items in the cart
  const getTotalAmount = () => {
    let total = 0;
    Object.keys(cartItem).forEach((key) => {
      const product = AllProducts.find((p) => p.id === Number(key));
      if (product) total += Number(product.price) * cartItem[key];
    });
    return total;
  };

  // Get total number of items in cart (sum of all quantities)
  const getTotalCartItems = () => {
    return Object.values(cartItem).reduce((sum, q) => sum + q, 0);
  };

  // Get array of { product, quantity } objects for cart display
  const getCartProducts = () => {
    return Object.keys(cartItem).map((key) => {
      const product = AllProducts.find((p) => p.id === Number(key));
      return { product, quantity: cartItem[key] };
    });
  };

  // Find a single product by its ID
  const getProductById = (id) => {
    const numId = Number(id);
    return products.find((product) => product.id === numId);
  };

  // Filter products by category and update state
  const filterByCategory = (category) => {
    const cat = category || "All";
    setSelectedCategory(cat);
    if (cat === "All") {
      setProducts(AllProducts);
      return;
    }
    const filtered = AllProducts.filter((product) => product.category === cat);
    setProducts(filtered);
  };

  const contextValue = {
    products,
    setProducts,
    selectedCategory,
    setSelectedCategory,
    cartItem,
    addCartItem,
    removeCartItem,
    clearCart,
    getTotalAmount,
    getTotalCartItems,
    getCartProducts,
    getProductById,
    filterByCategory,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
