import React from "react";
import { Heart, Building2, UserCheck } from "lucide-react";

export default function Test() {
  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#1A1A1A]">
      

      {/* Hero Section */}
      <section className="bg-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            La nueva forma de conectar <span className="text-[#144A7B]">ecografistas</span> con centros de salud
          </h2>
          <p className="text-lg text-[#4A4A4A] mb-8">
            Optimiza la gestión de exámenes y disponibilidad médica con nuestra plataforma intuitiva.
          </p>
          <button className="bg-[#144A7B] hover:bg-[#2F75B5] text-white text-lg px-6 py-3 rounded-xl transition-colors">
            Comenzar ahora
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-[#F5F7FA]">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-semibold text-center mb-12">¿Qué ofrece IMAGECLEC?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-md p-6 text-center">
              <Heart className="mx-auto h-12 w-12 text-[#144A7B] mb-4" />
              <h4 className="text-xl font-bold mb-2">Gestión eficiente</h4>
              <p className="text-[#4A4A4A]">
                Automatiza la reserva y asignación de exámenes con un sistema confiable.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 text-center">
              <Building2 className="mx-auto h-12 w-12 text-[#144A7B] mb-4" />
              <h4 className="text-xl font-bold mb-2">Para centros de salud</h4>
              <p className="text-[#4A4A4A]">
                Publica disponibilidad de box e integra servicios médicos en minutos.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 text-center">
              <UserCheck className="mx-auto h-12 w-12 text-[#144A7B] mb-4" />
              <h4 className="text-xl font-bold mb-2">Para tecnólogos</h4>
              <p className="text-[#4A4A4A]">
                Encuentra oportunidades según tu especialidad y ubicación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2F75B5] py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-4">¿Listo para transformar la atención médica?</h3>
          <p className="text-lg mb-6">
            Únete a IMAGECLEC y lleva tu gestión de imagenología al siguiente nivel.
          </p>
          <button className="bg-white text-[#144A7B] hover:text-[#2F75B5] px-6 py-3 text-lg rounded-xl transition-colors">
            Crear cuenta gratuita
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-[#144A7B] text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} IMAGECLEC. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
