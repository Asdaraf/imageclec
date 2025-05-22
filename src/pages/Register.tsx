import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [userType, setUserType] = useState('ecografista');

  return (
    <div className="max-w-md mx-auto mt-16 mb-8 px-4">
      <div className="bg-white rounded-lg shadow p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Registrarse</h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Nombre Completo"
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
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
          <input
            type="password"
            placeholder="Confirmar Contraseña"
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div>
            <div className="text-sm font-semibold mb-2 mt-4">Tipo de Usuario</div>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="userType"
                  value="ecografista"
                  checked={userType === 'ecografista'}
                  onChange={() => setUserType('ecografista')}
                  className="accent-blue-500"
                />
                <span className="ml-2">Ecografista</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="userType"
                  value="centro"
                  checked={userType === 'centro'}
                  onChange={() => setUserType('centro')}
                  className="accent-blue-500"
                />
                <span className="ml-2">Centro de Salud</span>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-400 text-white font-semibold py-3 px-8 rounded transition mt-2"
          >
            Registrarse
          </button>
        </form>
        <div className="mt-4 text-center text-sm">
          ¿Ya tienes una cuenta?{' '}
          <Link to="/login" className="text-blue-600 hover:underline font-semibold">
            Inicia Sesión
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register; 