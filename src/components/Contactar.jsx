import { RiPhoneLine, RiFacebookBoxFill, RiWhatsappFill } from "react-icons/ri";

function Contactar() {
  return (
    <div className="py-4 border-t border-gray-300">
      <div>
        <h1 className="text-xl font-bold uppercase text-center mb-10">
          Contáctanos
        </h1>
        <div className="font-semibold text-md px-4">
          <ul className="flex items-center justify-center gap-6">
            <li className="uppercase text-2xl flex items-center">
              <RiWhatsappFill className="text-green-500 text-3xl" />
              <span className="px-2">8262689408</span>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener"
                href="https://www.facebook.com/hotelsantarosarayones/"
                className="uppercase text-4xl flex text-blue-600"
              >
                <RiFacebookBoxFill />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contactar;
