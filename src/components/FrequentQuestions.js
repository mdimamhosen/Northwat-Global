import React, { useState } from "react";
import Title from "../utils/Title";
import image1 from "../assets/image 18.png";

const faqs = [
  {
    question: "What are your office hours?",
    answer:
      "Our office hours are Monday through Friday from 8:00 AM to 6:00 PM. We are closed on weekends. If you need assistance outside these hours, please check our website for emergency contact information.",
  },
  {
    question: "How can I make an appointment?",
    answer:
      "Appointments can be scheduled through our online booking system on our website, by calling our office directly, or by visiting us in person during office hours.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "Yes, we accept a wide range of insurance plans. To ensure we accept your specific plan, please contact our office for verification and detailed information.",
  },
  {
    question: "What should I bring to my appointment?",
    answer:
      "Please bring your insurance card, a valid ID, and any medical records relevant to your visit. This helps us provide you with the best possible care.",
  },
];

const FrequentQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-16">
      <div className="w-11/12 mx-auto pb-16 ">
        <div className="w-11/12  mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="order-2 lg:order-1">
            <div className="space-y-4">
              <Title subheading={"Study in"} heading={"USA FAQ's"} />
              <p className="text-lg text-gray-700">
                Welcome to our FAQ section! Here, we address some of the most
                common questions related to our services and operations. If you
                have additional questions, feel free to contact us for more
                information.
              </p>
            </div>
            <div className="mt-8 space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl cursor-pointer shadow-md transition duration-300 ease-in-out"
                  onClick={() => handleToggle(index)}
                >
                  <h3 className="text-lg font-semibold p-4 bg-[#fffff5]">
                    {faq.question}
                  </h3>
                  {openIndex === index && (
                    <p className="mt-2 text-gray-600 p-4 bg-white">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center order-1 lg:order-2">
            <img
              src={image1}
              alt="FAQ illustration"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentQuestions;
