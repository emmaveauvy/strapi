/*import React, { useState } from 'react';
import axios from 'axios';

const apiUrl = 'http://localhost:1337'; // L'URL de votre API Strapi

export default function AuthForm({ setIsAuthenticated }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/auth/local/register`, {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      localStorage.setItem('token', response.data.jwt);
      setIsAuthenticated(true);
    } catch (err) {
      setError(err.response.data.message[0].messages[0].message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/auth/local`, {
        identifier: formData.email,
        password: formData.password,
      });
      localStorage.setItem('token', response.data.jwt);
      setIsAuthenticated(true);
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          name="username"
          value={formData.username}
          placeholder="Username"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>

      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>

      {error && <p>{error}</p>}
    </div>
  );
}
*/

import React, { useState } from "react";
import { useAuthContext } from "./AuthContext";

const AuthForm = () => {
  const { setUser } = useAuthContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Logique d'authentification
    try {
      // Appel à une méthode d'authentification avec les identifiants
      // Par exemple, un appel à votre API backend pour vérifier les identifiants
      // Ici, nous simulons juste une authentification réussie
      const userData = { username: username, /* autres données utilisateur */ };
      setUser(userData);
    } catch (error) {
      setError("Identifiants invalides");
    }
  };

  return (
    <div>
      <h2>Connexion</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn-purple" type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default AuthForm;
