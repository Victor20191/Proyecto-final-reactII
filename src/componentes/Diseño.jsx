import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Diseño = ({ opciones }) => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            {opciones.map((opcion, indice) => (
              <li key={indice}>
                <Link to={opcion.to}>{opcion.titulo}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>© Victor Rivera | Diseñado y Desarrollado por Victor Rivera</footer>
    </div>
  );
};

export default Diseño;
