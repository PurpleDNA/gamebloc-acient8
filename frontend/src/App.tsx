import "./App.css";
import Header from "./components/Landing/Header";
import Hero from "./components/Landing/Hero";
import SubHero from "./components/Landing/SubHero";
import Games from "./components/Landing/Games";
import NewFeatures from "./components/Landing/NewFeatures";
import Ancient from "./components/Landing/Ancient";
import Roadmap from "./components/Landing/Roadmap";
import Contact from "./components/Landing/Contact";
import Footer from "./components/Landing/Footer";
import blur from "../src/assets/blur.png";
import touch1 from "../src/assets/touch1.png";
import LoginModal from "./components/Modals/LoginModal";

function App() {
  return (
    <div className="App">
      <img src={blur} alt="" className="absolute -top-10 -right-20 -z-10" />
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
      <LoginModal />
    </div>
  );
}

export default App;
