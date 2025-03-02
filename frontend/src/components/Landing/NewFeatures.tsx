// import React from "react";
import Arena from "../../assets/arena.png";
import Community from "../../assets/community.png";
import versus from "../../assets/versus.png";
import FeatureCard from "../FeatureCard";
import touch3 from "../../assets/touch3.png";
function NewFeatures() {
  return (
    <div className="flex flex-col gap-10 section containerr relative">
      <img
        src={touch3}
        alt=""
        className="absolute -left-20 h-[450px] w-full top-2"
      />
      <div className="mx-auto text-center">
        <h1 className="gradient-text md:text-4xl font-valorant text-transparent bg-gradient-to-r from-lgradient to-dgradient">
          Gamebloc just got even better!
        </h1>
        <p className="font-opsans text-white text-[12px] md:text-base mt-3 ">
          Exciting updates are coming to Gamebloc! Get ready for
        </p>
      </div>
      <div className="flex flex-col items-center justify-center md:flex-row gap-5 md:gap-12">
        <FeatureCard
          img={Arena}
          title="Gamebloc Arena"
          description="Play original Gamebloc games, climb the leaderboards, and earn points to enter tournaments for free!"
        />
        <FeatureCard
          img={Community}
          title="Community"
          description="A revamped community section to enhance engagement and connectivity."
        />
        <FeatureCard
          img={versus}
          title="1v1 Game Mode"
          description="Play original Gamebloc games, climb the leaderboards, and earn points to enter tournaments for free!"
        />
      </div>
    </div>
  );
}

export default NewFeatures;
