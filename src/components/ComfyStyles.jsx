// ==========================================
// ComfyStyles.jsx - Fashion Promo Cards
// Two side-by-side promotional cards featuring
// fashion categories (Handbags & Watches) with
// product images and "see more" CTAs.
// ==========================================

import { Link } from "react-router-dom"; // Navigation links
import { FaArrowRight } from "react-icons/fa"; // Arrow icon for CTA
import girlImg from "../assets/Images/gir.png";
import manImg from "../assets/Images/man.png";
import handbagImg from "../assets/Images/handbag.webp";
import watchImg from "../assets/Images/watch.webp";

const ComfyStyles = () => {
  const promoCards = [
    {
      title: "Comfy Styles for Her",
      description:
        "Shop shoorashop Fashion including clothing shoes, jwelly, watches,page and more",
      highlightTitle: "Top Handbags",
      highlightText: "Big save 30% off",
      accent: "bg-[#ead7d7]",
      modelImage: girlImg,
      modelAlt: "Woman carrying shopping bags",
      productImage: handbagImg,
      productAlt: "Handbag collection",
      productImageClass: "w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40",
      modelImageClass:
        "w-44 sm:w-52 md:w-56 lg:w-60 xl:w-64 2xl:w-72 object-contain object-bottom drop-shadow-[0_18px_40px_rgba(0,0,0,0.14)]",
      modelWrapClass:
        "w-full flex justify-center md:justify-end items-end mt-2 md:mt-0 md:-mb-2 lg:-mb-4",
    },
    {
      title: "Comfy Styles for Her",
      description:
        "Shop shoorashop Fashion including clothing shoes, jwelly, watches,page and more",
      highlightTitle: "Top Watches",
      highlightText: "Big save 30% off",
      accent: "bg-[#e2e4ef]",
      modelImage: manImg,
      modelAlt: "Man holding shopping bags",
      productImage: watchImg,
      productAlt: "Green smart watch",
      productImageClass: "w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36",
      modelImageClass:
        "w-44 sm:w-52 md:w-56 lg:w-60 xl:w-64 2xl:w-72 object-contain object-bottom drop-shadow-[0_18px_40px_rgba(0,0,0,0.14)]",
      modelWrapClass:
        "w-full flex justify-center md:justify-end items-end mt-2 md:mt-0 md:-mb-2 lg:-mb-4",
    },
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 lg:gap-6 mt-10 mb-10 ">
      {promoCards.map((card) => (
        <div
          key={card.highlightTitle}
          className={`${card.accent} relative rounded-4xl overflow-hidden min-h-104 sm:min-h-112 lg:min-h-120`}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.45),transparent_38%)]" />
          <div className="relative h-full grid grid-cols-1 md:grid-cols-[minmax(0,1.1fr)_minmax(220px,0.9fr)] items-end gap-6 md:gap-2 px-6 sm:px-8 lg:px-10 pt-8 sm:pt-10">
            <div className="flex flex-col h-full justify-between pb-6 sm:pb-8 z-10 order-2 md:order-1">
              <div className="w-full">
                <h3 className="text-[2rem] sm:text-[2.35rem] lg:text-[2.7rem] font-semibold tracking-[-0.03em] leading-[0.95] text-black">
                  {card.title}
                </h3>
                <p className="mt-5 w-full text-base sm:text-lg lg:text-[1.15rem] leading-[1.08] text-black/75 max-w-md">
                  {card.description}
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-4 text-xl sm:text-2xl lg:text-[1.9rem] font-normal text-black mt-6 sm:mt-7 hover:text-black/70 transition"
                >
                  <span>see more</span>
                  <span className="inline-flex items-center justify-center text-lg sm:text-xl lg:text-2xl text-black/55">
                    <FaArrowRight />
                  </span>
                </Link>
              </div>

              <div className="flex items-end gap-3 sm:gap-4 lg:gap-5 mt-8 sm:mt-10">
                <img
                  src={card.productImage}
                  alt={card.productAlt}
                  className={`${card.productImageClass} object-contain shrink-0`}
                />
                <div className="pb-1 sm:pb-2 min-w-0">
                  <p className="text-lg sm:text-xl lg:text-2xl font-medium leading-tight text-black">
                    {card.highlightTitle}
                  </p>
                  <p className="mt-1.5 sm:mt-2 text-lg sm:text-xl lg:text-2xl leading-tight text-black/80">
                    {card.highlightText}
                  </p>
                </div>
              </div>
            </div>

            <div className={`${card.modelWrapClass} h-full order-1 md:order-2`}>
              <img
                src={card.modelImage}
                alt={card.modelAlt}
                className={card.modelImageClass}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComfyStyles;
