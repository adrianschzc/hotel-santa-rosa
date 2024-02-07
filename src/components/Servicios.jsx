function Servicios() {
  return (
    <div className="py-4 border-t border-gray-300">
      <div>
        <h1 className="text-xl font-bold uppercase text-center mb-10">
          Servicios
        </h1>
        {/* Servicios */}
        <div className="lg:flex md:flex gap-4">
          <div className="lg:w-[33.33%] md:w-[33.33%] w-auto bg-amber-900 p-2 rounded-lg mb-2">
            <h2 className="text-center font-semibold text-xl p-2">
              Habitación Sencilla
            </h2>
            <div className="flex p-4 items-center justify-center">
              <img
                src={`${import.meta.env.VITE_URL_TOKEN + "/cuartos.jpg"}`}
                alt="Cuarto doble"
                className="h-[150px] w-[250px] rounded-lg"
              />
            </div>

            <div>
              <ul className="p-6">
                <li className="">- Cuarto con 1 cama</li>
                <li>- Baño completo</li>
                <li>- Clima</li>
              </ul>
            </div>
          </div>
          {/* Habitacion doble */}
          <div className="lg:w-[33.33%] md:w-[33.33%] w-auto bg-amber-900 p-2 rounded-lg mb-2">
            <h2 className="text-center font-semibold text-xl p-2">
              Habitación Doble
            </h2>
            <div className="flex p-4 items-center justify-center">
              <img
                src={`${import.meta.env.VITE_URL_TOKEN + "/cuartos.jpg"}`}
                alt="Cuarto doble"
                className="h-[150px] w-[250px] rounded-lg"
              />
            </div>

            <div>
              <ul className="p-6">
                <li className="">- Cuarto con dos camas</li>
                <li>- Baño completo</li>
                <li>- Clima</li>
              </ul>
            </div>
          </div>
          {/* Habitacion triple */}
          <div className="lg:w-[33.33%] md:w-[33.33%] w-auto bg-amber-900 p-2 rounded-lg">
            <h2 className="text-center font-semibold text-xl p-2">
              Habitación Triple
            </h2>
            <div className="flex p-4 items-center justify-center">
              <img
                src={`${import.meta.env.VITE_URL_TOKEN + "/cuartos.jpg"}`}
                alt="Cuarto doble"
                className="h-[150px] w-[250px] rounded-lg"
              />
            </div>

            <div>
              <ul className="p-6">
                <li className="">- Cuarto con 3 camas</li>
                <li>- Baño completo</li>
                <li>- Clima</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicios;
