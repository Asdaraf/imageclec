import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    {/* Hero Section */}
    <section className="text-blue-900 py-16 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 flex flex-col items-start justify-between text-left">
            <h1 className="text-7xl md:text-7xl font-black mb-4">
              Conectando Centros de Salud con Ecografistas
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
              className=""
            />
          </div>
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold mb-2">Para Centros de Salud</h3>
          <p>Encuentra ecografistas calificados para cubrir tus necesidades de personal</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold mb-2">Para Ecografistas</h3>
          <p>Encuentra oportunidades de trabajo en diferentes centros de salud</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold mb-2">Proceso Simple</h3>
          <p>Registro fácil, búsqueda rápida y conexión directa</p>
        </div>
      </div>
    </section>

    {/* Impact Section */}
    <section className="max-w-7xl mx-auto px-4 py-16">
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