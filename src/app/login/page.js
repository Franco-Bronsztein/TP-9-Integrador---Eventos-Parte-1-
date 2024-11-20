'use client';

import { useState } from 'react';
import { useUserContext } from '../context/UserContext';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import Layout from '../layout';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { login } = useUserContext();
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    try {

      const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
      const usuario = usuarios.find(
        (user) => user.email === formData.email && user.password === formData.password
      );

      if (!usuario) {
        throw new Error('Credenciales incorrectas. Verifique sus datos e intente nuevamente.');
      }

      login({ name: usuario.nombre, email: usuario.email });
      router.push('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Layout>
      <div className={styles.loginContainer}>
        <h2 className={styles.title}>Iniciar Sesión</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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
