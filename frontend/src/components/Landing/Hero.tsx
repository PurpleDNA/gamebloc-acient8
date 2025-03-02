// import React from 'react'

import Button from "../Button";
import Heroimg from "../../assets/Hero2.png";

function Hero() {
  return (
    <div className="flex flex-col gap-5 md:gap-0 md:flex-row md:justify-between md:items-center containerr section">
      <div className="w-full md:w-[60%] flex flex-col gap-5 md:text-left">
        <h1 className="gradient-text md:text-[40px] font-valorant text-transparent bg-gradient-to-r from-lgradient to-dgradient">
          Powering the future of competitive web3 gaming
        </h1>
        <p className="font-opsans text-white text-[12px] md:text-base">
          Experience next-gen gaming with seamless tournaments, exciting
          rewards, and a thriving player community. Compete, earn, and showcase
          your skills in the ultimate blockchain-powered gaming hub.
        </p>
        <Button text="Enter Gamebloc" style="w-max " />
      </div>
      <div className="md:w-2/3">
        <img src={Heroimg} alt="" className="w-full" />
      </div>
    </div>
  );
}

export default Hero;
