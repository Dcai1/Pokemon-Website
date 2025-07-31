import Link from "next/link";

export default function About() {
  return (
    <main className="bg-[url('/images/pokeball-background.png')] bg-size-[75px] flex flex-col min-h-screen p-10 mx-auto text-center text-shadow-lg text-shadow-white bg-red-400 bg-blend-overlay">
      <div className="max-w-6xl p-6 mx-auto my-auto text-center transition-all duration-1000 border-2 border-red-300 shadow-lg sm:border-0 hover:scale-105 bg-gradient-to-br from-red-400 via-red-300 to-red-400 rounded-3xl shadow-red-400 text-shadow-lg text-shadow-white">
        <h1 className="p-5 mx-auto mb-6 font-bold text-center transition-all bg-red-400 shadow-2xl sm:text-4xl md:text-6xl rounded-3xl hover:scale-120 w-fit shadow-red-500 bg-gradient-to-br from-white via-yellow-100 to-yellow-400">
          About This Website
        </h1>

        <div className="p-6 space-y-1 text-red-500 border shadow-xl sm:text-2xl text-shadow-lg text-shadow-red-300 bg-gradient-to-br from-red-300 via-red-200 to-red-300 rounded-xl shadow-red-300">
          <p>
            This is a simple Pokémon site that displays various Pokémons from
            different regions in the games.
          </p>
          <p className="p-6">I started it alone as a passion project.</p>

          <p>
            It calls and uses an{" "}
            <Link
              href={"https://pokeapi.co/"}
              target="_blank"
              className="underline transition-all hover:text-green-400"
              rel="noopener noreferrer"
            >
              {" "}
              API
            </Link>{" "}
            to load Pokémons and their details.
          </p>

          <p>
            The current functions of this website lists Pokémon on their
            respective pages. Clicking on one will display their details
            including their types, abilities, and locations.
          </p>
          <p>
            If additional information is required, such as move descriptions or
            generally more information, a link to the Pokémon Database is
            provided.
          </p>

          <p className="p-3 mx-auto mt-6 font-bold transition-all duration-1000 border-4 shadow-2xl hover:bg-green-400 hover:scale-110 bg-gradient-to-br from-red-100 via-red-200 to-red-400 w-fit rounded-2xl shadow-red-500">
            This project was built using Next.js, React, TypeScript, and
            Tailwind.
          </p>
        </div>
      </div>
    </main>
  );
}
