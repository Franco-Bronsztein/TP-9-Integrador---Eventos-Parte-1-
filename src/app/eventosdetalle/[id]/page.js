"use client";

import { useEffect, useState } from "react";

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
    return <p style={{ textAlign: "center", marginTop: "2rem" }}>Cargando evento...</p>;
  }


  if (error) {
    return <p style={{ textAlign: "center", marginTop: "2rem", color: "red" }}>Error: {error}</p>;
  }


  if (!event) {
    return <p style={{ textAlign: "center", marginTop: "2rem" }}>No se encontró el evento.</p>;
  }


  return (
    <div style={{ padding: "2rem" }}>
      <h1>{event.name}</h1>
      <p>{event.description}</p>
      <p>Fecha de inicio: {event.start_date}</p>
      <p>Duración: {event.duration_in_minutes} minutos</p>
      <p>Precio: ${event.price}</p>
      <p>Capacidad máxima: {event.max_assistance}</p>
    </div>
  );
};

export default EventDetail;
