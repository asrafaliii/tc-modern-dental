import React from "react";

const AppointmentModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-center">Book Appointment</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
          />
          <input
            type="date"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
          />
          <button className="bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;
