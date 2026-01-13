import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

{
  /*
    main: list pokemon information and locations 
    secondary: list pokemon stats and moves
    */
}

{
  /* Type Definitions */
}

type PokemonDetail = {
  id: number;
  name: string;
  abilities: {
    ability: {
      name: string;
    };
  }[];
  moves: {
    move: {
      name: string;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
      showdown: {
        front_default: string;
      };
    };
  };
};

type PokemonLocations = {
  location_area: {
    name: string;
  };
};

{
  /* Fetch API data */
}
async function getPokemonDetails(name: string): Promise<PokemonDetail> {
  const pokemonDetail = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );
  if (!pokemonDetail.ok) {
    notFound();
  }
  const data = await pokemonDetail.json();
  return data;
}

async function getPokemonLocations(name: string): Promise<PokemonLocations[]> {
  const pokemonLocations = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name}/encounters`
  );
  if (!pokemonLocations.ok) {
    notFound();
  }
  const data = await pokemonLocations.json();
  return data;
}

{
  /* Main Component */
}
{
  /* This component is responsible for displaying the details of a specific Pokémon. */
}

export default async function PokemonDetails({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const pokemon: PokemonDetail = await getPokemonDetails((await params).name);
  const locations: PokemonLocations[] = await getPokemonLocations(
    (
      await params
    ).name
  );

  {
    /* Format the results */
  }
  return (
    <main className="flex flex-col items-center min-h-screen p-6 text-base sm:text-xl">
      <Link
        href="/Pokemons"
        className="p-3 mb-4 transition-all duration-300 bg-red-300 border-4 rounded-xl hover:bg-green-300 hover:text-green-800 hover:underline"
      >
        ⇦ Back
      </Link>

      <div className="w-full max-w-3xl p-6 space-y-6 bg-red-300 border-4 shadow-2xl rounded-xl shadow-red-300">
        <div className="text-center">
          <Image
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
            width={300}
            height={300}
            className="mx-auto"
          />
          <h1 className="mt-2 text-3xl font-bold capitalize">{pokemon.name}</h1>
        </div>

        <div className="grid gap-4 transition-all sm:grid-cols-2">
          {/* Stats Box */}
          <div className="p-4 transition-all duration-500 bg-red-200 border shadow-md rounded-xl hover:bg-red-100">
            <h2 className="text-lg font-bold underline sm:text-xl underline-offset-4">
              Stats
            </h2>
            <ul className="mt-2 space-y-1">
              {pokemon.stats.map((stat, i) => (
                <li key={i} className="font-medium uppercase">
                  {stat.stat.name}: {stat.base_stat}
                </li>
              ))}
            </ul>
          </div>

          {/* Abilities */}
          <details className="p-4 transition-all duration-500 bg-red-200 border shadow-md rounded-xl group hover:bg-red-100">
            <summary className="flex items-center justify-between cursor-pointer">
              <span className="font-bold underline transition-all underline-offset-5 hover:text-green-400">
                Abilities
              </span>
              <span className="transition-transform transform group-open:rotate-90">
                ▶
              </span>
            </summary>
            <p className="mt-2 text-sm text-gray-700">
              Click on an ability to learn more:
            </p>
            <ul className="mt-1 space-y-1 list-disc list-inside">
              {pokemon.abilities.map((ability, index) => (
                <li
                  key={index}
                  className="capitalize transition-all duration-300 hover:underline hover:text-green-400 w-fit hover:scale-105"
                >
                  <Link
                    href={`https://pokemondb.net/ability/${ability.ability.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {ability.ability.name}
                  </Link>
                </li>
              ))}
            </ul>
          </details>

          {/* Encounter Locations */}
          <details
            className={`p-4 transition-all duration-500 bg-red-200 border shadow-md rounded-xl group hover:bg-red-100 ${
              locations.length === 0 ? "hidden" : ""
            }`}
          >
            <summary className="flex items-center justify-between cursor-pointer">
              <span className="font-bold underline underline-offset-4">
                Encounter Locations
              </span>
              <span
                className="transition-transform transform group-open:rotate-90"
                aria-hidden="true"
              >
                ▶
              </span>
            </summary>
            <ul className="mt-1 space-y-1 list-disc list-inside">
              {locations.map((location, index) => (
                <li
                  key={index}
                  className="capitalize duration-300 hover:underline hover:text-green-600"
                >
                  {location.location_area.name}
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>
    </main>
  );
}
