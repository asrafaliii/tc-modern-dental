import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "../../../components/Title";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

export default function ServicesSlider() {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Failed to fetch services:", err));
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    arrows: false,
    dots: true,
    swipeToSlide: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start py-16 sm:px-6 lg:px-24 max-w-screen-xl mx-auto">

        {/* Left Title Area */}
        <div className="lg:col-span-4 px-4">
          <Title subtitle="What We Do" title="Our Services" align="start" />
        </div>

        {/* Right Slider Area */}
        <div className="lg:col-span-8">
          <Slider {...settings}>
            {services.map((service) => (
              <div key={service.id} className="px-3">
                <div className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full object-cover"
                  />
                  <div className="p-4 flex-1 flex flex-col">
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
              </div>
            ))}
          </Slider>

          {/* View All Button */}
          <div className="flex justify-center mt-10">
            <Button
              label="All Services"
              onClick={() => navigate("/services")}
              variant="primary"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
