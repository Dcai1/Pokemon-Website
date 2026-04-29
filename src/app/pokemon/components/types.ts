export type PokemonStat = {
  base_stat: number;
  stat: { name: string };
};

export type PokemonAbility = { ability: { name: string } };

export type PokemonSprites = {
  other?: {
    "official-artwork"?: { front_default?: string };
    showdown?: { front_default?: string };
  };
  front_default?: string;
  front_shiny?: string;
};

export type PokemonDetail = {
  id: number;
  name: string;
  abilities: PokemonAbility[];
  moves?: { move: { name: string } }[];
  stats: PokemonStat[];
  sprites: PokemonSprites;
  types?: { type: { name: string } }[];
};

export type PokemonLocation = { location_area: { name: string } };
export type PokemonLocations = PokemonLocation[];
