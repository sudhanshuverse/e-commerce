// ==========================================
// ProductCard.jsx - Reusable Product Card
// Displays a single product with image, name,
// star rating, review count, and price.
// Links to the product detail page on click.
// ==========================================

import React from "react";
import { Link } from "react-router-dom"; // Navigation to product detail
import { FaStar } from "react-icons/fa"; // Star rating icon

// Props: product - object with id, img, name, rating, price
const ProductCard = ({ product }) => {
  return (
    <Link key={product.id} to={`/products/${product.id}`}>
      {/* Card container with hover effects */}
      <div className="bg-[#f0f0f0] rounded-2xl p-3 hover:shadow-lg hover:scale-[1.02] transition duration-300 flex flex-col h-full">
        {/* Product image with white background */}
        <div className="bg-white rounded-xl overflow-hidden">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-44 object-cover"
          />
        </div>

        {/* Product details */}
        <div className="mt-3 px-1">
          {/* Product name - truncated if too long */}
          <h2 className="text-sm font-semibold text-gray-900 truncate">
            {product.name}
          </h2>

          {/* Star rating - filled based on product.rating */}
          <div className="flex items-center gap-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`text-xs ${i < Math.round(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
              />
            ))}
            <span className="text-xs text-gray-400 ml-1">
              {131} Reviews
            </span>
          </div>

          {/* Price */}
          <p className="text-lg font-bold text-gray-900 mt-1">
            ${product.price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
