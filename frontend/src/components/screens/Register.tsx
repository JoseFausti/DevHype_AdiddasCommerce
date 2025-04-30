import { Link } from "react-router-dom";
import styles from './Register.module.css'; // O el mismo que Login.module.css

const Register = () => {
  return (
    <div className={styles.loginForm}>
      <form>
        {/* Logo en esquina superior izquierda */}
        <img src="../../assets/Logotipo Adidas.svg" alt="adidas" />

        {/* Título centrado */}
        <h2>Registrarse</h2>

        {/* Inputs del formulario */}
        <div className={styles.inputGroup}>
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" id="name" />

          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" name="email" id="email" />

          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" id="password" />

          <label htmlFor="confirmPassword">Confirmar Contraseña</label>
          <input type="password" name="confirmPassword" id="confirmPassword" />
        </div>

        {/* Botón alineado a la izquierda */}
        <button type="submit">Crear Cuenta</button>

        {/* Texto también alineado a la izquierda */}
        <p>¿Ya tienes una cuenta? <span><Link to="/login">Iniciar Sesión</Link></span></p>
      </form>
    </div>
  );
};

export default Register;
