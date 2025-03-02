// import React from 'react'

import Button from "../Button";

function Contact() {
  return (
    <div className="containerr section flex flex-col gap-8">
      <div className="w-full md:w-3/4 mx-auto flex flex-col gap-3 text-center">
        <h1 className="md:text-4xl font-valorant text-white">
          Stay up to date
        </h1>
        <p className="font-opsans text-white text-[12px] md:text-base mx-auto">
          Sign up for updates. No spam, just exciting stuff from our world of
          Web3 gaming.
        </p>
      </div>
      <div className="flex flex-row justify-center">
        <input
          type="text"
          placeholder="Enter your email address"
          className="bg-[#3B3A3A] border-y border-l border-white text-white text-[10px] md:text-base p-2 rounded-l-sm w-2/3 md:w-1/2 outline-none"
        />
        <Button text="Subscribe" />
      </div>
    </div>
  );
}

export default Contact;
