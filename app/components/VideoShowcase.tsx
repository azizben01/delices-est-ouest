"use client";

export default function VideoShowcase() {
  return (
    <section className="my-14 md:my-20">
      <div className="relative overflow-hidden bg-sky-50 ring-1">
        <div className="relative aspect-video w-full max-w-4xl mx-auto">
          <video
            src="/videos/video1.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full lg:h-full object-cover pb-10 rounded-2xl"
            aria-label="Présentation des créations traiteur"
          />
        </div>

        <div className="relative aspect-video w-full max-w-4xl mx-auto">
          <video
            src="/videos/video2.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full lg:h-full object-cover pb-10 rounded-2xl"
            aria-label="Présentation des créations traiteur"
          />
        </div>

        {/* Subtle border accent */}
        <div className="absolute inset-0 rounded-2xl ring-2 ring-inset ring-white/5 pointer-events-none" />
      </div>
    </section>
  );
}
