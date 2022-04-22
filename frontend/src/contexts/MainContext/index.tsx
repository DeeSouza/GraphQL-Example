import { useState, createContext, useContext } from "react";

type MainContextProviderProps = {
  children: React.ReactNode;
};

type MainContextData = {
  handleToggleMenu: () => void;
  showMenu: boolean;
};

export const MainContext = createContext({} as MainContextData);

export const MainContextProvider = ({ children }: MainContextProviderProps) => {
  const [showMenu, setShowMenu] = useState(false);

  function handleToggleMenu() {
    setShowMenu((state) => !state);
  }

  return (
    <MainContext.Provider
      value={{
        handleToggleMenu,
        showMenu,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMenu = () => {
  return useContext(MainContext);
};
