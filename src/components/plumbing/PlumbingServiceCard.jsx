import { ArrowRight, PhoneCall } from "lucide-react";

export default function PlumbingServiceCard({
    service,
    index,
    displayPhone,
    onCallClick,
}) {
    return (
        <article
            id={service.id}
            className="
        group overflow-hidden rounded-[24px]
        border border-[#E1E7ED]
        bg-white
        shadow-[0_10px_35px_rgba(43,35,29,0.07)]
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0_18px_45px_rgba(43,35,29,0.13)]
      "
        >
            {/* IMAGE */}
            <div className="relative h-[220px] overflow-hidden bg-[#F0F5F8]">
                <img
                    src={service.image}
                    alt={`${service.name} service`}
                    loading="lazy"
                    className="
            h-full w-full object-cover object-center
            transition-transform duration-500
            group-hover:scale-[1.045]
          "
                />

                {/* Number */}
                <div
                    className="
            absolute left-4 top-4
            flex h-10 w-10 items-center justify-center
            rounded-full border border-white/40
            bg-black/45
            text-[12px] font-extrabold text-white
            backdrop-blur-md
          "
                >
                    {String(index + 1).padStart(2, "0")}
                </div>

                {/* Image gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Hover Call */}
                <button
                    type="button"
                    onClick={() => onCallClick(service)}
                    className="
            absolute bottom-4 left-4 right-4
            hidden items-center justify-center gap-2
            rounded-xl
            bg-white/95
            px-4 py-3
            text-[12px] font-extrabold
            text-[#12345C]
            shadow-lg backdrop-blur-md
            transition-all duration-300
            hover:bg-[#008F89]
            hover:text-white
            md:flex
          "
                >
                    <PhoneCall size={16} />
                    Call {displayPhone}
                </button>
            </div>

            {/* CONTENT */}
            <div className="flex min-h-[195px] flex-col p-5">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#008F89]">
                    Service {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-2 text-[19px] font-extrabold tracking-[-0.02em] text-[#12345C]">
                    {service.name}
                </h3>

                <p className="mt-2 line-clamp-2 text-[13px] leading-6 text-[#657A94]">
                    {service.description}
                </p>

                <button
                    type="button"
                    onClick={() => onCallClick(service)}
                    className="
            group/btn mt-auto flex items-center gap-2
            pt-5 text-[13px] font-extrabold
            text-[#008F89]
          "
                >
                    Call for Service

                    <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover/btn:translate-x-1"
                    />
                </button>
            </div>
        </article>
    );
}