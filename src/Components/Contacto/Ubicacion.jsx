import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Ubicacion(propsUbicacion) {
  return (
    <div className="Contacto-Ubicacion div-contacto">
      <FontAwesomeIcon className="icono icono-ubi" icon={propsUbicacion.ubicacionIcon} />

      <div className="Contacto-Ubicacion-Info info-contacto">
        <h3>Ubicacion</h3>
        {/* <p>{propsUbicacion.ubicacionIcon}</p> */}
        <p>{propsUbicacion.pais}</p>
      </div>
    </div>
  );
}