import { Quote, ArrowRight } from "lucide-react";

const testimonials = [
    {
        name: "Sarah M.",
        location: "Texas",
        service: "Roofing",
        review:
            "The process was incredibly simple. I found the service I needed, requested a quote, and knew exactly what to expect.",
    },
    {
        name: "Michael R.",
        location: "Florida",
        service: "HVAC",
        review:
            "I liked how straightforward everything was. No complicated process and no pressure — just an easy way to get started.",
    },
    {
        name: "Jennifer L.",
        location: "California",
        service: "Bathroom Remodel",
        review:
            "Choice Home Offers made it much easier to explore my options. The whole experience felt professional and convenient.",
    },
];

export default function Testimonials() {
    return (
        <section
            id="reviews"
            className="relative overflow-hidden bg-[#FFFFFF] py-20 sm:py-24 lg:py-28"
        >
            {/* Background Decorations */}
            <div className="pointer-events-none absolute -left-40 top-20 h-[350px] w-[350px] rounded-full bg-[#E1E7ED]/60 blur-3xl" />
            <div className="pointer-events-none absolute -right-40 bottom-10 h-[350px] w-[350px] rounded-full bg-[#E1E7ED]/70 blur-3xl" />

            <div className="relative mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">

                {/* Heading */}
                <div className="mx-auto max-w-2xl text-center">

                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E1E7ED] bg-[#FFFFFF] px-4 py-2">
                        <span className="h-2 w-2 rounded-full bg-[#008F89]" />

                        <span className="text-[11px] font-extrabold uppercase tracking-[1.6px] text-[#008F89]">
                            Homeowner Stories
                        </span>
                    </div>

                    <h2 className="font-serif text-[40px] font-semibold leading-[1.08] tracking-[-1.5px] text-[#12345C] sm:text-[48px]">
                        Homeowners are making
                        <br />

                        <span className="text-[#008F89]">
                            home projects easier.
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[#657A94] sm:text-[16px]">
                        See why homeowners choose a simpler way to explore
                        home services and get started.
                    </p>
                </div>



                {/* Testimonials */}
                <div className="mt-14 grid gap-5 md:grid-cols-3">

                    {testimonials.map((testimonial, index) => (
                        <article
                            key={index}
                            className="group relative flex flex-col rounded-[24px] border border-[#E1E7ED] bg-white p-7 shadow-[0_8px_25px_rgba(45,35,25,0.045)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#008F89] hover:shadow-[0_18px_40px_rgba(45,35,25,0.09)]"
                        >

                            {/* Quote Icon */}
                            <div className="flex items-center justify-between">

                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F0F5F8]">
                                    <Quote
                                        size={20}
                                        className="text-[#008F89]"
                                        fill="currentColor"
                                    />
                                </div>


                            </div>

                            {/* Review */}
                            <p className="mt-7 text-[15px] leading-7 text-[#657A94]">
                                “{testimonial.review}”
                            </p>

                            {/* User */}
                            <div className="mt-7 flex items-center gap-3 border-t border-[#E1E7ED] pt-5">

                                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E1E7ED] text-sm font-extrabold text-[#008F89]">
                                    {testimonial.name.charAt(0)}
                                </div>

                                <div>
                                    <h3 className="text-sm font-bold text-[#12345C]">
                                        {testimonial.name}
                                    </h3>

                                    <p className="mt-0.5 text-xs text-[#657A94]">
                                        {testimonial.location} · {testimonial.service}
                                    </p>
                                </div>
                            </div>

                        </article>
                    ))}

                </div>

                {/* Bottom CTA */}
                <div className="mt-12 flex justify-center">

                    <a
                        href="#quote"
                        className="group inline-flex items-center gap-3 rounded-full bg-[linear-gradient(135deg,#008F89_0%,#005F5B_100%)] px-7 py-4 text-[14px] font-bold text-white shadow-[0_10px_25px_rgba(0, 143, 137,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[linear-gradient(135deg,#007A76_0%,#004D49_100%)] hover:shadow-[0_15px_30px_rgba(0, 143, 137,0.28)]"
                    >
                        Get Your Free Quote

                        <ArrowRight
                            size={18}
                            strokeWidth={2.2}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </a>

                </div>
            </div>
        </section>
    );
}