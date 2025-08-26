import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PageHeader from '../../components/PageHeader';

export default function ServiceDetails() {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.slug === slug);
        setService(found);
        setLoading(false);
      })
      .catch(() => {
        setService(null);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  if (!service) {
    return <div className="p-10 text-center">Service Not Found</div>;
  }

  return (
    <div>
      {/* Dynamic Page Header */}
      <PageHeader title={service.title} />

      {/* Content Section */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-24 py-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left: Image */}
          <img
            src={service.image}
            alt={service.title}
            className="w-full md:w-1/2 h-64 md:h-96 object-cover rounded-lg"
          />

          {/* Right: Title and Description */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-primary mb-4">
              {service.title}
            </h2>
            <p className="text-gray-700 text-lg">{service.description}</p>
            <p className="text-gray-700 text-lg mt-2">({service.description_bn})</p>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      {service.highlights && service.highlights.length > 0 && (
        <div className="bg-gray-100 py-10">
          <div className="max-w-6xl mx-auto px-8">
            <h3 className="text-2xl font-semibold text-primary mb-6">Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
                >
                  <p className="text-gray-800">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {service.services && service.services.length > 0 && (
        <div className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-8">
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Related Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.services.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
                >
                  <h4 className="text-lg font-bold text-gray-800 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}


    </div>
  );
}
