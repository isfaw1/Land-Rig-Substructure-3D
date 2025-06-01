import React from 'react';
import BatList from './BatList';

function Dashboard({ user, onLogout }) {
  if (!user) {
    return <p>Utilisateur non trouvé, veuillez vous connecter.</p>;
  }

  const { email, role } = user;

  // Fonction pour rendre le contenu en fonction du rôle
  const renderContent = () => {
    switch (role) {
      case 'admin':
        return (
          <div>
            <p>Vous pouvez gérer les utilisateurs, consulter les statistiques globales et exporter les BAT.</p>
            {/* Ajouter plus de composants ou actions pour l'admin ici */}
          </div>
        );
      case 'qualite':
        return (
          <div>
            <p>Vous pouvez valider les fiches BAT, effectuer des contrôles et suivre les non-conformités.</p>
            {/* Ajouter des actions spécifiques à la qualité ici */}
          </div>
        );
      case 'operateur':
        return (
          <div>
            <p>Vous pouvez consulter les ordres de fabrication et suivre les étapes de production.</p>
            {/* Ajouter des actions spécifiques à l'opérateur ici */}
          </div>
        );
      default:
        return <p>Rôle non défini.</p>;
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Bienvenue, {email.split('@')[0]}</h2>
        <h4>Rôle : {role}</h4>
        {renderContent()}
        <button onClick={onLogout}>Se déconnecter</button>
      </div>
    </div>
  );
}

export default Dashboard;
