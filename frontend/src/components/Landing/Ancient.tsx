// import React from "react";
import Button from "../Button";
import ancient from "../../assets/ancient.png";
import blur from "../../assets/blur.png";
function Ancient() {
  return (
    <div className="containerr section flex flex-col gap-8 relative">
      <img
        src={blur}
        alt=""
        className="hidden lg:block absolute -top-[50px] -right-[500px] -z-10"
      />
      <img src={ancient} alt="" className="mx-auto w-[88px] md:w-[128px]" />
      <div className="w-full flex flex-col gap-3 text-center">
        <h1 className="gradient-text md:text-4xl font-valorant text-transparent bg-gradient-to-r from-lgradient to-dgradient">
          Transactions on the Ancient 8 network{" "}
        </h1>
        <p className="font-opsans text-white text-[12px] md:text-base md:w-2/3 mx-auto">
          Ancient8 provides the foundation, acting as the infrastructural core
          for Web3 gaming projects through its Layer 2 blockchain built on the
          OP Stack. With scalability, composability, and Celestia-powered data
          availability, Ancient8 offers the perfect environment for gaming
          projects to flourish.
        </p>
        <Button text="Get Started Now" style="w-max mx-auto mt-2" />
      </div>
    </div>
  );
}

export default Ancient;
