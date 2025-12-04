"use client";

import { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@heroui/react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Descripcion", href: "#Descripcion" },
    { name: "Habilidades", href: "#Habilidades" },
    { name: "Proyectos", href: "#Proyectos" },
  ];

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={`fixed top-0 w-full z-50 transition-all duration-400 border-b border-gray-200 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-2xl backdrop-saturate-150"
          : "bg-white"
      }`}
      maxWidth="full"
      height="5rem"
    >
      <NavbarContent>
        <NavbarBrand>
          <h1 className="font-montserrat text-xl font-semibold text-[#2d3e50]">
            Portafolio Web
          </h1>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="end">
        {menuItems.map((item) => (
          <NavbarItem key={item.name}>
            <Link
              href={item.href}
              className="font-montserrat text-[#2d3e50] hover:text-[#1a252f] transition-colors"
              underline="hover"
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Menú responsive eliminado, solo navbar de escritorio */}
    </Navbar>
  );
}
