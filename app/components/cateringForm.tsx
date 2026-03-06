// app/components/CateringForm.tsx
"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function CateringForm() {
  const [formData, setFormData] = useState({
    eventType: "",
    otherEvent: "",
    eventDate: "",
    selectedPlats: [] as string[],
    nombrePersonnes: "",
    message: "",
  });

  const platsDisponibles = [
    { id: "riz", label: "Riz" },
    { id: "salade", label: "Salade" },
    { id: "foutou", label: "Foutou" },
    { id: "gari", label: "Gari" },
    { id: "allocos", label: "Allocos" },
    { id: "attiéké", label: "Attiéké" },
    { id: "poulet", label: "Poulet braisé" },
    { id: "poisson", label: "Poisson frit" },
  ];

  const handlePlatToggle = (platId: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedPlats: prev.selectedPlats.includes(platId)
        ? prev.selectedPlats.filter((id) => id !== platId)
        : [...prev.selectedPlats, platId],
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppMessage = () => {
    const eventTypeDisplay =
      formData.eventType === "autre" ? formData.otherEvent : formData.eventType;

    const platsList = formData.selectedPlats
      .map((id) => platsDisponibles.find((p) => p.id === id)?.label)
      .join(", ");

    const message = `
*NOUVELLE DEMANDE DE SERVICE TRAITEUR*

🏷️ *Événement:* ${eventTypeDisplay || "Non spécifié"}
📅 *Date:* ${formData.eventDate || "Non spécifiée"}
👥 *Nombre de personnes:* ${formData.nombrePersonnes || "Non spécifié"}

🍽️ *Plats souhaités:* 
${platsList || "Aucun plat sélectionné"}

💬 *Message additionnel:* 
${formData.message || "Aucun message"}

-----
Demande envoyée depuis le site Délice Est Out
    `.trim();

    return encodeURIComponent(message);
  };

  const openWhatsApp = () => {
    const phoneNumber = "+25769641051"; // Replace with actual number
    const message = generateWhatsAppMessage();
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-delius font-medium text-stone-800 mb-2">
          Service Traiteur
        </h2>
        <p className="text-stone-500 font-delius text-sm">
          Remplissez ce formulaire pour recevoir un devis personnalisé pour
          votre événement
        </p>
      </div>

      {/* Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-6 mb-8">
        {/* Event Type */}
        <div className="space-y-2">
          <label className="block text-stone-700 font-delius text-sm">
            Type d'événement <span className="text-teal-600">*</span>
          </label>
          <select
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            className="w-full px-4 py-3 border-b-2 border-stone-200 bg-transparent font-delius text-stone-700 focus:border-teal-500 focus:outline-none transition-colors"
          >
            <option value="">Sélectionnez</option>
            <option value="mariage">💒 Mariage</option>
            <option value="anniversaire">🎂 Anniversaire</option>
            <option value="reception">🥂 Réception</option>
            <option value="entreprise">🏢 Événement d'entreprise</option>
            <option value="autre">Autre</option>
          </select>
        </div>

        {/* Other Event (conditional) */}
        {formData.eventType === "autre" && (
          <div className="space-y-2">
            <label className="block text-stone-700 font-delius text-sm">
              Précisez l'événement <span className="text-teal-600">*</span>
            </label>
            <input
              type="text"
              name="otherEvent"
              value={formData.otherEvent}
              onChange={handleChange}
              placeholder="Ex: Baptême, Retraite, etc."
              className="w-full px-4 py-3 border-b-2 border-stone-200 bg-transparent font-delius text-stone-700 focus:border-teal-500 focus:outline-none transition-colors"
            />
          </div>
        )}

        {/* Event Date */}
        <div className="space-y-2">
          <label className="block text-stone-700 font-delius text-sm">
            Date de l'événement <span className="text-teal-600">*</span>
          </label>
          <input
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            className="w-full px-4 py-3 border-b-2 border-stone-200 bg-transparent font-delius text-stone-700 focus:border-teal-500 focus:outline-none transition-colors"
          />
        </div>

        {/* Number of people */}
        <div className="space-y-2">
          <label className="block text-stone-700 font-delius text-sm">
            Nombre de personnes <span className="text-teal-600">*</span>
          </label>
          <input
            type="number"
            name="nombrePersonnes"
            min="1"
            value={formData.nombrePersonnes}
            onChange={handleChange}
            placeholder="Ex: 50"
            className="w-full px-4 py-3 border-b-2 border-stone-200 bg-transparent font-delius text-stone-700 focus:border-teal-500 focus:outline-none transition-colors"
          />
        </div>

        {/* Plats selection - Full width */}
        <div className="md:col-span-2 space-y-3">
          <label className="block text-stone-700 font-delius text-sm">
            Sélectionnez vos plats{" "}
            <span className="text-stone-400 text-xs">
              (plusieurs choix possibles)
            </span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {platsDisponibles.map((plat) => (
              <button
                key={plat.id}
                type="button"
                onClick={() => handlePlatToggle(plat.id)}
                className={`px-4 py-2 text-sm font-delius border-b-2 transition-all ${
                  formData.selectedPlats.includes(plat.id)
                    ? "border-teal-800 text-teal-700 bg-teal-50/30"
                    : "border-teal-700 text-teal-800 hover:border-teal-400"
                }`}
              >
                {plat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Additional Message - Full width */}
        <div className="md:col-span-2 space-y-2">
          <label className="block text-stone-700 font-delius text-sm">
            Message ou demandes spéciales
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Allergies, régimes spéciaux, suggestions de menu, etc."
            rows={3}
            className="w-full px-4 py-3 border-b-2 border-stone-200 bg-transparent font-delius text-stone-700 text-sm focus:border-teal-500 focus:outline-none transition-colors resize-none"
          />
          <p className="text-xs text-stone-400 text-right">
            {formData.message.length}/300 caractères
          </p>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="button"
        onClick={openWhatsApp}
        className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-teal-500 hover:bg-teal-600 text-white font-delius font-medium transition-colors group"
      >
        <FaWhatsapp className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span>Envoyer la demande sur WhatsApp</span>
        <span className="text-teal-100 text-sm ml-2">→</span>
      </button>

      {/* Footer note */}
      <p className="text-xs text-stone-400 text-center mt-4">
        Vous serez redirigé vers WhatsApp avec toutes les informations de votre
        demande
      </p>
    </div>
  );
}
