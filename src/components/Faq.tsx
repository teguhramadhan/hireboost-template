"use client";

import FaqItem from "@/components/utils/FaqItem";

export default function Faq() {
  const faqList = [
    {
      question: "Is it really free to try?",
      answer:
        "Yes! You can try the basic features completely free without adding a credit card.",
    },
    {
      question: "Can I edit my resume later?",
      answer:
        "Absolutely. You can come back anytime to update or revise your resume.",
    },
    {
      question: "Is the resume ATS-friendly?",
      answer:
        "Yes, our templates are optimized to work well with Applicant Tracking Systems.",
    },
    {
      question: "Can I use it on mobile?",
      answer:
        "Of course! Our app is fully responsive and works great on mobile devices.",
    },
  ];

  return (
    <section className="h-screen flex justify-center items-center bg-white py-16 px-4 md:px-8">
      <div className="w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          ❓ Questions? We’ve Got Answers
        </h2>
        <div className="w-full text-left">
          {faqList.map((faq, idx) => (
            <FaqItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
