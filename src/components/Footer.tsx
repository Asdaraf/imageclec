// src/components/Footer.tsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-blue-900 text-white py-6 mt-12">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
      <div className="mb-4 md:mb-0 text-center md:text-left">
        <span className="font-bold tracking-widest font-[Montserrat]">IMAGECLEC</span> &copy; {new Date().getFullYear()}
      </div>
      <div className="flex space-x-4">
        <Link to="/privacidad" className="hover:text-blue-300 transition">Privacidad</Link>
        <Link to="/terminos" className="hover:text-blue-300 transition">Términos</Link>
        <Link to="/contacto" className="hover:text-blue-300 transition">Contacto</Link>
      </div>
    </div>
  </footer>
);

export default Footer;