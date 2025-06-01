import React from 'react';
import logo from './assets/logo-tecpap.png';

function AdminDashboard({ onLogout }) {
  return (
    <div className="auth-container">
      <div className="auth-box admin-box">
        <div className="dashboard-header">
          <img src={logo} alt="Logo de TECPAP" className="logo" />
          <button
            onClick={onLogout}
            className="logout-btn"
            aria-label="Se déconnecter de l'application" // Améliore l'accessibilité
          >
            Se déconnecter
          </button>
        </div>
        
        <h2>🎛️ Tableau de bord Administrateur</h2>
        <p className="dashboard-subtitle">Bienvenue dans l’espace admin. Vous avez un accès complet à la gestion des utilisateurs, des documents BAT, et à la traçabilité.</p>

        {/* Vous pouvez ajouter plus de fonctionnalités ou liens vers différentes sections du tableau de bord */}
        <div className="admin-functions">
          <ul>
            <li><button>Gérer les utilisateurs</button></li>
            <li><button>Voir les documents BAT</button></li>
            <li><button>Suivi de la traçabilité</button></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
