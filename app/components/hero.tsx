// app/components/Hero.tsx
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* Top White Bar with Logo and Navigation */}
      <div className="bg-sky-50 py-3 top-0 z-20">
        <div className="mx-4 sm:mx-6 md:mx-8 flex items-center justify-between max-w-7xl md:mx-auto md:px-4">
          {/* Logo */}
          <Image
            src="/images/logo2bg.png"
            height={150}
            width={150}
            alt="Delices"
            className="object-contain w-auto h-12 sm:h-16 md:h-20"
          />

          {/* Navigation - Right side - Hidden on mobile, visible on desktop */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-teal-700 text-sm lg:text-base font-delius">
            <Link
              href="/"
              className="hover:text-teal-500 transition-colors border-b-2 border-b-teal-500 "
            >
              Accueil
            </Link>
            <Link
              href="/produits"
              className="hover:text-teal-500 transition-colors border-b-2 border-b-teal-500"
            >
              Nos Produits
            </Link>
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
      </div>

      {/* Hero Image Section - Responsive */}
      <div
        className="relative w-full overflow-hidden bg-cover bg-center aspect-[4/3] min-h-[280px] sm:aspect-video sm:min-h-[320px] md:aspect-[21/7] md:min-h-[380px]"
        style={{ backgroundImage: "url('/Images/bg6.jpg')" }}
      >
        {/* Gray overlay */}
        <div className="absolute inset-0 bg-gray-950/15 backdrop-blur-[1px]" />

        {/* Text - responsive size and spacing */}
        <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 md:bottom-10 md:left-10 lg:bottom-16 lg:left-12 xl:bottom-20 xl:left-16 text-white z-10 max-w-2xl">
          <p className="text-[10px] min-[380px]:text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.3em] mb-1 sm:mb-2 font-light opacity-95">
            GASTRONOMIE AFRICAINE
          </p>
          <h1 className="text-2xl font-garamond min-[380px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-2 sm:mb-3 md:mb-4">
            L'art de la cuisine
            <br />
            Est-Ouest
          </h1>

          <Link
            href="/products"
            className="inline-flex items-center justify-center border-2 border-white px-3 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-xs sm:text-sm md:text-base text-white font-bold font-garamond hover:bg-white hover:text-gray-900 transition-colors"
          >
            Découvrir nos Produits →
          </Link>
        </div>

        {/* Gradient for text legibility */}
        <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 md:h-28 lg:h-32 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
    </>
  );
}
