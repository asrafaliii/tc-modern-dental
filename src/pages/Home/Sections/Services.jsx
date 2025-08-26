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
      .then((data) => setServices(data.slice(0, 8))) // only 8 services
      .catch((err) => console.error("Failed to fetch services:", err));
  }, []);

  return (
    <section className="bg-background">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-24 py-16">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <Title subtitle="What We Do" title="Our Services" align="center" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full object-cover"
              />
              <div className="p-4 flex-1 flex flex-col items-center text-center">
                <h4 className="text-lg font-semibold text-primary mb-2">
                  {service.title}
                </h4>
                {service.description && (
                  <p className="text-sm text-gray-700 mb-3 line-clamp-3">
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

        {/* View All Services Button */}
        <div className="flex justify-center mt-12">
          <Button
            label="View All Services"
            onClick={() => navigate("/services")}
            variant="primary"
          />
        </div>
      </div>
    </section>
  );
}
