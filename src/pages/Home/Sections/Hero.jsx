import React, { useState } from "react";
import Button from "../../../components/Button";
import AppointmentModal from "../../../components/AppointmentModal";
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const bgImage =
    "https://res.cloudinary.com/dro6y5qla/image/upload/v1755374378/hero_blxf54.jpg";

  // WhatsApp মেসেজ হ্যান্ডলার
  const handleWhatsAppClick = () => {
    const phoneNumber = "8801763073983";
    const message = encodeURIComponent("Hello Modern Dental Center, I want to know about your dental services and book an appointment.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center relative overflow-hidden bg-slate-50">
      
      {/* Premium Background Layer with Soft Overlay Gradient */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.85), rgba(248,250,252,0.8)), url('${bgImage}')`,
        }}
      ></div>

      {/* Decorative Blur Blobs for Modern Aesthetic */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Container */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 flex flex-col items-center justify-center text-center">
        
        {/* Modern Dynamic Badge */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-slate-200/60 px-4 py-1.5 rounded-full shadow-sm mb-6 transition-all hover:border-primary/30">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-gray-600 uppercase">
            Welcome to Elite Dental Care
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 tracking-tight max-w-4xl leading-[1.15] mb-6">
          Modern Dental Center <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">- MDC</span>
        </h1>

        {/* Subtitle Description */}
        <p className="max-w-2xl text-slate-600 text-lg sm:text-xl font-medium leading-relaxed mb-10 px-2 antialiased">
          Providing advanced dental care with modern technology and personalized treatments for a healthy, confident smile.
        </p>

        {/* Action Controls Frame */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          
          {/* Primary CTA Appointment Button */}
          <Button
            label="Book Appointment"
            onClick={() => setShowModal(true)}
            variant="primary"
            className="w-full sm:w-auto text-white px-8 py-3.5 rounded-xl font-bold tracking-wide shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98] transition-all duration-200 text-base"
          />

          {/* Integrated Modern Communication Hub */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-center mt-2 sm:mt-0">
            {/* Quick Phone Action */}
            <a
              href="tel:01763073983"
              className="flex-1 sm:flex-none h-13 px-5 flex items-center justify-center gap-2 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 active:scale-95 group min-h-[50px]"
              title="Call Us Now"
            >
              <FiPhoneCall size={18} className="text-primary group-hover:animate-bounce" />
              <span className="text-sm sm:inline">Call Office</span>
            </a>

            {/* Quick WhatsApp Action */}
            <button
              onClick={handleWhatsAppClick}
              className="flex-1 sm:flex-none h-13 px-5 flex items-center justify-center gap-2 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 text-[#128C7E] font-semibold shadow-sm hover:bg-[#25D366]/20 transition-all duration-200 active:scale-95 min-h-[50px]"
              title="Chat on WhatsApp"
            >
              <FaWhatsapp size={20} className="text-[#25D366]" />
              <span className="text-sm sm:inline">WhatsApp</span>
            </button>
          </div>

        </div>
      </div>

      {/* Appointment Modal */}
      {showModal && <AppointmentModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Hero;