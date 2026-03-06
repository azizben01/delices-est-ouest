// app/page.tsx
import Hero from "./components/hero";
import ContactCta from "./components/contact-cta";

export default function Home() {
  return (
    <main className="min-h-screen min-h-[100dvh] w-full overflow-x-hidden flex flex-col">
      <Hero />
      <ContactCta />
    </main>
  );
}
