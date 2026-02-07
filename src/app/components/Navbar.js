import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center text-white py-4 px-6 md:px-10 bg-black/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
        </div>
        <Link href="/" className="text-xl font-bold bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent hover:from-orange-300 hover:to-pink-500 transition-all">
          GET ME A CHAI
        </Link>
      </div>

      <div className="hidden md:block">
        <ul className="flex gap-8 items-center">
          <li>
            <Link href="/" className="hover:text-orange-400 transition-colors duration-200 font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-orange-400 transition-colors duration-200 font-medium">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-orange-400 transition-colors duration-200 font-medium">
              Projects
            </Link>
          </li>
          <li>
            <Link 
              href="/login" 
              className="bg-gradient-to-r from-orange-500 to-pink-600 px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;