import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Building2, UserCheck } from 'lucide-react';

const Home = () => (
  <div className="bg-[#F5F7FA] text-[#1A1A1A]">
      {/* Hero Section */}
    <section className="bg-white py-16 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 flex flex-col items-start justify-between text-left">
            <h1 className="text-7xl md:text-7xl font-black mb-4">
              Conectando Centros de Salud con <span className="text-[#144A7B]">Ecografistas</span>
            </h1>
            <h2 className="text-xl md:text-2xl mb-6">
            La plataforma que facilita la conexión entre profesionales y centros médicos
            </h2>
            <Link
            to="/register"
              className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-semibold py-3 px-8 rounded transition mt-4"
          >
            Comenzar Ahora
            </Link>
          </div>
          <div className="col-span-1">
            <img
              src="/assets/home-image.png"
              alt="Home"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
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
              Optimiza la gestión de exámenes y disponibilidad médica de manera simple.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 text-center">
              <Building2 className="mx-auto h-12 w-12 text-[#144A7B] mb-4" />
              <h4 className="text-xl font-bold mb-2">Centros de salud</h4>
              <p className="text-[#4A4A4A]">
                Publica disponibilidad de box e integra servicios médicos en minutos.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 text-center">
              <UserCheck className="mx-auto h-12 w-12 text-[#144A7B] mb-4" />
              <h4 className="text-xl font-bold mb-2">Ecografistas</h4>
              <p className="text-[#4A4A4A]">
                Encuentra oportunidades según tu especialidad y ubicación.
              </p>
            </div>
          </div>
        </div>
      </section>

    {/* Impact Section */}
    <section className="px-4 py-16 bg-white">
      <div className='max-w-7xl mx-auto'>
      <h2 className="text-3xl font-bold text-center mb-10">Nuestro Impacto</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-white rounded-lg shadow p-8">
          <div className="text-blue-900 text-4xl font-bold mb-2">150+</div>
          <div className="text-lg font-semibold mb-1">Tecnólogos Activos</div>
          <div className="text-gray-500">Profesionales calificados brindando servicios de calidad</div>
        </div>
        <div className="bg-white rounded-lg shadow p-8">
          <div className="text-blue-900 text-4xl font-bold mb-2">50+</div>
          <div className="text-lg font-semibold mb-1">Centros Médicos</div>
          <div className="text-gray-500">Instituciones de salud confían en nuestra red</div>
        </div>
        <div className="bg-white rounded-lg shadow p-8">
          <div className="text-blue-900 text-4xl font-bold mb-2">5000+</div>
          <div className="text-lg font-semibold mb-1">Exámenes Realizados</div>
          <div className="text-gray-500">Diagnósticos precisos entregados a pacientes</div>
        </div>
      </div>
      </div>
      
    </section>

    {/* Partners Section */}
    <section className="px-4 py-16 bg-white">
      <div className='max-w-7xl mx-auto'>
        <h2 className="text-3xl font-bold text-center mb-8">Nuestros Socios</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div className="animate-scroll">
              {/* Primera fila de logos */}
              <div className="flex min-w-full justify-around items-center">
                <div className="w-48 h-32 bg-white p-4 flex items-center justify-center">
                  <img 
                    src="/assets/logo.png" 
                    alt="Hospital 1"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="w-48 h-32 bg-white p-4 flex items-center justify-center">
                  <img 
                    src="/assets/logo.png" 
                    alt="Hospital 2"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="w-48 h-32 bg-white p-4 flex items-center justify-center">
                  <img 
                    src="/assets/logo.png" 
                    alt="Hospital 3"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="w-48 h-32 bg-white p-4 flex items-center justify-center">
                  <img 
                    src="/assets/logo.png" 
                    alt="Hospital 4"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
              {/* Segunda fila de logos (duplicado para el efecto de scroll infinito) */}
              <div className="flex min-w-full justify-around items-center">
                <div className="w-48 h-32 bg-white p-4 flex items-center justify-center">
                  <img 
                    src="/assets/logo.png" 
                    alt="Hospital 1"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="w-48 h-32 bg-white p-4 flex items-center justify-center">
                  <img 
                    src="/assets/logo.png" 
                    alt="Hospital 2"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="w-48 h-32 bg-white p-4 flex items-center justify-center">
                  <img 
                    src="/assets/logo.png" 
                    alt="Hospital 3"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="w-48 h-32 bg-white p-4 flex items-center justify-center">
                  <img 
                    src="/assets/logo.png" 
                    alt="Hospital 4"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            </div>
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

    {/* Contact Section */}
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-4">Contáctanos</h2>
      <p className="text-lg text-center text-gray-600 mb-10">Estamos aquí para ayudarte. ¡Ponte en contacto con nosotros!</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow p-6 text-center flex flex-col items-center">
          <span className="text-blue-900 text-4xl mb-2">📧</span>
          <div className="font-semibold mb-1">Correo Electrónico</div>
          <div className="text-gray-500">contacto@imageclec.com</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center flex flex-col items-center">
          <span className="text-blue-900 text-4xl mb-2">📞</span>
          <div className="font-semibold mb-1">Teléfono</div>
          <div className="text-gray-500">+34 912 345 678</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center flex flex-col items-center">
          <span className="text-blue-900 text-4xl mb-2">📍</span>
          <div className="font-semibold mb-1">Dirección</div>
          <div className="text-gray-500">Calle Principal 123, Madrid</div>
        </div>
      </div>
      <form className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <input type="text" placeholder="Nombre" required className="col-span-1 md:col-span-2 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <input type="email" placeholder="Correo electrónico" required className="col-span-1 md:col-span-2 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <input type="text" placeholder="Asunto" required className="col-span-1 md:col-span-2 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <textarea placeholder="Mensaje" required rows={4} className="col-span-1 md:col-span-2 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <button type="submit" className="col-span-1 md:col-span-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold py-3 px-8 rounded transition mt-2">Enviar Mensaje</button>
      </form>
    </section>

    {/* Partners Section */}
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Nuestras Alianzas</h2>
        <p className="text-lg text-center text-gray-600 mb-12">
          Orgullosos de colaborar con empresas líderes en el sector salud.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          <div className="w-40 h-24 bg-white flex items-center justify-center p-4">
            <img 
              src="/assets/partners/partner1.png" 
              alt="Partner 1"
              className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all"
            />
          </div>
          <div className="w-40 h-24 bg-white flex items-center justify-center p-4">
            <img 
              src="/assets/partners/partner2.png" 
              alt="Partner 2"
              className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all"
            />
          </div>
          <div className="w-40 h-24 bg-white flex items-center justify-center p-4">
            <img 
              src="/assets/partners/partner3.png" 
              alt="Partner 3"
              className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all"
            />
          </div>
          <div className="w-40 h-24 bg-white flex items-center justify-center p-4">
            <img 
              src="/assets/partners/partner4.png" 
              alt="Partner 4"
              className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Navigation Section */}
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Navegación</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-4">
        <div>
          <h3 className="text-lg font-bold mb-2">Servicios</h3>
          <ul className="space-y-1">
            <li><Link to="/radiologia" className="text-blue-900 hover:underline">Radiología</Link></li>
            <li><Link to="/ecografia" className="text-blue-900 hover:underline">Ecografía</Link></li>
            <li><Link to="/resonancia" className="text-blue-900 hover:underline">Resonancia Magnética</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Pacientes</h3>
          <ul className="space-y-1">
            <li><Link to="/citas" className="text-blue-900 hover:underline">Reservar Cita</Link></li>
            <li><Link to="/preparacion" className="text-blue-900 hover:underline">Preparación Exámenes</Link></li>
            <li><Link to="/resultados" className="text-blue-900 hover:underline">Resultados Online</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Nosotros</h3>
          <ul className="space-y-1">
            <li><Link to="/equipo" className="text-blue-900 hover:underline">Nuestro Equipo</Link></li>
            <li><Link to="/tecnologia" className="text-blue-900 hover:underline">Tecnología</Link></li>
            <li><Link to="/instalaciones" className="text-blue-900 hover:underline">Instalaciones</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Legal</h3>
          <ul className="space-y-1">
            <li><Link to="/privacidad" className="text-blue-900 hover:underline">Política de Privacidad</Link></li>
            <li><Link to="/terminos" className="text-blue-900 hover:underline">Términos y Condiciones</Link></li>
            <li><Link to="/cookies" className="text-blue-900 hover:underline">Política de Cookies</Link></li>
          </ul>
        </div>
      </div>
    </section>
  </div>
);

export default Home; 