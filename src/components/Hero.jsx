// ==========================================
// Hero.jsx - Hero Banner / Carousel Component
// Main landing section with product showcase,
// promotional text, product info card, and
// discount badge. Supports slide data for
// future carousel functionality.
// ==========================================

import React, { useState } from "react";
import { Link } from "react-router-dom"; // Navigation
import { FaStar, FaChevronRight } from "react-icons/fa"; // Star rating & arrow icons
import headphoneImg from "../assets/Images/hero.png"; // Hero product image (PNG with transparency)

// Slide data array - each object represents one carousel slide
const slides = [
  {
    heading: "SHOP COMPUTER\n& ACCESSORIES",
    description:
      "Shop Laptops desktops, Monitors , Laptops,pc gaming, hardrives and electronics accessories and more.",
    productLabel: "WIRELESS HEADPHONES",
    productName: "JBL T460BT Black Headphones",
    reviews: 1311,
    price: 125.0,
    discount: "40 %",
    image: headphoneImg,
  },
];

const Hero = () => {
  // Active slide index (for future carousel navigation)
  const [active] = useState(0);
  const slide = slides[active];

  return (
    <div className="relative bg-[#e8edf8] rounded-3xl mt-6 mb-8 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center min-h-[420px] lg:min-h-[480px]">
        {/* Left: Dots + Text */}
        <div className="flex items-center lg:w-[45%] px-8 lg:px-14 py-10 lg:py-0">
          {/* Dot indicators */}
          <div className="hidden lg:flex flex-col gap-4 mr-10">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block rounded-full transition ${
                  i === active
                    ? "w-3 h-3 bg-blue-500 ring-4 ring-blue-200"
                    : "w-2.5 h-2.5 bg-blue-300"
                }`}
              />
            ))}
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight whitespace-pre-line">
              {slide.heading}
            </h1>
            <p className="text-sm sm:text-base text-gray-600 mt-4 max-w-md leading-relaxed">
              {slide.description}
            </p>
            <Link to="/products">
              <button className="mt-6 px-6 py-2.5 border-2 border-gray-900 rounded-full text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition cursor-pointer">
                View more
              </button>
            </Link>
          </div>
        </div>

        {/* Middle: Product Card */}
        <div className="lg:w-[22%] flex justify-center px-4 pb-6 lg:pb-0">
          <div className="bg-white rounded-2xl p-4 shadow-sm w-full max-w-[220px]">
            <p className="text-[10px] font-bold text-gray-800 uppercase tracking-wider">
              {slide.productLabel}
            </p>
            <h3 className="text-sm font-bold text-gray-900 mt-1 leading-snug">
              {slide.productName}
            </h3>
            <div className="flex items-center gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-xs" />
              ))}
              <span className="text-xs text-gray-400 ml-1">
                {slide.reviews} Reviews
              </span>
            </div>
            <p className="text-lg font-bold text-gray-900 mt-2">
              $ {slide.price.toFixed(2)}
            </p>
            <Link
              to="/products"
              className="flex items-center gap-2 text-xs text-gray-600 mt-2 hover:text-black transition"
            >
              View More <span className="text-gray-400">———→</span>
            </Link>
          </div>
        </div>

        {/* Right: Hero Image + Badge */}
        <div className="lg:w-[33%] relative flex justify-center items-center py-6 lg:py-0">
          {/* Discount badge */}
          <div
            className="absolute top-4 right-6 lg:top-6 lg:right-10 bg-yellow-400 text-gray-900 font-bold text-xs w-14 h-14 rounded-full flex flex-col items-center justify-center z-10 shadow-md"
            style={{
              clipPath:
                "polygon(50% 0%, 61% 11%, 75% 3%, 78% 19%, 95% 21%, 88% 36%, 100% 50%, 88% 64%, 95% 79%, 78% 81%, 75% 97%, 61% 89%, 50% 100%, 39% 89%, 25% 97%, 22% 81%, 5% 79%, 12% 64%, 0% 50%, 12% 36%, 5% 21%, 22% 19%, 25% 3%, 39% 11%)",
            }}
          >
            <span className="text-sm leading-none">{slide.discount}</span>
            <span className="text-[10px] leading-none">OFF</span>
          </div>

          <img
            src={slide.image}
            alt={slide.productName}
            className="w-64 h-64 lg:w-96 lg:h-96 object-contain drop-shadow-2xl"
          />
        </div>

        {/* Right arrow */}
        <button className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition cursor-pointer">
          <FaChevronRight className="text-gray-600 text-sm" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
