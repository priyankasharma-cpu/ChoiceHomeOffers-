import { useEffect } from "react";

const SITE_URL = "https://choicehomeoffers.com";
const SITE_NAME = "Choice Home Offers";

export default function SEO({
    title,
    description,
    canonical = "/",
    image = "/images/choicehomeoffers.png",
    type = "website",
    schema = null,
    noindex = false,
}) {
    useEffect(() => {
        const fullTitle =
            title?.includes("Choice Home Offers")
                ? title
                : `${title} | Choice Home Offers`;

        // =========================
        // TITLE
        // =========================

        document.title = fullTitle;

        // =========================
        // META HELPER
        // =========================

        const setMeta = (name, content, property = false) => {
            if (!content) return;

            const attribute = property ? "property" : "name";

            let element = document.head.querySelector(
                `meta[${attribute}="${name}"]`
            );

            if (!element) {
                element = document.createElement("meta");
                element.setAttribute(attribute, name);
                document.head.appendChild(element);
            }

            element.setAttribute("content", content);
        };

        // =========================
        // BASIC SEO
        // =========================

        setMeta("description", description);
        setMeta(
            "robots",
            noindex
                ? "noindex, nofollow"
                : "index, follow, max-image-preview:large"
        );
        // =========================
        // CANONICAL
        // =========================

        let canonicalTag =
            document.head.querySelector('link[rel="canonical"]');

        if (!canonicalTag) {
            canonicalTag = document.createElement("link");
            canonicalTag.setAttribute("rel", "canonical");
            document.head.appendChild(canonicalTag);
        }

        canonicalTag.setAttribute(
            "href",
            `${SITE_URL}${canonical}`
        );

        // =========================
        // OPEN GRAPH
        // =========================

        setMeta("og:type", type, true);
        setMeta("og:url", `${SITE_URL}${canonical}`, true);
        setMeta("og:title", fullTitle, true);
        setMeta("og:description", description, true);
        setMeta("og:image", `${SITE_URL}${image}`, true);
        setMeta("og:site_name", SITE_NAME, true);

        // =========================
        // TWITTER
        // =========================

        setMeta("twitter:card", "summary_large_image");
        setMeta("twitter:title", fullTitle);
        setMeta("twitter:description", description);
        setMeta("twitter:image", `${SITE_URL}${image}`);

        // =========================
        // JSON-LD
        // =========================

        const existingSchema =
            document.head.querySelector(
                'script[data-choicehomeoffers-schema="true"]'
            );

        if (existingSchema) {
            existingSchema.remove();
        }

        if (schema) {
            const script = document.createElement("script");

            script.type = "application/ld+json";
            script.setAttribute(
                "data-choicehomeoffers-schema",
                "true"
            );

            script.textContent = JSON.stringify(schema);

            document.head.appendChild(script);
        }

        return () => {
            const script =
                document.head.querySelector(
                    'script[data-choicehomeoffers-schema="true"]'
                );

            if (script) {
                script.remove();
            }
        };
    }, [
        title,
        description,
        canonical,
        image,
        type,
        schema,
    ]);

    return null;
}