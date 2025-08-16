import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { navLinks } from "../constants";
import logo from "../assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 duration-500 ${
        isScrolled
          ? "bg-white/80 shadow-md backdrop-blur-lg py-3 md:py-4 text-gray-700"
          : "py-4 md:py-6 bg-white/80"
      }`}
    >
      <nav className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-24 flex items-center justify-between">
        {/* Logo Left */}
        <Link to="/">
          {/* <img src={logo} alt="Logo" className="h-16" /> */}
          <h3 className="text-2xl">MDC</h3>
        </Link>

        {/* Menu + Appointment Right */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((nav) => (
            <div key={nav.id} className="relative group">
              {!nav.submenu ? (
                <NavLink
                  to={nav.id}
                  className={({ isActive }) =>
                    `text-[18px] font-medium pb-1 ${
                      isActive
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

                  {/* Dropdown on hover */}
                  <div className="absolute left-0 mt-2 bg-white shadow-md rounded-md py-2 px-4 w-max min-w-[180px] opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                    {nav.submenu.slice(0, 6).map((sub) => (
                      <NavLink
                        key={sub.id}
                        to={`/services/${sub.id}`}
                        className="block text-[16px] text-gray-700 py-2 px-2 whitespace-nowrap hover:text-primary"
                      >
                        {sub.title}
                      </NavLink>
                    ))}
                    <NavLink
                      to="/services"
                      className="block text-[16px] text-gray-700 py-2 px-2 whitespace-nowrap hover:text-primary font-semibold"
                    >
                      View All Services
                    </NavLink>
                  </div>
                </>
              )}
            </div>
          ))}

          {/* Appointment */}
          <div className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full cursor-pointer">
            <FaPhone className="mr-2" />
            <a href="tel:+880123456789">+880 1234 567 89</a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-3">
          {/* <div
            className="flex items-center gap-2 bg-primary text-white px-3 py-1 rounded-full cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            <FaPhone className="mr-1" />
            <span>+880 1234 567 89</span>
          </div> */}

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

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-start px-6 pt-20 transition-transform duration-500 overflow-y-auto z-40 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
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
          <div key={nav.id} className="w-full border-b border-gray-200 last:border-b-0">
            <div className="flex items-center justify-between w-full py-3">
              {!nav.submenu ? (
                <NavLink
                  to={nav.id}
                  className="block text-[18px] font-medium text-gray-700 hover:text-primary"
                >
                  {nav.title}
                </NavLink>
              ) : (
                <div className="w-full flex justify-between items-center cursor-pointer">
                  <span className="block text-[18px] font-medium text-gray-700 hover:text-primary">
                    {nav.title}
                  </span>
                  <FiChevronDown className="ml-2" />
                </div>
              )}
            </div>

            {nav.submenu && (
              <div className="ml-4 pb-2 border-l border-gray-300 pl-2">
                {nav.submenu.slice(0, 6).map((sub) => (
                  <NavLink
                    key={sub.id}
                    to={`/services/${sub.id}`}
                    className="block text-[16px] text-gray-600 py-1 hover:text-primary"
                  >
                    {sub.title}
                  </NavLink>
                ))}
                <NavLink
                  to="/services"
                  className="block text-[16px] text-gray-600 py-1 hover:text-primary font-semibold"
                >
                  View All Services
                </NavLink>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* <Modal isOpen={showModal} onClose={() => setShowModal(false)} /> */}
    </div>
  );
};

export default Header;
