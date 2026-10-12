import { ArrowLeft, ShieldCheck } from "lucide-react";
import SEO from "../components/SEO";

export default function PrivacyPolicy() {
    return (

        <main className="min-h-screen bg-[#F0F5F8] text-[#12345C]">

            <SEO
                title="Privacy Policy"
                description="Read Choice Home Offers's privacy policy to learn how information is collected, used, protected, and handled when you use our website."
                canonical="/privacy-policy"
            />

            {/* Header */}
            <header className="border-b border-[#E1E7ED] bg-[#FFFFFF]">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">

                    <a
                        href="/"
                        className="text-2xl font-black tracking-tight"
                    >
                        Choice Home <span className="text-[#008F89]">Offers</span>
                    </a>

                    <a
                        href="/"
                        className="flex items-center gap-2 text-sm font-semibold text-[#657A94] transition hover:text-[#008F89]"
                    >
                        <ArrowLeft size={17} />
                        Back to Home
                    </a>

                </div>
            </header>

            {/* Content */}
            <section className="px-5 py-14 sm:px-8 lg:py-20">
                <div className="mx-auto max-w-4xl">

                    {/* Title */}
                    <div className="mb-10 text-center">
                        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F0F5F8]">
                            <ShieldCheck
                                size={28}
                                className="text-[#008F89]"
                            />
                        </div>

                        <p className="mb-3 text-xs font-bold uppercase tracking-[2px] text-[#008F89]">
                            Legal
                        </p>

                        <h1 className="font-serif text-4xl font-bold tracking-tight text-[#12345C] sm:text-5xl">
                            Privacy Policy
                        </h1>

                        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#657A94]">
                            Your privacy matters to us. This policy explains
                            how Choice Home Offers may collect, use, and protect
                            information you provide through our website.
                        </p>
                    </div>

                    {/* Policy Card */}
                    <div className="rounded-[28px] border border-[#E1E7ED] bg-[#FFFFFF] p-6 shadow-[0_15px_45px_rgba(45,35,25,0.06)] sm:p-10">

                        <PolicySection title="1. Information We Collect">
                            <p>
                                When you use Choice Home Offers or request a quote,
                                you may provide information such as your name,
                                email address, phone number, ZIP code, and
                                information about the home service you need.
                            </p>

                            <p>
                                We may also collect basic technical
                                information about your visit, such as browser
                                type, device information, and website usage
                                information.
                            </p>
                        </PolicySection>

                        <PolicySection title="2. How We Use Your Information">
                            <p>
                                Information you provide may be used to
                                respond to your requests, provide quote
                                information, communicate with you about
                                requested services, and improve our website
                                and services.
                            </p>
                        </PolicySection>

                        <PolicySection title="3. Communications">
                            <p>
                                By submitting information through our website,
                                you may be contacted regarding your request,
                                including through phone, email, or text
                                message where permitted by applicable law.
                            </p>
                        </PolicySection>

                        <PolicySection title="4. Information Sharing">
                            <p>
                                We may share information when reasonably
                                necessary to respond to your service request,
                                operate our website, work with service
                                providers, comply with legal obligations, or
                                protect our rights and users.
                            </p>
                        </PolicySection>

                        <PolicySection title="5. Cookies and Similar Technologies">
                            <p>
                                Our website may use cookies or similar
                                technologies to support website functionality,
                                understand website usage, and improve the user
                                experience.
                            </p>
                        </PolicySection>

                        <PolicySection title="6. Data Security">
                            <p>
                                We take reasonable measures to protect
                                information submitted through our website.
                                However, no method of transmitting or storing
                                information online can be guaranteed to be
                                completely secure.
                            </p>
                        </PolicySection>

                        <PolicySection title="7. Third-Party Websites">
                            <p>
                                Our website may contain links to third-party
                                websites or services. Choice Home Offers is not
                                responsible for the privacy practices of
                                websites that we do not operate.
                            </p>
                        </PolicySection>

                        <PolicySection title="8. Children's Privacy">
                            <p>
                                Our website is not intended to knowingly
                                collect personal information from children.
                                If you believe a child has provided personal
                                information through our website, please
                                contact us so that the information can be
                                addressed appropriately.
                            </p>
                        </PolicySection>

                        <PolicySection title="9. Changes to This Policy">
                            <p>
                                We may update this Privacy Policy from time to
                                time. Any updated version will be posted on
                                this page with the revised effective date.
                            </p>
                        </PolicySection>

                        <PolicySection title="10. Contact Us">
                            <p>
                                If you have questions about this Privacy
                                Policy or how your information is handled,
                                please contact Choice Home Offers through the contact
                                information provided on our website.
                            </p>
                        </PolicySection>

                    </div>

                    <p className="mt-6 text-center text-xs text-[#657A94]">
                        Last updated: September 3, 2026
                    </p>

                </div>
            </section>
        </main>
    );
}


function PolicySection({ title, children }) {
    return (
        <section className="border-b border-[#E1E7ED] py-7 first:pt-0 last:border-b-0 last:pb-0">

            <h2 className="text-xl font-bold tracking-tight text-[#12345C]">
                {title}
            </h2>

            <div className="mt-3 space-y-3 text-[14px] leading-7 text-[#657A94]">
                {children}
            </div>

        </section>
    );
}