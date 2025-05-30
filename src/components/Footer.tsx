"use client";

import { Instagram, Linkedin, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-4 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Navigasi */}
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:underline text-gray-300">
            Home
          </a>
          <a href="#" className="hover:underline text-gray-300">
            Pricing
          </a>
          <a href="#" className="hover:underline text-gray-300">
            Blog
          </a>
          <a href="#" className="hover:underline text-gray-300">
            Privacy
          </a>
          <a href="#" className="hover:underline text-gray-300">
            Terms
          </a>
        </div>

        {/* Sosmed */}
        <div className="flex gap-4">
          <a href="#" className="hover:text-blue-400">
            <X className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-blue-500">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-pink-500">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-6">
        &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
}
