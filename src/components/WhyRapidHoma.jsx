import {
    ArrowRight,
    BadgeCheck,
    Bug,
    CheckCircle2,
    PhoneCall,
    ShieldCheck,
    Wrench,
} from "lucide-react";


/* =========================================================
   SERVICE PHONE NUMBERS
========================================================= */

const PEST_PHONE = "+18889874472";
const PEST_DISPLAY_PHONE = "+1 (888) 987-4472";

const PLUMBING_PHONE = "+18885066168";
const PLUMBING_DISPLAY_PHONE = "+1 (888) 506-6168";


/* =========================================================
   BENEFITS
========================================================= */

const benefits = [
    {
        icon: Bug,
        title: "Pest Control Options",
        description:
            "Explore help for ants, rodents, termites, bed bugs, mosquitoes, and other common household pest problems.",
    },
    {
        icon: Wrench,
        title: "Plumbing Services",
        description:
            "Find help for leaks, clogged drains, pipes, toilets, water heaters, fixtures, and other plumbing needs.",
    },
    {
        icon: PhoneCall,
        title: "Dedicated Service Lines",
        description:
            "Pest Control and Plumbing each have a dedicated phone number, making it easy to call the service you need.",
    },
    {
        icon: BadgeCheck,
        title: "Simple Service Selection",
        description:
            "Choose your service, review the available options, and connect by phone without a complicated process.",
    },
    {
        icon: CheckCircle2,
        title: "Clear Service Categories",
        description:
            "Service options are organized by common household needs so you can quickly find the type of help you're looking for.",
    },
    {
        icon: ShieldCheck,
        title: "Easy to Get Started",
        description:
            "Once you find the right service, use the dedicated service line to discuss your Pest Control or Plumbing request.",
    },
];


