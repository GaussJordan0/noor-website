import Hero from "../components/Hero/Index";
import ServicesCard from "../utils/ServicesCard";
import Waves from "../utils/Waves.jsx";
import Compare from "../components/Compare/index.jsx";
import Marquee from "react-fast-marquee";
import EmailForm from "../utils/EmailForm";
import SectionTwo from "../components/SectionTwo/index.jsx";
import Faq from "../components/FAQ/index.jsx";
import About from "../components/About/index.jsx"
import Footer from "../components/Footer/index.jsx";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="bg-c-green text-c-light-green mb-4">
        {/* <Marquee autoFill={true}>
          <div className="font-oswald font-bold py-4 text-xl px-4">
            15+ JAHRE ERFAHRUNG
          </div>
        </Marquee> */}
      </div>

      <SectionTwo />

      {/* <Compare /> */}
      {/* <Marquee autoFill={true} direction="right" className="bg-c-green text-c-light-green">
        {" "}
        <div className="font-oswald font-bold py-4 text-xl px-4">
        Umfassende Leistungen
        </div>
      </Marquee> */}

      <ServicesCard />
      <Faq/>
      <div className="mt-10">

      <About/>
      <EmailForm></EmailForm>
      <Footer/>
      </div>
      
    </div>
  );
}
