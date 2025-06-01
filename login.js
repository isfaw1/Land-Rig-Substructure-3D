import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo-tecpap.png'; // Ajoutez cet import
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from './firebase-config';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      const role = userDoc.exists() ? userDoc.data().role : null;

      if (!role) {
        setError("Aucun rôle défini pour cet utilisateur.");
        setLoading(false);
        return;
      }

      onLogin(user, role);
    } catch (error) {
      setError("Erreur de connexion : " + error.message);
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <img src={logo} alt="TECPAP Logo" className="logo" />
        <h2>Connexion sécurisée</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleLogin}>
          <label>Email professionnel</label>
          <input
            type="email"
            placeholder="prenom.nom@tecpap.ma"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Mot de passe</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Connexion...' : 'Se connecter'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;