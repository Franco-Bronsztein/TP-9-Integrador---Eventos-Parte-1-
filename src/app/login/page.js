'use client';

import { useState } from 'react';
import { useUserContext } from '../context/UserContext';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import Layout from '../layout';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const { login } = useUserContext();
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Credenciales incorrectas');
      }

      const { token } = await response.json();
      login(token); // Guarda el token en el contexto y localStorage
      router.push('/'); // Redirige a Home
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
            type="text"
            name="username"
            placeholder="Nombre de usuario"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
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
