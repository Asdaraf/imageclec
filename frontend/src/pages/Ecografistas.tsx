import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, DollarSign, Users, MapPin, Clock, CheckCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const Ecografistas = () => {
  return (
    <div className="bg-[#F5F7FA] text-[#1A1A1A]">
      <SEOHead 
        title="Ecografistas - IMAGECLEC"
        description="Únete como ecografista independiente a IMAGECLEC. Llena tu semana con pacientes cualificados y maximiza tus ingresos."
        keywords="ecografistas independientes, trabajo ecografía, pacientes cualificados, imagenología, ecografistas freelance"
        canonical="https://imageclec.com/ecografistas"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2F75B5] to-[#144A7B] py-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center space-y-6">
            <h1 className="text-5xl lg:text-7xl font-black leading-tight text-white">
              Ecografistas <span className="text-[#A7D3F3]">Independientes</span>
            </h1>
            <h2 className="text-xl lg:text-2xl text-white font-medium">
              Llena tu semana con pacientes cualificados
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Únete a nuestra plataforma y conecta con centros médicos que necesitan profesionales de imagenología. 
              Maximiza tus ingresos trabajando de forma independiente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link 
                to="/register"
                className="group inline-flex items-center justify-center bg-white hover:bg-gray-50 text-[#144A7B] font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Registrarse como Ecografista
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact"
                className="group inline-flex items-center justify-center bg-transparent text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-xl transition-all duration-300 border-2 border-white"
              >
                Más Información
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#144A7B]">¿Por qué unirte a IMAGECLEC?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#F5F7FA] rounded-2xl p-6 border-l-4 border-[#144A7B]">
              <Users className="h-12 w-12 text-[#144A7B] mb-4" />
              <h3 className="text-xl font-bold mb-3">Pacientes Cualificados</h3>
              <p className="text-gray-700">
                Conecta con centros médicos que ya tienen pacientes esperando por tus servicios de ecografía.
              </p>
            </div>

            <div className="bg-[#F5F7FA] rounded-2xl p-6 border-l-4 border-[#144A7B]">
              <Calendar className="h-12 w-12 text-[#144A7B] mb-4" />
              <h3 className="text-xl font-bold mb-3">Flexibilidad Total</h3>
              <p className="text-gray-700">
                Define tu propia agenda y horarios. Trabaja cuando y donde quieras.
              </p>
            </div>

            <div className="bg-[#F5F7FA] rounded-2xl p-6 border-l-4 border-[#144A7B]">
              <DollarSign className="h-12 w-12 text-[#144A7B] mb-4" />
              <h3 className="text-xl font-bold mb-3">Mejores Ingresos</h3>
              <p className="text-gray-700">
                Maximiza tus ganancias trabajando de forma independiente sin intermediarios.
              </p>
            </div>

            <div className="bg-[#F5F7FA] rounded-2xl p-6 border-l-4 border-[#144A7B]">
              <MapPin className="h-12 w-12 text-[#144A7B] mb-4" />
              <h3 className="text-xl font-bold mb-3">Múltiples Ubicaciones</h3>
              <p className="text-gray-700">
                Trabaja en diferentes centros médicos según tu disponibilidad y preferencias.
              </p>
            </div>

            <div className="bg-[#F5F7FA] rounded-2xl p-6 border-l-4 border-[#144A7B]">
              <Clock className="h-12 w-12 text-[#144A7B] mb-4" />
              <h3 className="text-xl font-bold mb-3">Sin Horarios Fijos</h3>
              <p className="text-gray-700">
                Acepta trabajos según tu disponibilidad y compromisos personales.
              </p>
            </div>

            <div className="bg-[#F5F7FA] rounded-2xl p-6 border-l-4 border-[#144A7B]">
              <CheckCircle className="h-12 w-12 text-[#144A7B] mb-4" />
              <h3 className="text-xl font-bold mb-3">Proceso Simple</h3>
              <p className="text-gray-700">
                Registro rápido y gestión automatizada de pagos y horarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo Funciona Section */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#144A7B]">¿Cómo funciona?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="bg-[#144A7B] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-bold mb-4">Regístrate</h3>
              <p className="text-gray-700">
                Completa tu perfil profesional con tu especialidad, experiencia y disponibilidad.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="bg-[#144A7B] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-xl font-bold mb-4">Recibe Ofertas</h3>
              <p className="text-gray-700">
                Los centros médicos te contactarán con oportunidades que coincidan con tu perfil.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="bg-[#144A7B] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl font-bold mb-4">Trabaja y Gana</h3>
              <p className="text-gray-700">
                Acepta los trabajos que prefieras y recibe tu pago de forma segura.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Especialidades Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#144A7B]">Especialidades que buscamos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#F5F7FA] rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Ecografía Abdominal</h3>
              <p className="text-gray-600 text-sm">Hígado, riñones, páncreas, etc.</p>
            </div>
            <div className="bg-[#F5F7FA] rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Ecografía Obstétrica</h3>
              <p className="text-gray-600 text-sm">Control prenatal y ginecológico</p>
            </div>
            <div className="bg-[#F5F7FA] rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Ecografía Cardíaca</h3>
              <p className="text-gray-600 text-sm">Eco cardiograma y doppler</p>
            </div>
            <div className="bg-[#F5F7FA] rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Ecografía Musculoesquelética</h3>
              <p className="text-gray-600 text-sm">Tendones, músculos y articulaciones</p>
            </div>
            <div className="bg-[#F5F7FA] rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Ecografía Vascular</h3>
              <p className="text-gray-600 text-sm">Arterias y venas</p>
            </div>
            <div className="bg-[#F5F7FA] rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Ecografía Tiroidea</h3>
              <p className="text-gray-600 text-sm">Glándula tiroides</p>
            </div>
            <div className="bg-[#F5F7FA] rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Ecografía Mamaria</h3>
              <p className="text-gray-600 text-sm">Mamas y tejido mamario</p>
            </div>
            <div className="bg-[#F5F7FA] rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Ecografía Pediátrica</h3>
              <p className="text-gray-600 text-sm">Especializada en niños</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#2F75B5] to-[#144A7B] py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-4xl font-bold mb-6">¿Listo para maximizar tus ingresos?</h3>
          <p className="text-xl mb-8">
            Únete a IMAGECLEC y comienza a trabajar con centros médicos de calidad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/register"
              className="inline-flex items-center justify-center bg-white text-[#144A7B] hover:bg-gray-50 font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Registrarse Ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center bg-transparent text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-xl transition-all duration-300 border-2 border-white"
            >
              Hablar con un Asesor
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#144A7B]">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            <div className="bg-[#F5F7FA] rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">¿Necesito tener mi propio equipo?</h3>
              <p className="text-gray-700">No, los centros médicos proporcionan el equipo necesario para realizar los estudios.</p>
            </div>
            <div className="bg-[#F5F7FA] rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">¿Cómo se manejan los pagos?</h3>
              <p className="text-gray-700">Los pagos se procesan de forma segura a través de nuestra plataforma, sin intermediarios.</p>
            </div>
            <div className="bg-[#F5F7FA] rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">¿Puedo elegir mis horarios?</h3>
              <p className="text-gray-700">Sí, tienes total flexibilidad para aceptar o rechazar trabajos según tu disponibilidad.</p>
            </div>
            <div className="bg-[#F5F7FA] rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">¿Qué documentación necesito?</h3>
              <p className="text-gray-700">Título profesional, certificados de especialización y documentos de identidad.</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link 
              to="/faq"
              className="inline-block bg-[#144A7B] text-white px-6 py-3 rounded-xl hover:bg-[#0D3A66] transition-colors"
            >
              Ver más preguntas frecuentes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ecografistas; 