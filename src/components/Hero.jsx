import {
    ArrowRight,
    Check,
    PhoneCall,
    ShieldCheck,
    Wrench,
    Bug,
} from "lucide-react";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative overflow-hidden bg-[#F0F5F8]"
        >
            {/* ================= BACKGROUND DECOR ================= */}
            <div className="pointer-events-none absolute -bottom-40 -left-32 h-[430px] w-[430px] rounded-full bg-[#E1E7ED]" />

            <div className="pointer-events-none absolute bottom-10 left-0 grid grid-cols-6 gap-5 opacity-40">
                {Array.from({ length: 36 }).map((_, index) => (
                    <span
                        key={index}
                        className="h-1 w-1 rounded-full bg-[#008F89]"
                    />
                ))}
            </div>

            {/* ================= HERO CONTAINER ================= */}
            <div className="relative mx-auto grid min-h-[calc(100vh-76px)] max-w-[1430px] items-center gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:px-16 lg:py-12 xl:px-20">

                {/* ================= LEFT CONTENT ================= */}
                <div className="relative z-10 max-w-[610px]">

                    {/* Badge */}
                    <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#E1E7ED] bg-[#FFFFFF] px-4 py-2.5 shadow-[0_5px_20px_rgba(60,45,30,0.05)]">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#008F89] opacity-40" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#008F89]" />
                        </span>

                        <span className="text-[9px] font-bold uppercase tracking-[1.3px] text-[#008F89]">
                            Home Service Help Made Simple
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="font-serif text-[48px] font-bold leading-[1.08] tracking-[-2px] text-[#12345C] sm:text-[56px] lg:text-[64px] xl:text-[68px]">
                        Pest or plumbing
                        <br />
                        problem?{" "}
                        <span className="relative inline-block pb-2 text-[#008F89]">
                            We can help.

                            <span className="absolute bottom-0 left-0 h-[5px] w-[92%] rounded-full bg-[#008F89]" />
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="mt-8 max-w-[555px] text-[15px] leading-[1.75] text-[#657A94] sm:text-[16px]">
                        Connect with professionals for common household pest
                        control and plumbing needs. Choose the service you need
                        and call to discuss your home service request.
                    </p>

                    {/* ================= SERVICE BUTTONS ================= */}
                    <div className="mt-7 flex flex-col gap-3.5 sm:flex-row">

                        {/* Pest Control */}
                        <a
                            href="/pest-control"
                            className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-full bg-[linear-gradient(135deg,#008F89_0%,#005F5B_100%)] px-7 text-[14px] font-bold text-white shadow-[0_10px_25px_rgba(237,103,27,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[linear-gradient(135deg,#007A76_0%,#004D49_100%)] hover:shadow-[0_14px_30px_rgba(237,103,27,0.28)]"
                        >
                            <Bug size={18} strokeWidth={2.3} />

                            Pest Control

                            <ArrowRight
                                size={18}
                                strokeWidth={2.3}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </a>

                        {/* Plumbing */}
                        <a
                            href="/plumbing"
                            className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-full border-2 border-[#E1E7ED] bg-[#FFFFFF] px-7 text-[14px] font-bold text-[#12345C] shadow-[0_7px_18px_rgba(50,40,30,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#008F89] hover:bg-white hover:text-[#008F89]"
                        >
                            <Wrench
                                size={18}
                                strokeWidth={2.3}
                            />

                            Plumbing

                            <ArrowRight
                                size={18}
                                strokeWidth={2.3}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </a>
                    </div>

                    {/* ================= TRUST POINTS ================= */}
                    <div className="mt-9 flex max-w-[570px] flex-wrap items-center gap-x-6 gap-y-4 border-t border-[#E1E7ED] pt-6">

                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F0F5F8] text-[#008F89]">
                                <Bug size={15} strokeWidth={2.4} />
                            </div>

                            <span className="text-[11px] font-bold text-[#12345C]">
                                Pest Control
                            </span>
                        </div>

                        <div className="hidden h-8 w-px bg-[#E1E7ED] sm:block" />

                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F0F5F8] text-[#008F89]">
                                <Wrench size={15} strokeWidth={2.4} />
                            </div>

                            <span className="text-[11px] font-bold text-[#12345C]">
                                Plumbing
                            </span>
                        </div>

                        <div className="hidden h-8 w-px bg-[#E1E7ED] sm:block" />

                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F0F5F8] text-[#008F89]">
                                <ShieldCheck size={15} strokeWidth={2.4} />
                            </div>

                            <span className="text-[11px] font-bold text-[#12345C]">
                                Easy Phone Connection
                            </span>
                        </div>

                    </div>
                </div>

                {/* ================= RIGHT IMAGE ================= */}
                <div className="relative z-10">

                    {/* Image Shadow */}
                    <div className="absolute -inset-5 rounded-[38px] bg-[#E1E7ED] opacity-60 blur-2xl" />

                    {/* Image Frame */}
                    <div className="relative rounded-[30px] border border-white bg-[#FFFFFF] p-2.5 shadow-[0_20px_50px_rgba(44,38,31,0.13)]">

                        <div className="relative overflow-hidden rounded-[24px]">

                            <img
                                src="/images/bgimaeherp.png"
                                alt="Choice Home Offers home service professional"
                                className="h-[430px] w-full object-cover sm:h-[520px] lg:h-[600px] xl:h-[590px]"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#12345C]/20 via-transparent to-transparent" />

                            {/* ================= TOP CARD ================= */}
                            <div className="absolute left-5 top-5 rounded-[18px] border border-white/80 bg-white/90 px-4 py-3.5 shadow-[0_10px_30px_rgba(40,30,20,0.12)] backdrop-blur-md sm:left-6 sm:top-6">

                                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#008F89]">
                                    Choice Home Offers Services
                                </p>

                                <div className="mt-2 flex items-center gap-3">

                                    <div className="flex items-center gap-1.5 text-[12px] font-bold text-[#12345C]">
                                        <Bug
                                            size={14}
                                            className="text-[#008F89]"
                                        />
                                        Pest Control
                                    </div>

                                    <span className="h-4 w-px bg-[#E1E7ED]" />

                                    <div className="flex items-center gap-1.5 text-[12px] font-bold text-[#12345C]">
                                        <Wrench
                                            size={14}
                                            className="text-[#008F89]"
                                        />
                                        Plumbing
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    {/* ================= CALL CARD ================= */}
                    <div className="absolute -bottom-3 right-[-5px] flex items-center gap-3 rounded-[20px] border border-white bg-white/95 px-4 py-3.5 shadow-[0_12px_30px_rgba(40,30,20,0.15)] backdrop-blur-md sm:-right-4 sm:bottom-7">

                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#008F89]">
                            <PhoneCall
                                size={18}
                                strokeWidth={2.6}
                                className="text-[#008F89]"
                            />
                        </div>

                        <div>
                            <p className="text-[10px] font-medium text-[#657A94]">
                                Need service?
                            </p>

                            <p className="text-[12px] font-bold leading-tight text-[#12345C]">
                                Call for Help
                            </p>
                        </div>

                        <Check
                            size={16}
                            strokeWidth={3}
                            className="ml-1 text-[#008F89]"
                        />

                    </div>
                </div>
            </div>
        </section>
    );
}