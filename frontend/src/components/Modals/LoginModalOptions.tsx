// import React from "react";
import { useContext } from "react";
import { Context } from "../../Context/context";
export interface ModalOptionsProps {
  icon: string;
  text: string;
}

function LoginModalOptions({ icon, text }: ModalOptionsProps) {
  const useModal = useContext(Context);
  const { setVisible } = useModal;
  return (
    <div
      className="cursor-pointer flex gap-3 justify-start items-center pl-8 pr-28 py-5 hover:bg-[#353763] bg-[#222226] rounded-md"
      onClick={() => setVisible(false)}
    >
      <img src={icon} alt="connect icon" className="w-5" />
      <p className="font-opsans font-bold text-[#FBFBFC] ">{text}</p>
    </div>
  );
}

export default LoginModalOptions;
