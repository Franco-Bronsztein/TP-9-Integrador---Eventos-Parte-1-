'use client';

import { UserProvider, useUserContext } from './context/UserContext';
import styles from './page.module.css'; 
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <html lang="es">
      <body>
        <UserProvider>
          <LayoutContent>{children}</LayoutContent>
        </UserProvider>
      </body>
    </html>
  );
};

const LayoutContent = ({ children }) => {
  const { user, logout } = useUserContext();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>  <img src="/img.JPEG" alt="Logo del Sitio" className={styles.logoImage} /></div>
        
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/eventosdetalle">Detalle Eventos</Link>
          
          {!user ? (
            <>
              <Link href="/login" className={styles.link}>Login</Link>
              <Link href="/registro" className={styles.link}>Registrarme</Link>
            </>
          ) : (
            <div className={styles.userInfo}>
              <span>{user.name || 'Usuario'}</span>
              <button className={styles.button} onClick={logout}>Cerrar Sesión</button>
            </div>
          )}
        </nav>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.eventList}>
          {children} {/* Este es el contenido principal, como la lista de eventos o detalles */}
        </div>
      </main>
      
      <footer className={styles.footer}>
        <p>© 2024 Logo del Sitio. Todos los derechos reservados.</p>
      </footer>
    </>
  );
};

export default Layout;
