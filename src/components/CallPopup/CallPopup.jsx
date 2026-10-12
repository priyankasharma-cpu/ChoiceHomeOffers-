import { useEffect, useRef, useState } from "react";

import {
    ArrowRight,
    Bug,
    CheckCircle2,
    PhoneCall,
    ShieldCheck,
    Wrench,
    X,
} from "lucide-react";

import "./CallPopup.css";


/* =========================================================
   SERVICE PHONE NUMBERS
========================================================= */

const PEST_PHONE = "+18889874472";
const PEST_DISPLAY_PHONE = "+1 (888) 987-4472";

const PLUMBING_PHONE = "+18885066168";
const PLUMBING_DISPLAY_PHONE = "+1 (888) 506-6168";


/* =========================================================
   POPUP SETTINGS
========================================================= */

// Popup close/show hone ke baad kitni der tak dobara na aaye
const POPUP_COOLDOWN = 60 * 1000; // 1 minute


export default function CallPopup() {
    const [isOpen, setIsOpen] = useState(false);

    const lastShownRef = useRef(0);
    const isOpenRef = useRef(false);


    /* =========================================================
       SHOW POPUP
    ========================================================= */

    const showPopup = () => {
        const now = Date.now();

        // Already open
        if (isOpenRef.current) {
            return;
        }

        // Cooldown check
        if (now - lastShownRef.current < POPUP_COOLDOWN) {
            return;
        }

        lastShownRef.current = now;
        isOpenRef.current = true;

        setIsOpen(true);
    };


    /* =========================================================
       CLOSE POPUP
    ========================================================= */

    const closePopup = () => {
        isOpenRef.current = false;

        setIsOpen(false);

        // Close karne ke baad cooldown restart
        lastShownRef.current = Date.now();
    };


    /* =========================================================
       CALL CLICK
    ========================================================= */

    const handleCallClick = () => {
        isOpenRef.current = false;

        setIsOpen(false);

        lastShownRef.current = Date.now();
    };


    /* =========================================================
       GLOBAL POPUP EVENTS
    ========================================================= */

    useEffect(() => {

        /*
            CLICK

            Website par user interaction hone par
            popup show ho sakta hai.
        */

        const handleGlobalClick = () => {
            showPopup();
        };


        /*
            SCROLL
        */

        const handleScroll = () => {
            showPopup();
        };


        /*
            MOBILE TOUCH
        */

        const handleTouch = () => {
            showPopup();
        };


        /*
            DESKTOP EXIT INTENT

            Mouse browser ke top edge ki taraf
            jane par popup show hoga.
        */

        const handleMouseLeave = (event) => {
            if (event.clientY <= 5) {
                showPopup();
            }
        };


        /*
            TAB / BROWSER VISIBILITY
        */

        const handleVisibilityChange = () => {
            if (document.visibilityState === "hidden") {
                showPopup();
            }
        };


        /* ================= EVENTS ================= */

        document.addEventListener(
            "click",
            handleGlobalClick,
            true
        );

        window.addEventListener(
            "scroll",
            handleScroll,
            { passive: true }
        );

        document.addEventListener(
            "touchstart",
            handleTouch,
            { passive: true }
        );

        document.addEventListener(
            "mouseleave",
            handleMouseLeave
        );

        document.addEventListener(
            "visibilitychange",
            handleVisibilityChange
        );


        /* ================= CLEANUP ================= */

        return () => {
            document.removeEventListener(
                "click",
                handleGlobalClick,
                true
            );

            window.removeEventListener(
                "scroll",
                handleScroll
            );

            document.removeEventListener(
                "touchstart",
                handleTouch
            );

            document.removeEventListener(
                "mouseleave",
                handleMouseLeave
            );

            document.removeEventListener(
                "visibilitychange",
                handleVisibilityChange
            );
        };

    }, []);


    /* =========================================================
       DON'T RENDER WHEN CLOSED
    ========================================================= */

    if (!isOpen) {
        return null;
    }


    /* =========================================================
       RENDER
    ========================================================= */

    return (
        <div
            className="call-popup-overlay"
            onClick={closePopup}
        >
            <div
                className="call-popup"
                role="dialog"
                aria-modal="true"
                aria-labelledby="call-popup-title"
                onClick={(event) => {
                    // Popup ke andar click karne par
                    // overlay close nahi hoga
                    event.stopPropagation();
                }}
            >

                {/* ================= TOP LINE ================= */}

                <div className="call-popup-top-line" />


                {/* ================= CLOSE ================= */}

                <button
                    type="button"
                    onClick={closePopup}
                    className="call-popup-close"
                    aria-label="Close service popup"
                >
                    <X
                        size={18}
                        strokeWidth={2.4}
                    />
                </button>


                {/* ================= CONTENT ================= */}

                <div className="call-popup-content">

                    {/* Main Icon */}

                    <div className="call-popup-icon">
                        <PhoneCall
                            size={26}
                            strokeWidth={2.4}
                        />
                    </div>


                    {/* Label */}

                    <p className="call-popup-label">
                        Choice Home Offers
                    </p>


                    {/* Heading */}

                    <h2 id="call-popup-title">
                        What can we help you{" "}
                        <span>with today?</span>
                    </h2>


                    {/* Description */}

                    <p className="call-popup-description">
                        Choose Pest Control or Plumbing below and call
                        the dedicated service line to discuss your home
                        service needs.
                    </p>


                    {/* =================================================
                        SERVICE CARDS
                    ================================================= */}

                    <div className="call-popup-services">


                        {/* =============================================
                            PEST CONTROL
                        ============================================= */}

                        <article className="call-popup-service">

                            {/* Header */}

                            <div className="call-popup-service-header">

                                <div className="call-popup-service-icon">
                                    <Bug
                                        size={21}
                                        strokeWidth={2.3}
                                    />
                                </div>

                                <div>
                                    <p className="call-popup-service-label">
                                        Pest Control
                                    </p>

                                    <h3>
                                        Pest Control
                                    </h3>
                                </div>

                            </div>


                            {/* Description */}

                            <p className="call-popup-service-description">
                                Need help with ants, rodents, termites,
                                bed bugs, mosquitoes, or other common
                                household pests?
                            </p>


                            {/* Phone Number */}

                            <a
                                href={`tel:${PEST_PHONE}`}
                                onClick={handleCallClick}
                                className="call-popup-number"
                                aria-label={`Call Pest Control at ${PEST_DISPLAY_PHONE}`}
                            >
                                <PhoneCall
                                    size={16}
                                    strokeWidth={2.5}
                                />

                                <span>
                                    {PEST_DISPLAY_PHONE}
                                </span>
                            </a>


                            {/* Call Button */}

                            <a
                                href={`tel:${PEST_PHONE}`}
                                onClick={handleCallClick}
                                className="call-popup-service-button"
                                aria-label={`Call Pest Control at ${PEST_DISPLAY_PHONE}`}
                            >
                                <PhoneCall
                                    size={16}
                                    strokeWidth={2.5}
                                />

                                <span>
                                    Call Pest Control
                                </span>

                                <ArrowRight
                                    size={16}
                                    strokeWidth={2.5}
                                    className="call-popup-arrow"
                                />
                            </a>

                        </article>


                        {/* =============================================
                            PLUMBING
                        ============================================= */}

                        <article className="call-popup-service">

                            {/* Header */}

                            <div className="call-popup-service-header">

                                <div className="call-popup-service-icon">
                                    <Wrench
                                        size={21}
                                        strokeWidth={2.3}
                                    />
                                </div>

                                <div>
                                    <p className="call-popup-service-label">
                                        Plumbing
                                    </p>

                                    <h3>
                                        Plumbing
                                    </h3>
                                </div>

                            </div>


                            {/* Description */}

                            <p className="call-popup-service-description">
                                Need help with leaks, clogged drains,
                                pipes, toilets, water heaters, or other
                                common plumbing problems?
                            </p>


                            {/* Phone Number */}

                            <a
                                href={`tel:${PLUMBING_PHONE}`}
                                onClick={handleCallClick}
                                className="call-popup-number"
                                aria-label={`Call Plumbing at ${PLUMBING_DISPLAY_PHONE}`}
                            >
                                <PhoneCall
                                    size={16}
                                    strokeWidth={2.5}
                                />

                                <span>
                                    {PLUMBING_DISPLAY_PHONE}
                                </span>
                            </a>


                            {/* Call Button */}

                            <a
                                href={`tel:${PLUMBING_PHONE}`}
                                onClick={handleCallClick}
                                className="call-popup-service-button"
                                aria-label={`Call Plumbing at ${PLUMBING_DISPLAY_PHONE}`}
                            >
                                <PhoneCall
                                    size={16}
                                    strokeWidth={2.5}
                                />

                                <span>
                                    Call Plumbing
                                </span>

                                <ArrowRight
                                    size={16}
                                    strokeWidth={2.5}
                                    className="call-popup-arrow"
                                />
                            </a>

                        </article>

                    </div>


                    {/* =================================================
                        TRUST BAR
                    ================================================= */}

                    <div className="call-popup-trust">

                        <div className="call-popup-trust-item">
                            <ShieldCheck
                                size={15}
                                strokeWidth={2.4}
                            />

                            <span>
                                Dedicated service lines
                            </span>
                        </div>


                        <div className="call-popup-trust-divider" />


                        <div className="call-popup-trust-item">
                            <CheckCircle2
                                size={15}
                                strokeWidth={2.4}
                            />

                            <span>
                                Easy phone connection
                            </span>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}