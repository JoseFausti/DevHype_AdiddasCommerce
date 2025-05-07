import { Link, useNavigate } from "react-router-dom"
import Styles from './Login.module.css'
import Home from "./Home"

const Login: React.FC = () => {

  const navigate = useNavigate()

  return (
    <>
      <div className="home__container">
        <Home />
      </div>
      <div className={Styles.loginForm}>
        <form className={Styles.loginForm__container} onSubmit={(e) => e.preventDefault()}> {/* Implementar la logica de inicio de sesion */}
            <div className={Styles.login_formHeader}>
              <img className={Styles.login_formImage} src="../../assets/Adidas_Logo.svg" alt="adidas" />
              <h2 className={Styles.login_formTitle}>Iniciar Sesion</h2>
            </div>
            <div className={Styles.login_formInputContainer}>
              <label htmlFor="email">Correo Electrónico</label>
              <input type="email" name="email" id="email" />

              <label htmlFor="password">Contraseña</label>
              <input type="password" name="password" id="password" />
            </div>
            <div>
              <button className={Styles.login_formButton}>Iniciar Sesión</button>
            </div>

            <div className={Styles.login_formTextContainer}>
              <p className={Styles.login_formText}>¿No tienes una cuenta? <span><Link to={'/register'}>Crear Cuenta</Link></span></p>
              <button className={Styles.login_formCloseButton} onClick={()=>{navigate('/')}}>Cerrar</button>
            </div>
        </form>
      </div>
    </>
  )
}

export default Login
