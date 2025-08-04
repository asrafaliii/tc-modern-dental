import Title from "../../../components/Title";

const teamMembers = [
  {
    name: "Dr. Suraiya Farjana Mithila",
    designations: ["BDS (DU)", "PGT (OMS) (DDC), BSMMU", "PGT (Conservative Dentistry & Endodontics) (DDC)", "Lecturer (Conservative Dentistry & Endodontics)(PDCH)", "Chief Consultant (Care N’ Cure Dental)" ,"BMDC Reg. No: 6530"],
    image:
      "https://res.cloudinary.com/dro6y5qla/image/upload/v1747629644/team1_e6yqmb.png",
  },
  // {
  //   name: "Dr. Fatema Farhana Shathi",
  //   designations: ["B.D.S (DU), M.D.S, Ph.D", "Trained in Dental Implant", "Consultant, Oral & Maxillofacial Surgeon", "BMDC Reg. No: 5731"],
  //   image:
  //     "https://res.cloudinary.com/dro6y5qla/image/upload/v1747629644/team2_o1jrin.png",
  // },
  {
    name: "Sultana Yeasmin (Misty)",
    designations: ["Clinic Assistant"],
    image:
      "https://res.cloudinary.com/dro6y5qla/image/upload/v1747731225/team_qxg4bf.png",
  },
  {
    name: "Md. Kajol Ashrafi",
    designations: ["Clinic Assistant"],
    image:
      "https://res.cloudinary.com/dro6y5qla/image/upload/v1747731225/team4_kzszrb.png",
  },
];

export default function Team() {
  return (
    <div className="bg-background">
      <div className="min-h-[470px] w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-24 py-16 relative">
        <div className="flex justify-center mb-6">
          <Title subtitle="Meet Our Experts" title="Our Dental Team" align="center" />
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
  );
}
