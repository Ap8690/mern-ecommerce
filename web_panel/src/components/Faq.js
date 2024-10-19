import React, { useState } from "react"

// FAQItem Component (for individual FAQ)
const FAQItem = ({index, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleFAQ = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`bg-white mb-4 p-3 rounded-xl`}>
      <button
        onClick={toggleFAQ}
        className="flex items-center justify-between w-full text-left focus:outline-none gap-1"
      >
        <div className="flex">
          <span className="mr-2 text-xl mt-[1px] font-medium">{index + 1}.</span>
          <h4 className="font-medium text-lg">{question}</h4>
        </div>
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && <p className="mt-4 text-gray-600">{answer}</p>}
    </div>
  )
}

// FAQList Component (main FAQ section)
const FAQList = () => {
  const faqData = [
    {
      question:
        "What is the difference between a Second-Hand and Refurbished phone?",
      answer:
        "Refurbished Phone: Also called PhonePro Mobile, it is sent through a Technical Refurbish Center. These phones undergo 47-point quality checks and come with a 6-month free warranty and a 15-day refund policy. Second-Hand Phone: Simply a used phone without any warranty, refund, or replacement options.",
    },
    {
      question: "What quality checks are performed on refurbished phones?",
      answer:
        "Refurbished phones go through a comprehensive 47-point quality check process to ensure they meet high standards of functionality and appearance before being sold.",
    },
    {
      question: "How do I avail of a warranty on my device?",
      answer:
        "To avail of the warranty, please contact us at warranty@refitglobal.com or support@refitglobal.com. You can also call us at +91-9355177199. Refit Global will repair, replace, or refund your product within 6 months of receipt if it turns out to be defective within the warranty period.",
    },
    {
      question: "Is there any device replacement policy?",
      answer:
        "Easy refund/replacement of device within 3 days of delivery. In case the phone you want is out of stock, you can choose to buy another one or claim a full refund. For a successful replacement, keep the device's original packaging, MRP tag, and accessories with it.",
    },
    {
      question: "Can I return a refurbished phone if I am not satisfied?",
      answer:
        "Yes, you can return a refurbished phone within 3 days of delivery if you are not satisfied. Ensure you keep the original packaging, MRP tag, and accessories to process the return smoothly.",
    },
  ]

  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-6 text-center md:pr-5">
          Have a question? We are here to help.
        </h2>

        <div className="max-w-2xl bg-[#eeeeee] p-10 rounded-xl">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            index={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
        </div>
      </div>
    </section>
  )
}

export default FAQList
