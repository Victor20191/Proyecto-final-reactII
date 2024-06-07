import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { iniciarSesion } from '../slices/autenticacion';

const usuarioValido = {
  usuario: "admin",
  contraseña: "123"
};

const VistaLogin = () => {
  const [formulario, setFormulario] = useState({ usuario: "", contraseña: "" });
  const [error, setError] = useState("");
  const despachar = useDispatch();
  const navigate = useNavigate();

  const manejarLogin = (evento) => {
    evento.preventDefault();
    if (formulario.usuario === usuarioValido.usuario && formulario.contraseña === usuarioValido.contraseña) {
      console.log("Login exitoso");
      despachar(iniciarSesion());
      navigate("/perfil");
    } else {
      console.log("Credenciales incorrectas");
      setError("Usuario o contraseña incorrectos");
    }
  };

  const manejarCambioFormulario = (evento) => {
    const { name, value } = evento.target;
    setFormulario({ ...formulario, [name]: value });
  };

  return (
    <div className="login-container">
      <h1>Iniciar sesión</h1>
      <p>Ingrese sus datos de usuario a continuación</p>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={manejarLogin}>
        <input name="usuario" type="text" placeholder="Usuario" onChange={manejarCambioFormulario} />
        <input name="contraseña" type="password" placeholder="Contraseña" onChange={manejarCambioFormulario} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default VistaLogin;
