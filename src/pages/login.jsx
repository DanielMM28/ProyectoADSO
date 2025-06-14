import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { usuariosFalsos } from '../data/usuariosfalsos';
import { AuthContext } from '../autenticacion';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [clave, setClave] = useState('');
  const [nombre, setNombre] = useState('');
  const [confirmClave, setConfirmClave] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // ✅ Usamos el contexto

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    const usuario = usuariosFalsos.find((u) => u.email === email && u.clave === clave);

    if (usuario) {
      login(usuario.rol); // ✅ Llamamos al método del contexto
      navigate(usuario.rol === 'admin' ? '/inicio' : '/productos');
    } else {
      setError('Correo o contraseña incorrectos');
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !clave || !confirmClave || !nombre) {
      setError('Todos los campos son obligatorios');
      return;
    }

    if (clave !== confirmClave) {
      setError('Las contraseñas no coinciden');
      return;
    }

    alert('Registro exitoso. Ahora puede iniciar sesión.');
    setIsSignUp(false);
    setNombre('');
    setEmail('');
    setClave('');
    setConfirmClave('');
  };

  return (
    <div className={`container-login ${isSignUp ? 'sign-up-mode' : ''}`}>
      {!isSignUp && (
        <div className="container-form">
          <form className="sign-in" onSubmit={handleLogin}>
            <h2>Iniciar Sesión</h2>
            <div className="social-networks">
              <ion-icon className="iconos" name="logo-facebook"></ion-icon>
              <ion-icon className="iconos" name="logo-instagram"></ion-icon>
              <ion-icon className="iconos" name="logo-google"></ion-icon>
            </div>
            <span>Ingrese su correo y contraseña</span>
            <div className="container-input">
              <ion-icon name="mail-outline"></ion-icon>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="container-input">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input
                type="password"
                placeholder="Contraseña"
                value={clave}
                onChange={(e) => setClave(e.target.value)}
              />
            </div>
            <a href="#">¿Olvidaste tu contraseña?</a>
            {error && <p className="text-danger">{error}</p>}
            <button type="submit" className="botones">INICIAR SESIÓN</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
