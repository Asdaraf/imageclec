import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Building2, UserCheck, ArrowRight, DollarSign, TrendingUp, Users, Calendar, CheckCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SEOHead from '../components/SEOHead';

const Home = () => {
  const handleContactSubmit = (data: any) => {
    console.log('Formulario enviado:', data);
    // Aquí puedes agregar lógica adicional si es necesario
  };

  return (
    <div className="bg-[#F5F7FA] text-[#1A1A1A]">
      <SEOHead 
        title="IMAGECLEC - Conectando Centros de Salud con Ecografistas Independientes"
        description="Implementa Servicios de Ecografía ¡Sin Inversión Inicial! Conectamos centros médicos con ecografistas independientes para aumentar tu cartera de prestaciones."
        keywords="imagenología, ecografistas, centros de salud, servicios médicos, diagnóstico por imagen, ecografía domiciliaria"
        canonical="https://imageclec.com"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2F75B5] to-[#144A7B] py-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2 flex flex-col items-start justify-between text-left space-y-6">
              <div className="space-y-4">
                <h1 className="text-white text-5xl lg:text-7xl font-black leading-tight">
                  Conectando Centros de Salud con <span className="text-[#A7D3F3]">Ecografistas Independientes</span>
                </h1>
                <h2 className="text-xl lg:text-2xl text-white font-medium">
                  Implementa Servicios de Ecografía ¡Sin Inversión Inicial!
                </h2>
                <p className="text-lg text-white/90">
                  Nuestra plataforma ayuda a centros médicos a implementar servicios de ecografía a la vez que les damos empleo a ecografistas independientes que quieran llenar su semana de pacientes cualificados.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  to="/centros-medicos"
                  className="group inline-flex items-center justify-center bg-white hover:bg-gray-50 text-[#144A7B] font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Centros Médicos
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl transform rotate-3"></div>
                <img
                  src="/assets/home-image.png"
                  alt="IMAGECLEC - Conectando Centros de Salud con Ecografistas"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl transform -rotate-3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Qué ofrecemos? Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#144A7B]">¿Qué ofrecemos?</h2>
          <div className="flex flex-col gap-8">
            {/* Primera fila con 3 elementos */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-[#F5F7FA] rounded-2xl p-6 border-l-4 border-[#144A7B]">
                <Users className="h-12 w-12 text-[#144A7B] mb-4" />
                <h3 className="text-xl font-bold mb-3">Conectamos Centros Médicos con Ecografistas Independientes</h3>
                <p className="text-gray-700">
                  Nuestra plataforma ayuda a centros médicos a implementar servicios de ecografía a la vez que les damos empleo a ecografistas independientes que quieran llenar su semana de pacientes cualificados.
                </p>
              </div>

              <div className="bg-[#F5F7FA] rounded-2xl p-6 border-l-4 border-[#144A7B]">
                <TrendingUp className="h-12 w-12 text-[#144A7B] mb-4" />
                <h3 className="text-xl font-bold mb-3">Aumentamos la cartera de prestaciones</h3>
                <p className="text-gray-700">
                  Centros médicos que quieran retener pacientes brindando un servicio integral.
                </p>
              </div>

              <div className="bg-[#F5F7FA] rounded-2xl p-6 border-l-4 border-[#144A7B]">
                <DollarSign className="h-12 w-12 text-[#144A7B] mb-4" />
                <h3 className="text-xl font-bold mb-3">ROI positivo desde el primer día</h3>
                <p className="text-gray-700">
                  ¡Paga lo que usas! Sin costos fijos. No inviertas en equipos ni personal, pagas por paciente atendido.
                </p>
              </div>
            </div>

            {/* Segunda fila con 2 elementos centrados */}
            <div className="flex justify-center">
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
                <div className="bg-[#F5F7FA] rounded-2xl p-6 border-l-4 border-[#144A7B]">
                  <CheckCircle className="h-12 w-12 text-[#144A7B] mb-4" />
                  <h3 className="text-xl font-bold mb-3">Toma de decisiones basada en datos</h3>
                  <p className="text-gray-700">
                    Te ayudamos a crecer tu clínica en la toma de decisiones como generar convenios, agregar especialistas o hacer seguimiento a tus pacientes.
                  </p>
                </div>

                <div className="bg-[#F5F7FA] rounded-2xl p-6 border-l-4 border-[#144A7B]">
                  <Building2 className="h-12 w-12 text-[#144A7B] mb-4" />
                  <h3 className="text-xl font-bold mb-3">¿Tienes atención a domicilio?</h3>
                  <p className="text-gray-700">
                    Integra servicios de ecografía domiciliaria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro Impacto Section */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#144A7B]">Nuestro Impacto</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#144A7B]">
              <div className="text-[#144A7B] text-5xl font-bold mb-2">5</div>
              <div className="text-xl font-semibold mb-2">Centros Médicos Beneficiados</div>
              <div className="text-gray-600">En 7 sucursales: Graneros, Mostazal, San Vicente, Las Cabras, Renca, Lampa y Peñalolén</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#144A7B]">
              <div className="text-[#144A7B] text-5xl font-bold mb-2">1000+</div>
              <div className="text-xl font-semibold mb-2">Estudios Realizados</div>
              <div className="text-gray-600">Durante el primer año</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#144A7B]">
              <div className="text-[#144A7B] text-5xl font-bold mb-2">$4M</div>
              <div className="text-xl font-semibold mb-2">Al año extra a tu centro</div>
              <div className="text-gray-600">Atendiendo solo 50 pacientes al mes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Confían en Nosotros Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#144A7B]">Confían en Nosotros</h2>
          <div className="relative">
            <div className="overflow-hidden">
              <div className="animate-scroll">
                {/* Primera fila de logos */}
                <div className="flex min-w-full justify-around items-center">
                  <div className="w-48 h-32 bg-white p-4 flex items-center justify-center">
                    <img 
                      src="/assets/centros-salud/FaceSalud-logo.webp" 
                      alt="FaceSalud"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="w-48 h-32 bg-white p-4 flex items-center justify-center">
                    <img 
                      src="/assets/centros-salud/mueveSalud-logo.png" 
                      alt="MueveSalud"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="w-48 h-32 bg-white p-4 flex items-center justify-center">
                    <img 
                      src="/assets/centros-salud/rojasalud-logo.png"
                      alt="Rojasalud"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="w-48 h-32 bg-white p-4 flex items-center justify-center">
                    <img 
                      src="/assets/centros-salud/drMiranda-logo.png" 
                      alt="Dr. Miranda"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="w-48 h-32 bg-white p-4 flex items-center justify-center">
                    <img 
                      src="/assets/centros-salud/plusSalud.png" 
                      alt="PlusSalud"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
                {/* Segunda fila de logos (duplicado para el efecto de scroll infinito) */}
                <div className="flex min-w-full justify-around items-center">
                  <div className="w-48 h-32 bg-white p-4 flex items-center justify-center">
                    <img 
                      src="/assets/centros-salud/FaceSalud-logo.webp" 
                      alt="FaceSalud"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="w-48 h-32 bg-white p-4 flex items-center justify-center">
                    <img 
                      src="/assets/centros-salud/mueveSalud-logo.png" 
                      alt="MueveSalud"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="w-48 h-32 bg-white p-4 flex items-center justify-center">
                    <img 
                      src="/assets/centros-salud/rojasalud-logo.png" 
                      alt="Rojasalud"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="w-48 h-32 bg-white p-4 flex items-center justify-center">
                    <img 
                      src="/assets/centros-salud/drMiranda-logo.png" 
                      alt="Dr. Miranda"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="w-48 h-32 bg-white p-4 flex items-center justify-center">
                    <img 
                      src="/assets/centros-salud/plusSalud.png" 
                      alt="PlusSalud"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#2F75B5] to-[#144A7B] py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-4xl font-bold mb-6">¿Listo para transformar tu centro médico?</h3>
          <p className="text-xl mb-8">
            Únete a IMAGECLEC y comienza a generar ingresos extra sin inversión inicial
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-[#144A7B] hover:bg-gray-50 font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contactate con nosotros
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/centros-medicos"
              className="inline-flex items-center justify-center bg-white text-[#144A7B] hover:bg-gray-50 font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Ver más información
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

    {/* Partners Section 
    <section className="bg-gradient-to-r from-[#2F75B5] to-[#144A7B] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-white text-3xl font-bold text-center mb-8">Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          <div className="w-40 h-24 flex items-center justify-center p-4">
            <img 
              src="/assets/partners/aventia.png" 
              alt="Partner 1"
              className="max-w-full max-h-full object-contain transition-all"
            />
          </div>
          <div className="w-40 h-24 flex items-center justify-center p-4">
            <img 
              src="/assets/partners/aws.png" 
              alt="Partner 2"
              className="max-w-full max-h-full object-contain transition-all"
            />
          </div>
          <div className="w-40 h-24 flex items-center justify-center p-4">
            <img 
              src="/assets/partners/cybersalud.svg" 
              alt="Partner 3"
              className="max-w-full max-h-full object-contain transition-all"
            />
          </div>
          <div className="w-40 h-24 flex items-center justify-center p-4">
            <img 
              src="/assets/partners/emprelatam.avif" 
              alt="Partner 4"
              className="max-w-full max-h-full object-contain transition-all"
            />
          </div>
          <div className="w-40 h-24 flex items-center justify-center p-4">
            <img 
              src="/assets/partners/kellu.avif" 
              alt="Partner 4"
              className="max-w-full max-h-full object-contain transition-all"
            />
          </div>
          <div className="w-40 h-24 flex items-center justify-center p-4">
            <img 
              src="/assets/partners/quieroMiExamen.png" 
              alt="Partner 4"
              className="max-w-full max-h-full object-contain transition-all"
            />
          </div>
          <div className="w-40 h-24 flex items-center justify-center p-4">
            <img 
              src="/assets/partners/teleus.png" 
              alt="Partner 4"
              className="max-w-full max-h-full object-contain transition-all"
            />
          </div>
          <div className="w-40 h-24 flex items-center justify-center p-4">
            <img 
              src="/assets/partners/visualmedica.webp" 
              alt="Partner 4"
              className="max-w-full max-h-full object-contain transition-all"
            />
          </div>
        </div>
      </div>
    </section>*/}

      {/* Navigation Section */}
      <section className=" py-16 bg-white">
        <div className='max-w-7xl mx-auto px-6'>
        <h2 className="text-4xl font-bold text-center mb-12 text-[#144A7B]">Enlaces Útiles</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow border-t-4 border-[#144A7B]">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Preguntas Frecuentes</h3>
              <p className="text-gray-600 mb-4">Encuentra respuestas a las preguntas más comunes sobre nuestros servicios</p>
              <Link to="/faq" className="inline-block bg-[#144A7B] text-white px-6 py-3 rounded-xl hover:bg-[#0D3A66] transition-colors">
                Ver FAQ
              </Link>
            </div>
            {/*<div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow border-t-4 border-[#144A7B]">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Registro</h3>
              <p className="text-gray-600 mb-4">Únete a nuestra plataforma como ecografista o centro de salud</p>
              <Link to="/register" className="inline-block bg-[#144A7B] text-white px-6 py-3 rounded-xl hover:bg-[#0D3A66] transition-colors">
                Registrarse
              </Link>
            </div>*/}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow border-t-4 border-[#144A7B]">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Contacto</h3>
              <p className="text-gray-600 mb-4">¿Necesitas ayuda? Nuestro equipo está aquí para asistirte</p>
              <a href="#contact" className="inline-block bg-[#144A7B] text-white px-6 py-3 rounded-xl hover:bg-[#0D3A66] transition-colors">
                Contactar
              </a>
            </div>
          </div>
        </div>
        </div>
        
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#F5F7FA] py-16">
        <ContactForm onSubmit={handleContactSubmit} />
      </section>
    </div>
  );
};

export default Home; 