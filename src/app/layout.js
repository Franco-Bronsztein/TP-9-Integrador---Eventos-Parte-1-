import styles from './page.module.css'
import Link from 'next/link';


const Layout = ({ children, user }) => {
  return (
    <>
      <html>
        <body>
          <header className={styles.header}>
            <div className={styles.logo}>Logo del Sitio</div>
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
        </body>
      </html>
    </>
  );
};

export default Layout;
