import InfoCard from "./InfoCard";

type Ability = { ability: { name: string } };

export default function AbilitiesCard({
  abilities,
  accentClass,
  dotClass,
}: {
  abilities: Ability[];
  accentClass?: string;
  dotClass?: string;
}) {
  return (
    <InfoCard title="Abilities" className={accentClass} dotClass={dotClass}>
      <div className="mt-2 flex flex-wrap gap-3">
        {abilities.map((a, i) => (
          <a
            key={i}
            href={`https://pokemondb.net/ability/${a.ability.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1 bg-rose-50 text-rose-800 rounded-full text-sm shadow-sm hover:scale-105 transition-transform capitalize focus:outline-none focus:ring-2 focus:ring-rose-200"
          >
            {a.ability.name}
          </a>
        ))}
      </div>
    </InfoCard>
  );
}
