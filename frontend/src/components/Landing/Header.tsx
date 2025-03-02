// import React from "react";
import Button from "../Button";
import GBLogo from "../../assets/GBLogo.png";
import { useContext } from "react";
import { Context } from "../../Context/context";
import { useAccount } from "wagmi";
function Header() {
  const { address } = useAccount();
  const useModal = useContext(Context);
  const { setVisible } = useModal;
  let shortAddress;
  if (address) {
    shortAddress = shortenAddress(address);
  }

  // shortenaddress function
  function shortenAddress(address: string) {
    if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
      throw new Error("Invalid Ethereum address");
    }
    return `${address.slice(0, 6)}....${address.slice(-4)}`;
  }
  return (
    <div className=" flex justify-between mt-8 pb-5 px-[5%] border-b border-b-slate-300">
      <img className="w-20 md:w-28" src={GBLogo} alt="GameBloc Logo" />
      <div onClick={() => setVisible(true)}>
        {address ? (
          <Button text={shortAddress} />
        ) : (
          <Button text="Connect Wallet" />
        )}
      </div>
    </div>
  );
}

export default Header;
