import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white py-2 sm:py-3 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo y nombre */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <img
              src="/assets/logo.png"
              alt="ImageClec Logo"
              className="h-12 w-auto sm:h-16 lg:h-20"
            />
            <span className="text-[#144A7B] text-lg sm:text-xl lg:text-2xl font-bold tracking-widest font-[Montserrat]">
              IMAGECLEC
            </span>
          </div>

          {/* Menú de escritorio */}
          <div className="hidden md:flex text-[#144A7B] space-x-4 lg:space-x-6 text-sm lg:text-base">
            <Link to="/" className="hover:text-[#A7D3F3] transition-colors duration-200">
              Inicio
            </Link>
            <Link to="/centros-medicos" className="hover:text-[#A7D3F3] transition-colors duration-200">
              Centros Médicos
            </Link>
            {/*<Link to="/ecografistas" className="hover:text-[#A7D3F3] transition-colors duration-200">
              Ecografistas
            </Link>*/}
            <Link to="/faq" className="hover:text-[#A7D3F3] transition-colors duration-200">
              FAQ
            </Link>
            {/*<Link to="/login" className="text-white hover:text-[#A7D3F3] transition-colors duration-200">
              Iniciar Sesión
            </Link> */}
            {/*<Link to="/register" className="text-white hover:text-[#A7D3F3] transition-colors duration-200">
              Registrarse
            </Link>*/}
          </div>

          {/* Botón de menú móvil */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#144A7B] hover:text-[#A7D3F3] transition-colors duration-200 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 mt-2 rounded-lg shadow-lg">
              <Link
                to="/"
                onClick={closeMenu}
                className="block px-3 py-2 text-[#144A7B] hover:text-[#A7D3F3] hover:bg-gray-50 rounded-md transition-colors duration-200 text-base"
              >
                Inicio
              </Link>
              <Link
                to="/centros-medicos"
                onClick={closeMenu}
                className="block px-3 py-2 text-[#144A7B] hover:text-[#A7D3F3] hover:bg-gray-50 rounded-md transition-colors duration-200 text-base"
              >
                Centros Médicos
              </Link>
              {/*<Link
                to="/ecografistas"
                onClick={closeMenu}
                className="block px-3 py-2 text-[#144A7B] hover:text-[#A7D3F3] hover:bg-gray-50 rounded-md transition-colors duration-200 text-base"
              >
                Ecografistas
              </Link>*/}
              <Link
                to="/faq"
                onClick={closeMenu}
                className="block px-3 py-2 text-[#144A7B] hover:text-[#A7D3F3] hover:bg-gray-50 rounded-md transition-colors duration-200 text-base"
              >
                FAQ
              </Link>
              {/*<Link
                to="/login"
                onClick={closeMenu}
                className="block px-3 py-2 text-[#144A7B] hover:text-[#A7D3F3] hover:bg-gray-50 rounded-md transition-colors duration-200 text-base"
              >
                Iniciar Sesión
              </Link> */}
              {/*<Link
                to="/register"
                onClick={closeMenu}
                className="block px-3 py-2 text-[#144A7B] hover:text-[#A7D3F3] hover:bg-gray-50 rounded-md transition-colors duration-200 text-base"
              >
                Registrarse
              </Link>*/}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 