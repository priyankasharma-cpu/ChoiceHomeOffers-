
import { useState } from "react";
import "./Header.css";
import {
    ArrowRight,
    Menu,
    X,
    PhoneIncoming,
    ChevronDown,
} from "lucide-react";

import pestControlService from "../data/pestControl";
import plumbingService from "../data/plumbing";

// ==========================================
// CALL CTA CONFIGURATION
// ==========================================

const callActions = [
    {
        label: "Pest Control",
        phone: "+18889874472",
        displayPhone: "+1 (888) 987-4472",
        gradient: "from-[#008F89] to-[#005F5B]",
    },
    {
        label: "Plumbing",
        phone: "+18885066168",
        displayPhone: "+1 (888) 506-6168",
        gradient: "from-[#12345C] to-[#245C91]",
    },
];

// ==========================================
// ANIMATED CALL BUTTON
// ==========================================

function CallButton({ action, mobile = false, onClick }) {
    return (
        <a
            href={`tel:${action.phone}`}
            onClick={onClick}
            aria-label={`Call ${action.label} at ${action.displayPhone}`}
            className={`
        group relative flex shrink-0 items-center
        justify-center overflow-hidden
        rounded-xl bg-gradient-to-r
        ${action.gradient}
        py-2.5 text-white
        shadow-[0_6px_18px_rgba(0,0,0,0.12)]
        transition-all duration-300
        hover:-translate-y-0.5
        hover:shadow-[0_12px_25px_rgba(0,0,0,0.18)]
        ${mobile ? "w-full gap-2.5 px-3 py-3.5" : "gap-2 px-2.5"}
      `}
        >
            {/* Animated incoming call icon */}
            <span
                className="
          relative flex h-9 w-9 shrink-0
          items-center justify-center
          rounded-full bg-white/15
        "
            >
                <span
                    className="
            absolute inset-0 rounded-full
            border border-white/50
            animate-ping
            motion-reduce:animate-none
          "
                />

                <PhoneIncoming
                    size={19}
                    strokeWidth={2.4}
                    className="
            relative z-10
            transition-transform duration-300
            group-hover:rotate-12
            group-hover:scale-110
          "
                />
            </span>

            {/* Button content */}
            <span className="flex flex-col text-left leading-tight">
                <span className="whitespace-nowrap text-[13px] font-bold">
                    {action.label}
                </span>

                <span className="mt-1 whitespace-nowrap text-[11px] font-medium text-white/90">
                    {action.displayPhone}
                </span>
            </span>
        </a>
    );
}

// ==========================================
// HEADER COMPONENT
// ==========================================

