import React from 'react';
import logo from './assets/logo-tecpap.png';

function QualiteDashboard({ onLogout }) {
  return (
    <div className="auth-box">
      <img src={logo} alt="TECPAP Logo" className="logo" />
      <h2>📋 Espace Qualité</h2>
      <p>Bienvenue dans l’espace qualité. Accédez au contrôle BAT, check-lists de conformité, suivi des défauts, et validation finale.</p>
      <button onClick={onLogout}>Se déconnecter</button>
    </div>
  );
}

export default QualiteDashboard;
