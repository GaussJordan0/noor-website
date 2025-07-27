"use client";
import React from "react";
import Hero from "../components/Hero";
import ServicesCard from "../utils/ServicesCard/index.jsx";
import EmailForm from "../utils/EmailForm";
import SectionTwo from "../components/SectionTwo/index.jsx";
import Faq from "../components/FAQ/index.jsx";
import About from "../components/About/index.jsx";
// import Footer from "../components/Footer/index.jsx";
import CookieBanner from "../components/CookieBanner/index.jsx";

export default function Home() {
  const [showModal, setShowModal] = React.useState(false);
  React.useEffect(() => {
    const storedConsent = localStorage.getItem("cookie-accepted");
    if (storedConsent !== "true") {
      setShowModal(true);
    }
  }, []);
  function handleCookieClose() {
    setShowModal(false);
  }
  return (
    <div>
      {showModal && <CookieBanner handleClose={handleCookieClose} />}
      <Hero />
      <SectionTwo />
      <div className="lg:mt-24">
        <ServicesCard />
      </div>
      <Faq />
      <div className="mt-10">
        <About />
        <div className="my-10">
          <EmailForm></EmailForm>
        </div>
      </div>
    </div>
  );
}