export default function Header() {
    const [open, setOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] =
        useState(false);
    const [mobileCategoryOpen, setMobileCategoryOpen] =
        useState(null);

    const serviceMenu = [
        pestControlService,
        plumbingService,
    ];

    const closeMobileMenu = () => {
        setOpen(false);
        setMobileServicesOpen(false);
        setMobileCategoryOpen(null);
    };

    const toggleMobileCategory = (title) => {
        setMobileCategoryOpen((current) =>
            current === title ? null : title
        );
    };

    return (
        <header
            className="
        fixed top-0 z-50 w-full
        border-b border-[#E1E7ED]
        bg-white/95 backdrop-blur-xl
      "
        >
            {/* ======================================
          MAIN HEADER
      ====================================== */}

            <div
                className="
          mx-auto flex h-[72px] w-full
          max-w-[1430px] items-center
          justify-between gap-4 px-4
          sm:h-[80px] sm:px-10
          lg:px-16
          xl:h-[88px] xl:px-20
        "
            >
                {/* LOGO */}

                <a
                    href="/"
                    onClick={closeMobileMenu}
                    className="
            -ml-3 flex h-full w-[92px] shrink-0 items-center
            sm:w-[100px]
            xl:w-[112px]
          "
                >
                    <img
                        src="/images/choicehomeoffers.png"
                        alt="Choice Home Offers"
                        className="
              choice-header-logo object-contain
            "
                    />
                </a>

                {/* ======================================
            DESKTOP NAVIGATION
        ====================================== */}

                <nav
                    className="
            choice-header-desktop-nav hidden min-w-0 flex-1
            items-center justify-center
            gap-4 xl:flex
            2xl:gap-5
          "
                >
                    {/* HOME */}

                    <a
                        href="/"
                        className="
              relative whitespace-nowrap py-3
              text-[15px] font-semibold
              text-[#008F89]
              2xl:text-[15px]
            "
                    >
                        Home

                        <span
                            className="
                absolute bottom-0 left-0
                h-[3px] w-full rounded-full
                bg-[#008F89]
              "
                        />
                    </a>

                    {/* ======================================
              SERVICES DROPDOWN
          ====================================== */}

                    <div
                        className="relative"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                    >
                        <button
                            type="button"
                            onClick={() =>
                                setServicesOpen((current) => !current)
                            }
                            aria-expanded={servicesOpen}
                            className="
                flex items-center gap-1.5
                whitespace-nowrap py-3
                text-[15px] font-semibold
                text-[#12345C]
                transition-colors duration-200
                hover:text-[#008F89]
                2xl:text-[15px]
              "
                        >
                            Services

                            <ChevronDown
                                size={16}
                                strokeWidth={2.2}
                                className={`
                  transition-transform duration-200
                  ${servicesOpen ? "rotate-180" : ""}
                `}
                            />
                        </button>

                        {/* DROPDOWN PANEL */}

                        <div
                            className={`
                absolute -left-16 top-full
                w-[650px]
                pt-3 transition-all duration-200
                ${servicesOpen
                                    ? "visible translate-y-0 opacity-100"
                                    : "invisible -translate-y-2 opacity-0"
                                }
              `}
                        >
                            <div
                                className="
                  overflow-hidden rounded-2xl
                  border border-[#E1E7ED]
                  bg-white p-3
                  shadow-[0_20px_55px_rgba(50,35,20,0.14)]
                "
                            >
                                <div className="grid grid-cols-2 gap-3">
                                    {serviceMenu.map((service) => {
                                        const Icon = service.icon;

                                        return (
                                            <div
                                                key={service.slug}
                                                className="
                          rounded-xl border
                          border-[#E1E7ED]
                          bg-white p-4
                        "
                                            >
                                                {/* MAIN SERVICE */}

                                                <a
                                                    href={service.href}
                                                    className="group flex items-start gap-3"
                                                >
                                                    <div
                                                        className="
                              flex h-11 w-11 shrink-0
                              items-center justify-center
                              rounded-xl bg-[#F0F5F8]
                              text-[#008F89]
                              transition
                              group-hover:bg-[#008F89]
                              group-hover:text-white
                            "
                                                    >
                                                        <Icon
                                                            size={21}
                                                            strokeWidth={2.2}
                                                        />
                                                    </div>

                                                    <div className="min-w-0 flex-1">
                                                        <div
                                                            className="
                                flex items-center gap-1.5
                                text-[15px] font-bold
                                text-[#12345C]
                                transition-colors
                                group-hover:text-[#008F89]
                              "
                                                        >
                                                            {service.title}

                                                            <ArrowRight
                                                                size={14}
                                                                strokeWidth={2.3}
                                                                className="
                                  transition-transform
                                  duration-200
                                  group-hover:translate-x-1
                                "
                                                            />
                                                        </div>

                                                        <p
                                                            className="
                                mt-1 text-[12px] leading-5
                                text-[#657A94]
                              "
                                                        >
                                                            {service.description}
                                                        </p>
                                                    </div>
                                                </a>

                                                {/* POPULAR SUB SERVICES */}

                                                <div
                                                    className="
                            mt-4 border-t
                            border-[#E1E7ED] pt-3
                          "
                                                >
                                                    <p
                                                        className="
                              mb-2 px-2 text-[10px]
                              font-bold uppercase
                              tracking-[0.12em]
                              text-[#008F89]
                            "
                                                    >
                                                        Popular Services
                                                    </p>

                                                    <div className="grid grid-cols-1 gap-1">
                                                        {service.subServices
                                                            .slice(0, 6)
                                                            .map((subService) => (
                                                                <a
                                                                    key={subService.id}
                                                                    href={subService.href}
                                                                    className="
                                    group/sub flex items-center
                                    justify-between rounded-lg
                                    px-3 py-2 text-[15px]
                                    font-medium text-[#12345C]
                                    transition-all duration-200
                                    hover:bg-[#F0F5F8]
                                    hover:text-[#008F89]
                                  "
                                                                >
                                                                    <span>
                                                                        {subService.name}
                                                                    </span>

                                                                    <ArrowRight
                                                                        size={12}
                                                                        className="
                                      opacity-0
                                      transition-all
                                      group-hover/sub:translate-x-0.5
                                      group-hover/sub:opacity-100
                                    "
                                                                    />
                                                                </a>
                                                            ))}
                                                    </div>
                                                </div>

                                                {/* VIEW ALL SERVICES */}

                                                <a
                                                    href={service.href}
                                                    className="
                            mt-3 flex items-center
                            justify-center gap-1.5
                            rounded-lg border
                            border-[#E1E7ED]
                            bg-white px-3 py-2
                            text-[12px] font-bold
                            text-[#008F89]
                            transition
                            hover:border-[#008F89]
                            hover:bg-[#F0F5F8]
                          "
                                                >
                                                    View All {service.title} Services

                                                    <ArrowRight
                                                        size={13}
                                                        strokeWidth={2.3}
                                                    />
                                                </a>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* HOW IT WORKS */}

                    <a
                        href="/#how-it-works"
                        className="
              whitespace-nowrap py-3
              text-[15px] font-semibold
              text-[#12345C]
              transition-colors
              hover:text-[#008F89]
              2xl:text-[15px]
            "
                    >
                        How It Works
                    </a>

                    {/* WHY US */}

                    <a
                        href="/#why-us"
                        className="
              whitespace-nowrap py-3
              text-[15px] font-semibold
              text-[#12345C]
              transition-colors
              hover:text-[#008F89]
              2xl:text-[15px]
            "
                    >
                        Why Choice Home Offers
                    </a>

                    {/* ABOUT */}

                    <a
                        href="/#about"
                        className="
              whitespace-nowrap py-3
              text-[15px] font-semibold
              text-[#12345C]
              transition-colors
              hover:text-[#008F89]
              2xl:text-[15px]
            "
                    >
                        About Us
                    </a>

                    {/* CONTACT */}

                    <a
                        href="/contact"
                        className="
              whitespace-nowrap py-3
              text-[15px] font-semibold
              text-[#12345C]
              transition-colors
              hover:text-[#008F89]
              2xl:text-[15px]
            "
                    >
                        Contact Us
                    </a>
                </nav>

                {/* ======================================
            DESKTOP CTA BUTTONS
        ====================================== */}

                <div
                    className="
            hidden shrink-0 items-center
            gap-2 xl:flex
          "
                >
                    {callActions.map((action) => (
                        <CallButton
                            key={action.label}
                            action={action}
                        />
                    ))}
                </div>

                {/* ======================================
            MOBILE MENU TOGGLE
        ====================================== */}

                <button
                    type="button"
                    onClick={() => setOpen((current) => !current)}
                    aria-label="Toggle navigation"
                    aria-expanded={open}
                    className="
            flex h-10 w-10 shrink-0
            items-center justify-center
            rounded-xl border
            border-[#E1E7ED]
            bg-white text-[#12345C]
            sm:h-11 sm:w-11
            xl:hidden
          "
                >
                    {open ? <X size={21} /> : <Menu size={21} />}
                </button>
            </div>

            {/* ======================================
          MOBILE NAVIGATION
      ====================================== */}

            {open && (
                <div
                    className="
            max-h-[calc(100vh-72px)]
            overflow-y-auto border-t
            border-[#E1E7ED]
            bg-white px-4 py-4
            shadow-[0_15px_30px_rgba(40,30,20,0.08)]
            sm:px-6 sm:py-5
            xl:hidden
          "
                >
                    <nav
                        className="
              mx-auto flex w-full
              max-w-7xl flex-col gap-1
            "
                    >
                        {/* HOME */}

                        <a
                            href="/"
                            onClick={closeMobileMenu}
                            className="
                rounded-xl bg-[#F0F5F8]
                px-4 py-3 text-[14px]
                font-semibold text-[#008F89]
                sm:py-3.5 sm:text-[15px]
              "
                        >
                            Home
                        </a>

                        {/* MOBILE SERVICES BUTTON */}

                        <button
                            type="button"
                            onClick={() =>
                                setMobileServicesOpen(
                                    (current) => !current
                                )
                            }
                            aria-expanded={mobileServicesOpen}
                            className="
                flex w-full items-center
                justify-between rounded-xl
                px-4 py-3 text-left
                text-[14px] font-semibold
                text-[#12345C] transition
                hover:bg-[#F0F5F8]
                hover:text-[#008F89]
                sm:py-3.5 sm:text-[15px]
              "
                        >
                            <span>Services</span>

                            <ChevronDown
                                size={18}
                                strokeWidth={2.2}
                                className={`
                  transition-transform duration-200
                  ${mobileServicesOpen
                                        ? "rotate-180"
                                        : ""
                                    }
                `}
                            />
                        </button>

                        {/* MOBILE SERVICES DROPDOWN */}

                        {mobileServicesOpen && (
                            <div className="space-y-2 px-1 py-2">
                                {serviceMenu.map((service) => {
                                    const Icon = service.icon;

                                    const categoryIsOpen =
                                        mobileCategoryOpen === service.title;

                                    return (
                                        <div
                                            key={service.slug}
                                            className="
                        overflow-hidden rounded-xl
                        border border-[#E1E7ED]
                        bg-white
                      "
                                        >
                                            {/* SERVICE HEADER */}

                                            <div className="flex items-stretch">
                                                <a
                                                    href={service.href}
                                                    onClick={closeMobileMenu}
                                                    className="
                            flex min-w-0 flex-1
                            items-center gap-3
                            px-3 py-3
                          "
                                                >
                                                    <div
                                                        className="
                              flex h-9 w-9 shrink-0
                              items-center justify-center
                              rounded-lg bg-[#F0F5F8]
                              text-[#008F89]
                            "
                                                    >
                                                        <Icon
                                                            size={18}
                                                            strokeWidth={2.2}
                                                        />
                                                    </div>

                                                    <div className="min-w-0">
                                                        <p
                                                            className="
                                text-[14px] font-bold
                                text-[#12345C]
                              "
                                                        >
                                                            {service.title}
                                                        </p>

                                                        <p
                                                            className="
                                mt-0.5 truncate
                                text-[11px]
                                text-[#657A94]
                              "
                                                        >
                                                            {service.description}
                                                        </p>
                                                    </div>
                                                </a>

                                                {/* CATEGORY TOGGLE */}

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        toggleMobileCategory(
                                                            service.title
                                                        )
                                                    }
                                                    aria-label={`Show ${service.title} services`}
                                                    aria-expanded={categoryIsOpen}
                                                    className="
                            flex w-12 shrink-0
                            items-center justify-center
                            border-l border-[#E1E7ED]
                            text-[#008F89]
                          "
                                                >
                                                    <ChevronDown
                                                        size={18}
                                                        className={`
                              transition-transform
                              duration-200
                              ${categoryIsOpen
                                                                ? "rotate-180"
                                                                : ""
                                                            }
                            `}
                                                    />
                                                </button>
                                            </div>

                                            {/* MOBILE SUB SERVICES */}

                                            {categoryIsOpen && (
                                                <div
                                                    className="
                            border-t border-[#E1E7ED]
                            bg-white p-2
                          "
                                                >
                                                    {service.subServices
                                                        .slice(0, 6)
                                                        .map((subService) => (
                                                            <a
                                                                key={subService.id}
                                                                href={subService.href}
                                                                onClick={closeMobileMenu}
                                                                className="
                                  flex items-center
                                  justify-between
                                  rounded-lg px-3 py-2.5
                                  text-[13px] font-medium
                                  text-[#657A94]
                                  transition
                                  hover:bg-[#F0F5F8]
                                  hover:text-[#008F89]
                                "
                                                            >
                                                                <span>
                                                                    {subService.name}
                                                                </span>

                                                                <ArrowRight size={13} />
                                                            </a>
                                                        ))}

                                                    {/* VIEW ALL */}

                                                    <a
                                                        href={service.href}
                                                        onClick={closeMobileMenu}
                                                        className="
                              mt-1 flex items-center
                              justify-center gap-1.5
                              rounded-lg bg-[#F0F5F8]
                              px-3 py-2.5
                              text-[12px] font-bold
                              text-[#008F89]
                            "
                                                    >
                                                        View All {service.title}

                                                        <ArrowRight size={13} />
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {/* MOBILE NAV LINKS */}

                        {[
                            {
                                label: "How It Works",
                                href: "/#how-it-works",
                            },
                            {
                                label: "Why Choice Home Offers",
                                href: "/#why-us",
                            },
                            {
                                label: "About Us",
                                href: "/#about",
                            },
                            {
                                label: "Contact Us",
                                href: "/contact",
                            },
                        ].map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={closeMobileMenu}
                                className="
                  rounded-xl px-4 py-3
                  text-[14px] font-semibold
                  text-[#12345C]
                  transition
                  hover:bg-[#F0F5F8]
                  hover:text-[#008F89]
                  sm:py-3.5 sm:text-[15px]
                "
                            >
                                {item.label}
                            </a>
                        ))}

                        {/* ======================================
                MOBILE CTA BUTTONS
            ====================================== */}

                        <div
                            className="
                mt-4 grid grid-cols-1
                gap-3 sm:grid-cols-2
              "
                        >
                            {callActions.map((action) => (
                                <CallButton
                                    key={action.label}
                                    action={action}
                                    mobile
                                    onClick={closeMobileMenu}
                                />
                            ))}
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
