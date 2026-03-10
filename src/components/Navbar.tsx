"use client";

import Link from "next/link";
import { profile } from "@/lib/profile";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              {profile.name}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/#about"
              className="text-gray-800 hover:text-blue-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/#projects"
              className="text-gray-800 hover:text-blue-600 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/#skills"
              className="text-gray-800 hover:text-blue-600 transition-colors"
            >
              Skills
            </Link>
            <Link
              href="/#experience"
              className="text-gray-800 hover:text-blue-600 transition-colors"
            >
              Experience
            </Link>
            <Link
              href="/#contact"
              className="text-gray-800 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
            <a
              href={profile.cvPath}
              download
              className="ml-2 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Download CV
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link
              href="/#about"
              className="block px-3 py-2 rounded-md text-gray-800 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#projects"
              className="block px-3 py-2 rounded-md text-gray-800 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/#skills"
              className="block px-3 py-2 rounded-md text-gray-800 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="/#experience"
              className="block px-3 py-2 rounded-md text-gray-800 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </Link>
            <Link
              href="/#contact"
              className="block px-3 py-2 rounded-md text-gray-800 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href={profile.cvPath}
              download
              className="block px-3 py-2 rounded-md text-gray-800 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
