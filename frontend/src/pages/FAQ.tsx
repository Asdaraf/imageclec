import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

// Variables para tablas HTML
const pacientesTable = `
<table class='w-full border-collapse border border-gray-300 mt-4 mb-4'>
    <thead>
        <tr class='bg-gray-100'>
            <th class='border border-gray-300 px-3 py-2 text-left font-semibold'>Prestaciones realizadas al mes</th>
            <th class='border border-gray-300 px-3 py-2 text-left font-semibold'>Total</th>
            <th class='border border-gray-300 px-3 py-2 text-left font-semibold'>Jornadas (Mañana o Tarde)</th>
            <th class='border border-gray-300 px-3 py-2 text-left font-semibold'>Días a la semana</th>
            <th class='border border-gray-300 px-3 py-2 text-left font-semibold'>Consideraciones</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class='border border-gray-300 px-3 py-2'>50</td>
            <td class='border border-gray-300 px-3 py-2'>$375.000</td>
            <td class='border border-gray-300 px-3 py-2'>2 Jornadas</td>
            <td class='border border-gray-300 px-3 py-2'>1 a 2 Días</td>
            <td rowspan='6' class='border border-gray-300 px-3 py-2'>Valores expresados para la mayoría de prestaciones que rondan los $30.000, puede ir en aumento al realizados Ecografias Abdominal ($42.000) y Doppler ($95.000)</td>
        </tr>
        <tr class='bg-gray-50'>
            <td class='border border-gray-300 px-3 py-2'>100</td>
            <td class='border border-gray-300 px-3 py-2'>$750.000</td>
            <td class='border border-gray-300 px-3 py-2'>3 Jornadas</td>
            <td class='border border-gray-300 px-3 py-2'>2 a 3 Días</td>
        </tr>
        <tr>
            <td class='border border-gray-300 px-3 py-2'>150</td>
            <td class='border border-gray-300 px-3 py-2'>$1.125.000</td>
            <td class='border border-gray-300 px-3 py-2'>4 Jornadas</td>
            <td class='border border-gray-300 px-3 py-2'>2 a 4 Días</td>
        </tr>
        <tr class='bg-gray-50'>
            <td class='border border-gray-300 px-3 py-2'>200</td>
            <td class='border border-gray-300 px-3 py-2'>$1.500.000</td>
            <td class='border border-gray-300 px-3 py-2'>5 Jornadas</td>
            <td class='border border-gray-300 px-3 py-2'>3 a 5 Días</td>
        </tr>
        <tr>
            <td class='border border-gray-300 px-3 py-2'>300</td>
            <td class='border border-gray-300 px-3 py-2'>$2.250.000</td>
            <td class='border border-gray-300 px-3 py-2'>8 Jornadas</td>
            <td class='border border-gray-300 px-3 py-2'>4 a 5 Días</td>
        </tr>
        <tr class='bg-gray-50'>
            <td class='border border-gray-300 px-3 py-2'>400</td>
            <td class='border border-gray-300 px-3 py-2'>$3.000.000</td>
            <td class='border border-gray-300 px-3 py-2'>10 Jornadas</td>
            <td class='border border-gray-300 px-3 py-2'>5 Días</td>
        </tr>
    </tbody>
</table>
`;

