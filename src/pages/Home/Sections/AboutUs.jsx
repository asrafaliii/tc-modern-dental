import React from "react";
import { useNavigate } from "react-router-dom";
import Title from "../../../components/Title";
import Button from "../../../components/Button";
import { FaUserMd, FaTooth } from "react-icons/fa";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-24 py-16 flex flex-col lg:flex-row items-center justify-between gap-10">
      {/* Left Section */}
      <div className="relative rounded-2xl shadow-md overflow-hidden w-full lg:w-1/2">
        <img
          src="https://res.cloudinary.com/dro6y5qla/image/upload/v1755385489/about_cniqbp.jpg"
          className="w-full h-full object-cover"
          alt="Modern Dental Center - MDC"
        />

        {/* Patients Count */}
        <div className="absolute z-0 top-3 left-3 bg-white rounded-xl shadow-md p-3 flex items-center gap-2">
          <span className="bg-primary text-white text-sm font-bold rounded-full px-3 py-2">
            1K+
          </span>
          <p className="text-gray-700 text-sm font-semibold">
            Smiling Patients
          </p>
        </div>

        {/* Schedule Hours Card */}
        <div className="absolute bottom-2 right-3 bg-white rounded-xl shadow-lg p-5 w-80">
          <h4 className="text-primary font-semibold mb-3">Schedule Hours</h4>
          <ul className="text-sm text-gray-700 space-y-2">
            <li className="flex justify-between">
              <span>Fri, Sat, Sun, Wed</span>
              <span>(10:00AM - 10:00PM)</span>
            </li>
            <li className="flex justify-between">
              <span>Mon, Tue, Thu</span>
              <span>(05:00PM - 10:00PM)</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="max-w-xl text-start w-full lg:w-1/2">
  <Title
    subtitle="About Modern Dental Center"
    title="Excellence in Dental Care for Every Smile"
    align="start"
  />

  {/* Paragraph */}
  <p className="text-gray-600 text-lg leading-relaxed mb-6">
    At Modern Dental Center (MDC), we combine advanced technology with
    personalized dental treatments. Our goal is to restore, protect, and
    enhance your smile with a compassionate and professional approach.
  </p>

  {/* Key Points with Icons */}
  <div className="space-y-5 mb-6">
    <div className="flex items-center gap-3">
      <FaTooth className="text-primary text-xl" />
      <p className="text-gray-800 text-base lg:text-lg leading-snug">
        <span className="font-semibold">Complete Dental Solutions</span>
        <br />
        From preventive care to cosmetic dentistry – we cover all your
        dental needs.
      </p>
    </div>
    <div className="flex items-center gap-3">
      <FaUserMd className="text-pink-500 text-xl" />
      <p className="text-gray-800 text-base lg:text-lg leading-snug">
        <span className="font-semibold">Expert Dental Professionals</span>
        <br />
        Our team ensures safe, precise, and comfortable treatments.
      </p>
    </div>
  </div>

  {/* Button + Doctor Info */}
  <div className="flex items-center gap-5">
    <Button
      label="Learn More"
      onClick={() => navigate("/about")}
      variant="primary"
    />
  </div>
</div>

    </section>
  );
};

export default AboutUs;
