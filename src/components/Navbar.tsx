import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-blue-900  shadow-md">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img
          src="/assets/logo.png"
          alt="ImageClec Logo"
          className="h-12 w-auto"
        />
        <span className="text-white text-2xl font-bold tracking-widest font-[Montserrat]">
          IMAGECLEC
        </span>
      </div>
      <div className="space-x-4">
        <Link to="/" className="text-white hover:text-blue-300 transition">
          Inicio
        </Link>
        <Link to="/login" className="text-white hover:text-blue-300 transition">
          Iniciar Sesión
        </Link>
        <Link to="/register" className="text-white hover:text-blue-300 transition">
          Registrarse
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar; 