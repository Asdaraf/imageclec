import React from "react";
import { Send, CheckCircle, Users, Shield, BarChart3, TrendingUp, Calendar, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import Contact from "./Contact"

export default function CentrosMedicosPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <SEOHead 
        title="Centros de Salud - IMAGECLEC | Implementa Servicios de Ecografías"
        description="¡Evita la fuga de pacientes por tener que derivar estudios! Implementa servicios de ecografías con IMAGECLEC. Ecógrafos portátiles, ecografistas cualificados e informes médicos para tu centro de salud."
        keywords="implementación servicios de ecografía, imagen médica, ecografia, servicios de ecografia, ecografo, ecografo portatil, diagnostico medico, centros de salud, ecografías portátiles, PACS, informes radiológicos"
        canonical="https://imageclec.com/centros-medicos"
      />

      

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-r from-[#2F75B5] to-[#144A7B] text-white">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
          ¡Evita la fuga de pacientes por tener que derivar estudios!
        </h2>
        <h3 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
          Implementa servicios de <span className="text-yellow-300">Ecografías con IMAGECLEC</span>
        </h3>
        <p className="text-lg sm:text-xl max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed">
          En IMAGECLEC, te ofrecemos una solución completa para que puedas realizar ecografías directamente en tu centro de salud, 
          mejorando la atención a tus pacientes, evitando la fuga de los mismos y aumentando la rentabilidad de tu clínica.
        </p>
        <button className="bg-yellow-400 text-[#144A7B] hover:bg-yellow-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors font-semibold text-base sm:text-lg flex items-center mx-auto gap-2">
          <a href="/contact">
            Agenda una reunión con nosotros
          </a>
        </button>
      </section>

      {/* Beneficios Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#144A7B]">
            Beneficios para tu Centro de Salud
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Ecografistas Cualificados */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-3 sm:mb-4">
                <Users className="text-[#2F75B5] mr-2 sm:mr-3" size={20} />
                <h4 className="text-lg sm:text-xl font-semibold text-[#144A7B]">Ecografistas Cualificados</h4>
              </div>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                Conectamos con ecografistas altamente capacitados para atender a tus usuarios, asegurando un servicio de calidad.
              </p>
              <Link to="/faq" className="text-[#2F75B5] hover:underline font-medium text-sm sm:text-base">
                Ver más detalles →
              </Link>
            </div>

            {/* Equipamiento e Informes */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-3 sm:mb-4">
                <CheckCircle className="text-green-600 mr-2 sm:mr-3" size={20} />
                <h4 className="text-lg sm:text-xl font-semibold text-[#144A7B]">Equipamiento e Informes Médicos</h4>
              </div>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                Te proporcionamos el ecógrafo y los informes emitidos por Médicos Radiólogos.
              </p>
              <Link to="/faq" className="text-green-600 hover:underline font-medium text-sm sm:text-base">
                Ver más detalles →
              </Link>
            </div>

            {/* Almacenamiento Seguro */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-3 sm:mb-4">
                <Shield className="text-purple-600 mr-2 sm:mr-3" size={20} />
                <h4 className="text-lg sm:text-xl font-semibold text-[#144A7B]">Almacenamiento Seguro</h4>
              </div>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                Implementamos plataforma PACS para el almacenamiento de estudios por 5 años y envío en formato DICOM.
              </p>
              <Link to="/faq" className="text-purple-600 hover:underline font-medium text-sm sm:text-base">
                Ver más detalles →
              </Link>
            </div>

            {/* Reportes Mensuales */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-3 sm:mb-4">
                <BarChart3 className="text-orange-600 mr-2 sm:mr-3" size={20} />
                <h4 className="text-lg sm:text-xl font-semibold text-[#144A7B]">Reportes Mensuales Personalizados</h4>
              </div>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                Recibirás reportes mensuales con recomendaciones clave para el crecimiento continuo de tu clínica.
              </p>
              <Link to="/faq" className="text-orange-600 hover:underline font-medium text-sm sm:text-base">
                Ver más detalles →
              </Link>
            </div>

            {/* ROI Positivo */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-3 sm:mb-4">
                <TrendingUp className="text-red-600 mr-2 sm:mr-3" size={20} />
                <h4 className="text-lg sm:text-xl font-semibold text-[#144A7B]">ROI Positivo desde el Primer Día</h4>
              </div>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                Nuestra modalidad de cobro es por atenciones realizadas, garantizando un Retorno de Inversión positivo.
              </p>
              <Link to="/faq" className="text-red-600 hover:underline font-medium text-sm sm:text-base">
                Ver más detalles →
              </Link>
            </div>

            {/* Aliados en Diagnóstico */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-3 sm:mb-4">
                <MessageSquare className="text-teal-600 mr-2 sm:mr-3" size={20} />
                <h4 className="text-lg sm:text-xl font-semibold text-[#144A7B]">Aliados en el Diagnóstico por Imagen</h4>
              </div>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                Ofrecemos reuniones clínicas con tu equipo médico, actuando como tu aliado estratégico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#144A7B] to-[#2F75B5] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            ¡No esperes más para llevar tu clínica al siguiente nivel!
          </h3>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 leading-relaxed">
            Con IMAGECLEC, brindarás un servicio más completo a tus pacientes y verás un crecimiento significativo en tu centro de salud.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/contact" className="bg-white text-[#144A7B] hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors font-semibold text-base sm:text-lg flex items-center justify-center gap-2">
              <Send size={18} />
              Contáctanos
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
