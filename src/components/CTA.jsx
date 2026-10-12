import {
    ArrowRight,
    Bug,
    CheckCircle2,
    Clock3,
    PhoneCall,
    ShieldCheck,
    Sparkles,
    Wrench,
} from "lucide-react";

export default function CTA() {
    const services = [
        {
            id: "pest-control",
            title: "Pest Control",
            description:
                "Need help with ants, rodents, termites, bed bugs, mosquitoes, or other household pests?",
            phone: "+18889874472",
            displayPhone: "+1 (888) 987-4472",
            href: "/pest-control",
            icon: Bug,
        },
        {
            id: "plumbing",
            title: "Plumbing",
            description:
                "Need help with leaks, clogged drains, pipes, toilets, water heaters, or other plumbing needs?",
            phone: "+18885066168",
            displayPhone: "+1 (888) 506-6168",
            href: "/plumbing",
            icon: Wrench,
        },
    ];

    return (
        <section className="relative overflow-hidden bg-[#F0F5F8] py-20 sm:py-24 lg:py-28">

            {/* ================= BACKGROUND DECOR ================= */}
            <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#E1E7ED]/60 blur-3xl" />

            <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#E1E7ED]/80 blur-3xl" />

            <div className="relative mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-14">

                {/* ================= MAIN CTA WRAPPER ================= */}
                <div
                    className="
                        relative overflow-hidden rounded-[34px]
                        bg-[#081B30]
                        px-6 py-10
                        shadow-[0_30px_80px_rgba(8,27,48,0.25)]
                        sm:px-10 sm:py-12
                        lg:px-14 lg:py-14
                    "
                >

                    {/* Inner Glow */}
                    <div className="pointer-events-none absolute -right-24 -top-24 h-[330px] w-[330px] rounded-full bg-[#008F89]/15 blur-3xl" />

                    <div className="pointer-events-none absolute -bottom-32 -left-20 h-[320px] w-[320px] rounded-full bg-[#008F89]/10 blur-3xl" />

                    {/* Dot Pattern */}
                    <div className="pointer-events-none absolute right-10 top-10 hidden grid-cols-5 gap-3 opacity-20 lg:grid">
                        {Array.from({ length: 20 }).map((_, index) => (
                            <span
                                key={index}
                                className="h-1 w-1 rounded-full bg-white"
                            />
                        ))}
                    </div>

                    <div className="relative">

                        {/* ================= TOP CONTENT ================= */}
                        <div className="mx-auto max-w-[800px] text-center">

                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-4 py-2.5 backdrop-blur-sm">
                                <Sparkles
                                    size={16}
                                    className="text-[#5DE0D5]"
                                />

                                <span className="text-[12px] font-extrabold uppercase tracking-[1.6px] text-[#5DE0D5] sm:text-[13px]">
                                    Choice Home Offers
                                </span>
                            </div>

                            {/* Heading */}
                            <h2 className="mt-6 font-serif text-[36px] font-semibold leading-[1.08] tracking-[-1.4px] text-white sm:text-[46px] lg:text-[52px]">
                                Need help with a pest or
                                <span className="text-[#5DE0D5]">
                                    {" "}plumbing problem?
                                </span>
                            </h2>

                            {/* Description */}
                            <p className="mx-auto mt-5 max-w-[690px] text-[16px] leading-8 text-[#D6E2ED] sm:text-[17px]">
                                Choose the service you need and call the
                                dedicated Choice Home Offers service line to discuss
                                your household service request.
                            </p>

                        </div>

                        {/* ================= SERVICE CARDS ================= */}
                        <div className="mx-auto mt-10 grid max-w-[1000px] gap-5 md:grid-cols-2">

                            {services.map((service) => {
                                const Icon = service.icon;

                                return (
                                    <div
                                        key={service.id}
                                        className="
                                            group relative overflow-hidden
                                            rounded-[25px]
                                            border border-white/15
                                            bg-[#102A43]
                                            p-6
                                            shadow-[0_12px_30px_rgba(0,0,0,0.12)]
                                            transition-all duration-300
                                            hover:-translate-y-1
                                            hover:border-[#5DE0D5]/50
                                            hover:bg-[#143450]
                                            hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)]
                                            sm:p-7
                                        "
                                    >

                                        {/* Card Glow */}
                                        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#008F89]/0 blur-3xl transition-all duration-500 group-hover:bg-[#008F89]/15" />

                                        <div className="relative">

                                            {/* Icon + Label */}
                                            <div className="flex items-center justify-between gap-4">

                                                <div className="flex items-center gap-3">

                                                    <div
                                                        className="
                                                            flex h-12 w-12 items-center
                                                            justify-center rounded-[15px]
                                                            bg-[#008F89] text-white
                                                            shadow-[0_10px_25px_rgba(0,143,137,0.25)]
                                                        "
                                                    >
                                                        <Icon
                                                            size={22}
                                                            strokeWidth={2.2}
                                                        />
                                                    </div>

                                                    <div>
                                                        <p className="text-[12px] font-bold uppercase tracking-[1.4px] text-[#5DE0D5]">
                                                            Service Line
                                                        </p>

                                                        <h3 className="mt-1 text-[22px] font-extrabold text-white">
                                                            {service.title}
                                                        </h3>
                                                    </div>

                                                </div>

                                                <CheckCircle2
                                                    size={21}
                                                    className="text-[#5DE0D5]"
                                                />

                                            </div>

                                            {/* Description */}
                                            <p className="mt-5 min-h-[52px] text-[15px] leading-7 text-[#D6E2ED]">
                                                {service.description}
                                            </p>

                                            {/* Phone Area */}
                                            <div className="mt-5 rounded-[17px] border border-white/15 bg-black/20 p-4">

                                                <p className="text-[12px] font-bold uppercase tracking-[1.3px] text-[#D6E2ED]">
                                                    Call {service.title}
                                                </p>

                                                <a
                                                    href={`tel:${service.phone}`}
                                                    aria-label={`Call ${service.title} at ${service.displayPhone}`}
                                                    className="
                                                        mt-1.5 inline-flex items-center gap-2
                                                        text-[21px] font-extrabold
                                                        tracking-[-0.4px] text-white
                                                        transition-colors duration-300
                                                        hover:text-[#5DE0D5]
                                                        sm:text-[23px]
                                                    "
                                                >
                                                    <PhoneCall
                                                        size={19}
                                                        className="text-[#5DE0D5]"
                                                    />

                                                    {service.displayPhone}
                                                </a>

                                            </div>

                                            {/* Buttons */}
                                            <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto]">

                                                {/* CALL BUTTON */}
                                                <a
                                                    href={`tel:${service.phone}`}
                                                    className="
                                                        group/call inline-flex min-h-[52px]
                                                        items-center justify-center gap-2.5
                                                        rounded-full
                                                        bg-[linear-gradient(135deg,#008F89_0%,#005F5B_100%)]
                                                        px-5 text-[15px] font-extrabold
                                                        text-white
                                                        shadow-[0_10px_25px_rgba(0,143,137,0.24)]
                                                        transition-all duration-300
                                                        hover:-translate-y-0.5
                                                        hover:bg-[linear-gradient(135deg,#007A76_0%,#004D49_100%)]
                                                        hover:shadow-[0_14px_30px_rgba(0,143,137,0.32)]
                                                    "
                                                >
                                                    <PhoneCall
                                                        size={17}
                                                        strokeWidth={2.4}
                                                    />

                                                    Call Now

                                                    <ArrowRight
                                                        size={16}
                                                        className="transition-transform duration-300 group-hover/call:translate-x-1"
                                                    />
                                                </a>

                                                {/* SERVICE PAGE */}
                                                <a
                                                    href={service.href}
                                                    className="
                                                        inline-flex min-h-[52px]
                                                        items-center justify-center
                                                        rounded-full
                                                        border border-white/25
                                                        bg-white/[0.08]
                                                        px-5 text-[15px] font-bold
                                                        text-white
                                                        transition-all duration-300
                                                        hover:border-white/40
                                                        hover:bg-white/[0.15]
                                                    "
                                                >
                                                    View Services
                                                </a>

                                            </div>

                                        </div>
                                    </div>
                                );
                            })}

                        </div>

                        {/* ================= BOTTOM TRUST BAR ================= */}
                        <div className="mx-auto mt-8 flex max-w-[850px] flex-wrap items-center justify-center gap-x-7 gap-y-3 border-t border-white/20 pt-7">

                            <div className="flex items-center gap-2 text-[14px] font-semibold text-[#D6E2ED]">
                                <ShieldCheck
                                    size={17}
                                    className="text-[#5DE0D5]"
                                />
                                Dedicated Service Lines
                            </div>

                            <div className="hidden h-4 w-px bg-white/20 sm:block" />

                            <div className="flex items-center gap-2 text-[14px] font-semibold text-[#D6E2ED]">
                                <PhoneCall
                                    size={16}
                                    className="text-[#5DE0D5]"
                                />
                                Call for Service Help
                            </div>

                            <div className="hidden h-4 w-px bg-white/20 sm:block" />

                            <div className="flex items-center gap-2 text-[14px] font-semibold text-[#D6E2ED]">
                                <Clock3
                                    size={17}
                                    className="text-[#5DE0D5]"
                                />
                                Simple Phone Connection
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}