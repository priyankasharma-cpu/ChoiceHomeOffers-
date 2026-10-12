
import {
    ArrowRight,
    Bug,
    Mail,
    MapPin,
    PhoneCall,
    ShieldCheck,
    Wrench,
} from "lucide-react";

const PEST_PHONE = "+18889874472";
const PEST_DISPLAY_PHONE = "+1 (888) 987-4472";

const PLUMBING_PHONE = "+18885066168";
const PLUMBING_DISPLAY_PHONE = "+1 (888) 506-6168";

const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Pest Control", href: "/pest-control" },
    { name: "Plumbing", href: "/plumbing" },
    { name: "About Us", href: "/#about" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact", href: "/contact" },
];

const services = [
    {
        name: "Pest Control",
        description: "Household pest services",
        href: "/pest-control",
        phone: PEST_PHONE,
        displayPhone: PEST_DISPLAY_PHONE,
        icon: Bug,
    },
    {
        name: "Plumbing",
        description: "Household plumbing services",
        href: "/plumbing",
        phone: PLUMBING_PHONE,
        displayPhone: PLUMBING_DISPLAY_PHONE,
        icon: Wrench,
    },
];

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-[#081B30] text-white">
            {/* Background effects */}
            <div className="pointer-events-none absolute -left-40 top-16 h-[400px] w-[400px] rounded-full bg-[#008F89]/10 blur-[110px]" />
            <div className="pointer-events-none absolute -right-40 bottom-20 h-[400px] w-[400px] rounded-full bg-[#008F89]/10 blur-[110px]" />

            {/* Main Footer */}
            <div className="relative mx-auto max-w-[1320px] px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_0.85fr_1fr_1.25fr] lg:gap-10">
                    {/* BRAND */}
                    <div className="max-w-[370px]">
                        <a
                            href="/"
                            aria-label="Choice Home Offers Home"
                            className="inline-flex w-[165px] items-center sm:w-[190px]"
                        >
                            <img
                                src="/images/choicehomeoffers-white.png"
                                alt="Choice Home Offers"
                                className="block h-auto w-full rounded-3xl object-contain"
                                style={{ aspectRatio: "3803 / 3524" }}
                            />
                        </a>

                        <p className="mt-6 max-w-[350px] text-[15px] leading-[1.9] text-[#E6EDF5]">
                            Choice Home Offers helps homeowners connect for
                            common household Pest Control and Plumbing
                            service needs.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            {services.map((service) => {
                                const Icon = service.icon;

                                return (
                                    <a
                                        key={service.name}
                                        href={service.href}
                                        className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2.5 text-[13px] font-semibold text-[#E6EDF5] transition-all duration-300 hover:border-[#008F89]/60 hover:bg-[#008F89]/20 hover:text-white"
                                    >
                                        <Icon
                                            size={16}
                                            className="text-[#36C8BF]"
                                        />
                                        {service.name}
                                    </a>
                                );
                            })}
                        </div>

                        <div className="mt-7 flex items-start gap-3 rounded-2xl border border-white/10 bg-[#102A43]/70 p-4">
                            <ShieldCheck
                                size={21}
                                className="mt-0.5 shrink-0 text-[#36C8BF]"
                            />
                            <p className="text-[13px] leading-6 text-[#D6E2ED]">
                                Choose the service you need and call the
                                dedicated service line for assistance.
                            </p>
                        </div>
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h3 className="text-[19px] font-bold tracking-[-0.3px] text-white">
                            Quick Links
                        </h3>

                        <div className="mt-4 h-[3px] w-11 rounded-full bg-[#008F89]" />

                        <ul className="mt-7 space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="group inline-flex items-center gap-2 text-[15px] font-medium text-[#D6E2ED] transition-colors duration-200 hover:text-[#5DE0D5]"
                                    >
                                        <ArrowRight
                                            size={15}
                                            className="text-[#36C8BF] transition-transform duration-200 group-hover:translate-x-1"
                                        />
                                        <span>{link.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* OUR SERVICES */}
                    <div>
                        <h3 className="text-[19px] font-bold tracking-[-0.3px] text-white">
                            Our Services
                        </h3>

                        <div className="mt-4 h-[3px] w-11 rounded-full bg-[#008F89]" />

                        <div className="mt-7 space-y-4">
                            {services.map((service) => {
                                const Icon = service.icon;

                                return (
                                    <a
                                        key={service.name}
                                        href={service.href}
                                        className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-[#102A43]/60 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#008F89]/50 hover:bg-[#123851]"
                                    >
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#008F89]/15 text-[#36C8BF] transition-colors group-hover:bg-[#008F89] group-hover:text-white">
                                            <Icon size={21} strokeWidth={2.2} />
                                        </div>

                                        <div>
                                            <p className="text-[15px] font-bold text-white">
                                                {service.name}
                                            </p>
                                            <p className="mt-1 text-[13px] leading-5 text-[#B8C8D9]">
                                                {service.description}
                                            </p>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>

                        <p className="mt-7 text-[14px] leading-7 text-[#C5D4E2]">
                            Explore each service page to view available
                            service categories.
                        </p>
                    </div>

                    {/* CALL FOR SERVICE */}
                    <div>
                        <h3 className="text-[19px] font-bold tracking-[-0.3px] text-white">
                            Call for Service
                        </h3>

                        <div className="mt-4 h-[3px] w-11 rounded-full bg-[#008F89]" />

                        <p className="mt-6 text-[15px] leading-7 text-[#D6E2ED]">
                            Select the service you need and call the
                            dedicated Choice Home Offers service line.
                        </p>

                        <div className="mt-6 space-y-3">
                            {services.map((service) => {
                                const Icon = service.icon;

                                return (
                                    <a
                                        key={service.name}
                                        href={`tel:${service.phone}`}
                                        aria-label={`Call ${service.name} at ${service.displayPhone}`}
                                        className="group flex items-center gap-3 rounded-2xl border border-white/15 bg-[#102A43] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#008F89]/70 hover:bg-[#123851] hover:shadow-[0_14px_35px_rgba(0,143,137,0.12)]"
                                    >
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#008F89] to-[#005F5B] text-white">
                                            <Icon size={21} strokeWidth={2.2} />
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <p className="text-[12px] font-bold uppercase tracking-[0.7px] text-[#B8C8D9]">
                                                {service.name}
                                            </p>
                                            <p className="mt-1 text-[15px] font-extrabold text-white sm:text-[17px]">
                                                {service.displayPhone}
                                            </p>
                                        </div>

                                        <PhoneCall
                                            size={19}
                                            className="shrink-0 text-[#5DE0D5] transition-transform group-hover:scale-110"
                                        />
                                    </a>
                                );
                            })}
                        </div>

                        {/* EMAIL */}
                        <div className="mt-7 flex items-start gap-3">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#102A43]">
                                <Mail size={19} className="text-[#36C8BF]" />
                            </div>

                            <div className="min-w-0">
                                <p className="text-[12px] font-bold uppercase tracking-[1px] text-[#B8C8D9]">
                                    Email
                                </p>

                                <a
                                    href="mailto:support@choicehomeoffers.com"
                                    className="mt-1 block break-all text-[14px] font-medium text-[#E6EDF5] transition-colors hover:text-[#5DE0D5]"
                                >
                                    support@choicehomeoffers.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SERVICE STRIP */}
            <div className="relative border-y border-white/10 bg-[#102A43]">
                <div className="mx-auto grid max-w-[1320px] gap-6 px-6 py-7 sm:px-10 md:grid-cols-3 md:items-center lg:px-14">
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <a
                                key={service.name}
                                href={`tel:${service.phone}`}
                                className="group flex items-center gap-3"
                            >
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#008F89]/20 text-[#5DE0D5]">
                                    <Icon size={21} />
                                </div>

                                <div>
                                    <p className="text-[12px] font-bold uppercase tracking-[0.8px] text-[#B8C8D9]">
                                        {service.name}
                                    </p>
                                    <p className="mt-1 text-[16px] font-bold text-white transition-colors group-hover:text-[#5DE0D5]">
                                        {service.displayPhone}
                                    </p>
                                </div>
                            </a>
                        );
                    })}

                    <div className="flex items-center gap-3 md:justify-end">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#008F89]/20 text-[#5DE0D5]">
                            <MapPin size={21} />
                        </div>

                        <div>
                            <p className="text-[12px] font-bold uppercase tracking-[0.8px] text-[#B8C8D9]">
                                Service Area
                            </p>
                            <p className="mt-1 text-[15px] font-medium text-[#E6EDF5]">
                                Serving homeowners nationwide
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* BOTTOM BAR */}
            <div className="relative mx-auto max-w-[1320px] px-6 sm:px-10 lg:px-14">
                <div className="flex flex-col gap-5 py-7 md:flex-row md:items-center md:justify-between">
                    <p className="text-[14px] leading-6 text-[#B8C8D9]">
                        © {new Date().getFullYear()} Choice Home Offers.
                        All rights reserved.
                    </p>

                    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                        <a
                            href="/privacy-policy"
                            className="text-[14px] font-medium text-[#D6E2ED] transition-colors hover:text-[#5DE0D5]"
                        >
                            Privacy Policy
                        </a>

                        <a
                            href="/terms-of-service"
                            className="text-[14px] font-medium text-[#D6E2ED] transition-colors hover:text-[#5DE0D5]"
                        >
                            Terms of Service
                        </a>

                        <a
                            href="/contact"
                            className="text-[14px] font-medium text-[#D6E2ED] transition-colors hover:text-[#5DE0D5]"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
