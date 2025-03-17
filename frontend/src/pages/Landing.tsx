import { useEffect } from "react";
import Header from "../components/Landing/Header";
import Hero from "../components/Landing/Hero";
import SubHero from "../components/Landing/SubHero";
import Games from "../components/Landing/Games";
import NewFeatures from "../components/Landing/NewFeatures";
import Ancient from "../components/Landing/Ancient";
import Roadmap from "../components/Landing/Roadmap";
import Contact from "../components/Landing/Contact";
import Footer from "../components/Landing/Footer";
import blur from "../assets/blur.png";
import touch1 from "../assets/touch1.png";
import { useAccount } from "wagmi";
import { useNavigate } from "react-router-dom";

function Landing() {
  const { isConnected } = useAccount();
  const navigate = useNavigate();
  useEffect(() => {
    if (isConnected) {
      navigate("/dashboard");
    }
  }, [navigate, isConnected]);
  return (
    <div className="App">
      <img
        src={blur}
        alt=""
        className="hidden lg:block absolute -top-10 -right-20 -z-10"
      />
      <img
        src={touch1}
        alt=""
        className="absolute top-72 left-0 -z-10 h-[300px] w-32"
      />
      <Header />
      <Hero />
      <SubHero />
      <Games />
      <NewFeatures />
      <Ancient />
      <Roadmap />
      <Contact />
      <Footer />
    </div>
  );
}

export default Landing;
