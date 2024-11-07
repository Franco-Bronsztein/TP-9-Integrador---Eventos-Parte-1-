"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/api/events')
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching events:', error));
  }, []);

  if (events.length === 0) {
    return <p>No hay eventos disponibles.</p>;
  }

  return (
    <div>
      <h1>Listado de Eventos</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <h2>{event.name}</h2>
            <p>{event.description}</p>
            <Link href={`/eventosdetalle/${event.id}`}>
              <a>Ver Detalle</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
