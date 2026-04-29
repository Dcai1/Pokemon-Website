import Image from "next/image";
import Link from "next/link";
import StatsCard from "./StatsCard";
import AbilitiesCard from "./AbilitiesCard";
import EncountersCard from "./EncountersCard";
import type { PokemonDetail, PokemonLocations } from "./types";

export default function PokemonDetailLayout({
  pokemon,
  locations,
}: {
  pokemon: PokemonDetail;
  locations: PokemonLocations;
}) {
  const artwork =
    pokemon.sprites?.other?.["official-artwork"]?.front_default ||
    pokemon.sprites?.front_default ||
    "/images/pokeball.png";

  const TYPE_STYLES: Record<
    string,
    { gradient: string; dot: string; pillBg: string; pillText: string }
  > = {
    electric: {
      gradient: "bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200",
      dot: "bg-yellow-500",
      pillBg: "bg-yellow-50",
      pillText: "text-yellow-800",
    },
    fire: {
      gradient: "bg-gradient-to-br from-red-50 via-red-100 to-red-200",
      dot: "bg-red-500",
      pillBg: "bg-red-50",
      pillText: "text-red-800",
    },
    water: {
      gradient: "bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200",
      dot: "bg-blue-500",
      pillBg: "bg-blue-50",
      pillText: "text-blue-800",
    },
    grass: {
      gradient: "bg-gradient-to-br from-green-50 via-green-100 to-green-200",
      dot: "bg-green-500",
      pillBg: "bg-green-50",
      pillText: "text-green-800",
    },
    psychic: {
      gradient:
        "bg-gradient-to-br from-fuchsia-50 via-fuchsia-100 to-fuchsia-200",
      dot: "bg-fuchsia-500",
      pillBg: "bg-fuchsia-50",
      pillText: "text-fuchsia-800",
    },
    rock: {
      gradient: "bg-gradient-to-br from-amber-50 via-amber-100 to-amber-200",
      dot: "bg-amber-700",
      pillBg: "bg-amber-50",
      pillText: "text-amber-800",
    },
    bug: {
      gradient: "bg-gradient-to-br from-lime-50 via-lime-100 to-lime-200",
      dot: "bg-lime-500",
      pillBg: "bg-lime-50",
      pillText: "text-lime-800",
    },
    ghost: {
      gradient: "bg-gradient-to-br from-violet-50 via-violet-100 to-violet-200",
      dot: "bg-violet-500",
      pillBg: "bg-violet-50",
      pillText: "text-violet-800",
    },
    fairy: {
      gradient: "bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200",
      dot: "bg-pink-500",
      pillBg: "bg-pink-50",
      pillText: "text-pink-800",
    },
    poison: {
      gradient: "bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200",
      dot: "bg-purple-500",
      pillBg: "bg-purple-50",
      pillText: "text-purple-800",
    },
    dragon: {
      gradient: "bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-200",
      dot: "bg-indigo-500",
      pillBg: "bg-indigo-50",
      pillText: "text-indigo-800",
    },
    flying: {
      gradient: "bg-gradient-to-br from-sky-50 via-sky-100 to-sky-200",
      dot: "bg-sky-500",
      pillBg: "bg-sky-50",
      pillText: "text-sky-800",
    },
    default: {
      gradient: "bg-gradient-to-br from-rose-50 via-rose-100 to-rose-200",
      dot: "bg-rose-500",
      pillBg: "bg-rose-50",
      pillText: "text-rose-800",
    },
  };

  const primaryType =
    pokemon.types && pokemon.types.length > 0
      ? pokemon.types[0].type.name
      : "default";
  const accent = TYPE_STYLES[primaryType] || TYPE_STYLES.default;

  return (
    <main className="flex flex-col items-center min-h-screen p-6 space-x-3">
      <Link
        href="/pokemon"
        className="p-3 mb-4 transition-all duration-300 border-2 rounded-xl bg-rose-200 hover:bg-rose-300"
      >
        ⇦ Back
      </Link>

      <div className="w-full max-w-5xl p-6 space-y-6">
        <div className="flex flex-col items-start gap-6 md:flex-row">
          <aside className="flex flex-col items-start flex-shrink-0 w-full text-left md:w-80 lg:w-96 md:sticky md:top-24">
            <div className="p-4 rounded-xl bg-gradient-to-br from-rose-50 via-rose-100 to-rose-200 glass">
              <Image
                src={artwork}
                alt={pokemon.name}
                width={280}
                height={280}
                unoptimized
              />
            </div>
            <h1 className="mt-4 text-3xl font-bold capitalize">
              {pokemon.name}
            </h1>
            {pokemon.types && (
              <div className="flex flex-wrap gap-2 mt-3">
                {pokemon.types.map((t, i) => {
                  const style = TYPE_STYLES[t.type.name] || TYPE_STYLES.default;
                  return (
                    <span
                      key={i}
                      className={`${style.pillBg} ${style.pillText} inline-flex items-center px-3 py-1 rounded-full text-sm shadow-sm capitalize`}
                    >
                      {t.type.name}
                    </span>
                  );
                })}
              </div>
            )}
          </aside>

          <section className="flex-1">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <StatsCard
                  stats={pokemon.stats}
                  accentClass={accent.gradient}
                  dotClass={accent.dot}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <AbilitiesCard
                  abilities={pokemon.abilities}
                  accentClass={accent.gradient}
                  dotClass={accent.dot}
                />
                <EncountersCard
                  locations={locations}
                  accentClass={accent.gradient}
                  dotClass={accent.dot}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
