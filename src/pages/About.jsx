// ==========================================
// About.jsx - About Us Page
// Company information including mission, vision,
// security info, product offerings, and USPs.
// ==========================================

import React from "react";

const About = () => {
  return (
    <div className="bg-white">
      {/* Page header with title and intro text */}
      <header>
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            About Us
          </h1>
          <p className="text-gray-700 max-w-6xl text-lg leading-relaxed text-justify">
            Welcome to ShooraShop — your trusted online shopping destination for
            everything you need, all in one place. We are a multi-category
            e-commerce platform offering a wide range of products including
            fashion, electronics, home essentials, accessories, and much more.
            Our goal is simple: to make online shopping easy, affordable, and
            reliable for everyone.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-[#f8f8f8] rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-3">🚀 Our Mission</h2>
            <p className="text-gray-700 mb-6">
              At ShooraShop, our mission is to provide customers with
              high-quality products at competitive prices while ensuring a
              smooth and secure shopping experience.
            </p>

            <h3 className="text-xl font-semibold mb-2">🌍 Our Vision</h3>
            <p className="text-gray-700 mb-6">
              To become a trusted and customer-loved online marketplace by
              delivering convenience, quality, and value — all in one place.
            </p>

            <h3 className="text-xl font-semibold mb-2">
              💳 Safe & Secure Shopping
            </h3>
            <p className="text-gray-700">
              We prioritize your safety. Our website uses secure payment
              gateways and encrypted transactions to ensure your information is
              always protected.
            </p>
          </section>

          <aside className="space-y-6">
            <div className="bg-[#f8f8f8] rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-bold mb-3">🛒 What We Offer</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Latest Fashion & Accessories</li>
                <li>Electronics & Gadgets</li>
                <li>Home & Living Products</li>
                <li>Daily Essentials</li>
                <li>Trending & Featured Items</li>
              </ul>
            </div>

            <div className="bg-[#f8f8f8] rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-bold mb-3">🌟 Why Choose Us?</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✔ Wide range of categories</li>
                <li>✔ Affordable pricing</li>
                <li>✔ Easy navigation and smooth checkout</li>
                <li>✔ Fast delivery</li>
                <li>✔ Responsive customer support</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default About;
