import React, { useState } from 'react';
import { db } from './firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import './App.css';

function BatForm() {
  const [formData, setFormData] = useState({
    commercial: '',
    date: '',
    client: '',
    motif: '',
    typeCommande: '',
    format: '',
    papier: '',
    poignee: '',
    couleurs: '',
    pantone: '',
    poses: '',
    manchons: '',
    machine: '',
    fichier: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "fichier") {
      setFormData(prev => ({ ...prev, fichier: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { fichier, ...dataToSend } = formData;
      await addDoc(collection(db, "bat"), dataToSend);
      alert("✅ B.A.T enregistré avec succès !");
      setFormData({
        commercial: '',
        date: '',
        client: '',
        motif: '',
        typeCommande: '',
        format: '',
        papier: '',
        poignee: '',
        couleurs: '',
        pantone: '',
        poses: '',
        manchons: '',
        machine: '',
        fichier: null
      });
    } catch (error) {
      alert("❌ Erreur : " + error.message);
    }
  };

  return (
    <div className="form-container">
      <h2>📄 Formulaire B.A.T</h2>
      <form onSubmit={handleSubmit} className="bat-form">

        <div className="form-group">
          <label>📌 Commercial</label>
          <input name="commercial" value={formData.commercial} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>📅 Date</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>🏢 Client</label>
          <input name="client" value={formData.client} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>🧾 Motif</label>
          <input name="motif" value={formData.motif} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>🔄 Type de commande</label>
          <select name="typeCommande" value={formData.typeCommande} onChange={handleChange}>
            <option value="">-- Choisir --</option>
            <option value="Nouveau">Nouveau</option>
            <option value="Modification">Modification</option>
            <option value="Réimpression">Réimpression</option>
          </select>
        </div>

        <div className="form-group">
          <label>📐 Format du sac</label>
          <input name="format" value={formData.format} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>📄 Type de papier</label>
          <input name="papier" value={formData.papier} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>✋ Poignée</label>
          <select name="poignee" value={formData.poignee} onChange={handleChange}>
            <option value="">-- Choisir --</option>
            <option value="Torsadée">Torsadée</option>
            <option value="Plate">Plate</option>
            <option value="Sans">Sans</option>
          </select>
        </div>

        <div className="form-group">
          <label>🎨 Nombre de couleurs</label>
          <input type="number" name="couleurs" value={formData.couleurs} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>🎨 Pantone / Code couleur</label>
          <input name="pantone" placeholder="Noir, #000000, etc." value={formData.pantone} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>📊 Nombre de poses</label>
          <input type="number" name="poses" value={formData.poses} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>🧱 Nombre de manchons</label>
          <input type="number" name="manchons" value={formData.manchons} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>🛠️ Machine</label>
          <select name="machine" value={formData.machine} onChange={handleChange} required>
            <option value="">-- Sélectionner une machine --</option>
            <option value="T2">T2</option>
            <option value="T3">T3</option>
            <option value="Flexo A">Flexo A</option>
            <option value="Flexo B">Flexo B</option>
          </select>
        </div>

        <div className="form-group">
          <label>📎 Joindre un fichier (facultatif)</label>
          <input type="file" name="fichier" accept=".pdf,.jpg,.jpeg,.png" onChange={handleChange} />
        </div>

        <button type="submit" className="submit-btn">📤 Enregistrer B.A.T</button>
      </form>
    </div>
  );
}

export default BatForm;
