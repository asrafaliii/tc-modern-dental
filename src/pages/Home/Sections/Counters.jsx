import { GiMirrorMirror, GiHeartInside } from "react-icons/gi";
import { BsStars } from "react-icons/bs";
import { BiHappyBeaming } from "react-icons/bi";
import CountUp from "react-countup";
import Title from "../../../components/Title";

export default function Counters() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat text-white py-20 bg-fixed"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dro6y5qla/image/upload/v1748804474/3dface-2_tapvul.jpg')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/90"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <Title
          subtitle="Trusted by Thousands"
          title="Why Clients Love Dr. Sadia’s Aesthetic Center"
          align="center"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          <Counter icon={<GiMirrorMirror />} end={1200} label="Glowing Clients" />
          <Counter icon={<BsStars />} end={150} label="Advanced Treatments" />
          <Counter icon={<BiHappyBeaming />} end={98} label="Client Satisfaction (%)" />
          <Counter icon={<GiHeartInside />} end={3} label="Years of Excellence" />
        </div>
      </div>
    </div>
  );
}

function Counter({ icon, end, label }) {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="text-4xl text-primary">{icon}</div>
      <h3 className="text-3xl font-bold text-gray-900">
        <CountUp end={end} duration={2.5} separator="," />+
      </h3>
      <p className="text-sm text-gray-800">{label}</p>
    </div>
  );
}
