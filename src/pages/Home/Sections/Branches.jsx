import Title from "../../../components/Title";
import { FiMapPin } from "react-icons/fi";

export default function Branches() {
  const branches = [
    {
      id: 1,
      title: "Uttar Badda Main Branch",
      address: "Uttar Badda, Shadhinota Sarani Road, Behind A.M.Z Hospital, Dhaka-1212.",
    },
    {
      id: 2,
      title: "Middle Badda Branch",
      address: "640 Middle Badda Bazar Road, Dhaka-1212.",
    },
    {
      id: 3,
      title: "Satarkul Road Branch",
      address: "Satarkul Road, Near Uttar Badda Bazar, Dhaka-1212.",
    },
  ];

  return (
    <section className="bg-background py-16 sm:px-6 lg:px-24">
      <div className="max-w-screen-xl mx-auto">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <Title
            subtitle="Our Locations"
            title="Modern Dental Center Branches"
            align="center"
          />
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch) => (
            <div
              key={branch.id}
              className="bg-white rounded-xl shadow-md p-6 text-center flex flex-col items-center"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4">
                <FiMapPin className="text-primary text-2xl" />
              </div>
              <h4 className="text-lg font-semibold text-primary mb-2">
                {branch.title}
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                {branch.address}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
