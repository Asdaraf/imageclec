// Importaciones de React y la librerias necesarias
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importaciones de las páginas
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Test2 from './pages/CentrosDeSalud';
import Ecografistas from './pages/Ecografistas';

// Importaciones de los componentes
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/centros-medicos" element={<Test2 />} />
          <Route path="/ecografistas" element={<Ecografistas />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
