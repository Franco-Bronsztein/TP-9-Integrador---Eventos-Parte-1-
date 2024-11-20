// src/app/eventosdetalle/[id]/page.js
"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const EventDetail = () => {
  const { query } = useRouter(); // Usamos useRouter para acceder a los parámetros
  const { id } = query; // Obtenemos el id de la URL
  const [event, setEvent] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/api/event/${id}`)
        .then((res) => res.json())
        .then((data) => setEvent(data));
    }
  }, [id]);

  if (!event) return <p>Loading...</p>;

  return (
    <div>
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
