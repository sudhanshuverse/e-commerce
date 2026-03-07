// ==========================================
// TrendingProducts.jsx - Last Viewed Products
// Displays two rows of 4 product cards each,
// showing recently viewed / recommended items.
// Uses ProductCard for consistent card styling.
// ==========================================

import ProductCard from "./ProductCard"; // Reusable product card component
import { AllProducts } from "../assets/assets"; // Full product catalog

const TrendingProducts = () => {
  // Get first 8 products to display in two rows
  const lastViewed = AllProducts.slice(0, 8);

  return (
    <div className="mt-10">
      {/* First row - products 1-4 */}
      <h2 className="text-lg font-bold mb-4">Last Viewed</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {lastViewed.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Second row - products 5-8 */}
      <h2 className="text-lg font-bold mb-4 mt-10">Last Viewed</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {lastViewed.slice(4, 8).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
