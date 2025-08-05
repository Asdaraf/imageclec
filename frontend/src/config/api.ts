// Configuración de la API según el entorno
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://imageclec-backend-prod.us-east-2.elasticbeanstalk.com'
  : 'http://localhost:8080';

export const API_ENDPOINTS = {
  contact: `${API_BASE_URL}/api/contact`,
  health: `${API_BASE_URL}/api/health`
};

export default API_BASE_URL; 