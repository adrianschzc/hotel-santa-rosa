function Servicios() {
  return (
    <div className="py-4 border-t border-gray-300">
      <div>
        <h1 className="text-xl font-bold uppercase text-center mb-10">
          Servicios
        </h1>
        {/* Servicios */}
        <div className="flex gap-4 h-[400px] w-[100%]">
          <div className="w-[33.33%] bg-amber-600 p-2">
            <h2 className="text-center font-semibold">Habitación Sencilla</h2>
          </div>
          <div className="w-[33.33%] bg-amber-600 p-2">
            <h2 className="text-center font-semibold">Habitación Doble</h2>
          </div>
          <div className="w-[33.33%] bg-amber-600 p-2">
            <h2 className="text-center font-semibold">Habitación Triple</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicios;
