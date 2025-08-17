import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navLinks } from "../constants"; // Make sure the path is correct

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 px-6 md:px-16 lg:px-24 xl:px-32 pt-12">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-10">
        {/* Logo and description */}
        <div className="md:max-w-140"> {/* Consider if md:max-w-140 is a custom class or a typo. If it's max-w-xl (for example), use that. Assuming it's a custom width, keep it for desktop. */}
          <Link to="/" className="flex items-center gap-2 text-white text-3xl" style={{ fontFamily: "DM Serif Display" }}>
            MDC
          </Link>
          <p className="mt-6 text-sm text-gray-400">
           Providing advanced dental care with modern technology and personalized treatments for a healthy, confident smile.
          </p>
        </div>

        {/* Links and contact section (Main change here) */}
        {/* On small screens, this will be a column (flex-col). On medium screens and up, it will be a row (md:flex-row). */}
        <div className="flex flex-col md:flex-row flex-1 md:justify-end gap-10 sm:gap-20"> {/* Changed gap-20 to gap-10 and sm:gap-20 for better mobile spacing */}
          {/* Explore Links */}
          <div>
            <h2 className="font-semibold mb-5 text-white">Explore</h2>
            <ul className="text-sm space-y-2 text-gray-400">
              {/* Ensure navLinks does not include submenu items directly, or handle them.
                  If navLinks includes submenu parents, you might want to adjust this mapping
                  to link only to top-level pages or display submenus differently.
                  For a simple footer, usually only top-level links are shown. */}
              {navLinks.map((link, id) => (
                <li key={id}>
                  {/* If the link has a submenu, don't make it a direct NavLink in footer */}
                  {!link.submenu && (
                    <NavLink
                      to={link.id}
                      className={({ isActive }) =>
                        `hover:text-white ${isActive ? "text-white font-medium" : ""}`
                      }
                    >
                      {link.title}
                    </NavLink>
                  )}
                  {/* You might want to handle submenu parent links differently, e.g., link to a main services page */}
                  {link.submenu && (
                    <NavLink
                      to={link.id === "services-dropdown" ? "/services" : link.id} // Example: link "Services" to a general /services page
                      className={({ isActive }) =>
                        `hover:text-white ${isActive ? "text-white font-medium" : ""}`
                      }
                    >
                      {link.title}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex-grow-0"> {/* Use flex-grow-0 to prevent this div from taking extra space horizontally on desktop */}
            <h2 className="font-semibold mb-5 text-white">Contact Us</h2>
            <div className="text-sm space-y-2 text-gray-400">
              <p>01722622226, 01920643293, 01763 073983</p>
              {/* <p>dr.sadias.advancedaestheticlaser@gmail.com</p> */}
              {/* Added flex-col for address lines to ensure they stack vertically on mobile */}
              <address className="not-italic flex flex-col"> {/* Use <address> tag for semantic HTML */}
                <span>Uttar Badda, Shadhinota Sarani Road, Behind A.M.Z Hospital, Dhaka-1212.</span>
                
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-xs md:text-sm text-gray-500">
        <p className="py-3">
          &copy; {new Date().getFullYear()} MDC. All Rights Reserved. | Designed by{' '}
          <a
            href="https://www.threeaid.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-white"
          >
            Threeaid
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;