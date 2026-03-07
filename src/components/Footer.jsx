// ==========================================
// Footer.jsx - Site Footer Component
// Contains brand info, shop links, company
// links, copyright notice, and social icons.
// Appears at the bottom of every page.
// ==========================================

import { FaFacebookSquare } from "react-icons/fa"; // Facebook icon
import { GrInstagram } from "react-icons/gr"; // Instagram icon
import { FaXTwitter } from "react-icons/fa6"; // X/Twitter icon
import { Link } from "react-router"; // Navigation links

const Footer = () => {
  return (
    <>
      {/* Top divider line */}
      <hr className="border-gray-200 mb-5 mt-15" />

      {/* Footer content: 3-column layout */}
      <div className="w-full flex justify-between gap-20 md:gap-10 mt-10 mb-10 flex-wrap pr-20">
        {/* Column 1: Brand info */}
        <div>
          <h1 className="text-xl font-bold mb-5">ShooraShop</h1>
          <p className="max-w-xl text-sm text-gray-600">
            ShooraShop is a modern multi-category e-commerce platform designed
            to make online shopping simple, affordable, and reliable.
          </p>
        </div>

        {/* Column 2: Shop navigation links */}
        <div>
          <h1 className="text-sm font-bold mb-5 uppercase tracking-wide">
            Shop
          </h1>
          <ul className="flex flex-col gap-2 text-sm text-gray-600">
            <Link to={"products"}>
              <li className="cursor-pointer w-40 hover:text-black transition">
                All Product
              </li>
            </Link>
            <li className="cursor-pointer w-40 hover:text-black transition">
              Electronics
            </li>
            <li className="cursor-pointer w-40 hover:text-black transition">
              Clothing
            </li>
            <li className="cursor-pointer w-40 hover:text-black transition">
              Accessories
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-sm font-bold mb-5 uppercase tracking-wide">
            Company
          </h1>
          <ul className="flex flex-col gap-2 text-sm text-gray-600">
            <Link to={"/about"}>
              <li className="cursor-pointer hover:text-black transition">
                About Us
              </li>
            </Link>
            <li className="cursor-pointer hover:text-black transition">
              Careers
            </li>
            <li className="cursor-pointer hover:text-black transition">
              Contact
            </li>
            <li className="cursor-pointer hover:text-black transition">
              Support
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-200 mb-5" />

      <div className="text-sm text-gray-500 text-center sm:flex justify-between items-center pb-10">
        &copy; {new Date().getFullYear()} ShooraShop. All rights reserved.
        <ul className="flex gap-5 text-xl justify-center mt-5 sm:mt-0">
          <li className="cursor-pointer hover:text-black transition text-gray-500">
            <FaFacebookSquare />
          </li>
          <li className="cursor-pointer hover:text-black transition text-gray-500">
            <GrInstagram />
          </li>
          <li className="cursor-pointer hover:text-black transition text-gray-500">
            <FaXTwitter />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
