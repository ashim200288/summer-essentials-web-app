"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find(
          (p) => String(p.id) === String(id)
        );
        setProduct(found);
      });
  }, [id]);

  // ✅ ADD TO CART WITH TOAST
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...cart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    toast.success("Added to cart 🛒", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  if (!product) {
    return (
      <div className="p-10 text-center text-gray-500">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-8">
      <div className="flex gap-8 items-center">
        
        {/* LEFT IMAGE */}
        <img
          src={product.image}
          alt={product.name}
          className="w-60 h-60 object-cover rounded-lg shadow-md"
        />

        {/* RIGHT DETAILS */}
        <div>
          <h1 className="text-3xl font-bold">
            {product.name}
          </h1>

          <p className="text-orange-500 mt-2 font-medium">
            {product.brand}
          </p>

          <p className="mt-1 text-gray-600">
            {product.category}
          </p>

          <p className="mt-2">⭐ {product.rating}</p>

          <p className="mt-3 text-gray-600 leading-relaxed">
            {product.description}
          </p>

          <p className="text-2xl font-bold text-orange-600 mt-4">
            ${product.price}
          </p>

          {/* BUTTON */}
          <button
            onClick={handleAddToCart}
            className="mt-6 w-full md:w-auto px-6 py-3 rounded-xl text-white font-medium bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-90 transition"
          >
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductDetailPage;