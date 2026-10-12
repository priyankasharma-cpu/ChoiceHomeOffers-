import Home from "./pages/Home";
import AdminLeads from "./pages/AdminLeads";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Contact from "./pages/contact";
import PestControl from "./pages/PestControl";
import Plumbing from "./pages/Plumbing";

import FloatingContactButtons from "./components/FloatingContactButtons";
import BackToTop from "./components/BackToTop";

function App() {
  const path = window.location.pathname;

  // =========================================================
  // ADMIN PAGE
  // =========================================================
  // Admin page is kept separate from the public website
  // components such as floating buttons and back-to-top.
  if (path === "/admin/leads") {
    return <AdminLeads />;
  }

  // =========================================================
  // PUBLIC PAGES
  // =========================================================

  let page;

  if (path === "/privacy-policy") {
    page = <PrivacyPolicy />;
  }

  else if (path === "/terms-of-service") {
    page = <TermsOfService />;
  }

  else if (path === "/contact") {
    page = <Contact />;
  }

  else if (path === "/pest-control") {
    page = <PestControl />;
  }

  else if (path === "/plumbing") { page = <Plumbing />; }

  else {
    page = <Home />;
  }

  // =========================================================
  // PUBLIC WEBSITE
  // =========================================================

  return (
    <>
      {page}

      {/* Global Floating Actions */}
      <BackToTop />
      <FloatingContactButtons />
    </>
  );
}

export default App;