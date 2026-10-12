import { useState } from "react";
import Swal from "sweetalert2";

import {
    ArrowRight,
    CheckCircle2,
    MapPin,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

import { services } from "../data/services";

export default function LeadForm() {
    const [formData, setFormData] = useState({
        service: "",
        zipCode: "",
        name: "",
        email: "",
        phone: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        /* =========================================
           GET JORNAYA LEADID TOKEN
         ========================================== */

        const leadIdToken =
            document.getElementById("leadid_token")?.value || "";

        console.log("Jornaya LeadID:", leadIdToken);


        /* =========================================
           CREATE NEW LEAD
        ========================================== */

        const newLead = {
            id: Date.now(),
            ...formData,
            submittedAt: new Date().toISOString(),
        };


        /* =========================================
           GET EXISTING LEADS
        ========================================== */

        const existingLeads =
            JSON.parse(localStorage.getItem("rapidHomaLeads")) || [];


        /* =========================================
           SAVE NEW LEAD
        ========================================== */

        const updatedLeads = [
            ...existingLeads,
            newLead,
        ];

        localStorage.setItem(
            "rapidHomaLeads",
            JSON.stringify(updatedLeads)
        );


        /* =========================================
           RESET FORM
        ========================================== */

        setFormData({
            service: "",
            zipCode: "",
            name: "",
            email: "",
            phone: "",
        });


        /* =========================================
           SUCCESS ALERT
        ========================================== */

        Swal.fire({
            icon: "success",

            title: "You're all set! 🎉",

            html: `
                <div style="margin-top:8px;">
                    <p style="
                        margin:0;
                        font-size:15px;
                        line-height:1.7;
                        color:#657A94;
                    ">
                        Thanks <strong style="color:#12345C;">
                            ${newLead.name}
                        </strong>!
                    </p>

                    <p style="
                        margin:6px 0 0;
                        font-size:14px;
                        line-height:1.6;
                        color:#657A94;
                    ">
                        Your free quote request has been received.
                        We'll help you take the next step.
                    </p>
                </div>
            `,

            confirmButtonText: "Great, Thanks!",

            confirmButtonColor: "#008F89",

            background: "#FFFFFF",

            color: "#12345C",

            width: "430px",

            padding: "2rem",

            customClass: {
                popup: "rapid-homa-alert",
                title: "rapid-homa-alert-title",
                confirmButton: "rapid-homa-alert-button",
            },

            buttonsStyling: true,
        });
    };

    return (
        <section
            id="quote"
            className="relative overflow-hidden bg-[#F0F5F8] py-16 sm:py-20 lg:py-24"
        >

            {/* =========================================
                BACKGROUND DECORATION
            ========================================== */}

            <div className="pointer-events-none absolute -left-40 top-20 h-[350px] w-[350px] rounded-full bg-[#008F89]/5 blur-3xl" />

            <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#E1E7ED]/60 blur-3xl" />


            {/* =========================================
                MAIN CONTAINER
            ========================================== */}

            <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">

                <div className="relative min-h-[650px]">


                    {/* =====================================
                        LEFT CONTENT
                    ====================================== */}

                    <div className="relative z-10 w-full lg:w-[58%]">

                        {/* Eyebrow */}

                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E1E7ED] bg-[#FFFFFF] px-4 py-2 shadow-sm">

                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#008F89]">

                                <Sparkles
                                    size={13}
                                    strokeWidth={2.3}
                                    className="text-white"
                                />

                            </span>

                            <span className="text-[10px] font-extrabold uppercase tracking-[1.5px] text-[#008F89]">
                                Find Reliable Home Services
                            </span>

                        </div>


                        {/* Heading */}

                        <h2 className="max-w-[620px] font-serif text-[42px] font-bold leading-[1.05] tracking-[-1.8px] text-[#12345C] sm:text-[52px] lg:text-[64px]">

                            Ready to make your

                            <br />

                            <span className="text-[#008F89]">
                                home better?
                            </span>

                        </h2>


                        {/* Description */}

                        <p className="mt-6 max-w-[550px] text-[15px] leading-7 text-[#657A94] sm:text-[16px]">

                            Tell us what you need and we'll help you get
                            started with the right home service. It's quick,
                            simple, and completely pressure-free.

                        </p>


                        {/* =================================
                            BENEFITS
                        ================================== */}

                        <div className="mt-7 space-y-3">

                            {/* Benefit 1 */}

                            <div className="flex items-center gap-3">

                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F0F5F8]">

                                    <CheckCircle2
                                        size={17}
                                        className="text-[#008F89]"
                                    />

                                </div>

                                <span className="text-[13px] font-semibold text-[#12345C]">
                                    Free quote with no obligation
                                </span>

                            </div>


                            {/* Benefit 2 */}

                            <div className="flex items-center gap-3">

                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F0F5F8]">

                                    <ShieldCheck
                                        size={17}
                                        className="text-[#008F89]"
                                    />

                                </div>

                                <span className="text-[13px] font-semibold text-[#12345C]">
                                    Simple and secure process
                                </span>

                            </div>


                            {/* Benefit 3 */}

                            <div className="flex items-center gap-3">

                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F0F5F8]">

                                    <Sparkles
                                        size={17}
                                        className="text-[#008F89]"
                                    />

                                </div>

                                <span className="text-[13px] font-semibold text-[#12345C]">
                                    Multiple home services available
                                </span>

                            </div>

                        </div>


                        {/* =================================
                            IMAGE
                        ================================== */}

                        <div className="relative mt-10 h-[300px] w-full overflow-hidden rounded-[22px] shadow-[0_20px_45px_rgba(40,30,20,0.12)] sm:h-[350px] lg:h-[390px] lg:w-[88%]">

                            <img
                                src="/images/96459d38-f5eb-4c27-8d09-ad3ab8ab26ef.png"
                                alt="Professional home service"
                                className="h-full w-full object-cover"
                            />

                            {/* Image Overlay */}

                            <div className="absolute inset-0 bg-gradient-to-t from-[#12345C]/45 via-transparent to-transparent" />


                            {/* Small Floating Badge */}

                            <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-white/30 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md">

                                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F0F5F8]">

                                    <ShieldCheck
                                        size={18}
                                        className="text-[#008F89]"
                                    />

                                </div>

                                <div>

                                    <p className="text-[11px] font-extrabold text-[#12345C]">
                                        Simple & Pressure-Free
                                    </p>

                                    <p className="mt-0.5 text-[10px] text-[#657A94]">
                                        Request your free quote
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* =====================================
                        FORM CARD
                    ====================================== */}

                    <div className="relative z-20 mt-10 lg:absolute lg:right-0 lg:top-[50px] lg:mt-0 lg:w-[48%] xl:w-[45%]">

                        {/* Outer Glow */}

                        <div className="absolute -inset-3 rounded-[30px] bg-[#008F89]/10 blur-2xl" />


                        {/* Form */}

                        <div className="relative rounded-[25px] border border-[#E1E7ED] bg-[#FFFFFF] p-5 shadow-[0_25px_70px_rgba(45,35,25,0.18)] sm:p-7 lg:p-8">


                            {/* =================================
                                FORM TOP TABS
                            ================================== */}

                            <div className="flex items-center gap-2">

                                <div className="rounded-full bg-[#E1E7ED] px-5 py-2 text-[11px] font-semibold text-[#657A94]">
                                    Free Request
                                </div>

                            </div>


                            {/* Form Heading */}

                            <div className="mt-6">

                                <div className="flex items-start justify-between gap-4">

                                    <div>

                                        <p className="text-[10px] font-extrabold uppercase tracking-[1.4px] text-[#008F89]">
                                            Start Here
                                        </p>

                                        <h3 className="mt-2 text-[26px] font-extrabold tracking-[-0.8px] text-[#12345C] sm:text-[29px]">
                                            Tell us what you need
                                        </h3>

                                        <p className="mt-2 text-[12px] leading-5 text-[#657A94]">
                                            One Call Away From Your Solution.
                                        </p>

                                    </div>


                                    {/* Icon */}

                                    <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F0F5F8] sm:flex">

                                        <Sparkles
                                            size={19}
                                            className="text-[#008F89]"
                                        />

                                    </div>

                                </div>

                            </div>


                            {/* =================================
                                FORM
                            ================================== */}

                            <form
                                onSubmit={handleSubmit}
                                className="mt-7 space-y-4"
                            >


                                {/* =========================================
                                      JORNAYA LEADID
                             ========================================== */}

                                <input
                                    type="hidden"
                                    id="leadid_token"
                                    name="leadid_token"
                                //value=""
                                />


                                {/* SERVICE */}

                                <div>

                                    <label
                                        htmlFor="service"
                                        className="mb-1.5 block text-[11px] font-bold text-[#12345C]"
                                    >
                                        What service do you need?
                                    </label>

                                    <div className="relative">

                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            required
                                            className="h-12 w-full appearance-none rounded-xl border border-[#E1E7ED] bg-[#F0F5F8] px-4 pr-10 text-[13px] text-[#12345C] outline-none transition-all focus:border-[#008F89] focus:bg-white focus:ring-4 focus:ring-[#008F89]/10"
                                        >

                                            <option value="">
                                                Select a service
                                            </option>

                                            {services.map((service) => (
                                                <option
                                                    key={service.id}
                                                    value={service.title}
                                                >
                                                    {service.title}
                                                </option>
                                            ))}

                                        </select>

                                        {/* Arrow */}

                                        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#657A94]">
                                            <svg
                                                width="15"
                                                height="15"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                            >
                                                <path
                                                    d="M5 7.5L10 12.5L15 7.5"
                                                    stroke="currentColor"
                                                    strokeWidth="1.8"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>

                                    </div>

                                </div>


                                {/* ZIP */}

                                <div>

                                    <label
                                        htmlFor="zipCode"
                                        className="mb-1.5 block text-[11px] font-bold text-[#12345C]"
                                    >
                                        ZIP Code
                                    </label>

                                    <div className="relative">

                                        <MapPin
                                            size={16}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#657A94]"
                                        />

                                        <input
                                            id="zipCode"
                                            name="zipCode"
                                            type="text"
                                            inputMode="numeric"
                                            maxLength="5"
                                            placeholder="Enter your ZIP code"
                                            value={formData.zipCode}
                                            onChange={handleChange}
                                            required
                                            className="h-12 w-full rounded-xl border border-[#E1E7ED] bg-[#F0F5F8] pl-11 pr-4 text-[13px] text-[#12345C] outline-none transition-all placeholder:text-[#657A94] focus:border-[#008F89] focus:bg-white focus:ring-4 focus:ring-[#008F89]/10"
                                        />

                                    </div>

                                </div>


                                {/* NAME + EMAIL */}

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                                    {/* NAME */}

                                    <div>

                                        <label
                                            htmlFor="name"
                                            className="mb-1.5 block text-[11px] font-bold text-[#12345C]"
                                        >
                                            Full Name
                                        </label>

                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="Your name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="h-12 w-full rounded-xl border border-[#E1E7ED] bg-[#F0F5F8] px-4 text-[13px] text-[#12345C] outline-none transition-all placeholder:text-[#657A94] focus:border-[#008F89] focus:bg-white focus:ring-4 focus:ring-[#008F89]/10"
                                        />

                                    </div>


                                    {/* EMAIL */}

                                    <div>

                                        <label
                                            htmlFor="email"
                                            className="mb-1.5 block text-[11px] font-bold text-[#12345C]"
                                        >
                                            Email
                                        </label>

                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="you@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="h-12 w-full rounded-xl border border-[#E1E7ED] bg-[#F0F5F8] px-4 text-[13px] text-[#12345C] outline-none transition-all placeholder:text-[#657A94] focus:border-[#008F89] focus:bg-white focus:ring-4 focus:ring-[#008F89]/10"
                                        />

                                    </div>

                                </div>


                                {/* PHONE */}

                                <div>

                                    <label
                                        htmlFor="phone"
                                        className="mb-1.5 block text-[11px] font-bold text-[#12345C]"
                                    >
                                        Phone Number
                                    </label>

                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="(555) 123-4567"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="h-12 w-full rounded-xl border border-[#E1E7ED] bg-[#F0F5F8] px-4 text-[13px] text-[#12345C] outline-none transition-all placeholder:text-[#657A94] focus:border-[#008F89] focus:bg-white focus:ring-4 focus:ring-[#008F89]/10"
                                    />

                                </div>


                                {/* =================================
                                    SUBMIT BUTTON
                                ================================== */}

                                <button
                                    type="submit"
                                    className="group mt-2 flex h-[52px] w-full items-center justify-center gap-3 rounded-xl bg-[linear-gradient(135deg,#008F89_0%,#005F5B_100%)] px-6 text-[14px] font-extrabold text-white shadow-[0_10px_25px_rgba(0, 143, 137,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[linear-gradient(135deg,#007A76_0%,#004D49_100%)] hover:shadow-[0_15px_30px_rgba(0, 143, 137,0.28)]"
                                >

                                    CALL NOW — 24/7 AVAILABLE

                                    <ArrowRight
                                        size={17}
                                        strokeWidth={2.5}
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />

                                </button>


                                {/* =================================
                                    TRUST MESSAGE
                                ================================== */}

                                <div className="flex items-center justify-center gap-2 pt-1">

                                    <ShieldCheck
                                        size={13}
                                        className="text-[#657A94]"
                                    />

                                    <p className="text-[10px] text-[#657A94]">
                                        Free to request · No obligation · No pressure . Available 24/7 Same-Day Service
                                    </p>

                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}