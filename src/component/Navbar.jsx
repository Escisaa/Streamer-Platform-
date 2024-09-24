import React, { useState } from "react";
import logo from "../assets/logo.png";
import { RiCloseFill, RiMenu3Line } from "@remixicon/react";

export default function Navbar() {
  const [isOpen, setIsopen] = useState(false);

  const toggleMenu = () => {
    setIsopen(!isOpen);
  };
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 m-2">
      <div className="text-neutral-500 bg-black/60 backdrop-blur-md max-w-7xl mx-auto px-4 py-3 flex justify-between items-center rounded-xl border border-neutral-800">
        <img src={logo} alt="logo" width={120} height={24} />

        <div className="hidden md:flex space-x-6">
          <a href="#Works" className="hover:text-neutral-200">
            How it works
          </a>

          <a href="#Pricing" className="hover:text-neutral-200">
            Pricing
          </a>

          <a href="#Testimonials" className="hover:text-neutral-200">
            Testimonials
          </a>
        </div>

        <div className="hidden md:flex space-x-4 items-center">
          <a href="#" className="hover:text-neutral-700 transition">
            Get Demo
          </a>

          <a
            href="#"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition"
          >
            Start Free Trial
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-non"
            aria-label={isOpen ? "Close Menu" : "Open"}
          >
            {isOpen ? <RiCloseFill /> : <RiMenu3Line />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-neutral-900/60 backdrop-blur-md border border-neutral-800 p-4 rounded-xl mt-2">
          <div className="flex flex-col space-y-4">
            <a href="#" className="hover:text-neutral-200">
              Product
            </a>

            <a href="#" className="hover:text-neutral-200">
              Pricing
            </a>

            <a href="#" className="hover:text-neutral-200">
              Resources
            </a>

            <a href="#" className="hover:text-white">
              Login
            </a>

            <a
              href="#"
              className="border border-neutral-700 text-white py-2 px-4 rounded-lg hover:text-neutral-700 transition"
            >
              Get Demo
            </a>

            <a
              href="#"
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}