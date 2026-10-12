import Header from "../components/Header";
import LeadForm from "../components/LeadForm";
import Footer from "../components/Footer";
import CallPopup from "../components/CallPopup/CallPopup";
import SEO from "../components/SEO";

import {
    ArrowRight,
    Bug,
    Mail,
    PhoneCall,
    ShieldCheck,
    Wrench,
} from "lucide-react";


/* =========================================================
   SERVICE PHONE NUMBERS
========================================================= */

const PEST_PHONE = "+18889874472";
const PEST_DISPLAY_PHONE = "+1 (888) 987-4472";

const PLUMBING_PHONE = "+18885066168";
const PLUMBING_DISPLAY_PHONE = "+1 (888) 506-6168";


export default function Contact() {
    return (
        <>
            {/* =====================================================
                SEO
            ====================================================== */}

            <SEO
                title="Contact Choice Home Offers | Pest Control & Plumbing"
                description="Contact Choice Home Offers for Pest Control and Plumbing service needs. Choose your service and call the dedicated service line."
                canonical="/contact"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "ContactPage",
                    name: "Contact Choice Home Offers",
                    url: "https://choicehomeoffers.com/contact",
                    description:
                        "Contact Choice Home Offers for Pest Control and Plumbing service needs.",
                    isPartOf: {
                        "@type": "WebSite",
                        name: "Choice Home Offers",
                        url: "https://choicehomeoffers.com/",
                    },
                }}
            />


            {/* =====================================================
                HEADER
            ====================================================== */}

            <Header />


            <main className="pt-[72px] sm:pt-[80px] lg:pt-[88px]">

                {/* =================================================
                    CONTACT HERO
                ================================================== */}

                <section className="relative overflow-hidden bg-[#F0F5F8]">

                    {/* Decorations */}

                    <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#008F89]/[0.06] blur-3xl" />

                    <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#E1E7ED]/50 blur-3xl" />


                    <div className="relative mx-auto max-w-[1280px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

                        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">

                            {/* =========================================
                                LEFT CONTENT
                            ========================================= */}

                            <div className="max-w-[720px]">

                                {/* Eyebrow */}

                                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E1E7ED] bg-[#FFFFFF] px-4 py-2 shadow-sm">

                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#008F89]">

                                        <PhoneCall
                                            size={13}
                                            strokeWidth={2.5}
                                            className="text-white"
                                        />

                                    </span>

                                    <span className="text-[10px] font-extrabold uppercase tracking-[1.5px] text-[#008F89]">
                                        Contact Choice Home Offers
                                    </span>

                                </div>


                                {/* Heading */}

                                <h1 className="font-serif text-[42px] font-bold leading-[1.05] tracking-[-1.8px] text-[#12345C] sm:text-[54px] lg:text-[62px]">

                                    Need Pest Control

                                    <br />

                                    <span className="text-[#008F89]">
                                        or Plumbing Help?
                                    </span>

                                </h1>


                                {/* Description */}

                                <p className="mt-6 max-w-[650px] text-[15px] leading-7 text-[#657A94] sm:text-[16px]">

                                    Choose the service you need and use the
                                    dedicated phone line to discuss your Pest
                                    Control or Plumbing service request.

                                </p>


                                {/* Trust Points */}

                                <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">

                                    <div className="flex items-center gap-2">

                                        <Bug
                                            size={17}
                                            className="text-[#008F89]"
                                        />

                                        <span className="text-[12px] font-semibold text-[#12345C]">
                                            Pest Control
                                        </span>

                                    </div>


                                    <div className="flex items-center gap-2">

                                        <Wrench
                                            size={17}
                                            className="text-[#008F89]"
                                        />

                                        <span className="text-[12px] font-semibold text-[#12345C]">
                                            Plumbing
                                        </span>

                                    </div>


                                    <div className="flex items-center gap-2">

                                        <PhoneCall
                                            size={17}
                                            className="text-[#008F89]"
                                        />

                                        <span className="text-[12px] font-semibold text-[#12345C]">
                                            Dedicated Service Lines
                                        </span>

                                    </div>

                                </div>

                            </div>


                            {/* =========================================
                                RIGHT SERVICE SUMMARY
                            ========================================= */}

                            <div className="relative">

                                <div className="rounded-[28px] border border-[#E1E7ED] bg-white/90 p-5 shadow-[0_25px_70px_rgba(40,30,20,0.10)] backdrop-blur-sm sm:p-6">

                                    <p className="text-[10px] font-extrabold uppercase tracking-[1.5px] text-[#008F89]">
                                        Choose Your Service
                                    </p>

                                    <h2 className="mt-2 text-[24px] font-extrabold tracking-[-0.6px] text-[#12345C]">
                                        How can we help?
                                    </h2>


                                    {/* PEST */}

                                    <a
                                        href={`tel:${PEST_PHONE}`}
                                        className="group mt-6 flex items-center gap-4 rounded-[18px] border border-[#E1E7ED] bg-[#FFFFFF] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#008F89]/40 hover:shadow-lg"
                                    >

                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#F0F5F8] text-[#008F89] transition-all group-hover:bg-[#008F89] group-hover:text-white">

                                            <Bug size={21} />

                                        </div>

                                        <div className="min-w-0 flex-1">

                                            <p className="text-[10px] font-bold uppercase tracking-[1px] text-[#657A94]">
                                                Pest Control
                                            </p>

                                            <p className="mt-1 text-[16px] font-extrabold text-[#12345C]">
                                                {PEST_DISPLAY_PHONE}
                                            </p>

                                        </div>

                                        <PhoneCall
                                            size={18}
                                            className="text-[#008F89]"
                                        />

                                    </a>


                                    {/* PLUMBING */}

                                    <a
                                        href={`tel:${PLUMBING_PHONE}`}
                                        className="group mt-3 flex items-center gap-4 rounded-[18px] border border-[#E1E7ED] bg-[#FFFFFF] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#008F89]/40 hover:shadow-lg"
                                    >

                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#F0F5F8] text-[#008F89] transition-all group-hover:bg-[#008F89] group-hover:text-white">

                                            <Wrench size={21} />

                                        </div>

                                        <div className="min-w-0 flex-1">

                                            <p className="text-[10px] font-bold uppercase tracking-[1px] text-[#657A94]">
                                                Plumbing
                                            </p>

                                            <p className="mt-1 text-[16px] font-extrabold text-[#12345C]">
                                                {PLUMBING_DISPLAY_PHONE}
                                            </p>

                                        </div>

                                        <PhoneCall
                                            size={18}
                                            className="text-[#008F89]"
                                        />

                                    </a>


                                    <div className="mt-5 flex items-start gap-2 border-t border-[#E1E7ED] pt-5">

                                        <ShieldCheck
                                            size={16}
                                            className="mt-0.5 shrink-0 text-[#008F89]"
                                        />

                                        <p className="text-[11px] leading-5 text-[#657A94]">
                                            Select the service that matches your
                                            need and call its dedicated line.
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =================================================
                    CONTACT OPTIONS
                ================================================== */}

                <section className="bg-[#FFFFFF] py-12 sm:py-16">

                    <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">

                        <div className="mb-8 text-center">

                            <p className="text-[10px] font-extrabold uppercase tracking-[1.5px] text-[#008F89]">
                                Contact Options
                            </p>

                            <h2 className="mt-2 font-serif text-[30px] font-bold text-[#12345C] sm:text-[36px]">
                                Choose the right service line.
                            </h2>

                        </div>


                        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                            {/* =========================================
                                PEST CONTROL
                            ========================================= */}

                            <div className="group rounded-[22px] border border-[#E1E7ED] bg-white p-6 shadow-[0_10px_35px_rgba(40,30,20,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#008F89]/30 hover:shadow-[0_15px_40px_rgba(40,30,20,0.09)]">

                                <div className="flex items-start justify-between gap-4">

                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F0F5F8]">

                                        <Bug
                                            size={21}
                                            className="text-[#008F89]"
                                        />

                                    </div>

                                    <span className="rounded-full bg-[#F0F5F8] px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[1px] text-[#008F89]">
                                        Service 01
                                    </span>

                                </div>


                                <h3 className="mt-5 text-[18px] font-extrabold text-[#12345C]">
                                    Pest Control
                                </h3>

                                <p className="mt-2 min-h-[48px] text-[12px] leading-6 text-[#657A94]">
                                    For ants, rodents, termites, bed bugs,
                                    mosquitoes, and other common household
                                    pest service needs.
                                </p>


                                <a
                                    href={`tel:${PEST_PHONE}`}
                                    className="mt-5 flex items-center justify-between rounded-[15px] bg-[#12345C] px-4 py-3.5 transition-all hover:bg-[#008F89]"
                                >

                                    <div>

                                        <p className="text-[9px] font-bold uppercase tracking-[1px] text-white/50">
                                            Call Pest Control
                                        </p>

                                        <p className="mt-1 text-[15px] font-extrabold text-white">
                                            {PEST_DISPLAY_PHONE}
                                        </p>

                                    </div>

                                    <PhoneCall
                                        size={18}
                                        className="text-white"
                                    />

                                </a>


                                <a
                                    href="/pest-control"
                                    className="group/link mt-4 inline-flex items-center gap-2 text-[11px] font-extrabold text-[#008F89]"
                                >
                                    View Pest Control Services

                                    <ArrowRight
                                        size={14}
                                        className="transition-transform group-hover/link:translate-x-1"
                                    />
                                </a>

                            </div>


                            {/* =========================================
                                PLUMBING
                            ========================================= */}

                            <div className="group rounded-[22px] border border-[#E1E7ED] bg-white p-6 shadow-[0_10px_35px_rgba(40,30,20,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#008F89]/30 hover:shadow-[0_15px_40px_rgba(40,30,20,0.09)]">

                                <div className="flex items-start justify-between gap-4">

                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F0F5F8]">

                                        <Wrench
                                            size={21}
                                            className="text-[#008F89]"
                                        />

                                    </div>

                                    <span className="rounded-full bg-[#F0F5F8] px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[1px] text-[#008F89]">
                                        Service 02
                                    </span>

                                </div>


                                <h3 className="mt-5 text-[18px] font-extrabold text-[#12345C]">
                                    Plumbing
                                </h3>

                                <p className="mt-2 min-h-[48px] text-[12px] leading-6 text-[#657A94]">
                                    For leaks, clogged drains, pipes, toilets,
                                    water heaters, fixtures, and other common
                                    household plumbing needs.
                                </p>


                                <a
                                    href={`tel:${PLUMBING_PHONE}`}
                                    className="mt-5 flex items-center justify-between rounded-[15px] bg-[#12345C] px-4 py-3.5 transition-all hover:bg-[#008F89]"
                                >

                                    <div>

                                        <p className="text-[9px] font-bold uppercase tracking-[1px] text-white/50">
                                            Call Plumbing
                                        </p>

                                        <p className="mt-1 text-[15px] font-extrabold text-white">
                                            {PLUMBING_DISPLAY_PHONE}
                                        </p>

                                    </div>

                                    <PhoneCall
                                        size={18}
                                        className="text-white"
                                    />

                                </a>


                                <a
                                    href="/plumbing"
                                    className="group/link mt-4 inline-flex items-center gap-2 text-[11px] font-extrabold text-[#008F89]"
                                >
                                    View Plumbing Services

                                    <ArrowRight
                                        size={14}
                                        className="transition-transform group-hover/link:translate-x-1"
                                    />
                                </a>

                            </div>


                            {/* =========================================
                                EMAIL
                            ========================================= */}

                            <a
                                href="mailto:support@choicehomeoffers.com"
                                className="group rounded-[22px] border border-[#E1E7ED] bg-white p-6 shadow-[0_10px_35px_rgba(40,30,20,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#008F89]/30 hover:shadow-[0_15px_40px_rgba(40,30,20,0.09)] md:col-span-2 lg:col-span-1"
                            >

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F0F5F8]">

                                    <Mail
                                        size={21}
                                        className="text-[#008F89]"
                                    />

                                </div>


                                <h3 className="mt-5 text-[18px] font-extrabold text-[#12345C]">
                                    General Questions
                                </h3>

                                <p className="mt-2 min-h-[48px] text-[12px] leading-6 text-[#657A94]">
                                    For general website or service questions,
                                    you can also contact Choice Home Offers by email.
                                </p>


                                <div className="mt-5 flex items-center gap-3 rounded-[15px] bg-[#F0F5F8] px-4 py-3.5">

                                    <Mail
                                        size={16}
                                        className="shrink-0 text-[#008F89]"
                                    />

                                    <span className="min-w-0 truncate text-[13px] font-extrabold text-[#12345C]">
                                        support@choicehomeoffers.com
                                    </span>

                                    <ArrowRight
                                        size={15}
                                        className="ml-auto shrink-0 text-[#008F89] transition-transform group-hover:translate-x-1"
                                    />

                                </div>

                            </a>

                        </div>

                    </div>

                </section>


                {/* =================================================
                    EXISTING LEAD FORM
                ================================================== */}

                <LeadForm />


                {/* =================================================
                    WHY CONTACT CHOICE HOME OFFERS
                ================================================== */}

                <section className="bg-[#F0F5F8] py-16 sm:py-20">

                    <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">

                        <div className="mx-auto max-w-[700px] text-center">

                            <span className="text-[10px] font-extrabold uppercase tracking-[1.6px] text-[#008F89]">
                                Why Choice Home Offers
                            </span>


                            <h2 className="mt-3 font-serif text-[34px] font-bold leading-tight tracking-[-1px] text-[#12345C] sm:text-[42px]">

                                Two home services.

                                <span className="text-[#008F89]">
                                    {" "}One simple place to start.
                                </span>

                            </h2>


                            <p className="mt-4 text-[14px] leading-7 text-[#657A94] sm:text-[15px]">

                                Choice Home Offers keeps Pest Control and Plumbing
                                service options organized so you can quickly
                                find the category that matches your household
                                need.

                            </p>

                        </div>


                        {/* =============================================
                            TRUST CARDS
                        ============================================= */}

                        <div className="mt-10 grid gap-5 md:grid-cols-3">


                            {/* CARD 01 */}

                            <div className="group rounded-[22px] border border-[#E1E7ED] bg-[#FFFFFF] p-6 shadow-[0_10px_30px_rgba(40,30,20,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#008F89]/30">

                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F0F5F8] transition-all group-hover:bg-[#008F89]">

                                    <Bug
                                        size={20}
                                        className="text-[#008F89] transition-colors group-hover:text-white"
                                    />

                                </div>


                                <h3 className="mt-5 text-[17px] font-extrabold text-[#12345C]">
                                    Pest Control Options
                                </h3>


                                <p className="mt-2 text-[12px] leading-6 text-[#657A94]">
                                    Explore service categories for common
                                    household pest problems and call the
                                    dedicated Pest Control line.
                                </p>

                            </div>


                            {/* CARD 02 */}

                            <div className="group rounded-[22px] border border-[#E1E7ED] bg-[#FFFFFF] p-6 shadow-[0_10px_30px_rgba(40,30,20,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#008F89]/30">

                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F0F5F8] transition-all group-hover:bg-[#008F89]">

                                    <Wrench
                                        size={20}
                                        className="text-[#008F89] transition-colors group-hover:text-white"
                                    />

                                </div>


                                <h3 className="mt-5 text-[17px] font-extrabold text-[#12345C]">
                                    Plumbing Options
                                </h3>


                                <p className="mt-2 text-[12px] leading-6 text-[#657A94]">
                                    Explore service categories for common
                                    household plumbing issues and call the
                                    dedicated Plumbing line.
                                </p>

                            </div>


                            {/* CARD 03 */}

                            <div className="group rounded-[22px] border border-[#E1E7ED] bg-[#FFFFFF] p-6 shadow-[0_10px_30px_rgba(40,30,20,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#008F89]/30">

                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F0F5F8] transition-all group-hover:bg-[#008F89]">

                                    <PhoneCall
                                        size={20}
                                        className="text-[#008F89] transition-colors group-hover:text-white"
                                    />

                                </div>


                                <h3 className="mt-5 text-[17px] font-extrabold text-[#12345C]">
                                    Dedicated Phone Lines
                                </h3>


                                <p className="mt-2 text-[12px] leading-6 text-[#657A94]">
                                    Each main service has its own phone
                                    number, helping you connect through the
                                    appropriate service line.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =================================================
                    FINAL CALL CTA
                ================================================== */}

                <section className="relative overflow-hidden bg-[#12345C] py-14 sm:py-16">

                    {/* Decorations */}

                    <div className="pointer-events-none absolute -right-20 -top-32 h-[300px] w-[300px] rounded-full bg-[#008F89]/10 blur-3xl" />

                    <div className="pointer-events-none absolute -bottom-40 left-[20%] h-[300px] w-[300px] rounded-full bg-white/[0.03] blur-3xl" />


                    <div className="relative mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-12">

                        {/* Heading */}

                        <div className="mx-auto max-w-[700px] text-center">

                            <p className="text-[10px] font-extrabold uppercase tracking-[1.5px] text-[#008F89]">
                                Need Service?
                            </p>


                            <h2 className="mt-2 text-[28px] font-extrabold tracking-[-0.8px] text-white sm:text-[34px]">

                                Choose Pest Control or Plumbing.

                            </h2>


                            <p className="mx-auto mt-3 max-w-[570px] text-[13px] leading-6 text-white/60">

                                Call the dedicated service line that matches
                                your household service need.

                            </p>

                        </div>


                        {/* SERVICE CTA CARDS */}

                        <div className="mx-auto mt-8 grid max-w-[850px] gap-4 md:grid-cols-2">

                            {/* PEST CTA */}

                            <a
                                href={`tel:${PEST_PHONE}`}
                                className="group flex items-center gap-4 rounded-[20px] border border-white/[0.09] bg-white/[0.05] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#008F89]/40 hover:bg-white/[0.08]"
                            >

                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#008F89] text-white">

                                    <Bug size={20} />

                                </div>


                                <div className="min-w-0 flex-1">

                                    <p className="text-[10px] font-bold uppercase tracking-[1px] text-white/45">
                                        Pest Control
                                    </p>

                                    <p className="mt-1 text-[15px] font-extrabold text-white">
                                        {PEST_DISPLAY_PHONE}
                                    </p>

                                </div>


                                <ArrowRight
                                    size={18}
                                    className="shrink-0 text-[#008F89] transition-transform group-hover:translate-x-1"
                                />

                            </a>


                            {/* PLUMBING CTA */}

                            <a
                                href={`tel:${PLUMBING_PHONE}`}
                                className="group flex items-center gap-4 rounded-[20px] border border-white/[0.09] bg-white/[0.05] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#008F89]/40 hover:bg-white/[0.08]"
                            >

                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#008F89] text-white">

                                    <Wrench size={20} />

                                </div>


                                <div className="min-w-0 flex-1">

                                    <p className="text-[10px] font-bold uppercase tracking-[1px] text-white/45">
                                        Plumbing
                                    </p>

                                    <p className="mt-1 text-[15px] font-extrabold text-white">
                                        {PLUMBING_DISPLAY_PHONE}
                                    </p>

                                </div>


                                <ArrowRight
                                    size={18}
                                    className="shrink-0 text-[#008F89] transition-transform group-hover:translate-x-1"
                                />

                            </a>

                        </div>

                    </div>

                </section>

            </main>


            {/* =====================================================
                FOOTER
            ====================================================== */}

            <Footer />


            {/* =====================================================
                GLOBAL CALL POPUP
            ====================================================== */}

            <CallPopup />
        </>
    );
}