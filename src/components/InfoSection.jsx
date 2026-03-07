// ==========================================
// InfoSection.jsx - Horizontal Info Cards Bar
// Displays quick-access recommendation cards:
// User greeting, Orders, Electronics deals,
// Home & Kitchen deals. Appears below the hero.
// ==========================================

import { FaRegUser } from "react-icons/fa"; // User icon
import { FaBoxOpen } from "react-icons/fa"; // Orders/box icon
import { FaHeadphones } from "react-icons/fa"; // Electronics icon
import { MdKitchen } from "react-icons/md"; // Kitchen icon

const HomeInfoSection = () => {
  // Card data - each card shows an icon, title, and subtitle
  const cards = [
    {
      icon: <FaRegUser className="text-2xl" />,
      title: "Hi User",
      subtitle: "top Recommendations for you 🔥",
      bg: "bg-[#f0f0f0]",
    },
    {
      icon: <FaBoxOpen className="text-2xl text-amber-600" />,
      title: "Your Orders",
      subtitle: "View your orders",
      bg: "bg-[#f0f0f0]",
      underline: true,
    },
    {
      icon: <FaHeadphones className="text-2xl" />,
      title: "Electronics",
      subtitle: "Big Save 20%",
      bg: "bg-[#f0f0f0]",
    },
    {
      icon: <MdKitchen className="text-2xl" />,
      title: "Home & Kitchen",
      subtitle: "Big Save 20%",
      bg: "bg-[#f0f0f0]",
    },
  ];

  return (
    <section className="mt-8 mb-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${card.bg} rounded-full flex items-center gap-3 px-5 py-3 cursor-pointer hover:shadow-md transition`}
          >
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
              {card.icon}
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-sm text-gray-900 truncate">
                {card.title}
              </p>
              <p
                className={`text-xs text-gray-500 truncate ${card.underline ? "underline decoration-orange-400 decoration-2 underline-offset-2" : ""}`}
              >
                {card.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeInfoSection;
