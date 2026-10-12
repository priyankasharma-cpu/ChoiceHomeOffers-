import {
    ArrowRight,
    Check,
    PhoneCall,
    ShieldCheck,
    Wrench,
    X,
} from "lucide-react";

export default function PlumbingCallModal({
    isOpen,
    onClose,
    service,
    phone,
    displayPhone,
}) {
    if (!isOpen || !service) return null;

    return (
        <>
            {/* BACKDROP */}
            <div
                className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-[3px]"
                onClick={onClose}
            />

            {/* MODAL WRAPPER */}
            <div className="pointer-events-none fixed inset-0 z-[9999] flex items-center justify-center p-4">
                <div
                    className="
                        pointer-events-auto
                        relative
                        w-full
                        max-w-[500px]
                        overflow-hidden
                        rounded-[28px]
                        border border-white/20
                        bg-white
                        shadow-[0_30px_100px_rgba(0,0,0,0.30)]
                        animate-[plumbingModal_.28s_ease-out]
                    "
                >
                    {/* CLOSE */}
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close"
                        className="
                            absolute right-4 top-4 z-30
                            flex h-10 w-10
                            items-center justify-center
                            rounded-full
                            bg-white/95
                            text-[#12345C]
                            shadow-md
                            transition
                            hover:scale-105
                            hover:bg-[#F0F5F8]
                            hover:text-[#008F89]
                        "
                    >
                        <X size={19} />
                    </button>

                    {/* IMAGE */}
                    <div className="relative h-[190px] overflow-hidden bg-[#F0F5F8]">
                        <img
                            src={service.image}
                            alt={service.name}
                            className="h-full w-full object-cover object-center"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                        <div className="absolute bottom-5 left-5 right-16">
                            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/30 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                                <Wrench size={12} />
                                Plumbing Service
                            </div>

                            <h3 className="text-[25px] font-extrabold leading-tight text-white">
                                {service.name}
                            </h3>
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div className="px-6 pb-7 pt-6 sm:px-8">
                        {/* PHONE ANIMATION */}
                        <div className="mb-5 flex justify-center">
                            <div className="relative flex h-[76px] w-[76px] items-center justify-center">
                                <span className="absolute inset-0 animate-ping rounded-full bg-[#008F89]/15" />

                                <span className="absolute inset-[7px] rounded-full bg-[#F0F5F8]" />

                                <div
                                    className="
                                        relative z-10
                                        flex h-[58px] w-[58px]
                                        items-center justify-center
                                        rounded-full
                                        bg-[#008F89]
                                        text-white
                                        shadow-[0_10px_25px_rgba(0, 143, 137,0.30)]
                                    "
                                >
                                    <PhoneCall
                                        size={25}
                                        strokeWidth={2.4}
                                        className="animate-[phoneRing_1.6s_ease-in-out_infinite]"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#008F89]">
                                Need Plumbing Help?
                            </p>

                            <h4 className="mt-2 text-[24px] font-extrabold tracking-[-0.025em] text-[#12345C]">
                                Call About {service.name}
                            </h4>

                            <p className="mx-auto mt-3 max-w-[400px] text-[13px] leading-6 text-[#657A94]">
                                {service.description}
                            </p>
                        </div>

                        {/* TRUST BOX */}
                        <div className="mt-5 rounded-2xl border border-[#E1E7ED] bg-[#FFFFFF] p-4">
                            <div className="grid gap-3 sm:grid-cols-2">
                                <div className="flex items-center gap-2 text-[12px] font-semibold text-[#12345C]">
                                    <Check
                                        size={16}
                                        strokeWidth={3}
                                        className="text-[#008F89]"
                                    />
                                    Residential Service
                                </div>

                                <div className="flex items-center gap-2 text-[12px] font-semibold text-[#12345C]">
                                    <Check
                                        size={16}
                                        strokeWidth={3}
                                        className="text-[#008F89]"
                                    />
                                    Easy Phone Connection
                                </div>
                            </div>
                        </div>

                        {/* CALL CTA */}
                        <a
                            href={`tel:${phone}`}
                            className="
                                group
                                mt-5
                                flex min-h-[58px]
                                w-full
                                items-center
                                justify-center
                                gap-3
                                rounded-[14px]
                                bg-[linear-gradient(135deg,#008F89_0%,#005F5B_100%)]
                                px-5
                                text-[15px]
                                font-extrabold
                                text-white
                                shadow-[0_14px_30px_rgba(0, 143, 137,0.28)]
                                transition-all
                                duration-300
                                hover:-translate-y-0.5
                                hover:bg-[linear-gradient(135deg,#007A76_0%,#004D49_100%)]
                                hover:shadow-[0_18px_35px_rgba(0, 143, 137,0.35)]
                            "
                        >
                            <PhoneCall size={19} />

                            Call {displayPhone}

                            <ArrowRight
                                size={18}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </a>

                        <div className="mt-4 flex items-center justify-center gap-2 text-[10px] font-semibold text-[#657A94]">
                            <ShieldCheck size={14} className="text-[#008F89]" />
                            Call to discuss your plumbing service needs
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes plumbingModal {
                    from {
                        opacity: 0;
                        transform: translateY(18px) scale(0.96);
                    }

                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                @keyframes phoneRing {
                    0%, 100% {
                        transform: rotate(0deg);
                    }

                    10% {
                        transform: rotate(-12deg);
                    }

                    20% {
                        transform: rotate(12deg);
                    }

                    30% {
                        transform: rotate(-9deg);
                    }

                    40% {
                        transform: rotate(9deg);
                    }

                    50% {
                        transform: rotate(0deg);
                    }
                }
            `}</style>
        </>
    );
}