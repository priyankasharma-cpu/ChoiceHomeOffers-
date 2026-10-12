import {
    ArrowRight,
    PhoneCall,
} from "lucide-react";

export default function PestServiceCard({
    service,
    phone,
    displayPhone,
    onCallClick,
}) {
    return (
        <article
            id={service.id}
            className="
                group
                scroll-mt-28
                overflow-hidden
                rounded-[16px]
                border border-[#E1E7ED]
                bg-white
                shadow-[0_3px_14px_rgba(37,32,28,0.06)]
                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-[#E1E7ED]
                hover:shadow-[0_18px_40px_rgba(37,32,28,0.12)]
            "
        >
            {/* ==========================================
                IMAGE
            ========================================== */}

            <div className="relative h-[210px] overflow-hidden sm:h-[220px]">
                <img
                    src={service.image}
                    alt={`${service.name} service`}
                    loading="lazy"
                    className="
                        h-full w-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-[1.045]
                    "
                />


                <div
                    className="
        absolute left-3 top-3 z-10
        rounded-lg
        border border-white/40
        bg-white/90
        px-3 py-1.5
        text-[11px]
        font-bold
        text-[#12345C]
        shadow-sm
        backdrop-blur-md
    "
                >
                    {service.count}
                </div>

                {/* DARK GRADIENT */}

                <div
                    className="
                        pointer-events-none
                        absolute inset-0
                        bg-gradient-to-t
                        from-black/30
                        via-transparent
                        to-transparent

                        opacity-0
                        transition-opacity
                        duration-300

                        group-hover:opacity-100
                    "
                />

                {/* ======================================
                    DESKTOP HOVER CALL CTA
                ====================================== */}

                <div
                    className="
                        absolute
                        bottom-3
                        left-3
                        right-3

                        translate-y-4
                        opacity-0

                        transition-all
                        duration-300

                        group-hover:translate-y-0
                        group-hover:opacity-100

                        max-md:hidden
                    "
                >
                    <a
                        href={`tel:${phone}`}
                        className="
                            flex w-full
                            items-center
                            justify-center
                            gap-3

                            rounded-xl
                            border border-white/40
                            bg-[#12345C]/90

                            px-4 py-3

                            text-[14px]
                            font-bold
                            text-white

                            shadow-lg
                            backdrop-blur-md

                            transition
                            hover:bg-[#008F89]
                        "
                    >
                        {/* RINGING ICON */}

                        <span className="relative flex h-7 w-7 items-center justify-center">
                            <span
                                className="
                                    absolute inset-0
                                    animate-ping
                                    rounded-full
                                    bg-white/20
                                "
                            />

                            <PhoneCall
                                size={18}
                                strokeWidth={2.3}
                                className="relative"
                            />
                        </span>

                        Call {displayPhone}
                    </a>
                </div>

                {/* ======================================
                    MOBILE CALL CTA
                ====================================== */}

                <a
                    href={`tel:${phone}`}
                    className="
                        absolute
                        bottom-3
                        left-3
                        right-3

                        flex items-center
                        justify-center
                        gap-2

                        rounded-xl
                        border border-white/40
                        bg-[#12345C]/90

                        px-3 py-3

                        text-[13px]
                        font-bold
                        text-white

                        shadow-lg
                        backdrop-blur-md

                        md:hidden
                    "
                >
                    <PhoneCall
                        size={17}
                        strokeWidth={2.4}
                    />

                    Call {displayPhone}
                </a>
            </div>

            {/* ==========================================
                CONTENT
            ========================================== */}

            <div className="p-4 sm:p-[18px]">
                <h3
                    className="
                        text-[18px]
                        font-bold
                        tracking-[-0.02em]
                        text-[#12345C]
                    "
                >
                    {service.name}
                </h3>

                <p
                    className="
                        mt-1.5
                        min-h-[48px]
                        text-[14px]
                        leading-[1.6]
                        text-[#657A94]
                    "
                >
                    {service.description}
                </p>


                {/*  Bottom CTA OPEN POPUP */}

                <button
                    type="button"
                    onClick={() => onCallClick(service)}
                    className="
                        mt-auto
                        flex w-full
                        items-center
                        justify-between
                        border-t
                        border-[#E1E7ED]
                        pt-4

                        text-left
                        text-[14px]
                        font-bold
                        text-[#12345C]

                        transition
                        hover:text-[#008F89]
                    "
                >
                    Call for Service

                    <span
                        className="
                            flex h-8 w-8
                            items-center
                            justify-center
                            rounded-full
                            bg-[#F0F5F8]
                            text-[#008F89]
                            transition-all
                            group-hover:bg-[#008F89]
                            group-hover:text-white
                        "
                    >
                        <ArrowRight size={16} />
                    </span>
                </button>
            </div>
        </article>
    );
}