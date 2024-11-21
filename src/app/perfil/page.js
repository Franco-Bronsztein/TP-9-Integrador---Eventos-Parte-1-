"use client";

import { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";
import { useRouter } from "next/navigation";
import styles from "./perfil.module.css";

const Profile = () => {
  const { user, loading, login } = useUserContext();
  const router = useRouter();

  const [newPassword, setNewPassword] = useState(""); 
  const [message, setMessage] = useState(""); 

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login"); 
    }
  }, [user, loading, router]);

  const handlePasswordChange = () => {
    if (newPassword.trim().length >= 6) {
    
      const storedUsers = JSON.parse(localStorage.getItem("usuarios")) || [];
      const updatedUsers = storedUsers.map((u) =>
        u.email === user.email ? { ...u, password: newPassword } : u
      );

 
      localStorage.setItem("usuarios", JSON.stringify(updatedUsers));

    
      const updatedUser = { ...user, password: newPassword };
      login(updatedUser);

      setMessage("Contraseña actualizada exitosamente.");
      setNewPassword("");
    } else {
      setMessage("La contraseña debe tener al menos 6 caracteres.");
    }
  };

  if (loading) {
    return <p className={styles.loading}>Cargando...</p>; 
  }

  if (!user) {
    return null; 
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Perfil de Usuario</h1>

      <div className={styles.profileInfo}>
        <p className={styles.info}>Nombre: {user.name}</p>
        <p className={styles.info}>Correo: {user.email}</p>

        <div className={styles.changePassword}>
          <label htmlFor="newPassword">Nueva contraseña:</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className={styles.passwordInput}
          />
          <button onClick={handlePasswordChange} className={styles.passwordButton}>
            Actualizar Contraseña
          </button>
        </div>
        {message && <p className={styles.message}>{message}</p>}
      </div>
    </div>
  );
};

export default Profile;
