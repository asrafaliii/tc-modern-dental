import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FiChevronDown, FiPhoneCall } from "react-icons/fi";
import { navLinks } from "../constants";
import logo from "../assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 duration-500 ${isScrolled
          ? "bg-white/80 shadow-md backdrop-blur-lg py-3 md:py-4 text-gray-700"
          : "py-4 md:py-6 bg-white/80"
        }`}
    >
      <nav className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-24 flex items-center justify-between">
        {/* Left - Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="h-14" />
        </Link>

        {/* Right - Nav Links + Icons */}
        <div className="hidden md:flex items-center gap-8">
          {/* Nav Links */}
          <div className="flex items-center gap-8">
            {navLinks.map((nav) => (
              <div key={nav.id} className="relative group">
                {!nav.submenu ? (
                  <NavLink
                    to={nav.id}
                    className={({ isActive }) =>
                      `text-[18px] font-medium pb-1 ${isActive
                        ? "text-primary border-b-2 border-primary"
                        : "text-gray-700 hover:text-primary"
                      }`
                    }
                  >
                    {nav.title}
                  </NavLink>
                ) : (
                  <>
                    <button className="flex items-center gap-1 text-[18px] font-medium pb-1 text-gray-700 hover:text-primary focus:outline-none">
                      {nav.title}
                      <FiChevronDown className="text-gray-600" />
                    </button>

                    {/* Fixed Dropdown */}
                    <div className="absolute left-0 mt-3 bg-white shadow-lg rounded-md py-2 px-2 w-56 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 ease-in-out z-50">
                      {nav.submenu.slice(0, 6).map((sub) => (
                        <NavLink
                          key={sub.id}
                          to={`/services/${sub.id}`}
                          className="block text-[16px] text-gray-700 py-2 px-3 rounded hover:bg-gray-100 hover:text-primary"
                        >
                          {sub.title}
                        </NavLink>
                      ))}
                      <NavLink
                        to="/services"
                        className="block text-[16px] text-gray-700 py-2 px-3 font-semibold hover:bg-gray-100 hover:text-primary"
                      >
                        View All Services
                      </NavLink>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Separator */}
          <span className="mx-4 text-gray-300">|</span>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <a
            href="tel:01763073983"
            className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-full text-gray-600 hover:text-primary hover:border-primary cursor-pointer"
          >
            <FiPhoneCall size={22} />
          </a>
          {/* WhatsApp */}
            <a
              href="https://wa.me/8801763073983"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-full text-gray-600 hover:text-green-500 hover:border-green-500 cursor-pointer transition"
            >
              <FaWhatsapp />
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/mdcgeneralclinic"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-full text-gray-600 hover:text-primary hover:border-primary cursor-pointer transition"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
            className={`focus:outline-none ${isScrolled ? "text-gray-700" : "text-gray-900"}`}
          >
            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="h-6 w-6">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col md:hidden px-6 pt-20 transition-transform duration-500 overflow-y-auto z-40 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close mobile menu"
        >
          <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="h-6 w-6">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {navLinks.map((nav) => (
          <div key={nav.id} className="w-full border-b border-gray-200">
            <NavLink
              to={nav.id}
              className="block py-4 text-[18px] font-medium text-gray-700 hover:text-primary"
            >
              {nav.title}
            </NavLink>
          </div>
        ))}

        {/* Mobile Icons */}
        <div className="mt-6 flex gap-4">
          <a
            href="tel:01763073983"
            className="w-12 h-12 flex items-center justify-center border border-gray-400 rounded-full text-gray-600 hover:text-primary hover:border-primary cursor-pointer"
          >
            <FiPhoneCall size={22} />
          </a>
          <a
            href="https://wa.me/8801763073983"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center border border-gray-400 rounded-full text-gray-600 hover:text-green-500 hover:border-green-500 cursor-pointer"
          >
            <FaWhatsapp size={22} />
          </a>
          <a
            href="https://www.facebook.com/mdcgeneralclinic"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center border border-gray-400 rounded-full text-gray-600 hover:text-primary hover:border-primary cursor-pointer"
          >
            <FaFacebookF size={22} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
