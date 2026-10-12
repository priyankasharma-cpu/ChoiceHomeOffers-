import Header from "../components/Header";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import About from "../components/About";
import HeroLeadForm from "../components/HeroLeadForm";
import Testimonials from "../components/Testimonials";
import WhyRapidHoma from "../components/WhyRapidHoma";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

import BackToTop from "../components/BackToTop";
import CallPopup from "../components/CallPopup/CallPopup";


import SEO from "../components/SEO";

export default function Home() {
    return (
        <>

            <SEO
                title="Trusted Home Services & Home Improvement"
                description="Find trusted home services with Choice Home Offers. Explore professional roofing, plumbing, HVAC, electrical, remodeling, cleaning, landscaping, and more. Request a free quote today."
                canonical="/"
                schema={{
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Organization",
                            "@id": "https://choicehomeoffers.com/#organization",
                            name: "Choice Home Offers",
                            url: "https://choicehomeoffers.com/",
                            logo: {
                                "@type": "ImageObject",
                                url: "https://choicehomeoffers.com/images/choicehomeoffers.png",
                            },
                        },

                        {
                            "@type": "WebSite",
                            "@id": "https://choicehomeoffers.com/#website",
                            url: "https://choicehomeoffers.com/",
                            name: "Choice Home Offers",
                            publisher: {
                                "@id": "https://choicehomeoffers.com/#organization",
                            },
                        },

                        {
                            "@type": "WebPage",
                            "@id": "https://choicehomeoffers.com/#webpage",
                            url: "https://choicehomeoffers.com/",
                            name: "Trusted Home Services & Home Improvement",
                            description:
                                "Find trusted home services with Choice Home Offers.",
                            isPartOf: {
                                "@id": "https://choicehomeoffers.com/#website",
                            },
                        },
                    ],
                }}
            />


            <Header />

            <main className="pt-[72px] lg:pt-[88px]">
                <Hero />
                <About />
                <HowItWorks />
                <HeroLeadForm />
                <Testimonials />
                <WhyRapidHoma />
                <FAQ />
                <CTA />
            </main>

            <Footer />

            <BackToTop />


            {/* ================= CALL POPUP ================= */}
            <CallPopup />

        </>
    );
}