import React from "react";
import { Heart, Building2, UserCheck, ArrowRight, Calendar, Clock, Users, CheckCircle2, Star, Briefcase, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import MeetingScheduler from "../components/MeetingScheduler";

export default function Ecografistas() {
  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#1A1A1A]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Únete a la red de <span className="text-[#144A7B]">ecografistas</span> más grande de España
              </h1>
              <p className="text-xl text-gray-600">
                Encuentra oportunidades laborales, gestiona tu agenda y crece profesionalmente con IMAGECLEC.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/register" 
                  className="group inline-flex items-center justify-center bg-[#144A7B] hover:bg-[#0D3A66] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Únete ahora
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/contacto" 
                  className="group inline-flex items-center justify-center bg-white hover:bg-gray-50 text-[#144A7B] font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-[#144A7B]"
                >
                  Más información
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl transform rotate-3"></div>
              <img
                src="/assets/ecografista.png"
                alt="Ecografista"
                className="relative w-full h-full object-cover rounded-2xl shadow-2xl transform -rotate-3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">¿Por qué unirte a IMAGECLEC?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#F5F7FA] rounded-2xl p-8 shadow-lg">
              <Briefcase className="h-12 w-12 text-[#144A7B] mb-4" />
              <h3 className="text-xl font-bold mb-2">Más oportunidades</h3>
              <p className="text-gray-600">
                Accede a una amplia red de centros médicos y encuentra el trabajo que mejor se adapte a tu perfil.
        </p>
            </div>
            <div className="bg-[#F5F7FA] rounded-2xl p-8 shadow-lg">
              <Calendar className="h-12 w-12 text-[#144A7B] mb-4" />
              <h3 className="text-xl font-bold mb-2">Gestiona tu agenda</h3>
              <p className="text-gray-600">
                Organiza tus horarios y compromisos de manera eficiente desde una única plataforma.
              </p>
            </div>
            <div className="bg-[#F5F7FA] rounded-2xl p-8 shadow-lg">
              <Star className="h-12 w-12 text-[#144A7B] mb-4" />
              <h3 className="text-xl font-bold mb-2">Desarrollo profesional</h3>
              <p className="text-gray-600">
                Mejora tu visibilidad y construye una reputación sólida en el sector de la salud.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">¿Cómo funciona?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-[#144A7B] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">1</div>
              <h3 className="text-xl font-bold mb-4">Crea tu perfil</h3>
              <p className="text-gray-600">
                Regístrate y completa tu perfil profesional con tu experiencia y especialidades.
              </p>
            </div>
            <div className="relative">
              <div className="bg-[#144A7B] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">2</div>
              <h3 className="text-xl font-bold mb-4">Encuentra oportunidades</h3>
              <p className="text-gray-600">
                Explora y solicita las oportunidades que mejor se adapten a tu perfil y ubicación.
              </p>
            </div>
            <div className="relative">
              <div className="bg-[#144A7B] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">3</div>
              <h3 className="text-xl font-bold mb-4">Comienza a trabajar</h3>
              <p className="text-gray-600">
                Gestiona tus compromisos y crece profesionalmente con nuestra red.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="text-4xl font-bold text-[#144A7B]">150+</div>
              <div className="text-xl font-semibold">Ecografistas activos</div>
              <div className="text-gray-600">Formando parte de nuestra red</div>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold text-[#144A7B]">50+</div>
              <div className="text-xl font-semibold">Centros médicos</div>
              <div className="text-gray-600">Ofreciendo oportunidades</div>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold text-[#144A7B]">5000+</div>
              <div className="text-xl font-semibold">Exámenes realizados</div>
              <div className="text-gray-600">A través de nuestra plataforma</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#144A7B] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para impulsar tu carrera profesional?</h2>
          <p className="text-xl mb-8">
            Únete a IMAGECLEC y forma parte de la red de ecografistas más grande de España.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/register" 
              className="inline-flex items-center justify-center bg-white text-[#144A7B] hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Registrarse ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/contacto" 
              className="inline-flex items-center justify-center bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 border-2 border-white"
            >
              Más información
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Meeting Scheduler Section */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6">
          <MeetingScheduler
            title="Agenda una reunión con nuestro equipo"
            description="Selecciona una fecha y hora que te resulte conveniente para conocer más sobre cómo IMAGECLEC puede ayudarte a impulsar tu carrera profesional."
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">¿Tienes preguntas?</h2>
              <p className="text-xl text-gray-600">
                Nuestro equipo está aquí para ayudarte a comenzar tu camino con IMAGECLEC.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#144A7B] text-white rounded-full p-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Llámanos</h3>
                    <p className="text-gray-600">+34 912 345 678</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-[#144A7B] text-white rounded-full p-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Escríbenos</h3>
                    <p className="text-gray-600">contacto@imageclec.com</p>
                  </div>
                </div>
              </div>
            </div>
            <form className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre completo</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#144A7B] focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Correo electrónico</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#144A7B] focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#144A7B] focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#144A7B] focus:border-transparent"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#144A7B] text-white font-semibold py-4 px-8 rounded-xl hover:bg-[#0D3A66] transition-colors">
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
