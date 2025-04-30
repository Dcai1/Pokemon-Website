"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import PageButton from "../components/page_button";
import SearchBar from "../components/searchbar";

type PokemonDetails = {
    id: number,
    name: string,
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

export default function Pokemon() {
    const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails[]>([]);
    const [loading, setLoading] = useState(true);

    const [offset, setOffset] = useState(0);
    const [searchedPokemon, setSearchedPokemon] = useState("");
    const [pokemonNotFound, setPokemonNotFound] = useState(false);

    






    // Fetch API data

    useEffect(() => {
        async function fetchPokemon() {
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=40`);
            const result = await data.json();

            const details = await Promise.all(
                result.results.map(async (pokemon: { name: string; url: string }) => {
                    const res = await fetch(pokemon.url);
                    return await res.json();
                })
        );

        setPokemonDetails(details);
        setLoading(false);

    };

    fetchPokemon();

    }, [offset]); 

    // Functions that handle page-changing events
    function handleNextPage() {
        setLoading(true)
        setOffset(offset + 40);
        setLoading(false)
    };

    function handlePrevPage() {
        setLoading(true)
        if (offset > 0) {
            setOffset(offset - 40);
        } else {
            setOffset(0);
        }
        setLoading(false)

    };

    // Function that handles search-bar logic
    async function handleSearch() {
        if (!searchedPokemon) {return;}

        const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchedPokemon.toLowerCase()}`);
        if (!result.ok) {
            setSearchedPokemon("");
            setPokemonNotFound(true);
        }
            const data = await result.json();
            setPokemonDetails([data]);
            setPokemonNotFound(false);
            setSearchedPokemon("");
    };
    

    // Loading screen handler
    if (loading) {
        return (        
        <div className="items-center mx-auto flex w-fit min-h-screen">
            <p className="font-bold transition-all animate-bounce text-center text-3xl">Loading Pokémons... hang tight!</p>
        </div>
        )
    };


    // Main page render
    return (
        <main className="p-8 text-shadow-lg shadow-red-300 text-shadow-red-300 bg-gradient-to-b from-red-100 via-white to-red-300">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl text font-bold mb-6">Pokémon Menu</h1>

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
                <div className="mx-auto items-center justify-center transition-all flex flex-col border-4 rounded-3xl mb-6 shadow-xl shadow-red-600 bg-red-200">
                    <h1 className="p-3 text-4xl sm:text-5xl font-bold text-center text-red-600">Pokémon Not Found</h1>
                    <p className="p-6 text-center text-lg text-gray-700">Sorry, we couldn&apos;t find the Pokémon you were looking for.</p>
                </div>
            )}

    {/* Render Pokémon list */}

            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"> 
                {pokemonDetails.map((pokemon) => {
                    return (
                <li key={pokemon.id} className="border rounded-lg p-4 text-center shadow-md hover:scale-110 transition-all duration-300 bg-gradient-to-br from-red-200 via-red-100 to-red-300 shadow-red-400">

                    <div className="w-fit relative mx-auto group">
                    <Image
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                    unoptimized
                    className="mx-auto transition-opacity duration-300 group-hover:opacity-0"/>

                    <Image
                    src={pokemon.sprites.front_shiny}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                    unoptimized
                    className="mx-auto transition-opacity opacity-0 duration-300 group-hover:opacity-100 absolute inset-0"/>

                    </div>
                    
                <h2 className="text-xl mt-2 capitalize">
                    <Link href={`/pokemon/${pokemon.name}`} className="hover:underline ">
                        {pokemon.name}
                    </Link>
                </h2>

                <p className="text-md text-gray-500 italic">
              {pokemon.types.map((t) => t.type.name).join(", ")}
            </p>
            </li>
                );
            })} 
            </ul>

            <div className="flex justify-center m-8 pt-6 gap-8">
                <PageButton onClick={handlePrevPage} 
                label="Previous Page" 
                disabled={offset === 0}/>

                <PageButton onClick={handleNextPage} 
                label="Next Page"/>
            </div>



            
            <footer className="bg-gradient-to-br from-red-200 via-red-300 to-red-500 hover:scale-101 transition-all border shadow-lg duration-500 rounded-full my-8">
                <p className="m-auto text-lg text-red-600 p-6 text-shadow-lg text-shadow-white">Note: Hover over a Pokémon&apos;s Image to view their Shiny variant!</p>
            </footer>
        </main>
    );



};