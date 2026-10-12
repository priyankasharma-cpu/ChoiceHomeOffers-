import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { services } from "../data/services";
import ServiceCard from "./ServiceCard";

export default function Services() {
    const [showAll, setShowAll] = useState(false);

    // Initially show only first 20 services
    const visibleServices = showAll
        ? services
        : services.slice(0, 20);

    return (
        <section
            id="services"
            className="relative overflow-hidden bg-[#F0F5F8] py-20 sm:py-24 lg:py-28"
        >
            {/* Background Decoration */}
            <div className="pointer-events-none absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-[#E1E7ED] opacity-50 blur-3xl" />

            <div className="relative mx-auto max-w-[1320px] px-6 sm:px-10 lg:px-14">

                {/* ================= SECTION HEADER ================= */}
                <div className="mx-auto max-w-2xl text-center">

                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E1E7ED] bg-[#FFFFFF] px-4 py-2">
                        <span className="h-2 w-2 rounded-full bg-[#008F89]" />

                        <span className="text-[11px] font-bold uppercase tracking-[1.5px] text-[#008F89]">
                            Our Home Services
                        </span>
                    </div>

                    <h2 className="font-serif text-[40px] font-bold leading-[1.08] tracking-[-1.5px] text-[#12345C] sm:text-[48px]">
                        Everything your home
                        <br />
                        <span className="text-[#008F89]">
                            needs, in one place.
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[#657A94] sm:text-[16px]">
                        Choose from our professional home services available
                        nationwide. Find the right service, request a free
                        quote, and get started with confidence.
                    </p>

                </div>


                {/* ================= SERVICES GRID ================= */}
                <div
                    className={`mt-14 grid grid-cols-1 gap-4 transition-all duration-500 sm:grid-cols-2 lg:grid-cols-4`}
                >
                    {visibleServices.map((service) => (
                        <div
                            key={service.id}
                            className="animate-[fadeIn_0.35s_ease-out]"
                        >
                            <ServiceCard service={service} />
                        </div>
                    ))}
                </div>


                {/* ================= VIEW ALL BUTTON ================= */}
                <div className="mt-12 flex justify-center">

                    <button
                        type="button"
                        onClick={() => setShowAll((prev) => !prev)}
                        className="group inline-flex items-center gap-3 rounded-full border-2 border-[#E1E7ED] bg-[#FFFFFF] px-7 py-3.5 text-[14px] font-bold text-[#12345C] shadow-[0_5px_18px_rgba(45,35,25,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#008F89] hover:text-[#008F89] hover:shadow-[0_10px_25px_rgba(45,35,25,0.08)]"
                    >
                        {showAll ? "Show Less" : `View All Services (${services.length})`}

                        {showAll ? (
                            <ChevronDown
                                size={17}
                                className="rotate-180 transition-transform duration-300"
                            />
                        ) : (
                            <ArrowRight
                                size={17}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        )}
                    </button>

                </div>

            </div>
        </section>
    );
}