import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import AppointmentModal from "../../../components/AppointmentModal";
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const bgImage =
    "https://res.cloudinary.com/dro6y5qla/image/upload/v1755374378/hero_blxf54.jpg";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center relative overflow-hidden">
      {/* Background Image with Whiteish Gradient */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,0.7)), url('${bgImage}')`,
        }}
      ></div>

      {/* Content */}
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-6 lg:px-12 relative z-10 flex flex-col items-center justify-center text-center">
        <h2 className="text-sm sm:text-lg font-semibold text-gray-700 mb-3">
          Welcome to
        </h2>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 max-w-4xl mb-4">
          Modern Dental Center - MDC
        </h1>

        <p className="max-w-xl mt-4 px-4 text-gray-800 text-lg sm:text-xl font-medium">
          Providing advanced dental care with modern technology and personalized treatments for a healthy, confident smile.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Button
            label="Book Appointment"
            onClick={() => setShowModal(true)}
            variant="primary"
            className="text-white px-7 py-2.5 rounded font-medium"
          />

          {/* Call & WhatsApp icons (only mobile) */}
<div className="flex sm:hidden items-center gap-3 mt-3">
  <a
    href="tel:01763073983"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white shadow-md hover:opacity-90"
  >
    <FiPhoneCall size={22} />
  </a>
  <a
    href="https://wa.me/8801763073983"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-md hover:opacity-90"
  >
    <FaWhatsapp size={22} />
  </a>
</div>

        </div>
      </div>

      {/* Appointment Modal */}
      {showModal && <AppointmentModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Hero;
