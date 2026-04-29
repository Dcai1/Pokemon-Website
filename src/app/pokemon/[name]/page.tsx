import { notFound } from "next/navigation";
import PokemonDetailLayout from "../components/PokemonDetailLayout";
import type { PokemonDetail, PokemonLocations } from "../components/types";

async function getPokemonDetails(name: string): Promise<PokemonDetail> {
  const pokemonDetail = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name}`,
  );
  if (!pokemonDetail.ok) {
    notFound();
  }
  const data = await pokemonDetail.json();
  return data;
}

async function getPokemonLocations(name: string): Promise<PokemonLocations> {
  const pokemonLocations = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name}/encounters`,
  );
  if (!pokemonLocations.ok) {
    notFound();
  }
  const data = await pokemonLocations.json();
  return data;
}

export default async function PokemonDetails({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const pokemon: PokemonDetail = await getPokemonDetails((await params).name);
  const locations: PokemonLocations = await getPokemonLocations(
    (await params).name,
  );

  return <PokemonDetailLayout pokemon={pokemon} locations={locations} />;
}
