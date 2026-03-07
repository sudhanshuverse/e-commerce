// ==========================================
// Category.jsx - Shop by Categories Section
// Displays image-based category cards on homepage
// and can also be used as a controlled filter on
// the Products page. Clicking a card filters
// products by category and optionally navigates.
// ==========================================

import { useContext } from "react";
import { StoreContext } from "../Context/StoreContext"; // Global category state
import { useNavigate } from "react-router-dom"; // Programmatic navigation
import { AllProducts } from "../assets/assets"; // All products for category images

const Category = ({
  navigateOnClick = false, // If true, navigates to /products on click
  selectedCategories: outerSelected, // Controlled mode: external selected state
  setSelectedCategories: outerSetSelected, // Controlled mode: external setter
}) => {
  const navigate = useNavigate();
  const { selectedCategory, setSelectedCategory, filterByCategory } =
    useContext(StoreContext);

  // Category display data - maps internal names to display labels
  const categoryData = [
    { name: "Fashion", label: "Beauty Picks" },
    { name: "Electronics", label: "Computer & Accessories" },
    { name: "Sports", label: "Video Games" },
    { name: "Home", label: "Home & Living" },
  ];

  // Get the first product image from a given category for the card background
  const getCategoryImage = (catName) => {
    const product = AllProducts.find((p) => p.category === catName);
    return product ? product.img : "";
  };

  // Determine if component is controlled externally or uses context state
  const isControlled =
    typeof outerSelected !== "undefined" &&
    typeof outerSetSelected === "function";
  const currentSelected = isControlled ? outerSelected : selectedCategory;

  return (
    <div>
      <h1 className="text-xl font-bold mb-6 mt-8">Shop by Categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categoryData.map((cat) => (
          <div
            key={cat.name}
            onClick={() => {
              const setSel = isControlled
                ? outerSetSelected
                : setSelectedCategory;
              setSel(cat.name);
              filterByCategory(cat.name);
              if (navigateOnClick) navigate("/products");
            }}
            className={`relative rounded-2xl overflow-hidden cursor-pointer group h-52 ${
              currentSelected === cat.name
                ? "ring-2 ring-black"
                : ""
            }`}
          >
            <img
              src={getCategoryImage(cat.name)}
              alt={cat.label}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <span className="absolute bottom-4 left-4 bg-white/90 text-gray-900 text-xs font-semibold px-4 py-1.5 rounded-full">
              {cat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
