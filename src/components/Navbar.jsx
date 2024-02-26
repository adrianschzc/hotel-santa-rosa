import { useState } from "react";
import { useNavbarRef } from "../context/NavbarRef";
import { RiAlignJustify } from "react-icons/ri";

function Navbar() {
  const { handleClick } = useNavbarRef();
  const [showMenu, setShowMenu] = useState(false);
  const handleClickMenu = () => {
    setShowMenu(!showMenu);
    console.log(showMenu);
  };
  return (
    <div className="">
      <div className="p-4 bg-amber-700 md:flex md:justify-between">
        <div className="flex justify-between items-center">
          {/* Titulo y boton */}
          <h1 className="uppercase text-xl text-white font-bold">
            Hotel Santa Rosa
          </h1>
          <div className="">
            <button
              className="block md:hidden text-white text-xl"
              onClick={handleClickMenu}
            >
              <RiAlignJustify />
            </button>
          </div>
        </div>
        {/* Options */}
        <div className={`h-auto lg:block md:block ${showMenu ? "" : "hidden"}`}>
          <ul
            className={`flex flex-col md:flex-row gap-4 md:gap-6 items-end pt-2 md:p-0`}
          >
            <li
              onClick={() => {
                handleClick("historia");
                handleClickMenu();
              }}
              className="relative text-white transition-colors duration-300 before:absolute before:left-0 before:-bottom-1 before:w-0 before:h-0.5 before:bg-white before:rounded-full before:transition-all before:duration-300 hover:before:w-full"
            >
              Historia
            </li>
            <li
              onClick={() => {
                handleClick("servicios");
                handleClickMenu();
              }}
              className="relative text-white transition-colors duration-300 before:absolute before:left-0 before:-bottom-1 before:w-0 before:h-0.5 before:bg-white before:rounded-full before:transition-all before:duration-300 hover:before:w-full"
            >
              Servicios
            </li>
            <li
              onClick={() => {
                handleClick("contactar");
                handleClickMenu();
              }}
              className="relative text-white transition-colors duration-300 before:absolute before:left-0 before:-bottom-1 before:w-0 before:h-0.5 before:bg-white before:rounded-full before:transition-all before:duration-300 hover:before:w-full"
            >
              Contactar
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