export default function WhyRapidHoma() {
    return (
        <section
            id="why-us"
            className="relative overflow-hidden bg-[#F0F5F8] py-20 sm:py-24 lg:py-28"
        >

            {/* =====================================================
                BACKGROUND DECORATIONS
            ===================================================== */}

            <div className="pointer-events-none absolute -left-48 top-20 h-[420px] w-[420px] rounded-full bg-[#E1E7ED]/60 blur-3xl" />

            <div className="pointer-events-none absolute -right-48 bottom-0 h-[420px] w-[420px] rounded-full bg-[#E1E7ED]/70 blur-3xl" />


            <div className="relative mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">

                {/* =================================================
                    SECTION HEADER
                ================================================= */}

                <div className="mx-auto max-w-[720px] text-center">

                    {/* Badge */}

                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E1E7ED] bg-[#FFFFFF] px-4 py-2">

                        <span className="relative flex h-2 w-2">

                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#008F89] opacity-30" />

                            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#008F89]" />

                        </span>

                        <span className="text-[10px] font-extrabold uppercase tracking-[1.6px] text-[#008F89]">
                            Why Choice Home Offers
                        </span>

                    </div>


                    {/* Heading */}

                    <h2 className="font-serif text-[38px] font-semibold leading-[1.08] tracking-[-1.5px] text-[#12345C] sm:text-[46px] lg:text-[50px]">

                        Pest & plumbing help,

                        <br className="hidden sm:block" />

                        <span className="text-[#008F89]">
                            {" "}made easier.
                        </span>

                    </h2>


                    {/* Description */}

                    <p className="mx-auto mt-5 max-w-[650px] text-[14px] leading-7 text-[#657A94] sm:text-[15px]">

                        Choice Home Offers makes it easier to explore common
                        Pest Control and Plumbing service needs and
                        connect through the dedicated service line
                        for the help you're looking for.

                    </p>

                </div>


                {/* =================================================
                    BENEFITS GRID
                ================================================= */}

                <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                    {benefits.map((benefit, index) => {

                        const Icon = benefit.icon;

                        return (
                            <div
                                key={benefit.title}
                                className="group relative overflow-hidden rounded-[24px] border border-[#E1E7ED] bg-[#FFFFFF] p-7 shadow-[0_7px_25px_rgba(45,35,25,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#008F89] hover:shadow-[0_18px_40px_rgba(45,35,25,0.08)]"
                            >

                                {/* Card Number */}

                                <span className="absolute right-6 top-6 text-[10px] font-extrabold tracking-[1px] text-[#657A94]">
                                    {String(index + 1).padStart(2, "0")}
                                </span>


                                {/* Decoration */}

                                <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#F0F5F8]/0 blur-2xl transition-all duration-500 group-hover:bg-[#F0F5F8]" />


                                {/* Icon */}

                                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0F5F8] transition-all duration-300 group-hover:bg-[#008F89]">

                                    <Icon
                                        size={22}
                                        strokeWidth={2}
                                        className="text-[#008F89] transition-colors duration-300 group-hover:text-white"
                                    />

                                </div>


                                {/* Content */}

                                <h3 className="relative mt-6 text-[17px] font-extrabold tracking-[-0.2px] text-[#12345C]">
                                    {benefit.title}
                                </h3>


                                <p className="relative mt-2.5 text-[13px] leading-6 text-[#657A94]">
                                    {benefit.description}
                                </p>

                            </div>
                        );
                    })}

                </div>


                {/* =================================================
                    BOTTOM SERVICE CTA
                ================================================= */}

                <div className="relative mt-12 overflow-hidden rounded-[28px] bg-[#12345C] shadow-[0_20px_55px_rgba(35,30,25,0.16)]">


                    {/* Decorative Background */}

                    <div className="pointer-events-none absolute -right-20 -top-28 h-[300px] w-[300px] rounded-full bg-[#008F89]/10 blur-3xl" />

                    <div className="pointer-events-none absolute -bottom-28 left-[30%] h-[240px] w-[240px] rounded-full bg-white/[0.03] blur-3xl" />


                    <div className="relative grid lg:grid-cols-[0.9fr_1.1fr]">


                        {/* =============================================
                            LEFT CONTENT
                        ============================================= */}

                        <div className="flex flex-col justify-center border-b border-white/[0.08] p-7 sm:p-9 lg:border-b-0 lg:border-r lg:p-10 xl:p-12">

                            {/* Icon */}

                            <div className="flex h-12 w-12 items-center justify-center rounded-[15px] bg-[#008F89] text-white">

                                <PhoneCall
                                    size={21}
                                    strokeWidth={2.4}
                                />

                            </div>


                            {/* Label */}

                            <p className="mt-6 text-[10px] font-extrabold uppercase tracking-[1.6px] text-[#008F89]">
                                Need Service?
                            </p>


                            {/* Heading */}

                            <h3 className="mt-2 max-w-[430px] font-serif text-[29px] font-bold leading-[1.15] tracking-[-0.8px] text-white sm:text-[34px]">

                                Choose the service that

                                <span className="text-[#008F89]">
                                    {" "}fits your need.
                                </span>

                            </h3>


                            {/* Description */}

                            <p className="mt-4 max-w-[440px] text-[13px] leading-6 text-[#657A94]">

                                Have a pest problem or plumbing issue?
                                Select the appropriate service and call
                                its dedicated Choice Home Offers service line.

                            </p>


                            {/* Small Trust */}

                            <div className="mt-6 flex items-center gap-2">

                                <ShieldCheck
                                    size={16}
                                    className="text-[#008F89]"
                                />

                                <span className="text-[11px] font-semibold text-[#657A94]">
                                    Two services. Two dedicated phone lines.
                                </span>

                            </div>

                        </div>


                        {/* =============================================
                            SERVICE OPTIONS
                        ============================================= */}

                        <div className="grid gap-4 p-6 sm:p-8 md:grid-cols-2 lg:p-10">


                            {/* =========================================
                                PEST CONTROL
                            ========================================= */}

                            <div className="group rounded-[22px] border border-white/[0.09] bg-white/[0.045] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#008F89]/40 hover:bg-white/[0.07]">

                                {/* Service Header */}

                                <div className="flex items-center gap-3">

                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#008F89]/15 text-[#008F89] transition-all duration-300 group-hover:bg-[#008F89] group-hover:text-white">

                                        <Bug
                                            size={19}
                                            strokeWidth={2.3}
                                        />

                                    </div>


                                    <div>

                                        <p className="text-[9px] font-bold uppercase tracking-[1.2px] text-[#657A94]">
                                            Service 01
                                        </p>

                                        <h4 className="mt-0.5 text-[16px] font-extrabold text-white">
                                            Pest Control
                                        </h4>

                                    </div>

                                </div>


                                {/* Description */}

                                <p className="mt-4 min-h-[60px] text-[12px] leading-5 text-[#657A94]">
                                    Help for common household pests
                                    including ants, rodents, termites,
                                    bed bugs, mosquitoes, and more.
                                </p>


                                {/* Phone */}

                                <a
                                    href={`tel:${PEST_PHONE}`}
                                    aria-label={`Call Pest Control at ${PEST_DISPLAY_PHONE}`}
                                    className="mt-4 inline-flex items-center gap-2 text-[15px] font-extrabold text-white transition-colors hover:text-[#008F89]"
                                >

                                    <PhoneCall
                                        size={15}
                                        className="text-[#008F89]"
                                    />

                                    {PEST_DISPLAY_PHONE}

                                </a>


                                {/* Actions */}

                                <div className="mt-5 space-y-2.5">

                                    <a
                                        href={`tel:${PEST_PHONE}`}
                                        className="group/call flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#008F89_0%,#005F5B_100%)] px-4 text-[11px] font-extrabold text-white transition-all duration-300 hover:bg-[linear-gradient(135deg,#007A76_0%,#004D49_100%)]"
                                    >

                                        <PhoneCall size={14} />

                                        Call Pest Control

                                        <ArrowRight
                                            size={14}
                                            className="transition-transform duration-300 group-hover/call:translate-x-1"
                                        />

                                    </a>


                                    <a
                                        href="/pest-control"
                                        className="group/view flex min-h-[43px] w-full items-center justify-center gap-2 rounded-full border border-white/[0.12] px-4 text-[11px] font-bold text-[#E1E7ED] transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06] hover:text-white"
                                    >

                                        View Services

                                        <ArrowRight
                                            size={13}
                                            className="transition-transform duration-300 group-hover/view:translate-x-1"
                                        />

                                    </a>

                                </div>

                            </div>


                            {/* =========================================
                                PLUMBING
                            ========================================= */}

                            <div className="group rounded-[22px] border border-white/[0.09] bg-white/[0.045] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#008F89]/40 hover:bg-white/[0.07]">

                                {/* Service Header */}

                                <div className="flex items-center gap-3">

                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#008F89]/15 text-[#008F89] transition-all duration-300 group-hover:bg-[#008F89] group-hover:text-white">

                                        <Wrench
                                            size={19}
                                            strokeWidth={2.3}
                                        />

                                    </div>


                                    <div>

                                        <p className="text-[9px] font-bold uppercase tracking-[1.2px] text-[#657A94]">
                                            Service 02
                                        </p>

                                        <h4 className="mt-0.5 text-[16px] font-extrabold text-white">
                                            Plumbing
                                        </h4>

                                    </div>

                                </div>


                                {/* Description */}

                                <p className="mt-4 min-h-[60px] text-[12px] leading-5 text-[#657A94]">
                                    Help for leaks, clogged drains,
                                    pipes, toilets, water heaters,
                                    fixtures, and other plumbing needs.
                                </p>


                                {/* Phone */}

                                <a
                                    href={`tel:${PLUMBING_PHONE}`}
                                    aria-label={`Call Plumbing at ${PLUMBING_DISPLAY_PHONE}`}
                                    className="mt-4 inline-flex items-center gap-2 text-[15px] font-extrabold text-white transition-colors hover:text-[#008F89]"
                                >

                                    <PhoneCall
                                        size={15}
                                        className="text-[#008F89]"
                                    />

                                    {PLUMBING_DISPLAY_PHONE}

                                </a>


                                {/* Actions */}

                                <div className="mt-5 space-y-2.5">

                                    <a
                                        href={`tel:${PLUMBING_PHONE}`}
                                        className="group/call flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#008F89_0%,#005F5B_100%)] px-4 text-[11px] font-extrabold text-white transition-all duration-300 hover:bg-[linear-gradient(135deg,#007A76_0%,#004D49_100%)]"
                                    >

                                        <PhoneCall size={14} />

                                        Call Plumbing

                                        <ArrowRight
                                            size={14}
                                            className="transition-transform duration-300 group-hover/call:translate-x-1"
                                        />

                                    </a>


                                    <a
                                        href="/plumbing"
                                        className="group/view flex min-h-[43px] w-full items-center justify-center gap-2 rounded-full border border-white/[0.12] px-4 text-[11px] font-bold text-[#E1E7ED] transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06] hover:text-white"
                                    >

                                        View Services

                                        <ArrowRight
                                            size={13}
                                            className="transition-transform duration-300 group-hover/view:translate-x-1"
                                        />

                                    </a>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}