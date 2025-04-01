"use client"
import Hero from "../components/Hero"
import ServicesCard from "../utils/ServicesCard/index.jsx";
import EmailForm from "../utils/EmailForm";
import SectionTwo from "../components/SectionTwo/index.jsx";
import Faq from "../components/FAQ/index.jsx";
import About from "../components/About/index.jsx";
import Footer from "../components/Footer/index.jsx";

export default function Home() {
  return (
    <div>
      <Hero />
      <SectionTwo />
      <ServicesCard />
      <Faq />
      <div className="mt-10">
        <About />
        <div className="my-10">
          <EmailForm></EmailForm>
        </div>
        <Footer />
      </div>
    </div>
  );
}
