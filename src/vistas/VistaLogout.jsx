import React from 'react';
import { useDispatch } from 'react-redux';
import { cerrarSesion } from '../slices/autenticacion';

const VistaLogout = () => {
  const despachar = useDispatch();

  const manejarLogout = () => {
    despachar(cerrarSesion());
  };

  return (
    <div>
      <h1>Cerrar sesión</h1>
      <button onClick={manejarLogout}>Logout</button>
    </div>
  );
};

export default VistaLogout;
