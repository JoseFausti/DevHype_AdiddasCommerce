import { Link } from "react-router-dom"

const Login: React.FC = () => {
  return (
    <>
      <form action="">
        <div>
          <img src="../../assets/Adidas_Logo.svg" alt="adidas" />
        </div>
        <h2>Iniciar Sesión</h2>
        <div>
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" name="email" id="email" />

          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" id="password" />
        </div>
        <div>
          <button>Iniciar Sesión</button>
        </div>

        <div>
          <p>¿No tienes una cuenta? <span><Link to={'/register'}>Crear Cuenta</Link></span></p>
        </div>
      </form>
    </>
  )
}

export default Login
