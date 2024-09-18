import Layout from '../layout/layout.js';
import styles from './page.module.css';

const Login = () => {
  return (
      <div className={styles.loginContainer}>
        <h2>Iniciar Sesión</h2>
        <form action="/ruta-al-servidor" method="POST">
          <input type="text" name="username" placeholder="Nombre de usuario" required className={styles.input} />
          <input type="password" name="password" placeholder="Contraseña" required className={styles.input} />
          <button type="submit" className={styles.button}>Iniciar Sesión</button>
        </form>
      </div>
  );
};

export default Login;
