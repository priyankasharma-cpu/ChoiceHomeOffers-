import {
    Bug,
    Phone,
    PhoneCall,
    Wrench,
    X,
} from "lucide-react";
import { useState } from "react";

const PEST_PHONE = "+18889874472";
const PEST_DISPLAY_PHONE = "+1 (888) 987-4472";

const PLUMBING_PHONE = "+18885066168";
const PLUMBING_DISPLAY_PHONE = "+1 (888) 506-6168";

export default function FloatingContactButtons() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* =========================================
                FLOATING CALL BUTTON
            ========================================= */}
            <div className="fixed bottom-5 right-5 z-[9990] flex flex-col items-end">

                {/* Service Options */}
                <div
                    className={`
                        mb-3 w-[290px]
                        origin-bottom-right
                        rounded-[22px]
                        border border-[#E1E7ED]
                        bg-white
                        p-3
                        shadow-[0_20px_60px_rgba(37,43,48,0.18)]
                        transition-all duration-300
                        ${isOpen
                            ? "visible translate-y-0 scale-100 opacity-100"
                            : "invisible translate-y-3 scale-95 opacity-0"
                        }
                    `}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between px-2 pb-3 pt-1">
                        <div>
                            <p className="text-[10px] font-extrabold uppercase tracking-[1.5px] text-[#008F89]">
                                Choice Home Offers
                            </p>

                            <h3 className="mt-0.5 text-[15px] font-extrabold text-[#12345C]">
                                Choose a Service
                            </h3>
                        </div>

                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close service options"
                            className="
                                flex h-8 w-8
                                items-center justify-center
                                rounded-full
                                bg-[#F0F5F8]
                                text-[#657A94]
                                transition-all duration-200
                                hover:bg-[#12345C]
                                hover:text-white
                            "
                        >
                            <X size={15} strokeWidth={2.5} />
                        </button>
                    </div>

                    {/* =====================================
                        PEST CONTROL
                    ===================================== */}
                    <a
                        href={`tel:${PEST_PHONE}`}
                        aria-label={`Call Pest Control at ${PEST_DISPLAY_PHONE}`}
                        className="
                            group flex items-center gap-3
                            rounded-[16px]
                            border border-[#E1E7ED]
                            bg-[#FFFFFF]
                            p-3.5
                            transition-all duration-300
                            hover:border-[#008F89]
                            hover:bg-[#F0F5F8]
                        "
                    >
                        <div
                            className="
                                flex h-11 w-11 shrink-0
                                items-center justify-center
                                rounded-[13px]
                                bg-[#F0F5F8]
                                text-[#008F89]
                                transition-all duration-300
                                group-hover:bg-[#008F89]
                                group-hover:text-white
                            "
                        >
                            <Bug size={20} strokeWidth={2.2} />
                        </div>

                        <div className="min-w-0 flex-1">
                            <p className="text-[13px] font-extrabold text-[#12345C]">
                                Pest Control
                            </p>

                            <p className="mt-0.5 text-[12px] font-bold text-[#008F89]">
                                {PEST_DISPLAY_PHONE}
                            </p>
                        </div>

                        <PhoneCall
                            size={17}
                            strokeWidth={2.3}
                            className="
                                shrink-0 text-[#657A94]
                                transition-colors duration-300
                                group-hover:text-[#008F89]
                            "
                        />
                    </a>

                    {/* =====================================
                        PLUMBING
                    ===================================== */}
                    <a
                        href={`tel:${PLUMBING_PHONE}`}
                        aria-label={`Call Plumbing at ${PLUMBING_DISPLAY_PHONE}`}
                        className="
                            group mt-2 flex items-center gap-3
                            rounded-[16px]
                            border border-[#E1E7ED]
                            bg-[#FFFFFF]
                            p-3.5
                            transition-all duration-300
                            hover:border-[#008F89]
                            hover:bg-[#F0F5F8]
                        "
                    >
                        <div
                            className="
                                flex h-11 w-11 shrink-0
                                items-center justify-center
                                rounded-[13px]
                                bg-[#F0F5F8]
                                text-[#008F89]
                                transition-all duration-300
                                group-hover:bg-[#008F89]
                                group-hover:text-white
                            "
                        >
                            <Wrench size={20} strokeWidth={2.2} />
                        </div>

                        <div className="min-w-0 flex-1">
                            <p className="text-[13px] font-extrabold text-[#12345C]">
                                Plumbing
                            </p>

                            <p className="mt-0.5 text-[12px] font-bold text-[#008F89]">
                                {PLUMBING_DISPLAY_PHONE}
                            </p>
                        </div>

                        <PhoneCall
                            size={17}
                            strokeWidth={2.3}
                            className="
                                shrink-0 text-[#657A94]
                                transition-colors duration-300
                                group-hover:text-[#008F89]
                            "
                        />
                    </a>

                    <p className="px-2 pb-1 pt-3 text-center text-[10px] leading-4 text-[#657A94]">
                        Select the service you need to call its dedicated line.
                    </p>
                </div>

                {/* =========================================
                    MAIN FLOATING BUTTON
                ========================================= */}
                <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-label={
                        isOpen
                            ? "Close Choice Home Offers service options"
                            : "Call Choice Home Offers"
                    }
                    className="group flex items-center gap-3"
                >
                    {/* Hover Label */}
                    <span
                        className="
                            pointer-events-none
                            translate-x-2
                            rounded-full
                            bg-[#12345C]
                            px-4 py-2.5
                            text-xs font-bold text-white
                            opacity-0
                            shadow-lg
                            transition-all duration-300
                            group-hover:translate-x-0
                            group-hover:opacity-100
                        "
                    >
                        Choose a Service
                    </span>

                    {/* Circle */}
                    <span
                        className={`
                            flex h-14 w-14
                            items-center justify-center
                            rounded-full
                            text-white
                            ring-4 ring-white
                            shadow-[0_10px_30px_rgba(0, 143, 137,0.30)]
                            transition-all duration-300
                            group-hover:scale-110
                            ${isOpen
                                ? "rotate-90 bg-[#12345C]"
                                : "bg-[linear-gradient(135deg,#008F89_0%,#005F5B_100%)] group-hover:bg-[linear-gradient(135deg,#007A76_0%,#004D49_100%)]"
                            }
                        `}
                    >
                        {isOpen ? (
                            <X size={22} strokeWidth={2.4} />
                        ) : (
                            <Phone size={22} strokeWidth={2.3} />
                        )}
                    </span>
                </button>
            </div>
        </>
    );
}