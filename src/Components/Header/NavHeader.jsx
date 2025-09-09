import { useState } from "react";
// import { Link } from "react-router-dom";
// import '../../../App.css';
export default function NavHeader({ menuAbierto, toggleMenu,variant= "header" }) {
//   const [menuAbierto, setMenuAbierto] = useState(false);

//   const toggleMenu = () => {
//     setMenuAbierto(!menuAbierto);
//   };
  return (
    <>


      <nav className={`container-nav ${variant}-nav ${menuAbierto ? "activo" : ""}`}>
        <ul>
          <li>
            <a href="#Descripcion" className="link-header" onClick={toggleMenu}>Descripcion
              
            </a>
          </li>
          <li>
            <a href="#Habilidades" className="link-header" onClick={toggleMenu}>Habilidades</a>
          </li>
          <li>
            <a href="#Proyectos" className="link-header" onClick={toggleMenu}>Proyectos</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
