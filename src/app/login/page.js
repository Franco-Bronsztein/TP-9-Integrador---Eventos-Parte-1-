import styles from './page.module.css';
import Layout from '../layout';

const Login = () => {
  return (
    <Layout>
      <div className={styles.loginContainer}>
        <h2 className={styles.title}>Iniciar Sesión</h2>
        <form action="/ruta-al-servidor" method="POST" className={styles.form}>
          <input
            type="text"
            name="username"
            placeholder="Nombre de usuario"
            required
            className={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            required
            className={styles.input}
          />
          <button type="submit" className={styles.button}>Iniciar Sesión</button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
