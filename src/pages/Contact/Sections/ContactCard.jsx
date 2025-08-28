import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Title from "../../../components/Title"; // Adjust the import if needed

const ContactCard = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-24">

        {/* Contact Info + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 items-center">
          {/* Image (Top on mobile, right on desktop) */}
          <div className="order-1 lg:order-2 flex justify-center">
            <img
              src="https://res.cloudinary.com/dro6y5qla/image/upload/v1755418544/WhatsApp_Image_2025-08-12_at_7.28.25_PM_1_agyzwo.jpg"
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
                <p className="text-gray-600">01722622226, 01920643293, 01763 073983</p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start gap-4">
              <FaEnvelope className="text-primary text-3xl mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">moderndentalcenter540@gmail.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start gap-4">
              <FaMapMarkerAlt className="text-primary text-3xl mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Address</h3>
                <p className="text-gray-600">
                  Uttar Badda, Shadhinota Sarani Road, Behind A.M.Z Hospital, Dhaka-1212.

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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.9637628321625!2d90.42701149999999!3d23.7843047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c755caddb3d5%3A0xcf78431cb0a0a0b4!2sModern%20Dental%20Center-MDC!5e0!3m2!1sen!2sbd!4v1755419638527!5m2!1sen!2sbd"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
