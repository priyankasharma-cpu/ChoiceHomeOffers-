
import {
    ArrowRight,
    Bug,
    CheckCircle2,
    House,
    ShieldCheck,
    Users,
    Wrench,
} from "lucide-react";

const features = [
    {
        icon: CheckCircle2,
        title: "Simple Process",
        description:
            "Choose your service and connect through a dedicated phone line.",
    },
    {
        icon: Bug,
        title: "Pest Control",
        description:
            "Explore help for common household pest problems.",
    },
    {
        icon: Wrench,
        title: "Plumbing",
        description:
            "Find assistance for leaks, drains, pipes, and fixtures.",
    },
    {
        icon: ShieldCheck,
        title: "Homeowner Focused",
        description:
            "A straightforward way to explore your service options.",
    },
];

export default function About() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-[#F0F5F8] py-20 sm:py-24 lg:py-28"
        >
            {/* Background Decorations */}
            <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#008F89]/[0.06] blur-3xl" />
            <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#12345C]/[0.05] blur-3xl" />

            <div className="relative mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
                <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

                    {/* ================= LEFT IMAGE ================= */}
                    <div className="relative mx-auto w-full max-w-[570px] lg:max-w-none">

                        {/* Image Outer Frame */}
                        <div className="relative overflow-hidden rounded-[32px] border border-[#DCE6EC] bg-white p-3 shadow-[0_25px_70px_rgba(18,52,92,0.12)]">

                            <div className="relative aspect-[4/4.5] overflow-hidden rounded-[25px]">
                                <img
                                    src="/images/aboutsectionaimg.png"
                                    alt="Professional home service team"
                                    loading="lazy"
                                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                                />

                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#081B30]/45 via-transparent to-transparent" />
                            </div>

                            {/* Floating Trust Card */}
                            <div className="absolute bottom-7 left-7 right-7 rounded-[20px] border border-white/70 bg-white/95 p-4 shadow-[0_15px_40px_rgba(8,27,48,0.15)] backdrop-blur-xl sm:bottom-8 sm:left-8 sm:right-auto sm:w-[305px] sm:p-5">

                                <div className="flex items-center gap-3">

                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#E7F6F4]">
                                        <ShieldCheck
                                            size={25}
                                            className="text-[#008F89]"
                                            strokeWidth={2.2}
                                        />
                                    </div>

                                    <div>
                                        <p className="text-[16px] font-extrabold text-[#12345C]">
                                            Home Service Help
                                        </p>

                                        <p className="mt-1 text-[13px] font-medium text-[#657A94]">
                                            Simple. Clear. Convenient.
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Decorative Accent */}
                        <div className="pointer-events-none absolute -bottom-5 -left-5 hidden h-20 w-20 rounded-full border-[10px] border-[#F0F5F8] bg-gradient-to-br from-[#008F89] to-[#005F5B] shadow-lg sm:block" />

                        <div className="pointer-events-none absolute -right-4 -top-4 hidden h-24 w-24 rounded-[25px] border border-[#008F89]/15 bg-[#008F89]/[0.07] lg:block" />
                    </div>

                    {/* ================= RIGHT CONTENT ================= */}
                    <div>

                        {/* Badge */}
                        <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#CDE4E2] bg-white px-4 py-2.5 shadow-[0_4px_15px_rgba(18,52,92,0.04)]">
                            <span className="h-2.5 w-2.5 rounded-full bg-[#008F89]" />

                            <span className="text-[12px] font-extrabold uppercase tracking-[1.5px] text-[#007A76] sm:text-[13px]">
                                About Choice Home Offers
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="max-w-[650px] font-serif text-[39px] font-bold leading-[1.12] tracking-[-1.5px] text-[#12345C] sm:text-[47px] lg:text-[53px]">
                            Home service help,
                            <span className="text-[#008F89]">
                                {" "}made simpler.
                            </span>
                        </h2>

                        {/* Descriptions */}
                        <p className="mt-6 max-w-[620px] text-[16px] leading-[1.9] text-[#43566C] sm:text-[18px]">
                            Choice Home Offers helps homeowners explore
                            <span className="font-bold text-[#12345C]">
                                {" "}Pest Control and Plumbing{" "}
                            </span>
                            services through a simple, straightforward
                            phone connection.
                        </p>

                        <p className="mt-4 max-w-[620px] text-[16px] leading-[1.9] text-[#52657B] sm:text-[17px]">
                            Whether you're dealing with unwanted pests,
                            a leaking pipe, a clogged drain, or another
                            common household issue, choose the service
                            you need and call its dedicated service line.
                        </p>

                        {/* ================= FEATURE CARDS ================= */}

                        <div className="mt-7 grid grid-cols-1 items-start gap-3 sm:grid-cols-2">
                            {features.map((feature) => {
                                const Icon = feature.icon;

                                return (
                                    <div
                                        key={feature.title}
                                        className="
                    group flex items-start gap-3
                    rounded-[15px]
                    border border-[#DFE8EE]
                    bg-white
                    px-4 py-3.5
                    shadow-[0_5px_18px_rgba(18,52,92,0.04)]
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-[#9CD5CF]
                    hover:shadow-[0_10px_25px_rgba(18,52,92,0.08)]
                "
                                    >
                                        {/* Icon */}
                                        <div
                                            className="
                        flex h-10 w-10 shrink-0
                        items-center justify-center
                        rounded-[11px]
                        bg-[#E7F6F4]
                        text-[#008F89]
                        transition-colors duration-300
                        group-hover:bg-[#008F89]
                        group-hover:text-white
                    "
                                        >
                                            <Icon size={19} strokeWidth={2.2} />
                                        </div>

                                        {/* Content */}
                                        <div className="min-w-0">
                                            <h3 className="text-[15px] font-extrabold leading-5 text-[#12345C] sm:text-[16px]">
                                                {feature.title}
                                            </h3>

                                            <p className="mt-1 text-[13px] leading-[1.5] text-[#52657B] sm:text-[14px]">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>


                        {/* ================= BOTTOM HIGHLIGHTS ================= */}
                        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-5 border-t border-[#DCE6EC] pt-7">

                            <div className="flex items-center gap-3">

                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E1F3F1]">
                                    <House
                                        size={21}
                                        className="text-[#008F89]"
                                    />
                                </div>

                                <div>
                                    <p className="text-[15px] font-extrabold text-[#12345C]">
                                        Home First
                                    </p>

                                    <p className="mt-1 text-[13px] text-[#657A94]">
                                        Built for homeowners
                                    </p>
                                </div>
                            </div>

                            <div className="hidden h-10 w-px bg-[#DCE6EC] sm:block" />

                            <div className="flex items-center gap-3">

                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E1F3F1]">
                                    <Users
                                        size={21}
                                        className="text-[#008F89]"
                                    />
                                </div>

                                <div>
                                    <p className="text-[15px] font-extrabold text-[#12345C]">
                                        Dedicated Lines
                                    </p>

                                    <p className="mt-1 text-[13px] text-[#657A94]">
                                        Pest Control & Plumbing
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* ================= CTA BUTTONS ================= */}
                        <div className="mt-9 flex flex-wrap items-center gap-3">

                            <a
                                href="/pest-control"
                                className="
                                    group inline-flex min-h-[54px]
                                    items-center justify-center gap-3
                                    rounded-full
                                    bg-[linear-gradient(135deg,#008F89_0%,#005F5B_100%)]
                                    px-7
                                    text-[15px] font-extrabold
                                    text-white
                                    shadow-[0_10px_25px_rgba(0,143,137,0.22)]
                                    transition-all duration-300
                                    hover:-translate-y-0.5
                                    hover:shadow-[0_15px_30px_rgba(0,143,137,0.30)]
                                "
                            >
                                <Bug size={18} />

                                Pest Control

                                <ArrowRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </a>

                            <a
                                href="/plumbing"
                                className="
                                    group inline-flex min-h-[54px]
                                    items-center justify-center gap-3
                                    rounded-full
                                    border border-[#C7D8E1]
                                    bg-white
                                    px-7
                                    text-[15px] font-extrabold
                                    text-[#12345C]
                                    shadow-[0_6px_20px_rgba(18,52,92,0.04)]
                                    transition-all duration-300
                                    hover:-translate-y-0.5
                                    hover:border-[#008F89]
                                    hover:text-[#008F89]
                                "
                            >
                                <Wrench size={18} />

                                Plumbing

                                <ArrowRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </a>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
