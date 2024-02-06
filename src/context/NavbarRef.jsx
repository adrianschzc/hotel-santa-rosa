import { createContext, useContext, useRef } from "react";

export const NavbarRefContext = createContext();

export const useNavbarRef = () => {
  const context = useContext(NavbarRefContext);
  if (!context) {
    throw new Error("useNavbarRef deberia de estar dentro del provider");
  }
  return context;
};

export const NavbarRefProvider = ({ children }) => {
  const sectionRefs = {
    historia: useRef(null),
    servicios: useRef(null),
    // Agrega más secciones según sea necesario
  };
  const handleClick = (section) => {
    if (sectionRefs[section] && sectionRefs[section].current) {
      sectionRefs[section].current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <NavbarRefContext.Provider value={{ sectionRefs, handleClick }}>
      {children}
    </NavbarRefContext.Provider>
  );
};
