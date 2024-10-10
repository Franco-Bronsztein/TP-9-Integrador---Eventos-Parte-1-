import Layout from "../layout";
import styles from './registro.module.css'; // Archivo CSS para el registro

const Registro = () => {
  return (
    <Layout>
      <div className={styles.registroContainer}>
        <h2 className={styles.title}>Registrarse</h2>
        <form action="/ruta-al-servidor" method="POST" className={styles.form}>
          <input type="text" name="nombre" placeholder="Nombre completo" required className={styles.input} />
          <input type="email" name="email" placeholder="Correo electrónico" required className={styles.input} />
          <input type="password" name="password" placeholder="Contraseña" required className={styles.input} />
          <button type="submit" className={styles.button}>Registrarme</button>
        </form>
      </div>
    </Layout>
  );
};

export default Registro;
