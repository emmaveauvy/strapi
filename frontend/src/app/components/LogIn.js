/*import React, { useState } from 'react';
import axios from 'axios';

export function LoginForm({ onLogin, onAuthError }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Recherche de l'utilisateur dans la base de données Strapi par son nom d'utilisateur (ou e-mail)
      const response = await axios.get(`http://localhost:1337/api/accounts?username=${username}`);
      const user = response.data[0];
     console.log(response);
  
      // Vérification si l'utilisateur existe et si le mot de passe est correct
      if (user && user.password === password) {
        // Authentification réussie
        console.log("c'est bon");
        return { success: true, user };
      } else {
        // Identifiants incorrects
        console.log("c'est pas bon");
        return { success: false, message: "Identifiants invalides" };
      }
    } catch (error) {
      console.error("Error authenticating user:", error);
      return { success: false, message: "Une erreur s'est produite lors de l'authentification. Veuillez réessayer." };
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
      <button type="submit" >
        Se connecter
        {/*isLoading ? 'En cours...' : 'Se connecter'*//*}
      </button>
    </form>
  );
}
*/