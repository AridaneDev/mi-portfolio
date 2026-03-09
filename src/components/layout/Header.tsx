import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useActiveSection } from "../../hooks/useActiveSection";

const navLinks = [
  { href: "#inicio", label: "Inicio", id: "inicio" },
  { href: "#proyectos", label: "Proyectos", id: "proyectos" },
  { href: "#sobre-mi", label: "Sobre Mí", id: "sobre-mi" },
  { href: "#contacto", label: "Contacto", id: "contacto" },
];

export function Header() {
  const activeSection = useActiveSection();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-purple-900/70 to-slate-900/70 backdrop-blur-md  shadow-lg z-50">
      <nav className="max-w-7xl mx-auto p-6 md:py-8 flex justify-between items-center">
        <a href="#inicio">
          <span
            className="text-4xl text-white"
            style={{ fontFamily: "Italianno, cursive" }}
          >
            Aridane García
          </span>
        </a>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white text-3xl"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>

        {isMenuOpen && (
          <div
            className="absolute top-full left-0 w-full bg-gradient-to-r from-purple-900/95 to-slate-900/95
          backdrop-blur-md md:hidden shadow-lg border-t border-gray-700"
          >
            <ul className="flex flex-col">
              {navLinks.map(({ href, label, id }) => (
                <li key={id}>
                  <a
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-6 py-4 transition-colors ${
                      activeSection === id ? "text-cyan-400" : "text-white"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {navLinks.map(({ href, label, id }) => (
              <li key={id}>
                <a
                  href={href}
                  className={`hover:text-cyan-400 transition-colors ${activeSection === id ? "text-cyan-400" : "text-white"}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
