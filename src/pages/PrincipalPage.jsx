import Carrusel from "../components/Carrusel";
import Historia from "../components/Historia";
import Servicios from "../components/Servicios";
import { useNavbarRef } from "../context/NavbarRef";

function PrincipalPage() {
  const { sectionRefs } = useNavbarRef();
  const imagenes = [
    import.meta.env.VITE_URL_TOKEN + "/hotel_parte_1.jpg",
    import.meta.env.VITE_URL_TOKEN + "/hotel_principal.jpg",
    import.meta.env.VITE_URL_TOKEN + "/hotel_central.jpg",
    import.meta.env.VITE_URL_TOKEN + "/cuartos.jpg",
  ];
  const styles = {
    container: {
      backgroundImage: `url(${import.meta.env.VITE_URL_TOKEN + "/cerro.jpg"})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "100vh",
    },
    content: {
      // Estilos para el contenido sobre el fondo (opcional)
      color: "#fff",
      padding: "20px",
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo semitransparente
    },
  };
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div className="h-full lg:w-[900px] w-auto container mb-10">
          <Carrusel>
            {imagenes.map((s, index) => (
              <img src={s} key={index} />
            ))}
          </Carrusel>
        </div>
        <div ref={sectionRefs.historia} className="p-4">
          <Historia />
        </div>
        <div ref={sectionRefs.servicios} className="p-4">
          <Servicios />
        </div>
      </div>
    </div>
  );
}

export default PrincipalPage;
