import Link from 'next/link';
import '../Layout.css';  

const Layout = ({ children, user }) => {
  return (
    <>
      <header className="header">
        <div className="logo">Logo del Sitio</div>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/login">Login</Link>
          <Link href="/registro">Registrarme</Link>
          <Link href="/eventosdetalle">Detalle Eventos</Link>
          {user && (
            <div className="user-info">
              <span>{user.name}</span>
              <button>Cerrar Sesión</button>
            </div>
          )}
        </nav>
      </header>
      <main className="main-content">{children}</main>
      <footer className="footer">Pie de página</footer>
    </>
  );
};

export default Layout;


