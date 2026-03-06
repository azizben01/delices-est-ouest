"use client";
import Link from "next/link";
import Image from "next/image";
import WhatsAppOrder from "../components/whatsapp-order";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { TiThMenu } from "react-icons/ti";

const images = [
  {
    src: "/Images/arachidebottle.jpg",
    alt: "Arachides fraîches",
    colSpan: 2,
    rowSpan: 1,
  },
  { src: "/Images/image5.jpeg", alt: "Arachides", colSpan: 2, rowSpan: 1 },
  { src: "/Images/image1.jpeg", alt: "Présentation", colSpan: 2, rowSpan: 2 },
  {
    src: "/Images/image2.jpeg",
    alt: "Arachides fraîches",
    colSpan: 2,
    rowSpan: 2,
  },
];

export default function Snack1Page() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <section className="min-h-screen py-8 px-4 md:px-12 lg:px-20 bg-sky-50">
      <div className="max-w-7xl mx-auto">
        <div className="mx-4 sm:mx-6 md:mx-8 flex items-center justify-between max-w-7xl md:mx-auto md:px-4 relative">
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
              className="hover:text-teal-500 transition-colors border-b-2 border-b-teal-500 "
            >
              Accueil
            </Link>
            <Link
              href="/products"
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

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden text-gray-700"
            aria-label="Ouvrir le menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              {mobileOpen ? <RxCross1 /> : <TiThMenu />}
            </svg>
          </button>

          {/* Mobile dropdown menu */}
          {mobileOpen && (
            <div className="absolute left-0 right-0 top-full mt-2 md:hidden bg-white shadow-lg rounded-lg py-3 px-4 space-y-2 text-teal-700 font-delius">
              <Link
                href="/"
                className="block py-1 border-b border-sky-100 last:border-b-0"
                onClick={() => setMobileOpen(false)}
              >
                Accueil
              </Link>
              {/* <Link
                href="/products"
                className="block py-1 border-b border-sky-100 last:border-b-0"
                onClick={() => setMobileOpen(false)}
              >
                Nos Produits
              </Link> */}
              <Link
                href="/service-traiteur"
                className="block py-1 border-b border-sky-100 last:border-b-0"
                onClick={() => setMobileOpen(false)}
              >
                Service Traiteur
              </Link>
              <Link
                href="/contact"
                className="block py-1"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>
            </div>
          )}
        </div>

        <h1 className="text-2xl py-10 md:text-3xl font-delius text-teal-700 text-center mb-2">
          Arachides fraîches
        </h1>
        <p className="text-center text-teal-700 font-delius text-sm md:text-base max-w-xl mx-auto mb-10">
          Nos arachides fraîches, sélectionnées pour leur qualité et leur goût
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 auto-rows-[140px] md:auto-rows-[180px] mb-12">
          {images.map((item, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-lg bg-stone-300 min-h-[140px] md:min-h-0"
              style={{
                gridColumn: `span ${item.colSpan}`,
                gridRow: `span ${item.rowSpan}`,
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>

        <WhatsAppOrder
          productName="Arachides fraîches"
          unitPrice={1500}
          priceLabel="1500 FCFA"
        />
      </div>
    </section>
  );
}
