import React from "react";
import { Heart, Building2, UserCheck, Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "../components/ContactForm";
import SEOHead from "../components/SEOHead";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#1A1A1A]">
      <SEOHead 
        title="Contacto - IMAGECLEC"
        description="Contáctanos para implementar servicios de ecografía en tu centro médico. Nuestro equipo está listo para ayudarte."
        keywords="contacto IMAGECLEC, implementación ecografía, servicios médicos, contacto centros de salud"
        canonical="https://imageclec.com/contact"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2F75B5] to-[#144A7B] py-12 sm:py-16 lg:py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Contáctanos
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8">
            ¿Listo para transformar tu centro médico? Nuestro equipo está aquí para ayudarte a implementar servicios de ecografía de manera eficiente y rentable.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            {/*<div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#144A7B]">
                Envíanos un mensaje
              </h2>
              <ContactForm />
            </div>*/}

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#144A7B]">
                  Información de contacto
                </h2>
                <p className="text-gray-700 mb-6 text-sm sm:text-base">
                  Nuestro equipo está disponible para responder tus consultas y ayudarte a implementar servicios de ecografía en tu centro médico.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-6 w-6 text-[#144A7B] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600 text-sm sm:text-base">imageclec.cl@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-6 w-6 text-[#144A7B] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Teléfono</h3>
                    <p className="text-gray-600 text-sm sm:text-base">+56 9 9654 9634</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-[#144A7B] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Ubicación</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Santiago, Chile</p>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-[#F5F7FA] rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-[#144A7B]">
                  ¿Por qué elegir IMAGECLEC?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Heart className="h-5 w-5 text-[#144A7B]" />
                    <span className="text-sm sm:text-base text-gray-700">Sin inversión inicial</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building2 className="h-5 w-5 text-[#144A7B]" />
                    <span className="text-sm sm:text-base text-gray-700">Implementación rápida</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <UserCheck className="h-5 w-5 text-[#144A7B]" />
                    <span className="text-sm sm:text-base text-gray-700">Ecografistas cualificados</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
