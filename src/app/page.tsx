import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to Pokéweb",
  description:
    "A Pokémon site fetching and listing various pokémon from every region. Click on pokémon names to view more information.",
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-10 mx-auto my-auto text-base text-center min-w-auto text-shadow-lg text-shadow-white">
      <div className="items-center justify-center w-full max-w-5xl p-6 mx-auto my-auto shadow-lg min-w-auto bg-gradient-to-br from-red-300 via-red-400 to-red-300 rounded-3xl shadow-red-400">
        <h1 className="m-3 mx-auto text-3xl font-bold transition-all duration-500 w-fit sm:text-4xl animate-pulse hover:scale-200 text-shadow-lg text-shadow-red-700">
          Welcome!
        </h1>
        <div className="m-6 mx-auto transition-all duration-1000 shadow-lg sm:text-2xl hover:scale-105 bg-gradient-to-br from-red-300 via-red-200 to-red-300 rounded-xl shadow-white">
          <p className="p-6 text-red-500 text-shadow-lg text-shadow-red-300">
            A simple Pokémon site listing various Pokémons from many different
            regions. Click on the Pokémon name to view more details.
            <br />
            Navigate to the Pokémon section to view a variety of Pokémon, or{" "}
            <Link
              href="/Pokemons"
              className="underline transition-all hover:scale-150 hover:text-green-400"
              rel="noopener noreferrer"
            >
              click here.
            </Link>
          </p>

          <p className="p-6 font-semibold text-red-500 text-shadow-lg text-shadow-red-300">
            The Pokémon data is acquired from the{" "}
            <Link
              href="https://pokeapi.co/"
              target="_blank"
              className="underline transition-all hover:scale-150 hover:text-green-400"
              rel="noopener noreferrer"
            >
              PokéAPI.
            </Link>
          </p>

          <p className="p-6 font-semibold text-red-500 sm:text-2xl text-shadow-lg text-shadow-red-300">
            The project is open source and available on{" "}
            <Link
              href="https://github.com/Dcai1/Pokemon-Website"
              target="_blank"
              className="underline transition-all hover:scale-150 hover:text-green-400"
              rel="noopener noreferrer"
            >
              my GitHub.
            </Link>
          </p>
        </div>

        <footer className="inline-block mt-6 text-center transition-all duration-500 rounded-full shadow-xl hover:scale-110 bg-gradient-to-br from-yellow-100 via-white to-yellow-300 shadow-yellow-300">
          <p className="p-6 font-bold text-black sm:text-2xl text-shadow-lg text-shadow-yellow-400">
            ⚠️ This project is not affiliated with Pokémon (company) or
            Nintendo. ⚠️
          </p>
        </footer>
      </div>
    </main>
  );
}
