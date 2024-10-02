import Link from 'next/link';
import styles from './page.module.css'; 

const Layout = ({ children, user }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="/img.JPEG" alt="Logo del Sitio" className={styles.logoImage} />
        </div>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/login">Login</Link>
          <Link href="/registro">Registrarme</Link>
          <Link href="/eventosdetalle">Detalle Eventos</Link>
          {user && (
            <div className={styles.userInfo}>
              <span>{user.name}</span>
              <button className={styles.button}>Cerrar Sesión</button>
            </div>
          )}
        </nav>
      </header>
      <main className={styles.mainContent}>{children}</main>
      <footer className={styles.footer}>Pie de página</footer>
    </>
  );
};

export default Layout;
