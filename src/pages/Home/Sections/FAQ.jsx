import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import Title from '../../../components/Title';

const faqs = [
  {
    question: "What services does Modern Dental Center offer?",
    answer:
      "We provide comprehensive dental care including Cosmetic Dentistry, Orthodontics (Braces & Aligners), Dental Implants, Root Canal Treatment, Pediatric Dentistry, Oral & Maxillofacial Surgery, and Preventive Dentistry.",
  },
  {
    question: "Do you offer Cosmetic Dentistry?",
    answer:
      "Yes, we provide advanced cosmetic dentistry services including teeth whitening, veneers, smile design, and aesthetic restorations.",
  },
  {
    question: "Do you treat children?",
    answer:
      "Yes, we have specialized pediatric dental services ensuring a comfortable and friendly environment for children.",
  },
  {
    question: "Is prior booking required?",
    answer:
      "Yes, we recommend booking appointments in advance to ensure your preferred time slot with our consultants.",
  },
  {
    question: "Do you provide emergency dental care?",
    answer:
      "Yes, we provide urgent dental care for toothaches, broken teeth, swelling, and other emergencies.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "Appointments can be booked by calling our helpline 01722622226, Reception 01920643293, or via WhatsApp 01763-073983.",
  },
  {
    question: "Which branches do you have?",
    answer:
      "We have branches in Uttar Badda (Main Branch), Middle Badda, and Satarkul Road, Dhaka.",
  },
  {
    question: "Do you provide Dental Implant services?",
    answer:
      "Yes, we provide advanced dental implant treatments by highly trained consultants with international certifications.",
  },
  {
    question: "Are consultations free?",
    answer:
      "Consultation fees depend on the doctor, but sometimes we provide free consultations during special campaigns.",
  },
  {
    question: "Is teeth whitening safe?",
    answer:
      "Yes, our teeth whitening procedures are safe, FDA-approved, and performed by professional dentists for the best results.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-24 py-16">
      <div className="text-center mb-12">
        <Title
          subtitle="Everything You Need to Know"
          title="Dental FAQs"
          align="center"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {faqs.map((item, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <button
              onClick={() => toggle(index)}
              className="flex items-center justify-between w-full text-left text-gray-800 font-medium text-lg focus:outline-none"
            >
              {item.question}
              <FiChevronDown
                className={`h-5 w-5 transform transition-transform duration-300 ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            {activeIndex === index && (
              <p className="mt-2 text-sm text-gray-600">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
