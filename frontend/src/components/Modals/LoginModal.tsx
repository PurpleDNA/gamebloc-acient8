// import React from 'react'
import LoginModalOptions from "./LoginModalOptions";
// import { ModalOptionsProps } from "./LoginModalOptions";
// import nfid from "../../assets/nfid.png";
import ethereum from "../../assets/ethereum.png";
// import identity from "../../assets/identity.png";
import { X } from "lucide-react";
import { useContext } from "react";
import { Context } from "../../Context/context";
import { ConnectKitButton } from "connectkit";
function LoginModal() {
  const useModal = useContext(Context);
  const { visible, setVisible } = useModal;
  return (
    <div
      className={`w-screen h-screen bg-[#222226] fixed inset-0 top-0 left-0 z-50 flex justify-center items-center bg-opacity-80 backdrop-blur-sm ${
        visible ? "block" : "hidden"
      }`}
    >
      <div className="flex flex-col md:gap-2 p-3 w-max bg-[#151718] rounded-md">
        <div
          className="w-full flex justify-end"
          onClick={() => setVisible(false)}
        >
          <X className="text-white cursor-pointer w-3 md:w-5" />
        </div>
        <div className="flex flex-col gap-3 md:gap-8 items-center pt-2 pb-3 md:pb-10 px-5 md:px-9">
          <h1 className="font-opsans font-bold text-[11px] md:text-xl text-white">
            Connect a Wallet
          </h1>
          <div className="flex flex-col gap-5">
            <ConnectKitButton.Custom>
              {({ show }) => {
                return (
                  <div onClick={show}>
                    <LoginModalOptions
                      icon={ethereum}
                      text="Connect with Ethereum Wallet"
                    />
                  </div>
                );
              }}
            </ConnectKitButton.Custom>
            {/* {options.map((option, index) => (
              <LoginModalOptions
                key={index}
                icon={option.icon}
                text={option.text}
              />
            ))} */}
          </div>
          <p className="font-opsans text-white text-[11px]">
            You can't wait?{" "}
            <span className="text-button cursor-pointer">
              Explore Gameboc as Guest
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

// const options: ModalOptionsProps[] = [
//   {
//     icon: nfid,
//     text: "Connect with NFID",
//   },
//   {
//     icon: identity,
//     text: "Connect with Internet Identity",
//   },
// ];
export default LoginModal;
