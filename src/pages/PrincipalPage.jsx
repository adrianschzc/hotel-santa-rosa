import Carrusel from "../components/Carrusel";
import Historia from "../components/Historia";
import Servicios from "../components/Servicios";
import { useNavbarRef } from "../context/NavbarRef";


function PrincipalPage() {
  const { sectionRefs } = useNavbarRef();
  const imagenes = [
    "src/images/carrusel/hotel_parte_1.jpg",
    "src/images/carrusel/hotel_principal.jpg",
    "src/images/carrusel/hotel_central.jpg",
    "https://nltravel.s3.us-east-2.amazonaws.com/wp-content/uploads/2023/05/15091807/Entrada-a-Rayones-scaled.jpg"
    // ... otras rutas de imágenes
  ];
  const styles = {
    container: {
      backgroundImage: 'url("src/images/cerro.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "100vh",
    },
    content: {
      // Estilos para el contenido sobre el fondo (opcional)
      color: "#fff",
      textAlign: "center",
      padding: "20px",
      borderRadius: "8px",
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo semitransparente
    },
  };
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen"
      style={styles.container}
    >
      <div style={styles.content}>
        <div className="h-full w-[1000px] container mb-10">
          <Carrusel autoSlide={true}>
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
