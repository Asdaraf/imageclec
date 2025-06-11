import React from "react";
import { Send } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#2F75B5] text-white">
      {/* Navbar */}
      <header className="bg-white text-[#144A7B] shadow-md py-4 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mi Plataforma</h1>
        <nav className="space-x-4">
          <a href="#" className="hover:underline">Inicio</a>
          <a href="#" className="hover:underline">Servicios</a>
          <a href="#" className="hover:underline">Contacto</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="py-20 px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Conecta Profesionales y Entidades de Salud</h2>
        <p className="text-lg max-w-xl mx-auto mb-6">
          Una solución digital para la reserva de box por tecnólogos médicos y la gestión eficiente de espacios en centros de salud.
        </p>
        <button className="bg-white text-[#144A7B] hover:bg-gray-100 px-6 py-2 rounded-lg transition-colors">
          Comienza Ahora
        </button>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-6 px-8 py-16">
        <div className="bg-white text-[#144A7B] rounded-lg shadow-md">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Reserva de Box</h3>
            <p>Permite a los tecnólogos médicos encontrar y reservar fácilmente espacios disponibles.</p>
          </div>
        </div>
        <div className="bg-white text-[#144A7B] rounded-lg shadow-md">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Gestión Centralizada</h3>
            <p>Las entidades de salud pueden organizar y publicar su disponibilidad desde un solo lugar.</p>
          </div>
        </div>
        <div className="bg-white text-[#144A7B] rounded-lg shadow-md">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Plataforma Segura</h3>
            <p>Accesos controlados mediante autenticación con roles para garantizar la privacidad.</p>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="bg-[#144A7B] py-16 px-8">
        <h3 className="text-3xl font-bold text-center mb-6">Contáctanos</h3>
        <div className="max-w-xl mx-auto space-y-4">
          <input 
            type="email" 
            placeholder="Tu correo electrónico" 
            className="w-full px-4 py-2 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full bg-white text-[#144A7B] hover:bg-gray-100 px-6 py-2 rounded-lg transition-colors flex items-center justify-center gap-2">
            <Send size={16} /> Enviar
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-[#144A7B] text-center py-6 mt-8">
        <p>© 2025 Mi Plataforma. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}
