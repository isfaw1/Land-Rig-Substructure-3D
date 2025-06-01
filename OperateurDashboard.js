import React, { useState } from 'react';
import logo from './assets/logo-tecpap.png';
import BatForm from './BatForm';
import './App.css';

function OperateurDashboard({ onLogout }) {
  const [message, setMessage] = useState(''); // Gère les messages dynamiques

  const handleLogout = () => {
    setMessage('Vous avez été déconnecté avec succès.');
    onLogout(); // Appel à la fonction de déconnexion
  };

  return (
    <div className="auth-container">
      <div className="auth-box operator-box">
        <div className="dashboard-header">
          <img src={logo} alt="Logo de TECPAP" className="logo" />
          <button
            onClick={handleLogout}
            className="logout-btn"
            aria-label="Se déconnecter"
          >
            Se déconnecter
          </button>
        </div>
        
        <h2>🛠️ Espace Opérateur</h2>
        <p className="dashboard-subtitle">Bienvenue, merci de compléter le formulaire BAT.</p>

        {message && <p className="success-message">{message}</p>} {/* Affiche un message si nécessaire */}

        <BatForm /> {/* Formulaire pour l'opérateur */}
      </div>
    </div>
  );
}

export default OperateurDashboard;
