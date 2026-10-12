import {
    Check,
    PhoneCall,
    X,
    ArrowLeft,
    ShieldCheck,
} from "lucide-react";

export default function ServiceCallModal({
    isOpen,
    onClose,
    service,
    phone,
    displayPhone,
}) {
    if (!isOpen || !service) return null;

    return (
        <div
            className="
                fixed inset-0 z-[9999]
                flex items-center justify-center
                bg-black/65
                px-4 py-6
                backdrop-blur-[5px]
            "
            onClick={onClose}
        >
            <div
                className="
                    relative
                    w-full max-w-[580px]
                    overflow-hidden
                    rounded-[24px]
                    bg-[#F0F5F8]
                    shadow-[0_30px_90px_rgba(0,0,0,0.35)]
                    animate-[callModal_.25s_ease-out]
                "
                onClick={(e) => e.stopPropagation()}
            >
                {/* =========================
                    TOP BAR
                ========================= */}

                <div className="border-b border-black/5 bg-white px-5 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            onClick={onClose}
                            className="
                                flex items-center gap-2
                                text-[14px] font-medium
                                text-[#657A94]
                                transition hover:text-[#008F89]
                            "
                        >
                            <ArrowLeft size={17} />
                            Back to services
                        </button>

                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="Close"
                            className="
                                flex h-9 w-9
                                items-center justify-center
                                rounded-full
                                text-[#12345C]
                                transition
                                hover:bg-[#F0F5F8]
                            "
                        >
                            <X size={21} />
                        </button>
                    </div>

                    {/* SELECTED SERVICE */}

                    <div className="mt-4 flex items-center gap-3">
                        <img
                            src={service.image}
                            alt={service.name}
                            className="
                                h-[58px] w-[58px]
                                rounded-xl
                                object-cover
                                shadow-sm
                            "
                        />

                        <div>
                            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#008F89]">
                                Pest Control Service
                            </p>

                            <h3 className="mt-0.5 text-[17px] font-bold text-[#12345C]">
                                {service.name}
                            </h3>

                            <p className="mt-0.5 text-[13px] text-[#657A94]">
                                Call now to discuss your service needs
                            </p>
                        </div>
                    </div>
                </div>

                {/* =========================
                    MAIN CONTENT
                ========================= */}

                <div className="px-5 py-6 sm:px-7 sm:py-7">
                    <div className="text-center">
                        {/* BIG INCOMING CALL ICON */}

                        <div className="relative mx-auto mb-5 flex h-[88px] w-[88px] items-center justify-center">

                            {/* OUTER PULSE */}

                            <span
                                className="
                                    absolute inset-0
                                    animate-ping
                                    rounded-full
                                    bg-[#008F89]/15
                                "
                            />

                            <span
                                className="
                                    absolute inset-[8px]
                                    rounded-full
                                    bg-[#008F89]/10
                                "
                            />

                            <div
                                className="
                                    relative
                                    flex h-[68px] w-[68px]
                                    items-center justify-center
                                    rounded-full
                                    bg-[#008F89]
                                    text-white
                                    shadow-[0_12px_30px_rgba(0, 143, 137,0.35)]
                                "
                            >
                                <PhoneCall
                                    size={31}
                                    strokeWidth={2.3}
                                    className="animate-[phoneRing_1.3s_ease-in-out_infinite]"
                                />
                            </div>
                        </div>

                        <p className="text-[13px] font-bold uppercase tracking-[0.13em] text-[#008F89]">
                            Call Choice Home Offers
                        </p>

                        <h2
                            className="
                                mt-2
                                text-[27px]
                                font-extrabold
                                leading-tight
                                text-[#12345C]
                                sm:text-[31px]
                            "
                        >
                            Get Help With {service.name}
                        </h2>

                        <p
                            className="
                                mx-auto mt-2
                                max-w-[440px]
                                text-[14px]
                                leading-6
                                text-[#657A94]
                                sm:text-[15px]
                            "
                        >
                            Call now and we'll help connect you with a pest
                            control professional serving your area.
                        </p>
                    </div>

                    {/* =========================
                        CALL BUTTON
                    ========================= */}

                    <a
                        href={`tel:${phone}`}
                        className="
                            group
                            relative
                            mt-6
                            flex w-full
                            items-center
                            justify-center
                            gap-4
                            overflow-hidden
                            rounded-[18px]
                            bg-[linear-gradient(135deg,#008F89_0%,#005F5B_100%)]
                            px-5 py-4
                            text-white
                            shadow-[0_14px_35px_rgba(0, 143, 137,0.30)]
                            transition-all
                            duration-300
                            hover:-translate-y-0.5
                            hover:bg-[linear-gradient(135deg,#007A76_0%,#004D49_100%)]
                            hover:shadow-[0_18px_40px_rgba(0, 143, 137,0.38)]
                        "
                    >
                        {/* PHONE ICON */}

                        <span
                            className="
                                relative
                                flex h-11 w-11
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-white/18
                            "
                        >
                            <span
                                className="
                                    absolute inset-0
                                    animate-ping
                                    rounded-full
                                    bg-white/20
                                "
                            />

                            <PhoneCall
                                size={23}
                                strokeWidth={2.4}
                                className="
                                    relative
                                    animate-[phoneRing_1.3s_ease-in-out_infinite]
                                "
                            />
                        </span>

                        <div className="text-left">
                            <span className="block text-[11px] font-semibold text-white/80">
                                Tap to call — no obligation
                            </span>

                            <span
                                className="
                                    block
                                    text-[23px]
                                    font-extrabold
                                    leading-tight
                                    tracking-[-0.02em]
                                    sm:text-[27px]
                                "
                            >
                                {displayPhone}
                            </span>

                            <span className="block text-[11px] font-medium text-white/85">
                                Speak with us about your service
                            </span>
                        </div>
                    </a>

                    {/* =========================
                        READY BOX
                    ========================= */}

                    <div
                        className="
                            mt-5
                            rounded-[17px]
                            border border-[#E1E7ED]
                            bg-white
                            p-5
                        "
                    >
                        <h4 className="text-[14px] font-bold text-[#12345C]">
                            Have this ready when you call
                        </h4>

                        <div className="mt-4 space-y-3">
                            <InfoItem>
                                What pest problem are you experiencing?
                            </InfoItem>

                            <InfoItem>
                                Your ZIP code
                            </InfoItem>

                            <InfoItem>
                                How soon you need service
                            </InfoItem>
                        </div>
                    </div>

                    {/* BOTTOM TRUST */}

                    <div
                        className="
                            mt-5
                            flex items-center
                            justify-center
                            gap-2
                            text-center
                            text-[12px]
                            text-[#657A94]
                        "
                    >
                        <ShieldCheck
                            size={15}
                            className="text-[#008F89]"
                        />

                        No obligation · Call when you're ready
                    </div>
                </div>
            </div>

            {/* =========================
                ANIMATIONS
            ========================= */}

            <style>{`
                @keyframes callModal {
                    0% {
                        opacity: 0;
                        transform: translateY(20px) scale(.97);
                    }

                    100% {
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
        </div>
    );
}

function InfoItem({ children }) {
    return (
        <div className="flex items-start gap-3">
            <span
                className="
                    mt-[1px]
                    flex h-5 w-5
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#F0F5F8]
                    text-[#008F89]
                "
            >
                <Check size={13} strokeWidth={3} />
            </span>

            <span className="text-[14px] text-[#657A94]">
                {children}
            </span>
        </div>
    );
}