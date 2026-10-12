import {
    ArrowRight,
    Bug,
    CheckCircle2,
    PhoneCall,
    ShieldCheck,
    Wrench,
} from "lucide-react";


/* =========================================================
   SERVICE DETAILS
========================================================= */

const services = [
    {
        id: "pest-control",
        icon: Bug,
        title: "Pest Control",
        description:
            "Explore help for ants, rodents, termites, bed bugs, mosquitoes, and other common household pests.",
        phone: "+18889874472",
        displayPhone: "+1 (888) 987-4472",
        href: "/pest-control",
    },
    {
        id: "plumbing",
        icon: Wrench,
        title: "Plumbing",
        description:
            "Explore help for leaks, clogged drains, pipes, toilets, water heaters, and other household plumbing needs.",
        phone: "+18885066168",
        displayPhone: "+1 (888) 506-6168",
        href: "/plumbing",
    },
];


/* =========================================================
   PROCESS STEPS
========================================================= */

const steps = [
    {
        number: "01",
        icon: CheckCircle2,
        title: "Choose Your Service",
        description:
            "Start by choosing Pest Control or Plumbing based on the type of help you need.",
    },
    {
        number: "02",
        icon: ShieldCheck,
        title: "Explore Your Service Need",
        description:
            "Review the available service options and find the one that best matches your household problem.",
    },
    {
        number: "03",
        icon: PhoneCall,
        title: "Call the Service Line",
        description:
            "Call the dedicated Pest Control or Plumbing number to discuss your service request.",
    },
];


