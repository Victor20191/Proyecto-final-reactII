import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import tienda from './tienda';
import Diseño from './componentes/Diseño';
import VistaInicio from './vistas/VistaInicio';
import VistaLogin from './vistas/VistaLogin';
import VistaLogout from './vistas/VistaLogout';
import VistaPerfil from './vistas/VistaPerfil';

const opcionesApp = [
  { titulo: "Inicio", to: "" },
  { titulo: "Iniciar Sesión", to: "login" },
  { titulo: "Cerrar Sesión", to: "logout" },
  { titulo: "Perfil", to: "perfil" },
];

function App() {
  return (
    <Provider store={tienda}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Diseño opciones={opcionesApp} />}>
            <Route path="" element={<VistaInicio />} />
            <Route path="login" element={<VistaLogin />} />
            <Route path="logout" element={<VistaLogout />} />
            <Route path="perfil" element={<VistaPerfil />} />
            <Route path="*" element={<div>404 No Encontrado</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
