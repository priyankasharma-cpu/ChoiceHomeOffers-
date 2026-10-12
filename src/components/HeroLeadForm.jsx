
import {
    ArrowRight,
    Bug,
    CheckCircle2,
    PhoneCall,
    PhoneIncoming,
    ShieldCheck,
    Sparkles,
    Wrench,
} from "lucide-react";

const services = [
    {
        name: "Pest Control",
        phone: "+18889874472",
        displayPhone: "+1 (888) 987-4472",
        icon: Bug,
    },
    {
        name: "Plumbing",
        phone: "+18885066168",
        displayPhone: "+1 (888) 506-6168",
        icon: Wrench,
    },
];

const benefits = [
    "Choose the service that fits your needs",
    "Dedicated Pest Control and Plumbing phone lines",
    "Simple and straightforward connection",
];

export default function HeroLeadForm() {
    return (
        <section
            id="quote"
            className="relative overflow-hidden bg-[#F0F5F8] py-16 sm:py-20 lg:py-28"
        >
            {/* Background decorations */}
            <div className="pointer-events-none absolute -left-40 top-20 h-[380px] w-[380px] rounded-full bg-[#008F89]/[0.07] blur-3xl" />
            <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#12345C]/[0.05] blur-3xl" />

            <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
                <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
                    {/* LEFT CONTENT */}
                    <div className="relative z-10">
                        {/* Eyebrow */}
                        <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#CDE4E2] bg-white px-4 py-2.5 shadow-sm">
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#008F89]">
                                <Sparkles size={15} className="text-white" />
                            </span>
                            <span className="text-[12px] font-extrabold uppercase tracking-[1.2px] text-[#007A76] sm:text-[13px]">
                                Find Home Service Help
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="max-w-[650px] font-serif text-[40px] font-bold leading-[1.1] tracking-[-1.5px] text-[#12345C] sm:text-[52px] lg:text-[62px]">
                            Ready to take care of
                            <span className="block text-[#008F89]">
                                your home?
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="mt-6 max-w-[560px] text-[16px] leading-[1.85] text-[#43566C] sm:text-[18px]">
                            Need help with a pest problem or plumbing issue?
                            Explore your service options and connect through
                            the dedicated Choice Home Offers phone lines.
                        </p>

                        {/* Benefits */}
                        <div className="mt-8 space-y-4">
                            {benefits.map((benefit) => (
                                <div key={benefit} className="flex items-center gap-3">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E0F3F0]">
                                        <CheckCircle2
                                            size={20}
                                            className="text-[#008F89]"
                                        />
                                    </div>
                                    <span className="text-[15px] font-semibold leading-6 text-[#12345C] sm:text-[16px]">
                                        {benefit}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Image */}
                        <div className="relative mt-10 overflow-hidden rounded-[26px] border-[5px] border-white shadow-[0_25px_65px_rgba(18,52,92,0.16)]">
                            <div className="relative h-[280px] sm:h-[350px] lg:h-[390px]">
                                <img
                                    src="/images/homepageaection.png"
                                    alt="Professional home service team"
                                    loading="lazy"
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#081B30]/60 via-transparent to-transparent" />
                            </div>

                            {/* Floating image label */}
                            <div className="absolute bottom-5 left-5 right-5 flex max-w-[315px] items-center gap-3 rounded-2xl border border-white/40 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-md sm:right-auto">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E0F3F0]">
                                    <ShieldCheck size={22} className="text-[#008F89]" />
                                </div>
                                <div>
                                    <p className="text-[14px] font-extrabold text-[#12345C]">
                                        Home Service Assistance
                                    </p>
                                    <p className="mt-0.5 text-[12px] text-[#52657B]">
                                        A simpler way to get started
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CONTACT CARD */}
                    <div className="relative z-10">
                        <div className="pointer-events-none absolute -inset-4 rounded-[36px] bg-[#008F89]/10 blur-3xl" />

                        <div className="relative overflow-hidden rounded-[30px] border border-[#DCE6EC] bg-white p-6 shadow-[0_28px_75px_rgba(18,52,92,0.14)] sm:p-9 lg:p-10">
                            {/* Top accent */}
                            <div className="absolute inset-x-0 top-0 h-[5px] bg-gradient-to-r from-[#008F89] via-[#36C8BF] to-[#12345C]" />

                            <div className="flex items-center justify-between gap-3">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E0F3F0]">
                                    <PhoneIncoming
                                        size={27}
                                        className="text-[#008F89]"
                                    />
                                </div>
                                <span className="rounded-full border border-[#CDE4E2] bg-[#F0FAF8] px-3 py-2 text-[12px] font-bold text-[#007A76]">
                                    Get Connected
                                </span>
                            </div>

                            <p className="mt-7 text-[12px] font-extrabold uppercase tracking-[1.5px] text-[#007A76]">
                                We're Ready To Help
                            </p>

                            <h3 className="mt-3 text-[31px] font-extrabold leading-[1.18] tracking-[-1px] text-[#12345C] sm:text-[37px]">
                                Find the right
                                <span className="block text-[#008F89]">
                                    service for your home.
                                </span>
                            </h3>

                            <p className="mt-4 text-[15px] leading-7 text-[#52657B] sm:text-[16px]">
                                Select Pest Control or Plumbing to call the
                                dedicated service line, or contact us with
                                your service request.
                            </p>

                            {/* Service phone cards */}
                            <div className="mt-7 space-y-3">
                                {services.map((service) => {
                                    const Icon = service.icon;

                                    return (
                                        <a
                                            key={service.name}
                                            href={`tel:${service.phone}`}
                                            aria-label={`Call ${service.name} at ${service.displayPhone}`}
                                            className="group flex items-center gap-3 rounded-2xl border border-[#DCE6EC] bg-[#F7FAFC] p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#008F89] hover:bg-[#EFFAF8] hover:shadow-[0_10px_25px_rgba(18,52,92,0.08)]"
                                        >
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#008F89] to-[#005F5B] text-white">
                                                <Icon size={21} strokeWidth={2.2} />
                                            </div>

                                            <div className="min-w-0 flex-1">
                                                <p className="text-[13px] font-bold text-[#52657B]">
                                                    {service.name}
                                                </p>
                                                <p className="mt-0.5 text-[16px] font-extrabold text-[#12345C] sm:text-[18px]">
                                                    {service.displayPhone}
                                                </p>
                                            </div>

                                            <PhoneCall
                                                size={20}
                                                className="shrink-0 text-[#008F89] transition-transform duration-300 group-hover:scale-110"
                                            />
                                        </a>
                                    );
                                })}
                            </div>

                            {/* Contact CTA */}
                            <a
                                href="/contact"
                                className="group mt-6 flex min-h-[56px] w-full items-center justify-center gap-3 rounded-xl bg-[linear-gradient(135deg,#008F89_0%,#005F5B_100%)] px-5 text-[16px] font-extrabold text-white shadow-[0_12px_25px_rgba(0,143,137,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(0,143,137,0.30)]"
                            >
                                Contact Us
                                <ArrowRight
                                    size={19}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </a>

                            {/* Bottom note */}
                            <div className="mt-6 flex items-start justify-center gap-2 border-t border-[#E1E7ED] pt-5">
                                <ShieldCheck
                                    size={17}
                                    className="mt-0.5 shrink-0 text-[#008F89]"
                                />
                                <p className="text-center text-[13px] leading-5 text-[#657A94]">
                                    Choose a service and call its dedicated line
                                    for assistance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
