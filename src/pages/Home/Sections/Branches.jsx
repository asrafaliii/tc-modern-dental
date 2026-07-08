import Title from "../../../components/Title";
import { FiMapPin, FiCompass } from "react-icons/fi";

export default function Branches() {
  const branches = [
    {
      id: 1,
      title: "Uttar Badda Main Branch",
      isMain: true,
      address:
        "Uttar Badda, Shadhinota Sarani Road, Behind A.M.Z Hospital, Dhaka-1212.",
    },
    {
      id: 2,
      title: "Middle Badda Branch",
      isMain: false,
      address: "640 Middle Badda Bazar Road, Dhaka-1212.",
    },
  ];

  // গুগল ম্যাপস ডিরেকশন লিংক জেনারেটর
  const handleGetDirections = (address) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, "_blank");
  };

  return (
    <section className="bg-slate-50/60 py-20 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-24">
        {/* 12 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left 4 Columns - Title & Subtitle */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <Title
              subtitle="Our Locations"
              title="Modern Dental Center Branches"
              align="start"
            />
            <p className="text-slate-500 text-sm mt-4 leading-relaxed max-w-sm hidden lg:block">
              Visit your nearest Modern Dental Center branch to experience international standard oral healthcare with advanced dental treatments.
            </p>
          </div>

          {/* Right 8 Columns - Premium Card Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {branches.map((branch) => (
              <div
                key={branch.id}
                className={`bg-white rounded-2xl border transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between relative group ${
                  branch.isMain 
                    ? "border-primary/20 shadow-md shadow-primary/5 ring-1 ring-primary/5" 
                    : "border-slate-100 shadow-sm hover:border-slate-200"
                } hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50`}
              >
                {/* Main Branch Glow Badge */}
                {branch.isMain && (
                  <span className="absolute top-4 right-4 bg-primary/10 text-primary text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border border-primary/20 shadow-sm">
                    Main Branch
                  </span>
                )}

                <div>
                  {/* Pin Icon Wrapper */}
                  <div className={`w-12 h-12 flex items-center justify-center rounded-2xl mb-6 transition-colors duration-300 ${
                    branch.isMain 
                      ? "bg-primary text-white shadow-md shadow-primary/20" 
                      : "bg-slate-50 text-slate-600 group-hover:bg-primary/10 group-hover:text-primary"
                  }`}>
                    <FiMapPin className="text-xl" />
                  </div>

                  {/* Branch Title */}
                  <h4 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors duration-200">
                    {branch.title}
                  </h4>

                  {/* Address */}
                  <p className="text-slate-600 text-sm leading-relaxed antialiased min-h-[48px]">
                    {branch.address}
                  </p>
                </div>

                {/* Interactive Map Button */}
                <div className="mt-6 pt-5 border-t border-slate-50">
                  <button
                    onClick={() => handleGetDirections(branch.address)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-slate-50 text-slate-600 text-xs font-bold uppercase tracking-wider py-3 px-4 rounded-xl transition-all duration-200 hover:bg-primary hover:text-white group-hover:shadow-sm"
                  >
                    <FiCompass className="text-sm animate-spin-slow group-hover:animate-bounce" />
                    Get Directions
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}