// ==========================================
// DeliveryBanner.jsx - Delivery Promo Section
// Full-width banner promoting ShooraShop's
// delivery service with a CTA button.
// ==========================================

import { Link } from "react-router-dom"; // Navigation

const DeliveryBanner = () => {
  return (
    // Banner container with light gray background
    <div className="bg-[#f0f0f0] rounded-2xl mt-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
      {/* Left: Text content and CTA */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
          ShooraShop Delivers
          <br />
          to You
        </h2>
        <Link
          to="/products"
          className="inline-block mt-4 px-6 py-2 border-2 border-gray-900 rounded-full text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition"
        >
          Shop now
        </Link>
      </div>
      {/* Right: Decorative emoji icons */}
      <div className="mt-6 md:mt-0 text-7xl">📦🐶</div>
    </div>
  );
};

export default DeliveryBanner;
