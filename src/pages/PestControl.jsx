import { useState } from "react";
import {
    ArrowRight,
    BadgeCheck,
    CheckCircle2,
    Clock3,
    Phone,
    ShieldCheck,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import pestControlService from "../data/pestControl";
import PestServiceCard from "../components/pest-control/PestServiceCard";
import ServiceCallModal from "../components/pest-control/ServiceCallModal";


import heroPestImage from "../assets/images/pest-control/pestcontrolheroimg.png";
import termiteImage from "../assets/images/pest-control/heroimage3.png";
import rodentImage from "../assets/images/pest-control/pestcontrolimages.png";


export default function PestControl() {
    const [selectedService, setSelectedService] = useState(null);

    const {
        phone,
        displayPhone,
        subServices,
    } = pestControlService;

    const handleOpenCallModal = (service) => {
        setSelectedService(service);
        document.body.style.overflow = "hidden";
    };

    const handleCloseCallModal = () => {
        setSelectedService(null);
        document.body.style.overflow = "";
    };

    return (
        <>
            {/* EXISTING WEBSITE HEADER */}
            <Header />

            <main className="overflow-hidden bg-[#FFFFFF]">

                {/* =========================================================
                HERO SECTION
            ========================================================= */}

                <section
                    className="
                    relative
                    overflow-hidden
                    border-b border-[#E1E7ED]
                    bg-[#F0F5F8]
                    pt-[72px]
                    sm:pt-[80px]
                    lg:pt-[88px]
                "
                >
                    {/* BACKGROUND DECORATION */}

                    <div
                        className="
                        pointer-events-none
                        absolute
                        -left-32 top-16
                        h-[400px] w-[400px]
                        rounded-full
                        bg-[#E1E7ED]/35
                        blur-[100px]
                    "
                    />

                    <div
                        className="
                        pointer-events-none
                        absolute
                        -right-32 bottom-0
                        h-[420px] w-[420px]
                        rounded-full
                        bg-[#E1E7ED]/50
                        blur-[100px]
                    "
                    />

                    <div
                        className="
                        relative
                        mx-auto
                        grid w-full
                        max-w-[1440px]
                        items-center
                        gap-10

                        px-4
                        py-12

                        sm:px-6
                        sm:py-14

                        md:px-8

                        lg:grid-cols-[1fr_0.9fr]
                        lg:px-12
                        lg:py-16

                        xl:px-16
                        xl:py-20
                    "
                    >
                        {/* =============================================
                        HERO LEFT
                    ============================================= */}

                        <div className="max-w-[680px]">

                            {/* EYEBROW */}

                            <div
                                className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                border border-[#E1E7ED]
                                bg-white/80
                                px-3.5 py-2

                                text-[12px]
                                font-bold
                                uppercase
                                tracking-[0.12em]
                                text-[#008F89]

                                shadow-sm
                            "
                            >
                                <ShieldCheck
                                    size={15}
                                    strokeWidth={2.4}
                                />

                                Pest Control Services
                            </div>

                            {/* HEADING */}

                            <h1
                                className="
                                mt-5
                                max-w-[650px]

                                text-[38px]
                                font-extrabold
                                leading-[1.07]
                                tracking-[-0.04em]
                                text-[#12345C]

                                sm:text-[46px]
                                lg:text-[52px]
                                xl:text-[58px]
                            "
                            >
                                Pest Problems?
                                <span className="text-[#008F89]">
                                    {" "}Find the Right Help
                                </span>{" "}
                                for Your Home.
                            </h1>

                            {/* DESCRIPTION */}

                            <p
                                className="
                                mt-5
                                max-w-[610px]

                                text-[16px]
                                leading-7
                                text-[#657A94]

                                sm:text-[17px]
                            "
                            >
                                Connect with professionals for common household
                                pest problems, from ants and rodents to termites,
                                mosquitoes, bed bugs, and more.
                            </p>

                            {/* TRUST POINTS */}

                            <div
                                className="
                                mt-6
                                grid
                                gap-3

                                sm:grid-cols-3
                            "
                            >
                                <div className="flex items-center gap-2 text-[13px] font-semibold text-[#12345C]">
                                    <CheckCircle2
                                        size={17}
                                        className="text-[#008F89]"
                                    />
                                    Residential Services
                                </div>

                                <div className="flex items-center gap-2 text-[13px] font-semibold text-[#12345C]">
                                    <Clock3
                                        size={17}
                                        className="text-[#008F89]"
                                    />
                                    Fast Call Support
                                </div>

                                <div className="flex items-center gap-2 text-[13px] font-semibold text-[#12345C]">
                                    <BadgeCheck
                                        size={17}
                                        className="text-[#008F89]"
                                    />
                                    Easy Phone Connection
                                </div>
                            </div>

                            {/* CTA BUTTONS */}

                            <div
                                className="
                                mt-8
                                flex flex-col
                                gap-3

                                sm:flex-row
                            "
                            >
                                <a
                                    href={`tel:${phone}`}
                                    className="
                                    group
                                    inline-flex
                                    items-center
                                    justify-center
                                    gap-2.5

                                    rounded-full
                                    bg-[linear-gradient(135deg,#008F89_0%,#005F5B_100%)]

                                    px-6 py-3.5

                                    text-[14px]
                                    font-bold
                                    text-white

                                    shadow-[0_10px_28px_rgba(0, 143, 137,0.25)]

                                    transition-all
                                    duration-300

                                    hover:-translate-y-0.5
                                    hover:bg-[linear-gradient(135deg,#007A76_0%,#004D49_100%)]
                                "
                                >
                                    <Phone
                                        size={18}
                                        strokeWidth={2.5}
                                    />

                                    Call {displayPhone}

                                    <ArrowRight
                                        size={17}
                                        className="
                                        transition-transform
                                        group-hover:translate-x-1
                                    "
                                    />
                                </a>

                                <a
                                    href="#pest-services"
                                    className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    gap-2

                                    rounded-full
                                    border border-[#E1E7ED]
                                    bg-white

                                    px-6 py-3.5

                                    text-[14px]
                                    font-bold
                                    text-[#12345C]

                                    transition

                                    hover:border-[#008F89]
                                    hover:text-[#008F89]
                                "
                                >
                                    Browse Pest Services

                                    <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>

                        {/* =============================================
    HERO RIGHT — PREMIUM 3 IMAGE COLLAGE
============================================= */}

                        <div className="relative lg:pl-5">

                            {/* BACKGROUND DECORATION */}
                            <div
                                className="
            pointer-events-none
            absolute
            -right-8 -top-8
            h-[180px] w-[180px]
            rounded-full
            bg-[#008F89]/10
            blur-[55px]
        "
                            />

                            <div
                                className="
            pointer-events-none
            absolute
            -bottom-8 left-4
            h-[160px] w-[160px]
            rounded-full
            bg-[#008F89]/30
            blur-[55px]
        "
                            />

                            {/* SMALL TOP LABEL */}
                            <div
                                className="
            absolute
            -top-4
            left-7
            z-30

            hidden
            items-center
            gap-2

            rounded-full
            border border-[#E1E7ED]
            bg-white

            px-4 py-2

            text-[11px]
            font-bold
            uppercase
            tracking-[0.12em]
            text-[#12345C]

            shadow-[0_10px_30px_rgba(40,35,30,0.12)]

            sm:flex
        "
                            >
                                <span
                                    className="
                h-2 w-2
                animate-pulse
                rounded-full
                bg-[#008F89]
            "
                                />

                                Home Pest Solutions
                            </div>

                            {/* =========================================
    COLLAGE GRID
========================================= */}

                            <div
                                className="
        relative
        grid
        h-[430px]
        grid-cols-[1.35fr_0.75fr]
      // Updated
grid-rows-[minmax(0,1fr)_minmax(0,1fr)]
        gap-3

        sm:h-[500px]
        sm:gap-4

        lg:h-[520px]
    "
                            >
                                {/* =====================================
        LARGE MAIN IMAGE
    ===================================== */}

                                <div
                                    className="
            group
            relative
            col-start-1
            row-start-1
            row-end-3
            h-full
            min-h-0
            overflow-hidden
            rounded-[28px]
            border-[5px]
            border-white
            bg-white
            shadow-[0_25px_65px_rgba(43,35,29,0.18)]
        "
                                >
                                    {/* MAIN IMAGE */}
                                    <img
                                        src={heroPestImage}
                                        alt="Choice Home Offers pest control team"
                                        className="
    absolute inset-0 block
    transition-transform duration-700
    group-hover:scale-[1.04]
  "
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            maxWidth: "none",
                                            maxHeight: "none",
                                            objectFit: "cover",
                                            objectPosition: "center",
                                        }}
                                    />

                                    {/* DARK BOTTOM GRADIENT */}

                                    <div
                                        className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-black/40
                via-black/5
                to-transparent
            "
                                    />

                                    {/* IMAGE LABEL */}

                                    <div
                                        className="
                absolute
                bottom-5
                left-5
                z-10
                rounded-full
                border
                border-white/30
                bg-black/40
                px-3.5
                py-2
                text-[11px]
                font-bold
                text-white
                backdrop-blur-md
            "
                                    >
                                        Residential Pest Control
                                    </div>
                                </div>

                                {/* =====================================
        TOP SMALL — TERMITE
    ===================================== */}

                                <div
                                    className="
            group
            relative
            col-start-2
            row-start-1
            h-full
            min-h-0
            overflow-hidden
            rounded-[22px]
            border-[4px]
            border-white
            bg-white
            shadow-[0_16px_40px_rgba(43,35,29,0.14)]
        "
                                >
                                    {/* TERMITE IMAGE */}
                                    <img
                                        src={termiteImage}
                                        alt="Termite control service"
                                        className="
    absolute inset-0 block
    transition-transform duration-700
    group-hover:scale-110
  "
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            maxWidth: "none",
                                            maxHeight: "none",
                                            objectFit: "cover",
                                            objectPosition: "center",
                                        }}
                                    />


                                    <div
                                        className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-black/50
                via-transparent
                to-transparent
            "
                                    />

                                    <div
                                        className="
                absolute
                bottom-3
                left-3
                z-10
                text-[11px]
                font-bold
                text-white
                sm:text-[12px]
            "
                                    >
                                        Termite Control
                                    </div>
                                </div>

                                {/* =====================================
        BOTTOM SMALL — RODENT
    ===================================== */}

                                <div
                                    className="
            group
            relative
            col-start-2
            row-start-2
            h-full
            min-h-0
            overflow-hidden
            rounded-[22px]
            border-[4px]
            border-white
            bg-white
            shadow-[0_16px_40px_rgba(43,35,29,0.14)]
        "
                                >
                                    {/* RODENT IMAGE */}
                                    <img
                                        src={rodentImage}
                                        alt="Rodent control service"
                                        className="
    absolute inset-0 block
    transition-transform duration-700
    group-hover:scale-110
  "
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            maxWidth: "none",
                                            maxHeight: "none",
                                            objectFit: "cover",
                                            objectPosition: "center",
                                        }}
                                    />

                                    <div
                                        className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-black/50
                via-transparent
                to-transparent
            "
                                    />

                                    <div
                                        className="
                absolute
                bottom-3
                left-3
                z-10
                text-[11px]
                font-bold
                text-white
                sm:text-[12px]
            "
                                    >
                                        Pest Control
                                    </div>
                                </div>
                            </div>

                            {/* =========================================
                             ORANGE FLOATING DECORATION
                                ========================================= */}

                            <div
                                className="
            pointer-events-none
            absolute
            -right-3
            top-[42%]
            z-20

            hidden
            h-[70px] w-[70px]

            rounded-full
            border-[12px]
            border-[#008F89]/20

            lg:block
        "
                            />

                            {/* =========================================
                                  FLOATING CALL CARD
                                 ========================================= */}

                            <a
                                href={`tel:${phone}`}
                                className="
            group

            absolute
            -bottom-5
            left-5
            right-5
            z-30

            flex
            items-center
            gap-3

            rounded-[18px]

            border
            border-white/70

            bg-white/95

            p-3.5

            shadow-[0_18px_45px_rgba(40,32,26,0.18)]

            backdrop-blur-xl

            transition-all
            duration-300

            hover:-translate-y-1

            sm:left-8
            sm:right-auto
            sm:min-w-[280px]
            sm:p-4
        "
                            >

                                {/* CALL ICON */}
                                <div
                                    className="
                relative

                flex
                h-12 w-12
                shrink-0

                items-center
                justify-center

                rounded-full

                bg-[#008F89]

                text-white

                shadow-[0_8px_20px_rgba(0, 143, 137,0.30)]
            "
                                >
                                    <span
                                        className="
                    absolute
                    inset-0

                    animate-ping

                    rounded-full

                    bg-[#008F89]/30
                "
                                    />

                                    <Phone
                                        size={20}
                                        strokeWidth={2.5}
                                        className="relative"
                                    />
                                </div>

                                <div>
                                    <div className="flex items-center gap-2">
                                        <span
                                            className="
                        h-2 w-2
                        rounded-full
                        bg-[#008F89]
                    "
                                        />

                                        <p
                                            className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.1em]
                        text-[#657A94]
                    "
                                        >
                                            Need Pest Control?
                                        </p>
                                    </div>

                                    <p
                                        className="
                    mt-1
                    text-[16px]
                    font-extrabold
                    text-[#12345C]

                    sm:text-[17px]
                "
                                    >
                                        Call {displayPhone}
                                    </p>

                                    <p
                                        className="
                    mt-0.5
                    text-[11px]
                    text-[#657A94]
                "
                                    >
                                        Discuss your service needs
                                    </p>
                                </div>

                                <ArrowRight
                                    size={17}
                                    className="
                ml-auto
                text-[#008F89]

                transition-transform
                duration-300

                group-hover:translate-x-1
            "
                                />
                            </a>

                        </div>
                    </div>
                </section>

                {/* =========================================================
                SERVICES SECTION
            ========================================================= */}

                <section
                    id="pest-services"
                    className="
                    scroll-mt-24
                    bg-white
                    py-14

                    sm:py-16
                    lg:py-20
                "
                >
                    <div
                        className="
                        mx-auto
                        w-full
                        max-w-[1440px]

                        px-4
                        sm:px-6
                        md:px-8
                        lg:px-12
                        xl:px-16
                    "
                    >
                        {/* SECTION HEADER */}

                        <div
                            className="
                            flex flex-col
                            gap-5

                            border-b
                            border-[#E1E7ED]

                            pb-8

                            lg:flex-row
                            lg:items-end
                            lg:justify-between
                        "
                        >
                            <div className="max-w-[720px]">

                                <div
                                    className="
                                    mb-3
                                    inline-flex
                                    items-center
                                    gap-2

                                    text-[12px]
                                    font-bold
                                    uppercase
                                    tracking-[0.12em]
                                    text-[#008F89]
                                "
                                >
                                    <span
                                        className="
                                        h-2 w-2
                                        rounded-full
                                        bg-[#008F89]
                                    "
                                    />

                                    Explore Services
                                </div>

                                <h2
                                    className="
                                    text-[32px]
                                    font-extrabold
                                    leading-tight
                                    tracking-[-0.035em]
                                    text-[#12345C]

                                    sm:text-[38px]
                                    lg:text-[44px]
                                "
                                >
                                    Browse Pest Control Services
                                </h2>

                                <p
                                    className="
                                    mt-3
                                    max-w-[650px]

                                    text-[15px]
                                    leading-7
                                    text-[#657A94]

                                    sm:text-[16px]
                                "
                                >
                                    Explore solutions for common household pest
                                    problems and call to discuss the service that
                                    fits your needs.
                                </p>
                            </div>

                            {/* CALL BOX */}

                            <a
                                href={`tel:${phone}`}
                                className="
                                group
                                inline-flex
                                w-fit
                                items-center
                                gap-3

                                rounded-xl
                                border border-[#E1E7ED]
                                bg-[#F0F5F8]

                                px-4 py-3

                                transition

                                hover:border-[#008F89]
                            "
                            >
                                <div
                                    className="
                                    flex h-9 w-9
                                    items-center
                                    justify-center

                                    rounded-lg
                                    bg-[#008F89]
                                    text-white
                                "
                                >
                                    <PhoneCallAnimated />
                                </div>

                                <div>
                                    <p
                                        className="
                                        text-[10px]
                                        font-bold
                                        uppercase
                                        tracking-[0.1em]
                                        text-[#008F89]
                                    "
                                    >
                                        Need help?
                                    </p>

                                    <p
                                        className="
                                        mt-0.5
                                        text-[14px]
                                        font-bold
                                        text-[#12345C]
                                    "
                                    >
                                        {displayPhone}
                                    </p>
                                </div>
                            </a>
                        </div>

                        {/* =============================================
                        SERVICE GRID
                    ============================================= */}

                        <div
                            className="
                            mt-8
                            grid
                            grid-cols-1
                            gap-5

                            sm:grid-cols-2

                            lg:grid-cols-3

                            xl:grid-cols-4
                        "
                        >
                            {subServices.map((service, index) => (
                                <PestServiceCard
                                    key={service.id}
                                    service={service}
                                    index={index}
                                    phone={phone}
                                    displayPhone={displayPhone}
                                    onCallClick={handleOpenCallModal}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* =========================================================
                BOTTOM CALL CTA
            ========================================================= */}

                <section className="bg-[#12345C] py-14 sm:py-16">
                    <div
                        className="
                        mx-auto
                        flex w-full
                        max-w-[1200px]
                        flex-col
                        items-center
                        px-4
                        text-center
                        sm:px-6
                    "
                    >
                        <div
                            className="
                            flex h-12 w-12
                            items-center
                            justify-center
                            rounded-full
                            bg-white/10
                            text-[#008F89]
                        "
                        >
                            <Phone
                                size={22}
                                strokeWidth={2.4}
                            />
                        </div>

                        <h2
                            className="
                            mt-5
                            max-w-[700px]

                            text-[30px]
                            font-extrabold
                            tracking-[-0.03em]
                            text-white

                            sm:text-[38px]
                        "
                        >
                            Need Help With a Pest Problem?
                        </h2>

                        <p
                            className="
                            mt-3
                            max-w-[600px]

                            text-[15px]
                            leading-7
                            text-white/70
                        "
                        >
                            Call Choice Home Offers to discuss your pest control needs
                            and take the next step toward finding service.
                        </p>

                        <a
                            href={`tel:${phone}`}
                            className="
                            mt-7
                            inline-flex
                            items-center
                            gap-2.5

                            rounded-full
                            bg-[linear-gradient(135deg,#008F89_0%,#005F5B_100%)]

                            px-7 py-4

                            text-[15px]
                            font-bold
                            text-white

                            transition-all
                            duration-300

                            hover:-translate-y-0.5
                            hover:bg-[linear-gradient(135deg,#007A76_0%,#004D49_100%)]
                        "
                        >
                            <PhoneCallAnimated />

                            Call {displayPhone}

                            <ArrowRight size={17} />
                        </a>
                    </div>
                </section>
            </main>


            {/* EXISTING WEBSITE FOOTER */}
            <Footer />

            {/* =========================================
                SERVICE CALL POPUP
            ========================================= */}

            <ServiceCallModal
                isOpen={Boolean(selectedService)}
                onClose={handleCloseCallModal}
                service={selectedService}
                phone={phone}
                displayPhone={displayPhone}
            />

        </>

    );
}


/* =============================================================
   SMALL ANIMATED PHONE COMPONENT
============================================================= */

function PhoneCallAnimated() {
    return (
        <span className="relative flex items-center justify-center">
            <span
                className="
                    absolute
                    h-7 w-7
                    animate-ping
                    rounded-full
                    bg-current
                    opacity-10
                "
            />

            <Phone
                size={17}
                strokeWidth={2.5}
                className="relative"
            />
        </span>
    );
}