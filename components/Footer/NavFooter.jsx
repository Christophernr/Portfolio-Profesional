"use client";

export default function NavFooter() {
  const menuItems = [
    { name: "Descripcion", href: "#Descripcion" },
    { name: "Habilidades", href: "#Habilidades" },
    { name: "Proyectos", href: "#Proyectos" },
  ];

  return (
    <nav>
      <ul className="space-y-3 list-none [&_*]:text-gray-400">
        {menuItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className="hover:text-white transition-colors text-lg no-underline"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