export default function HowItWorks() {
    return (
        <section
            id="how-it-works"
            className="relative overflow-hidden bg-[#FFFFFF] py-20 sm:py-24 lg:py-28"
        >

            {/* =====================================================
                BACKGROUND DECORATION
            ===================================================== */}

            <div className="pointer-events-none absolute -left-40 top-20 h-[380px] w-[380px] rounded-full bg-[#E1E7ED]/60 blur-3xl" />

            <div className="pointer-events-none absolute -right-40 bottom-10 h-[360px] w-[360px] rounded-full bg-[#F0F5F8]/80 blur-3xl" />


            <div className="relative mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-14">


                {/* =====================================================
                    HEADER
                ===================================================== */}

                <div className="mx-auto max-w-[760px] text-center">

                    {/* Badge */}

                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E1E7ED] bg-[#F0F5F8] px-4 py-2">

                        <span className="relative flex h-2 w-2">

                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#008F89] opacity-30" />

                            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#008F89]" />

                        </span>

                        <span className="text-[10px] font-extrabold uppercase tracking-[1.6px] text-[#008F89]">
                            How Choice Home Offers Works
                        </span>

                    </div>


                    {/* Heading */}

                    <h2 className="font-serif text-[38px] font-bold leading-[1.08] tracking-[-1.5px] text-[#12345C] sm:text-[46px] lg:text-[50px]">

                        Home service help in

                        <br className="hidden sm:block" />

                        <span className="text-[#008F89]">
                            {" "}three simple steps.
                        </span>

                    </h2>


                    {/* Description */}

                    <p className="mx-auto mt-5 max-w-[650px] text-[14px] leading-7 text-[#657A94] sm:text-[15px]">

                        Whether you need help with a household pest
                        problem or a plumbing issue, choose your service,
                        explore the available options, and call the
                        dedicated service line.

                    </p>

                </div>


                {/* =====================================================
                    STEPS
                ===================================================== */}

                <div className="relative mt-14 lg:mt-16">

                    {/* Connecting Line */}

                    <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-[47px] hidden h-px bg-gradient-to-r from-transparent via-[#E1E7ED] to-transparent lg:block" />


                    <div className="grid gap-5 md:grid-cols-3 lg:gap-6">

                        {steps.map((step) => {

                            const Icon = step.icon;

                            return (
                                <div
                                    key={step.number}
                                    className="group relative"
                                >

                                    <div className="relative h-full overflow-hidden rounded-[26px] border border-[#E1E7ED] bg-[#FFFFFF] p-7 text-center shadow-[0_8px_25px_rgba(45,35,25,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-[#008F89] hover:shadow-[0_18px_40px_rgba(45,35,25,0.09)]">

                                        {/* Decorative Glow */}

                                        <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#F0F5F8]/0 blur-2xl transition-all duration-500 group-hover:bg-[#F0F5F8]" />


                                        {/* Step Number */}

                                        <div className="absolute right-6 top-5 text-[11px] font-extrabold tracking-[1.2px] text-[#657A94]">
                                            STEP {step.number}
                                        </div>


                                        {/* Icon */}

                                        <div className="relative mx-auto flex h-[76px] w-[76px] items-center justify-center rounded-full border-[8px] border-[#E1E7ED] bg-[#F0F5F8] shadow-[0_0_0_1px_#EADDD0] transition-all duration-300 group-hover:bg-[#008F89]">

                                            <Icon
                                                size={28}
                                                strokeWidth={2.1}
                                                className="text-[#008F89] transition-colors duration-300 group-hover:text-white"
                                            />

                                        </div>


                                        {/* Title */}

                                        <h3 className="mt-7 text-[19px] font-extrabold tracking-[-0.3px] text-[#12345C]">
                                            {step.title}
                                        </h3>


                                        {/* Description */}

                                        <p className="mx-auto mt-3 max-w-[290px] text-[13px] leading-6 text-[#657A94]">
                                            {step.description}
                                        </p>

                                    </div>

                                </div>
                            );
                        })}

                    </div>

                </div>


                {/* =====================================================
                    CHOOSE SERVICE
                ===================================================== */}

                <div className="mx-auto mt-12 max-w-[950px]">

                    {/* Small Heading */}

                    <div className="text-center">

                        <p className="text-[10px] font-extrabold uppercase tracking-[1.5px] text-[#008F89]">
                            Choose Your Service
                        </p>

                        <h3 className="mt-2 text-[22px] font-extrabold tracking-[-0.5px] text-[#12345C] sm:text-[25px]">
                            What do you need help with?
                        </h3>

                    </div>


                    {/* Service Cards */}

                    <div className="mt-7 grid gap-4 md:grid-cols-2">

                        {services.map((service) => {

                            const Icon = service.icon;

                            return (
                                <div
                                    key={service.id}
                                    className="group relative overflow-hidden rounded-[24px] border border-[#E1E7ED] bg-white p-5 shadow-[0_10px_30px_rgba(45,35,25,0.055)] transition-all duration-300 hover:-translate-y-1 hover:border-[#008F89] hover:shadow-[0_16px_38px_rgba(45,35,25,0.10)] sm:p-6"
                                >

                                    {/* Decoration */}

                                    <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[#F0F5F8]/50 blur-2xl" />


                                    <div className="relative">

                                        {/* Service Header */}

                                        <div className="flex items-start gap-4">

                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[15px] bg-[#F0F5F8] text-[#008F89] transition-all duration-300 group-hover:bg-[#008F89] group-hover:text-white">

                                                <Icon
                                                    size={22}
                                                    strokeWidth={2.2}
                                                />

                                            </div>


                                            <div>

                                                <p className="text-[9px] font-extrabold uppercase tracking-[1.3px] text-[#008F89]">
                                                    Choice Home Offers Service
                                                </p>

                                                <h4 className="mt-1 text-[20px] font-extrabold tracking-[-0.3px] text-[#12345C]">
                                                    {service.title}
                                                </h4>

                                            </div>

                                        </div>


                                        {/* Description */}

                                        <p className="mt-4 min-h-[48px] text-[13px] leading-6 text-[#657A94]">
                                            {service.description}
                                        </p>


                                        {/* Phone */}

                                        <div className="mt-5 rounded-[16px] border border-[#E1E7ED] bg-[#FFFFFF] p-4">

                                            <p className="text-[9px] font-extrabold uppercase tracking-[1.2px] text-[#657A94]">
                                                Call {service.title}
                                            </p>


                                            <a
                                                href={`tel:${service.phone}`}
                                                aria-label={`Call ${service.title} at ${service.displayPhone}`}
                                                className="mt-1.5 inline-flex items-center gap-2 text-[18px] font-extrabold tracking-[-0.3px] text-[#12345C] transition-colors duration-300 hover:text-[#008F89] sm:text-[20px]"
                                            >

                                                <PhoneCall
                                                    size={17}
                                                    strokeWidth={2.4}
                                                    className="text-[#008F89]"
                                                />

                                                {service.displayPhone}

                                            </a>

                                        </div>


                                        {/* Actions */}

                                        <div className="mt-5 grid gap-3 sm:grid-cols-2">

                                            {/* CALL */}

                                            <a
                                                href={`tel:${service.phone}`}
                                                aria-label={`Call ${service.title}`}
                                                className="group/call inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#008F89_0%,#005F5B_100%)] px-5 text-[12px] font-extrabold text-white shadow-[0_8px_22px_rgba(0, 143, 137,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[linear-gradient(135deg,#007A76_0%,#004D49_100%)] hover:shadow-[0_12px_28px_rgba(0, 143, 137,0.30)]"
                                            >

                                                <PhoneCall
                                                    size={15}
                                                    strokeWidth={2.5}
                                                />

                                                Call Now

                                                <ArrowRight
                                                    size={15}
                                                    className="transition-transform duration-300 group-hover/call:translate-x-1"
                                                />

                                            </a>


                                            {/* VIEW SERVICES */}

                                            <a
                                                href={service.href}
                                                className="group/view inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-[#E1E7ED] bg-[#FFFFFF] px-5 text-[12px] font-extrabold text-[#12345C] transition-all duration-300 hover:border-[#008F89]/50 hover:bg-[#F0F5F8] hover:text-[#008F89]"
                                            >

                                                View Services

                                                <ArrowRight
                                                    size={14}
                                                    className="transition-transform duration-300 group-hover/view:translate-x-1"
                                                />

                                            </a>

                                        </div>

                                    </div>

                                </div>
                            );
                        })}

                    </div>

                </div>


                {/* =====================================================
                    BOTTOM TRUST
                ===================================================== */}

                <div className="mx-auto mt-8 flex max-w-[720px] flex-wrap items-center justify-center gap-x-6 gap-y-3">

                    <div className="flex items-center gap-2 text-[11px] font-semibold text-[#657A94]">

                        <ShieldCheck
                            size={15}
                            className="text-[#008F89]"
                        />

                        Pest Control Service Line

                    </div>


                    <div className="hidden h-4 w-px bg-[#E1E7ED] sm:block" />


                    <div className="flex items-center gap-2 text-[11px] font-semibold text-[#657A94]">

                        <PhoneCall
                            size={14}
                            className="text-[#008F89]"
                        />

                        Plumbing Service Line

                    </div>

                </div>

            </div>

        </section>
    );
}