// ==========================================
// Navbar.jsx - Top Navigation Bar Component
// Sticky header with logo, nav links, search,
// user icons, cart badge, and mobile menu
// ==========================================

import React, { useState, useEffect, useContext } from "react";
import { FaRegUser, FaRegHeart } from "react-icons/fa"; // User & wishlist icons
import { FaShoppingCart } from "react-icons/fa"; // Cart icon
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger & close icons
import { IoSearch } from "react-icons/io5"; // Search icon
import { Link } from "react-router-dom"; // Navigation links
import { StoreContext } from "../Context/StoreContext"; // Global store context

const Navbar = () => {
  // State: mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State: shadow effect on scroll
  const [scrolled, setScrolled] = useState(false);
  // Get total cart item count from global context
  const { getTotalCartItems } = useContext(StoreContext);

  // Add shadow to navbar when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300 bg-white ${scrolled ? "shadow-md" : ""}`}
    >
      <div className="flex justify-between items-center px-6 py-4 md:px-10 max-w-[1400px] mx-auto">
        {/* Logo */}
        <Link to={"/"}>
          <h2 className="text-xl md:text-2xl text-[var(--text-color)] font-bold">
            ShooraShop
          </h2>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex">
          <ul className="flex gap-6 text-sm text-gray-700 items-center">
            <Link to={"/"}>
              <li className="cursor-pointer hover:text-black transition flex items-center gap-1">
                <span className="text-xs">⊞</span> ALL
              </li>
            </Link>
            <Link to={"/products"}>
              <li className="cursor-pointer hover:text-black transition">
                Today&apos;s Days
              </li>
            </Link>
            <Link to={"/products"}>
              <li className="cursor-pointer hover:text-black transition">
                Gift Cards
              </li>
            </Link>
            <Link to={"/products"}>
              <li className="cursor-pointer hover:text-black transition">
                Riglatory & Gifting
              </li>
            </Link>
          </ul>
        </div>

        {/* Search Bar + Icons */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 w-48 lg:w-56">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm flex-1 text-gray-700"
            />
            <IoSearch className="text-gray-500" />
          </div>

          <Link to="/sign-in">
            <FaRegUser className="text-lg text-gray-700 cursor-pointer hover:text-black transition" />
          </Link>

          <FaRegHeart className="text-lg text-gray-700 cursor-pointer hover:text-black transition" />

          <div className="relative cursor-pointer">
            <Link to="/cart">
              <FaShoppingCart className="text-lg text-gray-700 hover:text-black transition" />
              {getTotalCartItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {getTotalCartItems()}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Icons & Hamburger */}
        <div className="md:hidden flex items-center gap-4">
          <div className="relative cursor-pointer">
            <Link to={"/cart"}>
              <FaShoppingCart className="text-xl text-gray-700" />
              {getTotalCartItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {getTotalCartItems()}
                </span>
              )}
            </Link>
          </div>
          <Link to="/sign-in">
            <FaRegUser className="text-xl text-gray-700" />
          </Link>
          <button
            onClick={toggleMenu}
            className="text-2xl cursor-pointer text-gray-700"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t mx-5 mt-1 p-4 rounded-b-2xl shadow-lg">
          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 mb-4">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm flex-1 text-gray-700"
            />
            <IoSearch className="text-gray-500" />
          </div>
          <ul className="flex flex-col gap-3 text-sm text-gray-700">
            <Link to={"/"} onClick={toggleMenu}>
              <li className="cursor-pointer py-2 border-b border-gray-100 hover:text-black">
                Home
              </li>
            </Link>
            <Link to={"/products"} onClick={toggleMenu}>
              <li className="cursor-pointer py-2 border-b border-gray-100 hover:text-black">
                Products
              </li>
            </Link>
            <Link to={"/products"} onClick={toggleMenu}>
              <li className="cursor-pointer py-2 border-b border-gray-100 hover:text-black">
                Gift Cards
              </li>
            </Link>
            <Link to={"/sign-in"} onClick={toggleMenu}>
              <li className="cursor-pointer py-2 hover:text-black">
                Sign In
              </li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
