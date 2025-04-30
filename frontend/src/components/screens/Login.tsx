import { Link } from "react-router-dom";
import styles from './Login.module.css'; // Importa el CSS module

const Login = () => {
  return (
    <div className={styles.loginForm}>
      <form>
        {/* Logo pequeño en la esquina superior izquierda */}
        <img src="../../assets/Logotipo Adidas.svg" alt="adidas" />

        {/* Título centrado */}
        <h2>Iniciar Sesión</h2>

        {/* Campo de correo */}
        <div>
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" name="email" id="email" />
        </div>

        {/* Campo de contraseña */}
        <div>
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" id="password" />
        </div>

        {/* Botón alineado a la izquierda */}
        <button type="submit">Iniciar Sesión</button>

        {/* Texto alineado al botón */}
        <p>¿No tienes una cuenta? <span><Link to="/Register">Crear Cuenta</Link></span></p>
      </form>
    </div>
  );
}

export default Login;

