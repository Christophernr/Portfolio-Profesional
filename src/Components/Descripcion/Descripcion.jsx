import "./Descripcion.css";

export default function Descripcion() {
  return (
    <section className="descripcion-container">
      <h2>
        <span className="span-header">Desarrollador</span>Web Jr
      </h2>
      <p>
        Experiencia con C#, SQL Server, Entity Framework y bases de desarrollo
        web (HTML, CSS, JS, React).
      </p>

      <div className="descripcion-botones">
        <button className="btn-descripcion btn-proyectos">
          <a href="https://github.com/Christophernr" target="_blank">
            Ver proyectos
          </a>
        </button>
        <button className="btn-descripcion btn-cv">
          <a
            href="/CV_Cristhofer Narváez Rivas.pdf"
            target="_blank"
            rel="noopener noreferrer"
            
          >
            Ver CV
          </a>
        </button>
      </div>
    </section>
  );
}
