// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import "./carousel.css";
import CarouselCard from "./CarouselCard";
import nova_I from "../../../assets/nova_I.png";
import nova_II from "../../../assets/nova_II.png";
import nova_III from "../../../assets/nova_III.png";
import ad from "../../../assets/ad.png";
import img5 from "../../../assets/img5.png";
import _ad from "../../../assets/_ad.png";

const Carousell = () => {
  const carouselData = [
    {
      title: "BLITZKRIEG",
      name: "Call of Duty: Mobile",
      Host: "GAMEBLOC",
      img: { nova_I },
      hash: "LCD]Va0t~dn3^}0DIcIL-#%Fxp-z",
      tags: ["FPS", "Shooting", "Battle Royale", "Multiplayer"],
    },
    {
      title: "BLITZKRIEG",
      name: "Call of Duty: Mobile",
      Host: "GAMEBLOC",
      img: { nova_II },
      hash: "L9EA%0{p-a#Q1bwFES5kO7gDEcE*",
      tags: ["FPS", "Shooting", "Battle Royale", "Multiplayer"],
    },
    {
      title: "BLITZKRIEG",
      name: "Call of Duty: Mobile",
      Host: "GAMEBLOC",
      img: { nova_III },
      hash: "L28hE@~VQm.m8yyBJ|$-0000s@ne",
      tags: ["FPS", "Shooting", "Battle Royale", "Multiplayer"],
    },
    {
      title: "ALL OUR PAST TOURNAMENTS",
      name: "Call of Duty: Mobile",
      Host: "GAMEBLOC",
      img: { ad },
      hash: "L9G825$:qs5E#Mkf?1IvI-IVoNxv",
      tags: ["Fighting", "Action", "Battle Royle", "Multiplayer"],
    },
    {
      title: "BLITZKRIEG",
      name: "Call of Duty: Mobile",
      Host: "GAMEBLOC",
      img: { img5 },
      hash: "LJF5yU-.~KV=-gRkxsWZ0ToeE4WU",
      tags: ["FPS", "Shooting", "Battle Royale", "Multiplayer"],
    },
    {
      title: "THE BLITZKRIEG TOURNAMENT",
      name: "Call of Duty: Mobile",
      Host: "GAMEBLOC ",
      img: { _ad },
      hash: "LUG*RE_NoeRP?t-;ayaxrgVzazt8",
      tags: ["FPS", "Shooting", "Battle Royale", "Multiplayer"],
    },
  ];

  return (
    <div className="section  justify-center items-center flex xl:block  text-white">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination]}
        loop={true}
        className="mySwiper"
      >
        {carouselData.map((list, index) => (
          <SwiperSlide key={index}>
            <CarouselCard list={list} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousell;
