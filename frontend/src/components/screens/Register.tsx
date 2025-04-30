import { Link } from "react-router-dom"

const Register = () => {
  return (
    <>
      <form action="">
        <div>
          <img src="../../assets/Adidas_Logo.svg" alt="adidas" />
        </div>
        <h2>Registrarse</h2>
        <div>
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" id="name" />

          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" name="email" id="email" />

          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" id="password" />

          <label htmlFor="confirmPassword">Confirmar Contraseña</label>
          <input type="password" name="confirmPassword" id="confirmPassword" />
        </div>
        <div>
          <button>Crear Cuenta</button>
        </div>

        <div>
          <p>¿Ya tienes una cuenta? <span><Link to={'/login'}>Iniciar Sesión</Link></span></p>
        </div>
      </form>
    </>
  )
}

export default Register
