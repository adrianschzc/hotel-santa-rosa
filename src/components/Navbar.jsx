import { useNavbarRef } from "../context/NavbarRef";

function Navbar() {
  const { sectionRefs, handleClick } = useNavbarRef()
  return (
    <div className="">
      <div className="p-4 bg-amber-700 flex justify-between">
        <h1 className="uppercase text-xl text-white font-bold">
          Hotel Santa Rosa
        </h1>
        {/* Options */}
        <div>
          <ul className="flex gap-6 items-center">
            <li
              onClick={() => handleClick("historia")}
              className="relative text-white transition-colors duration-300 before:absolute before:left-0 before:-bottom-1 before:w-0 before:h-0.5 before:bg-white before:rounded-full before:transition-all before:duration-300 hover:before:w-full"
            >
              Historia
            </li>
            <li
              onClick={() => handleClick("servicios")}
              className="relative text-white transition-colors duration-300 before:absolute before:left-0 before:-bottom-1 before:w-0 before:h-0.5 before:bg-white before:rounded-full before:transition-all before:duration-300 hover:before:w-full"
            >
              Servicios
            </li>
            <li
              onClick={handleClick}
              className="relative text-white transition-colors duration-300 before:absolute before:left-0 before:-bottom-1 before:w-0 before:h-0.5 before:bg-white before:rounded-full before:transition-all before:duration-300 hover:before:w-full"
            >
              ¿Que visitar?
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
