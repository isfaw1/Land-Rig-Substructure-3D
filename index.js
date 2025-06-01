import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Votre CSS global
import App from './App'; // Composant principal de l'application

// Récupération de l'élément root dans le fichier HTML
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendu de l'application dans l'élément root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