const diferenciasTable = `
<table class='w-full border-collapse border border-gray-300 mt-4 mb-4'>
    <thead>
        <tr class='bg-gray-100'>
            <th class='border border-gray-300 px-3 py-2 text-left font-semibold'>Recursos</th>
            <th class='border border-gray-300 px-3 py-2 text-left font-semibold'>Implementación Propia</th>
            <th class='border border-gray-300 px-3 py-2 text-left font-semibold'>Arrendar Equipo</th>
            <th class='border border-gray-300 px-3 py-2 text-left font-semibold'>Imageclec</th>
            <th class='border border-gray-300 px-3 py-2 text-left font-semibold'>Consideraciones</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class='border border-gray-300 px-3 py-2'>Ecógrafo</td>
            <td class='border border-gray-300 px-3 py-2'>$15.000.000<br>Pagando $960.000 mensuales por 18 meses</td>
            <td class='border border-gray-300 px-3 py-2'>$600.000 mensuales</td>
            <td class='border border-gray-300 px-3 py-2'>Incluido por el 75% de la prestación</td>
            <td class='border border-gray-300 px-3 py-2'>Considerar el valor como un promedio, existen equipos desde los 10M hasta los 100M</td>
        </tr>
        <tr class='bg-gray-50'>
            <td class='border border-gray-300 px-3 py-2'>Mantenciones</td>
            <td class='border border-gray-300 px-3 py-2'>$40.000 mensuales</td>
            <td class='border border-gray-300 px-3 py-2'>NO APLICA</td>
            <td class='border border-gray-300 px-3 py-2'>Incluido por el 75% de la prestación</td>
            <td class='border border-gray-300 px-3 py-2'>Mantenciones preventivas se realizan una vez al año, en caso de falla se debe pagar el servicio de reparación</td>
        </tr>
        <tr>
            <td class='border border-gray-300 px-3 py-2'>Tecnólogo Médico</td>
            <td colspan='2' class='border border-gray-300 px-3 py-2'>25% de la prestación</td>
            <td class='border border-gray-300 px-3 py-2'>Incluido por el 75% de la prestación</td>
            <td class='border border-gray-300 px-3 py-2'>De acuerdo al mercado laboral, los TM's que hacen ecografias cobran entre un 20% y 30% de la prestación o sueldo dijo sobre los 2M</td>
        </tr>
        <tr class='bg-gray-50'>
            <td class='border border-gray-300 px-3 py-2'>Radiólogos</td>
            <td colspan='2' class='border border-gray-300 px-3 py-2'>20% de la prestación</td>
            <td class='border border-gray-300 px-3 py-2'>Incluido por el 75% de la prestación</td>
            <td class='border border-gray-300 px-3 py-2'>Generalmente los radiólogos piden un mínimo de ecografias mensuales (50) para comenzar a operar</td>
        </tr>
        <tr>
            <td class='border border-gray-300 px-3 py-2'>PACS</td>
            <td colspan='2' class='border border-gray-300 px-3 py-2'>$100.000 mensuales</td>
            <td class='border border-gray-300 px-3 py-2'>Incluido por el 75% de la prestación</td>
            <td class='border border-gray-300 px-3 py-2'>Generalmente estas empresas mantienen un costo fijo hasta los 200 estudios en promedio, luego cobran alrededor de $500 a $1.000 por esstudio, sin considerar lista de trabajo, portal paciente, etc</td>
        </tr>
        <tr class='bg-gray-50'>
            <td class='border border-gray-300 px-3 py-2'>CRM</td>
            <td colspan='2' class='border border-gray-300 px-3 py-2'>Solo de agenda y atención de pacientes</td>
            <td class='border border-gray-300 px-3 py-2'>Incluido por el 75% de la prestación</td>
            <td class='border border-gray-300 px-3 py-2'>Múltiples herramientas para mejorar la atención y ayudar en la toma de decisiones de la clínica, todo orientado a los datos obtenidos en la toma de ecografías</td>
        </tr>
        <tr>
            <td class='border border-gray-300 px-3 py-2'>Punto de equilibrio</td>
            <td class='border border-gray-300 px-3 py-2'>Alrededor de 70 pacientes para tener ganacia 0</td>
            <td class='border border-gray-300 px-3 py-2'>Alrededor de 45 pacientes para tener ganacia 0</td>
            <td class='border border-gray-300 px-3 py-2'>Alrededor de 50 pacientes para tener ganancia de $400.000</td>
    </tbody>
</table>
`;

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "Requisitos para implementar Servicios de Ecografía en Chile",
      answer: "Para realizar este tipo de estudios primero debes sacar la resolución sanitaria de sala de procedimientos para estudios de ecografías. Para ello debes tener una sala habilitada con área administrativa que contenga silla y escritorio, además de un área clinica lo que conlleva tener basurero, lavamanos, jabón, papel de secado, ecógrafo y el personal que realizará los estudios. Una vez teniendo todo listo, se procede a realizar la inscripción Fonasa y/o Isapre para la emisión de bonos.",
      category: "General"
    },
    {
      id: 2,
      question: "Personal puede realizar e informar estudios de ecografía de acuerdo la ley chilena",
      answer: "Médicos Radiólogos: Son los principales especialistas del área, sin embargo, ante la falta de especialistas muchos prefieren delegar la función de realizar el estudio a Tecnólogos Médicos de Imagenología, aunque igualmente deben ser validados por el Médico.\nDe acuerdo al Anexo N° 2. Limitaciones del Libro V del Código Sanitario en el proceso de atención.\nTecnólogos Médicos de Imagenología: Pueden realizar ecografías abdominales, osteomusculares, renales entre otros. Solamente bajo indicación médica de hipótesis diagnósticas de patologías, elaboración de preinformes validados por un Médico Cirujano con especialidad en Radiólogo.\nMatronas: Pueden indicar y ejecutar ecografías en el embarazo, control de DIU y seguimiento folicular.",
      category: "Ecografistas"
    },
    {
      id: 3,
      question: "Qué es un PACS (Picture Archiving and Communication System)",
      answer: "Es una plataforma que sirve para el almacenamiento seguro y confidencial de los estudios de los pacientes, además de poder realizar un envío digital seguro de estos como lo es a través del portal paciente. Igualmente tiene otras herramientas como la conexión a la agenda, generar listas de trabajo y reportes. Las herramientas dependen del proveedor.",
      category: "Citas"
    },
    {
      id: 4,
      question: "Qué es DICOM (Digital Imaging and Communications in Medicine)",
      answer: "Es un formato de imagen médica digital lo que facilita el almacenamiento de los datos del paciente, la imagen y la adquisición, además de facilitar la interoperabilidad, a diferencia del JPG el formato DICOM (.DCM) mantiene la calidad de imagen, lo que permite al médico tratante poder ver las imágenes a nivel de detalle.\nSe complementa con el PACS, debido a que este proporciona un software que gestiona las imágenes DICOM",
      category: "Servicios"
    },
    {
      id: 5,
      question: "Tipos de ecógrafos que existen",
      answer: "Existen 2 tipos de ecógrafos con los cuales puedes realizar múltiples estudios, dependiendo de los transductores y software de cada uno.\nEcógrafos estacionarios: Son equipos de gran tamaño que generalmente se dejan en un solo lugar y no se mueven de ahí, igualmente tienes ruedas con el que se puede desplazar hacia otro box.\nEcógrafos portátiles: utilizados comúnmente cuando se deben trasladar de un lugar a otro, usados principalmente para operativos en terreno, domicilio u ofrecer servicios en distintos centros.",
      category: "Seguridad"
    },
    {
      id: 6,
      question: "Marcas de ecógrafos vendidos en Chile",
      answer: "Existen una serie de marcas disponibles en Chile, las cuales tienen distintos orígenes de fabricación, entre ellas se encuentran.\nEquipos chinos: Minday, Chison, Sonoscape, Vinno, Edan o Lanmage.\nMarcas clásicas y reconocidas: Siemens, Toshiba, General Electric o Phillips",
      category: "Facturación"
    },
    {
      id: 7,
      question: "Transductores y que exámenes se pueden hacer dependiendo del transductor",
      answer: "Actualmente existen varios tipos de transductores pero los más usados son: lineal, convexo, sectoriales e intracavitarios.\nLineal: Son de alta frecuencia y principalmente usados para evaluar zonas más superficiales por ejemplo estudios de mama, musculoesqueléticos, partes blandas, tiroides, Doppler de extremidades o de cuello.\nConvexo: Son de baja frecuencia lo cual son útiles para evaluar estructuras que están en mayor profundidad por ejemplo estudios de abdomen, riñones, vejiga próstata o útero, algunas veces son usados para estructuras más superficiales pero que el transductor lineal no puede abarcar.\nSectorial: Son de baja frecuencia, usados principalmente para evaluar estructuras de dificil acceso debido a que están rodeados de huesos, por ejemplo los estudios de corazón, pulmón o cerebral.\nIntracavitarios: Son usados para ver estructuras que se encuentran dentro de una cavidad, generalmente se usan para tener una mejor definición de imagen que el convexo en determinados estudios como lo son los estudios ginecológicos, intrarectal o transesofágico",
      category: "Citas"
    },
    {
      id: 8,
      question: "¿Cuanto puedes ganar si atiendes 50, 100, 150, 200, 300 o 400 pacientes al mes?",
      answer: `${pacientesTable}`,
      category: "Centros de Salud"
    },
    {
      id: 9,
      question: "Comprar ecógrafos vs arrendar vs Imageclec (Económicamente)",
      answer: `${diferenciasTable}`,
      category: "Costos"
    },
    {
      id: 10,
      question: "¿Cómo puedo contactar soporte técnico?",
      answer: "Puedes contactarnos a través del formulario de contacto en nuestra página web, por email a soporte@imageclec.com o llamando al +34 912 345 678.",
      category: "Soporte"
    }
  ];

  const categories = Array.from(new Set(faqData.map(item => item.category)));
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQ = selectedCategory === 'Todos' 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Preguntas Frecuentes
          </h1>
          <p className="text-xl text-gray-600">
            Encuentra respuestas a las preguntas más comunes sobre IMAGECLEC
          </p>
        </div>

        {/* Filtros por categoría */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedCategory('Todos')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === 'Todos'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              Todos
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Lista de FAQ */}
        <div className="space-y-4">
          {filteredFAQ.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {item.question}
                  </h3>
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                    {item.category}
                  </span>
                </div>
                <div className="ml-4">
                  {openItems.includes(item.id) ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </button>
              
              {openItems.includes(item.id) && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-200 pt-4">
                    <div 
                      className="text-gray-700 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Sección de contacto */}
        <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ¿No encontraste lo que buscabas?
          </h2>
          <p className="text-gray-600 mb-6">
            Nuestro equipo de soporte está aquí para ayudarte. No dudes en contactarnos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contactar Soporte
            </a>
            <a
              href="mailto:imageclec.cl@gmail.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors"
            >
              Enviar Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 