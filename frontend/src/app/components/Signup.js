import React, { useState } from 'react';
import axios from 'axios';

export function CreateAccount() {
  const [username, setUser] = useState('');
  const [password, setPwd] = useState('');
  const [email, setMail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      
      const formData = {
        data: {
          username: username,
          password: password,
          email: email
        }
      };
      
      

      // Envoi de la requête POST pour créer le post avec les données textuelles
      const response = await axios.post('http://localhost:1337/api/accounts', formData);

      

      console.log("Post created successfully:", response.data);
      setSuccessMessage('Compte créé avec succès !');
      
    } catch (error) {
      console.error("Error creating account: ", error);
      setError('Une erreur s\'est produite lors de la création du compte. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={username} onChange={(e) => setUser(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={(e) => setPwd(e.target.value)} required/>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" value={email} onChange={(e) => setMail(e.target.value)} required/>
      </div>
      <div className="ctn-btn">
      <button className="btn-purple" type="submit" disabled={isLoading}>
        {isLoading ? 'En cours...' : 'Créer le compte'}
      </button>
      </div>
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
    </form>
  );
};
