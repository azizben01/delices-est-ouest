"use client";

import { useMemo, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "+25769641051";

type Variant = { id: string; label: string; unitPrice: number };

type Props = {
  productName: string;
};

export default function PimentForm({ productName }: Props) {
  const variants: Variant[] = useMemo(
    () => [
      {
        id: "piment",
        label: "Piment de table grillé et assaisonné",
        unitPrice: 20000,
      },
      { id: "rachideBeurre", label: "Beurre d'arachide", unitPrice: 25000 },
    ],
    [],
  );

  const [quantities, setQuantities] = useState<Record<string, number>>(() =>
    Object.fromEntries(variants.map((v) => [v.id, 0])),
  );
  const [message, setMessage] = useState("");

  const selected = useMemo(
    () =>
      variants
        .map((v) => ({ ...v, qty: quantities[v.id] ?? 0 }))
        .filter((v) => v.qty > 0),
    [quantities, variants],
  );

  const totalItems = useMemo(
    () => selected.reduce((sum, v) => sum + v.qty, 0),
    [selected],
  );
  const total = useMemo(
    () => selected.reduce((sum, v) => sum + v.unitPrice * v.qty, 0),
    [selected],
  );

  function setQty(id: string, next: number) {
    const safe = Number.isFinite(next) ? Math.max(0, Math.floor(next)) : 0;
    setQuantities((prev) => ({ ...prev, [id]: safe }));
  }

  function toggleVariant(id: string) {
    setQuantities((prev) => ({ ...prev, [id]: (prev[id] ?? 0) > 0 ? 0 : 1 }));
  }

  function openWhatsApp() {
    const itemsLines =
      selected.length === 0
        ? ["- (Aucun article sélectionné)"]
        : selected.map(
            (v) =>
              `- ${v.label} × ${v.qty} (${v.unitPrice} FBU) = ${
                v.unitPrice * v.qty
              } FBU`,
          );

    const text = [
      `Bonjour, je souhaite commander:`,
      `*Produit:* ${productName}`,
      `*Articles:*`,
      ...itemsLines,
      `*Nombre total:* ${totalItems}`,
      `*Prix total:* ${total} FBU`,
      message ? `*Message:* ${message}` : "",
      `-----`,
      `Envoyé depuis le site Délice Est Out`,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-delius font-medium text-stone-800 mb-2">
          Selectionnez votre commande
        </h2>
      </div>

      <div className="space-y-3 mb-8">
        <label className="block text-stone-700 font-delius text-sm">
          Sélectionnez vos articles{" "}
          <span className="text-stone-400 text-xs">
            (cliquez pour sélectionner, puis ajustez la quantité)
          </span>
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {variants.map((v) => {
            const qty = quantities[v.id] ?? 0;
            const active = qty > 0;
            return (
              <div
                key={v.id}
                className={`border-b-2 pb-3 transition-colors ${
                  active ? "border-teal-500" : "border-stone-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleVariant(v.id)}
                  className={`w-full text-left px-4 py-2 font-delius text-sm transition-all ${
                    active
                      ? "text-teal-800 bg-teal-50"
                      : "text-stone-700 hover:bg-stone-50"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span>{v.label}</span>
                    <span className="text-xs text-stone-500">
                      {v.unitPrice} FBU
                    </span>
                  </div>
                </button>

                <div className="px-4 pt-2 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setQty(v.id, qty - 1)}
                    disabled={!active}
                    className="w-9 h-9 border border-stone-200 text-stone-700 disabled:opacity-40"
                    aria-label={`Diminuer ${v.label}`}
                  >
                    −
                  </button>
                  <input
                    type="number"
                    min={0}
                    value={qty}
                    onChange={(e) =>
                      setQty(v.id, parseInt(e.target.value, 10) || 0)
                    }
                    className="w-20 px-3 py-2 border-b-2 border-stone-200 bg-transparent font-delius text-teal-700 text-sm focus:border-teal-500 focus:outline-none transition-colors"
                    aria-label={`Quantité pour ${v.label}`}
                  />
                  <button
                    type="button"
                    onClick={() => setQty(v.id, qty + 1)}
                    className="w-9 h-9 border border-stone-200 text-stone-700"
                    aria-label={`Augmenter ${v.label}`}
                  >
                    +
                  </button>

                  <div className="ml-auto text-right">
                    <p className="text-xs text-stone-500 font-delius">
                      Sous-total
                    </p>
                    <p className="text-sm font-delius text-stone-800">
                      {v.unitPrice * qty} FBU
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-end justify-between border-t border-stone-100 pt-4">
          <div>
            <p className="text-stone-500 font-delius text-xs mb-1">
              Total articles
            </p>
            <p className="text-lg font-delius text-stone-800">{totalItems}</p>
          </div>
          <div className="text-right">
            <p className="text-stone-500 font-delius text-xs mb-1">
              Total estimé
            </p>
            <p className="text-2xl font-delius font-semibold text-stone-800">
              {total}{" "}
              <span className="text-base font-normal text-stone-500">FBU</span>
            </p>
          </div>
        </div>

        <div className="space-y-2 pt-4">
          <label className="block text-stone-700 font-delius text-sm">
            Message (optionnel)
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Allergies, préférences, instructions de livraison, etc."
            rows={3}
            className="w-full px-4 py-3 border-b-2 border-stone-200 bg-transparent font-delius text-stone-700 text-sm focus:border-teal-500 focus:outline-none transition-colors resize-none"
          />
          <p className="text-xs text-stone-400 text-right">
            {message.length}/300 caractères
          </p>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="button"
        onClick={openWhatsApp}
        disabled={totalItems === 0}
        className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-teal-500 hover:bg-teal-600 disabled:bg-stone-300 disabled:hover:bg-stone-300 disabled:cursor-not-allowed text-white font-delius font-medium transition-colors group"
      >
        <FaWhatsapp className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span>Commander via WhatsApp</span>
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
