"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const TopGenerations = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((data) => setProducts(data.slice(0, 3)))
            .catch((err) => console.log(err));
    }, []);

    return (
        <section className="py-12 px-4 bg-gray-50">
            <h1 className="text-3xl font-bold text-center mb-10">
                Popular Products
            </h1>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
                    >
                        {/* IMAGE */}
                        <div className="h-64 w-full overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* CONTENT */}
                        <div className="p-5">
                            <p className="text-orange-500 text-sm font-medium">
                                {product.brand}
                            </p>

                            <h2 className="text-lg font-semibold mt-1">
                                {product.name}
                            </h2>

                            <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                                <span className="text-yellow-400 text-lg">★</span>
                                {product.rating}
                                <span className="text-gray-400">
                                    ({product.stock} in stock)
                                </span>
                            </div>

                            <p className="text-2xl font-bold text-orange-600 mt-3">
                                ${product.price}
                            </p>

                            <button className="w-full mt-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white py-2 rounded-full ">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* VIEW ALL BUTTON (OUTSIDE MAP) */}
            <div className="text-center mt-10">
                <Link
                    href="/products"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-medium rounded-xl hover:opacity-90 transition"
                >
                    View All Products
                </Link>
            </div>
        </section>
    );
};

export default TopGenerations;