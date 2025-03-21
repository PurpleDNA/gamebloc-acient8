// import React from 'react'
import Mainpic from "../../assets/Main Pic.png";

function SubHero() {
  return (
    <div className="flex flex-col gap-5 section text-center">
      <h1 className="w-[90%] md:w-2/3 mx-auto gradient-text md:text-4xl font-valorant text-transparent bg-gradient-to-r from-lgradient to-dgradient">
        Where Gamers, Competition, and Web3 Unite
      </h1>
      <p className="w-[90%] md:w-2/3 mx-auto font-opsans text-white text-[12px] md:text-base">
        GameBloc is a competitive gaming hub where players join skill-based
        tournaments to win prizes. It also supports game developers by providing
        a platform for game launches, promotions, and community engagement
        through tournaments, live streams, and events
      </p>
      <img src={Mainpic} alt="" className="w-screen" />
    </div>
  );
}

export default SubHero;
