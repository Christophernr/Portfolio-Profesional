import { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import reactLogo from './assets/react.svg'

import "./App.css";
import Header from "./Components/Header/Header.jsx";
import Descripcion from "./Components/Descripcion/Descripcion.jsx";
import Redes from "./Components/Redes/Redes.jsx";
import Habilidades from "./Components/Habilidades/Habilidades.jsx";
import Proyectos from "./Components/Proyectos/Proyectos.jsx";
import Contacto from "./Components/Contacto/Contacto.jsx";
// import Nav from "./Components/Header/NavHeader.jsx";
import Footer from "./Components/Footer/Footer.jsx";

import { RedesJS } from "./Components/Redes/Redes.js";
import { DataHabilidades } from "./Components/Habilidades/Data.js";
import { ProyectosData } from "./Components/Proyectos/ProyectosData.js";

function App() {
  // const [count, setCount] = useState(0)

  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <>
      <Header menuAbierto={menuAbierto} toggleMenu={toggleMenu} />

      <nav menuAbierto={menuAbierto} toggleMenu={toggleMenu} />
      <section id="Descripcion">
        <Descripcion id="Descripcion" />
      </section>

      <div className="redes-container">
        <Redes icono={RedesJS[0].iconName} link={RedesJS[0].link} />

        <Redes icono={RedesJS[1].iconName} link={RedesJS[1].link} />

        <Redes icono={RedesJS[2].iconName} link={RedesJS[2].link} />
      </div>

      <section id="Habilidades">
        <Habilidades />
      </section>

      <section className="Proyectos-Main" id="Proyectos">
        <h2>Mis proyectos</h2>
        <div className="Proyectos-cartas-flex">
          <div className="contenedor-dos">
            <Proyectos
              title={ProyectosData[0].title}
              description={ProyectosData[0].description}
              image={ProyectosData[0].image}
              icono={RedesJS[0].iconName}
              
              tools={[
                DataHabilidades[2].skillTools1,
                DataHabilidades[2].skillTools2,
                DataHabilidades[0].skillFront1,
                DataHabilidades[0].skillFront2,
                DataHabilidades[0].skillFront3,
              ]}
              link={ProyectosData[0].link}
              video={ProyectosData[0].video}
            />

            <Proyectos
              title={ProyectosData[1].title}
              description={ProyectosData[1].description}
              image={ProyectosData[1].image}
              icono={RedesJS[0].iconName}
              abrir={RedesJS[3].newWindow}
              tools={[
                DataHabilidades[2].skillTools4,
                DataHabilidades[2].skillTools5,
                DataHabilidades[1].skillBack2,
                DataHabilidades[1].skillBack3,
                DataHabilidades[2].skillTools3,
              ]}
              link={ProyectosData[1].link}
              video={ProyectosData[1].video}
            />
          </div>

          <div className="contenedor-dos">
            <Proyectos
              title={ProyectosData[2].title}
              description={ProyectosData[2].description}
              image={ProyectosData[2].image}
              icono={RedesJS[0].iconName}
              abrir={RedesJS[3].newWindow}
              tools={[
                DataHabilidades[2].skillTools6,
                DataHabilidades[1].skillBack2,
                DataHabilidades[1].skillBack3,
              ]}
              link={ProyectosData[2].link}
              video={ProyectosData[2].video}
            />

            <Proyectos
              title={ProyectosData[3].title}
              description={ProyectosData[3].description}
              image={ProyectosData[3].image}
              icono={RedesJS[0].iconName}
              abrir={RedesJS[3].newWindow}
              tools={[
                DataHabilidades[2].skillTools5,
                DataHabilidades[2].skillTools4,
                DataHabilidades[2].skillTools3,
                DataHabilidades[1].skillBack2,
                DataHabilidades[1].skillBack3,
              ]}
              link={ProyectosData[3].link}
              video={ProyectosData[3].video}
            />
          </div>
        </div>
      </section>

      <Contacto />

      <Footer />
    </>
  );
}

export default App;
