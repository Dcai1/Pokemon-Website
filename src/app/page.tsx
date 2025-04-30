import Link from "next/link";

export default function Home() {

  return (
    <main className="flex flex-col p-10 text-center text-shadow-lg text-shadow-white mx-auto my-auto bg-gradient-to-b from-red-100 via-white to-red-300 min-h-screen">

      <div
      className="bg-gradient-to-br from-red-200 via-red-200 to-red-300 rounded-3xl p-6 shadow-lg shadow-red-400 max-w-full mx-auto my-auto items-center justify-center">

      <h1 className="w-fit mx-auto font-bold text-7xl mb-15 animate-pulse transition-all duration-500 my-6 hover:scale-200 text-shadow-lg text-shadow-red-700">
        Welcome!</h1>

    <div className="mx-auto m-6 hover:scale-105 transition-all duration-1000 bg-gradient-to-br from-red-200 via-red-100 to-red-300 rounded-xl shadow-lg shadow-white">
        <p className="text-2xl font-semibold text-red-500 p-6 text-shadow-lg text-shadow-red-300">
          A simple Pokémon list listing various Pokémons from many different regions.
          Click on the Pokémon name to view more details.<br />
          Navigate to the Pokémon section to view a variety of Pokémon, or <Link href="/Pokemons" className="underline hover:scale-150 hover:text-green-400 transition-all">
            click here.</Link>
        </p>


        <p className="text-xl sm:text-2xl font-semibold text-red-500 p-6 text-shadow-lg text-shadow-red-300">
          The Pokémon data is acquired from the <Link href="https://pokeapi.co/" target="_blank" className="underline hover:scale-150 hover:text-green-400 transition-all">
            PokéAPI.</Link>
        </p>

        <p className="text-xl sm:text-2xl font-semibold text-red-500 p-6 text-shadow-lg text-shadow-red-300">
          The project is open source and the code is available on <Link href="https://github.com/Dcai1/Pokemon-Website" target="_blank" className="underline hover:scale-150 hover:text-green-400 transition-all">my GitHub.</Link>
        </p>
      </div>

      <footer className="text-center mt-6 hover:scale-130 duration-500 transition-all bg-gradient-to-br from-yellow-100 via-white to-yellow-300 inline-block rounded-full shadow-xl shadow-yellow-300">
        <p className="font-bold text-xl sm:text-2xl text-black p-6 text-shadow-lg text-shadow-yellow-400">
        ⚠️ This project is not affiliated with Pokémon (company) or Nintendo. ⚠️
        </p>
      </footer>

      </div>

    </main>
    
  );
}
