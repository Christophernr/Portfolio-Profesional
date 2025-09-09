import "./Redes.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Redes(propRedes) {
    return (
        <div className="redes">
            <button className="btn-redes">
                <a href={propRedes.link} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={propRedes.icono} className="icono-redes" />
                </a>
            </button>

        </div>


    )


}