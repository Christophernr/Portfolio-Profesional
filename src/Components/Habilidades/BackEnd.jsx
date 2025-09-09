export default function BackEnd(propsBack) {
  return (
    <section className="skills-container">
      <h2>BackEnd</h2>
      <ul className="skills-list">


        <li className="skills-item">
          <p>{propsBack.skillBack2}</p>

          <div className="div-skills-measure inter">{propsBack.level2}</div>
        </li>

        <li className="skills-item">
          <p>{propsBack.skillBack3}</p>

          <div className="div-skills-measure inter">{propsBack.level2}</div>
        </li>
      </ul>
    </section>
  );
}
