"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 md:px-12 py-10">
      
      <div className="grid md:grid-cols-4 gap-8">
        
        {/* Logo + About */}
        <div>
          <h2 className="text-white text-xl font-bold mb-3">SunCart</h2>
          <p className="text-sm">
            Your go-to shop for summer essentials. Quality products at the best prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/login">Login</Link></li>
            <li><Link href="/register">Register</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-white font-semibold mb-3">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>Accessories</li>
            <li>Clothing</li>
            <li>Footwear</li>
            <li>Beauty</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-sm">Email: support@suncart.com</p>
          <p className="text-sm">Phone: +880 1234-567890</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} SunCart. All rights reserved.
      </div>
    </footer>
  );
}