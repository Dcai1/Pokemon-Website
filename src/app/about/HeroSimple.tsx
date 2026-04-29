export default function HeroSimple() {
  return (
    <section className="w-full text-center py-14 sm:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-rose-700">
          Pokéweb
        </h1>

        <p className="max-w-2xl mx-auto mt-4 text-base sm:text-lg text-rose-600 leading-relaxed">
          A calm, focused interface to explore Pokémon data across regions.
        </p>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="#about-this-website"
            className="inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-rose-500 text-white font-semibold shadow hover:translate-y-[-2px] transition-transform text-sm sm:text-base"
          >
            About this site
          </a>

          <a
            href="#about-me"
            className="inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white text-rose-700 border border-rose-200 hover:bg-white/95 transition text-sm sm:text-base"
          >
            About me
          </a>
        </div>
      </div>
    </section>
  );
}
