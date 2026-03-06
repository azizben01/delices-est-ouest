import Link from "next/link";

export default function TraiteurPreview() {
  return (
    <section className="py-20 px-4 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Service <span className="text-amber-600">Traiteur</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Vous organisez un événement ? Mariage, anniversaire, réunion
              d'entreprise ou fête familiale ? Notre service traiteur vous
              propose des plats traditionnels de l'Afrique de l'Ouest et de
              l'Est, préparés avec passion par notre équipe.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <svg
                  className="h-6 w-6 text-amber-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">
                  Menus personnalisés selon vos goûts
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  className="h-6 w-6 text-amber-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">
                  Plats traditionnels authentiques
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  className="h-6 w-6 text-amber-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">
                  Service pour 10 à 500 personnes
                </span>
              </div>
            </div>

            <Link
              href="/service-traiteur"
              className="inline-flex items-center bg-amber-500 text-white px-8 py-3 rounded-full hover:bg-amber-600 transition-colors"
            >
              <span className="mr-2">Demander un devis</span>
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {/* Right side - WhatsApp CTA */}
          <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
            <div className="text-center">
              <div className="inline-block p-4 bg-green-500 rounded-full mb-6">
                <svg
                  className="h-12 w-12 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.011 2.002C6.172 2.002 1.366 6.784 1.366 12.59c0 2.158.618 4.172 1.682 5.905L2.02 21.934l3.538-1.002c1.72.98 3.684 1.542 5.76 1.542 5.84 0 10.646-4.782 10.646-10.588 0-5.805-4.805-10.588-10.647-10.588l-.006.004zm6.064 15.16c-.292.82-1.704 1.502-2.79 1.586-.742.058-1.468-.13-2.13-.534-.674-.412-1.55-.956-2.774-1.736-2.51-1.6-4.16-4.446-4.384-4.868-.22-.422-1.047-1.858-1.047-3.544 0-1.685.83-2.52 1.134-2.868.304-.35.664-.44.886-.44.222 0 .444.002.64.012.206.01.482-.078.75.57.292.71.998 2.438 1.086 2.616.088.178.146.384.03.62-.118.237-.176.384-.352.592-.176.208-.37.464-.53.624-.176.178-.36.37-.154.726.206.356.92 1.514 1.97 2.448 1.354 1.2 2.496 1.572 2.85 1.748.354.176.56.146.768-.088.208-.234.886-1.026 1.122-1.378.236-.352.472-.294.796-.176.324.118 2.058.966 2.412 1.142.354.176.59.264.678.41.088.146.088.846-.204 1.666z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Contactez-nous directement
              </h3>
              <p className="text-gray-600 mb-6">
                Pour une réponse rapide, contactez-nous sur WhatsApp pour
                discuter de vos besoins traiteur
              </p>
              <a
                href="https://wa.me/221XXXXXXXXX?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20votre%20service%20traiteur%20pour%20un%20%C3%A9v%C3%A9nement"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-colors text-lg font-semibold"
              >
                <svg
                  className="h-6 w-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.011 2.002C6.172 2.002 1.366 6.784 1.366 12.59c0 2.158.618 4.172 1.682 5.905L2.02 21.934l3.538-1.002c1.72.98 3.684 1.542 5.76 1.542 5.84 0 10.646-4.782 10.646-10.588 0-5.805-4.805-10.588-10.647-10.588l-.006.004zm6.064 15.16c-.292.82-1.704 1.502-2.79 1.586-.742.058-1.468-.13-2.13-.534-.674-.412-1.55-.956-2.774-1.736-2.51-1.6-4.16-4.446-4.384-4.868-.22-.422-1.047-1.858-1.047-3.544 0-1.685.83-2.52 1.134-2.868.304-.35.664-.44.886-.44.222 0 .444.002.64.012.206.01.482-.078.75.57.292.71.998 2.438 1.086 2.616.088.178.146.384.03.62-.118.237-.176.384-.352.592-.176.208-.37.464-.53.624-.176.178-.36.37-.154.726.206.356.92 1.514 1.97 2.448 1.354 1.2 2.496 1.572 2.85 1.748.354.176.56.146.768-.088.208-.234.886-1.026 1.122-1.378.236-.352.472-.294.796-.176.324.118 2.058.966 2.412 1.142.354.176.59.264.678.41.088.146.088.846-.204 1.666z" />
                </svg>
                WhatsApp : 221 XX XXX XX XX
              </a>
              <p className="text-sm text-gray-500 mt-4">
                Disponible 7j/7 de 9h à 20h
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
