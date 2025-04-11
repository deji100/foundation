"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-white h-[85px] rounded-[24px] shadow px-6 sm:px-10 py-2 flex items-center justify-between w-[95%] max-w-[1280px] mx-auto sticky z-50 transition-all duration-300 ${
        scrolled ? "top-0" : "top-4"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/gt-logo.webp"
          alt="Foundation Logo"
          className="h-[64px] w-[52px]"
          width={500}
          height={500}
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
        <Link href="/about-us" className="hover:text-green-400 transition">
          About Us
        </Link>
        <div className="relative group">
          <button className="hover:text-green-400 transition flex items-center space-x-1">
            <span>Key Initiatives</span>
            <svg
              className="w-4 h-4 transform group-hover:rotate-180 transition"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div className="absolute hidden group-hover:block bg-white shadow rounded mt-0 py-2 w-[200px] z-10">
            <Link href="/youth-empowerment" className="block px-4 py-2 hover:bg-gray-100">
              Youth Empowerment
            </Link>
            <Link href="/clean-water-initiatives" className="block px-4 py-2 hover:bg-gray-100">
              Clean Water Initiative
            </Link>
            <Link href="/housing-projects" className="block px-4 py-2 hover:bg-gray-100">
              Housing Projects
            </Link>
            <Link href="/scholarships" className="block px-4 py-2 hover:bg-gray-100">
              Scholarships
            </Link>
          </div>
        </div>
        <Link href="/news" className="hover:text-green-400 transition">
          News
        </Link>
      </div>

      {/* CTA Button */}
      <Link
        href="#"
        className="hidden sm:flex bg-green-400 h-[45px] hover:bg-green-500 text-[#154A62] font-semibold px-6 py-2 rounded-[12px] items-center transition"
      >
        Donate
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-[#154A62] focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-[90px] left-0 w-full bg-white shadow-lg py-6 px-6 rounded-b-[24px] flex flex-col gap-4 text-[#154A62] font-medium md:hidden">
          <Link
            href="/about-us"
            onClick={() => setIsOpen(false)}
            className="hover:text-green-400"
          >
            About Us
          </Link>
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-[#57DD8F]">
              Key Initiatives
            </span>
            <Link
              href="/youth-empowerment"
              className="hover:text-green-400"
              onClick={() => setIsOpen(false)}
            >
              Youth Empowerment
            </Link>
            <Link
              href="/clean-water-initiatives"
              className="hover:text-green-400"
              onClick={() => setIsOpen(false)}
            >
              Clean Water Initiative
            </Link>
            <Link
              href="/housing-projects"
              className="hover:text-green-400"
              onClick={() => setIsOpen(false)}
            >
              Housing Projects
            </Link>
            <Link
              href="/scholarships"
              className="hover:text-green-400"
              onClick={() => setIsOpen(false)}
            >
              Scholarships
            </Link>
          </div>
          <Link
            href="/news"
            onClick={() => setIsOpen(false)}
            className="hover:text-green-400"
          >
            News
          </Link>
          <Link
            href="#"
            className="mt-4 bg-green-400 hover:bg-green-500 text-[#154A62] font-semibold px-6 py-2 rounded-[12px] transition text-center"
          >
            Donate
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
