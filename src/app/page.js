"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useUserContext } from "./context/UserContext"; // Importamos el contexto del usuario
import { useRouter } from "next/navigation"; // Importamos el hook de router para redirigir
import styles from "./page.module.css";
import Layout from "./layout";

const Home = () => {
  const { user } = useUserContext(); // Accedemos al usuario desde el contexto
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter(); // Inicializamos el router

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/event");
        if (!res.ok) throw new Error("Error al obtener los eventos");
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

  // Si no está logueado, mostrar mensaje y botón para redirigir al login
  if (!user) {
    return (
      <Layout>
        <div className={styles.homeContainer}>
          <h1 className={styles.title}>Listado de Eventos</h1>
          <p className={styles.message}>
            Debes iniciar sesión para ver la lista de eventos.
          </p>
          <button
            className={styles.loginButton}
            onClick={() => router.push("/login")} // Redirige al login
          >
            Iniciar sesión
          </button>
        </div>
      </Layout>
    );
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
              <p className={styles.eventDuration}>
                Duración: {event.duration_in_minutes} minutos
              </p>
              <p className={styles.eventPrice}>Precio: ${event.price}</p>
              <Link href={`/eventosdetalle/${event.id}`} className={styles.link}>
                Ver Detalle
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Home;
