import { useEffect, useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Title from "../../../components/Title";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

export default function ServicesGrid() {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Failed to fetch services:", err));
  }, []);

  return (
    <div className="bg-background">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-24 py-16">
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col">
              <img
                src={service.image}
                alt={service.title}
                className="w-full object-cover"
              />
              <div className="p-4 flex-1 flex flex-col">
                <h4 className="text-xl font-semibold text-primary mb-2">
                  {service.title}
                </h4>
                {service.description && (
                  <p className="text-sm text-gray-800 mb-2 line-clamp-3">
                    {service.description}
                  </p>
                )}
                <Button
                  label="Details"
                  variant="secondary"
                  className="mt-auto w-max"
                  onClick={() => navigate(`/services/${service.slug}`)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
