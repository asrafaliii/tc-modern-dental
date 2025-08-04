import React, { useState } from "react";
import ReactDOM from "react-dom";

const services = [
  { id: "medicated-hydrafacial", title: "Medicated HydraFacial" },
  { id: "bb-glow-facial", title: "BB Glow Facial" },
  { id: "carbon-facial", title: "Carbon Facial" },
  { id: "chemical-peels", title: "Chemical Peels" },
  { id: "prp-face", title: "PRP Face" },
  { id: "body-fat-reduction-hifu", title: "Body Fat Reduction (With HIFU)" },
  { id: "skin-rejuvenation", title: "Skin Rejuvenation" },
  { id: "anti-aging-treatments", title: "Anti-Aging Treatments" },
  { id: "aesthetic-care", title: "Aesthetic Care" },
  { id: "fat-reduction", title: "Fat Reduction" },
  { id: "laser-treatments", title: "LASER Treatments" },
  { id: "pigmentation-reduction", title: "Pigmentation Reduction" },
  { id: "pico-laser", title: "Pico Laser" },
  { id: "mole-removal", title: "Mole Removal" },
  { id: "botox", title: "Botox" },
  { id: "dermal-fillers", title: "Dermal Fillers" },
  { id: "threads", title: "Threads" },
  { id: "others", title: "Others" }
];

const Modal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    service: "",
    date: "",
  });

  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, number, service, date } = formData;

    const message =
      `Your Appointment Details\n` +
      `Name: *${name}*\n` +
      `Phone: *${number}*\n` +
      `Service: *${service}*\n` +
      `Date: *${date}*`;

    setShowMessage(true);

    setTimeout(() => {
      onClose(); // Close modal
      window.open(
        `https://wa.me/8801776895468?text=${encodeURIComponent(message)}`,
        "_blank"
      );
      setShowMessage(false);
      setFormData({ name: "", number: "", service: "", date: "" });
    }, 1000);
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-sm sm:max-w-md bg-white rounded-2xl p-5 mx-auto shadow-xl max-h-[90vh] overflow-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-600 hover:text-black text-3xl font-bold cursor-pointer"
          aria-label="Close modal"
        >
          &times;
        </button>

        <h2 className="text-center text-3xl font-bold text-primary my-5">Book Your Appointment</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          <div>
            <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="number"
              id="number"
              required
              placeholder="Enter your phone number"
              value={formData.number}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
              Select Service
            </label>
            <div className="relative">
              <select
                name="service"
                id="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 appearance-none bg-white z-10"
              >
                <option value="">Choose a service</option>
                {services.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                ▼
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              required
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded hover:bg-primary-dark transition cursor-pointer"
              disabled={showMessage}
            >
              {showMessage ? "Sending..." : "Confirm Booking"}
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
