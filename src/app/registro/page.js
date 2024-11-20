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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al registrarse, intente nuevamente.');
      }

      setSuccess(true);
      setTimeout(() => router.push('/login'), 2000); // Redirigir al login después de 2s
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Layout>
      <div className={styles.registroContainer}>
        <h2 className={styles.title}>Registrarse</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>Registro exitoso, redirigiendo al login...</p>}
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
