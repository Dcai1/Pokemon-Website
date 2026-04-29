import Link from "next/link";

export default function AboutThisWebsite() {
  return (
    <section
      id="about-this-website"
      className="max-w-6xl mx-auto my-8 px-4 sm:px-6"
    >
      <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-rose-800">
        About This Website
      </h2>

      <div className="space-y-4 text-rose-700 leading-relaxed">
        <p className="text-base sm:text-lg">
          This is a simple Pokémon site that displays various Pokémon from
          different regions in the games.
        </p>

        <p className="text-base sm:text-lg">
          It was started alone as a passion project.
        </p>

        <p className="text-base sm:text-lg">
          It calls and uses an{" "}
          <Link
            href={"https://pokeapi.co/"}
            target="_blank"
            className="underline hover:text-rose-500"
            rel="noopener noreferrer"
          >
            API
          </Link>{" "}
          to load Pokémon and their details.
        </p>

        <p className="text-base sm:text-lg">
          The current functions of this website lists Pokémon on their
          respective pages. Clicking on one will display their details including
          their types, abilities, and locations.
        </p>

        <p className="text-base sm:text-lg">
          If additional information is required, such as move descriptions or
          generally more information, a link to the Pokémon Database is
          provided.
        </p>

        <p className="inline-block mt-4 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-rose-700 font-semibold text-sm">
          This project was built using Next.js, React, TypeScript, Tailwind, and
          many other libraries.
        </p>
      </div>
    </section>
  );
}
