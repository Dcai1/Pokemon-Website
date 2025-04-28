import Link from "next/link";
import Image from "next/image";

{/*
    main: list pokemon information and locations 
    secondary: list pokemon stats and moves
    */}

type PokemonDetail = {
    id: number,
    name: string,
    abilities: {
        ability: {
            name: string;
        }
    }[];
    moves: {
        move: {
            name: string;
        }
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

{/* Fetch API data */}
async function getPokemonDetails(name: string) {
    const pokemonDetail = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return pokemonDetail.json();
}

async function getPokemonLocations(name: string) {
    const pokemonLocations = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/encounters`)
    return pokemonLocations.json();
}

export default async function PokemonDetails({params}: {params: {name: string}}) {
    const pokemon: PokemonDetail = await getPokemonDetails(params.name);
    const locations: PokemonLocations[] = await getPokemonLocations(params.name);

    {/* Format the results */}
    return (
        <div className="min-h-screen bg-gradient-to-b from-red-100 via-white to-red-300 p-6">
        <main className="max-w-6xl p-8 flex flex-col lg:flex-row gap-10 items-center justify-center mx-auto transition-all bg-gradient-to-b from-red-400 via-red-300 to-white rounded-xl shadow-xl shadow-red-300">

        <div>
            <Image 
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={params.name}
            width={400}
            height={400}
            className="max-w-xs rounded-xl shadow-xl shadow-red-400 m-8"/>
        </div>


            {/* Main Pokémon Information */}
            <div className="bg-red-200 p-10 overflow-hidden rounded-3xl shadow-lg shadow-red-500 font-bold max-w-full text-white text-shadow-lg text-shadow-red-900  transition-all">
            
            <div className="hover:scale-110 duration-500 transition-all">
                <h1 
                className="capitalize text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 p-6 text-center bg-red-100 rounded-3xl shadow-2xl shadow-white bg-gradient-to-br from-red-100 to-red-300">


                    <Image 
                        src={pokemon.sprites.other.showdown.front_default}
                        alt={params.name} 
                        width={300}
                        height={300}
                        unoptimized
                        className="w-fit mx-auto p-3 bg-red-50 rounded-full shadow-lg shadow-white bg-gradient-to-br from-red-300 via-red-200 to-white transition-all hover:scale-120"
                    />
                    {params.name}

                </h1>

                </div>

                    <Link href={`https://pokemondb.net/pokedex/${params.name}`} 
                    className="flex items-center justify-center p-6 underline hover:text-green-400 hover:scale-125 duration-300 transition-all w-fit mx-auto"
                    target="_blank">
                        View Pokémon Database Information</Link>



                {/* Ability Section */}
                <div
                className="flex flex-col rounded-3xl hover:scale-110 duration-500 transition-all bg-red-100 p-3 m-3 mb-6 shadow-lg shadow-red-400 bg-gradient-to-br from-red-200 to-red-300">

                    <h2 className="text-4xl sm:text-5xl lg:text-5xl m-6 font-bold underline underline-offset-8">
                        Abilities: </h2>
                
                    <ul className="m-4">
                        {pokemon.abilities.map((move, index) => (
                        
                            <li key={index} className="text-xl sm:text-2xl capitalize m-4 transition-all font-semibold">
                                <Link 
                                key={index}
                                href={`https://pokemondb.net/ability/${move.ability.name}`}
                                className="hover:text-green-400 hover:scale-130 transition-all inline-block"
                                target="_blank">
                                    {move.ability.name}
                                    </Link>
                                </li>
                        ))}
                    </ul>
                </div>

                {/* Base Stats Section */}

                <div className="flex flex-col hover:scale-110 duration-500 transition-all rounded-3xl bg-red-100 p-3 m-3 mb-6 shadow-lg shadow-red-400 bg-gradient-to-br from-red-200 to-red-400">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl m-6 mb-10 font-bold underline underline-offset-8">
                        Base Stats:</h2>
                    <ul>
                        {pokemon.stats.map((stats, index) => (
                            <li key={index} className="uppercase font-semibold m-3">
                            {stats.stat.name}: {stats.base_stat}
                            </li>
                        ))}
                    </ul>

                </div>

                {/* Moves Section */}
                <div 
                className="flex flex-col hover:scale-101 duration-500 transition-all rounded-3xl bg-red-100 p-3 m-3 mb-6 shadow-lg shadow-red-400 bg-gradient-to-br from-red-400 to-green-200">
                    <h2 className="capitalize text-3xl sm:text-4xl lg:text-5xl m-6 font-bold underline underline-offset-8">
                        {params.name}&apos;s Learnable Moves:</h2>
                    <ul>
                    {pokemon.moves.map((moves, index) => (
                        

                        <li key={index} className="text-xl sm:text-2xl capitalize m-4 font-semibold list-disc list-inside">
                            <Link 
                            key={index} 
                            href={`https://pokemondb.net/move/${moves.move.name}`}
                            className="hover:text-green-400 hover:scale-130 transition-all inline-block"
                            target="_blank">
                            {moves.move.name}
                            </Link>
                            </li>
                        ))}
                    </ul>
                </div>





                {/* Encounters Section */}   
                <div 
                className="flex flex-col hover:scale-110 duration-500 transition-all rounded-3xl bg-red-100 p-3 m-3 mb-6 shadow-lg shadow-red-400 bg-gradient-to-br from-red-400 to-green-200">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl m-6 font-bold underline underline-offset-8">Encounter Locations:</h2>
                    <ul>
                        {locations.length > 0 ? (
                            locations.map((location, index) => (
                                <li key={index} className="capitalize list-decimal list-inside m-4">
                                    {location.location_area.name}
                                </li>   
                            ))
                        ) : <li className=" text-red-600 text-shadow p-6 font-bold">No encounter locations available!</li>
                        }
                    </ul>
                </div>


            </div>
        </main>
        </div>
    )


}