import { useState } from "react";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function ServiceCard({ service }) {
    const [expanded, setExpanded] = useState(false);

    const Icon = service.icon;

    const description =
        service.description ||
        "Professional home service solutions delivered with care, quality, and attention to detail.";

    return (
        <article
            className="
                group relative flex h-full min-h-[330px] flex-col
                overflow-hidden rounded-[28px]
                border border-[#E1E7ED]
                bg-[#FFFFFF]
                p-6
                shadow-[0_8px_30px_rgba(45,35,25,0.045)]
                transition-all duration-500
                hover:-translate-y-2
                hover:border-[#008F89]/35
                hover:shadow-[0_25px_60px_rgba(45,35,25,0.13)]
            "
        >
            {/* =========================================
                BACKGROUND DECORATION
            ========================================= */}

            <div
                className="
                    pointer-events-none absolute
                    -right-20 -top-20
                    h-48 w-48
                    rounded-full
                    bg-[#E1E7ED]
                    opacity-0
                    blur-3xl
                    transition-all duration-700
                    group-hover:opacity-90
                "
            />

            <div
                className="
                    pointer-events-none absolute
                    -bottom-20 -left-20
                    h-40 w-40
                    rounded-full
                    bg-[#F0F5F8]
                    opacity-0
                    blur-3xl
                    transition-all duration-700
                    group-hover:opacity-80
                "
            />

            {/* =========================================
                TOP ROW
            ========================================= */}

            <div className="relative z-10 flex items-start justify-between">

                {/* ICON */}
                <div
                    className="
                        flex h-[58px] w-[58px]
                        items-center justify-center
                        rounded-[18px]
                        border border-[#E1E7ED]
                        bg-[#F0F5F8]
                        shadow-[0_8px_22px_rgba(0, 143, 137,0.08)]
                        transition-all duration-500
                        group-hover:scale-105
                        group-hover:border-[#008F89]
                        group-hover:bg-[#008F89]
                        group-hover:shadow-[0_12px_30px_rgba(0, 143, 137,0.25)]
                    "
                >
                    <Icon
                        size={25}
                        strokeWidth={1.8}
                        className="
                            text-[#008F89]
                            transition-all duration-500
                            group-hover:scale-110
                            group-hover:text-white
                        "
                    />
                </div>

                {/* SERVICE NUMBER */}
                <span
                    className="
                        select-none
                        text-[11px]
                        font-extrabold
                        tracking-[2px]
                        text-[#E1E7ED]
                        transition-colors duration-300
                        group-hover:text-[#008F89]
                    "
                >
                    {String(service.id).padStart(2, "0")}
                </span>
            </div>

            {/* =========================================
                TITLE
            ========================================= */}

            <div className="relative z-10 mt-6">
                <h3
                    className="
                        text-[19px]
                        font-extrabold
                        tracking-[-0.45px]
                        text-[#12345C]
                        transition-colors duration-300
                        group-hover:text-[#008F89]
                    "
                >
                    {service.title}
                </h3>

                {/* SMALL ACCENT */}
                <div
                    className="
                        mt-3 h-[3px] w-8
                        rounded-full
                        bg-[#008F89]
                        transition-all duration-500
                        group-hover:w-14
                    "
                />
            </div>

            {/* =========================================
                DESCRIPTION
            ========================================= */}

            <div className="relative z-10 mt-4 flex-1">
                <p
                    className={`
                        text-[13px]
                        leading-[1.75]
                        text-[#657A94]
                        transition-all duration-300
                        ${expanded ? "" : "line-clamp-4"}
                    `}
                >
                    {description}
                </p>

                {/* READ MORE */}
                {description.length > 150 && (
                    <button
                        type="button"
                        onClick={() => setExpanded(!expanded)}
                        className="
                            mt-3
                            inline-flex
                            items-center
                            gap-1.5
                            text-[12px]
                            font-extrabold
                            text-[#008F89]
                            transition-all duration-300
                            hover:gap-2.5
                            hover:text-[#008F89]
                        "
                    >
                        {expanded ? "Read Less" : "Read More"}

                        <ArrowRight
                            size={14}
                            strokeWidth={2.5}
                            className={`
                                transition-transform duration-300
                                ${expanded ? "-rotate-90" : ""}
                            `}
                        />
                    </button>
                )}
            </div>

            {/* =========================================
                BOTTOM CTA AREA
            ========================================= */}

            <div
                className="
                    relative z-10
                    mt-6
                    flex
                    items-center
                    justify-between
                    border-t
                    border-[#E1E7ED]
                    pt-5
                "
            >
                {/* GET STARTED */}
                <a
                    href="#quote"
                    className="
                        inline-flex
                        items-center
                        gap-2
                        text-[12px]
                        font-extrabold
                        uppercase
                        tracking-[0.8px]
                        text-[#12345C]
                        transition-all duration-300
                        hover:text-[#008F89]
                    "
                >
                    Get Started

                    <ArrowUpRight
                        size={15}
                        strokeWidth={2.4}
                        className="
                            transition-transform duration-300
                            group-hover:translate-x-0.5
                            group-hover:-translate-y-0.5
                        "
                    />
                </a>

                {/* TRUST INDICATOR */}
                <div
                    className="
                        flex items-center gap-1.5
                        text-[10px]
                        font-bold
                        text-[#008F89]
                    "
                >
                    <CheckCircle2
                        size={14}
                        strokeWidth={2}
                        className="text-[#008F89]"
                    />

                    Professional Service
                </div>
            </div>

            {/* =========================================
                BOTTOM HOVER LINE
            ========================================= */}

            <div
                className="
                    absolute bottom-0 left-6 right-6
                    h-[2px]
                    origin-left
                    scale-x-0
                    rounded-full
                    bg-[#008F89]
                    transition-transform duration-500
                    group-hover:scale-x-100
                "
            />

            {/* =========================================
                CORNER ARROW
            ========================================= */}

            <div
                className="
                    pointer-events-none
                    absolute bottom-[-35px] right-[-35px]
                    h-24 w-24
                    rounded-full
                    bg-[#F0F5F8]
                    opacity-0
                    transition-all duration-500
                    group-hover:bottom-[-25px]
                    group-hover:right-[-25px]
                    group-hover:opacity-100
                "
            />
        </article>
    );
}