import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Title from "../../../components/Title"; // Adjust the import if needed

const ContactCard = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">

        {/* Contact Info + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 items-center">
          {/* Image (Top on mobile, right on desktop) */}
          <div className="order-1 lg:order-2 flex justify-center">
            <img
              src="https://res.cloudinary.com/dro6y5qla/image/upload/v1748839258/WhatsApp_Image_2025-05-27_at_2.35.41_PM_lpf98r.jpg"
              alt="Clinic Location"
              className="w-full h-full max-h-[720px] object-cover rounded-3xl shadow-lg"
            />
          </div>

          {/* Contact Info (Bottom on mobile, left on desktop) */}
          <div className="order-2 lg:order-1 space-y-6">
            {/* Section Title */}
            <div className="mb-12 text-center">
              <Title subtitle="Get in Touch" title="Ready to glow? Let’s start your beauty journey today!" align="start" />
            </div>
            {/* Phone */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start gap-4">
              <FaPhoneAlt className="text-primary text-3xl mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
                <a href="tel:+8801776895468" className="text-gray-600 hover:text-primary block">
                 +880 1776-895468
                </a>
                <a href="tel:+8801677409088" className="text-gray-600 hover:text-primary block">
                 +880 1677409088
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start gap-4">
              <FaEnvelope className="text-primary text-3xl mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">dr.sadias.advancedaestheticlaser@gmail.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start gap-4">
              <FaMapMarkerAlt className="text-primary text-3xl mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Address</h3>
                <p className="text-gray-600">
                  Floor-4,
                  House-153/A (Fuchkawali & Puma building)
                  Road-11, Banani, Dhaka - 1213

                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="w-full h-[450px]">
          <iframe
            title="Google Map"
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.7863252393263!2d90.4066268!3d23.7906221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c72680a1287f%3A0xe671e85c621a80ec!2sDr.%20Sadia%E2%80%99s%20Advanced%20Aesthetic%20%26%20Laser%20Center!5e0!3m2!1sen!2sbd!4v1748840736097!5m2!1sen!2sbd"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
