"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import Layout from './layout';

const Home = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch('/api/events');
        if (!res.ok) throw new Error('Error al obtener los eventos');
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <p className={styles.loading}>Cargando eventos...</p>;
  }

  if (error) {
    return <p className={styles.error}>Error: {error}</p>;
  }

  if (events.length === 0) {
    return <p className={styles.empty}>No hay eventos disponibles.</p>;
  }

  return (
    <Layout>
    <div className={styles.homeContainer}>
      <h1 className={styles.title}>Listado de Eventos</h1>
      <ul className={styles.eventList}>
        {events.map((event) => (
          <li key={event.id} className={styles.eventItem}>
            <h2 className={styles.eventName}>{event.name}</h2>
            <p className={styles.eventDescription}>{event.description}</p>
            <Link href={`/eventosdetalle/${event.id}`}>Ver Detalle</Link>
          </li>
        ))}
      </ul>
    </div>
    </Layout>
  );
};

export default Home;
