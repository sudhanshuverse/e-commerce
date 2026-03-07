// ==========================================
// Home.jsx - Homepage
// Assembles all homepage sections in order:
// Hero → Info cards → Categories → Banners →
// Delivery banner → Last Viewed → Comfy Styles
// ==========================================

import React from "react";
import Hero from "../Components/Hero"; // Hero banner/carousel
import Category from "../Components/Category"; // Shop by categories
import TrendingProducts from "../Components/TrendingProducts"; // Last viewed product grids
import InfoSection from "../Components/InfoSection"; // Horizontal recommendation cards
import Banners from "../Components/Banners"; // Basics & Deals banners
import DeliveryBanner from "../Components/DeliveryBanner"; // Delivery promo section
import ComfyStyles from "../Components/ComfyStyles"; // Fashion promo cards

const Home = () => {
  return (
    <>
      <Hero /> {/* Main hero banner with product showcase */}
      <InfoSection /> {/* Quick-access info cards (recommendations, orders, deals) */}
      <Category navigateOnClick={true} /> {/* Category image cards - navigates to products on click */}
      <Banners /> {/* Shoorashop Basics & Deals & Promotion */}
      <DeliveryBanner /> {/* ShooraShop Delivers to You */}
      <TrendingProducts /> {/* Two rows of last viewed product cards */}
      <ComfyStyles /> {/* Comfy Styles fashion promo cards */}
    </>
  );
};

export default Home;
