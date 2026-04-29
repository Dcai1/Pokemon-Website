"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import PageButton from "../components/page_button";
import SearchBar from "../components/searchbar";
import Footer from "../components/Footer";

type PokemonDetails = {
  id: number;
  name: string;
  sprites: {
    front_default: string;
    front_shiny: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
};

export default function PokemonPage() {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails[]>([]);
  const [loading, setLoading] = useState(true);

  const [offset, setOffset] = useState(0);
  const [searchedPokemon, setSearchedPokemon] = useState("");
  const [pokemonNotFound, setPokemonNotFound] = useState(false);

  // Fetch API data

  useEffect(() => {
    async function fetchPokemon() {
      const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=40`,
      );
      const result = await data.json();

      const details = await Promise.all(
        result.results.map(async (pokemon: { name: string; url: string }) => {
          const res = await fetch(pokemon.url);
          return await res.json();
        }),
      );

      setPokemonDetails(details);
      setLoading(false);
    }

    fetchPokemon();
  }, [offset]);

  // Functions that handle page-changing events
  function handleNextPage() {
    setLoading(true);
    setOffset(offset + 40);
    setLoading(false);
  }

  function handlePrevPage() {
    setLoading(true);
    if (offset > 0) {
      setOffset(offset - 40);
    } else {
      setOffset(0);
    }
    setLoading(false);
  }

  // Function that handles search-bar logic
  async function handleSearch() {
    if (!searchedPokemon) {
      return;
    }

    const result = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${searchedPokemon.toLowerCase()}`,
    );
    if (!result.ok) {
      setSearchedPokemon("");
      setPokemonNotFound(true);
    }
    const data = await result.json();
    setPokemonDetails([data]);
    setPokemonNotFound(false);
    setSearchedPokemon("");
  }

  // Loading screen handler
  if (loading) {
    return (
      <div className="flex items-center min-h-screen mx-auto text-center min-w-screen">
        <p className="mx-auto text-3xl font-bold text-white transition-all animate-bounce">
          Loading Pokémons... hang tight!
        </p>
      </div>
    );
  }

  // Main page render
  return (
    <main className="p-8 pb-24 text-shadow-lg shadow-red-300 text-shadow-red-300 gradient-bg">
      {/* Search Bar */}
      <SearchBar
        onClick={handleSearch}
        onChange={(value) => setSearchedPokemon(value)}
        disabled={!searchedPokemon || searchedPokemon === ""}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />

      {/* Error page for incorrect search result */}
      {pokemonNotFound && (
        <div className="flex flex-col items-center justify-center mx-auto mb-6 border-2 shadow-xl bg-gradient-to-br from-rose-100 via-red-300 to-red-100 rounded-3xl">
          <h1 className="p-3 text-2xl font-bold text-center text-rose-500 sm:text-4xl">
            Pokémon Not Found
          </h1>
          <p className="p-3 text-sm text-center text-black lg:text-lg">
            Sorry, we couldn&apos;t find the Pokémon you were looking for.
            Double check your spelling and try again.
          </p>
        </div>
      )}

      {/* Render Pokémon list */}

      <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {pokemonDetails.map((pokemon) => {
          return (
            <li
              key={pokemon.id}
              className="p-4 text-center transition-all duration-300 rounded-lg shadow-sm shadow-rose-300 hover:shadow-xl hover:-translate-y-2 hover:shadow-rose-200 bg-gradient-to-br from-white-50 via-rose-100 to-white-50"
            >
              {/* Image */}
              <div className="relative mx-auto w-fit group">
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                  unoptimized
                  className="mx-auto transition-opacity duration-300 group-hover:opacity-0"
                />
                {/* Shiny Image */}
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                  unoptimized
                  className="absolute inset-0 mx-auto transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                />
              </div>

              {/* Pokemon Name */}
              <h2 className="mt-2 text-lg capitalize sm:text-xl">
                <Link
                  href={`/pokemon/${pokemon.name}`}
                  className="hover:underline "
                  rel="noopener noreferrer"
                >
                  {pokemon.name}
                </Link>
              </h2>

              {/* Pokemon Types */}
              <p className="italic text-gray-500 text-md">
                {pokemon.types.map((t) => t.type.name).join(", ")}
              </p>
            </li>
          );
        })}
      </ul>

      <div className="flex justify-center gap-8 pt-6 m-8">
        <PageButton
          onClick={handlePrevPage}
          label="Previous Page"
          disabled={offset === 0}
        />

        <PageButton onClick={handleNextPage} label="Next Page" />
      </div>

      <Footer />
    </main>
  );
}
