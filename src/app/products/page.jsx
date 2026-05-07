
"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ProductWithNavbar = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    fetch("https://summer-essentials-store-delta.vercel.app/data.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);

        const cats = ["All", ...new Set(data.map((p) => p.category))];
        setCategories(cats);
      });
  }, []);

  const handleFilter = (category) => {
    setActiveCategory(category);

    if (category === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((p) => p.category === category)
      );
    }
  };

  return (
    <div>
      {/* NAVBAR */}
      <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <h1 className="text-2xl font-bold text-orange-500">
            ShopZone
          </h1>

          {/* MENU */}
          <div className="flex gap-3 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* PRODUCTS */}
      <div className="p-8 bg-gray-50 min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />

              <span className="text-orange-600 text-xs font-bold uppercase">
                {product.brand}
              </span>

              <h3 className="font-bold text-lg">
                {product.name}
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                {product.category}
              </p>

              <div className="flex justify-between items-center mt-4 gap-6">
                <span className="text-orange-600 font-bold text-xl">
                  ${product.price}
                </span>
                <div className="text-center mt-10">
                          <Link
                              href={`/details/${product.id}`}
                              onClick={() => toast.success("Opening product details...")}
                              className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-medium rounded-xl hover:opacity-90 transition"
                          >
                              View
                          </Link>
            </div>

              </div>
              
                  
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductWithNavbar;