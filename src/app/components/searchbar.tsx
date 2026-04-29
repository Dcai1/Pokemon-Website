"use client";

type SearchProps = {
  onClick: () => void;
  onChange: (value: string) => void;
  disabled?: boolean;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export default function SearchBar({
  onClick,
  onChange,
  disabled,
  onKeyDown,
}: SearchProps) {
  return (
    <div className="items-center justify-center max-w-5xl p-3 mx-auto mb-8 overflow-hidden transition-all duration-300 border border-gray-200 rounded-4xl glass">
      <div className="flex justify-center w-full">
        <input
          type="text"
          name="q"
          aria-label="Search Pokémon"
          placeholder="Search Pokémon... (e.g. Pikachu)"
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={onKeyDown}
          className="w-full max-w-2xl p-3 m-6 text-lg font-medium text-center transition-all duration-200 bg-white border-2 outline-none sm:text-xl rounded-xl focus:scale-105 focus:border-rose-400"
        />
      </div>

      <div className="flex items-center justify-center gap-8">
        <button
          type="button"
          aria-label="Reset search"
          className="p-3 px-6 mt-3 mb-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-lg shadow-sm hover:scale-105 active:scale-95 hover:bg-gray-50"
          onClick={() => window.location.reload()}
        >
          Reset
        </button>

        <button
          type="button"
          aria-label="Execute search"
          className={`mt-3 mb-3 p-3 px-6 border border-rose-500 transition text-white sm:text-base bg-rose-500 rounded-lg duration-200 
                ${
                  disabled
                    ? "opacity-60 cursor-not-allowed grayscale"
                    : "hover:opacity-95 hover:scale-105 active:scale-95"
                }`}
          onClick={onClick}
        >
          Search
        </button>
      </div>
    </div>
  );
}
