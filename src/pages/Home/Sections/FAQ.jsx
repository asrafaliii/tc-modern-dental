import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import Title from '../../../components/Title';

const faqs = [
  {
    question: "What services does Dr. Sadia’s Advanced Aesthetic & Laser Center offer?",
    answer:
      "We offer a wide range of aesthetic and laser treatments including HydraFacials, laser hair removal, PRP therapy, carbon laser facials, chemical peels, anti-aging solutions, acne treatments, and more.",
  },
  {
    question: "What is the most popular treatment?",
    answer:
      "Our most requested treatments include HydraFacial, laser hair removal, PRP therapy, and carbon laser facials for their effectiveness and visible results.",
  },
  {
    question: "Do you treat male clients?",
    answer:
      "Yes, we provide services for both men and women. All treatments are tailored to the unique skin needs of each client.",
  },
  {
    question: "Is prior booking required?",
    answer:
      "Yes, we encourage clients to book appointments in advance for the best experience and availability.",
  },
  {
    question: "Do you offer free consultations?",
    answer:
      "We provide free consultations during special occasions or campaigns. Otherwise, our consultation fee is ৳1,479.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "Appointments can be booked by calling us at +880 1776-895468 or messaging us on Facebook or Instagram.",
  },
  {
    question: "What skin types do you treat?",
    answer:
      "We treat all skin types, including sensitive, acne-prone, pigmented, and aging skin. Our treatments are customized to your needs.",
  },
  {
    question: "Is laser hair removal permanent?",
    answer:
      "Laser hair removal provides long-term hair reduction. Multiple sessions are needed for optimal results, though it's not 100% permanent.",
  },
  {
    question: "Is there any downtime after treatments?",
    answer:
      "Most treatments are non-invasive with little to no downtime. Detailed post-care instructions are provided after each session.",
  },
  {
    question: "Does laser treatment cause cancer?",
    answer:
      "No, laser treatments do not cause cancer. We use FDA-approved devices that are safe for cosmetic use and affect only the skin's surface.",
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
          title="Frequently Asked Questions"
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
                className={`h-5 w-5 transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
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
