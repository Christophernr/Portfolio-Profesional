import "./Proyectos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import video from "../../assets/to-do-list visualizer/añadir.mkv";
export default function Proyectos(propsTools) {
  return (
    <div className="Proyectos-Container">
      <div className="Proyectos-Card">
        <div className="img-container">
          <video controls>
            <source src={propsTools.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <h3>{propsTools.title}</h3>
        <p>{propsTools.description}</p>

        <ul className="skills-list tools-list">
          {propsTools.tools?.map((tool, index) => (
            <div key={index} className="tool-item proyecto-tool">
              {tool}
            </div>
          ))}
          {/* ese "tools" es el tools={[]} del app.jsx */}
        </ul>

        <div className="btns-div">
          <a href={propsTools.link} target="_blank">
            <button className="btn-Proyecto btn-github">
              <FontAwesomeIcon
                icon={propsTools.icono}
                className="icono-redes"
              />
              Codigo
            </button>
          </a>

        </div>
      </div>
    </div>
  );
}
