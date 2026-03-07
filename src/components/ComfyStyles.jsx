// ==========================================
// ComfyStyles.jsx - Fashion Promo Cards
// Two side-by-side promotional cards featuring
// fashion categories (Handbags & Watches) with
// product images and "see more" CTAs.
// ==========================================

import { Link } from "react-router-dom"; // Navigation links
import { FaArrowRight } from "react-icons/fa"; // Arrow icon for CTA
import { AllProducts } from "../assets/assets"; // Product data for images

const ComfyStyles = () => {
  // Get first product image from Fashion and Accessories categories
  const fashionImg = AllProducts.find((p) => p.category === "Fashion")?.img;
  const accessoryImg = AllProducts.find((p) => p.category === "Accessories")?.img;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 mb-10">
      {/* Comfy Styles for Her */}
      <div className="bg-[#f3eded] rounded-2xl p-6 flex flex-col md:flex-row items-center gap-4 min-h-[200px]">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900">
            Comfy Styles for Her
          </h3>
          <p className="text-xs text-gray-600 mt-1 leading-relaxed">
            Shop shoorashop Fashion including clothing shoes, jwelly,
            watches, page and more
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm text-gray-700 mt-3 hover:text-black transition"
          >
            see more <FaArrowRight className="text-xs" />
          </Link>
          <div className="mt-4 bg-white/70 rounded-xl px-3 py-2 inline-block">
            <p className="text-sm font-bold">Top Handbags</p>
            <p className="text-xs text-gray-500">Big save 30% off</p>
          </div>
        </div>
        {fashionImg && (
          <img
            src={fashionImg}
            alt="Fashion"
            className="w-28 h-28 object-cover rounded-xl"
          />
        )}
      </div>

      {/* Comfy Styles for Him */}
      <div className="bg-[#f3eded] rounded-2xl p-6 flex flex-col md:flex-row items-center gap-4 min-h-[200px]">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900">
            Comfy Styles for Her
          </h3>
          <p className="text-xs text-gray-600 mt-1 leading-relaxed">
            Shop shoorashop Fashion including clothing shoes, jwelly,
            watches, page and more
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm text-gray-700 mt-3 hover:text-black transition"
          >
            see more <FaArrowRight className="text-xs" />
          </Link>
          <div className="mt-4 bg-white/70 rounded-xl px-3 py-2 inline-block">
            <p className="text-sm font-bold">Top Watches</p>
            <p className="text-xs text-gray-500">Big save 30% off</p>
          </div>
        </div>
        {accessoryImg && (
          <img
            src={accessoryImg}
            alt="Accessories"
            className="w-28 h-28 object-cover rounded-xl"
          />
        )}
      </div>
    </div>
  );
};

export default ComfyStyles;
