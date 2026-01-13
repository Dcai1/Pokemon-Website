import { Metadata } from "next";
import PokemonPage from "./pokemonpage";

export const metadata: Metadata = {
  title: "Pokémon Lookup",
  description:
    "Search and view a wide variety of Pokémon, fetched and displayed using the PokéAPI.",
};

export default function Pokemon() {
  return <PokemonPage />;
}
