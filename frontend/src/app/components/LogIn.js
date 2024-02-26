import React, { useState } from 'react';
import axios from 'axios';

export function LoginForm({ onLogin, onAuthError }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Envoi de la requête GET pour vérifier les informations d'identification
      const response = await axios.get(`http://localhost:1337/api/accounts?username=${username}&password=${password}`);

      // Vérifiez si la réponse contient des données d'utilisateur valides
      if (response.data.length > 0) {
        // Utilisateur authentifié
        onLogin(response.data[0]);
      } else {
        // Aucun utilisateur correspondant trouvé
        onAuthError("Identifiants invalides. Veuillez réessayer.");
      }

    } catch (error) {
      // En cas d'erreur, gestion de l'erreur d'authentification
      console.error("Error logging in: ", error);
      onAuthError("Une erreur s'est produite lors de la connexion. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'En cours...' : 'Se connecter'}
      </button>
    </form>
  );
}
