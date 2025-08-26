import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from "../constants";
import logo from "../assets/logo.png";

const Footer = () => {
  // Extract only services submenu from navLinks
  const serviceLinks = navLinks.find(link => link.id === "services")?.submenu || [];
  const half = Math.ceil(serviceLinks.length / 2);
  const firstHalf = serviceLinks.slice(0, half);
  const secondHalf = serviceLinks.slice(half);

  return (
    <footer className="bg-gray-800 text-gray-300 px-6 md:px-16 lg:px-24 xl:px-32 pt-12">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-500/30 pb-10">
        
        {/* Column 1: Logo and Description */}
        <div>
          <Link to="/" className="flex items-center gap-2 text-white text-3xl" style={{ fontFamily: "DM Serif Display" }}>
            <img src={logo} alt="Logo" className="h-14" />
          </Link>
          <p className="mt-6 text-sm text-gray-400">
            Providing advanced dental care with modern technology and personalized treatments for a healthy, confident smile.
          </p>
        </div>

       

        {/* Column 3: First Half of Services */}
        <div>
          <h2 className="font-semibold mb-5 text-white">Our Treatments</h2>
          <ul className="text-sm space-y-2 text-gray-400">
            {firstHalf.map((service, index) => (
              <li key={index}>
                <Link to={`/services/${service.id}`} className="hover:text-white">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Second Half of Services */}
        <div>
          <h2 className="font-semibold mb-5 text-white invisible">Services</h2> {/* Invisible heading for alignment */}
          <ul className="text-sm space-y-2 text-gray-400">
            {secondHalf.map((service, index) => (
              <li key={index}>
                <Link to={`/services/${service.id}`} className="hover:text-white">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

         {/* Column 2: Contact Info */}
        <div>
          <h2 className="font-semibold mb-5 text-white">Contact Us</h2>
          <div className="text-sm space-y-2 text-gray-400">
            <p>01722622226, 01920643293, 01763 073983</p>
            <address className="not-italic flex flex-col">
              <span>Uttar Badda, Shadhinota Sarani Road, Behind A.M.Z Hospital, Dhaka-1212.</span>
            </address>
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
