import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-20 px-4 md:px-12 lg:px-20 bg-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
            {/* Placeholder for her photo */}
            <div className="absolute inset-0 bg-amber-200 flex items-center justify-center text-amber-600">
              [Photo de la fondatrice]
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Notre <span className="text-amber-600">Histoire</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              C'est avec passion que je prépare chaque jour des snacks
              traditionnels qui rappellent les saveurs authentiques de
              l'Afrique. De l'arachide grillée au fromage peulh, en passant par
              le tapioca et les croquettes de gingembre, chaque recette est un
              héritage familial.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Ce que vous voyez sur TikTok, c'est mon quotidien : préparer avec
              amour des mets qui réunissent les gens autour de la table.
              Aujourd'hui, je vous ouvre les portes de ma cuisine pour que vous
              puissiez commander directement et profiter de ces délices chez
              vous.
            </p>

            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">15+</div>
                <div className="text-sm text-gray-600">Snacks différents</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">1000+</div>
                <div className="text-sm text-gray-600">Clients satisfaits</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">5 ans</div>
                <div className="text-sm text-gray-600">D'expérience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
