import { BsTiktok } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
const TIKTOK_URL = "https://www.tiktok.com/@delices"; // e.g. https://www.tiktok.com/@yourusername
const PHONE_NUMBER = "+25769641051"; // E.164 format for tel: link
const WHATSAPP_NUMBER = "+25769641051"; // Replace with your business number

function openWhatsApp() {
  const text = [
    `Bonjour, je souhaite avoir plus d'informations sur vos produits.`,
  ]
    .filter(Boolean)
    .join("\n");
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export default function ContactCta() {
  return (
    <section className="w-full flex-1 flex flex-col justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-9 bg-sky-50 min-h-0">
      <div className="max-w-2xl mx-auto">
        {/* <p className="text-center text-gray-600 text-sm sm:text-base mb-6">
          Suivez-nous et contactez-nous
        </p> */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
          <a
            href={TIKTOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 sm:gap-3 px-5 py-3.5 sm:px-6 sm:py-2 rounded-xl text-teal-700 font-medium text-sm sm:text-base border b-teal-700 hover:bg-teal-900 hover:text-white transition-colors shadow-md hover:shadow-lg min-h-[48px]"
          >
            <BsTiktok className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
            <span>TikTok</span>
          </a>
          <a
            href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
            className="inline-flex items-center justify-center gap-2 sm:gap-3 px-5 py-3.5 sm:px-6 sm:py-2 rounded-xl text-amber-500 font-bold font-garamond text-sm sm:text-base border b-amber-500 hover:text-white hover:bg-amber-600 transition-colors shadow-md hover:shadow-lg min-h-[48px]"
          >
            <FaWhatsapp
              onClick={openWhatsApp}
              className="w-5 h-5 sm:w-6 sm:h-6 shrink-0"
            />
            <span>Whatsapp</span>
          </a>
        </div>
        <p className="text-center text-teal-900 text-xl sm:text-xl mt-4 font-delius">
          Disponibilité immédiate par téléphone ou via nos réseaux sociaux.
        </p>
      </div>
    </section>
  );
}
