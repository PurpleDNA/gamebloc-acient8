import { useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";
import { FC, ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
}

const ProtectedRoutes: FC<Props> = ({ children }) => {
  const { isConnected } = useAccount();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isConnected) {
      navigate("/", { replace: true });
      console.log("You are not connected");
    }
  }, [navigate, isConnected]);

  return <div>{children}</div>;
};

export default ProtectedRoutes;
