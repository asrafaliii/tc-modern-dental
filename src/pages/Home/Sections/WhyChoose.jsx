import React from 'react';
import Title from '../../../components/Title';

const WhyChoose = () => {
  return (
    <section className="bg-white w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-24 py-16 flex flex-col lg:flex-row items-center justify-between gap-12">

      {/* Left Content */}
      <div className="max-w-2xl text-start lg:text-left">
        <Title
          subtitle="Why Choose Dr. Sadia’s Aesthetic Center"
          title="Advanced Care, Visible Results"
          align="start"
        />

        <p className="text-gray-600 mb-6">
          At Dr. Sadia’s Advanced Aesthetic & Laser Center, we bring together clinical expertise, global-grade technology, and personalized skin solutions — all designed to enhance your natural beauty with safe, non-invasive methods.
        </p>

        <hr className="border-gray-200 mb-6" />

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left text-gray-800">
          <div>
            <h4 className="font-semibold text-lg">Certified Expertise</h4>
            <p className="text-sm text-gray-600">
              Treatments performed under the supervision of Dr. Sadia — a trained and experienced aesthetic practitioner.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Global-Standard Equipment</h4>
            <p className="text-sm text-gray-600">
              We use FDA-approved and medical-grade devices to ensure top-tier safety and efficacy.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Personalized Skin Solutions</h4>
            <p className="text-sm text-gray-600">
              Customized treatment plans for each skin type, concern, and lifestyle.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Comfort-Focused Experience</h4>
            <p className="text-sm text-gray-600">
              Modern, hygienic, and welcoming space designed to make you feel relaxed throughout your visit.
            </p>
          </div>
        </div>
      </div>

      {/* Right Image - Single Image */}
      <div className="w-full lg:w-[500px]">
        <img
          src="https://res.cloudinary.com/dro6y5qla/image/upload/v1748803932/WhatsApp_Image_2025-05-27_at_2.31.58_PM_kl23yb.jpg"
          alt="Aesthetic Treatment at Dr. Sadia’s"
          className="rounded-3xl shadow-lg w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default WhyChoose;
