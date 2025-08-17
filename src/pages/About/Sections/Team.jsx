import PageHeader from "../../../components/PageHeader";
import Title from "../../../components/Title";


import { teamMembers } from "../../../constants";

export default function Team() {
  return (
   <>
   <PageHeader title="Our Doctors"/>
    <div className="bg-background">
      <div className="min-h-[470px] w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-24 py-16 relative">
        <div className="flex justify-center mb-6">
          {/* <Title subtitle="Meet Our Experts" title="Our Dental Team" align="center" /> */}
        </div>

        {/* Flex container instead of grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden text-center w-full sm:w-[300px] md:w-[320px]"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold text-primary">{member.name}</h4>
                <ul className="mt-2 space-y-1 text-sm text-dark">
                  {member.designations.map((title, i) => (
                    <li key={i}>{title}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
   </>
  );
}
