import Link from "next/link";
import Image from "next/image";
import CateringForm from "../components/cateringForm";

const traiteurImages = [
  {
    src: "/Images/image1.jpeg",
    alt: "Présentation traiteur",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    src: "/Images/image2.jpeg",
    alt: "Pâtisseries et accompagnements",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    src: "/Images/image3.jpeg",
    alt: "Charcuterie et fruits",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    src: "/Images/image4.jpeg",
    alt: "Desserts et créations",
    colSpan: 3,
    rowSpan: 2,
  },
  {
    src: "/Images/image5.jpeg",
    alt: "Assortiment gourmand",
    colSpan: 3,
    rowSpan: 2,
  },
  {
    src: "/Images/image6.jpeg",
    alt: "Buffet traiteur",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    src: "/Images/image7.jpeg",
    alt: "Présentation événement",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    src: "/Images/image8.jpeg",
    alt: "Spécialités maison",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    src: "/Images/image9.jpeg",
    alt: "Service traiteur",
    colSpan: 3,
    rowSpan: 2,
  },
  {
    src: "/Images/image10.jpeg",
    alt: "Tarte et douceurs",
    colSpan: 3,
    rowSpan: 2,
  },
];

export default function ServiceTraiteurPage() {
  return (
    <section className="min-h-screen py-8 px-4 md:px-12 lg:px-20 bg-sky-50">
      <div className="max-w-7xl mx-auto">
        {/* Header with logo and nav - consistent with products page */}
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
              className="hover:text-teal-500 transition-colors border-b-2 border-b-teal-500"
            >
              Accueil
            </Link>
            <Link
              href="/products"
              className="hover:text-teal-500 transition-colors border-b-2 border-b-teal-500"
            >
              Nos Produits
            </Link>
            {/* <Link
              href="/service-traiteur"
              className="hover:text-teal-500 transition-colors border-b-2 border-b-teal-500"
            >
              Service Traiteur
            </Link> */}
            <Link
              href="/contact"
              className="hover:text-teal-500 transition-colors border-b-2 border-b-teal-500"
            >
              Contact
            </Link>
          </nav>
        </div>

        <h1 className="text-2xl md:text-3xl font-delius text-teal-700 text-center mb-2">
          Service Traiteur
        </h1>
        <p className="text-center text-teal-700 font-delius text-sm md:text-base max-w-xl mx-auto mb-10">
          Découvrez nos créations et présentations pour vos événements
        </p>

        {/* Mosaic grid: 3 + 2 + 3 + 2 layout (like reference) */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-3 auto-rows-[140px] md:auto-rows-[180px]">
          {traiteurImages.map((item, i) => (
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
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
            </div>
          ))}
        </div>
        <CateringForm />
      </div>
    </section>
  );
}
