import Link from 'next/link';

const Layout = ({ children, user }) => {
  return (
    <html>
      <body>
      <div>
      <header>
        <div className="logo">Logo del Sitio</div>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/login">Login</Link>
          <Link href="/registro">registrarme</Link>
          {user && (
            <div className="user-info">
              <span>{user.name}</span>
              <button>Cerrar Sesión</button>
            </div>
          )}
        </nav>
      </header>
      <main>{children}</main>
      <footer>Pie de página</footer>
    </div>
    </body>
    </html>
  );
};

export default Layout;

