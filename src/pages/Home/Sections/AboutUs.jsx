import React from 'react';
import Title from '../../../components/Title';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();
  
  return (
    <section className="bg-white max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-24 py-16 flex flex-col lg:flex-row items-center justify-between">

      {/* Left Image */}
    {/* Left Image with Overlay Info */}
<div className="relative rounded-2xl shadow-md overflow-hidden mb-10 lg:mb-0 w-full lg:w-1/2">
  <img
    src="https://res.cloudinary.com/dro6y5qla/image/upload/v1748799324/WhatsApp_Image_2025-06-01_at_12.47.27_AM_jrem7d.jpg"
    className="w-full h-full object-cover"
    alt="Dr. Sadia’s Aesthetic & Laser Center"
  />
  {/* Overlay with Centered Gradient Text */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-end justify-center p-4">
    <div className="text-center">
      <h3 className="text-white text-2xl font-semibold">Dr. Sadia Maksud</h3>
      <p className="text-gray-200 text-sm">Founder and Chief Consultant,<br></br> Dr. Sadia’s Advanced Aesthetic & Laser Center</p>
    </div>
  </div>
</div>


      {/* Right Content */}
      <div className="max-w-xl lg:ml-12 text-start lg:text-left w-full lg:w-1/2">
        <Title
          subtitle="About Dr. Sadia’s Aesthetic & Laser Center"
          title="Empowering Confidence Through Expert Aesthetic Care"
          align="start"
        />

        <p className="text-gray-600 mb-4">
          Dr. Sadia’s Aesthetic & Laser Center offers personalized, science-backed skincare and aesthetic solutions to help you feel confident in your skin. Our mission is to combine technology with expert care, delivering natural-looking results in a safe, welcoming environment.
        </p>

        <p className="text-gray-600 mb-6">
          Whether you’re looking to enhance your natural features or treat specific skin concerns, we ensure every treatment is tailored to your unique goals — because your confidence is our priority.
        </p>

        {/* Key Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-800 font-medium mb-6">
          <div className="flex items-start gap-2">
            <span className="text-primary mt-1">✔</span>
            Advanced Laser Treatments
          </div>
          <div className="flex items-start gap-2">
            <span className="text-primary mt-1">✔</span>
            Non-Surgical Skin Rejuvenation
          </div>
          <div className="flex items-start gap-2">
            <span className="text-primary mt-1">✔</span>
            Personalized Aesthetic Care Plans
          </div>
          <div className="flex items-start gap-2">
            <span className="text-primary mt-1">✔</span>
            Safe, Comfortable Environment
          </div>
          <div className="flex items-start gap-2">
            <span className="text-primary mt-1">✔</span>
            Natural-Looking Results
          </div>
          <div className="flex items-start gap-2">
            <span className="text-primary mt-1">✔</span>
            Confidence-Boosting Treatments
          </div>
        </div>

        <Button
          className="mt-2"
          label="Read More"
          onClick={() => navigate("/about")}
          variant="primary"
        />
      </div>

    </section>
  );
};

export default AboutUs;
