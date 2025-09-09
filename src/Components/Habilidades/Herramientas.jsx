export default function herramientas(propsTools) {
  return (
    <section className="skills-container">
      <h2>Herramientas y Frameworks</h2>

      <ul className="skills-list tools-list">
        <div className="tool-item">{propsTools.skillTools1}</div>
        <div className="tool-item">{propsTools.skillTools2}</div>

        <div className="tool-item">{propsTools.skillTools3}</div>

        <div className="tool-item">{propsTools.skillTools4}</div>
        <div className="tool-item">{propsTools.skillTools5}</div>
        <div className="tool-item">{propsTools.skillTools6}</div>
        <div className="tool-item">{propsTools.skillTools7}</div>
      </ul>
    </section>
  );
}
