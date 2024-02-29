/*import React, { useState } from "react";

const SignUpForm = ({ onAuthError }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérifier que les mots de passe correspondent
    if (password !== confirmPassword) {
      onAuthError("Les mots de passe ne correspondent pas.");
      return;
    }

    // Logique de création de compte
    try {
      // Envoi des données au backend pour la création de compte
      const response = await fetch("http://localhost:1337/api/auth/local/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la création du compte. Veuillez réessayer.");
      }

      // Si la création de compte réussit, vous pouvez effectuer une action appropriée, par exemple rediriger l'utilisateur ou afficher un message de réussite.
      console.log("Compte créé avec succès!");
    } catch (error) {
      // Gérer les erreurs de création de compte
      onAuthError(error.message);
    }
  };

  return (
    <div>
      <h2>Créer un compte</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom d'utilisateur:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Adresse e-mail:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Mot de passe:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Confirmer le mot de passe:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="ctn-btn">

       
        <button className="btn-purple" type="submit">Créer un compte</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
*/