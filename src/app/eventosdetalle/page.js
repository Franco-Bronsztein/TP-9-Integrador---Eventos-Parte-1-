import Layout from "../layout";
import styles from './eventosdetalle.module.css';

const EventDetail = () => {
  // Datos de ejemplo, eventualmente serán reemplazados por la API.
  const eventData = {
    title: "Conferencia sobre Inteligencia Artificial",
    description: "Una conferencia que explora las últimas tendencias en IA y su impacto en diferentes industrias.",
    date: "25 de Octubre de 2024",
    location: "Centro de Convenciones, Buenos Aires"
  };

  return (
    <Layout>
      <div className={styles.eventDetailContainer}>
        <h1 className={styles.title}>{eventData.title}</h1>
        <p className={styles.description}>{eventData.description}</p>
        <div className={styles.eventInfo}>
          <p><strong>Fecha:</strong> {eventData.date}</p>
          <p><strong>Ubicación:</strong> {eventData.location}</p>
        </div>
        <button className={styles.button}>Registrarse</button>
      </div>
    </Layout>
  );
};

export default EventDetail;
