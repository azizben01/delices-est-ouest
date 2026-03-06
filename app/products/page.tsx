import Link from "next/link";
import Image from "next/image";

const products = [
  {
    name: "A base d'arachide",
    description: "Cacahuètes grillées à la perfection, salées ou nature",
    image: "/Images/image5.jpeg",
    price: "1500 FCFA",
  },
  {
    name: "A base de coco",
    description: "Noix de cajou croquantes, légèrement salées",
    image: "/products/cajou.jpg",
    price: "2500 FCFA",
  },
  {
    name: "A base de gingembre",
    description: "Croquettes épicées au gingembre frais",
    image: "/products/gingembre.jpg",
    price: "1000 FCFA",
  },
];

export default function Products() {
  return (
    <section className="min-h-screen py-5 px-4 md:px-12 lg:px-20 bg-sky-50">
      <div className="max-w-7xl mx-auto">
        <div className="mx-4 sm:mx-6 md:mx-8 flex justify-between max-w-7xl md:mx-auto md:px-4 pb-15">
          {/* Logo */}
          <Image
            src="/Images/logo2bg.png"
            height={150}
            width={150}
            alt="Delices"
            className="object-contain w-auto h-12 sm:h-16 md:h-20"
          />

          {/* Navigation - Right side - Hidden on mobile, visible on desktop */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-teal-700 text-sm lg:text-base font-delius">
            <Link
              href="/"
              className="hover:text-teal-500 transition-colors border-b-2 border-b-teal-500"
            >
              Accueil
            </Link>
            {/* <Link
              href="/produits"
              className="hover:text-teal-500 transition-colors border-b-2 border-b-teal-500"
            >
              Nos Produits
            </Link> */}
            <Link
              href="/service-traiteur"
              className="hover:text-teal-500 transition-colors border-b-2 border-b-teal-500 "
            >
              Service Traiteur
            </Link>
            <Link
              href="/contact"
              className="hover:text-teal-500 transition-colors border-b-2 border-b-teal-500 "
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button - Simple for now */}
          <button className="md:hidden text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <p className="text-md lg:text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto font-delius text-teal-700">
          Découvrez la diversiter de nos produits des amuses-bouches au service
          traiteur pour vos evements
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Arachides fraîches */}
          <Link
            href="/snack1"
            className="relative h-64 rounded-lg overflow-hidden group"
          >
            <img
              src="/Images/arachidebottle.jpg"
              alt="Arachides fraîches"
              className="w-full h-full object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all"></div>

            {/* Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold text-center">
                Arachides fraîches
              </h3>
            </div>
          </Link>

          {/* Arachides grillées */}
          <Link
            href="/snack2"
            className="relative h-64 rounded-lg overflow-hidden group"
          >
            <img
              src="/Images/image8.jpeg"
              alt="Arachides grillées"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold text-center">
                Arachides grillées
              </h3>
            </div>
          </Link>

          {/* Croquettes */}
          <Link
            href="/service-traiteur"
            className="relative h-64 rounded-lg overflow-hidden group"
          >
            <img
              src="/Images/traiteur.jpg"
              alt="Croquettes"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold text-center">
                Service Traiteur
              </h3>
            </div>
          </Link>
          <Link
            href="/snack3"
            className="relative h-64 rounded-lg overflow-hidden group"
          >
            <img
              src="/Images/image2.jpeg"
              alt="Pate d'arachide"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold text-center">
                Pate d'arachide
              </h3>
            </div>
          </Link>
          <Link
            href="/snack4"
            className="relative h-64 rounded-lg overflow-hidden group"
          >
            <img
              src="/Images/image11.jpeg"
              alt="Gari"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold text-center">
                Gari
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
