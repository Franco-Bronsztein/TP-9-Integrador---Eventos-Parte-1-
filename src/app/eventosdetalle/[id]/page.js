"use client";

import { useEffect, useState } from "react";
import styles from "./eventosdetalle.module.css"; 

const EventDetail = ({ params }) => {
  const { id } = params;
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/event/${id}`);
        if (!res.ok) throw new Error("Error al cargar el evento");
        const data = await res.json();
        setEvent(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) {
    return <p className={styles.loading}>Cargando evento...</p>;
  }

  if (error) {
    return <p className={styles.error}>Error: {error}</p>;
  }

  if (!event) {
    return <p className={styles.empty}>No se encontró el evento.</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{event.name}</h1>
      <p className={styles.description}>{event.description}</p>
      <p className={styles.info}>Fecha de inicio: {event.start_date}</p>
      <p className={styles.info}>Duración: {event.duration_in_minutes} minutos</p>
      <p className={styles.info}>Precio: ${event.price}</p>
      <p className={styles.info}>Capacidad máxima: {event.max_assistance}</p>
    </div>
  );
};

export default EventDetail;
