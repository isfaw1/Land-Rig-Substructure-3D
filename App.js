import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo-tecpap.png';
import sliderImage from './assets/slider-1.jpg'; // Ajout de l'import
import { auth, db } from './firebase-config';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import Login from './login';
import AdminDashboard from './AdminDashboard';
import QualiteDashboard from './QualiteDashboard';
import OperateurDashboard from './OperateurDashboard';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;

      const userDoc = await getDoc(doc(db, 'users', uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        setRole(userData.role);
        setIsLoggedIn(true);
      } else {
        alert("Aucun rôle trouvé pour cet utilisateur.");
      }
    } catch (error) {
      alert(error.code === 'auth/user-not-found' ? "Utilisateur non trouvé" : "Erreur de connexion : " + error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setEmail('');
      setPassword('');
      setIsLoggedIn(false);
      setRole('');
    } catch (error) {
      alert("Erreur lors de la déconnexion : " + error.message);
    }
  };

  if (isLoggedIn) {
    return (
      <div className="auth-container" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${sliderImage})` }}>
        {role === 'admin' && <AdminDashboard onLogout={handleLogout} />}
        {role === 'qualite' && <QualiteDashboard onLogout={handleLogout} />}
        {role === 'operateur' && <OperateurDashboard onLogout={handleLogout} />}
        {!['admin', 'qualite', 'operateur'].includes(role) && (
          <div className="auth-box" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${sliderImage})` }}>
            <img src={logo} alt="TECPAP Logo" className="logo" />
            <h2>Rôle inconnu</h2>
            <p>Ce rôle n’est pas reconnu.</p>
            <button onClick={handleLogout}>Se déconnecter</button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="auth-container" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${sliderImage})` }}>
      <div className="auth-box" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${sliderImage})` }}>
        <img src={logo} alt="TECPAP Logo" className="logo" />
        <h2>Connexion sécurisée</h2>
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
          <button type="submit">Se connecter</button>
        </form>
      </div>
    </div>
  );
}

export default App;