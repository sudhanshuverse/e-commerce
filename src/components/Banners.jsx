// ==========================================
// Banners.jsx - Promotional Banner Cards
// Two side-by-side banners: "Shoorashop Basics"
// and "Deals & Promotion" with shop links.
// ==========================================

import { Link } from "react-router-dom"; // Navigation links
import { FaArrowRight } from "react-icons/fa"; // Arrow icon for CTA

const Banners = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      {/* Shoorashop Basics - Blue themed banner */}
      <div className="bg-[#d4e4f7] rounded-2xl p-6 flex items-center justify-between min-h-[140px]">
        <div>
          <h3 className="text-xl font-bold text-gray-900">
            Shoorashop Basics
          </h3>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm text-gray-700 mt-2 hover:text-black transition"
          >
            Shop now <FaArrowRight className="text-xs" />
          </Link>
        </div>
        <div className="text-5xl">🛍️</div>
      </div>

      {/* Deals & Promotion - Orange/peach themed banner */}
      <div className="bg-[#fce4d6] rounded-2xl p-6 flex items-center justify-between min-h-[140px]">
        <div>
          <h3 className="text-xl font-bold text-gray-900">
            Deals & Promotion
          </h3>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm text-gray-700 mt-2 hover:text-black transition"
          >
            Shop now <FaArrowRight className="text-xs" />
          </Link>
        </div>
        <div className="text-5xl">🎁</div>
      </div>
    </div>
  );
};

export default Banners;
