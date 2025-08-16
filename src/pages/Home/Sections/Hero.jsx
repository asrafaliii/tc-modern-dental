import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";

const Hero = () => {
  const navigate = useNavigate();

  // Static dental background image
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

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Button
            label="Explore Our Services"
            onClick={() => navigate("/services")}
            variant="primary"
            className="text-white px-7 py-2.5 rounded font-medium"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
