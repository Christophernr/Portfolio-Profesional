import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Email(propsEmail) {
  return (
    <div className="Contacto-Email div-contacto">
      <FontAwesomeIcon
        className="icono icono-mail"
        icon={propsEmail.emailIcon}
      />

      <div className="Contacto-Email-Info info-contacto">
        <h3>Email</h3>
        <a href="mailto:crisnarvaez928@gmail.com?subject=Consulta%20" target="_blank">
          <p>{propsEmail.email}</p>
        </a>
      </div>
    </div>
  );
}
