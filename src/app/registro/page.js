'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '../layout';
import styles from './registro.module.css';

const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    try {

      const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
      const usuarioExistente = usuarios.find((user) => user.email === formData.email);

      if (usuarioExistente) {
        throw new Error('Este correo ya está registrado. Intente con otro.');
      }

      usuarios.push(formData);
      localStorage.setItem('usuarios', JSON.stringify(usuarios));

      setSuccess(true);
      setTimeout(() => router.push('/login'), 2000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Layout>
      <div className={styles.registroContainer}>
        <h2 className={styles.title}>Registrarse</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && (
          <p style={{ color: 'green' }}>
            Registro exitoso. Redirigiendo a la pantalla de inicio de sesión...
          </p>
        )}
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            value={formData.nombre}
            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
            required
            className={styles.input}
          />
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
          <button type="submit" className={styles.button}>Registrarme</button>
        </form>
      </div>
    </Layout>
  );
};

export default Registro;
