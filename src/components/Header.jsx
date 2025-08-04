import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { navLinks } from "../constants"; // তোমার navLinks ঠিক path থেকে আসবে
import Button from "./Button";
import logo from "../assets/logo.png";
import Modal from "./Modal";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 duration-500 ${
        isScrolled
          ? "bg-white/80 shadow-md backdrop-blur-lg py-3 md:py-4 text-gray-700"
          : "py-4 md:py-6"
      }`}
    >
      <nav className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-24 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="h-16" />
        </Link>

        {/* Desktop Nav */}
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
                  <button
                    onClick={() => toggleDropdown(nav.id)}
                    className="text-[18px] font-medium pb-1 text-gray-700 hover:text-primary flex items-center gap-1 focus:outline-none"
                  >
                    {nav.title}
                    <FiChevronDown
                      className={`text-gray-600 duration-300 ${
                        openDropdown === nav.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openDropdown === nav.id && (
                    <div
                      className="absolute left-0 mt-2 bg-white shadow-md rounded-md py-2 px-4 z-50 w-max min-w-[150px]"
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {nav.submenu.map((sub) => (
                        <NavLink
                          key={sub.id}
                          to={`/services/${sub.id}`}
                          className="block text-[16px] text-gray-700 py-2 px-2 whitespace-nowrap hover:text-primary"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {sub.title}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>

        {/* Appointment Button Desktop */}
        <div className="hidden md:flex">
          <Button label="Appointment" onClick={() => setShowModal(true)} variant="primary" />
        </div>

        {/* Mobile Menu + Appointment Button */}
        <div className="md:hidden flex items-center gap-3">
          <Button
            label="Appointment"
            onClick={() => setShowModal(true)}
            variant="primary"
            className="text-sm px-3 py-1"
          />

          {/* Hamburger Icon */}
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
                  onClick={handleNavLinkClick}
                  className={({ isActive }) =>
                    `block text-[18px] font-medium ${
                      isActive ? "text-primary" : "text-gray-700 hover:text-primary"
                    }`
                  }
                >
                  {nav.title}
                </NavLink>
              ) : (
                <button
                  onClick={() => toggleDropdown(nav.id)}
                  className="block text-[18px] font-medium text-gray-700 hover:text-primary cursor-pointer w-full text-left"
                >
                  {nav.title}
                </button>
              )}

              {nav.submenu && (
                <FiChevronDown
                  className={`ml-2 cursor-pointer transform duration-300 ${
                    openDropdown === nav.id ? "rotate-180" : ""
                  }`}
                  onClick={() => toggleDropdown(nav.id)}
                />
              )}
            </div>

            {nav.submenu && openDropdown === nav.id && (
              <div className="ml-4 pb-2 border-l border-gray-300 pl-2">
                {nav.submenu.map((sub) => (
                  <NavLink
                    key={sub.id}
                    to={`/services/${sub.id}`}
                    onClick={handleNavLinkClick}
                    className="block text-[16px] text-gray-600 py-1 hover:text-primary"
                  >
                    {sub.title}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Header;
