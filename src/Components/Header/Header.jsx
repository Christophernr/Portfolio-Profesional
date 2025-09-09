import "./Header.css";
import { useEffect, useState } from "react";
import Nav from "./NavHeader";
export default function Header() {
  // const toggleMenu = () => {
  //   setMenuAbierto(!menuAbierto);
  // };
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  useEffect(() => {
    const handlescroll = () => {
      if (window.scrollY > 0) {
        document.querySelector(".header-main").classList.add("scrolled");
      } else {
        document.querySelector(".header-main").classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  }, []);

  return (
    <header className="header-main">
      <h1>Portafolio Web</h1>

      <button className="desplegar" onClick={toggleMenu}>
        &#9776;
      </button>

      {/* <Nav menuAbierto={menuAbierto} toggleMenu={toggleMenu} /> */}
      <Nav menuAbierto={menuAbierto} toggleMenu={toggleMenu} variant="header"/>
    </header>
  );
}
