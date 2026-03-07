// ==========================================
// assets.js - Product Data Aggregator
// Imports all product arrays from category
// folders and combines them into AllProducts.
// Also exports category name constants.
// ==========================================

// Import product arrays from each category folder
import { AccessoriesProducts } from "./Products/Accessories";
import { ClothingProducts } from "./Products/Clothings";
import { ElectronicsProducts } from "./Products/Electronics";
import { HomeProducts } from "./Products/Home";
import { SportsProducts } from "./Products/Sports";
import { FashionProducts } from "./Products/Fashion";

// Category name constants for consistent referencing
export const categories = {
    All: "All",
    Accessories: "Accessories",
    Clothing: "Clothing",
    Fashion: "Fashion",
    Home: "Home",
    Sports: "Sports",
    Electronics: "Electronics",
}

// Combined array of ALL products across all categories
export const AllProducts = [
    ...AccessoriesProducts,
    ...ClothingProducts,
    ...ElectronicsProducts,
    ...HomeProducts,
    ...SportsProducts,
    ...FashionProducts,
];