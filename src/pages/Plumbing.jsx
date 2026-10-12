import { useState } from "react";

import {
    ArrowRight,
    CheckCircle2,
    Clock3,
    Phone,
    ShieldCheck,
    Wrench,
    Droplets,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import plumbingService from "../data/plumbing";

import PlumbingServiceCard from "../components/plumbing/PlumbingServiceCard";
import PlumbingCallModal from "../components/plumbing/PlumbingCallModal";

// Hero images
import plumbingHero from "../assets/images/plumbing/imagehero'.png";
import drainImage from "../assets/images/plumbing/hero2imag.png";
import waterHeaterImage from "../assets/images/plumbing/hero3image.png";

export default function Plumbing() {
    const { phone, displayPhone, subServices } = plumbingService;

    const [selectedService, setSelectedService] = useState(null);

    const handleOpenCallModal = (service) => {
        setSelectedService(service);
    };

    const handleCloseCallModal = () => {
        setSelectedService(null);
    };

    const scrollToServices = () => {
        document
            .getElementById("plumbing-services")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <Header />

            <main className="overflow-hidden bg-[#FFFFFF]">

                {/* =========================================
            PLUMBING HERO
        ========================================= */}
                <section className="relative mt-[72px] overflow-hidden border-b border-[#E1E7ED] bg-gradient-to-br from-[#FFFFFF] via-[#F0F5F8] to-[#F0F5F8] sm:mt-[80px] lg:mt-[88px]">
                    {/* Background decorations */}
                    <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#008F89]/[0.05] blur-3xl" />
                    <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#12345C]/[0.06] blur-3xl" />

                    <div className="relative mx-auto grid min-h-[650px] max-w-[1280px] items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-20">

                        {/* =====================================
                LEFT CONTENT
            ===================================== */}
                        <div className="relative z-10 max-w-[610px]">

                            {/* Badge */}
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E1E7ED] bg-white px-4 py-2 shadow-sm">
                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F0F5F8] text-[#008F89]">
                                    <Wrench size={14} strokeWidth={2.5} />
                                </span>

                                <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#12345C]">
                                    Plumbing Services
                                </span>
                            </div>

                            {/* Heading */}
                            <h1 className="max-w-[590px] text-[40px] font-extrabold leading-[1.06] tracking-[-0.035em] text-[#12345C] sm:text-[48px] lg:text-[56px]">
                                Plumbing Problems?
                                <span className="block text-[#008F89]">
                                    Find the Right Help
                                </span>
                                for Your Home.
                            </h1>

                            {/* Description */}
                            <p className="mt-6 max-w-[570px] text-[15px] leading-7 text-[#657A94] sm:text-[16px]">
                                From leaking pipes and clogged drains to water heaters and
                                everyday plumbing needs, connect with professionals who can
                                help with your residential plumbing project.
                            </p>

                            {/* =====================================
                  TRUST POINTS
              ===================================== */}
                            <div className="mt-7 grid gap-3 sm:grid-cols-3">

                                <div className="flex items-center gap-2.5 text-[13px] font-semibold text-[#12345C]">
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F0F5F8] text-[#008F89]">
                                        <ShieldCheck size={16} />
                                    </span>
                                    Residential Services
                                </div>

                                <div className="flex items-center gap-2.5 text-[13px] font-semibold text-[#12345C]">
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F0F5F8] text-[#008F89]">
                                        <Clock3 size={16} />
                                    </span>
                                    Fast Call Support
                                </div>

                                <div className="flex items-center gap-2.5 text-[13px] font-semibold text-[#12345C]">
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F0F5F8] text-[#008F89]">
                                        <Phone size={16} />
                                    </span>
                                    Easy Connection
                                </div>

                            </div>

                            {/* =====================================
                  CTA BUTTONS
              ===================================== */}
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                                <a
                                    href={`tel:${phone}`}
                                    className="
                    group
                    inline-flex
                    min-h-[54px]
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    bg-[linear-gradient(135deg,#008F89_0%,#005F5B_100%)]
                    px-6
                    text-[14px]
                    font-extrabold
                    text-white
                    shadow-[0_12px_28px_rgba(0, 143, 137,0.25)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[linear-gradient(135deg,#007A76_0%,#004D49_100%)]
                    hover:shadow-[0_16px_32px_rgba(0, 143, 137,0.32)]
                  "
                                >
                                    <Phone size={18} fill="currentColor" />
                                    Call {displayPhone}
                                    <ArrowRight
                                        size={17}
                                        className="transition-transform group-hover:translate-x-1"
                                    />
                                </a>

                                <button
                                    type="button"
                                    onClick={scrollToServices}
                                    className="
                    inline-flex
                    min-h-[54px]
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-[#E1E7ED]
                    bg-white
                    px-6
                    text-[14px]
                    font-bold
                    text-[#12345C]
                    shadow-sm
                    transition-all
                    duration-300
                    hover:border-[#008F89]/40
                    hover:bg-[#F0F5F8]
                    hover:text-[#008F89]
                  "
                                >
                                    Browse Plumbing Services
                                    <ArrowRight size={17} />
                                </button>

                            </div>

                            {/* Bottom note */}
                            <div className="mt-5 flex items-center gap-2 text-[12px] font-medium text-[#657A94]">
                                <CheckCircle2
                                    size={15}
                                    className="text-[#008F89]"
                                />
                                Call to discuss your plumbing service needs.
                            </div>
                        </div>

                        {/* =====================================
                RIGHT IMAGE COLLAGE
            ===================================== */}
                        <div className="relative mx-auto w-full max-w-[610px] lg:mx-0">

                            {/* Decorative circle */}
                            <div className="pointer-events-none absolute -right-7 -top-7 h-28 w-28 rounded-full border-[18px] border-[#008F89]/10" />

                            {/* Top badge */}
                            <div className="absolute -top-4 left-7 z-30 hidden items-center gap-2 rounded-full border border-[#E1E7ED] bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#12345C] shadow-[0_10px_30px_rgba(43,35,29,0.12)] sm:flex">
                                <span className="h-2 w-2 animate-pulse rounded-full bg-[#008F89]" />
                                Home Plumbing Solutions
                            </div>

                            {/* =================================
                  COLLAGE
              ================================= */}
                            <div
                                className="
                  relative
                  grid
                  h-[430px]
                  grid-cols-[1.35fr_0.75fr]
                  grid-rows-[1fr_1fr]
                  gap-3
                  sm:h-[500px]
                  sm:gap-4
                  lg:h-[520px]
                "
                            >

                                {/* MAIN IMAGE */}
                                <div className="group relative col-start-1 row-start-1 row-end-3 h-full min-h-0 overflow-hidden rounded-[28px] border-[5px] border-white bg-white shadow-[0_25px_65px_rgba(43,35,29,0.18)]">
                                    <img
                                        src={plumbingHero}
                                        alt="Choice Home Offers plumbing professional"
                                        className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                                    />

                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />

                                    <div className="absolute bottom-5 left-5 z-10 rounded-full border border-white/30 bg-black/40 px-3.5 py-2 text-[11px] font-bold text-white backdrop-blur-md">
                                        Residential Plumbing
                                    </div>
                                </div>

                                {/* DRAIN CLEANING */}
                                <div className="group relative col-start-2 row-start-1 h-full min-h-0 overflow-hidden rounded-[22px] border-[4px] border-white bg-white shadow-[0_16px_40px_rgba(43,35,29,0.14)]">
                                    <img
                                        src={drainImage}
                                        alt="Drain cleaning service"
                                        className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                    />

                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                                    <p className="absolute bottom-4 left-4 z-10 text-[12px] font-bold text-white">
                                        Drain Cleaning
                                    </p>
                                </div>

                                {/* WATER HEATER */}
                                <div className="group relative col-start-2 row-start-2 h-full min-h-0 overflow-hidden rounded-[22px] border-[4px] border-white bg-white shadow-[0_16px_40px_rgba(43,35,29,0.14)]">
                                    <img
                                        src={waterHeaterImage}
                                        alt="Water heater service"
                                        className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                    />

                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                                    <p className="absolute bottom-4 left-4 z-10 text-[12px] font-bold text-white">
                                        Water Heater
                                    </p>
                                </div>

                            </div>

                            {/* =================================
                  FLOATING CALL CARD
              ================================= */}
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
                  rounded-2xl
                  border
                  border-[#E1E7ED]
                  bg-white/95
                  p-3.5
                  shadow-[0_18px_45px_rgba(43,35,29,0.18)]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  sm:left-8
                  sm:right-auto
                  sm:min-w-[300px]
                "
                            >
                                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#008F89] text-white">
                                    <span className="absolute inset-0 animate-ping rounded-full bg-[#008F89]/25" />
                                    <Phone
                                        size={20}
                                        fill="currentColor"
                                        className="relative z-10"
                                    />
                                </div>

                                <div className="min-w-0 flex-1">
                                    <div className="flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-[#008F89]" />

                                        <p className="text-[9px] font-extrabold uppercase tracking-[0.13em] text-[#657A94]">
                                            Need Plumbing Help?
                                        </p>
                                    </div>

                                    <p className="mt-0.5 text-[15px] font-extrabold text-[#12345C]">
                                        Call {displayPhone}
                                    </p>

                                    <p className="text-[10px] font-medium text-[#657A94]">
                                        Discuss your service needs
                                    </p>
                                </div>

                                <ArrowRight
                                    size={17}
                                    className="text-[#008F89] transition-transform group-hover:translate-x-1"
                                />
                            </a>

                        </div>
                    </div>
                </section>

                {/* =========================================
            SERVICES — NEXT STEP
        ========================================= */}
                <section
                    id="plumbing-services"
                    className="bg-white px-5 py-20 sm:px-8 lg:px-10"
                >
                    <div className="mx-auto max-w-[1280px]">

                        <div className="mx-auto max-w-[700px] text-center">
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#F0F5F8] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#008F89]">
                                <Droplets size={14} />
                                Plumbing Services
                            </div>

                            <h2 className="text-[32px] font-extrabold tracking-[-0.03em] text-[#12345C] sm:text-[40px]">
                                Find the Plumbing Service
                                <span className="text-[#008F89]"> You Need</span>
                            </h2>

                            <p className="mt-4 text-[15px] leading-7 text-[#657A94]">
                                Explore common residential plumbing services and call to
                                discuss the type of help you need.
                            </p>

                        </div>

                        {/* =========================================
    PLUMBING SERVICE CARDS
========================================= */}

                        <div
                            className="
        mt-12
        grid
        grid-cols-1
        gap-6
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
    "
                        >
                            {subServices.map((service, index) => (
                                <PlumbingServiceCard
                                    key={service.id}
                                    service={service}
                                    index={index}
                                    displayPhone={displayPhone}
                                    onCallClick={handleOpenCallModal}
                                />
                            ))}
                        </div>



                    </div>
                </section>

            </main>

            <Footer />


            <PlumbingCallModal
                isOpen={Boolean(selectedService)}
                onClose={handleCloseCallModal}
                service={selectedService}
                phone={phone}
                displayPhone={displayPhone}
            />
        </>
    );
}