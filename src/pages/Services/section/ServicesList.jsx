import { useEffect, useState } from "react";
import Title from "../../../components/Title";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

export default function ServicesGrid() {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data)) // Fetches all services
      .catch((err) => console.error("Failed to fetch services:", err));
  }, []);

  return (
    <div className="bg-background">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-24 py-16">
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/10 transition-all duration-300 overflow-hidden h-full flex flex-col cursor-pointer"
              onClick={() => navigate(`/services/${service.slug}`)}
            >
              {/* Image Container */}
              <div className="overflow-hidden aspect-[4/3] bg-gray-50 relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content Area */}
              <div className="p-5 flex-1 flex flex-col justify-between items-center text-center">
                <h4 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-200 mb-4 line-clamp-2">
                  {service.title}
                </h4>
                
                <Button
                  label="Details"
                  variant="secondary"
                  className="w-full py-2.5 text-sm font-medium border border-gray-200 hover:bg-primary hover:text-white rounded-xl transition-all duration-200"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevents parent click event from firing twice
                    navigate(`/services/${service.slug}`);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}