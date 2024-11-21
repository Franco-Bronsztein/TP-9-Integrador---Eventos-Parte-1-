"use client";

import { UserProvider, useUserContext } from './context/UserContext';
import styles from './page.module.css';
import Link from 'next/link';
import img from './../public/imagensitio.jpg';
import Image from 'next/image';

export const Layout = ({ children }) => {
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
        <div className={styles.logo}>
          <Image src={img} alt="Logo del Sitio" className={styles.logoImage} />
        </div>

        <nav className={styles.nav}>
  <Link href="/" className={styles.link}>Home</Link>

  {!user ? (
    <>
      <Link href="/login" className={styles.link}>Login</Link>
      <Link href="/registro" className={styles.link}>Registrarme</Link>
    </>
  ) : (
    <div className={styles.userInfo}>
      <Link href="/perfil" className={styles.link}>Perfil</Link>
      <button className={styles.button} onClick={logout}>Cerrar Sesión</button>
    </div>
  )}
</nav>
      </header>

      <main className={styles.mainContent}>
        {children}
      </main>

      <footer className={styles.footer}>
        <p>© 2024 Logo del Sitio. Todos los derechos reservados.</p>
      </footer>
    </>
  );
};

export default Layout;
