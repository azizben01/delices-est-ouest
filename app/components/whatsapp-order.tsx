"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "+25769641051"; // Replace with your business number

type Props = {
  productName: string;
  unitPrice: number;
  priceLabel: string;
};

export default function WhatsAppOrder({
  productName,
  unitPrice,
  priceLabel,
}: Props) {
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  const total = unitPrice * quantity;

  function openWhatsApp() {
    const text = [
      `Bonjour, je souhaite commander:`,
      `*Produit:* ${productName}`,
      `*Quantité:* ${quantity}`,
      `*Prix total:* ${total} FCFA (${priceLabel} × ${quantity})`,
      message ? `*Message:* ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="p-6 md:p-8 max-w-4xl mx-auto">
      {/* Price - Full width */}
      <div className="mb-8 text-center md:text-left">
        <p className="text-stone-600 font-delius text-sm mb-2">Prix unitaire</p>
        <p className="text-3xl font-delius text-stone-800 font-medium">
          {priceLabel}
        </p>
      </div>

      {/* Two columns form layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
        {/* Left Column - Quantity */}
        <div>
          <label className="block text-stone-700 font-delius text-sm mb-2">
            Quantité <span className="text-teal-600">*</span>
          </label>
          <input
            type="number"
            min={1}
            value={quantity}
            onChange={(e) =>
              setQuantity(Math.max(1, parseInt(e.target.value, 10) || 1))
            }
            className="w-full px-4 py-3 border-b-2 border-stone-200 bg-transparent font-delius text-teal-700 text-lg focus:border-teal-500 focus:outline-none transition-colors"
            placeholder="Saisissez la quantité"
          />
          <p className="text-xs text-stone-400 mt-1">Minimum: 1</p>
        </div>

        {/* Right Column - Total (moved up here) */}
        <div className="flex items-end pb-3">
          <div>
            <p className="text-stone-500 font-delius text-xs mb-1">
              Total estimé
            </p>
            <p className="text-2xl font-delius font-semibold text-stone-800">
              {total}{" "}
              <span className="text-base font-normal text-stone-500">FCFA</span>
            </p>
          </div>
        </div>

        {/* Full width - Message field spanning both columns */}
        <div className="md:col-span-2">
          <label className="block text-stone-700 font-delius text-sm mb-2">
            Message (optionnel)
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Instructions ou remarques pour votre commande (allergies, préférences, etc.)..."
            rows={2}
            className="w-full px-4 py-3 border-b-2 border-stone-200 bg-transparent font-delius text-teal-700 text-sm focus:border-teal-500 focus:outline-none transition-colors resize-none"
          />
          <p className="text-xs text-stone-400 mt-1 text-right">
            {message.length}/200 caractères
          </p>
        </div>
      </div>

      {/* WhatsApp Button - Clean, full width */}
      <button
        type="button"
        onClick={openWhatsApp}
        className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-teal-500 hover:bg-teal-600 text-white font-delius font-medium rounded-sm transition-colors group"
      >
        <FaWhatsapp className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span>Commander via WhatsApp</span>
        <span className="text-teal-100 text-sm ml-2">→</span>
      </button>

      {/* Small note */}
      <p className="text-xs text-stone-400 text-center mt-4">
        Vous serez redirigé vers WhatsApp pour finaliser votre commande
      </p>
    </div>
  );
}
