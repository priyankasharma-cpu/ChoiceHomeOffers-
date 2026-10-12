# Choice Home Offers rebrand

Updated visible branding, public domain/email references, SEO metadata, sitemap/robots, supplied logos, and existing theme colors. No unrelated layout, fonts, routes, service data, phone numbers, tracking IDs, or business logic were intentionally changed. Header logo is contained within the existing 72/80/88px header; footer retains its original 3803:3524 display footprint. Supplied logo files were copied byte-for-byte.

## Validation

- Production build succeeds; existing bundle-size warning remains.
- ESLint has zero errors and one pre-existing missing noindex effect dependency warning in SEO.jsx.
- Browser checks: home, contact, Pest Control, Plumbing, privacy, terms, admin; mobile navigation; automatic popup close; both service modals and telephone destinations.
- Original/rebranded homepage comparison confirms unchanged header height, section ordering/padding, and service-image references/classes.
- Source comparison confirms branding/color/logo changes only; all existing images and service-data files are byte-for-byte unchanged.
- Live calls, production lead submissions, and conversion delivery were not exercised. No dedicated test suite is configured.

## Manual review

- The website text and supplied logo artwork both use **Choice Home Offers**. Logo artwork is unchanged.
- No separate favicon asset was supplied. Existing public/images/favicons.png is retained; no new favicon was invented.
- Unreferenced old public/images/rapidhoma.png and public/images/logo.png remain on disk.
- Technical identifiers intentionally retained: WhyRapidHoma component/file, rapidHomaLeads local-storage key, and rapid-homa-alert CSS hooks.
- RapidHoma artwork/text is embedded in many pest images on uniforms, equipment, banners, or photo corners. All remain untouched. Review the following pest image assets (thumbnail review includes old logo marks; not every small mark has legible text):

- src/assets/images/pest-control/Antcontrol.png
- src/assets/images/pest-control/bed-bug-control.png
- src/assets/images/pest-control/bee-control.png
- src/assets/images/pest-control/Carpet Beetle Contro.png
- src/assets/images/pest-control/Centipede Control.png
- src/assets/images/pest-control/cockroach-control.png
- src/assets/images/pest-control/Cricket-Control.png
- src/assets/images/pest-control/Earwig Control.png
- src/assets/images/pest-control/fire-ant-control.png
- src/assets/images/pest-control/flea-control.png
- src/assets/images/pest-control/fly-control.png
- src/assets/images/pest-control/General Household Pest Control.png
- src/assets/images/pest-control/hero3small.png
- src/assets/images/pest-control/HEROPAGE1.png
- src/assets/images/pest-control/HEROPAGE2.png
- src/assets/images/pest-control/heropestcontrol.png
- src/assets/images/pest-control/heropestcontrollast.png
- src/assets/images/pest-control/Millipede Control.png
- src/assets/images/pest-control/mosquito-control.png
- src/assets/images/pest-control/Moth Control.png
- src/assets/images/pest-control/Pantry Pest Control.png
- src/assets/images/pest-control/pestcontrolhero3.png
- src/assets/images/pest-control/Pill Bug & Sowbug Control.png
- src/assets/images/pest-control/rodent-control.png
- src/assets/images/pest-control/silverfish-control.png
- src/assets/images/pest-control/spider-control.png
- src/assets/images/pest-control/Stink Bug Control.png
- src/assets/images/pest-control/termite-control.png
- src/assets/images/pest-control/tick- pestcontrol.png
- src/assets/images/pest-control/wasp-hornet-control.png

- Some plumbing photos also contain small clothing/cap/equipment marks; their text could not be confirmed from thumbnails. Review original photos separately if needed.

## Separate launch steps

Deploy the built website to the new domain, configure its hosting/domain mapping, DNS and SSL, and confirm whether support@choicehomeoffers.com is provisioned and active. The mailbox was not verified. These settings were not changed. Existing tracking integrations may need the new domain authorized in their external dashboards; IDs and integration code are preserved.

## Modified source/configuration files

- src/components/About.jsx
- src/components/BackToTop.jsx
- src/components/CallPopup/CallPopup.css
- src/components/CallPopup/CallPopup.jsx
- src/components/CTA.jsx
- src/components/FAQ.jsx
- src/components/FloatingContactButtons.jsx
- src/components/Footer.jsx
- src/components/Header.jsx
- src/components/Hero.jsx
- src/components/HeroLeadForm.jsx
- src/components/HowItWorks.jsx
- src/components/LeadForm.jsx
- src/components/pest-control/PestServiceCard.jsx
- src/components/pest-control/ServiceCallModal.jsx
- src/components/plumbing/PlumbingCallModal.jsx
- src/components/plumbing/PlumbingServiceCard.jsx
- src/components/SEO.jsx
- src/components/ServiceCard.jsx
- src/components/Services.jsx
- src/components/Testimonials.jsx
- src/components/WhyRapidHoma.jsx
- src/index.css
- src/pages/AdminLeads.jsx
- src/pages/contact.jsx
- src/pages/Home.jsx
- src/pages/PestControl.jsx
- src/pages/Plumbing.jsx
- src/pages/PrivacyPolicy.jsx
- src/pages/TermsOfService.jsx
- index.html
- public/robots.txt
- public/sitemap.xml
- package.json
- package-lock.json

## Added files

- public/images/choicehomeoffers.png
- public/images/choicehomeoffers-white.png
- REBRAND_NOTES.md

The dist/ directory was regenerated by the production build.

## Latest brand-name and domain correction

Only brand text/domain references were updated in this correction. Colors, gradients, layout, typography, phone numbers, routes, tracking IDs and business logic are unchanged. Original logo assets are untouched; newly named copies contain identical bytes. The domain-based address support@choicehomeoffers.com requires confirmation that the mailbox exists and is active.

Files modified in this correction:

- index.html
- package-lock.json
- package.json
- public/robots.txt
- public/sitemap.xml
- REBRAND_NOTES.md
- src/components/About.jsx
- src/components/CallPopup/CallPopup.css
- src/components/CallPopup/CallPopup.jsx
- src/components/CTA.jsx
- src/components/FAQ.jsx
- src/components/FloatingContactButtons.jsx
- src/components/Footer.jsx
- src/components/Header.jsx
- src/components/Hero.jsx
- src/components/HeroLeadForm.jsx
- src/components/HowItWorks.jsx
- src/components/pest-control/ServiceCallModal.jsx
- src/components/SEO.jsx
- src/components/Testimonials.jsx
- src/components/WhyRapidHoma.jsx
- src/pages/AdminLeads.jsx
- src/pages/contact.jsx
- src/pages/Home.jsx
- src/pages/PestControl.jsx
- src/pages/Plumbing.jsx
- src/pages/PrivacyPolicy.jsx
- src/pages/TermsOfService.jsx

Added identical logo copies:

- public/images/choicehomeoffers.png
- public/images/choicehomeoffers-white.png

The production build succeeds; dist/ was regenerated.
