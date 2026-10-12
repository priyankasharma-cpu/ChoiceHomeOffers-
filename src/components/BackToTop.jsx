import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!showButton) return null;

    return (
        <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="
                fixed
                bottom-[180px]
                right-5
                z-[9980]

                flex h-12 w-12
                items-center justify-center

                rounded-full
                border border-[#E1E7ED]
                bg-[#FFFFFF]
                text-[#008F89]

                shadow-[0_8px_25px_rgba(45,35,25,0.14)]

                transition-all duration-300

                hover:-translate-y-1
                hover:bg-[#008F89]
                hover:text-white
                hover:shadow-[0_12px_30px_rgba(0, 143, 137,0.28)]

                active:scale-95

                sm:bottom-[185px]
                sm:right-6
            "
        >
            <ArrowUp
                size={20}
                strokeWidth={2.5}
            />
        </button>
    );
}