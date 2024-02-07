function Historia() {
  return (
    <div className="pl-4 border-t border-gray-300">
      <h1 className="uppercase mb-10 text-center text-xl font-bold pt-2">
        Historia
      </h1>
      <div className="lg:flex md:flex">
        <img
          src={`${import.meta.env.VITE_URL_TOKEN + "/hotel_parte_1.jpg"}`}
          alt="Hotel Parte 1"
          className="h-[250px] md:w-[250px] md:h-auto container"
        />

        <div className="p-4">
          <span className="">
            En abril de 1982, los fundadores, Sr. Laurentino Sánchez Ramos y la
            Sra. Má Antonia Oyervides, iniciaron un negocio hotelero con gran
            sacrificio y dedicación. Comenzaron con humildes 5 habitaciones,
            pero gracias a su incansable esfuerzo, la demanda creció. Con el
            tiempo, el establecimiento se expandió a 25 habitaciones,
            consolidándose como un referente de hospitalidad. La historia de
            este negocio es un testimonio de superación y servicio,
            evolucionando de una pequeña empresa a un legado familiar que
            perdura con éxito.
          </span>
        </div>
      </div>
    </div>
  );
}
export default Historia;
