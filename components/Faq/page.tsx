"use client";
import React from "react";

const Faq = () => {
  const faqs = [
    {
      question: "What service do you offer?",
      answer:
        "This app allows users to share honest reviews about companies they’ve worked with — both positive and negative — helping others make informed decisions.",
    },
    {
      question: "How do i get started?",
      answer:
        "Anyone who has worked with or interacted with a company can submit a review. We encourage genuine experiences from freelancers, employees, or clients.",
    },
    {
      question: "Can i customize my service bundle?",
      answer:
        "While we do not verify every review manually, our moderation system and reporting options help maintain authenticity and flag suspicious content.",
    },
    {
      question: "Do you offer ongoing offer?",
      answer:
        "Yes, you can edit or remove your review anytime by logging into your account and navigating to your review history.",
    },
    {
      question: "Do you offer free consultations",
      answer:
        "Yes, the platform is completely free for users to browse, submit reviews, and explore company insights.",
    },
  ];

  return (
    <div>
      {" "}
      <div className="lg:px-0 px-2">
        <div className="lg:pb-10 lg:pt-2">
          <div>
            <div className="text-center lg:my-20 my-10">
              <h4 className="lg:text-lg text-base font-medium text-[#295c51]">
                Our Services
              </h4>
              <h2 className="lg:text-5xl text-3xl font-semibold lg:my-4 my-2">
                <span className="text-[#295c51]">Questions?</span>
                {" We're"} glad you asked
              </h2>
              <p className="lg:text-lg text-sm text-[#69655b] lg:w-[450px] mx-auto">
                {"  Here's"} a little more about how we operate. Got a more
                specific question? Feel free to get in touch.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto my-5 lg:my-10 space-y-4">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="collapse collapse-arrow bg-[#f2f6f5] rounded-lg"
              >
                <input type="checkbox" />
                <div className="collapse-title text-md  font-medium">
                  {item.question}
                </div>
                <div className="collapse-content">
                  <p className="text-sm text-gray-600">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
