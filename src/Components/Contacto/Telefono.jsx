import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Telefono(propsTelefono) {
  return (
    <div className="Contacto-Telefono div-contacto">
      <FontAwesomeIcon className="icono icono-phone" icon={propsTelefono.telefonoIcon} />

      <div className="Contacto-Telefono-Info info-contacto" >
        <h3>Teléfono</h3>
        <a href="https://wa.me/+50687678934" target="_blank"><p>{propsTelefono.numero}</p></a>
        {/* <p>{propsTelefono.pais}</p> */}
      </div>
    </div>
  );
}