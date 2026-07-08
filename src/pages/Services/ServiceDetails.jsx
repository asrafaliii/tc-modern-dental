import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PageHeader from '../../components/PageHeader';
import { HiCheckCircle, HiVideoCamera } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa"; 
import Button from "../../components/Button"; // Button কম্পোনেন্ট ইমপোর্ট ফিক্স করা হয়েছে

export default function ServiceDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeLang, setActiveLang] = useState("en"); // 'en' or 'bn'

  useEffect(() => {
    setLoading(true);
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.slug === slug);
        setService(found);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setService(null);
        setLoading(false);
      });
  }, [slug]);

  // WhatsApp-এ মেসেজ পাঠানোর হ্যান্ডলার
  const handleWhatsAppBooking = () => {
    const phoneNumber = "8801763073983";
    const message = encodeURIComponent(
      `Hello, I would like to book an appointment for the treatment: ${service?.title || "Dental Consultation"}.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  // Helper function to extract YouTube ID for responsive iframe embed
  const getYouTubeId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-3">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-500 font-medium">Loading details...</p>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Service Not Found</h3>
        <p className="text-gray-500 mb-6">The treatment you are looking for does not exist or has been moved.</p>
        <Button label="Back to Services" onClick={() => navigate("/services")} variant="primary" />
      </div>
    );
  }

  const videoId = getYouTubeId(service.video);

  return (
    <div className="bg-slate-50/50 min-h-screen pb-20">
      {/* Dynamic Page Header */}
      <PageHeader title={service.title} />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-24 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          
          {/* Left/Center: Main Content (Takes 2 Columns) */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Top Showcase: Image & Descriptions */}
            <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-100 shadow-sm space-y-6">
              <div className="overflow-hidden rounded-2xl aspect-[16/10] bg-slate-100 shadow-inner">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Language Selector Tabs */}
              <div className="flex border-b border-slate-100 pb-px">
                <button
                  onClick={() => setActiveLang("en")}
                  className={`pb-3 text-sm font-semibold transition-all relative px-4 ${
                    activeLang === "en" ? "text-primary border-b-2 border-primary" : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  English Details
                </button>
                <button
                  onClick={() => setActiveLang("bn")}
                  className={`pb-3 text-sm font-medium transition-all relative px-4 font-bengali ${
                    activeLang === "bn" ? "text-primary border-b-2 border-primary font-bold" : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  বাংলা বিবরণ
                </button>
              </div>

              {/* Dynamic Description View */}
              <div className="prose max-w-none min-h-[100px]">
                {activeLang === "en" ? (
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed antialiased">
                    {service.description}
                  </p>
                ) : (
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed antialiased font-bengali">
                    {service.description_bn || "এই সেবার জন্য কোনো বাংলা বিবরণ পাওয়া যায়নি।"}
                  </p>
                )}
              </div>
            </div>

            {/* Highlights Feature Area */}
            {service.highlights && service.highlights.length > 0 && (
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-primary rounded-full inline-block"></span>
                  Key Benefits & Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-primary/20 transition-all duration-200"
                    >
                      <HiCheckCircle className="text-primary text-xl flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 text-sm sm:text-base font-medium">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Premium Video Gallery Section */}
            {videoId && (
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <HiVideoCamera className="text-primary text-2xl" />
                  Video Demonstration
                </h3>
                <div className="overflow-hidden rounded-2xl aspect-video bg-black shadow-lg border border-slate-100">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={`${service.title} Video Guide`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar: Sticky Action Column (Takes 1 Column) */}
          <div className="lg:sticky lg:top-24 space-y-6">
            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white p-6 sm:p-8 rounded-3xl shadow-xl shadow-emerald-600/10 relative overflow-hidden">
              {/* Background abstract decoration blobs */}
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="relative z-10 space-y-6">
                <div className="p-3 bg-white/10 rounded-2xl w-max">
                  <FaWhatsapp className="text-4xl text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Need This Treatment?</h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Book your consultation instantly via WhatsApp with our expert specialist team.
                  </p>
                </div>
                
                <hr className="border-white/20" />
                
                <button
                  onClick={handleWhatsAppBooking}
                  className="w-full bg-white text-emerald-700 font-bold hover:bg-slate-50 py-3 px-4 rounded-xl transition-all shadow-md text-center flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="text-xl" />
                  Book via WhatsApp
                </button>
              </div>
            </div>

            {/* Quick Consultation Info Box */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 text-center">
              <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Emergency Support</p>
              <a href="tel:+8801763073983" className="text-lg font-bold text-gray-700 hover:text-primary transition-colors">
                01763-073983
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}