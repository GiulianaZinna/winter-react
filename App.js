import React from 'react'

import Header from './componentes/layout/Header';
import Nav from './componentes/layout/Nav';
import Footer from './componentes/layout/Footer';

import Contacto from './paginas/Contacto';
import Home from './paginas/Home';
import Nosotros from './paginas/Nosotros';
import Novedades from './paginas/Novedades';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>  
      <Nav />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contacto" element={<Contacto />} />
      <Route path="nosotros" element={<Nosotros />} />
      <Route path="novedades" element={<Novedades />} />

      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}      

export default App;

