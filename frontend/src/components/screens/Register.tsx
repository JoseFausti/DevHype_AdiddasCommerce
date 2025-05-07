import { Link, useNavigate } from "react-router-dom"
import Styles from './Register.module.css'
import Home from "./Home"

const Register = () => {

  const navigate = useNavigate()

  return (
    <>
      <div className="home__container">
        <Home />
      </div>
      <div className={Styles.registerForm}>
        <form className={Styles.registerForm__container} onSubmit={(e) => e.preventDefault()}> {/* Implementar la logica de registro */}
          <div className={Styles.register_formHeader}>
            <img className={Styles.register_formImage} src="../../assets/Adidas_Logo.svg" alt="adidas" />
            <h2 className={Styles.register_formTitle}>Registrarse</h2>
          </div>
          <div className={Styles.register_formInputContainer}>
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
            <button className={Styles.register_formButton}>Crear Cuenta</button>
          </div>

          <div className={Styles.register_formTextContainer}>
            <p className={Styles.register_formText}>¿Ya tienes una cuenta? <span><Link to={'/login'}>Iniciar Sesión</Link></span></p>
            <button className={Styles.register_formCloseButton} onClick={()=>{navigate('/')}}>Cerrar</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Register
