import Link from "next/link";
import Image from "next/image";
import WhatsAppOrder from "../components/whatsapp-order";

const images = [
  {
    src: "/Images/image8.jpeg",
    alt: "Arachides grillées",
    colSpan: 2,
    rowSpan: 1,
  },
  { src: "/Images/image6.jpeg", alt: "Grillées", colSpan: 2, rowSpan: 1 },
  { src: "/Images/image3.jpeg", alt: "Présentation", colSpan: 2, rowSpan: 2 },
  {
    src: "/Images/image7.jpeg",
    alt: "Arachides grillées",
    colSpan: 2,
    rowSpan: 2,
  },
];

export default function Snack2Page() {
  return (
    <section className="min-h-screen py-8 px-4 md:px-12 lg:px-20 bg-sky-50">
      <div className="max-w-8xl mx-auto">
        <div className="flex justify-between items-center max-w-7xl mx-auto pb-8 md:pb-12">
          <Link href="/">
            <Image
              src="/Images/logo2bg.png"
              height={150}
              width={150}
              alt="Délices"
              className="object-contain w-auto h-12 sm:h-16 md:h-20"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-teal-700 text-sm lg:text-base font-delius">
            <Link
              href="/"
              className="hover:text-teal-500 border-b-2 border-b-teal-500"
            >
              Accueil
            </Link>
            <Link
              href="/products"
              className="hover:text-teal-500 border-b-2 border-b-teal-500"
            >
              Nos Produits
            </Link>
            <Link
              href="/service-traiteur"
              className="hover:text-teal-500 border-b-2 border-b-teal-500"
            >
              Service Traiteur
            </Link>
            <Link
              href="/contact"
              className="hover:text-teal-500 border-b-2 border-b-teal-500"
            >
              Contact
            </Link>
          </nav>
        </div>

        <h1 className="text-2xl md:text-3xl font-delius text-teal-800 text-center mb-2">
          Arachides grillées
        </h1>
        <p className="text-center text-teal-700 font-delius text-sm md:text-base max-w-xl mx-auto mb-10">
          Arachides grillées à la perfection, salées ou nature, pour un encas
          savoureux
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
          productName="Arachides grillées"
          unitPrice={1800}
          priceLabel="1800 FCFA"
        />
      </div>
    </section>
  );
}
