import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="max-w-md mx-auto mt-16 mb-8 px-4">
      <div className="bg-white rounded-lg shadow p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h1>
        <form className="space-y-4">
          <input
              type="email"
            placeholder="Correo Electrónico"
              required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          <input
              type="password"
            placeholder="Contraseña"
              required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-400 text-white font-semibold py-3 px-8 rounded transition mt-2"
            >
              Iniciar Sesión
          </button>
        </form>
        <div className="mt-4 text-center text-sm">
                ¿No tienes una cuenta?{' '}
          <Link to="/register" className="text-blue-600 hover:underline font-semibold">
                  Regístrate
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login; 