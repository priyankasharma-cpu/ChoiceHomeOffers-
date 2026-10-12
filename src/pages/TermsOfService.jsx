import { ArrowLeft, FileText } from "lucide-react";

import SEO from "../components/SEO";
export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-[#F0F5F8] text-[#12345C]">

            <SEO
                title="Terms of Service"
                description="Review Choice Home Offers's terms of service governing the use of our website and home service information."
                canonical="/terms-of-service"
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
                            <FileText
                                size={27}
                                className="text-[#008F89]"
                            />
                        </div>

                        <p className="mb-3 text-xs font-bold uppercase tracking-[2px] text-[#008F89]">
                            Legal
                        </p>

                        <h1 className="font-serif text-4xl font-bold tracking-tight text-[#12345C] sm:text-5xl">
                            Terms of Service
                        </h1>

                        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#657A94]">
                            These terms describe the general rules for using
                            the Choice Home Offers website and requesting information
                            about home services.
                        </p>

                    </div>

                    {/* Terms Card */}
                    <div className="rounded-[28px] border border-[#E1E7ED] bg-[#FFFFFF] p-6 shadow-[0_15px_45px_rgba(45,35,25,0.06)] sm:p-10">

                        <TermsSection title="1. Acceptance of Terms">
                            <p>
                                By accessing or using the Choice Home Offers website,
                                you agree to comply with these Terms of
                                Service. If you do not agree with these terms,
                                please do not use the website.
                            </p>
                        </TermsSection>

                        <TermsSection title="2. Use of the Website">
                            <p>
                                You agree to use this website only for lawful
                                purposes and in a manner that does not
                                interfere with the operation, security, or
                                availability of the website.
                            </p>
                        </TermsSection>

                        <TermsSection title="3. Quote Requests">
                            <p>
                                Choice Home Offers allows visitors to submit requests
                                for information or quotes relating to home
                                services.
                            </p>

                            <p>
                                Submitting a request does not automatically
                                create a contract for services, guarantee
                                availability, or guarantee a specific price.
                            </p>
                        </TermsSection>

                        <TermsSection title="4. Service Information">
                            <p>
                                Information displayed on the website is
                                provided for general informational purposes.
                                Service availability, pricing, scheduling,
                                and other details may vary depending on the
                                service requested and applicable provider.
                            </p>
                        </TermsSection>

                        <TermsSection title="5. User Information">
                            <p>
                                When submitting a request, you agree to provide
                                information that is accurate and current to
                                the best of your knowledge.
                            </p>
                        </TermsSection>

                        <TermsSection title="6. Third-Party Services">
                            <p>
                                Choice Home Offers may work with or provide access to
                                third-party service providers. Those providers
                                may have their own terms, policies, pricing,
                                and service requirements.
                            </p>
                        </TermsSection>

                        <TermsSection title="7. Intellectual Property">
                            <p>
                                Unless otherwise stated, website content,
                                branding, graphics, text, layout, and other
                                materials are protected by applicable
                                intellectual property laws and may not be
                                copied, reproduced, or redistributed without
                                appropriate permission.
                            </p>
                        </TermsSection>

                        <TermsSection title="8. Disclaimer">
                            <p>
                                The website and its content are provided on an
                                "as available" basis. We do not guarantee that
                                the website will always be uninterrupted,
                                error-free, or completely accurate.
                            </p>
                        </TermsSection>

                        <TermsSection title="9. Limitation of Liability">
                            <p>
                                To the extent permitted by applicable law,
                                Choice Home Offers will not be responsible for losses
                                arising from the use of or inability to use
                                the website or information provided through
                                the website.
                            </p>
                        </TermsSection>

                        <TermsSection title="10. Changes to These Terms">
                            <p>
                                We may update these Terms of Service from time
                                to time. Updated terms will be posted on this
                                page and will become effective when posted,
                                unless otherwise stated.
                            </p>
                        </TermsSection>

                        <TermsSection title="11. Contact">
                            <p>
                                If you have questions regarding these Terms of
                                Service, please contact Choice Home Offers through the
                                contact information provided on our website.
                            </p>
                        </TermsSection>

                    </div>

                    <p className="mt-6 text-center text-xs text-[#657A94]">
                        Last updated: September 3, 2026
                    </p>

                </div>
            </section>
        </main>
    );
}


function TermsSection({ title, children }) {
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