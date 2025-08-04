import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  const bgImages = [
    "https://res.cloudinary.com/dro6y5qla/image/upload/v1748883692/laser-epilation-hair-removal-therapy_2_-min_qwlmom.jpg",
    "https://res.cloudinary.com/dro6y5qla/image/upload/v1748883692/view-from-rejuvenation-beautiful-woman-enjoying-cosmetology-procedures-beauty-salon-dermatology-hands-blue-glows-healthcare-therapy-botox_1_-min_wmm9il.jpg",
    "https://res.cloudinary.com/dro6y5qla/image/upload/v1748883693/high-angle-woman-getting-scalp-prp-treatment-min_t4wwbt.jpg",
  ];

  const phoneNumber = "8801776895468"; // ✅ Updated number without "+" for WhatsApp URL
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [fade, setFade] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prev) => (prev + 1) % bgImages.length);
      setFade(true);
      setTimeout(() => setFade(false), 1500);
    }, 7000);

    return () => {
      clearInterval(timeoutRef.current);
    };
  }, [currentIndex, bgImages.length]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center text-sm text-gray-500 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 backdrop-blur-sm"></div>

        {prevIndex !== null && (
          <div
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out animate-zoom-bg ${
              fade ? "opacity-0" : "opacity-100"
            }`}
            style={{
              backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 40%, rgba(255,255,255,0.3) 70%, rgba(255,255,255,0) 90%), url('${bgImages[prevIndex]}')`,
            }}
          />
        )}

        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out animate-zoom-bg ${
            fade ? "opacity-100" : "opacity-100"
          }`}
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 40%, rgba(255,255,255,0.3) 70%, rgba(255,255,255,0) 90%), url('${bgImages[currentIndex]}')`,
          }}
        ></div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-6 lg:px-12 relative z-10 flex flex-col items-center justify-center text-center">
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6 border border-gray-500/30 rounded-full bg-gray-300/15 pl-4 pr-4 py-1 text-sm text-primary max-w-full">
          <p>Where Beauty Meets Technology</p>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold max-w-4xl text-primary">
          Expert Laser & Aesthetic Care for Your Radiance
        </h1>

        <p className="max-w-xl mt-6 px-4 text-primary font-bold">
          At Dr. Sadia’s Advanced Aesthetic & Laser Center, we blend modern technology with personalized treatments to bring out your natural beauty.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <div className="mt-6 md:mt-0">
                    <Button
                      label="WhatsApp"
                      icon={FaWhatsapp}
                      onClick={() => window.open(whatsappUrl, "_blank")}
                      variant="primary"
                    />
                  </div>

          <Link
            to="/services"
            className="group px-7 py-2.5 flex items-center gap-2 font-medium text-primary"
          >
            Explore Our Services
            <svg
              className="group-hover:translate-x-1 transition pt-0.5 text-primary"
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 4.5h10.182m-4-3.5 4 3.5-4 3.5"
                stroke="#6B7280"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
