import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "What is Choice Home Offers?",
        answer:
            "Choice Home Offers makes it easier for homeowners to explore professional home services in one place. Choose the service you need, provide a few details, and get started with a free quote request.",
    },
    {
        question: "What home services are available?",
        answer:
            "Choice Home Offers offers a wide range of home services, including roofing, gutters, HVAC, plumbing, electrical, flooring, bathroom remodeling, landscaping, pest control, appliance repair, and many more.",
    },
    {
        question: "Is it free to request a quote?",
        answer:
            "Yes. Getting started with a quote request is free. Simply choose your service and provide a few basic details about your project.",
    },
    {
        question: "Do I have to commit to a service?",
        answer:
            "No. Requesting a quote does not mean you are committing to a service. You can explore your options and decide what works best for your home.",
    },
    {
        question: "How does the process work?",
        answer:
            "It's simple: choose the home service you need, tell us a little about your project, and submit your information. From there, you can take the next step toward getting the help you need.",
    },
    {
        question: "Are services available nationwide?",
        answer:
            "Choice Home Offers is designed to help homeowners explore home service options across the country. Availability can vary depending on the service and your location.",
    },
    {
        question: "How long does it take to request a quote?",
        answer:
            "It only takes a few minutes to provide the basic information needed to get started. The exact timing for the next step can vary depending on your service and location.",
    },
    {
        question: "What information do I need to provide?",
        answer:
            "You'll generally need to select a service and provide basic contact and location information, such as your name, ZIP code, email, and phone number.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section
            id="faq"
            className="relative overflow-hidden bg-[#FFFFFF] py-20 sm:py-24 lg:py-28"
        >
            {/* Background Decorations */}
            <div className="pointer-events-none absolute -left-40 top-10 h-[380px] w-[380px] rounded-full bg-[#E1E7ED]/70 blur-3xl" />

            <div className="pointer-events-none absolute -right-40 bottom-0 h-[380px] w-[380px] rounded-full bg-[#E1E7ED]/60 blur-3xl" />

            <div className="relative mx-auto max-w-[1000px] px-6 sm:px-10">

                {/* Header */}
                <div className="mx-auto max-w-2xl text-center">

                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E1E7ED] bg-[#F0F5F8] px-4 py-2">
                        <HelpCircle
                            size={14}
                            className="text-[#008F89]"
                        />

                        <span className="text-[11px] font-extrabold uppercase tracking-[1.6px] text-[#008F89]">
                            Frequently Asked Questions
                        </span>
                    </div>

                    <h2 className="font-serif text-[40px] font-semibold leading-[1.08] tracking-[-1.5px] text-[#12345C] sm:text-[48px]">
                        Questions?
                        <br />

                        <span className="text-[#008F89]">
                            We've got answers.
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[#657A94] sm:text-[16px]">
                        Everything you need to know about getting started with
                        Choice Home Offers.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="mt-14 space-y-3">

                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className={`overflow-hidden rounded-[18px] border bg-white transition-all duration-300 ${isOpen
                                        ? "border-[#008F89] shadow-[0_10px_30px_rgba(45,35,25,0.07)]"
                                        : "border-[#E1E7ED] shadow-[0_4px_15px_rgba(45,35,25,0.025)] hover:border-[#E1E7ED]"
                                    }`}
                            >
                                <button
                                    type="button"
                                    onClick={() => toggleFAQ(index)}
                                    aria-expanded={isOpen}
                                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7 sm:py-6"
                                >
                                    <div className="flex items-center gap-4">

                                        <span
                                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${isOpen
                                                    ? "bg-[#008F89] text-white"
                                                    : "bg-[#F0F5F8] text-[#008F89]"
                                                }`}
                                        >
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <span
                                            className={`text-[15px] font-bold leading-6 sm:text-[16px] ${isOpen
                                                    ? "text-[#008F89]"
                                                    : "text-[#12345C]"
                                                }`}
                                        >
                                            {faq.question}
                                        </span>
                                    </div>

                                    <span
                                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isOpen
                                                ? "bg-[#008F89] text-white"
                                                : "bg-[#F0F5F8] text-[#657A94]"
                                            }`}
                                    >
                                        <ChevronDown
                                            size={18}
                                            className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                                }`}
                                        />
                                    </span>
                                </button>

                                {/* Answer */}
                                <div
                                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${isOpen
                                            ? "grid-rows-[1fr] opacity-100"
                                            : "grid-rows-[0fr] opacity-0"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="border-t border-[#E1E7ED] px-5 pb-6 pt-5 pl-[68px] sm:px-7 sm:pb-7 sm:pl-[83px]">
                                            <p className="max-w-[760px] text-[14px] leading-7 text-[#657A94] sm:text-[15px]">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 text-center">
                    <p className="text-sm text-[#657A94]">
                        Still have questions?
                    </p>

                    <a
                        href="#quote"
                        className="mt-3 inline-flex items-center rounded-full border border-[#E1E7ED] bg-white px-6 py-3 text-sm font-bold text-[#12345C] transition-all duration-300 hover:border-[#008F89] hover:text-[#008F89]"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </section>
    );
}