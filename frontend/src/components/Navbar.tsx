import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-white py-2 shadow-md sticky top-0 z-50">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img
          src="/assets/logo.png"
          alt="ImageClec Logo"
          className="h-20 w-auto"
        />
        <span className="text-[#144A7B] text-2xl font-bold tracking-widest font-[Montserrat]">
          IMAGECLEC
        </span>
      </div>
      <div className="text-[#144A7B] space-x-6 text-l">
        <Link to="/" className="hover:text-[#A7D3F3] transition">
          Inicio
        </Link>
        <Link to="/centros-medicos" className="hover:text-[#A7D3F3] transition">
          Centros Médicos
        </Link>
        {/*<Link to="/ecografistas" className="hover:text-[#A7D3F3] transition">
          Ecografistas
        </Link>*/}
        <Link to="/faq" className="hover:text-[#A7D3F3] transition">
          FAQ
        </Link>
        {/*<Link to="/login" className="text-white hover:text-[#A7D3F3] transition">
          Iniciar Sesión
        </Link> */}
        {/*<Link to="/register" className="text-white hover:text-[#A7D3F3] transition">
          Registrarse
        </Link>*/}
      </div>
    </div>
  </nav>
);

export default Navbar; 