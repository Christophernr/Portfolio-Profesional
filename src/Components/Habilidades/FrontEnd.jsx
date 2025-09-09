export default function FrontEnd(propsFront) {
  return (
    <section className="skills-container">
      <h2>Frontend</h2>
      <ul className="skills-list">
        <li className="skills-item">
          <p>{propsFront.skillFront1}</p>

          <div className="div-skills-measure avanzado">{propsFront.level3}</div>
        </li>

        <li className="skills-item">
          <p>{propsFront.skillFront2}</p>

          <div className="div-skills-measure avanzado">{propsFront.level3}</div>
        </li>

        <li className="skills-item">
          <p>{propsFront.skillFront3}</p>

          <div className="div-skills-measure inter">{propsFront.level2}</div>
        </li>
      </ul>
    </section>
  );
}
