import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";

export default function ContactInfo() {
  return (
    <div className="bg-background">
      <div className="p-6 md:flex items-center justify-between w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-24">
        
        {/* Contact Info */}
        <div className="flex items-center space-x-4">
          <div className="bg-primary p-4 rounded-xl text-white text-xl">
            <FaPhoneAlt />
          </div>
          <div>
            <h4 className="font-semibold text-lg">Your Beauty Journey Starts Here</h4>
            <p className="text-gray-600 text-sm">+880 1776-895468</p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-16 w-px bg-gray-200 mx-6"></div>

        {/* Opening Hours */}
        <div className="flex items-center space-x-4 mt-6 md:mt-0">
          <div className="bg-primary p-4 rounded-xl text-white text-xl">
            <BiTimeFive />
          </div>
          <div>
            <h4 className="font-semibold text-lg">Opening Hours</h4>
            <p className="text-gray-600 text-sm">Sat to Thu 11:00 AM to 10:00 PM</p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-16 w-px bg-gray-200 mx-6"></div>

        {/* Contact Us Button */}
        <div className="mt-6 md:mt-0">
          <Link to="/contact">
            <Button
              label="Contact Us"
              icon={FaEnvelope}
              variant="primary"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
