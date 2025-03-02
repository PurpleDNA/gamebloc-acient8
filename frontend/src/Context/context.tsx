import React, { createContext, useState } from "react";
interface contextProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export const Context = createContext<contextProps>({
  visible: false,
  setVisible: () => {},
});

interface ProviderProps {
  children: React.ReactNode;
}

export const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [visible, setVisible] = useState(false);
  return (
    <Context.Provider value={{ visible, setVisible }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
