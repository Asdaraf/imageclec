import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto mt-8 mb-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Panel de Control</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Tarjeta Perfil */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col">
          <h2 className="text-xl font-semibold mb-2">Perfil</h2>
          <p className="text-gray-600 mb-4">
                  Aquí podrás ver y editar tu información personal
          </p>
          <Link
            to="/perfil"
            className="mt-auto inline-block bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-6 rounded transition"
          >
                  Ver Perfil
          </Link>
        </div>
        {/* Tarjeta Oportunidades */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col">
          <h2 className="text-xl font-semibold mb-2">Oportunidades</h2>
          <p className="text-gray-600 mb-4">
                  Explora las oportunidades disponibles
          </p>
          <Link
            to="/oportunidades"
            className="mt-auto inline-block bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-6 rounded transition"
          >
                  Ver Oportunidades
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 