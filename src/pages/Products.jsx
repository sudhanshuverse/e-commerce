// ==========================================
// Products.jsx - Products Listing Page
// Displays all products with search bar,
// category filter pills, and product grid.
// Supports debounced search for performance.
// ==========================================

import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../Context/StoreContext"; // Global product state
import ProductCard from "../Components/ProductCard"; // Product card component

const Products = () => {
  // Get products and category filter functions from context
  const { products, selectedCategory, setSelectedCategory, filterByCategory } =
    useContext(StoreContext);

  // Search state
  const [searchItem, setSearchItem] = useState(""); // Raw input value
  const [debouncedSearch, setDebouncedSearch] = useState(""); // Debounced value

  // Available category filter options
  const categories = [
    "All",
    "Electronics",
    "Fashion",
    "Home",
    "Sports",
    "Accessories",
    "Clothing",
  ];

  // Debounce search input - waits 300ms after user stops typing
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchItem);
    }, 300);

    return () => clearTimeout(timer); // Cleanup on re-render
  }, [searchItem]);

  // Filter products by debounced search term (case-insensitive)
  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(debouncedSearch.toLowerCase()),
  );

  return (
    <div>
      <h1 className="lg:text-3xl text-2xl font-bold mb-3 pt-10 text-center">
        Our Premium Products
      </h1>

      <p className="mb-5 text-center text-sm text-gray-500">
        Browse our premium collection of products
      </p>

      <div className="text-center">
        <input
          type="text"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          placeholder="Search your favourite product"
          className="w-[80%] bg-[#f0f0f0] text-base p-4 rounded-xl outline-none border border-gray-200 focus:border-gray-400 transition"
        />
      </div>

      <div className="flex gap-3 flex-wrap mt-6 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              filterByCategory(cat);
            }}
            className={`px-5 py-2 rounded-full text-sm font-medium cursor-pointer transition ${
              selectedCategory === cat
                ? "bg-gray-900 text-white"
                : "bg-[#f0f0f0] text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 text-xl mt-10">
            No products found 😔
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
