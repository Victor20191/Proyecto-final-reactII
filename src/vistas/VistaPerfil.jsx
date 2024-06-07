import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const VistaPerfil = () => {
  const autenticado = useSelector((estado) => estado.autenticacion.autenticado);

  if (!autenticado) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="profile-container">
      <h1>Perfil del Usuario</h1>
      <p>Bienvenido a tu perfil. Aquí puedes ver y editar tu información personal.</p>
    </div>
  );
};

export default VistaPerfil;
