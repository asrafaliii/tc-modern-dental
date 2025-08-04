import React, { useState } from "react";
import Title from "../../../components/Title";

const images = [
  "https://res.cloudinary.com/dro6y5qla/image/upload/v1748839259/WhatsApp_Image_2025-05-27_at_2.34.39_PM_htccr8.jpg",
  "https://res.cloudinary.com/dro6y5qla/image/upload/v1748839258/WhatsApp_Image_2025-05-27_at_2.34.40_PM_1_zlsb2t.jpg",
  "https://res.cloudinary.com/dro6y5qla/image/upload/v1748839259/WhatsApp_Image_2025-05-27_at_2.31.58_PM_bsjbx7.jpg",
  "https://res.cloudinary.com/dro6y5qla/image/upload/v1748839258/WhatsApp_Image_2025-05-27_at_2.34.40_PM_eobkoh.jpg",
  "https://res.cloudinary.com/dro6y5qla/image/upload/v1748839258/WhatsApp_Image_2025-05-27_at_2.34.41_PM_fvznyh.jpg",
  "https://res.cloudinary.com/dro6y5qla/image/upload/v1748803606/WhatsApp_Image_2025-05-27_at_2.31.58_PM_1_tkzf6e.jpg",
  "https://res.cloudinary.com/dro6y5qla/image/upload/v1748839258/WhatsApp_Image_2025-05-27_at_2.34.39_PM_1_l6vixl.jpg",
  "https://res.cloudinary.com/dro6y5qla/image/upload/v1748804474/3dface-2_tapvul.jpg",
  "https://res.cloudinary.com/dro6y5qla/image/upload/v1748839259/WhatsApp_Image_2025-05-27_at_2.34.38_PM_1_gbmdxe.jpg",
  "https://res.cloudinary.com/dro6y5qla/image/upload/v1748839258/WhatsApp_Image_2025-05-27_at_2.34.40_PM_2_oxxkp5.jpg",
];

export default function ImageGallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const closeModal = () => setSelectedIndex(null);
  const showPrev = () => setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  const showNext = () => setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-24 py-16">
      <Title
        subtitle="Image Gallery"
        title="Your journey to a healthier smile in pictures"
        align="center"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md group cursor-pointer"
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-60 object-cover transition-transform duration-300 transform group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeModal}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
              className="absolute top-4 right-6 text-white text-4xl font-bold z-50"
            >
              &times;
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-4 text-white text-3xl z-50"
            >
              &#10094;
            </button>

            <img
              src={images[selectedIndex]}
              alt={`Image ${selectedIndex + 1}`}
              className="max-h-full max-w-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-4 text-white text-3xl z-50"
            >
              &#10095;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
